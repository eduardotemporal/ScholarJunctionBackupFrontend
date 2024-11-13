import React from 'react';
import { Link } from 'react-router-dom';

export default function NoLoginHeader() {

  return (
    <nav className="space-x-4">
      <a href="#" className="text-white hover:text-green-400">Home</a>
      <a href="#" className="text-white hover:text-green-400">Scholarships</a>
      <a href="#" className="text-white hover:text-green-400">About</a>
      <a href="#" className="text-white hover:text-green-400">Contact Us</a>
      <a href="#" className="text-white hover:text-green-400">About Us</a>
      <a href="#" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800">Sign Up</a>
      <a href="#" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800">Login</a>
    </nav>
  )

}