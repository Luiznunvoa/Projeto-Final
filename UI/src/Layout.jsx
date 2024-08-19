import React from 'react';
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <>{children}</>
            <Footer />
        </>
    );
};

export default Layout;