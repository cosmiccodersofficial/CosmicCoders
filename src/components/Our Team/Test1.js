import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import './OurTeam.css';
import harshit from '../../images/Harshit.jpg';
import archit from '../../images/Archit.jpg';
import manas from '../../images/manas.jpg';
import ayushi from '../../images/Ayushi Abrol.jpg';
import abhay from '../../images/Abhay.jpg';
import ayush from '../../images/Ayush.jpg';
import priyanka from '../../images/Priyanka.jpg';

const OurTeam = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="bg-gray-50 p-3 mt-5">
            <h2 className="display-3 fw-bold mb-6 mt-5 text-blue-900 text-center animate-fade">Our Team</h2>
            {/* First Row */}
            <div className="row mb-4 mx-md-4">
                {/* First Column */}
                <div className="col-md-4 mb-md-0 mb-4">
                    <div className="p-5 rounded-md">
                        <div className="d-flex flex-column align-items-center mb-4">
                            <img src={harshit} alt="" className="w-50 h-50 rounded-circle hover cursor-pointer" />
                        </div>
                        <h1 className='h2 mt-4 animate-fade'> Harshit Sharma </h1>
                        <h1 className='h5 animate-fade'>Co-Founder &</h1>
                        <h1 className='h5 animate-fade'>Executive Head</h1>
                        <Link to="https://www.linkedin.com/in/harshit1822/" target='_blank' className='animate-fade animate fw-semibold text-decoration-none'>
                            Lets Connect <FontAwesomeIcon className='icon-color' icon={faCircleArrowRight} />
                        </Link>
                    </div>
                </div>

                {/* Second Column */}
                <div className="col-md-4 mb-md-0 mb-4 d-flex justify-content-center">
                    <div className="p-5 rounded-md">
                        <div className="d-flex flex-column align-items-center mb-4">
                            <img src={archit} alt="" className="w-50 h-50 rounded-circle hover cursor-pointer" />
                        </div>
                        <h1 className='animate-fade h2 mt-4'>Archit Mishra </h1>
                        <h1 className='animate-fade h5'>Co-Founder &</h1>
                        <h1 className='animate-fade h5'>Promotional Head</h1>
                        <Link to="https://www.linkedin.com/in/archit-mishr/" target='_blank' className='animate-fade animate fw-semibold text-decoration-none'>
                            Lets Connect <FontAwesomeIcon className='icon-color' icon={faCircleArrowRight} />
                        </Link>
                    </div>
                </div>
                {/* Third Column */}
                <div className="col-md-4 mb-md-0 mb-4 d-flex justify-content-end">
                    <div className="p-5 rounded-md">
                        <div className="d-flex flex-column align-items-center mb-4">
                            <img src={manas} alt="" className="w-50 h-50 rounded-circle hover cursor-pointer" />
                        </div>
                        <h1 className='animate-fade h2 mt-4'>Manas Bajpai </h1>
                        <h1 className='animate-fade h5'>Co-Founder &</h1>
                        <h1 className='animate-fade h5'>Tech Head</h1>
                        <Link to="https://www.linkedin.com/in/manasbajpai/" target='_blank' className='animate-fade animate fw-semibold text-decoration-none'>
                            Lets Connect <FontAwesomeIcon className='icon-color' icon={faCircleArrowRight} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Second Row */}
            <div className="row mb-4 mx-md-4">
                {/* Fourth Column */}
                <div className="col-md-4 mb-md-0 mb-4">
                    <div className="p-5 rounded-md">
                        <div className="flex flex-col items-center mb-4">
                            <img src={ayushi} alt="" className="w-50 h-50 rounded-circle hover cursor-pointer" />
                        </div>
                        <h1 className='animate-fade h2 mt-4'>Ayushi Abrol </h1>
                        <h1 className='animate-fade h5'>Operational Head</h1>
                        <Link to="https://www.linkedin.com/in/ayushi-abrol/" target='_blank' className='animate-fade animate fw-semibold text-decoration-none'>
                            Lets Connect <FontAwesomeIcon className='icon-color' icon={faCircleArrowRight} />
                        </Link>
                    </div>
                </div>

                {/* Fifth Column */}
                <div className="col-md-4 mb-md-0 mb-4">
                    <div className="p-5 rounded-md">
                        <div className="flex flex-col items-center mb-4">
                            <img src={abhay} alt="" className="w-50 h-50 rounded-circle hover cursor-pointer" />
                        </div>
                        <h1 className='animate-fade h2 mt-4'>Abhay Sharma </h1>
                        <h1 className='animate-fade h5'>Community Engagement</h1>
                        <h1 className='animate-fade h5'>Manager</h1>
                        <Link to="https://www.linkedin.com/in/abhaysharma31/" target='_blank' className='animate-fade animate fw-semibold text-decoration-none'>
                            Lets Connect <FontAwesomeIcon className='icon-color' icon={faCircleArrowRight} />
                        </Link>
                    </div>
                </div>

                {/* Sixth Column */}
                <div className="col-md-4 mb-md-0 mb-4">
                    <div className="p-5 rounded-md">
                        <div className="flex flex-col items-center mb-4">
                            <img src={ayush} alt="" className="w-50 h-50 rounded-circle hover cursor-pointer" />
                        </div>
                        <h1 className='animate-fade h2 mt-4'>Ayush Dev </h1>
                        <h1 className='animate-fade h5'>Operations &</h1>
                        <h1 className='animate-fade h5'>Event Coordinator</h1>
                        <Link to="https://www.linkedin.com/in/ayush-dev-1a5370211/" target='_blank' className='animate-fade animate fw-semibold text-decoration-none'>
                            Lets Connect <FontAwesomeIcon className='icon-color' icon={faCircleArrowRight} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Third Row */}
            <div className="row mb-4 mx-md-4">
                {/* Seventh Column */}
                <div className="col-md-12 d-flex justify-content-center">
                    <div className="p-5 rounded-md">
                        <div className="flex flex-col items-center mb-4">
                            <img src={priyanka} alt="" className="w-50 h-50 rounded-circle hover cursor-pointer" />
                        </div>
                        <h1 className='animate-fade h2 mt-4'>Priyanka Loura</h1>
                        <h1 className='animate-fade h5'>YouTube Partner</h1>
                        <Link to="https://www.linkedin.com/in/priyankaloura/" target='_blank' className='animate-fade animate fw-semibold text-decoration-none'>
                            Lets Connect <FontAwesomeIcon className='icon-color' icon={faCircleArrowRight} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OurTeam;
