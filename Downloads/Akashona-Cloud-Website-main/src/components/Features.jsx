import React from 'react';
import { featuresData } from '../database/features';

  const Features = () => {
    return (
        <div className="text-center bg-gray-900 mt-[250px] lg:mt-[600px] text-white py-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">All Features</h2>
            <p className="text-gray-400 mb-8">What are the features included?</p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto px-4">
                {featuresData.map((feature, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-md flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg">
                        <div className="text-yellow-400 text-3xl mb-4 flex items-center justify-center">
                            {feature.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-yellow-400 mb-2">{feature.title}</h3>
                        <p className="text-gray-300 text-sm text-center">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default Features;
