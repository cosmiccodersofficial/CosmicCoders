import React from 'react';
import './About.css';
import CCLogo from '../../images/CCLogo.png';

const About = () => {
    return (
        <>
            <div className="bg-gray-300">
                <div className="flex justify-center items-center">
                    <img src={CCLogo} alt="" className="animate-spin mt-20 w-80 h-80 rounded-full" />
                </div>
                <div className='mx-24 mt-20 pb-44 content text-xl text-start'>
                    <p className='text-5xl font-bold text-center'>
                        <span className='text-gray-800'>Welcome to</span> <span className='text-red-400'>Cosmic Coders</span>
                    </p>
                    <p className='text-2xl mt-12'>
                        At <span className='text-red-400'>Cosmic Coders</span>, we are more than just a society. We are a thriving community dedicated to empowering students and enthusiasts in the ever-evolving realm of computing. Our mission is to ignite a passion for information technology beyond the confines of traditional coursework.
                    </p>
                    <p className='font-bold text-3xl mt-12 text-gray-600'>
                        Why Join Us?
                    </p>
                    <p className='text-xl mt-4'>
                        <span className='font-bold'> <span className='text-4xl'>🚀</span> Exploring New Horizons:</span> We are your gateway to a world of cutting-edge ideas, knowledge, experiences, and trends in the field of computing. Through our events and activities, we help you discover uncharted territories within the realm of technology.
                    </p>
                    <p className='text-xl mt-4'>
                        <span className='font-bold'> <span className='text-4xl'>🎓</span>Learning from Experts:</span> Our society hosts webinars and workshops led by accomplished speakers who share their insights on a diverse range of domains. These engaging talks delve into advanced research subjects, giving you a deeper understanding of what's possible in the tech world.
                    </p>
                    <p className='text-xl mt-4'>
                        <span className='font-bold'> <span className='text-4xl'>💡</span> Unleash Your Creativity:</span> At Cosmic Coders, we encourage innovation and creativity. Our technical events include programming contests, technical quizzes, interactive discussions, and more. These activities not only challenge your skills but also spark your imagination.
                    </p>
                    <p className='font-bold text-3xl mt-12 text-gray-600'>
                        Who Can Join?
                    </p>
                    <p className='text-xl mt-4'>
                        We extend a warm welcome to students from all undergraduate and graduate programs who share a common interest in the world of development. Whether you're a coding enthusiast, a tech visionary, or someone looking to make a difference through technology, you'll find your place in our community.
                    </p>
                    <p className='font-bold text-3xl mt-12 text-gray-600'>
                        Why Choose Us?
                    </p>
                    <p className='text-xl mt-4'>
                        <span className='font-bold'><span className='text-4xl'> 🤝 </span> Community Learning:</span> By joining Cosmic Coders, you become part of a dynamic peer-to-peer learning environment. Collaborate with like-minded individuals and expand your knowledge while working on real-world projects.
                    </p>
                    <p className='text-xl mt-4'>
                        <span className='font-bold'><span className='text-4xl'>🌐</span> Impact Beyond Code:</span> Beyond coding, we are committed to making a positive impact on our local businesses and communities. Together, we create solutions that transcend technology and leave a mark in the real world.
                    </p>
                    <p className='text-xl mt-4'>
                        <span className='font-bold'><span className='text-4xl'> 🌟 </span> Abundant Opportunities:</span> At Cosmic Coders, we believe in the power of connections. We regularly share job opportunities within our network, helping our members to kickstart their careers and explore exciting employment prospects.
                    </p>
                    <p className='text-xl mt-4'>
                        <span className='font-bold'><span className='text-4xl'> 🚀 </span> Staying Up-to-Date:</span> In the ever-evolving tech landscape, staying updated with the latest trends is crucial. Cosmic Coders keeps you informed and connected with the newest developments, ensuring you remain at the forefront of technology.
                    </p>

                    <p className='text-2xl mt-12'>
                        At <span className='text-red-400'>Cosmic Coders</span>, we are more than just a club, we are a launchpad for your journey in the world of computing. Join us today and embark on an exciting adventure of learning, innovation, and growth.
                    </p>
                </div>
            </div>
        </>
    )
}

export default About;



