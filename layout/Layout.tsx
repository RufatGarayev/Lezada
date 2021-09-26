import React from 'react';
import Nav from './Header/Nav';
import Footer from './Footer/Footer';
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