import React from "react";
import { Link } from "react-router-dom";


export default function ProviderHeader() {

  return (

    <div>
      @ -5,22 +5,24 @@
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <header className="bg-green-700 text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href><img src="images/white-logo.png" alt="Logo" className="h-10 w-10 mr-2" /></a>
          <a href><span className="text-2xl font-bold">Scholar</span><span className="text-green-500 text-2xl font-bold">junction</span></a>
          <span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;  Glad to have you back User!</span>
        </div>
        <nav className="space-x-4">
          <a href="#" className="text-white hover:text-green-400">Home</a>
          <a href="#" className="text-white hover:text-green-400"> Your Scholarships</a>
          <a href="#" className="text-white hover:text-green-400">Edit Scholarship</a>
          <a href="#" className="text-white hover:text-green-400">Dashboard</a>
          <a href="#" className="text-white hover:text-green-400">About us</a>
          <a href="#" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800">Logout</a>
        </nav></header>
      <div className="bg-zinc-100 text-zinc-900 dark:text-zinc-100">
        <header className="bg-green-700 text-white p-4 flex justify-between items-center">
          <div className="flex items-center">
            <button className="mr-4">
              <img aria-hidden="true" alt="menu" src="./images/Logo.png" />
            </button>
            <h1 className="text-lg font-bold">scholar<span className="text-green-300">junction</span></h1>
          </div>
          <div>
            <span className="mr-4">Hello, User! Welcome back!</span>
            <button className="bg-green-800 px-4 py-2 rounded">Logout</button>
          </div>
        </header>
        <section className="bg-cover bg-center text-white p-8" style={{ "background-image": "url('./images/Header.png')" }}>
          <div className="max-w-4xl mx-auto text-center">
          </div></section></div></div>
  )

}