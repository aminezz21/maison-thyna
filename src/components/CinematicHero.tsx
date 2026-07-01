import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, ArrowRight, Star } from "lucide-react";
import { IMAGES } from "../data";
import { useLanguage } from "../LanguageContext";

gsap.registerPlugin(ScrollTrigger);

interface Props { onPageChange: (p: string) => void; }

export default function CinematicHero({ onPageChange }: Props) {
  const { language, t } = useLanguage();
  const heroRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [count, setCount] = useState(0);

  // Counter animation
  useEffect(() => {
    let c = 0;
    const timer = setInterval(() => {
      c += 7;
      if (c >= 254) { setCount(254); clearInterval(timer); return; }
      setCount(c);
    }, 40);
    return () => clearInterval(timer);
  }, []);

  // GSAP parallax on scroll
  useEffect(() => {
    if (!bgRef.current || !heroRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        yPercent: 25,
        ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: true },
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const leaves = [
    { cls: "bottom-24 left-8 w-28 h-28", delay: 0, dur: 7 },
    { cls: "top-20 right-12 w-36 h-36", delay: 1, dur: 9 },
    { cls: "top-1/2 left-4 w-20 h-20", delay: 2, dur: 11 },
    { cls: "bottom-40 right-24 w-24 h-24", delay: 0.5, dur: 8 },
  ];

  return (
    <section ref={heroRef} className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Parallax BG */}
      <div ref={bgRef} className="absolute inset-[-10%] z-0">
        <img src={IMAGES.hero} alt="Maison THYNA" className="w-full h-full object-cover brightness-[0.72] contrast-105 scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/10 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/20 via-transparent to-transparent" />
        {/* Warm glow */}
        <motion.div className="absolute inset-0"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ background: "radial-gradient(ellipse at 20% 20%, rgba(255,220,150,0.2) 0%, transparent 60%)" }} />
      </div>

      {/* Dust particles */}
      {[...Array(6)].map((_, i) => (
        <div key={i} className="dust-particle" style={{
          width: Math.random() * 4 + 2,
          height: Math.random() * 4 + 2,
          left: `${10 + i * 15}%`,
          animationDuration: `${12 + i * 3}s`,
          animationDelay: `${i * 2}s`,
          opacity: 0.4,
        }} />
      ))}

      {/* Floating olive leaves */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {leaves.map((l, i) => (
          <motion.svg key={i} className={`absolute ${l.cls} text-olive/40`} viewBox="0 0 100 100"
            animate={{ y: [0, -18, 0], rotate: [0, i % 2 === 0 ? 10 : -10, 0] }}
            transition={{ duration: l.dur, repeat: Infinity, ease: "easeInOut", delay: l.delay }}>
            <path d={i % 2 === 0 ? "M10,90 C20,60 40,40 90,10 C60,40 40,60 10,90" : "M90,10 C80,40 60,60 10,90 C40,60 60,40 90,10"}
              fill="currentColor" />
          </motion.svg>
        ))}
      </div>

      {/* Hero content */}
      <div className="relative z-20 max-w-5xl px-6 text-center flex flex-col items-center">
        {/* Star badge */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
          className="flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full border border-gold/30 shadow-2xl backdrop-blur-md"
          style={{ background: "rgba(42,33,26,0.92)" }}>
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-gold text-gold" />
          ))}
          <span className="font-jost text-[10px] tracking-[0.25em] uppercase font-bold ml-1" style={{ color: "#F4EEE2" }}>
            {count}+ {language === "fr" ? "Voyageurs" : "Travelers"}
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h1 ref={titleRef} initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-title text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-espresso leading-[1.05] mb-6 drop-shadow-sm">
          {language === "fr" ? (
            <>Un Cookie. <br /><span className="italic font-light text-gold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Une Terre. Une Histoire.</span></>
          ) : (
            <>One Cookie. <br /><span className="italic font-light text-gold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>One Land. One Story.</span></>
          )}
        </motion.h1>

        {/* Subtitle */}
        <motion.p initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 1 }}
          className="font-serif text-xl sm:text-2xl italic text-espresso/85 max-w-2xl leading-relaxed mb-12">
          "{language === "fr" ? "Ce que l'industrie a oublié, notre terre s'en souvient encore." : "What industry forgot, our land still remembers."}"
        </motion.p>

        {/* CTA buttons */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 1 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button onClick={() => onPageChange("contact")}
            className="magnetic-btn ripple-container font-jost text-xs tracking-[0.2em] uppercase font-bold px-10 py-5 rounded-full text-cream flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{ background: "linear-gradient(135deg, #5C6B3D, #3F4A29)" }}>
            {language === "fr" ? "Réserver une Expérience" : "Reserve Experience"}
            <Calendar className="w-4 h-4 text-gold" />
          </button>
          <button onClick={() => onPageChange("story")}
            className="magnetic-btn font-jost text-xs tracking-[0.2em] uppercase font-semibold px-10 py-5 rounded-full border text-espresso flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-105 backdrop-blur-md"
            style={{ background: "rgba(244,238,226,0.85)", borderColor: "rgba(176,141,87,0.4)" }}>
            {language === "fr" ? "Découvrir Notre Histoire" : "Discover Our Story"}
            <ArrowRight className="w-4 h-4 text-terracotta" />
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-20">
        <span className="font-jost text-[8px] tracking-[0.45em] uppercase font-bold text-espresso/50">
          {language === "fr" ? "Défiler" : "Scroll"}
        </span>
        <div className="w-[1px] h-12 bg-gold/30 relative overflow-hidden">
          <motion.div className="absolute inset-x-0 top-0 h-1/2 rounded-full"
            style={{ background: "linear-gradient(180deg, #B08D57, #5C6B3D)" }}
            animate={{ y: ["0%", "200%"] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }} />
        </div>
      </div>
    </section>
  );
}
