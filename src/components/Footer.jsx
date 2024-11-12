import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div>
             <footer className="footer p-10 bg-gray-800 text-white">
      <div>
        <span className="footer-title">Quick Links</span>
        <a href="/" className="link link-hover">Home</a>
      <Link to="aboutus">  <a href="/about" className="link link-hover">About</a></Link>
      <Link to="services"> <a href="/services" className="link link-hover">Services</a></Link>
       
       <Link to="contactus"> <a href="/contact" className="link link-hover">Contact</a></Link>
      </div>
      
      <div>
        <span className="footer-title">Social Media</span>
        <a href="https://www.linkedin.com/in/md-roconuzzaman-khan-413129230/" target="_blank" rel="noopener noreferrer" className="link link-hover">LinkedIn</a>
        <a href="https://github.com/sofol093049" target="_blank" rel="noopener noreferrer" className="link link-hover">GitHub</a>
        <a href="https://www.facebook.com/rajshahir.pola" target="_blank" rel="noopener noreferrer" className="link link-hover">Facebook</a>
      </div>
      
      <div>
        <span className="footer-title">Contact Info</span>
        <p>Email:shafalruet@gmail.com</p>
        <p>Phone: +8801772176678</p>
        <p>Location: Dhaka, Bangladesh</p>
      </div>
    </footer>
        </div>
    );
}

export default Footer;