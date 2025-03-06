import React from 'react';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFoundPage = () => {
    return (
        <div>
            <Navbar />
        <div className="flex items-center justify-center h-screen text-white bg-gray-800">
            <h1 className="text-4xl font-bold">404 │ Page Not Found</h1>
        </div>
            <Footer />
        </div>
    );
};

export default NotFoundPage;