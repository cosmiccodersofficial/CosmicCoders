import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faTwitter, faYoutube, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col items-center justify-between px-4">
        <div className="flex flex-col items-center mb-8">
          <img src={logo} alt="Logo" className="cursor-pointer w-16 h-16 rounded-full" />
          <p className="text-sm font-semibold font-medium mt-2">© 2023 Cosmic Coders</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/about" className="text-sm hover font-semibold font-medium hover:text-gray-400">About</Link>
          <Link to="/contact" className="text-sm hover font-semibold font-medium hover:text-gray-400">Contact</Link>
          <Link to="/terms" className="text-sm hover font-semibold font-medium hover:text-gray-400">Terms & Conditions</Link>
          <Link to="/privacy" className="text-sm hover font-semibold font-medium hover:text-gray-400">Privacy Policy</Link>
        </div>

        <div className="flex flex-col items-center mt-8">
          <p className="text-sm font-semibold font-medium">Follow us on social media:</p>
          <div className="flex flex-row justify-center gap-4 hover mt-2">
            <Link to="https://github.com/cosmiccodersofficial" target='_blank' className="text-white hover:text-gray-400"> 
                <FontAwesomeIcon icon={faGithub}/> 
            </Link>
            <Link to="https://twitter.com/CosmicCodrs" target='_blank' className="text-white hover:text-gray-400"> 
                <FontAwesomeIcon icon={faTwitter}/> 
            </Link>
            <Link to="https://www.youtube.com/@cosmiccodersofficial" className="text-white hover:text-gray-400"> 
                <FontAwesomeIcon icon={faYoutube}/> 
            </Link>
            <Link to="https://www.linkedin.com/company/cosmic-coders/" target='_blank' className="text-white hover:text-gray-400"> 
                <FontAwesomeIcon icon={faLinkedinIn}/> 
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;