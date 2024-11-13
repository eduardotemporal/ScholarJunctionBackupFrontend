import React from 'react';
import bgImage from "../images/bg-linear.png";
import { Link } from 'react-router-dom';



export default function ProviderEditScholarshipA(){
return(

    <div>
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
  <main className="flex flex-col items-center p-4">
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-green-700 dark:text-green-300 text-xl">Archer achiever scholarship</span>
         <Link to="/provider-edit-scholarshipb"><a href="/provider-edit-scholarshipb" className="text-blue-500 dark:text-blue-300 font-bold">Edit</a></Link> 
        </div>
        <div className="flex justify-between items-center">
          <span className="text-green-700 dark:text-green-300 text-xl">Archer achiever scholarship</span>
          <a href="/provider-edit-scholarshipb" className="text-blue-500 dark:text-blue-300 font-bold">Edit</a>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-green-700 dark:text-green-300 text-xl">Archer achiever scholarship</span>
          <a href="/provider-edit-scholarshipb" className="text-blue-500 dark:text-blue-300 font-bold">Edit</a>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-green-700 dark:text-green-300 text-xl">Archer achiever scholarship</span>
          <a href="/provider-edit-scholarshipb" className="text-blue-500 dark:text-blue-300 font-bold">Edit</a>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-green-700 dark:text-green-300 text-xl">Archer achiever scholarship</span>
          <a href="/provider-edit-scholarshipb" className="text-blue-500 dark:text-blue-300 font-bold">Edit</a>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-green-700 dark:text-green-300 text-xl">Archer achiever scholarship</span>
          <a href="/provider-edit-scholarshipb" className="text-blue-500 dark:text-blue-300 font-bold">Edit</a>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-green-700 dark:text-green-300 text-xl">Archer achiever scholarship</span>
          <a href="/provider-edit-scholarshipb" className="text-blue-500 dark:text-blue-300 font-bold">Edit</a>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-green-700 dark:text-green-300 text-xl">Archer achiever scholarship</span>
          <a href="/provider-edit-scholarshipb" className="text-blue-500 dark:text-blue-300 font-bold">Edit</a>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-green-700 dark:text-green-300 text-xl">Archer achiever scholarship</span>
          <a href="/provider-edit-scholarshipb" className="text-blue-500 dark:text-blue-300 font-bold">Edit</a>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-green-700 dark:text-green-300 text-xl">Archer achiever scholarship</span>
          <a href="/provider-edit-scholarshipb" className="text-blue-500 dark:text-blue-300 font-bold">Edit</a>
        </div>
      </div>
    </div>
  </main>
</div>

)
}