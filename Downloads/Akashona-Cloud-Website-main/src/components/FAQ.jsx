import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQ = ({ faqData }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-900 py-12 px-4">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-white">Frequently Asked Questions</h1>
        <p className="text-gray-400 mt-2">Most Customer Question To Akashona Cloud.</p>
      </div>

      <div className="max-w-3xl mx-auto mb-10">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-md mb-4 overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center px-6 py-4 text-left text-white font-medium hover:text-blue-400 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {activeIndex === index ? (
                <FaMinus className="text-blue-400" />
              ) : (
                <FaPlus className="text-blue-400" />
              )}
            </button>
            <div
              className={`px-6 text-gray-300 text-sm transition-all duration-300 ease-in-out ${
                activeIndex === index ? "h-auto py-4" : "h-0 py-0"
              }`}
              style={{
                overflow: "hidden",
                transitionProperty: "height, padding",
              }}
            >
              {activeIndex === index && <p>{faq.answer}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
