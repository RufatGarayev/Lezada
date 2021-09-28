import React from 'react';
import Nav from './Header/Nav';
import Footer from './Footer/Footer';
import BackToTopBtn from '../components/Common/BackToTopBtn';
import { ToastContainer } from 'react-toastify';

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Nav />
            <main>{children}</main>
            <Footer />
            <BackToTopBtn />
            <ToastContainer position="bottom-left" autoClose={4000} closeOnClick />
        </>
    )
};

export default Layout;