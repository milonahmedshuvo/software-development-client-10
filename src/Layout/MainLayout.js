import React from 'react';
import Header from '../Sheard/Header/Header';
import {Outlet}from 'react-router-dom'
import Footer from '../Pages/Footer/Footer';




const MainLayout = () => {
    return (
        <div>
            <Header></Header>
           <div>
            <Outlet></Outlet>
           </div>         
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;