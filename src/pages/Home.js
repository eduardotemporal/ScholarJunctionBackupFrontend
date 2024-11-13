import React from 'react';
import { Link } from 'react-router-dom';
import headerImage from '../images/Header.png';
import girlImage from '../images/Girl.png';
import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon4.png';
import Footer from '../components/Footer';
import DLSU from '../images/image 45.png';
import PCU from '../images/image 47.png';
import AT from '../images/image 48.png';
import CSB from '../images/image 49.png';
import PWU from '../images/image 50.png';

export default function Home() {

  localStorage.clear();

  return (
    <div className="bg-gray-50 text-gray-900">

      <header
        className="bg-cover bg-center h-96 flex flex-col justify-center items-center text-white"
        style={{ backgroundImage: `url(${headerImage})` }}
      >
        <h1 className="text-5xl font-bold text-center">Find Scholarships and Achieve Your Dreams</h1>
        <p className="mt-4 text-lg text-center max-w-lg">
          Get financial aid to cater for your studies. We provide a collection of scholarship applications that suit your needs.
        </p>
      </header>

    
      <section className="container mx-auto p-6 flex flex-col md:flex-row items-center">
        <div className="bg-green-700 text-white p-8 flex-1 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center">Get Scholarships According to Your Degree Preference</h2>
          <p className="mt-4 text-center">
            Find financial aid to help you fund your education.
          </p>
          <Link to="/apply">
            <button className="mt-10 bg-white text-green-700 px-6 py-2 rounded hover:bg-green-500 transition duration-300 mx-auto block">
              Apply Now
            </button>
          </Link>
        </div>
        <div className="flex-1 mt-6 md:mt-0 md:ml-6">
          <img src={girlImage} alt="Graduate" className="rounded-lg shadow-lg" />
        </div>
      </section>

    
      <section className="container mx-auto text-center p-6">
        <h2 className="text-3xl font-bold mb-6">What is ScholarJunction?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[icon1, icon2, icon3, icon4].map((icon, index) => (
            <Link to="" key={index}>
              <div className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
                <img src={icon} alt={`Description ${index + 1}`} className="mx-auto mb-2" />
                <p>Description {index + 1}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

     
      <section className="bg-green-700 text-white p-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Trending Scholarships</h2>
          <p className="mb-8">Explore the latest scholarship opportunities available for you.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((num) => (
              <Link to="" key={num}>
                <div className="bg-green-800 p-6 rounded-lg hover:bg-green-500 transition duration-300 h-48 overflow-y-auto">
                  <h3 className="text-xl font-bold">Provider #{num}</h3>
                  <p className="mt-2">
                    Brief information about Scholarship Provider #{num}. Learn more about the opportunities available.
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    
      <section className="container mx-auto text-center p-8">
        <h2 className="text-3xl font-bold mb-6">Our University Partners</h2>
        <div className="flex justify-center space-x-6 flex -wrap">
          {[DLSU, PCU, CSB, PWU, AT].map((partner, index) => (
            <img src={partner} alt={`Partner ${index + 1}`} key={index} className="h-16 w-auto" />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}