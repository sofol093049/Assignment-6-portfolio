import React from 'react';

const Contactus = () => {
    return (
        <div>
             <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg text-gray-800">
      {/* Page Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-teal-500">Contact Us</h1>
        <p className="text-gray-600 mt-2">We'd love to hear from you! Please fill out the form below and we will get back to you as soon as possible.</p>
      </div>

      {/* Contact Form */}
      <form className="space-y-6">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
            placeholder="John Doe"
          />
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
            placeholder="you@example.com"
          />
        </div>

        {/* Message Input */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
            placeholder="Write your message here..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full sm:w-auto inline-block bg-teal-500 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition-all duration-300"
          >
            Send Message
          </button>
        </div>
      </form>

      {/* Contact Info */}
      <div className="mt-10 text-center">
        <p className="text-gray-600">Or reach us directly at:</p>
        <p className="text-teal-500">Email: <a href="shafalruet@gmail.com">shafalruet@gmail.com</a></p>
        <p className="text-teal-500">Phone: +8801772176678</p>
      </div>
    </div>
        </div>
    );
};

export default Contactus;