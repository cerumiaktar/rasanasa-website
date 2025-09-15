import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Shared/Navbar/Navbar';
import BottomNavbar from '../pages/Shared/BottomNavbar/BottomNavbar';
import Footer from '../pages/Shared/Footer/Footer';

const Root = () => {
    return (
        <div className='dark:bg-white'>
            <Navbar></Navbar>
            <BottomNavbar></BottomNavbar>
            <div className='min-h-screen pb-10 pt-10'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;