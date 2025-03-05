"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaCertificate } from "react-icons/fa";

const certificates = [
  {
    id: 1,
    title: "Certified Web Developer",
    date: "12 Januari 2024",
    image: "/certificates/web-dev.jpg",
  },
  {
    id: 2,
    title: "UI/UX Design Mastery",
    date: "20 Februari 2024",
    image: "/certificates/ui-ux.jpg",
  },
  {
    id: 3,
    title: "Cyber Security Specialist",
    date: "5 Maret 2024",
    image: "/certificates/cyber-security.jpg",
  },
];

const CertificateCard = ({ title, date, image }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="relative group overflow-hidden rounded-xl shadow-lg bg-gradient-to-br from-black via-purple-900 to-black border border-purple-500/50 p-4"
    >
      <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition duration-500 bg-[radial-gradient(circle_at_top,_rgba(128,0,128,0.5),_transparent)]"></div>
      
      <div className="absolute top-4 right-4 text-yellow-400 text-3xl">
        <FaCertificate />
      </div>

      <Image
        src={image}
        alt={title}
        width={400}
        height={300}
        className="w-full h-auto rounded-lg group-hover:scale-105 transition duration-500"
      />
      <div className="text-center mt-4">
        <h3 className="text-white text-lg font-semibold flex items-center justify-center gap-2">
          {title}
        </h3>
        <p className="text-gray-300 text-sm">{date}</p>
      </div>
    </motion.div>
  );
};

const CertificateGallery = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full h-full bg-black relative overflow-hidden py-20 px-5">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0 bg-[url('/galaxy-bg.jpg')] bg-cover bg-center opacity-50 animate-pulse"></div>
      
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center z-10"
      >
        My Sertifikat
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 z-10">
        {certificates.map((cert) => (
          <CertificateCard key={cert.id} title={cert.title} date={cert.date} image={cert.image} />
        ))}
      </div>
    </div>
  );
};

export default CertificateGallery;
