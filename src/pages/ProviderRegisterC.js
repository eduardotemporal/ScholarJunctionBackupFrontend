import React, { useState } from "react";
import bgImage from "../images/bg-linear.png";
import whiteLogoImage from '../images/white-logo.png';
import { Link, useNavigate } from 'react-router-dom';

export default function ProviderRegisterC() {
  const navigate = useNavigate()
  console.log(localStorage);
  const userId = localStorage.getItem('userId');
  const accessToken = localStorage.getItem('accessToken');
  const [governmentID, setGovernmentID] = useState(null);
  const [proofOfEmployment, setProofOfEmployment] = useState(null);

  // Handle file selection
  const handleGovernmentIDChange = (e) => {
    setGovernmentID(e.target.files[0]);
  };

  const handleProofOfEmploymentChange = (e) => {
    setProofOfEmployment(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("governmentID", governmentID);
    formData.append("proofOfEmployment", proofOfEmployment);
    formData.append("governmentTypeID", "someTypeID"); // Example value
    formData.append("proofOfEmploymentType", "someProofType"); // Example value

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/providers/user/${userId}`);

      
      if (!response.ok) {
        throw new Error("Error fetching provider data");
      }

      const responseData = await response.json();
      const providerId = responseData.provider._id; // Extract providerId
      console.log(providerId)
      console.log(accessToken)

      const uploadResponse = await fetch(`${process.env.REACT_APP_API_URL}/providers/createKYC/${providerId}`, {
     
        method: 'POST',
        headers: {
        Authorization: `Bearer ${accessToken}`
       },
        body: formData
      });

      if (!uploadResponse.ok) {
        throw new Error("Error uploading KYC details");
      }

      const uploadData = await uploadResponse.json();
      console.log(uploadData);
      alert("KYC details successfully uploaded!");
      navigate('/register-provider-f')

    } catch (error) {
      console.error("Error uploading KYC details", error);
      alert("Error uploading KYC details");
    }
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
          <div className="md:w-1/2 bg-white p-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-3 text-center">Sign up for Account (New organization)</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="government-id" className="block text-zinc-700">Government ID</label>
                <div className="border border-zinc-300 dark:border-zinc-600 rounded-lg p-4 bg-zinc-50">
                  <input
                    type="file"
                    id="government-id"
                    onChange={handleGovernmentIDChange}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200 hover:shadow-lg"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="proof-employment" className="block text-zinc-700">Proof of employment</label>
                <div className="border border-zinc-300 dark:border-zinc-600 rounded-lg p-4 bg-zinc-50">
                  <input
                    type="file"
                    id="proof-employment"
                    onChange={handleProofOfEmploymentChange}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200 hover:shadow-lg"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
