


import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { assets } from '../assets/assets';
import { AppContext } from '../pages/Appcontext';
import { toast } from 'react-toastify';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { token, setToken, userData, searchTerm, setSearchTerm } = useContext(AppContext);

  // Navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logout = () => {
    setToken(false);
    localStorage.removeItem('token');
    toast.success('Signed Out Successfully');
  };

  const handleLinkClick = (path) => {
    navigate(path);
    setShowMenu(false);
  };

  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      toast.error("Speech Recognition not supported.");
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.toLowerCase();
      setSearchTerm(transcript);
      if (location.pathname !== '/product') navigate('/product');
    };
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm py-2' : 'bg-white py-4'}`}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-10 gap-4">


        <Link to="/" className="flex-shrink-0 group">
          <h1 className="text-2xl md:text-3xl font-black tracking-tighter text-black">
            Rental<span className="text-gray-400 group-hover:text-red-600 transition-colors uppercase italic">.platform</span>
          </h1>
        </Link>


        <div className="hidden md:flex items-center bg-gray-50 px-5 py-2.5 rounded-full border border-gray-100 flex-grow max-w-lg mx-8 focus-within:border-black transition-all">
          <input
            type="text"
            placeholder="Search collections..."
            className="bg-transparent outline-none w-full text-xs font-bold uppercase tracking-widest placeholder:text-gray-300"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              if (location.pathname !== '/findhome') navigate('/findhome');
            }}
          />
          <button onClick={startListening} className="text-gray-400 hover:text-black transition ml-3 text-lg">
            🎤
          </button>
        </div>

        {/* Navigation Links & User Actions */}
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex gap-10 text-[11px] font-black uppercase tracking-[0.2em] text-gray-500">
            {['Home', 'Findhome', 'About', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={`relative hover:text-black transition-all group ${location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`) ? 'text-black' : ''}`}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full ${location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`) ? 'w-full' : ''}`}></span>
              </Link>
            ))}
            <a href="http://localhost:5174" target="_blank" rel="noreferrer" className="bg-red-600 text-white px-4 py-1.5 rounded-full hover:bg-black transition-all animate-pulse shadow-md">
              LIST YOUR FLAT
            </a>
          </div>

          {/* Icons/Profile */}
          <div className="flex items-center gap-4">
            {/* Cart Icon */}
            <Link to="/cart" className="relative group">
              <span className="text-2xl">🛒</span>
              {/* Optional Badge */}
              {/* <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">1</span> */}
            </Link>

            {token && userData ? (
              <div className="relative group">
                <div className="flex items-center gap-2 cursor-pointer">
                  <img className="w-8 h-8 rounded-full border-2 border-black p-0.5 object-cover" src={userData.image} alt="User" />
                </div>
                <div className="absolute top-10 right-0 hidden group-hover:block bg-white border border-gray-100 rounded-xl shadow-2xl z-20 w-48 overflow-hidden animate-fade-in">
                  <p onClick={() => navigate("/my-profile")} className="px-5 py-3 hover:bg-black hover:text-white transition cursor-pointer text-[10px] font-black uppercase tracking-widest">My Profile</p>
                  <p onClick={() => navigate("/my-order")} className="px-5 py-3 hover:bg-black hover:text-white transition cursor-pointer text-[10px] font-black uppercase tracking-widest border-t">My Orders</p>
                  <p onClick={logout} className="px-5 py-3 hover:bg-red-600 hover:text-white transition cursor-pointer text-[10px] font-black uppercase tracking-widest border-t">Sign Out</p>
                </div>
              </div>
            ) : (
              <button className="bg-black text-white px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-gray-800 transition shadow-lg active:scale-95" onClick={() => navigate('/login')}>
                Login
              </button>
            )}

            {/* Mobile Menu Icon */}
            <button onClick={() => setShowMenu(true)} className="lg:hidden p-2 bg-gray-50 rounded-full active:scale-90 transition">
              <div className="w-6 h-0.5 bg-black mb-1.5"></div>
              <div className="w-4 h-0.5 bg-black"></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Search - Slide down feel */}
      <div className="sm:hidden px-5 pb-4 bg-white">
        <div className="flex items-center bg-gray-50 px-4 py-3 rounded-2xl border border-gray-100">
          <input
            type="text"
            placeholder="Search style..."
            className="bg-transparent outline-none w-full text-[10px] font-bold uppercase tracking-widest"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              if (location.pathname !== '/findhome') navigate('/findhome');
            }}
          />
          <button onClick={startListening} className="text-gray-400"></button>
        </div>
      </div>

      {/* --- Fullscreen Mobile Sidebar --- */}
      <div className={`fixed top-0 right-0 bottom-0 bg-white z-[200] transition-all duration-700 ease-in-out flex flex-col ${showMenu ? 'w-full opacity-100' : 'w-0 opacity-0 pointer-events-none'}`}>
        <div className="flex items-center justify-between px-8 py-10">
          <h2 className="text-2xl font-black italic tracking-tighter uppercase">Menu</h2>
          <button onClick={() => setShowMenu(false)} className="text-4xl font-light">&times;</button>
        </div>
        <div className="flex flex-col gap-8 mt-10 px-10">
          {['Home', 'Product', 'About', 'Contact'].map((item, idx) => (
            <p
              key={item}
              onClick={() => handleLinkClick(item === 'Home' ? '/' : `/${item.toLowerCase()}`)}
              className="text-4xl font-black uppercase tracking-tighter hover:text-red-600 transition-all cursor-pointer"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {item}
            </p>
          ))}
        </div>
        <div className="mt-auto p-10 flex gap-6 text-[10px] font-black uppercase tracking-widest text-gray-400">
          <span>Instagram</span>
          <span>Facebook</span>
          <span>Pinterest</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;