 import React from 'react';


 export default function AdminViewScholarship()
 {

 	return(

 	<div className="flex h-screen">

    <div className="w-1/7 h-1/7 bg-green-800 text-white flex flex-col items-center p-4">
      <img src="https://placehold.co/100x100" alt="Logo" className="mb-4"/>
      <p className="mb-4">Welcome back, <span className="font-bold">Admin!</span></p>
      <nav className="w-full">
        <ul className="mb-4"> 
          <li className="mb-2">
            <a href="#" className="flex items-center p-2 rounded hover:bg-green-700">
              <i className="fa-solid fa-house"></i><span className="ml-2">Homepage</span>
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center p-2 rounded hover:bg-green-700">
              <i className="fa-solid fa-list"></i> <span className="ml-2">Scholarship List</span>
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center p-2 rounded hover:bg-green-700">
              <i className="fa-solid fa-school"></i><span className="ml-2">Scholars List</span>
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center p-2 rounded hover:bg-green-700">
              <i className="fa-solid fa-chalkboard-user"></i><span className="ml-2">Providers List</span>
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center p-2 rounded hover:bg-green-700">
              <i className="fa-solid fa-user"></i><span className="ml-2">Profile</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <div className="flex-1 flex flex-col bg-white">

      <div className="flex items-center justify-between bg-green-700 text-white p-4">
        <div className="flex items-center">
          <input type="text" placeholder="Search" className="p-2 rounded bg-white text-black"/>
        </div>
        <div className="flex items-center space-x-4">
          <button className="material-icons"><i className="fa-solid fa-bell"></i></button>
          <button className="material-icons"><i className="fa-solid fa-circle-info"></i></button>
          <button className="bg-green-600 p-2 rounded">Logout</button>
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">View Scholars</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-green-600 text-white">Scholarship no.</th>
                <th className="py-2 px-4 bg-green-600 text-white">Name</th>
                <th className="py-2 px-4 bg-green-600 text-white">Email</th>
                <th className="py-2 px-4 bg-green-600 text-white">Contact</th>
                <th className="py-2 px-4 bg-green-600 text-white">Status</th>
                <th className="py-2 px-4 bg-green-600 text-white">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 px-4">1</td>
                <td className="py-2 px-4">Archer Achiever Scholarship</td>
                <td className="py-2 px-4">123456789@gmail.com</td>
                <td className="py-2 px-4">: 0999999999</td>
                <td className="py-2 px-4"><span className="bg-green-500 text-white p-1 rounded">Active</span></td>
                <td className="py-2 px-4">
                  <button className="bg-blue-500 text-white p-1 rounded mr-2">Edit</button>
                  <button className="bg-red-500 text-white p-1 rounded">Delete</button>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">2</td>
                <td className="py-2 px-4">Star Scholarship</td>
                <td className="py-2 px-4">123456789@gmail.com</td>
                <td className="py-2 px-4">: 0999999999</td>
                <td className="py-2 px-4"><span className="bg-zinc-500 text-white p-1 rounded">Inactive</span></td>
                <td className="py-2 px-4">
                  <button className="bg-blue-500 text-white p-1 rounded mr-2">Edit</button>
                  <button className="bg-red-500 text-white p-1 rounded">Delete</button>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">1</td>
                <td className="py-2 px-4">Archer Achiever Scholarship</td>
                <td className="py-2 px-4">123456789@gmail.com</td>
                <td className="py-2 px-4">: 0999999999</td>
                <td className="py-2 px-4"><span className="bg-green-500 text-white p-1 rounded">Active</span></td>
                <td className="py-2 px-4">
                  <button className="bg-blue-500 text-white p-1 rounded mr-2">Edit</button>
                  <button className="bg-red-500 text-white p-1 rounded">Delete</button>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">2</td>
                <td className="py-2 px-4">Star Scholarship</td>
                <td className="py-2 px-4">123456789@gmail.com</td>
                <td className="py-2 px-4">: 0999999999</td>
                <td className="py-2 px-4"><span className="bg-zinc-500 text-white p-1 rounded">Inactive</span></td>
                <td className="py-2 px-4">
                  <button className="bg-blue-500 text-white p-1 rounded mr-2">Edit</button>
                  <button className="bg-red-500 text-white p-1 rounded">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

 		)
 }

 