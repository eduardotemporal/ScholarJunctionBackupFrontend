import React from "react"
import profileIcon from "../images/icon-profile.png"
import VisitorAdmin from "../images/AdminVisitor.png";
import UserAdmin from "../images/AdminUsers.png";
import ScholarAdmin from "../images/AdminScholarship.png";
import { Link } from 'react-router-dom';


export default function AdminDashboard() {

  return (
    <div>
      <div className="min-h-screen flex">
        <div className="bg-green-900 text-white w-64 p-4 flex flex-col">
          <div className="flex items-center mb-6">
          </div>
          <div className="mb-6">
            <p>Welcome back, <span className="font-bold">Admin!</span></p>
          </div>
          <nav className="flex-1">
            <ul>
              <li className="mb-2">
                <a href="#" className="flex items-center p-2 hover:bg-green-800 rounded">
                  Dashboard
                </a>
              </li>
              <li className="mb-2">
                <div className="flex items-center p-2 hover:bg-green-800 rounded cursor-pointer">
                  <span>Scholarship List</span>
                </div>
                <div className="flex items-center p-2 hover:bg-green-800 rounded cursor-pointer">
                  <span>Users List</span>
                </div>
                <ul className="ml-4 mt-2">
                </ul>
              </li>
              <li className="mb-2">
                <a href="#" className="flex items-center p-2 hover:bg-green-800 rounded">
                Logout
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex-1 p-6 bg-cover " style={{ "background-image": "url('./images/Header.png')" }}>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-4 rounded shadow">
              <div className="flex items-center">
                <img src={VisitorAdmin} alt="visitors-icon" className="mr-4" />
                <div>
                  <p className="text-zinc-500">Visitors</p>
                  <p className="text-2xl font-bold">1000</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <div className="flex items-center">
                <img src={UserAdmin} alt="users-icon" className="mr-4" />
                <div>
                  <p className="text-zinc-500">Users</p>
                  <p className="text-2xl font-bold">500</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <div className="flex items-center">
                <img src={ScholarAdmin} alt="scholarships-icon" className="mr-4" />
                <div>
                  <p className="text-zinc-500">Scholarships</p>
                  <p className="text-2xl font-bold">1000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded shadow mb-6">
            <h2 className="text-xl font-bold mb-4">Statistics</h2>
            <div className="h-64 bg-zinc-200 rounded" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-bold mb-4">New Users</h2>
              <ul>
                <li className="flex justify-between mb-2">
                  <span>997</span>
                  <span>Bryce III</span>
                </li>
                <li className="flex justify-between mb-2">
                  <span>996</span>
                  <span>Bryce II</span>
                </li>
                <li className="flex justify-between mb-2">
                  <span>995</span>
                  <span>Bryce I</span>
                </li>
                <li className="flex justify-between mb-2">
                  <span>994</span>
                  <span>Bryce</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-bold mb-4">Tentative</h2>
              <div className="h-32 bg-zinc-200 rounded" />
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-bold mb-4">New Scholarships</h2>
              <ul>
                <li className="flex justify-between mb-2">
                  <span>997</span>
                  <span>Bryce III</span>
                </li>
                <li className="flex justify-between mb-2">
                  <span>996</span>
                  <span>Bryce II</span>
                </li>
                <li className="flex justify-between mb-2">
                  <span>995</span>
                  <span>Bryce I</span>
                </li>
                <li className="flex justify-between mb-2">
                  <span>994</span>
                  <span>Bryce</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}