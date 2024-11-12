import React from 'react';
import { FaCode, FaMobileAlt, FaPalette, FaServer } from 'react-icons/fa';
function Service(props) {
    return (
        <div>
             <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-lg text-gray-800">
      {/* Page Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-teal-500">Our Services</h1>
        <p className="text-gray-600 mt-2">Explore the wide range of services we offer to bring your ideas to life!</p>
      </div>

      {/* Services List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Service 1 - Web Development */}
        <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <FaCode className="text-4xl text-teal-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Web Development</h3>
          <p className="text-gray-600 text-center mt-2">
            Custom web development services tailored to your business needs using the latest technologies.
          </p>
        </div>

        {/* Service 2 - Mobile Development */}
        <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <FaMobileAlt className="text-4xl text-teal-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Mobile Development</h3>
          <p className="text-gray-600 text-center mt-2">
            High-quality mobile applications for iOS and Android platforms with a user-centric approach.
          </p>
        </div>

        {/* Service 3 - UI/UX Design */}
        <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <FaPalette className="text-4xl text-teal-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">UI/UX Design</h3>
          <p className="text-gray-600 text-center mt-2">
            Beautiful, user-friendly designs that ensure a seamless and engaging user experience.
          </p>
        </div>

        {/* Service 4 - Backend Development */}
        <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <FaServer className="text-4xl text-teal-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Backend Development</h3>
          <p className="text-gray-600 text-center mt-2">
            Secure, scalable backend development to support complex functionalities and data processing.
          </p>
        </div>
      </div>
    </div>
        </div>
    );
}

export default Service;