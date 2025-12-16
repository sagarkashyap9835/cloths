

import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import contacthero from '../assets/contacthero.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://raja-electronic.onrender.com/api/contact", formData);
      if (res.data.success) {
        toast.success("Message sent to the Studio! ✨");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to connect ❌");
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* --- Aesthetic Hero Section --- */}
      <section className="relative h-[45vh] md:h-[55vh] flex items-center justify-center overflow-hidden">
        <img
          src={contacthero}
          alt="Fashion Studio"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.4] scale-105 animate-slow-pan"
        />
        <div className="relative z-10 text-center px-4">
          <p className="text-red-500 font-black tracking-[0.5em] uppercase text-[10px] mb-4 animate-fade-in">
            Get in touch with us
          </p>
          <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter italic leading-none">
            Contact <span className="font-light not-italic text-gray-300">Us</span>
          </h1>
        </div>
      </section>

      {/* --- Main Content Section --- */}
      <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-start">
          
          {/* Left Side: Brand Info & Details */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="text-4xl font-black text-black uppercase tracking-tighter mb-6 leading-tight">
                Let's Start a <br />
                <span className="text-red-600 italic">Style</span> Conversation
              </h2>
              <p className="text-gray-400 font-medium leading-relaxed max-w-sm">
                Hamare premium collection, customization ya delivery ke baare mein koi bhi sawal ho, humein likhein.
              </p>
            </div>

            <div className="space-y-10">
              {/* Address */}
              <div className="flex items-center gap-6 group cursor-default">
                <div className="w-14 h-14 bg-gray-50 flex items-center justify-center rounded-full text-xl group-hover:bg-black group-hover:text-white transition-all duration-500">
                  📍
                </div>
                <div>
                  <h4 className="font-black text-[10px] uppercase tracking-widest text-gray-300 mb-1">Our Studio</h4>
                  <p className="text-gray-900 font-bold text-sm">Barahi Bazar, Sitamarhi, Bihar</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-6 group cursor-default">
                <div className="w-14 h-14 bg-gray-50 flex items-center justify-center rounded-full text-xl group-hover:bg-black group-hover:text-white transition-all duration-500">
                  📧
                </div>
                <div>
                  <h4 className="font-black text-[10px] uppercase tracking-widest text-gray-300 mb-1">Email Us</h4>
                  <p className="text-gray-900 font-bold text-sm underline decoration-gray-200 underline-offset-4">rajaelectricshop@gmail.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-6 group cursor-default">
                <div className="w-14 h-14 bg-gray-50 flex items-center justify-center rounded-full text-xl group-hover:bg-black group-hover:text-white transition-all duration-500">
                  📞
                </div>
                <div>
                  <h4 className="font-black text-[10px] uppercase tracking-widest text-gray-300 mb-1">Call Support</h4>
                  <p className="text-gray-900 font-bold text-sm">+91 9117400640</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-10 border-t border-gray-100 flex gap-8">
                {['Instagram', 'Facebook', 'Pinterest'].map((social) => (
                  <span key={social} className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-black transition-colors cursor-pointer">
                    {social}
                  </span>
                ))}
            </div>
          </div>

          {/* Right Side: Modern Minimalist Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-14 rounded-[3rem] shadow-[0_30px_100px_rgba(0,0,0,0.04)] border border-gray-50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-full -mr-16 -mt-16 opacity-50"></div>
              
              <h3 className="text-2xl font-black text-black mb-10 uppercase tracking-tighter">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b-2 border-gray-100 py-3 focus:border-black transition-all outline-none text-sm font-bold placeholder:text-gray-300"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b-2 border-gray-100 py-3 focus:border-black transition-all outline-none text-sm font-bold placeholder:text-gray-300"
                    />
                  </div>
                </div>

                <div className="relative pt-4">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    placeholder="Your Message..."
                    className="w-full bg-transparent border-b-2 border-gray-100 py-3 focus:border-black transition-all outline-none text-sm font-bold resize-none placeholder:text-gray-300"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] hover:bg-red-600 transition-all duration-500 shadow-xl shadow-gray-200 active:scale-95"
                >
                  Confirm & Send
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* --- Styling for Animations --- */}
      <style>{`
        @keyframes slow-pan {
          0% { transform: scale(1.05) translateX(0); }
          100% { transform: scale(1.1) translateX(-10px); }
        }
        .animate-slow-pan {
          animation: slow-pan 10s ease-in-out infinite alternate;
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 1.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Contact;