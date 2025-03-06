import Navbar from "../components/Navbar";
import HeaderHome from "../components/HeaderHome";
import Features from "../components/Features";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import { faqmain } from '../database/faq-main';
const faqData = Array.isArray(faqmain) && faqmain.length > 0 ? faqmain[0].faq : [];

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <HeaderHome />
      <Features />
      <FAQ faqData={faqData} />  
      <Footer />
    </div>
  );
}
