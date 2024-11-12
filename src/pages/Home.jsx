import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <section className="flex flex-col items-center justify-center h-screen bg-gray-100">
        {/* Developer Photo Section */}
        <div className="flex flex-col items-center">
          <img
            src="https://i.ibb.co.com/jrqPrwb/m.png"  // Replace with your image path or URL
            alt="MD. RoconuZZaman Khan"
            className="rounded-full w-40 h-40 object-cover mb-6 shadow-lg"
          />
          <h1 className="text-5xl font-bold text-teal-500">Hi, I'm MD. RoconuZZaman Khan</h1>
          <p className="mt-4 text-xl text-center text-gray-700">
            A passionate web developer skilled in React, Node.js, and more.
          </p>
        </div>
  
        {/* Call to Actions */}
        <div className="mt-6 space-x-4">
            <Link to="/projects"><a href="#projects" className="btn btn-primary">View My Projects</a></Link>
          <Link to="/resume"> <a href="/resume.pdf" target="_blank" className="btn btn-secondary">View My Resume</a></Link>
         
        </div>
  
        {/* Featured Skills */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800">Featured Skills</h2>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            <div className="badge badge-outline">React</div>
            <div className="badge badge-outline">Node.js</div>
            <div className="badge badge-outline">MongoDB</div>
            <div className="badge badge-outline">Express.js</div>
            <div className="badge badge-outline">Laravel</div>
            <div className="badge badge-outline">CakePhp</div>
          </div>
        </div>
      </section>
    );
}

export default Home;