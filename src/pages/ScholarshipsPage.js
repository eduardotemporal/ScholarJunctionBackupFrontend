import React from "react";
import bgImage from "../images/bg-linear.png"
import whiteImage from "../images/white-logo.png"
import DLSU from "../images/image 45.png"
import { Link } from 'react-router-dom';





export default function ScholarshipsPage(){
    return(
        <div>
        <div className="bg-cover bg-center text-white p-8" style={{ backgroundImage: `url(${bgImage})` }}>
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-center">Find scholarship and achieve your dreams</h1>
            <p className="mt-2 text-center">Get financial aid to cater for your studies. We provide a collection of scholarships
              applications that suit your needs.</p>
          </div>
        </div>
        <main className="bg-white rounded-lg shadow-md p-8 mx-auto max-w-7xl">
          <section className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-4 mt-20">Archer La Salle Scholarship</h2>
              <img src={DLSU} alt="University Logo" className="w-full max-w-sm mx-auto lg:mx-0 mt-5" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-4 mt-20">Archer La Salle Scholarship</h2>
              <p className="text-zinc-700 mb-4">Description:</p>
              <p className="text-zinc-600 mb-4">
                Lorem ipsum blah blah blah ipsum nsous Lorem ipsum blah blah blah ipsum nsous Lorem ipsum blah blah blah ipsum nsous Lorem ipsum blah blah blah ipsum nsous Lorem ipsum blah blah blah ipsum
                nsous Lorem ipsum blah blah blah ipsum nsous Lorem ipsum blah blah blah ipsum nsous Lorem ipsum blah blah blah ipsum nsous Lorem ipsum blah blah blah ipsum nsous Lorem ipsum blah blah blah
                ipsum nsous Lorem ipsum blah blah blah ipsum nsous Lorem ipsum blah blah blah ipsum nsous Lorem ipsum blah blah blah ipsum nsous Lorem ipsum blah blah blah ipsum nsous
              </p>
              <p className="text-zinc-700 mb-4">Link:</p>
              <a href="https://www.dlsu.edu.ph/" className="text-blue-500 hover:underline">https://www.dlsu.edu.ph/</a>
            </div>
          </section>
        </main>
      </div>
    );
  }

    