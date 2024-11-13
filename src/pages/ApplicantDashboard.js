import React from 'react';
import headerImage from '../images/Header.png';
import { Link } from 'react-router-dom';


export default function ApplicantDashboard(){
    return(
      
        <div className="bg-[var(--background)] text-[var(--foreground)]">
  
        <div className="relative bg-cover bg-center h-64 z-0"  style={{ backgroundImage: `url(${headerImage})` }}>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
            <h1 className="text-3xl font-bold">Applicant Dashboard</h1>
          </div>
        </div>
        <div className="py-12 bg-[var(--background)] text-center">
    <h2 className="text-2xl font-semibold">Recommended Scholarship</h2>
    <p className="mt-2 text-[var(--muted-foreground)]">Here are what we recommend to prioritize.</p>
    <div className="mt-6 space-y-4">
      <a href=""><div className="bg-[var(--card)] p-4 rounded-lg shadow-md flex justify-between items-center">
        <span>Scholarship #1</span>
        <span>100%</span>
      </div></a>
     <a href=""><div className="bg-[var(--card)] p-4 rounded-lg shadow-md flex justify-between items-center">
      <span>Scholarship #2</span>
      <span>100%</span>
    </div></a> 
    <a href=""><div className="bg-[var(--card)] p-4 rounded-lg shadow-md flex justify-between items-center">
        <span>Scholarship #3</span>
        <span>100%</span>
      </div></a>
      <a href=""><div className="bg-[var(--card)] p-4 rounded-lg shadow-md flex justify-between items-center">
        <span>Scholarship #4</span>
        <span>100%</span>
      </div></a>
      <a href=""><div className="bg-[var(--card)] p-4 rounded-lg shadow-md flex justify-between items-center">
        <span>Scholarship #5</span>
        <span>100%</span>
      </div></a>
      <a href=""><div className="bg-[var(--card)] p-4 rounded-lg shadow-md flex justify-between items-center">
        <span>Scholarship #6</span>
        <span>100%</span>
      </div></a>
      <a href=""><div className="bg-[var(--card)] p-4 rounded-lg shadow-md flex justify-between items-center">
        <span>Scholarship #7</span>
        <span>100%</span>
      </div></a>
      <a href=""><div className="bg-[var(--card)] p-4 rounded-lg shadow-md flex justify-between items-center">
        <span>Scholarship #8</span>
        <span>100%</span>
      </div></a>
      <a href=""><div className="bg-[var(--card)] p-4 rounded-lg shadow-md flex justify-between items-center">
        <span>Scholarship #9</span>
        <span>100%</span>
      </div></a>
      <a href=""><div className="bg-[var(--card)] p-4 rounded-lg shadow-md flex justify-between items-center">
        <span>Scholarship #10</span>
        <span>100%</span>
      </div></a>
      
    </div>
  </div>
  <div className="py-12 bg-green-600 text-white">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      
      <div className="bg-[var(--card)] bg-white text-black p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold">Scholarship Forms</h3>
        <div className="mt-4 space-y-4">
        <Link to="/Scholarshipforms"> <a href=""><div className="bg-[var(--card)] p-4 rounded-lg shadow-md flex justify-between items-center">
            <span> Academic Scholarship</span>
            <span>40% complete</span>
          </div></a></Link>
          <Link to="/Scholarshipforms"> <a href=""><div className="bg-[var(--card)] p-4 rounded-lg shadow-md flex justify-between items-center">
            <span> Academic Scholarship</span>
            <span>40% complete</span>
          </div></a></Link>
          <Link to="/Scholarshipforms"> <a href=""><div className="bg-[var(--card)] p-4 rounded-lg shadow-md flex justify-between items-center">
            <span> Academic Scholarship</span>
            <span>40% complete</span>
          </div></a></Link>
          <Link to="/Scholarshipforms"> <a href=""><div className="bg-[var(--card)] p-4 rounded-lg shadow-md flex justify-between items-center">
            <span> Academic Scholarship</span>
            <span>40% complete</span>
          </div></a></Link>
          <Link to="/Scholarshipforms"> <a href=""><div className="bg-[var(--card)] p-4 rounded-lg shadow-md flex justify-between items-center">
            <span> Academic Scholarship</span>
            <span>40% complete</span>
          </div></a></Link>
          <Link to="/Scholarshipforms"> <a href=""><div className="bg-[var(--card)] p-4 rounded-lg shadow-md flex justify-between items-center">
            <span> Academic Scholarship</span>
            <span>40% complete</span>
          </div></a></Link>
          <Link to="/Scholarshipforms"> <a href=""><div className="bg-[var(--card)] p-4 rounded-lg shadow-md flex justify-between items-center">
            <span> Academic Scholarship</span>
            <span>40% complete</span>
          </div></a></Link>
          <Link to="/Scholarshipforms"> <a href=""><div className="bg-[var(--card)] p-4 rounded-lg shadow-md flex justify-between items-center">
            <span> Academic Scholarship</span>
            <span>40% complete</span>
          </div></a></Link>
        </div>
      </div>
      <div className="bg-[var(--card)] bg-green-800 p-6 rounded-lg  shadow-md">
        <h3 className="text-xl font-semibold ">Trending Scholarships</h3>
        <div className="mt-4 space-y-4">
          <div className="bg-[var(--input)] bg-green-600 p-4 rounded-lg shadow-md hover:bg-green-400">
            <a href=""><h4 className="font-semibold">Provider #1</h4></a>
            <a href=""><p className="mt-2 text-[var(--muted-foreground)]">Scholarship includes brief information. Scholarship includes brief information. Scholarship includes brief information. Scholarship includes brief information.</p></a>
          </div>
          <div className="bg-[var(--input)] p-4 bg-green-600 rounded-lg shadow-md hover:bg-green-400">
           <a href=""><h4 className="font-semibold">Provider #2</h4></a> 
            <a href=""><p className="mt-2 text-[var(--muted-foreground)]">Scholarship includes brief information. Scholarship includes brief information. Scholarship includes brief information. Scholarship includes brief information.</p></a>
          </div>
          <div className="bg-[var(--card)] p-4 bg-green-600 rounded-lg shadow-md hover:bg-green-400">
            <a href=""><h4 className="font-semibold">Provider #3</h4></a>
            <a href=""><p className="mt-2 text-[var(--muted-foreground)]">Scholarship includes brief information. Scholarship includes brief information. Scholarship includes brief information. Scholarship includes brief information.</p></a>
          </div>
          <div className="bg-[var(--card)] p-4 bg-green-600 rounded-lg shadow-md hover:bg-green-400">
            <a href=""><h4 className="font-semibold">Provider #4</h4></a>
            <a href=""><p className="mt-2 text-[var(--muted-foreground)]">Scholarship includes brief information. Scholarship includes brief information. Scholarship includes brief information. Scholarship includes brief information.</p></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}