
import React, { useState } from 'react';
import bgImage from '../images/bg-linear.png';
import whiteLogoImage from '../images/white-logo.png';
import { Link, useNavigate } from 'react-router-dom';

export default function ScholarRegisterB() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    educationalLevel: '',
    previousSchool: '',
    schoolType: '',
    familyOccupation: '',
    pwd: '',
    chosenSchool: '',
    chosenCourse: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData)
  };

  const handleRadioChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value === "yes",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.error) {
      setError(formData.error);
      console.log(localStorage)

    } else {
      localStorage.setItem('registerFormDataB', JSON.stringify(formData));
      navigate('/register-scholar-c');
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
        <div className="bg-green-800 text-white flex flex-col items-center justify-center p-16 md:w-1/3 rounded-none shadow-lg">
          <img src={whiteLogoImage} alt="Logo" className="mb-6 w-48" />
          <h1 className="text-4xl font-extrabold text-center">Personal Details</h1>
          <p className="mt-3 text-center text-lg">Please fill in the following information.</p>
          <div className="mt-6 w-full border-t border-green-300"></div>
          <p className="mt-4 text-center text-sm italic">Your details help us serve you better!</p>
        </div>
        {/* Right Side: Registration Form */}
        <div className="p-8 md:w-2/3">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-6">Fill Out Your Details</h2>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Educational Level */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Educational Level</label>
              <select
                name="educationalLevel"
                value={formData.educationalLevel}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-200 ease-in-out"
              >
                <option>Junior High Level</option>
                <option>Senior High School Level</option>
                <option>College/University Undergraduate</option>
                <option>College/University Graduate</option>
                <option>Master's Degree</option>
                <option>Doctorate Level</option>
              </select>
            </div>

            {/* Previous School */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Previous School</label>
              <input
                type="text"
                name="previousSchool"
                value={formData.previousSchool}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-200 ease-in-out"
                placeholder="Name of Previous School"
                required
              />
            </div>

            {/* School Type */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">School Type</label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="schoolType"
                    value="Private"
                    checked={formData.schoolType === 'Private'}
                    onChange={handleChange}
                    className="mr-2"
                  /> Private
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="schoolType"
                    value="Public"
                    checked={formData.schoolType === 'Public'}
                    onChange={handleChange}
                    className="mr-2"
                  /> Public
                </label>
              </div>
            </div>

            {/* Family Occupation */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Family Occupation</label>
              <input
                type="text"
                name="familyOccupation"
                value={formData.familyOccupation}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-200 ease-in-out"
                placeholder="Occupation"
                required
              />
            </div>

            {/* PWD Status */}
           <div className="mb-2">
              <p className="text-zinc-700">Are you a PWD?</p>
              <label className="inline-flex items-center">
                <input type="radio" className="form-radio" name="pwd" value="yes" checked={formData.pwd === true} onChange={() => handleRadioChange("pwd", "yes")} />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input type="radio" className="form-radio" name="pwd" value="no" checked={formData.pwd === false} onChange={() => handleRadioChange("pwd", "no")} />
                <span className="ml-2">No</span>
              </label>
            </div>

            {/* Chosen School */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Chosen school</label>
              <select
                name="chosenSchool"
                value={formData.chosenSchool}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-200 ease-in-out"
              >
                <option value="">Select School</option>
                <option>De La Salle University</option>
                <option>De La Salle - College of Saint Benilde</option>
                <option>Far Eastern University Manila</option>
                <option>Ateneo De Manila</option>
                <option>Mapua Manila</option>
                <option>Pamantasan Lungsod ng Manila</option>
                <option>Philippine Woman University</option>
                <option>National University Manila</option>
                <option>Lyceum of the Philippine University</option>
                <option>Centro Escolar University</option>
                <option>Technological University of the Philippines</option>
                <option>University of the Philippines Manila</option>
                <option>University of Manila</option>
                <option>St. Paul University Manila</option>
                <option>Emilio Aguinaldo</option>
                <option>San Beda Manila</option>
                <option>St Scholastica College</option>
                <option>University of Sto Tomas</option>
                <option>Arellano University</option>
                <option>Adamson University</option>
                <option>Polytechnic University of the Philippines</option>
                <option>University of the East Manila</option>
                <option>Technological Institute of the Philippines</option>
                <option>Emilio Aguinaldo College</option>
                <option>San Juan de Letran College</option>
                <option>FEATI University</option>
                <option>National Teachers College</option>
                <option>La Consolacion College Manila</option>
                <option>College of the Holy Spirit</option>
                <option>St Jude College</option>
                <option>Santa Isabel College</option>
              </select>
            </div>

            {/* Chosen Course */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Chosen course</label>
              <select
                name="chosenCourse"
                value={formData.chosenCourse}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-200 ease-in-out"
              >
                <option value="">Select Course</option>
                <option>Bachelor of Architecture</option>
                                <option>Bachelor of Architecture</option>
                <option>Bachelor of Arts</option>
                <option>Bachelor of Business</option>
                <option>Bachelor of Business Administration</option>
                <option>Bachelor of Science in Business</option>
                <option>Bachelor of Canon Law</option>
                <option>Bachelor of Computer Science</option>
                <option>Bachelor of Science in Computer Science</option>
                <option>Bachelor of Criminal Justice</option>
                <option>Bachelor of Science in Criminal Justice</option>
                <option>Bachelor of Divinity</option>
                <option>Bachelor of Education</option>
                <option>Bachelor of Science in Education</option>
                <option>Bachelor of Science in Aerospace Engineering</option>
                <option>Bachelor of Science in Agricultural Engineering</option>
                <option>Bachelor of Science in Biological System</option>
                <option>Bachelor of Science in Biosystems and Agricultural Engineering</option>
                <option>Bachelor of Science in Biological Engineering</option>
                <option>Bachelor of Biomedical Engineering</option>
                <option>Bachelor of Science in Biomedical Engineering</option>
                <option>Bachelor of Science in Chemical Engineering</option>
                <option>Bachelor of Civil Engineering</option>
                <option>Bachelor of Science in Civil Engineering</option>
                <option>Bachelor of Computer Engineering</option>
                <option>Bachelor of Science in Computer Engineering</option>
                <option>Bachelor of Science in Computer Science and Engineering</option>
                <option>Bachelor of Electrical Engineering</option>
                <option>Bachelor of Science in Electrical Engineering</option>
                <option>Bachelor of Science in Engineering Management</option>
                <option>Bachelor of Fiber Engineering</option>
                <option>Bachelor of Science in Industrial Engineering</option>
                <option>Bachelor of Science in Manufacturing Engineering</option>
                <option>Bachelor of Mechanical Engineering</option>
                <option>Bachelor of Science in Mechanical Engineering</option>
                <option>Bachelor of Software Engineering</option>
                <option>Bachelor of Science in Software Engineering</option>
                <option>Business Economics</option>
                <option>Entrepreneurship</option>
                <option>Real Estate</option>
                <option>Medtech</option>
                <option>Pharmacy</option>
                <option>Aeronautical</option>
                <option>Electrical Engineer</option>
                <option>Industrial Engineer</option>
                <option>Engineer</option>
                <option>Computer Engineering</option>
                <option>Information Technology</option>
                <option>Information Systems</option>
                <option>Architect</option>
                <option>Interior Design</option>
                <option>Nursing</option>
                <option>Biology</option>
                <option>Computer Science</option>
                <option>Multi Media Arts</option>
                <option>Business</option>
                <option>Psychology</option>
                <option>Forensic Sciences</option>
                <option>Statistics</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end mt-6">
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-md shadow-md hover:from-green-600 hover:to-green-700 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
