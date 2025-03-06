import React, { useState } from 'react';
import { Globe } from 'lucide-react'; // Importing the Globe icon from Lucide
import { termsofservice } from '../database/termsofservice';

const termsContent = termsofservice

const IsiTerms = () => {
    const [language, setLanguage] = useState('en');

    const toggleLanguage = () => {
        setLanguage(prevLanguage => (prevLanguage === 'en' ? 'id' : 'en'));
    };

    return (
        <div className="max-w-3xl mx-auto p-6 text-white rounded-lg shadow-lg">
        <div className="flex justify-center mb-6">
            <button 
                onClick={toggleLanguage}
                className="px-4 py-2 flex items-center bg-gray-600 hover:bg-gray-900 text-white font-semibold rounded"
            >
                <Globe className="mr-2" /> {/* Adding the globe icon */}
                {language === 'en' ? 'Ganti ke Bahasa' : 'Change to Language'}
            </button>
        </div>
        <h1 className="text-2xl font-bold mb-4">{termsContent.title[language]}</h1>
        <p className="mb-4">{termsContent.introduction[language]}</p>
        {termsContent.sections.map((section, index) => (
            <div key={index} className="mt-6">
                <h2 className="text-xl font-semibold mb-2">{section.title[language]}</h2>
                <p className="mb-4">{section.content[language]}</p>
            </div>
        ))}
    </div>
    );
};

export default IsiTerms;
