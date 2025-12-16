

import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import { AppContext } from "../pages/Appcontext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = () => {
  const { addToCart } = useContext(CartContext);
  const { backendUrl, searchTerm } = useContext(AppContext);
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
    { label: "Under 200", min: 0, max: 200 },
    { label: "200 - 500", min: 200, max: 500 },
    { label: "500 - 1000", min: 500, max: 1000 },
    { label: "Over 1000", min: 1000, max: 99999 },
  ];

  return (
    <div className="p-6 sm:p-10 bg-[#fbfbfb] min-h-screen pt-24 md:pt-32">
      {/* Header Section */}
      <div className="text-center mb-12 animate-fade-in-down">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-2 uppercase tracking-tighter">
          Exclusive <span className="text-blue-600">Collection</span>
        </h1>
        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      {/* 💰 Modern Range Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {ranges.map((range, idx) => (
          <button
            key={idx}
            onClick={() => setPriceRange(range.label === "All" ? null : { min: range.min, max: range.max })}
            className={`px-6 py-2 rounded-full text-sm font-bold border-2 transition-all duration-300 transform active:scale-95 ${
              priceRange?.min === range.min && priceRange?.max === range.max
                ? "bg-black text-white border-black shadow-lg"
                : "bg-white text-gray-600 border-gray-100 hover:border-blue-400 hover:text-blue-600 shadow-sm"
            }`}
          >
            {range.label}
          </button>
        ))}
      </div>

      {/* ↕️ Soft Sort Buttons */}
      <div className="flex justify-center gap-4 mb-12">
        <button 
            onClick={() => setSortOrder("lowToHigh")} 
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${sortOrder === "lowToHigh" ? "text-blue-600" : "text-gray-400 hover:text-gray-900"}`}
        >
          Low To High ↑
        </button>
        <span className="text-gray-200">|</span>
        <button 
            onClick={() => setSortOrder("highToLow")} 
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${sortOrder === "highToLow" ? "text-blue-600" : "text-gray-400 hover:text-gray-900"}`}
        >
          High To Low ↓
        </button>
      </div>

      {/* 🛍 Products Grid */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
        </div>
      ) : filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product._id} product={product} addToCart={addToCart} index={index} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-2xl text-gray-400 font-light">No products matched your search ☹️</p>
        </div>
      )}
      
      <ToastContainer position="bottom-right" autoClose={2000} />

      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-card {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

const ProductCard = ({ product, addToCart, index }) => (
  <div 
    style={{ animationDelay: `${index * 0.1}s` }}
    className="animate-card opacity-0 group bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 transform hover:-translate-y-2 border border-gray-50"
  >
    {/* Image Container */}
    <div className="relative overflow-hidden bg-[#f9f9f9] aspect-square flex items-center justify-center p-8">
        <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110" 
        />
        {/* Quick Add Overlay */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="bg-white text-black text-xs font-black px-4 py-2 rounded-full shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform">VIEW DETAIL</span>
        </div>
    </div>

    {/* Details */}
    <div className="p-6 text-center">
      <p className="text-[10px] font-black text-blue-500 uppercase tracking-[0.2em] mb-1">New Trend</p>
      <h2 className="text-lg font-bold text-gray-800 line-clamp-1 mb-2 group-hover:text-blue-600 transition-colors">
        {product.name}
      </h2>
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="text-xl font-black text-gray-900">₹{product.price}</span>
        <span className="text-sm text-gray-400 line-through font-light">₹{Math.round(product.price * 1.3)}</span>
      </div>
      
      <button 
        className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold text-sm hover:bg-blue-600 shadow-lg hover:shadow-blue-200 transition-all duration-300 active:scale-95"
        onClick={() => addToCart(product)}
      >
        ADD TO BAG
      </button>
    </div>
  </div>
);

export default Product;