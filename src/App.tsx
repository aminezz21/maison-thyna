/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import LoadingScreen from "./components/LoadingScreen";
import CustomCursor from "./components/CustomCursor";
import HomeView from "./components/HomeView";
import StoryView from "./components/StoryView";
import IngredientsView from "./components/IngredientsView";
import ExperiencesView from "./components/ExperiencesView";
import BoutiqueView from "./components/BoutiqueView";
import PartnersView from "./components/PartnersView";
import ContactView from "./components/ContactView";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [selectedExperienceId, setSelectedExperienceId] = useState<string | null>(null);

  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handlePageChange = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPageContent = () => {
    switch (currentPage) {
      case "home": return <HomeView onPageChange={handlePageChange} />;
      case "story": return <StoryView />;
      case "ingredients": return <IngredientsView />;
      case "experiences": return <ExperiencesView onPageChange={handlePageChange} onSelectExperience={setSelectedExperienceId} />;
      case "boutique": return <BoutiqueView />;
      case "partners": return <PartnersView />;
      case "contact": return <ContactView selectedExperienceId={selectedExperienceId} />;
      default: return <HomeView onPageChange={handlePageChange} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-cream text-espresso selection:bg-gold/30 selection:text-espresso">
      <CustomCursor />
      <LoadingScreen />
      <Navbar currentPage={currentPage} onPageChange={handlePageChange} />
      <main id="main-content" className="flex-grow">
        {renderPageContent()}
      </main>
      <WhatsAppButton />
      <Footer onPageChange={handlePageChange} />
    </div>
  );
}
