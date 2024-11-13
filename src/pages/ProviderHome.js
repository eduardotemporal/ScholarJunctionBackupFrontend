import React from "react";
import { Link } from 'react-router-dom';
import bgImage from "../images/bg-linear.png";
import GraduateImage from "../images/Girl.png";
import Footer from "../components/Footer";
import GradCap from "../images/Gradcap.jpg";
import University from "../images/YUNIVERSITY.jpg";
import Prof from "../images/PROFILE.jpg";

export default function ProviderHome() {
  return (
    <div>
      <div className="bg-zinc-100 text-zinc-900 dark:text-zinc-100">
        <section
          className="bg-cover bg-center text-white p-8"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold">
              Find scholarship and achieve your dreams
            </h2>
            <p className="mt-4">
              Get financial aid to cover your studies. We provide a collection
              of scholarship applications that suit your needs.
            </p>
          </div>
        </section>
        <section className="py-12">
        <div className="container mx-auto px-4 py-16 text-center text-black">
          <h3 className="text-2xl font-bold">Get Started!</h3>
          <p className="mt-2">Here are what we recommend to prioritize.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden shadow-lg shadow-black-500/50 h-96">
              <a href><img className="w-full h-48 object-cover" src={GradCap} alt="Search by Scholarship" /></a>
              <h4 className="text-xl  text-white-400 mb-2 font-bold mt-4">Post your Scholarship</h4>
              <p className="text-white-400 mb-4">Find scholarships that match your criteria.</p>
              <Link to="/provider-post-scholarshipa"><button className="bg-green-800 hover:bg-green-400 text-white py-2 px-4 rounded mt-8">Post Scholarships</button></Link>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden shadow-lg shadow-black-500/50">
              <a href><img className="w-full h-48 object-cover" src={University} alt="Recommendations" /></a>
              <h4 className="mt-4 text-xl font-bold mt-4">Edit Scholarships</h4>
              <p className="mt-2">Get personalized scholarship recommendations.</p>
              <Link to="/provider-edit-scholarshipa"><button className="bg-green-800 hover:bg-green-400 text-white py-2 px-4 rounded mt-8">Edit Scholarships</button></Link>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden shadow-lg shadow-black-500/50">
              <a href><img className="w-full h-48 object-cover" src={Prof} alt="Profile" /></a>
              <h4 className="mt-4 text-xl font-bold mt-4">Profile</h4>
              <p className="mt-2">Manage your scholarship profile and preferences.</p>
              <Link to="/provider-profile"><button className="bg-green-800 hover:bg-green-400 text-white py-2 px-4 rounded mt-8">View Profile</button></Link>
            </div>
          </div>
        </div>
        </section>
        <section className="container mx-auto p-4 flex flex-col md:flex-row flex justify-center items-center">
            <div className="bg-green-700 text-white p-8 rounded-lg flex-1 h-96">
              <h2 className="text-2xl font-bold mt-24 text-center">Post your Scholarships to gain more exposure</h2>
              <h2 className="text-2xl font-bold mt-3 text-center"> Get more Applications in your Scholarships by Posting it here!</h2>
              <button className="mt-10 bg-white text-green-700 px-4 py-2 rounded hover:bg-green-500 relative mx-72 ">Post Now</button>
            </div>
            <div className="flex-1 mt-4 md:mt-0 md:ml-4  w-84">
              <img src={GraduateImage} alt="Graduate" className="rounded-lg"/> 
            </div>
          </section>
        <section className="bg-green-700 text-white p-8 mb-8 mt-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold">Your Scholarships</h3>
              <div className="flex">
                <input
                  className="p-2 rounded-l-lg"
                  type="text"
                  placeholder="Find your Course Here..."
                />
                <button className="bg-green-800 px-4 py-2 rounded-r-lg">Search</button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
              <div className="bg-green-600 p-4 rounded-lg shadow">
                <h4 className="text-lg font-bold">Academic-Based</h4>
                <p className="mt-2">A scholarship based on your academic merits.</p>
                <button className="mt-4 bg-green-800 text-white px-4 py-2 rounded">
                  Apply
                </button>
              </div>
              <div className="bg-green-600 p-4 rounded-lg shadow">
                <h4 className="text-lg font-bold">Need-Based</h4>
                <p className="mt-2">A scholarship based on your financial needs.</p>
                <button className="mt-4 bg-green-800 text-white px-4 py-2 rounded">
                  Apply
                </button>
              </div>
              <div className="bg-green-600 p-4 rounded-lg shadow">
                <h4 className="text-lg font-bold">Athletic</h4>
                <p className="mt-2">A scholarship based on your athletic achievements.</p>
                <button className="mt-4 bg-green-800 text-white px-4 py-2 rounded">
                  Apply
                </button>
              </div>
              <div className="bg-green-600 p-4 rounded-lg shadow">
                <h4 className="text-lg font-bold">Reserve</h4>
                <p className="mt-2">A scholarship reserved for special categories.</p>
                <button className="mt-4 bg-green-800 text-white px-4 py-2 rounded">
                  Apply
                </button>
              </div>
              <div className="bg-green-600 p-4 rounded-lg shadow">
                <h4 className="text-lg font-bold">Military</h4>
                <p className="mt-2">A scholarship for military personnel.</p>
                <button className="mt-4 bg-green-800 text-white px-4 py-2 rounded">
                  Apply
                </button>
              </div>
              <div className="bg-green-600 p-4 rounded-lg shadow">
                <h4 className="text-lg font-bold">Community Service</h4>
                <p className="mt-2">A scholarship for community service involvement.</p>
                <button className="mt-4 bg-green-800 text-white px-4 py-2 rounded">
                  Apply
                </button>
              </div>
              <div className="bg-green-600 p-4 rounded-lg shadow">
                <h4 className="text-lg font-bold">PWD</h4>
                <p className="mt-2">A scholarship for persons with disabilities.</p>
                <button className="mt-4 bg-green-800 text-white px-4 py-2 rounded">
                  Apply
                </button>
              </div>
              <div className="bg-green-600 p-4 rounded-lg shadow">
                <h4 className="text-lg font-bold">Reserve</h4>
                <p className="mt-2">A scholarship reserved for special categories.</p>
                <button className="mt-4 bg-green-800 text-white px-4 py-2 rounded">
                  Apply
                </button>
              </div>
            </div>
            <div className="text-center mt-8">
              <button className="bg-green-800 text-white px-4 py-2 rounded">
                Load More
              </button>
            </div>
          </div>
        </section>

      </div>
      <div className="a" />
      <Footer />
    </div>
  );
}
