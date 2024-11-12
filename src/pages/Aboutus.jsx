import React from 'react';

const Aboutus = () => {
    return (
        <div>
             <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg text-gray-800">
      {/* Page Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-teal-500">About Us</h1>
        <p className="text-gray-600 mt-2">
          We are a dedicated team of professionals passionate about web development and creating digital experiences that inspire.
        </p>
      </div>

      {/* Mission Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-teal-500 mb-2">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          Our mission is to build innovative and user-friendly web applications that meet our clients’ needs and exceed their expectations.
          We believe in the power of technology to bring people together, create opportunities, and solve real-world problems.
        </p>
      </section>

      {/* Our Story Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-teal-500 mb-2">Our Story</h2>
        <p className="text-gray-700 leading-relaxed">
          Founded in 2014, our journey started with a vision to make web development accessible and impactful. Since then, we've worked with
          businesses of all sizes, delivering projects that combine creativity, functionality, and exceptional design.
        </p>
      </section>

      {/* Team Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-teal-500 mb-4">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md">
            <img
              src="https://i.ibb.co.com/jrqPrwb/m.png" // Replace with team member photo URL
              alt="Team Member"
              className="w-24 h-24 rounded-full mb-3 object-cover shadow-lg"
            />
            <h3 className="text-lg font-bold text-teal-500">MD. RoconuZZaman Khan</h3>
            <p className="text-gray-600">Lead Developer</p>
            <p className="text-gray-600 text-center mt-2">Expert in web development with a passion for front-end frameworks like React and Tailwind CSS.</p>
          </div>

          {/* Team Member 2 */}
          <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md">
            <img
              src="https://i.ibb.co.com/dbvg6KD/images.jpg" // Replace with team member photo URL
              alt="Team Member"
              className="w-24 h-24 rounded-full mb-3 object-cover shadow-lg"
            />
            <h3 className="text-lg font-bold text-teal-500">Jane Doe</h3>
            <p className="text-gray-600">UI/UX Designer</p>
            <p className="text-gray-600 text-center mt-2">Specializes in creating user-centered designs and improving the user experience.</p>
          </div>

          {/* Team Member 3 */}
          <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md">
            <img
              src="https://i.ibb.co.com/X4yD7TM/hardy.png" // Replace with team member photo URL
              alt="Team Member"
              className="w-24 h-24 rounded-full mb-3 object-cover shadow-lg"
            />
            <h3 className="text-lg font-bold text-teal-500">John Smith</h3>
            <p className="text-gray-600">Back-End Developer</p>
            <p className="text-gray-600 text-center mt-2">Focused on building secure, scalable back-end systems and APIs for seamless integration.</p>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <div className="text-center mt-8">
        <p className="text-gray-700">We are excited to bring your ideas to life. Get in touch with us to start a project!</p>
      </div>
    </div>
        </div>
    );
};

export default Aboutus;