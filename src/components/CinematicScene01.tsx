import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const INGREDIENTS = [
  { name: "Olive Oil", nameFr: "Huile d'Olive", emoji: "🫒", color: "#5C6B3D", x: "15%", y: "30%", size: 90 },
  { name: "Dates", nameFr: "Dattes", emoji: "🌴", color: "#8B4226", x: "75%", y: "20%", size: 80 },
  { name: "Carob", nameFr: "Caroube", emoji: "🌿", color: "#3F4A29", x: "20%", y: "70%", size: 75 },
  { name: "Sesame", nameFr: "Sésame", emoji: "✨", color: "#B08D57", x: "80%", y: "65%", size: 70 },
  { name: "Honey", nameFr: "Miel", emoji: "🍯", color: "#B08D57", x: "50%", y: "15%", size: 85 },
  { name: "Ancient Wheat", nameFr: "Blé Ancien", emoji: "🌾", color: "#8B4226", x: "10%", y: "50%", size: 72 },
  { name: "Wild Thyme", nameFr: "Thym Sauvage", emoji: "🌸", color: "#5C6B3D", x: "88%", y: "42%", size: 68 },
];

interface Props { language: string; }

export default function CinematicScene01({ language }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinWrapRef = useRef<HTMLDivElement>(null);
  const cookieRef = useRef<HTMLDivElement>(null);
  const ingredientRefs = useRef<(HTMLDivElement | null)[]>([]);
  const progressRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=300%",
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (progressRef.current) {
              gsap.set(progressRef.current, { width: `${self.progress * 100}%` });
            }
          },
        },
      });

      // Cookie zooms in
      tl.fromTo(cookieRef.current, { scale: 0.6, opacity: 0, rotateZ: -15 }, { scale: 1, opacity: 1, rotateZ: 0, duration: 0.5, ease: "power3.out" });

      // Cookie slowly rotates
      tl.to(cookieRef.current, { rotateZ: 360, duration: 1, ease: "none" }, ">");

      // Each ingredient flies in one by one
      ingredientRefs.current.forEach((el, i) => {
        if (!el) return;
        tl.fromTo(el,
          { x: "0%", y: "0%", scale: 0, opacity: 0 },
          { x: "0%", y: "0%", scale: 1, opacity: 1, duration: 0.3, ease: "back.out(2)" },
          `>${i === 0 ? 0 : 0.1}`
        );
      });

      // Cookie rotates back, label fades in
      tl.to(cookieRef.current, { scale: 1.1, duration: 0.3 }, ">");
      tl.fromTo(labelRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.3 }, "<");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative" style={{ height: "100vh" }}>
      <div ref={pinWrapRef} className="cinematic-scene"
        style={{ background: "linear-gradient(135deg, #2A211A 0%, #3F4A29 50%, #2A211A 100%)" }}>

        {/* Background radial glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(176,141,87,0.12) 0%, transparent 70%)" }} />
        </div>

        {/* Scene label */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 z-20 text-center">
          <span className="font-jost text-[9px] tracking-[0.4em] uppercase text-gold/60 font-bold">
            {language === "fr" ? "Scène Cinématique 01" : "Cinematic Scene 01"}
          </span>
          <h2 className="font-title text-3xl sm:text-4xl text-cream font-semibold mt-2"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            {language === "fr" ? "L'Anatomie d'un Chef-d'Œuvre" : "The Anatomy of a Masterpiece"}
          </h2>
        </div>

        {/* Progress bar */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold/10 z-30">
          <div ref={progressRef} className="h-full rounded-full transition-none"
            style={{ width: "0%", background: "linear-gradient(90deg, #B08D57, #5C6B3D)" }} />
        </div>

        {/* Central cookie */}
        <div ref={cookieRef} className="relative z-10 flex items-center justify-center"
          style={{ width: 240, height: 240, opacity: 0 }}>
          <div className="absolute inset-0 rounded-full animate-pulse"
            style={{ background: "radial-gradient(circle, rgba(176,141,87,0.2) 0%, transparent 70%)" }} />
          <img src="/src/assets/images/signature_cookie_1782746124910.jpg"
            alt="Signature Cookie" className="w-full h-full object-cover rounded-full shadow-2xl"
            style={{ border: "2px solid rgba(176,141,87,0.4)" }} />
        </div>

        {/* Floating ingredients */}
        {INGREDIENTS.map((ing, i) => (
          <div
            key={i}
            ref={(el) => { ingredientRefs.current[i] = el; }}
            className="absolute z-20 flex flex-col items-center gap-2 pointer-events-none"
            style={{ left: ing.x, top: ing.y, transform: "translate(-50%,-50%)", opacity: 0 }}>
            <div className="rounded-full flex items-center justify-center shadow-xl"
              style={{ width: ing.size, height: ing.size, background: `${ing.color}22`, border: `1px solid ${ing.color}44`, backdropFilter: "blur(8px)" }}>
              <span className="text-3xl">{ing.emoji}</span>
            </div>
            <span className="font-jost text-[8px] tracking-widest uppercase text-gold/70 font-bold whitespace-nowrap">
              {language === "fr" ? ing.nameFr : ing.name}
            </span>
          </div>
        ))}

        {/* Label that appears at end */}
        <div ref={labelRef} className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 text-center opacity-0">
          <div className="w-12 h-[1px] mx-auto mb-4" style={{ background: "#B08D57" }} />
          <p className="font-serif text-lg italic text-cream/80 max-w-md px-4"
            style={{ fontFamily: "'EB Garamond', serif" }}>
            {language === "fr"
              ? "« Chaque ingrédient porte en lui des siècles d'histoire de Djerba. »"
              : '"Each ingredient carries within it centuries of Djerba\'s living history."'}
          </p>
        </div>

        {/* Floating light rays */}
        {[...Array(4)].map((_, i) => (
          <motion.div key={i} className="absolute pointer-events-none"
            style={{
              top: `${20 + i * 20}%`, left: `${10 + i * 22}%`,
              width: 1, height: "30vh", transformOrigin: "top center",
              background: "linear-gradient(180deg, rgba(176,141,87,0.08), transparent)",
              transform: `rotate(${-20 + i * 15}deg)`,
            }}
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }} />
        ))}
      </div>
    </div>
  );
}
