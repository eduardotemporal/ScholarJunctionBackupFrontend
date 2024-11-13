import React from "react";
import bgImage from '../images/bg-linear.png'
import whiteLogoImage from '../images/white-logo.png'
import { Link } from 'react-router-dom';

export default function ProviderRegsiterE() {
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
              
          <div className="max-w-md mx-auto bg-white  p-6 rounded-lg shadow-md">
            <h2 className="text-4xl font-bold text-gray-800 mb-3 text-center">
              Sign up for Account (Existing organization)
            </h2>
            <div className="mb-6">
              <h3 className="text-4xl font-bold text-gray-800 mb-3 text-center">
                For existing organization
              </h3>
              <p className="text-zinc-600  mt-2">
                Congratulations! Your registration is complete, and your account is now active. You can access
                and utilize our platform to explore scholarships, view recommendations, and benefit from
                various features. Start discovering opportunities tailored to your preferences and needs.
                Thank you for being part of our community!
              </p>
            </div>
            <form>
              <div className="mb-4">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200 hover:shadow-lg" />
                  <span className="ml-2 text-zinc-700">I accept all
                    <a href="#" className="text-blue-600 dark:text-blue-400">terms and conditions</a></span>
                </label>
              </div>
              <div className="mb-4">
              </div>
              <Link to="/register-provider-f">
                <button type="submit" className="w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600">
                  Next
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}