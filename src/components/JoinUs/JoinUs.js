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
        <div className="bg-gray-50 p-8">
            <h2 className="text-6xl font-bold mb-6 mt-28 text-blue-900 contact-heading">Join Our Network</h2>
            <p className='text-2xl m-12'>We are more than just a club, we are a launchpad for your journey in the world of computing. Join us today and embark on an exciting adventure of learning, innovation, and growth</p>
            {/* First Row */}
            <div className="flex flex-col md:flex-row mr-2 ml-2">
                {/* First Column */}
                <div className="md:w-1/2 md:mr-4 mb-4 animate-slide-in hover">
                    <div className="p-8 rounded-md bg-green-300 ml-12 mr-12 flex items-center justify-between">
                        {/* Content for the first column of the first row */}
                        <div className="mb-4 md:mb-0 text-center md:text-left">
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">WhatsApp</h3>
                            <Link to="https://chat.whatsapp.com/BPdUtuMzubC0VrztVo0TR5/" target='_blank' rel='noopener noreferrer' className='text-lg animate font-semibold text-gray-800'>
                                Join Now <FontAwesomeIcon className='icon-color' icon={faCircleArrowRight} />
                            </Link>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 fill-current text-blue-500" viewBox="0 0 48 48">
                                <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fill-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clip-rule="evenodd"></path>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Second Column */}
                <div className="md:w-1/2 md:mr-4 mb-4 animate-slide-in-from-right hover">
                    <div className="p-8 rounded-md bg-red-300 ml-12 mr-12 flex items-center justify-between">
                        {/* Content for the first column of the second row */}
                        <div className="mb-4 md:mb-0 text-center md:text-left">
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">YouTube</h3>
                            <Link to="https://www.youtube.com/@cosmiccodersofficial/" target='_blank' rel='noopener noreferrer' className='text-lg animate font-semibold text-gray-800'>
                                Subscribe Now <FontAwesomeIcon className='icon-color' icon={faCircleArrowRight} />
                            </Link>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20" viewBox="0 0 48 48">
                                <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Second Row */}
            <div className="flex flex-col md:flex-row mr-2 ml-2">
                {/* First Column */}
                <div className="md:w-1/2 md:mr-4 mb-4 animate-slide-in hover">
                    <div className="p-8 rounded-md bg-blue-400 ml-12 mr-12 flex items-center justify-between">
                        {/* Content for the first column of the second row */}
                        <div className="mb-4 md:mb-0 text-center md:text-left">
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">Linkedin</h3>
                            <Link to="https://www.linkedin.com/company/cosmic-coders/" target='_blank' rel='noopener noreferrer' className='text-lg animate font-semibold text-gray-800'>
                                Let's Connect <FontAwesomeIcon className='icon-color' icon={faCircleArrowRight} />
                            </Link>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 fill-current text-blue-500" viewBox="0 0 48 48">
                                <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Second Column */}
                <div className="md:w-1/2 md:mr-4 mb-4 animate-slide-in-from-right hover">
                    <div className="p-8 rounded-md bg-blue-300 ml-12 mr-12 flex items-center justify-between">
                        {/* Content for the first column of the second row */}
                        <div className="mb-4 md:mb-0 text-center md:text-left">
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">Telegram</h3>
                            <Link to="https://t.me/Cosmic_Coders" target='_blank' rel='noopener noreferrer' className='text-lg animate font-semibold text-gray-800'>
                                Join Now <FontAwesomeIcon className='icon-color' icon={faCircleArrowRight} />
                            </Link>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20" viewBox="0 0 48 48">
                                <path fill="#29b6f6" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"></path><path fill="#fff" d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733 l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468 c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z"></path><path fill="#b0bec5" d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043 l0.964-5.965L23,30.505z"></path><path fill="#cfd8dc" d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912 c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Third Row */}
            <div className="flex flex-col md:flex-row mr-2 ml-2">
                {/* First Column */}
                <div className="md:w-1/2 md:mr-4 mb-4 animate-slide-in hover">
                    <div className="p-8 rounded-md bg-gray-300 ml-12 mr-12 flex items-center justify-between">
                        {/* Content for the first column of the first row */}
                        <div className="mb-4 md:mb-0 text-center md:text-left">
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">Twitter</h3>
                            <Link to="https://twitter.com/CosmicCodrs" target='_blank' rel='noopener noreferrer' className='text-lg animate font-semibold text-gray-800'>
                                Follow Us <FontAwesomeIcon className='icon-color' icon={faCircleArrowRight} />
                            </Link>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20" viewBox="0 0 48 48">
                                <path fill="#212121" fill-rule="evenodd" d="M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28	c2.209,0,4,1.791,4,4v28C42,40.209,40.209,42,38,42z" clip-rule="evenodd"></path><path fill="#fff" d="M34.257,34h-6.437L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z"></path><polygon fill="#fff" points="15.866,34 23.069,25.656 22.127,24.407 13.823,34"></polygon><polygon fill="#fff" points="24.45,21.721 25.355,23.01 33.136,14 31.136,14"></polygon>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Second Column */}
                <div className="md:w-1/2 md:mr-4 mb-4 animate-slide-in-from-right hover">
                    <div className="p-8 rounded-md bg-purple-200 ml-12 mr-12 flex items-center justify-between">
                        {/* Content for the first column of the second row */}
                        <div className="mb-4 md:mb-0 text-center md:text-left">
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">Discord</h3>
                            <Link to="https://discord.gg/RbA7nkun" target='_blank' rel='noopener noreferrer' className='text-lg animate font-semibold text-gray-800'>
                                Join Now <FontAwesomeIcon className='icon-color' icon={faCircleArrowRight} />
                            </Link>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20" viewBox="0 0 48 48">
                                <path fill="#8c9eff" d="M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z M17.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C21,28.209,19.433,30,17.5,30z M30.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C34,28.209,32.433,30,30.5,30z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinUs;
