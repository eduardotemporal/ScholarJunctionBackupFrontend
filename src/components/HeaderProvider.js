import React from 'react';
import { Link } from 'react-router-dom';
import whitelogo from '../images/white-logo.png';

export default function HeaderApplicant() {
return(


    <header className="bg-green-800 p-4 flex  justify-between items-center sticky top-0 z-10">
      <Link to="/">
        <div className="text-white text-2xl font-bold flex items-center">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
        <Link to="/home-provider"><img src={whitelogo} alt="Logo" className="h-10 w-10 mr-2"/></Link>
          Scholar<span className="text-green-400">junction</span>
          <span className="font-semibold text-lg"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;  Glad to have you back User!</span>
        </div>
      </Link>
      <nav className="space-x-4">
        





       

        
        <Link to="/home-provider" className="text-white hover:text-green-400">Home</Link>
        <Link to="/" className="text-white hover:text-green-400"> Notifications</Link>
        <Link to="/provider-post-scholarshipa" className="text-white hover:text-green-400"> Post Scholarship</Link>
        <Link to="/provider-edit-scholarshipa" className="text-white hover:text-green-400">Edit Scholarship</Link>
        <Link to= "/AboutProv" className="text-white hover:text-green-400">About Us </Link>
        <Link to="/provider-profile" className="text-white hover:text-green-400">Profile </Link>
        <Link to="/login" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800">Logout</Link>
      </nav>
    </header>

)
}