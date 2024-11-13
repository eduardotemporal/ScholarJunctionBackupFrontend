import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import bgImage from '../images/bg-linear.png';
import whiteLogoImage from '../images/white-logo.png';
import Footer from '../components/Footer';

export default function ProviderRegisterA() {
    
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    organization: '',
    organizationType: '', // 'new' or 'existing'
    role: 'Provider'
  });

  // Redirect if 'registerRole' is missing
  useEffect(() => {
    const registerRole = localStorage.getItem("registerRole");
    if (!registerRole) {  
      navigate('/register');
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    const data = await response.json();

    if (data.error) {
      setError(data.error);


    } else {
      localStorage.removeItem('registerRole')
      localStorage.setItem('registerStepCompleted', 'Go');
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('userId', data.user._id);
      localStorage.setItem('organizationType', formData.organizationType)
      localStorage.setItem('organization', formData.organization)
          // if (formData.organizationType === 'new') {
          //   navigate('/register-provider-b');
          // } else if (formData.organizationType === 'existing') {
          //   navigate('/register-provider-d');
          // }
      console.log(localStorage)
      navigate('/register-provider-x')
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="bg-white shadow-lg rounded-lg flex max-w-4xl w-full overflow-hidden">
          {/* Left Side with Logo */}
          <div className="w-1/2 bg-gradient-to-r from-green-600 to-green-800 flex items-center justify-center p-8">
            <img src={whiteLogoImage} alt="Scholar Junction Logo" className="h-48" />
          </div>
          
          {/* Right Side with Form */}
          <div className="md:w-1/2 bg-white p-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-3 text-center">Sign up for Provider Account</h2>
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-zinc-700">First Name</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none" placeholder="Your First Name" required />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-zinc-700">Last Name</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none" placeholder="Your Last Name" required />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="email" className="block text-zinc-700">Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none" placeholder="Enter Your Email Address" required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label htmlFor="password" className="block text-zinc-700">Password</label>
                  <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none" placeholder="Enter password" required />
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-zinc-700">Confirm Password</label>
                  <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none" placeholder="Confirm Password" required />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="organization" className="block text-zinc-700">Organization</label>
                <input type="text" name="organization" value={formData.organization} onChange={handleChange} className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none" placeholder="Name of organization" required />
              </div>
              <div className="mt-4">
                <label className="block text-zinc-700">Are you a new or an existing organization?</label>
                <div className="flex items-center mt-2">
                  <input type="radio" name="organizationType" value="new" onChange={handleChange} checked={formData.organizationType === 'new'} className="mr-2" />
                  <label htmlFor="newOrganization" className="mr-4 text-zinc-700">New organization</label>
                  <input type="radio" name="organizationType" value="existing" onChange={handleChange} checked={formData.organizationType === 'existing'} className="mr-2" />
                  <label htmlFor="existingOrganization" className="text-zinc-700">Existing organization</label>
                </div>
              </div>
              <button type="submit" className="mt-6 w-full bg-green-700 text-white py-2 rounded">
                Next
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
