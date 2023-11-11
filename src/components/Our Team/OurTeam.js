import React from 'react';
import './OurTeam.css';
import ayush from '../../images/Ayush.jpeg';
import archit from '../../images/Archit.jpeg';
import abhay from '../../images/Abhay.jpg';
import ayushi from '../../images/Ayushi Abrol.jpeg';
import priyanka from '../../images/Priyanka.png';
import harshit from '../../images/Harshit.jpeg';
import manas from '../../images/manas.jpeg';

const OurTeam = () => {
    return (
        <div className="flex flex-col bg-gray-50" >
            {/* First Row */}
            < h1 className='font-bold text-6xl p-12 mt-20 text-blue-900 animate-slide-in-from-bottom'> Our Team</h1 >
            <div className="flex justify-center items-center">
                <div className="p-4 mr-20">
                    <img src={harshit} alt="" className="w-56 h-56 rounded-full hover cursor-pointer" />
                    <a href="https://www.linkedin.com/in/ayush-dev-1a5370211/" target='_blank' rel="noreferrer">
                        <h1 className='animate-slide-in text-2xl mt-2' title="Connect">Harshit Sharma</h1>
                    </a>
                    <h1 className='animate-slide-in text-xl'>Co-Founder and Executive Head</h1>
                </div>
                <div className="p-4 m-2">
                    <img src={archit} alt="" className="w-56 h-56 rounded-full hover cursor-pointer"/>
                    <a href="https://www.linkedin.com/in/ayush-dev-1a5370211/" target='_blank' rel="noreferrer">
                        <h1 className='animate-slide-in text-2xl mt-2' title="Connect">Archit Mishra</h1>
                    </a>
                    <h1 className='animate-slide-in-from-right text-xl'>Co-Founder and Promotional Head</h1>
                </div>
                <div className="p-4 ml-20">
                    <img src={manas} alt="" className="w-56 h-56 rounded-full hover cursor-pointer" />
                    <a href="https://www.linkedin.com/in/abhaysharma31/" target='_blank' rel="noreferrer">
                        <h1 className='animate-slide-in-from-right text-2xl mt-2' title="Connect">Manas Bajpai</h1>
                    </a>
                    <h1 className='animate-slide-in-from-right text-xl'>Co-Founder and Tech Head</h1>
                </div>
            </div>
            {/* Second Row */}
            <div className="flex justify-center items-center mt-12 mb-12 pb-12">
                <div className="p-4 mr-20">
                    <img src={ayushi} alt="" className="w-56 h-56 rounded-full hover cursor-pointer"/>
                    <a href="https://www.linkedin.com/in/ayush-dev-1a5370211/" target='_blank' rel="noreferrer">
                        <h1 className='animate-slide-in text-2xl mt-2' title="Connect">Ayushi Abrol</h1>
                    </a>
                    <h1 className='animate-slide-in text-xl'>Operational Head</h1>
                </div>
                <div className="p-4 m-2">
                    <img src={abhay} alt="" className="w-56 h-56 rounded-full hover cursor-pointer"
                    />
                    <a href="https://www.linkedin.com/in/ayush-dev-1a5370211/" target='_blank' rel="noreferrer">
                        <h1 className='animate-slide-in text-2xl mt-2' title="Connect">Abhay Sharma</h1>
                    </a>
                    <h1 className='animate-slide-in-from-right text-xl'>Community Engagement Manager</h1>
                </div>
                <div className="p-4 ml-20">
                    <img src={ayush} alt="" className="w-56 h-56 rounded-full hover cursor-pointer"
                    />
                    <a href="https://www.linkedin.com/in/abhaysharma31/" target='_blank' rel="noreferrer">
                        <h1 className='animate-slide-in-from-right text-2xl mt-2' title="Connect">Ayush Dev</h1>
                    </a>
                    <h1 className='animate-slide-in-from-right text-xl'>Operations and Event Coordinator</h1>
                </div>
            </div>
            {/* Third Row */}
            {/* <div className="flex justify-center items-center mt-12">
                <div className="p-4 mr-20">
                    <img src={ayush} alt="" className="w-56 h-56 rounded-full hover cursor-pointer"
                    />
                    <a href="https://www.linkedin.com/in/ayush-dev-1a5370211/" target='_blank' rel="noreferrer">
                        <h1 className='animate-slide-in text-2xl mt-2' title="Connect">Ayush Dev</h1>
                    </a>
                    <h1 className='animate-slide-in text-xl'>Student Coordinator</h1>
                </div>
                <div className="p-4 m-2">
                    <img src={archit} alt="" className="w-56 h-56 rounded-full hover cursor-pointer"
                    />
                    <a href="https://www.linkedin.com/in/ayush-dev-1a5370211/" target='_blank' rel="noreferrer">
                        <h1 className='animate-slide-in text-2xl mt-2' title="Connect">Ayush Dev</h1>
                    </a>
                    <h1 className='animate-slide-in-from-right text-xl'>Student Coordinator</h1>
                </div>
                <div className="p-4 ml-20">
                    <img src={abhay} alt="" className="w-56 h-56 rounded-full hover cursor-pointer"
                    />
                    <a href="https://www.linkedin.com/in/abhaysharma31/" target='_blank' rel="noreferrer">
                        <h1 className='animate-slide-in-from-right text-2xl mt-2' title="Connect">Ayush Dev</h1>
                    </a>
                    <h1 className='animate-slide-in-from-right text-xl'>Student Coordinator</h1>
                </div>
            </div> */}
        </div >
    )
}
export default OurTeam;
