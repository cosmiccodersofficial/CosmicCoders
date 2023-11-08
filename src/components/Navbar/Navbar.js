import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
//  bg-gradient-to-r from-teal-500 to-blue-500 
const Navbar = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.75) {
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
              <div className="cursor-pointer shadow-sm backdrop-blur-lg bg-gray-50 bg-opacity-30 rounded-full p-4 transition duration-300 lg:py-3.5 lg:px-6 hover:bg-opacity-70 text-gray-900">
                <Link to="/" className="text-gray-900 font-bold text-xl "><span className='text-blue-900'>Cosmic</span> Coders</Link>
              </div>
                
                <ul className="flex gap-x-10 cursor-pointer shadow-sm backdrop-blur-lg bg-gray-50 bg-opacity-30 rounded-full p-4 transition duration-300 lg:py-3.5 lg:px-6 hover:bg-opacity-70 text-gray-900 me-5">
                  <li>
                    <Link to="/" className="text-gray-900 font-bold hover:text-blue-800 flex items-center"><svg className="fill-current h-5 w-5 mr-2 bi bi-house-door-fill" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" fill="black"></path> </svg>
                      Home 
                    </Link>
                  </li>
                  <li><Link to="/about" className="text-gray-900 font-bold hover:text-blue-800">About</Link></li>
                  <li><Link to="/ourteam" className="text-gray-900 font-bold hover:text-blue-800">Our Team</Link></li>
                  <li><Link to="/contact" className="text-gray-900 font-bold hover:text-blue-800">Contact</Link></li>
                </ul>
                <div className='flex items-center'>

                </div>
                {/* <form className="flex items-center">
                <input type="search" className="bg-white rounded-l-lg border-r-2 border-gray-300 px-3 py-2" placeholder="Search"/>
                <button type="submit" className="text-white bg-gradient-to-r from-teal-500 to-blue-600 rounded-r-lg px-3 py-2">Search</button>
                </form> */}
            </div>
        </nav>
    </div>
  );
}

export default Navbar;




// className="cursor-pointer rounded-full p-4 transition duration-300 lg:py-3.5 lg:px-6 bg-gray-50 bg-opacity-60 hover:bg-opacity-80 backdrop-blur text-gray-900"