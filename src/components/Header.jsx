import React from 'react';
import logo from '../Logo-2.png';

function Header() {
  return (
    <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Fore Coffee" className="h-10" />
</div>
          
          {/* Navigation - semua hijau */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium h-full">
            <a href="#" className="text-green-700 hover:text-green-800 transition h-full flex items-center">Tentang</a>
            <a href="#" className="text-green-700 hover:text-green-800 transition h-full flex items-center border-b-2 border-green-700">Menu</a>
            <a href="#" className="text-green-700 hover:text-green-800 transition h-full flex items-center">Toko</a>
            <a href="#" className="text-green-700 hover:text-green-800 transition h-full flex items-center">Investors</a>
            <a href="#" className="text-green-700 hover:text-green-800 transition h-full flex items-center">GCG</a>
            <a href="#" className="text-green-700 hover:text-green-800 transition h-full flex items-center">Collaboration</a>
            <a href="#" className="text-green-700 hover:text-green-800 transition h-full flex items-center">News</a>
            <a href="#" className="text-green-700 hover:text-green-800 transition h-full flex items-center">Career</a>
            <a href="#" className="text-green-700 hover:text-green-800 transition h-full flex items-center">Contact Us</a>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-1 text-sm">
              <img src="https://flagcdn.com/w20/id.png" alt="ID" className="w-5 h-3"/>
              <span>ID</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <button className="border-2 border-green-700 text-green-700 px-6 py-2 rounded-full text-sm font-medium hover:bg-green-50 transition">
              Download App
            </button>
            <button className="text-gray-400 hover:text-gray-600 text-sm">
              EN
            </button>
            <button className="text-gray-800 font-medium text-sm">
              ID
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;