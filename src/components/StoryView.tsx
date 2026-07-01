import { motion } from "motion/react";
import { TIMELINE_EVENTS, IMAGES } from "../data";
import { Compass, Clock, Heart, Users } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function StoryView() {
  const { language, t } = useLanguage();

  return (
    <div className="w-full pt-28 pb-24 bg-cream">
      {/* HEADER INTRODUCTION */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-20">
        <span className="font-jost text-xs tracking-[0.2em] uppercase text-gold font-bold">
          {language === "en" ? "The Lineage of Meninx" : "La Lignée de Meninx"}
        </span>
        <h2 className="font-title text-4xl sm:text-6xl text-espresso mt-2 font-bold leading-tight">
          {language === "en" ? "Our Story" : "Notre Histoire"}
        </h2>
        <div className="w-16 h-[1.5px] bg-terracotta mx-auto my-6" />
        <p className="font-serif text-lg sm:text-xl italic text-espresso/90 max-w-2xl mx-auto leading-relaxed">
          {t.story.subtitle}
        </p>
      </section>

      {/* DETAILED STORY PANELS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        {/* Left: Beautiful text narrative */}
        <div className="flex flex-col gap-6">
          <span className="font-jost text-xs tracking-[0.2em] uppercase text-olive font-bold">
            {language === "en" ? "The Ruins of Meninx" : "Les Ruines de Meninx"}
          </span>
          <h3 className="font-title text-3xl md:text-4xl text-espresso font-bold">
            {t.story.section1Title}
          </h3>
          <p className="font-serif text-base text-espresso/80 leading-relaxed">
            {t.story.section1Text1}
          </p>
          <p className="font-serif text-base text-espresso/80 leading-relaxed">
            {t.story.section1Text2}
          </p>
          <div className="p-5 bg-secondary-cream/40 rounded-2xl border-l-4 border-gold italic font-serif text-sm text-espresso/90">
            {t.story.quote}
          </div>
        </div>

        {/* Right: Architectural Collage */}
        <div className="relative flex justify-center">
          <div className="aspect-[3/4] w-full max-w-sm hero-arch shadow-xl">
            <img
              src={IMAGES.hero}
              alt="Maison THYNA courtyard"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute top-[-20px] right-[-10px] bg-espresso text-gold p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-gold/20 max-w-xs">
            <Compass className="w-8 h-8 text-gold shrink-0 animate-pulse" />
            <div>
              <span className="font-jost text-[9px] uppercase tracking-widest text-gold/60 block">
                {t.story.geoBadge}
              </span>
              <p className="font-serif text-xs text-white/90">
                {t.story.geoText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAMILY TRADITIONS & SACRED STAMPS */}
      <section className="bg-secondary-cream/30 py-20 border-t border-b border-gold/10 mb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Creative Graphic showing a stamp shape */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="w-full max-w-md aspect-square bg-cream rounded-3xl p-8 border border-gold/25 flex flex-col justify-between shadow-inner relative overflow-hidden">
              <div className="absolute right-0 top-0 opacity-10 pointer-events-none translate-x-1/4 -translate-y-1/4">
                <span className="font-logo text-[200px] text-espresso select-none">Th</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="font-jost text-[10px] tracking-widest uppercase text-gold font-bold">
                  {language === "en" ? "Artifact Registry" : "Registre d'Artefacts"}
                </span>
                <span className="font-mono text-[9px] text-olive/70">STAMP_ID: M-084</span>
              </div>
              
              {/* Circular Graphic of Traditional Wooden Stamp */}
              <div className="my-6 flex flex-col items-center">
                <div className="w-48 h-48 rounded-full border-4 border-dashed border-gold/30 flex items-center justify-center p-4">
                  <div className="w-full h-full rounded-full border-2 border-olive/20 flex flex-col items-center justify-center bg-cream/50 shadow-md">
                    <div className="w-12 h-[1px] bg-gold/50 my-1" />
                    <span className="font-title text-xl text-espresso font-semibold italic">
                      {language === "en" ? "Meninx Dome" : "Coupole Meninx"}
                    </span>
                    <div className="w-12 h-[1px] bg-gold/50 my-1" />
                    <span className="font-jost text-[8px] tracking-[0.3em] uppercase text-olive font-bold">1200 BC</span>
                  </div>
                </div>
                <p className="font-serif text-xs text-center text-espresso/60 italic mt-4 max-w-xs">
                  {language === "en"
                    ? "A high-relief carving designed to channel wheat flour into uniform ridges, allowing deep heat penetration during brick-oven firing."
                    : "Une gravure en haut-relief conçue pour canaliser la farine de blé en crêtes régulières, permettant une pénétration optimale de la chaleur."}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-terracotta" />
                <span className="font-serif text-xs text-espresso/80 font-medium">
                  {language === "en"
                    ? "Passed down through four generations of the Thyna lineage."
                    : "Transmis à travers quatre générations de la lignée Thyna."}
                </span>
              </div>
            </div>
          </div>

          {/* Right: The storytelling text */}
          <div className="order-1 lg:order-2 flex flex-col gap-6">
            <span className="font-jost text-xs tracking-[0.2em] uppercase text-gold font-bold">
              {language === "en" ? "Family Transmission" : "Transmission Familiale"}
            </span>
            <h3 className="font-title text-3xl md:text-4xl text-espresso font-bold">
              {t.story.section2Title}
            </h3>
            <p className="font-serif text-base text-espresso/80 leading-relaxed">
              {t.story.section2Text1}
            </p>
            <p className="font-serif text-base text-espresso/80 leading-relaxed">
              {t.story.section2Text2}
            </p>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-gold shrink-0 mt-1" />
                <div>
                  <h5 className="font-jost text-xs tracking-wider uppercase font-semibold text-espresso">
                    {language === "en" ? "Slow Craft" : "Artisanat Lent"}
                  </h5>
                  <p className="font-serif text-xs text-espresso/70 mt-0.5">
                    {language === "en"
                      ? "We mold only 200 cookies per day, prioritizing density over volume."
                      : "Nous ne moulons que 200 biscuits par jour, privilégiant la qualité sur le volume."}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Heart className="w-4 h-4 text-terracotta shrink-0 mt-1" />
                <div>
                  <h5 className="font-jost text-xs tracking-wider uppercase font-semibold text-espresso">
                    {language === "en" ? "Preservation" : "Préservation"}
                  </h5>
                  <p className="font-serif text-xs text-espresso/70 mt-0.5">
                    {language === "en"
                      ? "We donate 5% of all workshop revenues to traditional wheat seed vaults."
                      : "Nous reversons 5% des revenus des ateliers à des banques de semences locales de blé ancien."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE INTERACTIVE HISTORICAL TIMELINE */}
      <section className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="font-jost text-xs tracking-[0.2em] uppercase text-gold font-bold">
            {t.story.timelineTitle}
          </span>
          <h3 className="font-title text-3xl md:text-4xl text-espresso font-bold mt-1">
            {t.story.timelineSubtitle}
          </h3>
        </div>

        {/* Timeline Line representation */}
        <div className="relative border-l-2 border-gold/20 pl-8 ml-4 sm:ml-8 flex flex-col gap-12">
          {t.story.timelineEvents.map((event, index) => (
            <div key={index} className="relative group">
              {/* Timeline pin point */}
              <div className="absolute left-[-41px] top-1.5 w-6 h-6 rounded-full bg-cream border-2 border-gold flex items-center justify-center group-hover:border-terracotta transition-colors">
                <div className="w-2 h-2 rounded-full bg-olive group-hover:bg-terracotta transition-all" />
              </div>

              {/* Event Content card */}
              <div className="glass-card p-6 rounded-2xl shadow-sm border border-gold/15 group-hover:border-gold/35 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <span className="font-jost text-sm tracking-widest text-terracotta font-extrabold uppercase">
                    {event.year}
                  </span>
                  <h4 className="font-title text-xl text-espresso font-semibold group-hover:text-gold transition-colors">
                    {event.title}
                  </h4>
                </div>
                <p className="font-serif text-sm text-espresso/80 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
