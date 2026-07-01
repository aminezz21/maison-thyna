import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, MapPin, Globe } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../LanguageContext";

interface NavbarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export default function Navbar({ currentPage, onPageChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const NAV_ITEMS = [
    { id: "home", label: language === "en" ? "Home" : "Accueil" },
    { id: "story", label: t.navbar.story },
    { id: "ingredients", label: t.navbar.ingredients },
    { id: "experiences", label: t.navbar.experiences },
    { id: "boutique", label: t.navbar.boutique },
    { id: "partners", label: t.navbar.partners },
    { id: "contact", label: language === "en" ? "Contact" : "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (pageId: string) => {
    onPageChange(pageId);
    setIsOpen(false);
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav
        id="main-navigation"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          scrolled
            ? "glass-nav py-3 shadow-md"
            : "bg-transparent py-6 border-b border-gold/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick("home")}
            className="flex flex-col items-start focus:outline-none group text-left"
          >
            <span className="font-logo text-3xl md:text-4xl text-espresso tracking-wide group-hover:text-gold transition-colors duration-300">
              Maison THYNA
            </span>
            <span className="font-jost text-[8px] tracking-[0.4em] uppercase text-olive font-semibold -mt-1 group-hover:text-gold transition-colors duration-300">
              {language === "en" ? "Djerba Heritage" : "Héritage de Djerba"}
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="relative py-2 font-jost text-xs tracking-[0.2em] uppercase font-medium focus:outline-none transition-colors duration-300"
                  style={{ color: isActive ? "#8B4226" : "#2A211A" }}
                >
                  <span className="hover:text-gold transition-colors duration-300">{item.label}</span>
                  {/* Subtle hover line */}
                  {isActive && (
                    <motion.div
                      layoutId="navActiveLine"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-terracotta"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Call To Action button & Language Switcher (Desktop) */}
          <div className="hidden lg:flex items-center gap-5">
            {/* Elegant Luxury Language Switcher */}
            <div className="flex items-center gap-2 border-r border-gold/25 pr-5 mr-1 py-1">
              <button
                onClick={() => setLanguage("en")}
                className={`font-jost text-[10px] tracking-[0.15em] transition-all duration-300 focus:outline-none ${
                  language === "en"
                    ? "text-terracotta font-extrabold scale-105"
                    : "text-espresso/45 hover:text-espresso"
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <span className="text-espresso/15 text-[10px]">/</span>
              <button
                onClick={() => setLanguage("fr")}
                className={`font-jost text-[10px] tracking-[0.15em] transition-all duration-300 focus:outline-none ${
                  language === "fr"
                    ? "text-terracotta font-extrabold scale-105"
                    : "text-espresso/45 hover:text-espresso"
                }`}
                aria-label="Passer en Français"
              >
                FR
              </button>
            </div>

            <button
              onClick={() => handleNavClick("contact")}
              className="group font-jost text-xs tracking-[0.2em] uppercase font-semibold px-5 py-2.5 bg-olive hover:bg-dark-olive text-cream rounded-full border border-gold/20 flex items-center gap-2 shadow-sm transition-all duration-300 active:scale-95"
            >
              {t.navbar.cta}
              <ArrowRight className="w-3.5 h-3.5 text-gold group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Trigger & Switcher */}
          <div className="flex lg:hidden items-center gap-3">
            {/* Minimal Mobile Lang Toggle */}
            <button
              onClick={() => setLanguage(language === "en" ? "fr" : "en")}
              className="font-jost text-[10px] tracking-wider px-2 py-1 rounded-md border border-gold/20 bg-cream/40 text-espresso/70 hover:text-espresso"
            >
              {language.toUpperCase()}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-espresso hover:text-gold p-2 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer (Glassmorphism overlay) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-0 pt-20 pb-8 px-6 bg-cream/95 backdrop-blur-xl border-b border-gold/15 z-30 shadow-2xl flex flex-col gap-6 lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="py-3 text-left font-jost text-sm tracking-[0.2em] uppercase font-semibold border-b border-gold/5 flex items-center justify-between"
                    style={{ color: isActive ? "#8B4226" : "#2A211A" }}
                  >
                    <span>{item.label}</span>
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-terracotta" />}
                  </button>
                );
              })}
            </div>

            {/* Language switch inline in mobile menu */}
            <div className="flex justify-between items-center border-b border-gold/5 pb-3">
              <span className="font-jost text-[9px] tracking-widest text-espresso/50 uppercase font-bold">Language / Langue</span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setLanguage("en");
                    setIsOpen(false);
                  }}
                  className={`font-jost text-[10px] tracking-wider px-3 py-1 rounded-full ${
                    language === "en" ? "bg-espresso text-cream font-bold" : "text-espresso/60"
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => {
                    setLanguage("fr");
                    setIsOpen(false);
                  }}
                  className={`font-jost text-[10px] tracking-wider px-3 py-1 rounded-full ${
                    language === "fr" ? "bg-espresso text-cream font-bold" : "text-espresso/60"
                  }`}
                >
                  Français
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-1">
              <button
                onClick={() => handleNavClick("contact")}
                className="w-full text-center font-jost text-xs tracking-[0.2em] uppercase font-bold py-3.5 bg-olive text-cream rounded-full border border-gold/20 shadow-md"
              >
                {t.navbar.cta}
              </button>
              <button
                onClick={() => handleNavClick("partners")}
                className="w-full text-center font-jost text-xs tracking-[0.2em] uppercase font-semibold py-3.5 bg-secondary-cream text-espresso rounded-full border border-gold/10"
              >
                {language === "en" ? "Become a Partner" : "Devenir Partenaire"}
              </button>
            </div>

            {/* Djerba badge in menu */}
            <div className="flex items-center justify-center gap-2 text-olive/60 mt-4">
              <MapPin className="w-4 h-4 text-gold" />
              <span className="font-jost text-[10px] uppercase tracking-widest font-semibold">
                {language === "en" ? "Meninx, Djerba, Tunisia" : "Meninx, Djerba, Tunisie"}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
