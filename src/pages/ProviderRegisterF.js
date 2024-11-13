import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importing useNavigate
import bgImage from '../images/bg-linear.png';
import whiteLogoImage from '../images/white-logo.png';

export default function ProviderRegisterF() {
  const [isChecked, setIsChecked] = useState(false); // State to track checkbox status
  const navigate = useNavigate(); // Hook to navigate to another route

  // Handle checkbox change
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    if (!isChecked) {
      alert("You must accept the terms and conditions.");
      return; // Prevent navigation if not checked
    }

    // Navigate to the provider-profile page if checkbox is checked
    navigate("/provider-profile");
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

          {/* Right Side with Form */}
          <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-4xl font-bold text-gray-800 mb-3 text-center">
              Sign up for Account (New organization)
            </h2>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-zinc-700">
                For new organization
              </h3>
              <p className="text-zinc-600 mt-2">
                Thank you for registering! Your account is pending verification through our Know Your Customer
                (KYC) process. Please allow 1-3 business days for our team to review your details. You can log
                in to check the status of your account, but access to the full platform will be available
                after verification. Once verified, you'll receive an email notification enabling you to access
                and use our platform. We appreciate your patience.
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200 hover:shadow-lg"
                  />
                  <span className="ml-2 text-zinc-700">
                    I accept all
                    <a href="#" className="text-blue-600 dark:text-blue-400">
                      terms and conditions
                    </a>
                  </span>
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
              >
                Next
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
