"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FiSend, FiUser, FiMail, FiMessageSquare } from "react-icons/fi";

export function SignupFormDemo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await emailjs.send(
        "service_da9nc9m",
        "template_c9ux5zt",
        formData,
        "8OFYLll4Jwcyjk0pm"
      );

      if (response.status === 200) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-24 px-6 md:px-12 bg-[#030014] overflow-hidden z-[30]">

      <div className="max-w-4xl mx-auto flex flex-col items-center relative z-40 pointer-events-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter"
          >
            Hubungi Saya
          </motion.h2>
          <p className="text-gray-400 text-lg max-w-xl">
            Punya proyek menarik atau sekadar ingin menyapa? Kirimkan pesan dan saya akan segera membalasnya.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full bg-zinc-900 border border-zinc-800 p-8 md:p-12 rounded-2xl relative z-50 pointer-events-auto"
        >
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div className="relative group">
                <label htmlFor="name" className="text-sm font-medium text-gray-400 mb-2 block ml-1">Nama Lengkap</label>
                <div className="relative">
                  <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400/50 group-focus-within:text-purple-400 transition-colors" />
                  <input
                    id="name"
                    type="text"
                    placeholder="Ihza Maulana"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all placeholder:text-gray-600"
                    required
                  />
                </div>
              </div>

              <div className="relative group">
                <label htmlFor="email" className="text-sm font-medium text-gray-400 mb-2 block ml-1">Alamat Email</label>
                <div className="relative">
                  <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400/50 group-focus-within:text-purple-400 transition-colors" />
                  <input
                    id="email"
                    type="email"
                    placeholder="nama@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all placeholder:text-gray-600"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6 flex flex-col">
              <div className="relative group flex-grow">
                <label htmlFor="message" className="text-sm font-medium text-gray-400 mb-2 block ml-1">Pesan Anda</label>
                <div className="relative h-[calc(100%-2rem)]">
                  <FiMessageSquare className="absolute left-4 top-5 text-purple-400/50 group-focus-within:text-purple-400 transition-colors" />
                  <textarea
                    id="message"
                    placeholder="Ceritakan tentang proyek Anda..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full h-full min-h-[180px] bg-black/40 border border-zinc-800 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:border-zinc-600 transition-all placeholder:text-gray-600 resize-none pointer-events-auto"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="md:col-span-2 mt-4">
              <button
                disabled={status === "sending"}
                className={`w-full group relative overflow-hidden py-4 rounded-xl font-bold transition-all pointer-events-auto
                ${status === "sending" ? "bg-zinc-800 text-zinc-500" : "bg-white text-black hover:bg-zinc-200"}`}
                type="submit"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {status === "sending" ? "Mengirim..." : status === "success" ? "Pesan Terkirim!" : "Kirim Pesan"}
                  <FiSend className={`transition-transform duration-500 ${status === "sending" ? "translate-x-10 opacity-0" : "group-hover:translate-x-1"}`} />
                </span>
                {status === "success" && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute inset-0 bg-green-500 z-0"
                  />
                )}
              </button>

              {status === "error" && (
                <p className="text-red-400 text-center mt-4 text-sm font-medium">
                  Oops! Terjadi kesalahan. Silakan coba lagi.
                </p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
