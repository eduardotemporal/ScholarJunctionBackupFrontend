import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import bgImage from '../images/bg-linear.png';
import whiteLogoImage from '../images/white-logo.png';
import Footer from '../components/Footer';

export default function ScholarRegisterA() {
    
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'Student'
  });


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
      console.log(localStorage)

    } else {
      localStorage.removeItem('registerRole')
      localStorage.setItem('registerStepCompleted', 'Go');
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('userId', data.user._id);
      navigate('/register-scholar-x');
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center relative" 
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white rounded-lg shadow-xl flex flex-col md:flex-row max-w-5xl w-full overflow-hidden">
        {/* Left Side: Logo and Welcome Message */}
        <div className="bg-green-800 text-white flex flex-col items-center justify-center p-16 md:w-1/3 shadow-lg">
          <img src={whiteLogoImage} alt="Logo" className="mb-6 w-48" />
          <h1 className="text-4xl font-extrabold text-center">Welcome to Scholar Registration</h1>
          <p className="mt-3 text-center text-lg">Join us to unlock your academic potential.</p>
          <div className="mt-6 w-full border-t border-green-300"></div>
          <p className="mt-4 text-center text-sm italic">Your journey starts here!</p>
        </div>
        {/* Right Side: Registration Form */}
        <div className="p-8 md:w-2/3">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-6">Create Your Account</h2>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {[
              { id: 'firstName', label: 'First Name', type: 'text' },
              { id: 'lastName', label: 'Last Name', type: 'text' },
              { id: 'email', label: 'Email', type: 'email' },
              { id: 'password', label: 'Password', type: 'password' },
              { id: 'confirmPassword', label: 'Confirm Password', type: 'password' },
            ].map(({ id, label, type }) => (
              <div key={id} className="relative">
                <label htmlFor={id} className="block text-sm font-medium text-gray-700 capitalize">{label}</label>
                <input 
                  type={type} 
                  id={id} 
                  name={id} 
                  value={formData[id]} 
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-200 ease-in-out" 
                  placeholder={`Enter ${label}`} 
                  required
                />
              </div>
            ))}
            <div>
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-md shadow-md hover:from-green-600 hover:to-green-700 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Sign Up
              </button>
            </div>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account? <Link to="/login" className="text-green-500 hover:underline">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
