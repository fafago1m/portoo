import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from 'react';
import HomePage from "./pages/HomePage";
import TOSPage from "./pages/TOSPage";
import ShonaHighPage from "./pages/ShonaHighPage";
import ShonaHighCustomPage from "./pages/ShonaHighCustomPage";
import ShonaExpertPage from "./pages/ShonaExpertPage";
import ShonaSQLPage from "./pages/ShonaSQLPage";
import ShonaBareMetalPage from "./pages/ShonaBareMetalPage";
import NotFoundPage from "./pages/NotFoundPage";
import ContactPage from "./pages/ContactPage";
import './index.css';

function DiscordRedirect() {
  useEffect(() => {
    window.location.href = 'https://discord.com/invite/vD3Aa95UPW';
  }, []);

  return null;
}
function WhatsappRedirect() {
  useEffect(() => {
    window.location.href = 'https://wa.me/6285190001285?text=Halo+Kak+Mau+Order';
  }, []);

  return null;
}
function WhatsappGroupRedirect() {
  useEffect(() => {
    window.location.href = 'https://chat.whatsapp.com/KaKIAPiOpdRB0JtC3A4mfU';
  }, []);

  return null;
}
function DiscordRefferalRedirect() {
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const ref = queryParams.get('ref'); 

    if (ref === 'dcz3n5') {
      window.location.href = 'https://discord.gg/rA5MYAzTPe';
    } else if (ref === '7u5t1sn') {
      window.location.href = 'https://discord.gg/vhpKRNp4tr';
    } else if (ref === 'W4r71N') {  
      window.location.href = 'https://discord.gg/tR4vVcCbVc';
    } else if (ref === '1u7vf1') {  
      window.location.href = 'https://discord.gg/v4wJUyDGK5';
    }  else if (ref === '41VuF4v4') {  
      window.location.href = 'https://discord.gg/DRpyR2CKGg';
    } else {
      window.location.href = '/';
    }
  }, [location]);

  return null;
}

function DiscordContohRedirect() {
  useEffect(() => {
    window.location.href = 'https://discord.gg/rA5MYAzTPe';
  }, []);

  return null;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tos" element={<TOSPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/hosting/shona-high" element={<ShonaHighPage />} />
        <Route path="/hosting/shona-expert" element={<ShonaExpertPage />} />
        <Route path="/hosting/docker-hosting" element={<ShonaHighCustomPage />} />
        <Route path="/hosting/database-hosting" element={<ShonaSQLPage />} />
        <Route path="/hosting/shona-bare-metal" element={<ShonaBareMetalPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/discord" element={<DiscordRedirect />} />

        <Route path="/ref" element={<DiscordRefferalRedirect />} />

        <Route path="/wa" element={<WhatsappRedirect />} />
        <Route path="/gc-wa" element={<WhatsappGroupRedirect />} />
      </Routes>
    </ Router>
  );
}