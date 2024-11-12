import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import Home from './Home';

function CommonLayout() {
    return (
        <div>
            <Navbar></Navbar>
            {/* <Home></Home> */}
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
}

export default CommonLayout;