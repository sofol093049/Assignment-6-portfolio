import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
              <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-teal-400">Home</Link></li>
          <li><Link to="/projects" className="hover:text-teal-400">Projects</Link></li>
        </ul>
      </div>
    </nav>
        </div>
    );
}

export default Navbar;