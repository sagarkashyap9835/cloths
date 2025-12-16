

import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import { AppContext } from "../pages/Appcontext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = () => {
  const { addToCart } = useContext(CartContext);
  const { backendUrl, searchTerm, setSearchTerm } = useContext(AppContext);
  
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [priceRange, setPriceRange] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${backendUrl}/api/product/all`);
        setProducts(res.data.products || []);
        setFilteredProducts(res.data.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [backendUrl]);

  useEffect(() => {
    let filtered = [...products];
    if (searchTerm) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (priceRange) {
      filtered = filtered.filter((p) => p.price >= priceRange.min && p.price <= priceRange.max);
    }
    if (sortOrder === "lowToHigh") filtered.sort((a, b) => a.price - b.price);
    else if (sortOrder === "highToLow") filtered.sort((a, b) => b.price - a.price);

    setFilteredProducts(filtered);
  }, [searchTerm, products, priceRange, sortOrder]);

  const ranges = [
    { label: "All", min: 0, max: Infinity },
    { label: "Under 500", min: 0, max: 500 },
    { label: "500-1k", min: 500, max: 1000 },
    { label: "1k-2k", min: 1000, max: 2000 },
  ];

  return (
    <div className="p-3 sm:p-10 bg-white min-h-screen pt-24 md:pt-32">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-6 md:mb-12 px-2">
        <h1 className="text-3xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase italic">
          New <span className="text-red-600">Trends</span>
        </h1>
        <p className="text-[10px] md:text-xs text-gray-400 mt-1 font-bold tracking-[0.2em]">RAJA FASHION HOUSE // 2024</p>
      </div>

      {/* 💰 Responsive Filters - Horizontal Scroll on Mobile */}
      <div className="flex overflow-x-auto pb-4 gap-2 mb-6 no-scrollbar px-2 sm:justify-center">
        {ranges.map((range, idx) => (
          <button
            key={idx}
            onClick={() => setPriceRange(range.label === "All" ? null : { min: range.min, max: range.max })}
            className={`flex-shrink-0 px-5 py-2 text-[10px] md:text-xs font-black rounded-full border-2 transition-all duration-300 ${
              (priceRange?.min === range.min && range.label !== "All") || (range.label === "All" && !priceRange)
                ? "bg-black text-white border-black"
                : "bg-white text-gray-900 border-gray-100"
            }`}
          >
            {range.label}
          </button>
        ))}
      </div>

      {/* 🛍 Products Grid - 2 Columns on Mobile, 4 on Desktop */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-20">
            <div className="w-10 h-10 border-4 border-gray-100 border-t-red-600 rounded-full animate-spin"></div>
        </div>
      ) : filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product._id} product={product} addToCart={addToCart} index={index} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-gray-400">No styles found.</p>
        </div>
      )}

      <ToastContainer position="bottom-center" autoClose={1500} hideProgressBar theme="dark" />
      
      {/* CSS for hiding scrollbar and animations */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          opacity: 0;
          animation: fade-in-up 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

// --- Responsive Product Card Component ---
const ProductCard = ({ product, addToCart, index }) => (
  <div 
    className="group relative animate-fade-in-up flex flex-col h-full" 
    style={{ animationDelay: `${index * 0.05}s` }}
  >
    {/* Image Container */}
    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl md:rounded-[2.5rem] bg-gray-50">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      
      {/* Mobile-Friendly Add Button */}
      <button
        className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-md p-2 rounded-full shadow-lg md:hidden"
        onClick={() => addToCart(product)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>

      {/* Desktop Buy Overlay */}
      <div className="hidden md:flex absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-end p-4">
        <button
          className="w-full bg-white text-black py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-black hover:text-white transition-all"
          onClick={() => addToCart(product)}
        >
          Add To Bag
        </button>
      </div>
    </div>

    {/* Content Area */}
    <div className="mt-3 px-1 flex flex-col flex-grow text-center md:text-left">
      <h2 className="text-[13px] md:text-lg font-bold text-gray-900 leading-tight line-clamp-1">
        {product.name}
      </h2>
      <p className="text-[10px] text-gray-400 mt-0.5 font-medium uppercase tracking-tighter italic">
        Fashion Collection
      </p>
      
      <div className="mt-auto pt-2 flex items-center justify-center md:justify-start gap-2">
        <span className="text-sm md:text-xl font-black text-gray-900">₹{product.price}</span>
        <span className="text-[10px] md:text-sm text-gray-300 line-through">₹{Math.round(product.price * 1.4)}</span>
      </div>
    </div>
  </div>
);

export default Product;