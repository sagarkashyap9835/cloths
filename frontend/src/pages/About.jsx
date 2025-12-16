


import React from "react";
import interior from '../assets/interior.jpg'; 
import { useNavigate } from "react-router-dom"; 
const About = () => {
  const navigate = useNavigate(); 
  return (
    <div className="bg-white min-h-screen pt-20">
      
    
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop" 
          alt="Fashion Aesthetic"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.6] scale-105"
        />
        <div className="relative z-10 text-center px-6">
          <p className="text-red-600 font-black tracking-[0.5em] uppercase text-xs mb-4">Established 2010</p>
          <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter italic">
            Defining <span className="font-light not-italic text-gray-300">Style.</span>
          </h1>
          <p className="text-gray-300 mt-6 text-sm md:text-lg max-w-xl mx-auto font-medium leading-relaxed italic">
            "We don't just sell clothes; we curate your identity. Raja Studio is where tradition meets the avant-garde."
          </p>
        </div>
      </section>

    
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute -inset-4 border-2 border-gray-100 rounded-[3rem] group-hover:border-red-600 transition-colors duration-500"></div>
            <img
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop"
              alt="Studio Interior"
              className="relative w-full h-[500px] object-cover rounded-[2.5rem] shadow-2xl"
            />
          </div>
          <div className="w-full lg:w-1/2 space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tighter leading-none">
              The <span className="text-red-600 italic">Raja</span> <br /> Manifesto
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed font-medium">
              Barahi Bazar se shuru hua ye safar, aaj ek minimalist fashion destination ban chuka hai. Humne pichle 14 saalon mein craft, fabric aur fit par focus kiya hai.
            </p>
            <p className="text-gray-400 leading-relaxed italic">
              Hamara har piece ek kahani sunata hai—un logon ki kahani jo quality ko compromises se upar rakhte hain. Raja Studio is for the bold, the elegant, and the timeless.
            </p>
            <div className="pt-6">
                <button className="border-b-2 border-black pb-2 text-xs font-black uppercase tracking-widest hover:text-red-600 hover:border-red-600 transition-all">
                    Learn about our Craft
                </button>
            </div>
          </div>
        </div>
      </section>

    
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-center text-[10px] font-black tracking-[0.4em] uppercase text-red-600 mb-2">Our World</h2>
            <h3 className="text-center text-4xl md:text-5xl font-black text-black uppercase tracking-tighter">Premium Offerings</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                title: "Curated Collection", 
                desc: "Handpicked premium fabrics for every season.", 
                img: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=1887&auto=format&fit=crop"
              },
              { 
                title: "Bespoke Styling", 
                desc: "Expert guidance to find your perfect fit and look.", 
                img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
              },
              { 
                title: "Luxury Basics", 
                desc: "High-quality essentials that define daily wear.", 
                img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop"
              }
            ].map((service, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="overflow-hidden rounded-3xl aspect-[4/5] mb-6 shadow-lg">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <h4 className="text-xl font-black uppercase tracking-tighter mb-2">{service.title}</h4>
                <p className="text-gray-400 text-sm font-medium leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          <div className="space-y-4">
            <h5 className="text-5xl font-black text-gray-100 italic">01</h5>
            <h6 className="text-lg font-black uppercase tracking-widest">Ethical Sourcing</h6>
            <p className="text-gray-400 text-xs leading-loose font-medium px-4">Hum sirf wahi fabrics use karte hain jo sustainable aur highest quality ke hote hain.</p>
          </div>
          <div className="space-y-4">
            <h5 className="text-5xl font-black text-gray-100 italic">02</h5>
            <h6 className="text-lg font-black uppercase tracking-widest">Modern Tailoring</h6>
            <p className="text-gray-400 text-xs leading-loose font-medium px-4">Traditional techniques mixed with modern silhouettes for a perfect fit.</p>
          </div>
          <div className="space-y-4">
            <h5 className="text-5xl font-black text-gray-100 italic">03</h5>
            <h6 className="text-lg font-black uppercase tracking-widest">Global Trends</h6>
            <p className="text-gray-400 text-xs leading-loose font-medium px-4">Barahi Bazar se lekar global fashion weeks tak, hum har trend ko Raja style mein laate hain.</p>
          </div>
        </div>
      </section>

    
      <section className="py-20 border-t border-gray-100">
        <div className="text-center px-6">
            <h2 className="text-2xl font-black uppercase tracking-[0.2em] mb-8">Elevate your Wardrobe</h2>
           <button 
              onClick={() => navigate('/product')} 
              className="bg-black text-white px-12 py-5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] hover:bg-red-600 transition-all duration-500 shadow-2xl active:scale-95"
            >
                Explore the Collection
            </button>
        </div>
      </section>

    </div>
  );
};

export default About;
