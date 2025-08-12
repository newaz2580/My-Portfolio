import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Navbar/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <div className='min-h-[calc(100vh-284px)]'>
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;