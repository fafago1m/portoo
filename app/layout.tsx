import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fafa Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-background overflow-y-scroll overflow-x-hidden`}
      >
        <div className="fixed inset-0 z-0 bg-grid-white/5 bg-[length:40px_40px] pointer-events-none" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
