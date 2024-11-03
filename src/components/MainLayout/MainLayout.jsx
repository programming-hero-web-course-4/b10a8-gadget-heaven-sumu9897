import React from 'react';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <div>
                <Outlet/>
            </div>
            <Footer/>
        </div>
        
    );
};

export default MainLayout;