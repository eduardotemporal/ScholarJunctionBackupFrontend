import React from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../images/bg-linear.png';
import whiteLogoImage from '../images/white-logo.png';
import Footer from '../components/Footer';







export default function RegisterA() {

  localStorage.clear();
  console.log(localStorage)

  const handleStudentClick = () => {
    localStorage.setItem('registerRole', 'Student');
  };

  const handleProviderClick = () => {
    localStorage.setItem('registerRole', 'Provider');
  };  

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
          {/* Right Side with Registration Options */}
          <div className="w-1/2 p-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-3 text-center">
              Welcome to <span className="text-green-600">Scholar Junction</span>
            </h2>
            <p className="text-lg text-gray-700 mb-4 text-center">
              Your gateway to academic excellence and opportunities!
            </p>
            <p className="text-lg text-gray-700 mb-6 text-center">
              You are signing up as:
            </p>
            <div className="flex flex-col space-y-4">
              <Link to="/register-scholar">
                <button
                  onClick={handleStudentClick} className="flex items-center justify-center w-full bg-green-800 hover:bg-green-600 text-white py-3 rounded-lg shadow-md transition duration-200 transform hover:scale-105"
                  aria-label="Register as Student Scholar"
                >
                  <i className="fa-brands fa-google-scholar mr-2"></i> Student Scholar
                </button>
              </Link>
              <Link to="/register-provider">
                <button
                 onClick={handleProviderClick} className="flex items-center justify-center w-full bg-green-800 hover:bg-green-600 text-white py-3 rounded-lg shadow-md transition duration-200 transform hover:scale-105"
                  aria-label="Register as Provider"
                >
                  <i className="fa-solid fa-school mr-2"></i> Provider
                </button>
              </Link>
            </div>
            <p className="text-center text-gray-600 mt-6">
              Already have an account?{' '}
              <Link to="/login" className="text-green-800 hover:text-green-500 font-semibold">Login</Link>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}


