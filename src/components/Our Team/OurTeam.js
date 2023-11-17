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
        <div className="flex flex-col bg-gray-50" >
            {/* First Row */}
            < h1 className='font-bold text-6xl p-12 mt-20 text-blue-900 animate-slide-in-from-bottom'>Our Team</h1 >
            <div className="flex justify-center items-center">
                <div className="p-4 mr-20">
                    <img src={harshit} alt="" className="w-56 h-56 rounded-full hover cursor-pointer" />
                    <h1 className='animate-slide-in text-2xl mt-4'> Harshit Sharma </h1>
                    <h1 className='animate-slide-in text-xl'>Co-Founder &</h1>
                    <h1 className='animate-slide-in text-xl'>Executive Head</h1>
                    {/* <Link to="https://www.linkedin.com/in/harshit1822/" target='_blank' rel="noreferrer" title="Connect on LinkedIn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0072b1" class="bi bi-linkedin inline-block ml-2" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg>
                    </Link> */}
                    <Link to="https://www.linkedin.com/in/harshit1822/" target='_blank' className='animate font-semibold'>
                        Lets Connect <FontAwesomeIcon className='icon-color' icon={faCircleArrowRight}/>
                    </Link>
                </div>
                <div className="p-4 m-2">
                    <img src={archit} alt="" className="w-56 h-56 rounded-full hover cursor-pointer" />
                    <h1 className='animate-slide-in text-2xl mt-4'>Archit Mishra </h1>
                    <h1 className='animate-slide-in-from-right text-xl'>Co-Founder &</h1>
                    <h1 className='animate-slide-in-from-right text-xl'>Promotional Head</h1>
                    {/* <Link to="https://www.linkedin.com/in/archit-mishr/" target='_blank' rel="noreferrer" title="Connect on LinkedIn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0072b1" class="bi bi-linkedin inline-block ml-2" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg>
                    </Link> */}
                    <Link to="https://www.linkedin.com/in/archit-mishr/" target='_blank' className='animate font-semibold'>
                        Lets Connect <FontAwesomeIcon className='icon-color' icon={faCircleArrowRight}/>
                    </Link>
                </div>
                <div className="p-4 ml-20">
                    <img src={manas} alt="" className="w-56 h-56 rounded-full hover cursor-pointer" />
                    <h1 className='animate-slide-in-from-right text-2xl mt-4'>Manas Bajpai </h1>
                    <h1 className='animate-slide-in-from-right text-xl'>Co-Founder &</h1>
                    <h1 className='animate-slide-in-from-right text-xl'>Tech Head</h1>
                    {/* <Link to="https://www.linkedin.com/in/manasbajpai/" target='_blank' rel="noreferrer" title="Connect on LinkedIn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0072b1" class="bi bi-linkedin inline-block ml-2" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg>
                    </Link> */}
                    <Link to="https://www.linkedin.com/in/manasbajpai/" target='_blank' className='animate font-semibold'>
                        Lets Connect <FontAwesomeIcon className='icon-color' icon={faCircleArrowRight}/>
                    </Link>
                </div>
            </div>
            {/* Second Row */}
            <div className="flex justify-center items-center mt-12 mb-12">
                <div className="p-4 mr-20">
                    <img src={ayushi} alt="" className="w-56 h-56 rounded-full hover cursor-pointer" />
                    <h1 className='animate-slide-in text-2xl mt-4'>Ayushi Abrol </h1>
                    <h1 className='animate-slide-in text-xl'>Operational Head</h1>
                    {/* <Link to="https://www.linkedin.com/in/ayushi-abrol/" target='_blank' rel="noreferrer" title="Connect on LinkedIn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0072b1" class="bi bi-linkedin inline-block ml-2" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg>
                    </Link> */}
                    <Link to="https://www.linkedin.com/in/ayushi-abrol/" target='_blank' className='animate font-semibold'>
                        Lets Connect <FontAwesomeIcon className='icon-color' icon={faCircleArrowRight}/>
                    </Link>
                </div>
                <div className="p-4 m-2">
                    <img src={abhay} alt="" className="w-56 h-56 rounded-full hover cursor-pointer"
                    />
                    <h1 className='animate-slide-in text-2xl mt-4'>Abhay Sharma </h1>
                    <h1 className='animate-slide-in-from-right text-xl'>Community Engagement</h1>
                    <h1 className='animate-slide-in-from-right text-xl'>Manager</h1>
                    {/* <Link to="https://www.linkedin.com/in/abhaysharma31/" target='_blank' rel="noreferrer" title="Connect on LinkedIn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0072b1" class="bi bi-linkedin inline-block ml-2" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg>
                    </Link> */}
                    <Link to="https://www.linkedin.com/in/abhaysharma31/" target='_blank' className='animate font-semibold'>
                        Lets Connect <FontAwesomeIcon className='icon-color' icon={faCircleArrowRight}/>
                    </Link>
                </div>
                <div className="p-4 ml-20">
                    <img src={ayush} alt="" className="w-56 h-56 rounded-full hover cursor-pointer"
                    />
                    <h1 className='animate-slide-in-from-right text-2xl mt-4'>Ayush Dev </h1>
                    <h1 className='animate-slide-in-from-right text-xl'>Operations &</h1>
                    <h1 className='animate-slide-in-from-right text-xl'>Event Coordinator</h1>
                    {/* <Link to="https://www.linkedin.com/in/ayush-dev-1a5370211/" target='_blank' rel="noreferrer" title="Connect on LinkedIn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0072b1" class="bi bi-linkedin inline-block ml-2" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg>
                    </Link> */}
                    <Link to="https://www.linkedin.com/in/ayush-dev-1a5370211/" target='_blank' className='animate font-semibold'>
                        Lets Connect <FontAwesomeIcon className='icon-color' icon={faCircleArrowRight}/>
                    </Link>
                </div>
            </div>
            {/* Third Row */}
            <div className="flex justify-center items-center mb-12 pb-12">
                <div className="p-4">
                    <img src={priyanka} alt="" className="w-56 h-56 rounded-full hover cursor-pointer" />
                    <h1 className='animate-slide-in text-2xl mt-2' title="Connect on LinkedIn">Priyanka Loura </h1>
                    <h1 className='animate-slide-in text-xl'>YouTube Partner</h1>
                    {/* <Link to="https://www.linkedin.com/in/priyankaloura/" target='_blank' rel="noreferrer" title="Connect on LinkedIn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0072b1" class="bi bi-linkedin inline-block ml-2" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg>
                    </Link> */}
                    <Link to="https://www.linkedin.com/in/priyankaloura/" target='_blank' className='animate font-semibold'>
                        Lets Connect <FontAwesomeIcon className='icon-color' icon={faCircleArrowRight}/>
                    </Link>
                </div>
            </div>
        </div >
    )
}
export default OurTeam;
