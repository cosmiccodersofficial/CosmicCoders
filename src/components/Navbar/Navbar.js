import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';



const Navbar = () => {

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className={`fixed top-0 w-full z-10 ${visible ? 'block' : 'hidden'}`}>
        <div className="flex justify-between items-center px-6 py-2">
          <div className="cursor-pointer hover shadow-sm backdrop-blur-lg bg-gray-400 bg-opacity-10 rounded-full p-4 transition duration-300 bg-opacity-70 text-gray-900">
            <Link to="/" className="text-gray-900 font-bold text-xl "><span className='text-blue-900'>Cosmic</span> Coders</Link>
          </div>

          <ul className="flex gap-x-10 hover cursor-pointer shadow-sm backdrop-blur-lg bg-gray-400 bg-opacity-10 rounded-full p-4 transition duration-300 hover:bg-opacity-70 text-gray-900 me-5">
            <li className='hover'>
              <Link to="/" className="text-gray-900 font-bold hover:text-blue-800 flex items-center"><svg className="fill-current h-5 w-5 mr-2 bi bi-house-door-fill" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" fill="black"></path> </svg>
                Home
              </Link>
            </li>
            <li className='hover'><Link to="/about" className="text-gray-900 font-bold hover:text-blue-800">About</Link></li>
            <li className='hover'><Link to="/ourteam" className="text-gray-900 font-bold hover:text-blue-800">Our Team</Link></li>
            <li className='hover'><Link to="/contact" className="text-gray-900 font-bold hover:text-blue-800">Contact</Link></li>
          </ul>
          
          <Link to="/join" className="text-light font-bold text-xl ">
            <div className="cursor-pointer shadow-lg hover border-blue-500 bg-blue-900 hover:bg-blue-800 rounded-full sm:py-1 sm:px-3 md:py-2 md:px-4 lg:py-2.5 lg:px-6">
              <span className="text-white font-bold text-lg">Join Us</span>
            </div>
          </Link>
        </div>
      </nav >
    </div >
  );
}

export default Navbar;