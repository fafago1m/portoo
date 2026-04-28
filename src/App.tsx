import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { FloatingNavbar } from "./components/ui/floating-navbar";
import { Hero } from "./components/ui/hero";
import { SocialLinks } from "./components/ui/social-links";
import { Footer } from "./components/ui/footer-section";
import { FeaturesSection } from "./components/ui/features-section";
import { ServicesSection } from "./components/ui/services-section";
import { RatingSection } from "./components/ui/rating-section";
import { GallerySection } from "./components/ui/gallery-section";
import { PageLoader } from "./components/ui/page-loader";
import { ProcessSection } from "./components/ui/process-section";
import { ConnectSection } from "./components/ui/connect-section";
import { TechMarquee } from "./components/ui/tech-marquee";
import { StatsSection } from "./components/ui/stats-section";
import { NoiseOverlay } from "./components/ui/noise-overlay";
import { SpotlightSection } from "./components/ui/spotlight-section";
import { FaqSection } from "./components/ui/faq-section";
import { BrandMarquee } from "./components/ui/brand-marquee";
import { QuotesSection } from "./components/ui/quotes-section";
import { TimelineSection } from "./components/ui/timeline-section";
import { ThemeToggle } from "./components/ui/theme-toggle";

export default function App() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -120]);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <FloatingNavbar />
      <PageLoader />
      <NoiseOverlay />
      <ThemeToggle />
      <SocialLinks />
      <Hero />
      <motion.div
        className="relative z-20 bg-background transition-colors duration-500 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-30px_60px_-15px_rgba(0,0,0,0.15)]"
        style={{ y: shouldReduceMotion ? 0 : y, marginTop: '-5rem' }}
      >
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 text-center">
          <FeaturesSection />
        </div>

        <BrandMarquee />
        <TechMarquee />

        <ProcessSection />
        <TimelineSection />
        <SpotlightSection />
        <GallerySection />
        <RatingSection />
        <QuotesSection />
        <FaqSection />
        <ConnectSection />
      </motion.div>
      <Footer />
    </div>
  );
}
