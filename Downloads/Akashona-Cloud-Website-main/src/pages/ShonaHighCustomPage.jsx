import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ"; 
import HeaderHosting from "../components/HeaderHosting";
import { shonahighcustomdata } from '../database/shonahighcustom';
import { MemoryStick, Cpu, HardDrive, Database, Save } from 'lucide-react';

const ShonaHighCustomPage = () => {
    const { title, description, packages, faq } = shonahighcustomdata[0] || {};

    if (!packages) {
        return (
            <div>
                <Navbar />
                <div className="container mx-auto py-10 text-center">
                    <h2 className="text-2xl font-bold">Error: Data hosting tidak ditemukan</h2>
                </div>
                <FAQ faqData={faq} />
                <Footer />
            </div>
        );
    }

    return (
        <div className="bg-gray-900 text-white">
            <Navbar />
            <HeaderHosting title={title} description={description} />
            <div className="container mx-auto py-10 px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-blue-400">Our Hosting Packages</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            onClick={() => window.location.href = 'https://game-controlcenter.akashonacloud.com'}
                            className="bg-gray-800 p-6 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-700 hover:shadow-2xl hover:translate-y-[-5px] hover:bg-opacity-80 cursor-pointer border border-blue-500 flex flex-col justify-between w-full max-w-xs"
                        >
                            <h3 className="text-2xl font-bold text-blue-400 text-center mb-4">{pkg.name}</h3>
                            <div className="space-y-3 text-white">
                                <div className="flex items-center">
                                    <MemoryStick className="mr-2 text-blue-300" size={20} />
                                    <p>RAM: {pkg.ram} MB</p>
                                </div>
                                <div className="flex items-center">
                                    <Cpu className="mr-2 text-blue-300" size={20} />
                                    <p>CPU: {pkg.cpu_percent}%</p>
                                </div>
                                <div className="flex items-center">
                                    <HardDrive className="mr-2 text-blue-300" size={20} />
                                    <p>SSD: {pkg.disk} MB</p>
                                </div>
                                <div className="flex items-center">
                                    <Save className="mr-2 text-blue-300" size={20} />
                                    <p>Backup Slots: {pkg.backup_slots}</p>
                                </div>
                                <div className="flex items-center">
                                    <Database className="mr-2 text-blue-300" size={20} />
                                    <p>Database Slots: {pkg.database_slots}</p>
                                </div>
                            </div>
                            <div className="text-center mt-6">
                                <p className="text-2xl font-bold text-white inline-block">IDR {pkg.price}</p>
                                <span className="text-sm text-gray-400 ml-1">/ monthly</span>
                            </div>
                            <button className="w-full mt-4 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition text-lg">Order Now</button>
                        </div>
                    ))}
                </div>
            </div>
            <FAQ faqData={faq} />
            <Footer />
        </div>
    );
};

export default ShonaHighCustomPage;
