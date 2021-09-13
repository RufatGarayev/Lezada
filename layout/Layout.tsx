import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import BackToTopBtn from '../components/Common/BackToTopBtn';

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Nav />
            <main>{children}</main>
            <Footer />
            <BackToTopBtn />
        </>
    )
};

export default Layout;