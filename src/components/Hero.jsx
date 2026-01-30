import React from 'react';
import backgroundImage from '../Frame-48096650-2048x404.png';

function Hero() {
  return (
    <div className="relative bg-white overflow-hidden pb-20">
      {/* Background dengan gambar */}
      <div 
        className="absolute top-0 left-0 right-0 h-80 opacity-70 bg-cover bg-center"
        style={{backgroundImage: `url(${backgroundImage})`}}
      ></div>

      {/* Content */}
      <div className="relative py-20 text-center mb-16">
        {/* "OUR MENU" text in background - dengan outline style */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h2 
            className="text-9xl font-bold tracking-widest" 
            style={{
              letterSpacing: '0.3em',
              WebkitTextStroke: '2px #d4e5d4',
              color: 'transparent'
            }}
          >
            OUR MENU
          </h2>
        </div>
        
        {/* Main "MENU" text */}
        <h1 className="relative text-8xl font-bold text-green-800 mb-4 tracking-wide">MENU</h1>
      </div>

      {/* Services banner - FONT LEBIH BESAR LAGI */}
      <div className="relative mx-auto max-w-6xl px-8">
        <div className="border-2 border-dashed border-gray-300 rounded-full bg-white py-6 px-16">
          <div className="flex items-center justify-center gap-10">
            <span className="text-gray-400 text-base font-medium tracking-widest uppercase">
              TYPE OF SERVICES AVAILABLE
            </span>
            <span className="text-gray-300 font-light text-2xl">|</span>
            <div className="flex items-center gap-10 text-gray-700 font-bold text-xl">
              <button className="hover:text-green-700 transition flex items-center gap-3">
                <span className="w-3 h-3 bg-green-700 rounded-full"></span>
                Pick-up
              </button>
              <button className="hover:text-green-700 transition flex items-center gap-3">
                <span className="w-3 h-3 bg-green-700 rounded-full"></span>
                Delivery
              </button>
              <button className="text-green-700 flex items-center gap-3">
                <span className="w-3 h-3 bg-green-700 rounded-full"></span>
                Coffee Catering
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;