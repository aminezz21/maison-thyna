import { Mail, Phone, Clock, MapPin, Instagram, Facebook, ArrowUp } from "lucide-react";
import { useState, FormEvent } from "react";
import { useLanguage } from "../LanguageContext";

interface FooterProps {
  onPageChange: (page: string) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  const { language } = useLanguage();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const handleLinkClick = (pageId: string) => {
    onPageChange(pageId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="bg-espresso text-cream pt-20 pb-10 border-t border-gold/15 relative overflow-hidden">
      {/* Decorative background geometry */}
      <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none translate-x-1/4 translate-y-1/4">
        <div className="w-[400px] h-[400px] rounded-full border border-gold" />
        <div className="w-[500px] h-[500px] rounded-full border border-dashed border-gold ml-10 mt-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative z-10">
        {/* Brand & Identity */}
        <div className="flex flex-col gap-4">
          <button
            onClick={() => handleLinkClick("home")}
            className="flex flex-col items-start focus:outline-none text-left"
          >
            <span className="font-logo text-4xl text-gold tracking-wide">Maison THYNA</span>
            <span className="font-jost text-[8px] tracking-[0.4em] uppercase text-cream/60 font-semibold -mt-1">
              Djerba Heritage
            </span>
          </button>
          <p className="font-serif text-sm text-[#F4EEE2]/80 leading-relaxed mt-2">
            {language === "en"
              ? "What industry forgot, the land still remembers. Maison THYNA is a cultural and gastronomic living museum preserving the ancient cereal recipes of Meninx."
              : "Ce que l'industrie a oublié, la terre s'en souvient encore. La Maison THYNA est un musée vivant, culturel et gastronomique, préservant les recettes céréalières de Meninx."}
          </p>
          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-gold/20 flex items-center justify-center hover:bg-gold hover:text-espresso transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-gold/20 flex items-center justify-center hover:bg-gold hover:text-espresso transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Discovery Links */}
        <div className="flex flex-col gap-4">
          <h4 className="font-title text-lg text-gold font-medium tracking-wide">
            {language === "en" ? "Discovery" : "Découvrir"}
          </h4>
          <div className="flex flex-col gap-2.5">
            <button onClick={() => handleLinkClick("story")} className="text-left font-serif text-sm text-[#F4EEE2]/70 hover:text-gold transition-colors duration-200">
              {language === "en" ? "Our Story" : "Notre Histoire"}
            </button>
            <button onClick={() => handleLinkClick("ingredients")} className="text-left font-serif text-sm text-[#F4EEE2]/70 hover:text-gold transition-colors duration-200">
              {language === "en" ? "The Seven Sacred Ingredients" : "Les Sept Ingrédients Sacrés"}
            </button>
            <button onClick={() => handleLinkClick("experiences")} className="text-left font-serif text-sm text-[#F4EEE2]/70 hover:text-gold transition-colors duration-200">
              {language === "en" ? "Traditional Masterclasses" : "Masterclasses Traditionnelles"}
            </button>
            <button onClick={() => handleLinkClick("boutique")} className="text-left font-serif text-sm text-[#F4EEE2]/70 hover:text-gold transition-colors duration-200">
              {language === "en" ? "Prestige Tasting Collections" : "Collections de Dégustation de Prestige"}
            </button>
            <button onClick={() => handleLinkClick("partners")} className="text-left font-serif text-sm text-[#F4EEE2]/70 hover:text-gold transition-colors duration-200">
              {language === "en" ? "Hotel & Concierge Relations" : "Relations Hôtels & Conciergeries"}
            </button>
          </div>
        </div>

        {/* Contact Info & Hours */}
        <div className="flex flex-col gap-4">
          <h4 className="font-title text-lg text-gold font-medium tracking-wide">
            {language === "en" ? "The Sanctuary" : "Le Sanctuaire"}
          </h4>
          <div className="flex flex-col gap-3.5">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-gold mt-1 shrink-0" />
              <p className="font-serif text-sm text-[#F4EEE2]/70 leading-relaxed">
                {language === "en"
                  ? "Coastal Road of El Kantara (near Meninx site), Djerba, Tunisia"
                  : "Route Côtière d'El Kantara (près du site de Meninx), Djerba, Tunisie"}
              </p>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-gold shrink-0" />
              <p className="font-serif text-sm text-[#F4EEE2]/70">+216 22 334 455</p>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-gold shrink-0" />
              <p className="font-serif text-sm text-[#F4EEE2]/70 font-sans">host@maisonthyna.com</p>
            </div>
            <div className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-gold mt-1 shrink-0" />
              <div>
                <p className="font-serif text-sm text-[#F4EEE2]/70 font-semibold">
                  {language === "en" ? "Wednesday – Sunday" : "Mercredi – Dimanche"}
                </p>
                <p className="font-serif text-xs text-[#F4EEE2]/50">09:00 AM – 06:00 PM</p>
                <p className="font-serif text-[10px] text-gold/60 mt-1 italic leading-tight">
                  {language === "en"
                    ? "Mondays & Tuesdays reserved for grain milling & research."
                    : "Lundi & Mardi réservés à la mouture du blé et la recherche."}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dispatch Newsletter / Letters from Meninx */}
        <div className="flex flex-col gap-4">
          <h4 className="font-title text-lg text-gold font-medium tracking-wide">
            {language === "en" ? "Letters from Meninx" : "Lettres de Meninx"}
          </h4>
          <p className="font-serif text-sm text-[#F4EEE2]/70 leading-relaxed">
            {language === "en"
              ? "Subscribe to receive tales of Tunisian agricultural heritage, recipe archives, and season announcements."
              : "Abonnez-vous pour recevoir des récits de notre patrimoine agricole, des archives de recettes et les nouveautés de saison."}
          </p>
          {!subscribed ? (
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2 mt-1">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder={language === "en" ? "Your email address" : "Votre adresse e-mail"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#1F1813] border border-gold/15 text-cream placeholder-cream/40 font-jost text-xs tracking-wider px-4 py-3 rounded-xl focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full font-jost text-[10px] tracking-widest uppercase font-bold py-3 bg-gold hover:bg-gold/90 text-espresso rounded-xl transition-all duration-300 cursor-pointer"
              >
                {language === "en" ? "Receive Archives" : "Recevoir les Archives"}
              </button>
            </form>
          ) : (
            <div className="p-3 bg-[#1F1813] border border-gold/30 rounded-xl text-center">
              <p className="font-serif text-xs text-gold font-medium">
                {language === "en"
                  ? "You are now subscribed. Welcome to the lineage."
                  : "Vous êtes maintenant inscrit. Bienvenue dans la lignée."}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-gold/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
        <p className="font-jost text-[10px] tracking-widest uppercase text-cream/40">
          {language === "en"
            ? `© ${new Date().getFullYear()} Maison THYNA. All rights reserved.`
            : `© ${new Date().getFullYear()} Maison THYNA. Tous droits réservés.`}
        </p>
        
        {/* Navigation back to top */}
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-1.5 font-jost text-[10px] tracking-widest uppercase text-gold hover:text-cream/90 transition-colors focus:outline-none cursor-pointer"
        >
          {language === "en" ? "Scroll to Zenith" : "Retour au Zénith"}
          <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
        </button>

        <p className="font-jost text-[10px] tracking-widest uppercase text-cream/40">
          Djerba, Tunisia
        </p>
      </div>
    </footer>
  );
}
