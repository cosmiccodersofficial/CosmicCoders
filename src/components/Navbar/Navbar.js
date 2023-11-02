import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
        <nav className="bg-gradient-to-r from-teal-500 to-blue-500 shadow-lg">
            <div className="flex justify-between items-center px-6 py-4">
                <Link href="/" className="text-white font-bold text-xl">Cosmic Coders</Link>
                <ul className="flex gap-x-4">
                <li><Link href="#" className="text-white hover:text-gray-200 flex items-center">
                    <svg className="fill-current h-5 w-5 mr-2 bi bi-house-door-fill" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" fill="white"></path> </svg>
                    Home
                </Link></li>
                <li><Link href="#" className="text-white hover:text-gray-200">About</Link></li>
                <li><Link href="#" className="text-white hover:text-gray-200">Services</Link></li>
                <li><Link href="#" className="text-white hover:text-gray-200">Contact</Link></li>
                </ul>
                <form className="flex items-center">
                <input type="search" className="bg-white rounded-l-lg border-r-2 border-gray-300 px-3 py-2" placeholder="Search"/>
                <button type="submit" className="text-white bg-gradient-to-r from-teal-500 to-blue-600 rounded-r-lg px-3 py-2">Search</button>
                </form>
            </div>
        </nav>
    </div>
  );
}

export default Navbar;
