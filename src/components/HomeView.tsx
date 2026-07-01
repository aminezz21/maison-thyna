import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  Calendar,
  Compass,
  Star,
  Instagram,
  Heart,
  MessageCircle,
  Sparkles,
  Droplets,
  Flame,
  Check,
  ChevronDown,
  Gift,
  Coffee,
  Users,
  Maximize2
} from "lucide-react";
import { IMAGES, EXPERIENCES, TESTIMONIALS } from "../data";
import { useLanguage } from "../LanguageContext";
import CinematicHero from "./CinematicHero";
import CinematicScene01 from "./CinematicScene01";
import CinematicScene02 from "./CinematicScene02";

interface HomeViewProps {
  onPageChange: (page: string) => void;
}

// 1. Custom 3D Tilt Card Component for the Three Pillars
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    // Maximum 12 degrees rotation
    const rotateX = -(y / (box.height / 2)) * 12;
    const rotateY = (x / (box.width / 2)) * 12;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1.02, 1.02, 1.02)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
        transition: isHovered ? "none" : "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={`relative transform-gpu transition-shadow duration-500 ${
        isHovered ? "shadow-[0_20px_40px_rgba(176,141,87,0.18)]" : "shadow-sm"
      } ${className}`}
    >
      {children}
      {/* Soft overlay flare highlight */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none rounded-3xl bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1)_0%,_transparent_80%)] mix-blend-overlay" />
      )}
    </div>
  );
}

export default function HomeView({ onPageChange }: HomeViewProps) {
  const { language, t } = useLanguage();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHoveredInteractive, setIsHoveredInteractive] = useState(false);
  const [showCursor, setShowCursor] = useState(false);

  // Counters
  const [travelerCount, setTravelerCount] = useState(0);

  // Active indices for interactive sections
  const [deconstructStep, setDeconstructStep] = useState(0);
  const [experienceStep, setExperienceStep] = useState(0);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  // Localized dictionaries for advanced custom cinematic copy
  const localCopy = {
    en: {
      travelerBadge: "250+ Cultured Travelers",
      deconstructTitle: "The Anatomy of a Masterpiece",
      deconstructSubtitle: "Hover or click to deconstruct the geometry of our signature cookie and trace its raw sacred layers.",
      deconstructSteps: [
        {
          name: "The Unified Secret",
          desc: "Before baking, our dough is pressed into hand-carved wooden stamps bearing ancient Phoenician geometry.",
          focus: "The final cookie, presenting a balanced harmony of all local ingredients."
        },
        {
          name: "Tunisian Extra Virgin Olive Oil",
          desc: "Sourced from centennial groves in Midoun. Gold-green, rich in wild thyme compounds.",
          focus: "Provides the moist, flaky density and subtle peppery finish in our heritage dough."
        },
        {
          name: "Deglet Nour Oasis Dates",
          desc: "Translucent finger of light dates from Tozeur. Sun-dried and ground into syrup.",
          focus: "Our exclusive, natural alternative to industrial refined white sugar."
        },
        {
          name: "Roasted Ancient Cereals",
          desc: "Raw durum wheat from Gightis paired with charcoal-roasted 'Zoumit' barley.",
          focus: "Delivers the robust structural crumb, earthy scent, and rich amber color."
        },
        {
          name: "Wild Thyme Honey & Herbs",
          desc: "Nectar harvested under the scorching sun, infused with hand-distilled orange blossoms.",
          focus: "Binds the elements together in a sticky, sweet spiritual seal."
        }
      ],
      interactiveTimelineTitle: "The Six Secrets of Traditional Craft",
      interactiveTimelineSubtitle: "Trace how raw earth turns into a timeless cultural ceremony, step by step.",
      timelineSteps: [
        {
          title: "Discover Raw Ingredients",
          desc: "Engage in a sensory mapping workshop, tasting Djerbian olive oils, oasis date pulps, and wild thyme honey in copper bowls.",
          icon: "raw"
        },
        {
          title: "Learn Ancient Traditions",
          desc: "Uncover the secret link between Carthage trade routes, Roman basalt grain mills, and local whitewashed Menzel ovens.",
          icon: "tradition"
        },
        {
          title: "Shape with Wooden Seals",
          desc: "Press the seasoned dough into solid olive wood stamps hand-carved with ancient Roman architectural motifs.",
          icon: "shape"
        },
        {
          title: "Bake in Terracotta Clay",
          desc: "Watch your pastries bake in our authentic clay kiln fueled with dry olive wood, giving a delicate wood-smoke scent.",
          icon: "bake"
        },
        {
          title: "The Tea Ceremony Pairing",
          desc: "Sip hot herbal infusions of wild rosemary and orange blossoms, pairing perfectly with the warm caramelized cookie notes.",
          icon: "taste"
        },
        {
          title: "Take Memories Home",
          desc: "Package your fresh, self-baked heritage collections in dynamic linen bags and numbered cedar boxes to share.",
          icon: "gift"
        }
      ],
      cinematicScene02Text: "What the modern industry forgot, the sand and the wind still remember. Every single cookie we stamp is a piece of living clay from the ruins of Meninx.",
      cinematicScene02Author: "— Master Baker, Maison THYNA",
      canetteTitle: "The Sparkling Elixir",
      canetteDesc1: "The drink attracts. The cookies create memories. The workshop transforms people.",
      canetteDesc2: "Sip our custom-brewed Orange Blossom & Sparkling Lemonade, made with fresh Mediterranean lemons, organic wild honey, and distilled floral water. Perfectly chilled to complement the roasted grain aromas.",
      faqTitle: "Inquiries & Sanctuary Details",
      faqSubtitle: "Frequently asked questions regarding masterclass bookings, private events, and our heritage philosophy.",
      faqs: [
        {
          q: "What makes Maison THYNA pastries unique?",
          a: "Unlike typical sweet baked goods, our pastries contain zero refined sugars, zero artificial colors, and zero palm oils. We use the 'Seven Sacred Ingredients' of Djerba—including extra virgin olive oil, oasis date paste, roasted wild barley, and wild thyme honey. Each recipe is mapped to ancient archeological footprints from Phoenician and Roman empires."
        },
        {
          q: "Can I participate in the masterclass without baking experience?",
          a: "Absolutely. Our experiences are designed for guests of all backgrounds—from families and culinary travelers to history buffs. Our master artisans guide you slowly through each step, explaining both the manual geometry and the historical context of each ingredient."
        },
        {
          q: "Where do your ancient grains come from?",
          a: "We partner directly with heritage organic farms in the southern plains of Gightis and the arid terraces of Matmata. These farmers cultivate ancestral strains of durum wheat and pearl barley that have resisted industrial hybridization, preservation, and mechanical processing."
        },
        {
          q: "Do you accommodate dietary restrictions and allergies?",
          a: "Yes. Our cookies are naturally dairy-free and sweetened exclusively with dates and honey. For gluten-sensitive guests, we offer tailored sessions focusing on our carob and date-paste compositions, though note that our traditional kitchen handles ancient wheat varieties."
        }
      ]
    },
    fr: {
      travelerBadge: "Plus de 250 Voyageurs Inspirés",
      deconstructTitle: "L'Anatomie d'un Chef-d'œuvre",
      deconstructSubtitle: "Survolez ou cliquez pour déconstruire la géométrie de notre biscuit signature et explorer ses couches sacrées.",
      deconstructSteps: [
        {
          name: "Le Secret Unifié",
          desc: "Avant la cuisson, notre pâte est pressée dans des moules en bois sculptés à la main, ornés de motifs géométriques phéniciens.",
          focus: "Le biscuit final, présentant une harmonie parfaite de tous les ingrédients locaux."
        },
        {
          name: "Huile d'Olive Vierge Extra de Djerba",
          desc: "Provenant de parcelles centenaires à Midoun. Une couleur vert-or intense, gorgée d'arômes de thym sauvage.",
          focus: "Apporte une texture fondante et une note légèrement poivrée en fin de bouche à notre pâte patrimoniale."
        },
        {
          name: "Dattes d'Oasis Deglet Nour",
          desc: "La datte translucide par excellence, cueillie à la main à Tozeur. Séchée au soleil et réduite en nectar.",
          focus: "Notre alternative exclusive et naturelle au sucre raffiné blanc industriel."
        },
        {
          name: "Céréales Anciennes Torréfiées",
          desc: "Blé dur sauvage de Gightis associé à l'orge perlé 'Zoumit' torréfié au feu de bois d'olivier.",
          focus: "Donne une miette robuste, un parfum de terre cuite et cette couleur ambrée caractéristique."
        },
        {
          name: "Miel de Thym Sauvage & Fleurs",
          desc: "Un élixir récolté sous un soleil de plomb, parfumé à l'eau de fleur d'oranger distillée sur place.",
          focus: "Rassemble et scelle tous les ingrédients dans un pacte gustatif doux et spirituel."
        }
      ],
      interactiveTimelineTitle: "Les Six Étapes du Savoir-Faire",
      interactiveTimelineSubtitle: "Découvrez comment la terre brute se transforme en une cérémonie culturelle intemporelle, pas à pas.",
      timelineSteps: [
        {
          title: "Découvrir les Ingrédients Bruts",
          desc: "Participez à un atelier sensoriel de cartographie, en goûtant les huiles d'olive de Djerba, la pulpe de datte et le miel dans des bols en cuivre.",
          icon: "raw"
        },
        {
          title: "Apprendre les Traditions",
          desc: "Explorez le lien secret entre les routes commerciales de Carthage, les moulins romains et les fours traditionnels des Menzels djerbiens.",
          icon: "tradition"
        },
        {
          title: "Façonner avec les Sceaux",
          desc: "Pressez la pâte dans d'authentiques moules en bois d'olivier sculptés de motifs géométriques romains et berbères.",
          icon: "shape"
        },
        {
          title: "Cuire au Four d'Argile",
          desc: "Observez la cuisson lente de vos biscuits dans notre four traditionnel en terre cuite alimenté au bois d'olivier sec.",
          icon: "bake"
        },
        {
          title: "La Cérémonie du Thé",
          desc: "Dégustez des infusions chaudes de romarin sauvage et de fleurs d'oranger qui complètent parfaitement les notes caramélisées.",
          icon: "taste"
        },
        {
          title: "Emporter des Souvenirs",
          desc: "Emballez vos créations chaudes dans des sacs en lin raffinés et des coffrets en cèdre numérotés à partager avec vos proches.",
          icon: "gift"
        }
      ],
      cinematicScene02Text: "Ce que l'industrie moderne a oublié, le sable et le vent s'en souviennent encore. Chaque biscuit que nous estampons est un morceau d'argile vivante issu des ruines de Meninx.",
      cinematicScene02Author: "— Maître Boulanger, Maison THYNA",
      canetteTitle: "L'Élixir Pétillant",
      canetteDesc1: "La boisson attire. Les biscuits créent des souvenirs. L'atelier transforme les âmes.",
      canetteDesc2: "Savourer notre Limonade Pétillante infusée à la Fleur d'Oranger, préparée avec des citrons frais de la Méditerranée, du miel sauvage bio et des distillations florales. Une fraîcheur exquise pour accompagner la chaleur des céréales.",
      faqTitle: "Questions Fréquentes & Sanctuaire",
      faqSubtitle: "Toutes les réponses concernant nos réservations, nos événements privés et notre philosophie historique.",
      faqs: [
        {
          q: "Qu'est-ce qui rend les pâtisseries de la Maison THYNA uniques ?",
          a: "Contrairement aux douceurs industrielles, nos biscuits contiennent zéro sucre raffiné, zéro colorant artificiel et zéro huile de palme. Nous utilisons exclusivement les 'Sept Ingrédients Sacrés' de Djerba : huile d'olive vierge, nectar de dattes, orge sauvage torréfié et miel de thym sauvage. Chaque recette est un hommage aux civilisations phénicienne et romaine."
        },
        {
          q: "Puis-je participer à la masterclass sans expérience en pâtisserie ?",
          a: "Absolument. Nos ateliers sont pensés pour tous les profils : familles, voyageurs curieux ou passionnés d'histoire. Nos artisans vous guident pas à pas dans le pétrissage et l'estampage traditionnel, tout en dévoilant l'histoire de chaque ingrédient."
        },
        {
          q: "D'où proviennent vos céréales anciennes ?",
          a: "Nous travaillons en partenariat direct avec des fermes bio de la plaine de Gightis et des terrasses de Matmata. Ces agriculteurs cultivent des variétés de blé dur et d'orge perlé inchangées depuis des millénaires, épargnées par l'hybridation moderne."
        },
        {
          q: "Proposez-vous des alternatives pour les régimes spéciaux ?",
          a: "Oui. Nos biscuits sont naturellement sans produits laitiers et édulcorés exclusivement avec des fruits et du miel. Pour les personnes intolérantes au gluten, nous proposons des ateliers axés sur nos compositions à base de caroube et de pâte de dattes."
        }
      ]
    }
  };

  const copy = localCopy[language as "en" | "fr"] || localCopy.en;

  // Track cursor position for custom smooth cursor on desktop
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
      // Show cursor only on screens with mouse pointer
      if (window.matchMedia("(pointer: fine)").matches) {
        setShowCursor(true);
      }
    };

    const handleMouseLeave = () => {
      setShowCursor(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Dynamic traveler incremental counter
    const counterTimer = setInterval(() => {
      setTravelerCount((prev) => {
        if (prev >= 254) {
          clearInterval(counterTimer);
          return 254;
        }
        return prev + 6;
      });
    }, 45);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearInterval(counterTimer);
    };
  }, []);

  // Instantly navigate and scroll to top
  const handleNav = (pageId: string) => {
    onPageChange(pageId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // SVG drawing logic for the experience timeline icons
  const renderTimelineIcon = (iconType: string, isActive: boolean) => {
    const strokeProps = {
      initial: { pathLength: 0 },
      animate: isActive ? { pathLength: 1 } : { pathLength: 0.15 },
      transition: { duration: 1.5, ease: "easeInOut" },
    };

    switch (iconType) {
      case "raw":
        return (
          <svg className="w-8 h-8 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <motion.path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" {...strokeProps} />
            <motion.path d="M12 6v12M6 12h12" {...strokeProps} />
            <motion.circle cx="12" cy="12" r="3" fill="currentColor" className="opacity-20" />
          </svg>
        );
      case "tradition":
        return (
          <svg className="w-8 h-8 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <motion.path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" {...strokeProps} />
            <motion.path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" {...strokeProps} />
            <motion.path d="M9 6h6M9 10h6M9 14h6" {...strokeProps} />
          </svg>
        );
      case "shape":
        return (
          <svg className="w-8 h-8 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <motion.rect x="3" y="3" width="18" height="18" rx="3" {...strokeProps} />
            <motion.path d="M9 12l2 2 4-4" {...strokeProps} />
            <motion.circle cx="12" cy="12" r="8" strokeDasharray="3 3" />
          </svg>
        );
      case "bake":
        return (
          <svg className="w-8 h-8 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <motion.path d="M12 2c1.38 0 2.5 1.1 2.5 2.47V10c0 .54-.45.98-1 .98H10.5c-.55 0-1-.44-1-.98V4.47C9.5 3.1 10.62 2 12 2z" {...strokeProps} />
            <motion.path d="M4.5 11c0-2.2 1.8-4 4-4h7c2.2 0 4 1.8 4 4v7.5c0 1.9-1.5 3.5-3.5 3.5h-8C5.5 22 4 20.4 4.5 18.5V11z" {...strokeProps} />
            <motion.path d="M8 15h8M8 18h8" {...strokeProps} />
          </svg>
        );
      case "taste":
        return (
          <svg className="w-8 h-8 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <motion.path d="M18 8h1a4 4 0 0 1 0 8h-1" {...strokeProps} />
            <motion.path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" {...strokeProps} />
            <motion.path d="M6 2v3M10 2v3M14 2v3" {...strokeProps} />
          </svg>
        );
      case "gift":
        return (
          <svg className="w-8 h-8 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <motion.rect x="3" y="9" width="18" height="12" rx="2" {...strokeProps} />
            <motion.path d="M12 22V9M3 9h18" {...strokeProps} />
            <motion.path d="M12 9c0-3 3-5 5-2s-3 5-5 2z" {...strokeProps} />
            <motion.path d="M12 9c0-3-3-5-5-2s3 5 5 2z" {...strokeProps} />
          </svg>
        );
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  // Mock Instagram Photos with localized captions
  const INSTA_POSTS = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
      likes: "1.2k",
      comments: 48,
      enCaption: "Sifting raw durum wheat in our sundrenched courtyard. Preserving tools from a bygone era.",
      frCaption: "Tamisage manuel du blé dur dans notre cour ensoleillée. Préserver les outils d'une époque révolue."
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=400&q=80",
      likes: "942",
      comments: 31,
      enCaption: "Heirloom olive groves. Some of our trees have witnessed ancient empires rise and fall.",
      frCaption: "Oliveraies centenaires. Certains de nos arbres ont vu naître et s'effondrer des empires antiques."
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1596512391000-880be86105a2?auto=format&fit=crop&w=400&q=80",
      likes: "1.8k",
      comments: 92,
      enCaption: "Amber date paste: sweetening our recipes without a single granule of refined sugar.",
      frCaption: "Pâte de datte ambrée : adoucir nos recettes sans un seul gramme de sucre raffiné."
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=400&q=80",
      likes: "1.5k",
      comments: 54,
      enCaption: "A traditional sunset tea ceremony beneath the white plaster domes.",
      frCaption: "Cérémonie traditionnelle du thé au coucher du soleil sous les voûtes blanchies à la chaux."
    }
  ];

  // Localized Testimonials helper
  const getTestimonialQuote = (id: string, enQuote: string) => {
    if (language === "fr") {
      if (id === "1") return "La Maison THYNA n'est pas une pâtisserie ; c'est un temple sensoriel sacré. Façonner nos biscuits à l'aide de tampons en bois séculaires, au parfum d'orge torréfiée et de fleurs d'oranger, m'a semblé être un voyage dans le temps.";
      if (id === "2") return "Nos résidents à la villa ont été totalement envoûtés par l'atelier sur place. L'attention portée aux détails historiques, des moulins à grains romains aux huiles d'olive carthaginoises, est sans égale. Une performance artistique exquise.";
      if (id === "3") return "Un voyage de transmission extraordinaire. Voir comment ils cultivent le blé et torréfient le sésame à Djerba, et goûter la saveur caramélisée de la caroube nous a fait réaliser ce que l'industrie a vraiment oublié.";
    }
    return enQuote;
  };

  const getTestimonialRole = (id: string, enRole: string, enLoc: string) => {
    if (language === "fr") {
      if (id === "1") return "Journaliste de voyage, Condé Nast Traveler • Paris, France";
      if (id === "2") return "Direction d'Hôtel de Luxe • Erriadh, Djerba";
      if (id === "3") return "Historien de la Gastronomie • Tunis, Tunisie";
    }
    return `${enRole} • ${enLoc}`;
  };

  return (
    <div className="w-full select-none overflow-x-hidden">
      {/* AWWWARDS-LEVEL DESKTOP CUSTOM CURSOR */}
      {showCursor && (
        <motion.div
          className="pointer-events-none fixed top-0 left-0 w-10 h-10 rounded-full border border-gold/40 z-50 -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
          animate={{
            x: cursorPos.x,
            y: cursorPos.y,
            scale: isHoveredInteractive ? 1.5 : 1,
            backgroundColor: isHoveredInteractive ? "rgba(176,141,87,0.15)" : "rgba(0,0,0,0)",
          }}
          transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.6 }}
        />
      )}

      {/* 1. CINEMATIC FULLSCREEN HERO SECTION */}
      <CinematicHero onPageChange={handleNav} />

      {/* 2. CINEMATIC SCENE 01: THE ANATOMY OF A MASTERPIECE (DECONSTRUCTION THEATRE) */}
      <CinematicScene01 language={language} />

      {/* 3. THE THREE BRAND PILLARS WITH 3D TILT EFFECT */}
      <section className="py-24 bg-cream relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16">
          <span className="font-jost text-xs tracking-[0.25em] uppercase text-gold font-bold block mb-2">
            {t.home.pillarsTitle}
          </span>
          <h3 className="font-title text-4xl md:text-5xl text-espresso font-bold">
            {t.home.pillarsSubtitle}
          </h3>
          <div className="w-16 h-[1px] bg-terracotta mx-auto my-5" />
          <p className="font-serif text-base text-espresso/70 max-w-xl mx-auto">
            {t.home.pillarsDesc}
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1: Universel */}
          <TiltCard className="glass-card p-10 rounded-3xl flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-olive/10 flex items-center justify-center text-olive mb-6 border border-gold/10">
              <Compass className="w-6 h-6 text-gold animate-[spin_40s_linear_infinite]" />
            </div>
            <h4 className="font-title text-2xl text-espresso font-semibold mb-3">{t.home.pillar1Title}</h4>
            <div className="w-8 h-[1px] bg-gold/40 mb-4" />
            <p className="font-serif text-sm text-espresso/80 leading-relaxed">
              {t.home.pillar1Desc}
            </p>
          </TiltCard>

          {/* Pillar 2: Patrimoine */}
          <TiltCard className="glass-card p-10 rounded-3xl flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-olive/10 flex items-center justify-center text-olive mb-6 border border-gold/10">
              <span className="font-logo text-3xl text-gold font-bold">Th</span>
            </div>
            <h4 className="font-title text-2xl text-espresso font-semibold mb-3">{t.home.pillar3Title}</h4>
            <div className="w-8 h-[1px] bg-gold/40 mb-4" />
            <p className="font-serif text-sm text-espresso/80 leading-relaxed">
              {t.home.pillar3Desc}
            </p>
          </TiltCard>

          {/* Pillar 3: Transmission */}
          <TiltCard className="glass-card p-10 rounded-3xl flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-olive/10 flex items-center justify-center text-olive mb-6 border border-gold/10">
              <Gift className="w-5 h-5 text-gold" />
            </div>
            <h4 className="font-title text-2xl text-espresso font-semibold mb-3">{t.home.pillar2Title}</h4>
            <div className="w-8 h-[1px] bg-gold/40 mb-4" />
            <p className="font-serif text-sm text-espresso/80 leading-relaxed">
              {t.home.pillar2Desc}
            </p>
          </TiltCard>
        </div>
      </section>

      {/* 4. THE TRADITIONAL EXPERIENCE INTERACTIVE TIMELINE (STEPS 1-6) */}
      <section className="py-24 bg-secondary-cream/20 border-t border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-jost text-xs tracking-[0.25em] uppercase text-gold font-bold block mb-2">
              {language === "en" ? "Interactive Stepper" : "L'Atelier en Étapes"}
            </span>
            <h3 className="font-title text-4xl md:text-5xl text-espresso font-bold">
              {copy.interactiveTimelineTitle}
            </h3>
            <div className="w-12 h-[1px] bg-terracotta mx-auto my-5" />
            <p className="font-serif text-base text-espresso/70">
              {copy.interactiveTimelineSubtitle}
            </p>
          </div>

          {/* Core Grid: Navigation points on left, active illustration text on right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column (Lg: col-span-5) - The Interactive Stepper List */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {copy.timelineSteps.map((step, idx) => {
                const isActive = experienceStep === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setExperienceStep(idx)}
                    onMouseEnter={() => {
                      setIsHoveredInteractive(true);
                      setExperienceStep(idx);
                    }}
                    onMouseLeave={() => setIsHoveredInteractive(false)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 focus:outline-none cursor-pointer flex items-center gap-4 ${
                      isActive
                        ? "bg-white border-gold text-espresso shadow-md"
                        : "bg-transparent border-transparent text-espresso/60 hover:text-espresso"
                    }`}
                  >
                    <span className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-jost text-xs font-bold transition-colors ${
                      isActive ? "bg-olive text-cream" : "bg-gold/15 text-gold"
                    }`}>
                      {idx + 1}
                    </span>
                    <div>
                      <h4 className="font-title text-lg font-semibold">{step.title}</h4>
                      <span className="font-jost text-[8px] tracking-wider uppercase text-gold font-bold">
                        {idx === 0 ? "Sensory" : idx === 1 ? "Historical" : idx === 2 ? "Manual" : idx === 3 ? "Thermal" : idx === 4 ? "Pairing" : "Unboxing"}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column (Lg: col-span-7) - The Immersive Stage Canvas */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={experienceStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.6 }}
                  className="glass-card p-8 sm:p-10 rounded-3xl border border-gold/25 flex flex-col gap-6 relative overflow-hidden"
                >
                  {/* Floating abstract decorative badge */}
                  <div className="absolute top-6 right-6 opacity-10">
                    <span className="font-logo text-9xl text-gold">Th</span>
                  </div>

                  {/* Icon & title step */}
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-cream flex items-center justify-center shadow-inner">
                      {renderTimelineIcon(copy.timelineSteps[experienceStep].icon, true)}
                    </div>
                    <div>
                      <span className="font-jost text-[10px] tracking-widest text-gold uppercase font-bold">
                        {language === "en" ? `CHAPTER 0${experienceStep + 1}` : `CHAPITRE 0${experienceStep + 1}`}
                      </span>
                      <h4 className="font-title text-2xl text-espresso font-semibold">
                        {copy.timelineSteps[experienceStep].title}
                      </h4>
                    </div>
                  </div>

                  {/* Step Description */}
                  <p className="font-serif text-base text-espresso/80 leading-relaxed relative z-10">
                    {copy.timelineSteps[experienceStep].desc}
                  </p>

                  <div className="w-full h-[1px] bg-gold/20 my-2" />

                  {/* Showcase dynamic badge list */}
                  <div className="grid grid-cols-2 gap-4 text-xs font-serif text-espresso/70 relative z-10">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-olive shrink-0" />
                      <span>{language === "en" ? "All raw organic seeds" : "Graines bio brutes"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-olive shrink-0" />
                      <span>{language === "en" ? "Historic tools supplied" : "Outils historiques fournis"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-olive shrink-0" />
                      <span>{language === "en" ? "Limited to 8 participants" : "Maximum 8 personnes"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-olive shrink-0" />
                      <span>{language === "en" ? "Unforgettable tasting" : "Dégustation inoubliable"}</span>
                    </div>
                  </div>

                  {/* Immediate registration CTA */}
                  <button
                    onClick={() => handleNav("contact")}
                    onMouseEnter={() => setIsHoveredInteractive(true)}
                    onMouseLeave={() => setIsHoveredInteractive(false)}
                    className="mt-4 self-start font-jost text-[10px] tracking-widest uppercase font-bold px-6 py-3 bg-espresso text-cream hover:bg-gold hover:text-espresso rounded-xl transition-all duration-300 shadow-sm flex items-center gap-2"
                  >
                    {t.home.expCardCta}
                    <ArrowRight className="w-4 h-4 text-gold" />
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>

      {/* 5. CINEMATIC SCENE 02: THE CALL OF THE ANCESTORS (Locking atmospheric narrative block) */}
      <CinematicScene02 language={language} />

      {/* 6. CANETTE MEDIA: THE PREMIUM SODA CAN SPARKLING ELIXIR */}
      <section className="py-24 bg-dark-olive text-cream relative overflow-hidden">
        {/* Background particle grid */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ECE3D2_1px,_transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          
          {/* Left Text Block (Lg: col-span-6) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="font-jost text-xs tracking-[0.3em] uppercase text-gold font-bold block">
              {language === "en" ? "Bespoke Refreshments" : "Rafraîchissement sur Mesure"}
            </span>
            <h3 className="font-title text-4xl md:text-5xl text-white font-bold leading-tight">
              {copy.canetteTitle}
            </h3>
            <p className="font-serif text-lg sm:text-xl italic text-gold font-medium">
              "{copy.canetteDesc1}"
            </p>
            <p className="font-serif text-base text-cream/80 leading-relaxed">
              {copy.canetteDesc2}
            </p>
            <div className="w-16 h-[1px] bg-gold/50 my-2" />
            <button
              onClick={() => handleNav("contact")}
              onMouseEnter={() => setIsHoveredInteractive(true)}
              onMouseLeave={() => setIsHoveredInteractive(false)}
              className="self-start font-jost text-xs tracking-[0.2em] uppercase font-bold px-8 py-4 bg-gold hover:bg-white text-espresso rounded-full transition-all duration-300"
            >
              {t.home.summerCta}
            </button>
          </div>

          {/* Right Stage: Interactive rotating beverage can in metallic CSS (Lg: col-span-6) */}
          <div className="lg:col-span-6 flex items-center justify-center relative">
            
            {/* Ambient rising bubble columns */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
              <div className="absolute w-2 h-2 rounded-full bg-gold/40 bottom-10 left-1/4 animate-ping" style={{ animationDuration: "1.5s" }} />
              <div className="absolute w-3 h-3 rounded-full bg-cream/30 bottom-24 left-1/2 animate-ping" style={{ animationDuration: "2.2s" }} />
              <div className="absolute w-1.5 h-1.5 rounded-full bg-gold/50 bottom-5 right-1/4 animate-ping" style={{ animationDuration: "1.8s" }} />
            </div>

            {/* Custom 3D styled metallic Soda Can container */}
            <motion.div
              className="relative w-52 h-88 rounded-[3.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] cursor-grab flex flex-col justify-between p-8 overflow-hidden bg-gradient-to-r from-[#2F3A1D] via-[#4F5D33] to-[#1F2A0E] border border-gold/30"
              whileHover={{ rotate: 12, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              onMouseEnter={() => setIsHoveredInteractive(true)}
              onMouseLeave={() => setIsHoveredInteractive(false)}
            >
              {/* Vertical cylindrical highlight sheen */}
              <div className="absolute inset-y-0 left-12 w-6 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
              
              {/* Top and Bottom Silver Rim Caps */}
              <div className="absolute top-0 inset-x-0 h-4 bg-gradient-to-r from-neutral-400 via-neutral-100 to-neutral-500 rounded-t-[3.5rem]" />
              <div className="absolute bottom-0 inset-x-0 h-4 bg-gradient-to-r from-neutral-500 via-neutral-100 to-neutral-400 rounded-b-[3.5rem]" />

              {/* Water Droplet overlays simulating high-fidelity chilled condensation */}
              <div className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-white/20 blur-[0.5px]" />
              <div className="absolute top-1/2 right-12 w-1.5 h-3 rounded-full bg-white/15 blur-[0.5px]" />
              <div className="absolute bottom-1/4 left-16 w-3 h-1.5 rounded-full bg-white/10 blur-[0.5px]" />

              {/* Can Label Content */}
              <div className="flex flex-col items-center justify-between h-full py-4 text-center select-none">
                <div>
                  <span className="font-jost text-[8px] tracking-[0.4em] uppercase text-gold font-bold">Maison THYNA</span>
                  <div className="h-[0.5px] bg-gold/40 w-8 mx-auto my-1" />
                </div>

                {/* Central Emblem Illustration inside can label */}
                <div className="flex flex-col items-center justify-center my-4">
                  <div className="w-16 h-16 rounded-full border border-dashed border-gold/30 flex items-center justify-center mb-2">
                    <span className="font-logo text-4xl text-gold pt-2">Th</span>
                  </div>
                  <h4 className="font-title text-xl text-white font-semibold tracking-wide">ELIXIR SENSORIEL</h4>
                  <p className="font-serif text-[8px] text-cream/60 tracking-widest uppercase mt-1">Fleur d'Oranger</p>
                </div>

                <div className="text-center">
                  <span className="font-jost text-[7px] tracking-[0.3em] text-gold uppercase block">Djerba Heritage</span>
                  <span className="font-mono text-[7px] text-cream/45 block mt-0.5">330ML • ALC 0.0%</span>
                </div>
              </div>
            </motion.div>

            {/* Sliced Lemons & Mint Leaves floating in background around the can */}
            <div className="absolute top-1/3 -left-4 w-12 h-12 bg-yellow-400/20 backdrop-blur-sm rounded-full border border-yellow-300/40 pointer-events-none flex items-center justify-center select-none animate-bounce">
              <span className="text-lg">🍋</span>
            </div>
            <div className="absolute bottom-12 -right-2 w-10 h-10 bg-emerald-500/10 backdrop-blur-sm rounded-full border border-emerald-300/30 pointer-events-none flex items-center justify-center select-none animate-pulse">
              <span className="text-base">🍃</span>
            </div>

          </div>

        </div>
      </section>

      {/* 7. FEATURED EXPERIENCES ATELIER */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-4">
          <div>
            <span className="font-jost text-xs tracking-[0.2em] uppercase text-gold font-bold">{t.home.expTitle}</span>
            <h3 className="font-title text-4xl md:text-5xl text-espresso font-bold mt-2">{t.home.expSubtitle}</h3>
          </div>
          <button
            onClick={() => handleNav("experiences")}
            onMouseEnter={() => setIsHoveredInteractive(true)}
            onMouseLeave={() => setIsHoveredInteractive(false)}
            className="group flex items-center gap-2 font-jost text-xs tracking-[0.2em] uppercase font-bold text-terracotta hover:text-espresso transition-colors focus:outline-none cursor-pointer"
          >
            {t.home.expCtaAll}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Highlighted two main experiences cards */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {EXPERIENCES.slice(0, 2).map((exp) => {
            const localExp = t.experiences.items[exp.id] || exp;
            return (
              <div key={exp.id} className="group bg-secondary-cream/30 border border-gold/15 rounded-3xl overflow-hidden flex flex-col md:flex-row h-full hover:shadow-xl transition-all duration-300">
                <div className="w-full md:w-2/5 h-64 md:h-auto overflow-hidden relative">
                  <img
                    src={exp.image}
                    alt={localExp.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-4 left-4 bg-espresso/90 text-gold font-jost text-[10px] tracking-wider uppercase px-3 py-1 rounded-full border border-gold/20">
                    {localExp.duration}
                  </span>
                </div>
                <div className="w-full md:w-3/5 p-8 flex flex-col justify-between">
                  <div>
                    <h4 className="font-title text-2xl text-espresso font-semibold mb-2 group-hover:text-gold transition-colors">{localExp.name}</h4>
                    <span className="font-jost text-[10px] tracking-widest text-olive uppercase font-medium block mb-4">{localExp.price}</span>
                    <p className="font-serif text-sm text-espresso/80 leading-relaxed mb-6">{localExp.description}</p>
                  </div>
                  <button
                    onClick={() => handleNav("contact")}
                    onMouseEnter={() => setIsHoveredInteractive(true)}
                    onMouseLeave={() => setIsHoveredInteractive(false)}
                    className="w-full md:w-auto self-start font-jost text-[10px] tracking-widest uppercase font-bold px-6 py-3 bg-espresso text-cream hover:bg-gold hover:text-espresso rounded-xl transition-all duration-300 cursor-pointer"
                  >
                    {t.home.expCardCta}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 8. LUXURY MASONRY GALLERY */}
      <section className="py-24 bg-secondary-cream/40 border-t border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16">
          <span className="font-jost text-xs tracking-[0.2em] uppercase text-gold font-bold">
            {language === "en" ? "Museum Vault" : "Le Cabinet de Curiosités"}
          </span>
          <h3 className="font-title text-4xl md:text-5xl text-espresso mt-2 font-bold">
            {language === "en" ? "Tales Told in Texture" : "Récits de Matières et de Lumières"}
          </h3>
          <p className="font-serif text-base text-espresso/70 max-w-xl mx-auto mt-4">
            {language === "en"
              ? "A visual pilgrimage across the ingredients, the stone-carved tools, and the whitewashed sanctuary."
              : "Un pèlerinage visuel à travers les matières premières, les moules sculptés et l'architecture blanchie."}
          </p>
        </div>

        {/* High-end staggered layout */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col gap-6">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-sm group">
              <img
                src={IMAGES.signatureCookie}
                alt="Stamped cookie close-up"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="font-serif text-xs text-cream italic">Phoenician Geometry</span>
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-sm group">
              <img
                src="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=400&q=80"
                alt="Harvesting olive groves"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="font-serif text-xs text-cream italic">Centenary Olive Groves</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:translate-y-8">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-sm group">
              <img
                src={IMAGES.localIngredients}
                alt="Ancient grains bowl"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="font-serif text-xs text-cream italic">The Raw Grains</span>
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-sm group">
              <img
                src={IMAGES.artisanWorkshop}
                alt="Master hands stamping"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="font-serif text-xs text-cream italic">Hands of Transmission</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-sm group">
              <img
                src="https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=400&q=80"
                alt="Courtyard under white domes"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="font-serif text-xs text-cream italic">Sanctuary Courtyard</span>
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-sm group">
              <img
                src="https://images.unsplash.com/photo-1596512391000-880be86105a2?auto=format&fit=crop&w=400&q=80"
                alt="Sweet oasis Deglet Nour Dates"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="font-serif text-xs text-cream italic">Finger of Light Dates</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS VOICES SLIDER */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="font-jost text-xs tracking-[0.2em] uppercase text-gold font-bold">{t.home.voicesBadge}</span>
          <h3 className="font-title text-4xl text-espresso mt-2 mb-12 font-bold">{t.home.voicesTitle}</h3>

          {/* Testimonial card */}
          <div className="relative min-h-[220px] flex flex-col items-center justify-center">
            <span className="text-6xl font-serif text-gold/30 absolute top-[-30px] select-none">“</span>
            <p className="font-serif text-lg sm:text-2xl italic text-espresso leading-relaxed max-w-2xl mb-8 relative z-10">
              {getTestimonialQuote(TESTIMONIALS[activeTestimonial].id, TESTIMONIALS[activeTestimonial].quote)}
            </p>
            <div>
              <span className="font-title text-lg text-espresso font-bold block">
                {TESTIMONIALS[activeTestimonial].author}
              </span>
              <span className="font-jost text-[10px] tracking-widest text-olive uppercase font-medium">
                {getTestimonialRole(TESTIMONIALS[activeTestimonial].id, TESTIMONIALS[activeTestimonial].role, TESTIMONIALS[activeTestimonial].location)}
              </span>
            </div>
          </div>

          {/* Dots controller */}
          <div className="flex justify-center gap-3 mt-10">
            {TESTIMONIALS.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => setActiveTestimonial(idx)}
                onMouseEnter={() => {
                  setIsHoveredInteractive(true);
                  setActiveTestimonial(idx);
                }}
                onMouseLeave={() => setIsHoveredInteractive(false)}
                className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
                  activeTestimonial === idx ? "bg-terracotta w-6" : "bg-gold/40 hover:bg-gold"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 10. ANIMATED FAQ ACCORDION SECTION */}
      <section className="py-24 bg-secondary-cream/30 border-t border-b border-gold/10">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="font-jost text-xs tracking-[0.25em] uppercase text-gold font-bold block mb-2">
              {language === "en" ? "Sanctuary Details" : "Détails du Sanctuaire"}
            </span>
            <h3 className="font-title text-4xl text-espresso font-bold">
              {copy.faqTitle}
            </h3>
            <div className="w-12 h-[1px] bg-terracotta mx-auto my-5" />
            <p className="font-serif text-base text-espresso/70">
              {copy.faqSubtitle}
            </p>
          </div>

          {/* Accordion list */}
          <div className="flex flex-col gap-4">
            {copy.faqs.map((faq, idx) => {
              const isOpen = faqOpen === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-gold/15 overflow-hidden bg-cream/40 transition-shadow duration-300 hover:shadow-md"
                >
                  <button
                    onClick={() => {
                      setFaqOpen(isOpen ? null : idx);
                    }}
                    onMouseEnter={() => setIsHoveredInteractive(true)}
                    onMouseLeave={() => setIsHoveredInteractive(false)}
                    className="w-full text-left p-6 flex justify-between items-center focus:outline-none cursor-pointer"
                  >
                    <span className="font-title text-lg md:text-xl text-espresso font-semibold">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-gold shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="p-6 pt-0 border-t border-gold/5 font-serif text-sm leading-relaxed text-espresso/75">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. RECOGNIZED PARTNERS TEASER */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
          <span className="font-jost text-[10px] tracking-[0.3em] uppercase text-gold font-bold block mb-8">
            {t.home.partnersBadge}
          </span>
          {/* Logo cloud */}
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 opacity-65 grayscale hover:grayscale-0 transition-all duration-500 mb-10">
            <span className="font-title text-xl tracking-[0.15em] text-espresso uppercase font-semibold">Hasdrubal Prestige</span>
            <span className="font-serif text-xl italic tracking-wider text-espresso">The Residence Tunis</span>
            <span className="font-title text-xl tracking-[0.2em] text-espresso uppercase font-bold">Dar Selim</span>
            <span className="font-logo text-3xl text-espresso">Villa Carthage</span>
          </div>
          <button
            onClick={() => handleNav("partners")}
            onMouseEnter={() => setIsHoveredInteractive(true)}
            onMouseLeave={() => setIsHoveredInteractive(false)}
            className="group font-jost text-xs tracking-[0.2em] uppercase font-bold px-8 py-4 border border-gold/45 text-espresso hover:bg-espresso hover:text-cream rounded-full transition-all duration-300 cursor-pointer flex items-center gap-2"
          >
            {language === "en" ? "Become a Partner" : "Devenir Partenaire"}
            <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* 12. INSTAGRAM STORY GALLERY */}
      <section className="py-24 bg-secondary-cream/30 border-t border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-12">
          <Instagram className="w-8 h-8 text-gold mx-auto mb-3 animate-[spin_30s_linear_infinite]" />
          <span className="font-jost text-xs tracking-[0.2em] uppercase text-gold font-bold">{t.home.instaBadge}</span>
          <h3 className="font-title text-3xl md:text-4xl text-espresso mt-1 font-bold">{t.home.instaTitle}</h3>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTA_POSTS.map((post) => (
            <div key={post.id} className="relative aspect-square group overflow-hidden rounded-2xl shadow-sm border border-gold/10 bg-secondary-cream/30">
              <img
                src={post.url}
                alt={language === "en" ? post.enCaption : post.frCaption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              {/* Overlay with interaction counters */}
              <div className="absolute inset-0 bg-espresso/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-cream">
                <div className="flex justify-between items-center text-xs font-jost tracking-wider">
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4 text-gold fill-gold" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4 text-gold" />
                    <span>{post.comments}</span>
                  </div>
                </div>
                <p className="font-serif text-xs leading-normal italic text-cream/90">
                  {language === "en" ? post.enCaption : post.frCaption}
                </p>
                <span className="font-jost text-[9px] tracking-[0.2em] uppercase text-gold">
                  {language === "en" ? "View Post" : "Voir la Publication"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
