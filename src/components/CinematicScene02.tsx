import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props { language: string; }

export default function CinematicScene02({ language }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const quote = language === "fr"
    ? "Ce que l'industrie moderne a oublié, le sable et le vent s'en souviennent encore. Chaque biscuit que nous estampons est un morceau d'argile vivante issu des ruines de Meninx."
    : "What the modern industry forgot, the sand and the wind still remember. Every single cookie we stamp is a piece of living clay from the ruins of Meninx.";

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=250%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (progressRef.current) {
              gsap.set(progressRef.current, { width: `${self.progress * 100}%` });
            }
          },
        },
      });

      // Background slowly shifts
      tl.fromTo(bgRef.current, { scale: 1.15, filter: "brightness(0.3)" }, { scale: 1.05, filter: "brightness(0.5)", duration: 0.5 });

      // Overlay darkens
      tl.fromTo(overlayRef.current, { opacity: 0.8 }, { opacity: 0.5, duration: 0.3 }, "<");

      // Quote fades in word by word effect (we just fade the container)
      tl.fromTo(quoteRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, ">");

      // Long pause to let viewer read
      tl.to({}, { duration: 0.8 });

      // Everything fades out
      tl.to([quoteRef.current, bgRef.current], { opacity: 0, duration: 0.3 }, ">");

    }, sectionRef);
    return () => ctx.revert();
  }, [language]);

  return (
    <div ref={sectionRef} className="relative" style={{ height: "100vh" }}>
      <div className="cinematic-scene overflow-hidden">
        {/* BG Image */}
        <div ref={bgRef} className="absolute inset-0 z-0"
          style={{ transform: "scale(1.15)", filter: "brightness(0.3)" }}>
          <img src="/images/carrot_cake.png"
            alt="Maison THYNA traditional organic carrot cake"
            className="w-full h-full object-cover" />
        </div>

        {/* Overlay */}
        <div ref={overlayRef} className="absolute inset-0 z-10"
          style={{ background: "linear-gradient(to top, #2A211A 0%, rgba(42,33,26,0.7) 40%, rgba(42,33,26,0.3) 100%)" }} />

        {/* Shifting warm glow */}
        <motion.div className="absolute inset-0 z-10 pointer-events-none"
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{ background: "radial-gradient(ellipse at 30% 70%, rgba(139,66,38,0.15) 0%, transparent 60%)" }} />

        {/* Floating leaves */}
        {[{ x: "10%", y: "30%" }, { x: "85%", y: "60%" }, { x: "55%", y: "15%" }].map((pos, i) => (
          <motion.svg key={i} className="absolute z-10 text-olive/25 pointer-events-none"
            style={{ left: pos.x, top: pos.y, width: 60 + i * 20, height: 60 + i * 20 }}
            viewBox="0 0 100 100"
            animate={{ y: [0, -20, 0], rotate: [0, i % 2 === 0 ? 12 : -12, 0] }}
            transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut", delay: i }}>
            <path d="M10,90 C20,60 40,40 90,10 C60,40 40,60 10,90" fill="currentColor" />
          </motion.svg>
        ))}

        {/* Progress bar */}
        <div className="absolute top-0 left-0 right-0 h-[2px] z-30" style={{ background: "rgba(176,141,87,0.1)" }}>
          <div ref={progressRef} className="h-full"
            style={{ width: "0%", background: "linear-gradient(90deg, #B08D57, #8B4226)" }} />
        </div>

        {/* Quote content */}
        <div ref={quoteRef} className="relative z-20 max-w-3xl mx-auto px-6 text-center flex flex-col items-center opacity-0">
          <span className="font-jost text-[9px] tracking-[0.45em] uppercase font-bold mb-6"
            style={{ color: "#B08D57" }}>
            {language === "fr" ? "Lettres de Djerba" : "Letters from Djerba"}
          </span>
          <div className="w-16 h-[1.5px] mb-8" style={{ background: "#8B4226" }} />

          <span className="font-serif text-5xl mb-4 select-none" style={{ color: "rgba(176,141,87,0.25)", fontFamily: "Georgia, serif", lineHeight: 1 }}>"</span>

          <p className="font-serif text-xl sm:text-3xl italic leading-relaxed px-4 mb-8"
            style={{ color: "#F4EEE2", fontFamily: "'EB Garamond', serif", textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}>
            {quote}
          </p>

          <span className="font-jost text-[10px] tracking-[0.3em] uppercase font-bold"
            style={{ color: "#B08D57" }}>
            — {language === "fr" ? "Maître Boulanger, Maison THYNA" : "Master Baker, Maison THYNA"}
          </span>
        </div>
      </div>
    </div>
  );
}
