import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import bgImage from '../images/bg-linear.png';
import whiteLogoImage from '../images/white-logo.png';

export default function ProviderRegisterB() {
  const userId = localStorage.getItem('userId')
  const [formData, setFormData] = useState({
    position: '',
    organization: '',
    address: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    console.log(userId)
    console.log(formData)


  };

  const handleSubmit = async (e) => {
    const token = localStorage.getItem('accessToken');
    e.preventDefault();
    const response = await fetch(`${process.env.REACT_APP_API_URL}/providers/user/post/${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({

        organization : localStorage.getItem('organization'),
        organizationDetails: [
          {
            position: formData.position,
            address: formData.address,
            organizationPassword : formData.organizationPassword 
          }
            ],
        userId: userId,
        organizationType: "new",
      })
    });
    const data = await response.json();

    if (data.error) {
      setError(data.error);
    } else {
      navigate('/register-provider-c');
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
          
          {/* Right Side Form */}
          <div className="md:w-1/2 bg-white p-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-3 text-center">Sign up for Account (New organization)</h2>
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            <form onSubmit={handleSubmit}>
              <div className="flex space-x-4 mb-4">
                <input 
                  type="text" 
                  name="position"
                  value={formData.position} 
                  onChange={handleChange}
                  placeholder="Position" 
                  className="block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                  required
                />
                <input 
                  type="text" 
                  name="organization"
                  value={formData.organization} 
                  onChange={handleChange}
                  placeholder="Name of organization" 
                  className="block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                  required
                />
              </div>
              <div className="mb-4">
                <input 
                  type="text" 
                  name="address"
                  value={formData.address} 
                  onChange={handleChange}
                  placeholder="Address of organization" 
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                  required
                />
              </div>
               <div className="mb-4">
                <input 
                  type="password" 
                  name="organizationPassword"
                  value={formData.organizationPassword} 
                  onChange={handleChange}
                  placeholder="Organization Password" 
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                  required
                />
              </div>

              <p className="text-zinc-600 mb-4">Note: You will proceed with KYC verification</p>
              <button 
                type="submit" 
                className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
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
