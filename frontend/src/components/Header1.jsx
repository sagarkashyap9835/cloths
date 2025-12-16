
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Header1 = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070",
      title: "Discover Your Style",
      subtitle: "Exclusive Collection 2024",
    },
    {
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070",
      title: "Trendsetting Fashion",
      subtitle: "Up to 50% Off on Latest Arrivals",
    },
    {
      image: "https://images.unsplash.com/photo-1445205174239-17397a73f75f?q=80&w=2070",
      title: "Premium Quality",
      subtitle: "Comfort Meets Elegance",
    }
  ];

  // Auto Slider Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Har 5 second mein image badlegi
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full h-[500px] md:h-[700px] overflow-hidden bg-black mt-16 sm:mt-20">
      {/* Background Images with Fade Animation */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt="Fashion Header"
            className="w-full h-full object-cover transform scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
        </div>
      ))}

      {/* Content Area */}
      <div className="relative h-full flex flex-col justify-center items-start px-8 md:px-20 text-left z-10">
        <h2 className="text-yellow-500 font-medium tracking-widest mb-2 animate-bounce-short">
           NEW ARRIVALS
        </h2>
        
        <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-4 leading-tight">
          {slides[currentSlide].title.split(" ").map((word, i) => (
            <span key={i} className="inline-block animate-fade-in-up mr-4" style={{animationDelay: `${i * 0.2}s`}}>
              {word}
            </span>
          ))}
        </h1>

        <p className="text-gray-200 text-lg md:text-2xl mb-8 max-w-lg animate-fade-in opacity-90">
          {slides[currentSlide].subtitle}
        </p>

        <div className="flex gap-4">
          <button 
            onClick={() => navigate("/product")}
            className="bg-white text-black font-bold px-8 py-4 rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Shop Collection
          </button>
          <button 
            onClick={() => navigate("/about")}
            className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full cursor-pointer transition-all duration-500 ${
              index === currentSlide ? "w-10 bg-yellow-500" : "w-2 bg-white/50"
            }`}
          ></div>
        ))}
      </div>

      {/* Tailwind Custom Animations Style Tag */}
      <style>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 10s linear infinite alternate;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-bounce-short {
          animation: bounce 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Header1;