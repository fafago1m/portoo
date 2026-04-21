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
    title: "Certificate Juara 2 LKS Provinsi DIY",
    date: "22 April 2026",
    file: "/certificates/lomba.png",
  },
  {
    title: "Certificate Uji Kompentesi Keahlian Jurusan RPL",
    date: "16 April 2026",
    file: "/certificates/juara1.jpg",
  },
  {
    title: "Certificate Magang PT Farma Global Teknologi",
    date: "30 November 2025",
    file: "/certificates/magang1.png",
  },
  {
    title: "Certificate Momenku Siap Berkemas",
    date: "26 November 2025",
    file: "/certificates/momenku.jpeg",
  },
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
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      transition={{ duration: 0.5 }}
      className="break-inside-avoid mb-8 relative group overflow-hidden rounded-[2.5rem] border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:border-zinc-500"
    >
      <div className="absolute top-6 right-6 z-20 text-zinc-400">
        <FaCertificate size={28} />
      </div>

      <div className="relative overflow-hidden aspect-auto">
        {isPDF ? (
          <div className="w-full flex items-center justify-center bg-neutral-900/50 px-2 py-8">
            <Document file={file}>
              <Page pageNumber={1} width={300} />
            </Document>
          </div>
        ) : (
          <Image
            src={file}
            alt={title}
            width={800}
            height={1000}
            className="w-full h-auto object-contain transition-all duration-1000 group-hover:scale-105 group-hover:brightness-110"
          />
        )}

        {/* Advanced Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 gap-2">
          <div className="flex items-center gap-2">
            <span className="h-[1px] w-8 bg-zinc-500" />
            <p className="text-zinc-400 text-xs uppercase tracking-[0.2em] font-bold">{date}</p>
          </div>
          <h3 className="text-white text-2xl font-black leading-tight tracking-tight">{title}</h3>
          <div className="mt-4 flex gap-2">
            <span className="px-3 py-1 bg-zinc-800 rounded-full text-[10px] text-zinc-300 backdrop-blur-md">Terverifikasi</span>
            <span className="px-3 py-1 bg-zinc-800 rounded-full text-[10px] text-zinc-300 backdrop-blur-md">Pencapaian</span>
          </div>
        </div>
      </div>

      <div className="p-6 bg-gradient-to-b from-transparent to-black/20 group-hover:opacity-0 transition-opacity duration-300">
        <h3 className="text-white/90 text-base font-bold truncate tracking-tight">
          {title}
        </h3>
        <p className="text-gray-500 text-xs mt-2 flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
          {date}
        </p>
      </div>
    </motion.div>
  );
};

const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="relative py-32 px-6 md:px-12 lg:px-24 w-full bg-[#030014]">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="px-4 py-1.5 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            Pencapaian
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tighter"
          >
            Sertifikasi Saya
          </motion.h2>
          <p className="text-gray-400 max-w-2xl text-xl leading-relaxed font-medium">
            Validasi keahlian saya dari platform dan institusi terkemuka di industri.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {certificates.map((cert, index) => (
            <CertificateCard key={index} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
