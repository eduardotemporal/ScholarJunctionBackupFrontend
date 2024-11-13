import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import whiteLogoImage from '../images/white-logo.png';

export default function HeaderApplicant() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-green-800 p-4 flex justify-between items-center sticky top-0 z-10">
      <Link to="/home-scholar" className="flex items-center">
        <img src={whiteLogoImage} alt="Logo" className="h-10 w-10 mr-2" />
        <span className="text-white text-2xl font-bold">
          Scholar<span className="text-green-400">junction</span>
        </span>
      </Link>
      <div className="hidden md:flex items-center space-x-4">
        <Link to="/home-scholar" className="text-white hover:text-green-400 transition duration-300 ease-in-out transform hover:scale-105">Home</Link>
        <Link to="/" className="text-white hover:text-green-400 transition duration-300 ease-in-out transform hover:scale-105">Notifications</Link>
        <Link to="/applicant-search-course" className="text-white hover:text-green-400 transition duration-300 ease-in-out transform hover:scale-105">Search By Scholarships</Link>
        <Link to="/applicant-dashboard" className="text-white hover:text-green-400 transition duration-300 ease-in-out transform hover:scale-105">Dashboard</Link>
        <Link to="/AboutUsA" className="text-white hover:text-green-400 transition duration-300 ease-in-out transform hover:scale-105">About Us</Link>
        <Link to="/scholar-profile" className="text-white hover:text-green-400 transition duration-300 ease-in-out transform hover:scale-105">Profile</Link>
        <Link to="/login" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800 transition duration-300 ease-in-out transform hover:scale-105">Logout</Link>
      </div>
      <div className="md:hidden">
        <button 
          onClick={toggleMenu} 
          className={`text-white focus:outline-none transition-transform ${isMenuOpen ? 'transform rotate-90' : ''}`}>
          {/* hamburger */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-green-900 bg-opacity-90 rounded-lg shadow-lg transition-all duration-300 ease-in-out">
          <nav className="flex flex-col items-center p-4">
            <Link to="/home-scholar" className="text-white hover:text-green-400 py-2 transition duration-300 ease-in-out transform hover:scale-105 w-full text-center">Home</Link>
            <Link to="/" className="text-white hover:text-green-400 py-2 transition duration-300 ease-in-out transform hover:scale-105 w-full text-center">Notifications</Link>
            <Link to="/applicant-search-course" className="text-white hover:text-green-400 py-2 transition duration-300 ease-in-out transform hover:scale-105 w-full text-center">Search By Scholarships</Link>
            <Link to="/applicant-dashboard" className="text-white hover:text-green-400 py-2 transition duration-300 ease-in-out transform hover:scale-105 w-full text-center">Dashboard</Link>
            <Link to="/AboutUsA" className="text-white hover:text-green-400 py-2 transition duration-300 ease-in-out transform hover:scale-105 w-full text-center">About Us</Link>
            <Link to="/scholar-profile" className="text-white hover:text-green-400 py-2 transition duration-300 ease-in-out transform hover:scale-105 w-full text-center">Profile</Link>
            <Link to="/login" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800 transition duration-300 ease-in-out transform hover:scale-105 w-full text-center mt-2">Logout</Link>
          </nav>
        </div>
      )}
    </header>
  );
}