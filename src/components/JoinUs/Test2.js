import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import './JoinUs.css'

const JoinUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="bg-gray-50 mx-2 p-5 mt-5 mb-5">
            <h2 className="display-3 fw-bold mb-5 mt-5 text-blue-900 contact-heading">Join Our Network</h2>
            <p className="h2 m-5">We are more than just a club, we are a launchpad for your journey in the world of computing. Join us today and embark on an exciting adventure of learning, innovation, and growth</p>

            {/* <!-- First Row --> */}
            <div className="row mx-2">
                {/* <!-- First Column --> */}
                <div className="col-md-6 mb-4 animate__animated animate__slideInDown">
                    <div className="p-5 rounded bg-green-300 mx-3">
                        <div className="mb-4 md:mb-0 text-center md:text-left">
                            <h3 className="h4 font-weight-bold mb-2 text-dark">WhatsApp</h3>
                            <a href="https://chat.whatsapp.com/BPdUtuMzubC0VrztVo0TR5/" target="_blank" rel="noopener noreferrer" className="h4 animate font-weight-bold text-dark">
                                Join Now <i className="fas fa-arrow-circle-right"></i>
                            </a>
                        </div>
                        <div>
                            <i className="fab fa-whatsapp-square text-primary"></i>
                        </div>
                    </div>
                </div>

                {/* <!-- Second Column --> */}
                <div className="col-md-6 mb-4 animate__animated animate__slideInRight">
                    <div className="p-5 rounded bg-red-300 mx-3">
                        <div className="mb-4 md:mb-0 text-center md:text-left">
                            <h3 className="h4 font-weight-bold mb-2 text-dark">YouTube</h3>
                            <a href="https://www.youtube.com/@cosmiccodersofficial/" target="_blank" rel="noopener noreferrer" className="h4 animate font-weight-bold text-dark">
                                Subscribe Now <i className="fas fa-arrow-circle-right"></i>
                            </a>
                        </div>
                        <div>
                            <i className="fab fa-youtube text-danger"></i>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Second Row --> */}
            <div className="row mx-2">
                {/* <!-- First Column --> */}
                <div className="col-md-6 mb-4 animate__animated animate__slideInDown">
                    <div className="p-5 rounded bg-blue-400 mx-3">
                        <div className="mb-4 md:mb-0 text-center md:text-left">
                            <h3 className="h4 font-weight-bold mb-2 text-dark">LinkedIn</h3>
                            <a href="https://www.linkedin.com/company/cosmic-coders/" target="_blank" rel="noopener noreferrer" className="h4 animate font-weight-bold text-dark">
                                Let's Connect <i className="fas fa-arrow-circle-right"></i>
                            </a>
                        </div>
                        <div>
                            <i className="fab fa-linkedin text-primary"></i>
                        </div>
                    </div>
                </div>

                {/* <!-- Second Column --> */}
                <div className="col-md-6 mb-4 animate__animated animate__slideInRight">
                    <div className="p-5 rounded bg-blue-300 mx-3">
                        <div className="mb-4 md:mb-0 text-center md:text-left">
                            <h3 className="h4 font-weight-bold mb-2 text-dark">Telegram</h3>
                            <a href="https://t.me/Cosmic_Coders" target="_blank" rel="noopener noreferrer" className="h4 animate font-weight-bold text-dark">
                                Join Now <i className="fas fa-arrow-circle-right"></i>
                            </a>
                        </div>
                        <div>
                            <i className="fab fa-telegram text-primary"></i>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Third Row --> */}
            <div className="row mx-2">
                {/* <!-- First Column --> */}
                <div className="col-md-6 mb-4 animate__animated animate__slideInDown">
                    <div className="p-5 rounded bg-gray-300 mx-3">
                        <div className="mb-4 md:mb-0 text-center md:text-left">
                            <h3 className="h4 font-weight-bold mb-2 text-dark">Twitter</h3>
                            <a href="https://twitter.com/CosmicCodrs" target="_blank" rel="noopener noreferrer" className="h4 animate font-weight-bold text-dark">
                                Follow Us <i className="fas fa-arrow-circle-right"></i>
                            </a>
                        </div>
                        <div>
                            <i className="fab fa-twitter-square text-info"></i>
                        </div>
                    </div>
                </div>

                {/* <!-- Second Column --> */}
                <div className="col-md-6 mb-4 animate__animated animate__slideInRight">
                    <div className="p-5 rounded bg-purple-200 mx-3">
                        <div className="mb-4 md:mb-0 text-center md:text-left">
                            <h3 className="h4 font-weight-bold mb-2 text-dark">Discord</h3>
                            <a href="https://discord.gg/Z96GhGB3zB" target="_blank" rel="noopener noreferrer" className="h4 animate font-weight-bold text-dark">
                                Join Now <i className="fas fa-arrow-circle-right"></i>
                            </a>
                        </div>
                        <div>
                            <i className="fab fa-discord text-secondary"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default JoinUs;
