import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Common/Footer/Footer';


import Navbar from '../Components/Common/Navbar/Navbar';

const Main = () => {
    return (
        <div className='w-[1280px] mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
           
             
            
 
        </div>
    );
};

export default Main;