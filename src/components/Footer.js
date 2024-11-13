import React from 'react';
import { Link } from 'react-router-dom';
import whiteLogoImage from '../images/white-logo.png';
import footerimage from '../images/footer.png';

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white p-12" style={{ backgroundImage: `url(${footerimage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between">
        <div className="mb-6">
          <img src={whiteLogoImage} alt="Footer Logo" className="h-20 mb-4" />
          <p className="text-sm">THE FUTURE BEGINS HERE.</p>
        </div>
        <div className="space-y-4 mb-6">
          <h2 className="font-bold text-lg">Quick Links</h2>
          <ul className="space-y-2">
            <li><Link to="/" className="text-white hover:text-green-400 transition duration-200">Home</Link></li>
            <li><Link to="/home-scholar" className="text-white hover:text-green-400 transition duration-200">Scholarships</Link></li>
            <li><Link to="/about-us" className="text-white hover:text-green-400 transition duration-200">About Us</Link></li>
          </ul>
        </div>
        <div className="space-y-4 mb-6">
          <h2 className="font-bold text-lg">Contact Us</h2>
          <p>2640 Tam Ave, Makati, Manila, 1004 Metro Manila</p>
          <p>Tel: (632) 8521-5000</p>
          <p>Email: <a href="mailto:admissions@mak.edu.ph" className="hover:underline text-green-400 transition duration-200">admissions@mak.edu.ph</a></p>
        </div>
        <div className="space-y-4 mb-6">
          <h2 className="font-bold text-lg">Connect with us</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-green-400 transition duration-200"><i className="fa-brands fa-facebook fa-lg"></i></a>
            <a href="#" className="hover:text-green-400 transition duration-200"><i className="fa-brands fa-twitter fa-lg"></i></a>
            <a href="#" className="hover:text-green-400 transition duration-200"><i className="fa-brands fa-instagram fa-lg"></i></a>
            <a href="#" className="hover:text-green-400 transition duration-200"><i className="fa-brands fa-linkedin fa-lg"></i></a>
          </div>
        </div>
      </div>
      <div className="text-center mt-12 text-sm">
        &copy; 2024 All Rights Reserved ScholarJunction Manila PH.
      </div>
    </footer>
  );
}