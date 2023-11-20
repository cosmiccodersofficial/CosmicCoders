import React from 'react';
import { useEffect } from 'react';
import './Contact.css';


const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-gray-50 p-8 flex flex-col items-center contact-container">
      <h2 className="text-6xl font-bold mb-6 mt-28 text-blue-900 contact-heading">Get In Touch</h2>
      <form className="w-full contact-form">
        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="Name" className="block text-lg font-bold mb-2 text-start"> Name </label>
          <input type="text" id="Name" name="Name"
            className="w-full px-3 py-2 placeholder-gray-500 bg-gray-100 border rounded-lg focus:outline-none focus:ring focus:border-blue-900"
            placeholder="Your Name" required />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-bold mb-2 text-start">Email Address </label>
          <input type="email" id="email" name="email"
            className="w-full px-3 py-2 placeholder-gray-500 bg-gray-100 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Your Email Address" required />
        </div>

        {/* Phone Number Field */}
        <div className="mb-4">
          <label htmlFor="phone" className="block text-lg font-bold mb-2 text-start"> Phone Number </label>
          <input type="tel" id="phone" name="phone"
            className="w-full px-3 py-2 placeholder-gray-500 bg-gray-100 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Your Phone Number" required />
        </div>

        {/* Message Field */}
        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-bold mb-2 text-start"> Message </label>
          <textarea id="message" name="message"
            className="w-full px-3 py-2 placeholder-gray-500 bg-gray-100 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            rows="4" placeholder="Your Message" required>
          </textarea>
        </div>

        {/* Submit and Reset Buttons */}
        <div className="flex justify-between mb-12">
          <button type="submit"
            className="w-2/5 bg-blue-800 hover text-white px-4 py-2 rounded-lg hover:bg-blue-900 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
            Submit
          </button>
          <button type="reset"
            className="w-2/5 bg-gray-400 hover text-white px-4 py-2 rounded-lg hover:bg-gray-500 focus:outline-none focus:shadow-outline-gray active:bg-gray-600">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
