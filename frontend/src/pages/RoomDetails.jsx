import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { AppContext } from "./Appcontext";
import { CartContext } from "../context/CartContext";
import { FaBed, FaBath, FaWifi, FaFan, FaSnowflake, FaLightbulb, FaCouch, FaArrowLeft } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RoomDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { backendUrl } = useContext(AppContext);
    const { addToCart } = useContext(CartContext);

    const [room, setRoom] = useState(null);
    const [loading, setLoading] = useState(true);
    const [mainImage, setMainImage] = useState("");

    useEffect(() => {
        const fetchRoom = async () => {
            try {
                const res = await axios.get(`${backendUrl}/api/room/all`); // Using existing endpoint
                if (res.data.success) {
                    const foundRoom = res.data.rooms.find((r) => r._id === id); // Client-side filter for now as API might not have single get
                    // Or if you have a single get route: axios.get(`${backendUrl}/api/product/${id}`)
                    if (foundRoom) {
                        setRoom(foundRoom);
                        setMainImage(foundRoom.images[0]);
                    }
                }
            } catch (error) {
                console.error("Error fetching room details:", error);
                toast.error("Failed to load room details");
            } finally {
                setLoading(false);
            }
        };
        fetchRoom();
    }, [backendUrl, id]);

    if (loading) return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
        </div>
    );

    if (!room) return <div className="text-center pt-20 text-2xl">Room not found 😕</div>;

    const handleAddToCart = () => {
        addToCart({
            _id: room._id,
            name: room.title,
            price: room.rent,
            image: room.images[0],
        });
        // Optional: Proceed to checkout immediately logic if 'Buy Now' was clicked
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-24 px-4 sm:px-10 pb-10">
            <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-gray-600 mb-6 hover:text-black transition-colors"
            >
                <FaArrowLeft /> Back to listings
            </button>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-10">

                {/* Left: Image Gallery */}
                <div className="space-y-4">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 relative group">
                        <img
                            src={mainImage}
                            alt={room.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
                        {room.images.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setMainImage(img)}
                                className={`w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${mainImage === img ? 'border-blue-600 scale-95' : 'border-transparent hover:border-blue-300'
                                    }`}
                            >
                                <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right: Details */}
                <div className="flex flex-col">
                    <div className="flex justify-between items-start">
                        <h1 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight">
                            {room.title}
                        </h1>
                        <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                            {room.availableRooms > 0 ? "Available" : "Sold Out"}
                        </span>
                    </div>

                    <div className="mt-4 flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-gray-900">₹{room.rent}</span>
                        <span className="text-sm text-gray-500 font-medium">/ month</span>
                    </div>

                    <p className="mt-6 text-gray-600 leading-relaxed text-sm lg:text-base">
                        {room.description}
                    </p>

                    <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
                        <FeatureIcon icon={<FaBed />} label={`${room.beds} Beds`} />
                        <FeatureIcon icon={<FaBath />} label={room.bathroomType} />
                        <FeatureIcon icon={<span className="font-bold text-xs border rounded px-1">{room.bhkType}</span>} label="Type" />
                    </div>

                    {/* Amenities */}
                    <div className="mt-8">
                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">Amenities</h3>
                        <div className="flex flex-wrap gap-3">
                            {room.amenities.wifi && <AmenityBadge icon={<FaWifi />} label="Wi-Fi" />}
                            {room.amenities.furnished && <AmenityBadge icon={<FaCouch />} label="Furnished" />}
                            {room.amenities.ac && <AmenityBadge icon={<FaSnowflake />} label="AC" />}
                            {room.amenities.fan && <AmenityBadge icon={<FaFan />} label="Fan" />}
                            <AmenityBadge icon={<FaLightbulb />} label={room.amenities.lightType} />
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-auto pt-10 flex gap-4">
                        <button
                            onClick={handleAddToCart}
                            className="flex-1 bg-black text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-gray-800 transition-all active:scale-95 shadow-lg"
                        >
                            Add to Cart
                        </button>
                        <button
                            onClick={() => {
                                handleAddToCart();
                                navigate('/cart'); // Assuming cart route exists, or direct to checkout
                            }}
                            className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-blue-200"
                        >
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer position="bottom-right" theme="dark" />
        </div>
    );
};

// Helper Components
const FeatureIcon = ({ icon, label }) => (
    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
        <div className="text-blue-600 text-lg">{icon}</div>
        <span className="text-sm font-semibold text-gray-700">{label}</span>
    </div>
);

const AmenityBadge = ({ icon, label }) => (
    <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 text-xs font-bold rounded-full">
        {icon} {label}
    </span>
);

export default RoomDetails;
