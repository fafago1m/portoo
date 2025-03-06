import React from 'react';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ShonaBareMetalPage = () => {
    return (
        <div>
            <Navbar />
        <div className="flex items-center justify-center h-screen text-white bg-gray-800">
            <h1 className="text-4xl font-bold">Available with preorder on Discord <a className="underline text-gray" onClick={() => window.location.href = 'https://discord.gg/akashonacloud'}>here</a>.</h1>
        </div>
            <Footer />
        </div>
    );
};

export default ShonaBareMetalPage;