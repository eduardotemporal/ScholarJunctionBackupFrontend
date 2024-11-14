import Footer from "../components/Footer";

import { Link , useNavigate } from 'react-router-dom';
import bgImage from '../images/bg-linear.png';
import React, { useEffect } from "react";
import girlImage from '../images/Girl.png'
import HomeImage1 from "../images/home-image-1.png";
import HomeImage2 from "../images/home-image-2.png";
import HomeImage3 from "../images/home-image-3.png";


export default function ScholarHome() {

  const navigate = useNavigate();
  const role = localStorage.getItem("userRole");  

  useEffect(() => {
    if(role === 'Provider'){
    console.log('FUCK')
    navigate('/')
    }
    const token = localStorage.getItem("accessToken"); // or use userId
    if (!token) {
      navigate("/");
    }
  }, [navigate]);


  return (

    <div>
      <section className="bg-cover bg-center text-white p-8" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold">Find scholarship and achieve your dreams</h2>
          <p className="mt-4">Get financial aid to cover your studies. We provide a collection of scholarship applications
            that suit your needs.</p>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-4 py-16 text-center text-black">
          <h3 className="text-2xl font-bold">Get Started!</h3>
          <p className="mt-2">Here are what we recommend to prioritize.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden shadow-lg shadow-black-500/50 h-96">
              <a href><img className="w-full h-48 object-cover" src={HomeImage1} alt="Search by Scholarship" /></a>
              <h4 className="text-xl  text-white-400 mb-2 font-bold mt-4">Search by Scholarship</h4>
              <p className="text-white-400 mb-4">Find scholarships that match your criteria.</p>
              <Link to="/applicant-search-course"><button className="bg-green-800 hover:bg-green-400 text-white py-2 px-4 rounded mt-8">Search Scholarships</button></Link>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden shadow-lg shadow-black-500/50">
              <a href><img className="w-full h-48 object-cover" src={HomeImage2} alt="Recommendations" /></a>
              <h4 className="mt-4 text-xl font-bold mt-4">Recommendations</h4>
              <p className="mt-2">Get personalized scholarship recommendations.</p>
              <Link to="/applicant-dashboard"><button className="bg-green-800 hover:bg-green-400 text-white py-2 px-4 rounded mt-8">Get Recommendations</button></Link>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden shadow-lg shadow-black-500/50">
              <a href><img className="w-full h-48 object-cover" src={HomeImage3} alt="Profile" /></a>
              <h4 className="mt-4 text-xl font-bold mt-4">Profile</h4>
              <p className="mt-2">Manage your scholarship profile and preferences.</p>
              <Link to="/scholar-profile"><button className="bg-green-800 hover:bg-green-400 text-white py-2 px-4 rounded mt-8">View Profile</button> </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto p-4 flex flex-col md:flex-row flex justify-center items-center">
            <div className="bg-green-700 text-white p-8 rounded-lg flex-1 h-96">
              <h2 className="text-2xl font-bold mt-24 text-center">Get scholarships according to your degree of preference.</h2>
              <h2 className="text-2xl font-bold mt-3 text-center"> Find financial aid to help you fund your education.</h2>
              <button className="mt-10 bg-white text-green-700 px-4 py-2 rounded hover:bg-green-500 relative mx-72 ">Apply Now</button>
            </div>
            <div className="flex-1 mt-4 md:mt-0 md:ml-4  w-84">
              <img src={girlImage} alt="Graduate" className="rounded-lg"/> 
            </div>
          </section>
      <div className="bg-white py-12">
          <div className="container mx-auto text-center">
            
          </div>
        </div>
      <section className="bg-green-700 text-white p-8 mb-8">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center">Scholarship Forms</h3>
          <h5 className="font-bold text-center">Fill up Scholarship forms to get more recommended scholarship</h5>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
            <div className="bg-green-600 p-4 rounded-lg shadow">
              <h4 className="text-lg font-bold">Academic-Based</h4>
              <p className="mt-2">A scholarship based on your academic merits.</p>
              <p className="mt-2">50% Completed</p>
             <Link to="/Scholarshipforms"><button className="mt-4 bg-green-800 text-white px-4 py-2 rounded hover:bg-lime-500 mt-8">Apply</button></Link> 
            </div>
            <div className="bg-green-600 p-4 rounded-lg shadow">
              <h4 className="text-lg font-bold">Need-Based</h4>
              <p className="mt-2">A scholarship based on your financial needs.</p>
              <p className="mt-2">50% Completed</p>
              <Link to="/Scholarshipforms"><button className="mt-4 bg-green-800 text-white px-4 py-2 rounded hover:bg-lime-500 mt-8">Apply</button></Link>
            </div>
            <div className="bg-green-600 p-4 rounded-lg shadow">
              <h4 className="text-lg font-bold">Athletic</h4>
              <p className="mt-2">A scholarship based on your athletic achievements.</p>
              <p className="mt-2">50% Completed</p>
              <Link to="/Scholarshipforms"><button className="mt-4 bg-green-800 text-white px-4 py-2 rounded hover:bg-lime-500 mt-8">Apply</button></Link>
            </div>
            <div className="bg-green-600 p-4 rounded-lg shadow">
              <h4 className="text-lg font-bold">Reserve</h4>
              <p className="mt-2">A scholarship reserved for special categories.</p>
              <p className="mt-2">50% Completed</p>
              <Link to="/Scholarshipforms"><button className="mt-4 bg-green-800 text-white px-4 py-2 rounded hover:bg-lime-500 mt-8">Apply</button></Link>
            </div>
            <div className="bg-green-600 p-4 rounded-lg shadow">
              <h4 className="text-lg font-bold">Military</h4>
              <p className="mt-2">A scholarship for military personnel.</p>
              <p className="mt-2">50% Completed</p>
              <Link to="/Scholarshipforms"><button className="mt-4 bg-green-800 text-white px-4 py-2 rounded hover:bg-lime-500 mt-8">Apply</button></Link>
            </div>
            <div className="bg-green-600 p-4 rounded-lg shadow">
              <h4 className="text-lg font-bold">Community Service</h4>
              <p className="mt-2">A scholarship for community service involvement.</p>
              <p className="mt-2">50% Completed</p>
              <Link to="/Scholarshipforms"><button className="mt-4 bg-green-800 text-white px-4 py-2 rounded hover:bg-lime-500 mt-8">Apply</button></Link>
            </div>
            <div className="bg-green-600 p-4 rounded-lg shadow">
              <h4 className="text-lg font-bold">PWD</h4>
              <p className="mt-2">A scholarship for persons with disabilities.</p>
              <p className="mt-2">50% Completed</p>
              <Link to="/Scholarshipforms"><button className="mt-4 bg-green-800 text-white px-4 py-2 rounded hover:bg-lime-500 mt-8">Apply</button></Link>
            </div>
            <div className="bg-green-600 p-4 rounded-lg shadow">
              <h4 className="text-lg font-bold">Reserve</h4>
              <p className="mt-2">A scholarship reserved for special categories.</p>
              <p className="mt-2">50% Completed</p>
              <Link to="/Scholarshipforms"><button className="mt-4 bg-green-800 text-white px-4 py-2 rounded hover:bg-lime-500 mt-8">Apply</button></Link>
            </div>
            <div className="text-center mt-8">
              <button className="bg-green-800 text-white px-4 py-2 rounded  relative ml-72  w-56 hover:bg-green-500">
                Load More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>

  )

}