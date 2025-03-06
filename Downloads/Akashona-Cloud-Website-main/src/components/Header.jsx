import React from 'react';
import sshomeakashona from "../assets/sshomeakashona.png";

const Header = () => {
    return (
        <header className="bg-gray-900 text-white mt-5 py-20 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <div className="mb-4 bg-gray-800 rounded-full inline-block py-2 px-4 text-sm font-semibold">
                    NVMe SSD Ready! Learn More "Storage Speed!
                </div>

                <h1 className="text-4xl font-bold mt-4">
                    Terms of Service
                </h1>
                <p className="mt-4 text-lg font-medium text-gray-300">
                    Welcome to the Terms of Service (TOS) for Akashona Cloud hosting services! This section introduces some key concepts of our service terms before delving into further details.
                </p>

            </div>
        </header>
    );
};

export default Header;
