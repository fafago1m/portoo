"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export function SignupFormDemo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSuccessMessage("Thank you! Your message has been sent.");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setSuccessMessage("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black px-4 overflow-hidden">
      {/* Form container harus berada di atas semua elemen */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
        className="max-w-md w-full mx-auto rounded-lg p-8 bg-neutral-900 border border-neutral-800 absolute z-[9999] shadow-lg pointer-events-auto"
      >
        <h2 className="font-bold text-3xl text-white text-center mb-4 tracking-wide">
          Contact Us
        </h2>
        <p className="text-neutral-400 text-sm text-center mb-6">
          We'd love to hear from you! Send us a message and we'll get back to you as soon as possible.
        </p>

        {successMessage && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-500 text-center mb-4"
          >
            {successMessage}
          </motion.p>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <motion.input
            whileFocus={{ scale: 1.05 }}
            id="name"
            placeholder="Your Name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-neutral-800 text-white rounded-lg border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />

          <motion.input
            whileFocus={{ scale: 1.05 }}
            id="email"
            placeholder="Your Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-neutral-800 text-white rounded-lg border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />

          <motion.textarea
            whileFocus={{ scale: 1.05 }}
            id="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-neutral-800 text-white rounded-lg border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-[120px]"
            required
          />

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg font-medium shadow-lg hover:shadow-purple-500/50 transition-all"
            type="submit"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
