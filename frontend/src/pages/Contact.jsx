

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
    <div className="bg-white min-h-screen pt-20">
      {/* Hero Section - Fashion Aesthetic */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <img
          src={contacthero}
          alt="Contact Hero"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.4] scale-105"
        />
        <div className="relative z-10 text-center px-4">
          <p className="text-red-600 font-black tracking-[0.4em] uppercase text-xs mb-3">Get in touch</p>
          <h1 className="text-4xl sm:text-7xl font-black text-white uppercase tracking-tighter italic">
            Contact <span className="text-gray-400 font-light not-italic">Us</span>
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Contact Info - Minimalist */}
          <div className="lg:col-span-5 space-y-12 order-2 lg:order-1">
            <div>
              <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter mb-6">
                Visit Our <span className="text-red-600 underline decoration-1 underline-offset-8">Studio</span>
              </h2>
              <p className="text-gray-500 font-medium leading-relaxed max-w-sm">
                Hamare premium collection ke baare mein kuch bhi puchna ho ya feedback dena ho, humein khushi hogi aapse baat karke.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-full text-xl group-hover:bg-black group-hover:text-white transition-all duration-300">
                  📍
                </div>
                <div>
                  <h4 className="font-black text-xs uppercase tracking-widest text-gray-400 mb-1">Location</h4>
                  <p className="text-gray-800 font-bold">Barahi Bazar, Sitamarhi, Bihar</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-full text-xl group-hover:bg-black group-hover:text-white transition-all duration-300">
                  📧
                </div>
                <div>
                  <h4 className="font-black text-xs uppercase tracking-widest text-gray-400 mb-1">Email Support</h4>
                  <p className="text-gray-800 font-bold">rajaelectricshop@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-full text-xl group-hover:bg-black group-hover:text-white transition-all duration-300">
                  📞
                </div>
                <div>
                  <h4 className="font-black text-xs uppercase tracking-widest text-gray-400 mb-1">Phone</h4>
                  <p className="text-gray-800 font-bold">+91 9117400640</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-gray-100 flex gap-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
                <span className="text-xs font-black uppercase tracking-widest cursor-pointer hover:text-red-600">Instagram</span>
                <span className="text-xs font-black uppercase tracking-widest cursor-pointer hover:text-red-600">Facebook</span>
            </div>
          </div>

          {/* Right Side: Form - Modern White Card */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-gray-50 animate-fade-in-up">
              <h3 className="text-2xl font-black text-gray-900 mb-8 uppercase tracking-tighter">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g. Rahul Kumar"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-black transition-all text-sm font-bold"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="rahul@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-black transition-all text-sm font-bold"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="How can we help you?"
                    className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-black transition-all text-sm font-bold resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-red-600 shadow-xl shadow-gray-200 transition-all duration-300 active:scale-95"
                >
                  Submit Message
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* Modern Style Tag for Animations */}
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Contact;