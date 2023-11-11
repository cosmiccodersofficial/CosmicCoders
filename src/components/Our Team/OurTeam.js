import React from 'react';
import './OurTeam.css';
import ayush from '../../images/Ayush.jpeg';
import archit from '../../images/Archit.jpeg';
import abhay from '../../images/Abhay.jpg';

const OurTeam = () => {
    return (
        <div className="flex flex-col bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600" >
            {/* First Row */}
            < h1 className='font-bold text-6xl p-12 mt-20 text-blue-900 animate-slide-in-from-bottom'> Our Team</h1 >
            <div className="flex justify-center items-center">
                <div className="p-4 mr-20">
                    <img
                        src={ayush}
                        alt=""
                        className="w-64 h-64 rounded-full hover cursor-pointer" w-60 h-60 rahega
                    />
                    <a href="https://www.linkedin.com/in/ayush-dev-1a5370211/" target='_blank' rel="noreferrer">
                        <h1 className='animate-slide-in text-2xl mt-2' title="Connect">Ayush Dev</h1>
                    </a>
                    <h1 className='animate-slide-in text-xl'>Student Coordinator</h1>
                </div>
                <div className="p-4 m-2">
                    <img
                        src={archit}
                        alt=""
                        className="w-64 h-64 rounded-full hover cursor-pointer"
                    />
                    <a href="https://www.linkedin.com/in/ayush-dev-1a5370211/" target='_blank' rel="noreferrer">
                        <h1 className='animate-slide-in text-2xl mt-2' title="Connect">Ayush Dev</h1>
                    </a>
                    <h1 className='animate-slide-in-from-right text-xl'>Student Coordinator</h1>
                </div>
                <div className="p-4 ml-20">
                    <img
                        src={abhay}
                        alt=""
                        className="w-64 h-64 rounded-full hover cursor-pointer"
                    />
                    <a href="https://www.linkedin.com/in/abhaysharma31/" target='_blank' rel="noreferrer">
                        <h1 className='animate-slide-in-from-right text-2xl mt-2' title="Connect">Ayush Dev</h1>
                    </a>
                    <h1 className='animate-slide-in-from-right text-xl'>Student Coordinator</h1>
                </div>
            </div>
            {/* Second Row */}
            <div className="flex justify-center items-center mt-12">
                <div className="p-4 mr-20">
                    <img
                        src={ayush}
                        alt=""
                        className="w-64 h-64 rounded-full hover cursor-pointer"
                    />
                    <a href="https://www.linkedin.com/in/ayush-dev-1a5370211/" target='_blank' rel="noreferrer">
                        <h1 className='animate-slide-in text-2xl mt-2' title="Connect">Ayush Dev</h1>
                    </a>
                    <h1 className='animate-slide-in text-xl'>Student Coordinator</h1>
                </div>
                <div className="p-4 m-2">
                    <img
                        src={archit}
                        alt=""
                        className="w-64 h-64 rounded-full hover cursor-pointer"
                    />
                    <a href="https://www.linkedin.com/in/ayush-dev-1a5370211/" target='_blank' rel="noreferrer">
                        <h1 className='animate-slide-in text-2xl mt-2' title="Connect">Ayush Dev</h1>
                    </a>
                    <h1 className='animate-slide-in-from-right text-xl'>Student Coordinator</h1>
                </div>
                <div className="p-4 ml-20">
                    <img
                        src={abhay}
                        alt=""
                        className="w-64 h-64 rounded-full hover cursor-pointer"
                    />
                    <a href="https://www.linkedin.com/in/abhaysharma31/" target='_blank' rel="noreferrer">
                        <h1 className='animate-slide-in-from-right text-2xl mt-2' title="Connect">Ayush Dev</h1>
                    </a>
                    <h1 className='animate-slide-in-from-right text-xl'>Student Coordinator</h1>
                </div>
            </div>
            {/* Third Row */}
            <div className="flex justify-center items-center mt-12">
                <div className="p-4 mr-20">
                    <img
                        src={ayush}
                        alt=""
                        className="w-64 h-64 rounded-full hover cursor-pointer"
                    />
                    <a href="https://www.linkedin.com/in/ayush-dev-1a5370211/" target='_blank' rel="noreferrer">
                        <h1 className='animate-slide-in text-2xl mt-2' title="Connect">Ayush Dev</h1>
                    </a>
                    <h1 className='animate-slide-in text-xl'>Student Coordinator</h1>
                </div>
                <div className="p-4 m-2">
                    <img
                        src={archit}
                        alt=""
                        className="w-64 h-64 rounded-full hover cursor-pointer"
                    />
                    <a href="https://www.linkedin.com/in/ayush-dev-1a5370211/" target='_blank' rel="noreferrer">
                        <h1 className='animate-slide-in text-2xl mt-2' title="Connect">Ayush Dev</h1>
                    </a>
                    <h1 className='animate-slide-in-from-right text-xl'>Student Coordinator</h1>
                </div>
                <div className="p-4 ml-20">
                    <img
                        src={abhay}
                        alt=""
                        className="w-64 h-64 rounded-full hover cursor-pointer"
                    />
                    <a href="https://www.linkedin.com/in/abhaysharma31/" target='_blank' rel="noreferrer">
                        <h1 className='animate-slide-in-from-right text-2xl mt-2' title="Connect">Ayush Dev</h1>
                    </a>
                    <h1 className='animate-slide-in-from-right text-xl'>Student Coordinator</h1>
                </div>
            </div>
        </div >
    )
}
export default OurTeam;
