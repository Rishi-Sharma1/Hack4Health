import React from 'react'
import {Link, NavLink} from 'react-router-dom'
export default function Header() {
    return (
        <header className="flex justify-between items-center p-3" style={{ backgroundColor: '#f0f0f0' }}>
            <h1 className="text-xl font-bold text-gray-800">AIPatrn</h1>
            <nav className="space-x-3 text-gray-600 flex">
            <ul className='px-2'>
                <li>
                    <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "text-black font-bold" : "hover:text-black"
                    }
                    >
                    Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        isActive ? "text-black font-bold" : "hover:text-black"
                    }
                    >
                    Report Submission
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? "text-black font-bold" : "hover:text-black"
                    }
                    >
                    About
                    </NavLink>
                </li>
            </ul>
            <ul className='px-2'>
            </ul>
            <div className="flex items-center lg:order-2">
                        <Link
                            to="login"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="signup"
                            className="text-white bg-gray-700 hover:bg-black-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
      </nav>
      <button className="md:hidden bg-gray-200 p-2 rounded">Menu</button>
    </header>
    );
}

