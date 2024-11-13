import React from 'react';
import { Link } from 'react-router-dom';
import headerImage from '../images/Header.png';
import Greenbg from '../images/GreenBg.png';
import whitelogo from '../images/white-logo.png';


export default function ProviderPostScholarshipA() {



	return(
<>
<div className="bg-cover bg-center h-64 flex flex-col justify-center items-center text-white" style={{ backgroundImage: `url(${headerImage})` }}>
    <h1 className="text-3xl font-bold">Find scholarship and achieve your dreams</h1>
    <p className="mt-2 text-center">Get financial aid to cater for your studies. We provide a collection of scholarships applications that suit your needs.</p>
  </div>
  
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
          <div class="mb-4">
            <label class="block text-zinc-700">Organization Name</label>
            <input type="text" class="w-full p-2 border border-zinc-300 rounded" placeholder="Organization name"/>
          </div>
          <div class="mb-4">
            <label class="block text-zinc-700">Organization Details</label>
            <textarea class="w-full p-2 border border-zinc-300 rounded" placeholder="Details..."></textarea>
          </div>
          <div class="mb-4">
            <label class="block text-zinc-700">Terms and conditions</label>
            <textarea class="w-full p-2 border border-zinc-300 rounded" placeholder="Terms and conditions..."></textarea>
          </div>
  
        </form>
         <Link to="/provider-post-scholarshipc"> <button type="submit" className="bg-green-800 text-white p-2 rounded w-full hover:bg-green-500">Next</button></Link>
      </div>
    </div>
  </div>
  </>

		)
}