import React from 'react'

export default function AdminScholarsView(){


	return(
	
<div className="min-h-screen bg-zinc-100 flex">
  
  <div className="bg-green-700 text-white w-64 space-y-6 py-7 px-2">
    <div className="flex items-center space-x-2 px-4">
      <img src="images/white-logo.png" alt="logo" className="h-12 w-12"/>
      <span className="text-2xl font-extrabold">scholarjunction</span>
    </div>
    <nav>
      <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-green-600">Dashboard</a>
      <div className="relative">
        <button className="w-full text-left py-2.5 px-4 rounded transition duration-200 hover:bg-green-600 flex justify-between items-center">
          Lists
          <span className="ml-2">▼</span>
        </button>
        <div className="mt-2 space-y-2">
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-green-600">Scholarship List</a>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-green-600">Scholars List</a>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-green-600">Providers List</a>
        </div>
      </div>
      <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-green-600">Profile</a>
    </nav>
  </div>
  
  <div className="flex-1 p-10 text-2xl font-bold">
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl">View Scholars</h1>
      <div className="flex items-center space-x-4">
        <input type="text" placeholder="Search" className="px-4 py-2 rounded border border-zinc-300"/>
        <button className="bg-green-600 text-white px-4 py-2 rounded">Logout</button>
      </div>
    </div>
    <div className="bg-white shadow-md rounded my-6">
      <table className="min-w-max w-full table-auto">
        <thead>
          <tr className="bg-green-600 text-white uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">User no.</th>
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Email</th>
            <th className="py-3 px-6 text-left">Contact</th>
            <th className="py-3 px-6 text-left">Applicant/Provider</th>
            <th className="py-3 px-6 text-left">Status</th>
            <th className="py-3 px-6 text-left">Action</th>
          </tr>
        </thead>
        <tbody className="text-zinc-600 text-sm font-light">
          <tr className="border-b border-zinc-200 hover:bg-zinc-100">
            <td className="py-3 px-6 text-left">1</td>
            <td className="py-3 px-6 text-left">Aries Salazar</td>
            <td className="py-3 px-6 text-left">salazararies@gmail.com</td>
            <td className="py-3 px-6 text-left">09060586731</td>
            <td className="py-3 px-6 text-left">Applicant</td>
            <td className="py-3 px-6 text-left">
              <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">Active</span>
            </td>
            <td className="py-3 px-6 text-left">
              <button className="bg-green-500 text-white px-4 py-2 rounded mr-2">Edit</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
            </td>
          </tr>
          <tr className="border-b border-zinc-200 hover:bg-zinc-100">
            <td className="py-3 px-6 text-left">2</td>
            <td className="py-3 px-6 text-left">Tristan Lat</td>
            <td className="py-3 px-6 text-left">tristanlat@gmail.com</td>
            <td className="py-3 px-6 text-left">09060586731</td>
            <td className="py-3 px-6 text-left">Applicant</td>
            <td className="py-3 px-6 text-left">
              <span className="bg-zinc-200 text-zinc-600 py-1 px-3 rounded-full text-xs">Inactive</span>
            </td>
            <td className="py-3 px-6 text-left">
              <button className="bg-green-500 text-white px-4 py-2 rounded mr-2">Edit</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
            </td>
          </tr>
          
        </tbody>
      </table>
    </div>
  </div>
</div>


)
}