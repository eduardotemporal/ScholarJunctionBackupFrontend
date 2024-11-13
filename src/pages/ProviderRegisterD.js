import React from "react";
import bgImage from '../images/bg-linear.png'
import whiteLogoImage from '../images/white-logo.png'
import { Link } from 'react-router-dom';

export default function ProviderRegsiterD() {
  return (
    <div className="min-h-screen flex flex-col">
    <div
            className="flex-grow flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            <div className="bg-white shadow-lg rounded-lg flex max-w-4xl w-full overflow-hidden">
              {/* Left Side with Logo */}
              <div className="w-1/2 bg-gradient-to-r from-green-600 to-green-800 flex items-center justify-center p-8">
                <img src={whiteLogoImage} alt="Scholar Junction Logo" className="h-48" />
              </div>
              
          <div className="w-1/2 bg-zinc-100  p-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-3 text-center">Sign up for Account (Existing organization)</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="position" className="block text-zinc-700">Position</label>
                <input type="text" id="position" placeholder="Position" className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200 hover:shadow-lg" />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-zinc-700">Enter organization password</label>
                <input type="password" id="password" placeholder="Given password" className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200 hover:shadow-lg" />
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">Note: If you have not received a password for your organization yet, contact our <a href="#" className="text-blue-500">Admin</a>.</p>
              <Link to="/register-provider-e">
                <button type="submit" className="w-full p-3 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">Next</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}