import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-3 bg-gradient-to-r from-black via-gray-600 to-black">
      <h1 className="text-xl font-bold text-white">AIPatrn</h1>
      <nav className="flex space-x-3 text-gray-300">
        <ul className="space-x-4 items-center justify-center text-center">
          <li className=''>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-white font-bold" : "hover:text-white"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "text-white font-bold" : "hover:text-white"
              }
            >
              Report Submission
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-white font-bold" : "hover:text-white"
              }
            >
              About
            </NavLink>
          </li>
        </ul>
        <div className="flex items-center">
        <Link
            to="login"
            className="text-white bg-gray-700 hover:bg-black focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 mr-2 focus:outline-none transition-colors duration-200">
            Log in
        </Link>

          <Link
            to="signup"
            className="text-white bg-gray-700 hover:bg-black focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 mr-2 focus:outline-none"
          >
            Get started
          </Link>
        </div>
      </nav>
      <button className="md:hidden bg-gray-200 p-2 rounded">Menu</button>
    </header>
  );
}
