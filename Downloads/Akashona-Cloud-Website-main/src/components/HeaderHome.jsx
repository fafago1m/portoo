import React from 'react';
import sshomeakashona from "../assets/sshomeakashona.png";

const HeaderHome = () => {
    return (
        <header className="bg-gray-900 text-white mt-5 py-20 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <div className="mb-4 bg-gray-800 rounded-full inline-block py-2 px-4 text-sm font-semibold">
                    NVMe SSD Ready! Learn More "Storage Speed!
                </div>

                <h1 className="text-4xl font-bold mt-4">
                    Simplicity Meets Performance
                </h1>
                <p className="mt-4 text-lg font-medium text-gray-300">
                    Boost Your Server Performance with our Powerfull Hosting. Experience seamless deployment and scalability with our Game Hosting Solutions.
                    Make sure your server is ready for production.
                </p>

                <div className="mt-6 md:mt-8 mb-10 flex flex-col lg:flex-row justify-center gap-4 md:gap-5">
                    <button className="bg-white text-gray-900 font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition-transform transform hover:scale-105 hover:shadow-lg"
                    onClick={() => window.location.href = 'https://wa.me/6285190001285?text=Halo Kak Mau Order'} >
                        Order at WhatsApp
                    </button>
                    <button className="bg-white text-gray-900 font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition-transform transform hover:scale-105 hover:shadow-lg"
                    onClick={() => window.location.href = 'https://discord.gg/vD3Aa95UPW'} >
                        Order at Discord
                    </button>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 mt-9 mb-10 md-10 w-full max-w-[90%] xl:scale-200 lg:max-w-3xl ">
                    <div className="relative w-full h-70 bg-gray-700 rounded-xl overflow-hidden shadow-xl">
                    <img
                            src={sshomeakashona}
                            alt="Server Hosting Screenshot"
                            className="w-full h-full object-cover"
                            style={{
                                transform: 'scale(1)',
                                maxWidth: '100%',
                                transition: 'transform 0.3s ease',
                            }}
                        />
                    </div>
                </div>

            </div>
        </header>
    );
};

export default HeaderHome;
