"use client";

import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../sub/ProjectCard";

const projects = [
  {
    title: "Sistem Pembiayaan UMKM Nasional (LKS Web Tech 2026)",
    description: "Sistem fullstack menggunakan Laravel & Vue.js. Menerapkan RBAC multi-role, workflow persetujuan, audit log, serta sistem perhitungan cicilan otomatis dan amortisasi.",
    image: "/lks.jpg",
  },
  {
    title: "SaaS Aplikasi Catering UMKM",
    description: "SaaS multi-tenant dengan Laravel. Memiliki manajemen produk, laporan penjualan, dan integrasi Midtrans untuk pembayaran online.",
    image: "/cate1.png",
  },
  {
    title: "Sistem Akademik (SIAKAD) SMK N 1 Sanden",
    description: "Sistem akademik dengan presensi siswa berbasis GPS. Menyediakan fitur manajemen jadwal, rapot siswa, dan portal monitoring guru/wali murid.",
    image: "/siakad.png",
  },
  {
    title: "Aplikasi Absensi PKL Berbasis Lokasi",
    description: "Menggunakan Laravel & Geo Location API untuk memastikan validitas kehadiran siswa magang dalam radius tertentu.",
    image: "/lks.jpg",
  },
  {
    title: "Website Olahan Segara",
    description: "Web company profile & e-commerce. Sistem manajemen produk, CMS konten, dan laporan pembukuan keuangan & transaksi.",
    image: "/oalahan.png",
  },
  {
    title: "Website NikeDash",
    description: "Web e-commerce sepatu . Sistem manajemen produk, CMS konten, dan laporan pembukuan keuangan & transaksi.",
    image: "/nikedash.png",
  },
  {
    title: "E-Library Univ. Muhammadiyah Purworejo",
    description: "Antarmuka E-Library interaktif & responsif dibangun dengan Next.js, terintegrasi mulus dengan backend data perpustakaan.",
    image: "/poto.png",
  },
  
  {
    title: "Web Store Produk Digital",
    description: "Platform e-commerce menggunakan Laravel dengan sistem checkout otomatis dan manajemen katalog produk digital.",
    image: "/cate1.png",
  },
  {
    title: "Mockup App Askep & PT Farma",
    description: "Desain UI/UX menggunakan Figma. Membangun purwarupa antarmuka sistem medis dan company profile dengan pendekatan user-centric.",
    image: "/fi.png",
  },
  {
    title: "Panel Hosting Pterodactyl",
    description: "Konfigurasi kustom Pterodactyl Panel di VPS CentOS/Ubuntu. Penyesuaian UI/UX untuk dashboard manajemen server game.",
    image: "/panel.png",
  }
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative flex flex-col items-center justify-center py-32 bg-[#030014] overflow-hidden"
    >
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat bg-[length:50px_50px] opacity-[0.02] z-0" />

      <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 lg:px-24">
        <div className="flex flex-col items-center mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="px-4 py-1.5 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            Portofolio
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter"
          >
            Proyek Unggulan
          </motion.h2>
          <p className="text-gray-400 max-w-2xl text-xl leading-relaxed font-medium">
            Koleksi pilihan implementasi teknis dan solusi kreatif saya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              src={project.image}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mt-24"
        >
          <a
            href="https://github.com/fafago1m"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-3.5 bg-zinc-900 border border-zinc-800 rounded-lg text-white font-bold transition-all hover:bg-zinc-800 hover:border-zinc-700 active:scale-95 flex items-center gap-3"
          >
            <span>Lihat Proyek Lainnya di GitHub</span>
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section >
  );
};

export default Projects;
