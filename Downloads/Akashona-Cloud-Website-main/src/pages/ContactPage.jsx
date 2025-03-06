import React from "react";
import { Mail, Phone, MessageCircle, Link } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactPage = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow">
                <header className="bg-gray-900 text-white mt-5 py-20 px-6">
                    <div className="max-w-5xl mx-auto text-center">
                        <h1 className="text-4xl font-bold mt-4">
                            Contact Akashona
                        </h1>
                        <p className="mt-4 text-lg font-medium text-gray-300">
                            We're here to help! Feel free to reach out to us through any of the methods below.
                        </p>
                    </div>
                </header>
                <section className="max-w-4xl mx-auto py-16 px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div 
                            className="flex items-center space-x-4 bg-gray-800 p-6 rounded-2xl shadow-lg cursor-pointer" 
                            onClick={() => window.location.href = "mailto:cs@akashonacloud.com"}
                        >
                            <Mail className="text-blue-500 w-8 h-8" />
                            <div>
                                <h2 className="text-xl font-semibold">Email</h2>
                                <p className="text-gray-400">cs@akashonacloud.com</p>
                            </div>
                        </div>

                        <div 
                            className="flex items-center space-x-4 bg-gray-800 p-6 rounded-2xl shadow-lg cursor-pointer" 
                            onClick={() => window.location.href = "tel:+085190001285"}
                        >
                            <Phone className="text-green-500 w-8 h-8" />
                            <div>
                                <h2 className="text-xl font-semibold">Phone</h2>
                                <p className="text-gray-400">085190001285</p>
                            </div>
                        </div>

                        <div 
                            className="flex items-center space-x-4 bg-gray-800 p-6 rounded-2xl shadow-lg cursor-pointer" 
                            onClick={() => window.location.href = "https://wa.me/085190001285"}
                        >
                            <MessageCircle className="text-teal-500 w-8 h-8" />
                            <div>
                                <h2 className="text-xl font-semibold">WhatsApp</h2>
                                <p className="text-gray-400">085190001285</p>
                            </div>
                        </div>

                        <div 
                            className="flex items-center space-x-4 bg-gray-800 p-6 rounded-2xl shadow-lg cursor-pointer"
                            onClick={() => window.open("https://discord.gg/akashonacloud", "_blank")}
                        >
                            <Link className="text-purple-500 w-8 h-8" />
                            <div>
                                <h2 className="text-xl font-semibold">Discord</h2>
                                <a 
                                    href="https://discord.gg/akashonacloud" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-blue-400 hover:underline"
                                >
                                    Join our Discord
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ContactPage;
