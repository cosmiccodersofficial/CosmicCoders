import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import './OurTeam.css';
import harshit from '../../images/Harshit.jpeg';
import archit from '../../images/Archit.jpeg';
import manas from '../../images/manas.jpeg';
import ayushi from '../../images/Ayushi Abrol.jpeg';
import abhay from '../../images/Abhay.jpg';
import ayush from '../../images/Ayush.jpeg';
import priyanka from '../../images/Priyanka.png';

const OurTeam = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="bg-gray-50 p-8">
            <h2 className="text-6xl p-6 font-bold mb-6 mt-28 text-blue-900 animate-slide-in-from-bottom contact-heading">Our Team</h2>
            {/* First Row */}
            <div className="flex flex-col md:flex-row mb-4 mr-20 ml-20">
                {/* First Column */}
                <div className="md:w-1/2 md:mr-4 mb-4">
                    <div className="p-4 rounded-md">
                        <div className="flex flex-col items-center mb-4">
                            <img src={harshit} alt="" className="w-56 h-56 rounded-full hover cursor-pointer" />
                        </div>
                        <h1 className='animate-slide-in text-2xl mt-4'> Harshit Sharma </h1>
                        <h1 className='animate-slide-in text-xl'>Co-Founder &</h1>
                        <h1 className='animate-slide-in text-xl'>Executive Head</h1>
                        <Link to="https://www.linkedin.com/in/harshit1822/" target='_blank' className='animate font-semibold'>
                            Lets Connect <FontAwesomeIcon className='icon-color' icon={faCircleArrowRight} />
                        </Link>
                    </div>
                </div>

                {/* Second Column */}
                <div className="md:w-1/2 md:ml-4 mb-4">
                    <div className="p-4 rounded-md">
                        <div className="flex flex-col items-center mb-4">
                            <img src={archit} alt="" className="w-56 h-56 rounded-full hover cursor-pointer" />
                        </div>
                        <h1 className='animate-slide-in text-2xl mt-4'>Archit Mishra </h1>
                        <h1 className='animate-slide-in-from-right text-xl'>Co-Founder &</h1>
                        <h1 className='animate-slide-in-from-right text-xl'>Promotional Head</h1>
                        <Link to="https://www.linkedin.com/in/archit-mishr/" target='_blank' className='animate font-semibold'>
                            Lets Connect <FontAwesomeIcon className='icon-color' icon={faCircleArrowRight} />
                        </Link>
                    </div>
                </div>
                {/* Third Column */}
                <div className="md:w-1/2 md:ml-4 mb-4">
                    <div className="p-4 rounded-md">
                        <div className="flex flex-col items-center mb-4">
                            <img src={manas} alt="" className="w-56 h-56 rounded-full hover cursor-pointer" />
                        </div>
                        <h1 className='animate-slide-in-from-right text-2xl mt-4'>Manas Bajpai </h1>
                        <h1 className='animate-slide-in-from-right text-xl'>Co-Founder &</h1>
                        <h1 className='animate-slide-in-from-right text-xl'>Tech Head</h1>
                        <Link to="https://www.linkedin.com/in/manasbajpai/" target='_blank' className='animate font-semibold'>
                            Lets Connect <FontAwesomeIcon className='icon-color' icon={faCircleArrowRight} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Second Row */}
            <div className="flex flex-col md:flex-row mb-4 mr-20 ml-20">
                {/* Fourth Column */}
                <div className="md:w-1/2 md:mr-4 mb-4">
                    <div className="p-4 rounded-md">
                        {/* Content for the first column of the second row */}
                        <div className="flex flex-col items-center mb-4">
                            {/* Image centered above the h3 tag */}
                            <img src={ayushi} alt="" className="w-56 h-56 rounded-full hover cursor-pointer" />
                        </div>
                        <h1 className='animate-slide-in text-2xl mt-4'>Ayushi Abrol </h1>
                        <h1 className='animate-slide-in text-xl'>Operational Head</h1>
                        <Link to="https://www.linkedin.com/in/ayushi-abrol/" target='_blank' className='animate font-semibold'>
                            Lets Connect <FontAwesomeIcon className='icon-color' icon={faCircleArrowRight} />
                        </Link>
                    </div>
                </div>

                {/* Fifth Column */}
                <div className="md:w-1/2 md:ml-4 mb-4">
                    <div className="p-4 rounded-md">
                        <div className="flex flex-col items-center mb-4">
                            <img src={abhay} alt="" className="w-56 h-56 rounded-full hover cursor-pointer" />
                        </div>
                        <h1 className='animate-slide-in text-2xl mt-4'>Abhay Sharma </h1>
                        <h1 className='animate-slide-in-from-right text-xl'>Community Engagement</h1>
                        <h1 className='animate-slide-in-from-right text-xl'>Manager</h1>
                        <Link to="https://www.linkedin.com/in/abhaysharma31/" target='_blank' className='animate font-semibold'>
                            Lets Connect <FontAwesomeIcon className='icon-color' icon={faCircleArrowRight} />
                        </Link>
                    </div>
                </div>

                {/* Sixth Column */}
                <div className="md:w-1/2 md:ml-4 mb-4">
                    <div className="p-4 rounded-md">
                        <div className="flex flex-col items-center mb-4">
                            <img src={ayush} alt="" className="w-56 h-56 rounded-full hover cursor-pointer" />
                        </div>
                        <h1 className='animate-slide-in-from-right text-2xl mt-4'>Ayush Dev </h1>
                        <h1 className='animate-slide-in-from-right text-xl'>Operations &</h1>
                        <h1 className='animate-slide-in-from-right text-xl'>Event Coordinator</h1>
                        <Link to="https://www.linkedin.com/in/ayush-dev-1a5370211/" target='_blank' className='animate font-semibold'>
                            Lets Connect <FontAwesomeIcon className='icon-color' icon={faCircleArrowRight} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Third Row */}
            <div className="flex items-center justify-center mb-12">
                {/* Seventh Column */}
                <div className="md:w-1/2">
                    <div className="p-4 rounded-md">
                        <div className="flex flex-col items-center mb-4">
                            <img src={priyanka} alt="" className="w-56 h-56 rounded-full hover cursor-pointer" />
                        </div>
                        <h1 className='animate-slide-in text-2xl mt-4'>Priyanka Loura</h1>
                        <h1 className='animate-slide-in text-xl'>YouTube Partner</h1>
                        <Link to="https://www.linkedin.com/in/priyankaloura/" target='_blank' className='animate font-semibold'>
                            Lets Connect <FontAwesomeIcon className='icon-color' icon={faCircleArrowRight} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OurTeam;
