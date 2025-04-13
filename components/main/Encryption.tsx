"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaCertificate } from "react-icons/fa";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;




interface CertificateProps {
  title: string;
  date: string;
  file: string; 
}

const certificates: CertificateProps[] = [
  {
    title: "Certificate Full Stack Next JS Laravel 11",
    date: "29 Maret 2025",
    file: "/certificates/c3.jpg",
  },
  {
    title: "Certificate Generative AI",
    date: "20 Januari 2025",
    file: "/certificates/c9.jpg",
  },
  {
    title: "Certificate Python Web Dev Pro",
    date: "5 Januari 2025",
    file: "/certificates/c5.jpg",
  },
  
  
  {
    title: "Certificate Madani Entrepreneur Academy",
    date: "21 Oktober 2024",
    file: "/certificates/c2.jpg",
  },

  {
    title: "Certificate UI/UX",
    date: "31 Januari 2025",
    file: "/certificates/c4.jpg",
  },
  
  
  {
    title: "Certificate Learning Java Script",
    date: "27 Januari 2025",
    file: "/certificates/c8.jpg",
  },
  {
    title: "Certificate Full Stack Development",
    date: "8 Februari 2024",
    file: "/certificates/c7.jpg",
  },
  {
    title: "Certificate HTML",
    date: "29 Januari 2024",
    file: "/certificates/c6.jpg",
  },
  
  {
    title: "Certificate Introduction CSS",
    date: "20 Februari 2024",
    file: "/certificates/03a31f74-f219-4e22-81a8-6afb55856224.png",
  },
  {
    title: "Certificate Introduction HTML",
    date: "19 Februari 2024",
    file: "/certificates/a60161f1-2c3d-49c2-bfc9-741d274b8215.png",
  },
  
  
  
  

  
];

const CertificateCard: React.FC<CertificateProps> = ({ title, date, file }) => {
  const isPDF = file.endsWith(".pdf");

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

      {isPDF ? (
        <div className="w-full flex items-center justify-center bg-neutral-800 rounded-lg">
          <Document file={file}>
            <Page pageNumber={1} width={300} />
          </Document>
        </div>
      ) : (
        <Image
          src={file}
          alt={title}
          width={400}
          height={300}
          className="w-full h-auto rounded-lg group-hover:scale-105 transition duration-500"
        />
      )}
      
      <div className="text-center mt-4">
        <h3 className="text-white text-lg font-semibold flex items-center justify-center gap-2">
          {title}
        </h3>
        <p className="text-gray-300 text-sm">{date}</p>
      </div>
    </motion.div>
  );
};

const CertificateGallery: React.FC = () => {
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
        My Certificate
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 z-10">
        {certificates.map((cert, index) => (
          <CertificateCard key={index} title={cert.title} date={cert.date} file={cert.file} />
        ))}
      </div>
    </div>
  );
};

export default CertificateGallery;
