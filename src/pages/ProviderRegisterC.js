import React from "react";
import bgImage from "../images/bg-linear.png"
import whiteLogoImage from '../images/white-logo.png'
import { Link } from 'react-router-dom';

export default function ProviderRegisterC() {

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

          <div className="md:w-1/2 bg-white  p-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-3 text-center">Sign up for Account (New organization)</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="government-id" className="block text-zinc-700">Government ID</label>
                <div className="border border-zinc-300 dark:border-zinc-600 rounded-lg p-4 bg-zinc-50 ">
                  <input type="file" id="government-id" className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200 hover:shadow-lg" />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="proof-employment" className="block text-zinc-700">Proof of employment</label>
                <div className="border border-zinc-300  dark:border-zinc-600 rounded-lg p-4 bg-zinc-50 ">
                  <input type="file" id="proof-employment" className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200 hover:shadow-lg" />
                </div>
              </div>
              <Link to="/register-provider-d">
                <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg">
                  Next
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>)

}