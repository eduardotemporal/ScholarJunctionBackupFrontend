import React from 'react';
import { Link } from 'react-router-dom';
import headerImage from '../images/Header.png';
import Greenbg from '../images/GreenBg.png';
import whitelogo from '../images/white-logo.png';

export default function ProviderPostScholarshipA() {


	return(
		<>

  
  <div className="py-16" style={{ backgroundImage: `url(${Greenbg})` }}>
    <div className="text-center mb-8">
      <h2 className="text-2xl font-bold text-white">Post your Scholarship</h2>
    </div>

    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 flex">
      <div className="w-1/2 flex items-center justify-center bg-gradient-to-r from-green-900 to-green-600 rounded-l-lg">
        <img src={whitelogo} alt="ScholarJunction Logo" className="h-32"/>
      </div>

      <div className="w-1/2 p-8">
        <h3 className="text-xl font-bold mb-4">Post your Scholarship</h3>
        <form>

                    <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Scholarship Type</label>
              <select
                name="chosenSchool"
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-200 ease-in-out"
              >
                <option value="">Scholarhip Type</option>
                <option>De La Salle University</option>
                <option>De La Salle - College of Saint Benilde</option>
              </select>
            </div>


         <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Scholarship type</label>
            <input type="text" className="w-full p-2 border rounded" placeholder="Title"/>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea className="w-full p-2 border rounded" placeholder="About organization..."></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Application deadline</label>
            <input type="date" className="w-full p-2 border rounded"/>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Renewable?</label>
            <div className="flex items-center">
              <label className="mr-4"><input type="radio" name="renewable" value="yes"/> Yes</label>
              <label><input type="radio" name="renewable" value="no"/> No</label>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Contact Information</label>
            <input type="text" className="w-full p-2 border rounded" placeholder="Contact Information"/>
          </div>
         <Link to="/provider-post-scholarshipb"> <button type="submit" className="bg-green-800 text-white p-2 rounded w-full hover:bg-green-500">Next</button></Link>
        </form>
      </div>
    </div>
  </div>
</>


		)
}