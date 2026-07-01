import { Ingredient, Experience, Product, Testimonial } from "./types";

// Dynamic image imports or absolute paths
export const IMAGES = {
  hero: "/src/assets/images/maison_thyna_hero_1782746110527.jpg",
  signatureCookie: "/src/assets/images/signature_cookie_1782746124910.jpg",
  artisanWorkshop: "/src/assets/images/artisan_workshop_1782746137737.jpg",
  localIngredients: "/src/assets/images/local_ingredients_1782746150544.jpg",
};

export const INGREDIENTS: Ingredient[] = [
  {
    id: "wheat",
    name: "Ancient Wheat",
    origin: "Plains of Gightis",
    story: "Milled slowly using volcanic basalt stones, this ancient durum wheat provides the earthy backbone of our pastries, carrying the structural strength of Roman-era grain storage.",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80",
    x: 42,
    y: 78,
    aroma: "Toasted straw, warm sun-baked clay, golden fields",
    heritageText: "The Roman Empire relied on Tunisian grain as its primary breadbasket, leaving behind massive stone granaries that still echo with the whispers of ancient harvests.",
  },
  {
    id: "barley",
    name: "Roasted Barley",
    origin: "Arid Terraces of Matmata",
    story: "Roasted in ancient clay drums over olive wood fires, our pearl barley is crushed into 'Zoumit', a dark flour with a signature nutty smokiness that has fueled Saharan nomads for millennia.",
    image: "https://images.unsplash.com/photo-1534430480872-3498386e7a0c?auto=format&fit=crop&w=800&q=80",
    x: 18,
    y: 85,
    aroma: "Nutty, smoky hearth, caramelized grains",
    heritageText: "Barley was the original cereal of the Indigenous Amazigh tribes, praised by Herodotus as a grain that instills resilience and physical fortitude.",
  },
  {
    id: "dates",
    name: "Deglet Nour Dates",
    origin: "Oasis of Tozeur",
    story: "Revered as the 'Queen of Dates' or 'Finger of Light', these translucent, amber dates are harvested by hand. They melt into a rich, golden paste that acts as our natural, refined-sugar-free sweetener.",
    image: "https://images.unsplash.com/photo-1596512391000-880be86105a2?auto=format&fit=crop&w=800&q=80",
    x: 35,
    y: 50,
    aroma: "Rich honey, warm molasses, brown butter",
    heritageText: "The dates are harvested under the scorching desert sun where oasis rivers run cold beneath the sand, preserving their crystalline syrup.",
  },
  {
    id: "olive_oil",
    name: "Djerbian Olive Oil",
    origin: "Centennial Groves of Midoun",
    story: "Pressed from olives harvested from groves planted during the Carthaginian era, this oil is gold-green, offering notes of wild herbs, green almonds, and a peppery finish.",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80",
    x: 65,
    y: 35,
    aroma: "Fresh cut grass, wild sage, peppery green fruit",
    heritageText: "Olive trees in Djerba are sacred treasures, with roots extending centuries deep into the sand, nourished only by rainwater and sea breezes.",
  },
  {
    id: "carob",
    name: "Wild Carob Pods",
    origin: "Cliffs of Guellala",
    story: "Grown wild on the rocky cliffs of southern Djerba, carob pods are sun-dried and ground into a dark, chocolate-like flour. It adds a beautiful mahogany shade and deep cocoa notes to our dough.",
    image: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=800&q=80",
    x: 52,
    y: 62,
    aroma: "Balsamic earth, dark cacao, roasted nuts",
    heritageText: "Used historically as a valuable trade currency due to the consistent weight of its seeds, carob represents the balance and measurement of heritage crafts.",
  },
  {
    id: "sesame",
    name: "Heirloom Sesame Seeds",
    origin: "Sandy Dunes of Aghir",
    story: "Our sesame seeds are lightly toasted in clay pans, releasing rich essential oils that coat our cookies with a crispy, golden armor. Each seed is a symbol of fertility and cosmic order.",
    image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
    x: 75,
    y: 55,
    aroma: "Warm toasted hazelnut, organic oil, earthiness",
    heritageText: "In traditional Mediterranean folk rituals, sesame is the key that unlocks ancient portals and secret cave treasuries, representing spiritual passage.",
  },
  {
    id: "honey",
    name: "Wild Thyme Honey",
    origin: "Ghar el Melh Hills",
    story: "Harvested by nomadic apiarists, this dark honey is packed with the essence of wild thyme, rosemary, and eucalyptus. It binds our flour with a complex, floral sweetness.",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80",
    x: 48,
    y: 15,
    aroma: "Floral perfume, medicinal herbs, sun-baked stone",
    heritageText: "Beekeeping in Tunisia dates back to Phoenician times, when honey was considered the nectar of the gods and used for both sacred offerings and preservation.",
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "thyna_signature",
    name: "THYNA Signature",
    duration: "2.5 Hours",
    description: "An immersive journey into the sensory heritage of Djerba. Discover our ancient ingredients, try your hand at shaping cookies using traditional wooden stamps, and taste your creation paired with premium tea ceremonies.",
    highlights: [
      "Guided sensory tasting of 7 raw ingredients",
      "Interactive baking workshop with a master artisan",
      "Authentic clay-oven baking experience",
      "Bespoke herbal infusion and tea pairing"
    ],
    image: IMAGES.artisanWorkshop,
    price: "45 EUR / guest",
    vibe: "Ideal for cultural explorers and gastronomy enthusiasts looking to master ancient pastry techniques."
  },
  {
    id: "thyna_discovery",
    name: "THYNA Discovery",
    duration: "1.5 Hours",
    description: "A condensed masterclass focusing on the architectural origin of our recipes. Understand how the Roman city of Meninx inspired our geometry, taste three distinct historic recipes, and take home a fresh batch.",
    highlights: [
      "Historical briefing on the ruins of Meninx",
      "Tasting flight of 4 traditional cookies",
      "Hands-on shaping and stamping demonstration",
      "Beautifully packaged signature cookie box"
    ],
    image: IMAGES.signatureCookie,
    price: "30 EUR / guest",
    vibe: "A perfect introduction for busy travelers, boutique lovers, and families wanting a quick cultural bite."
  },
  {
    id: "private_experience",
    name: "Private Heritage Atelier",
    duration: "4 Hours",
    description: "An exclusive, completely customized private atelier for families, couples, or small groups. Set in our private courtyard under the olive branches, this workshop deepens your connection to the sacred craft, followed by a light Mediterranean sunset lunch.",
    highlights: [
      "Private use of the beautiful Maison THYNA courtyard",
      "One-on-one masterclass with our Head Heritage Pastry Chef",
      "Curation of a personalized ingredient blend based on your taste",
      "Exquisite three-course traditional Djerbian courtyard lunch with local wines/infusions"
    ],
    image: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=800&q=80",
    price: "120 EUR / guest",
    vibe: "Tailored for special celebrations, honeymoon couples, and travelers seeking complete privacy and high luxury."
  },
  {
    id: "hotel_concierge",
    name: "Bespoke Villa & Concierge Ateliers",
    duration: "Custom",
    description: "We bring the ancient culinary theater of Maison THYNA directly to your private villa, yacht, or luxury boutique hotel. Our traveling master artisans set up a high-end, visual, and sensory workshop for your distinguished guests.",
    highlights: [
      "On-site service in the comfort of your private residence",
      "Skins, copper bowls, and authentic wooden tools brought by us",
      "Perfect for high-net-worth travelers, private parties, and corporate retreats",
      "Coordinated with major luxury concierges across Djerba and Tunis"
    ],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    price: "On Demand",
    vibe: "Favored by premium luxury resort partners (e.g., Hasdrubal Prestige, Radisson, private Djerbian Dar villas)."
  },
  {
    id: "gift_boxes",
    name: "Prestige Gift boxes & Custom Gifting",
    duration: "Curated Collection",
    description: "An elegant showcase of our hand-carved heritage cookie boxes. Perfect for weddings, corporate gifts, state visits, or celebratory hampers, we create bespoke wooden and lacquer boxes engraved with Carthage-inspired designs.",
    highlights: [
      "Bespoke boxes in solid olive wood, brass, or handcrafted linen",
      "Personalized geometric seal stamping on each cookie",
      "International courier shipping for partners",
      "Tailored sensory storytelling booklet inside each package"
    ],
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80",
    price: "Custom quote",
    vibe: "Designed for premium institutions, luxury brands, and individuals wanting to offer the ultimate cultural gift."
  }
];

export const PRODUCTS: Product[] = [
  {
    id: "coffret_meninx",
    name: "Le Coffret Meninx",
    description: "Our signature collection housed in a hand-polished olive wood chest. Contains 24 cookies celebrating the geometric precision of the ancient Phoenician capital, crafted using the seven traditional ingredients.",
    price: "65 EUR",
    image: IMAGES.signatureCookie,
    category: "Prestige Collections",
    contents: "24 hand-stamped cookies (Ancient Wheat, Dates, Sesame, Olive Oil, Carob, Honey, Roasted Barley)."
  },
  {
    id: "coffret_djerba",
    name: "L'Écrin de l'Île des Rêves",
    description: "A luxury linen-bound jewelry-style box featuring 16 cookies. Inspired by the white vaults of traditional Djerbian 'Menzel' architecture. Every cookie is sealed with wild thyme honey and organic orange blossom.",
    price: "45 EUR",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80",
    category: "Signature Boxes",
    contents: "16 heirloom cookies, divided into four geometric expressions, accompanied by a loose-leaf chamomile and wild thyme herbal blend."
  },
  {
    id: "les_sept_piliers",
    name: "Les Sept Piliers de THYNA",
    description: "A minimalist tasting casket featuring 7 oversized heritage cookies, each formulated to emphasize a single sacred local ingredient (e.g., extra dates, heavy roasted carob, dense roasted barley).",
    price: "32 EUR",
    image: IMAGES.localIngredients,
    category: "Tasting Caskets",
    contents: "7 conceptual master cookies, paired with detailed tasting notes and a geographical map tracing the origin of each ingredient."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote: "Maison THYNA is not a pastry shop; it is a sacred sensory temple. Shaping our cookies using centuries-old wooden stamps, surrounded by the scent of roasted barley and orange blossoms, felt like time travel.",
    author: "Elena Rostova",
    role: "Travel Writer, Condé Nast Traveler",
    location: "Paris, France"
  },
  {
    id: "2",
    quote: "Our guests at the villa were absolutely spellbound by the on-site workshop. The attention to historical details, from Roman grain mills to Carthaginian olive oils, is unmatched. An exquisite artistic performance.",
    author: "Dar Selim Management",
    role: "Luxury Guest House Owner",
    location: "Erriadh, Djerba"
  },
  {
    id: "3",
    quote: "An extraordinary journey of transmission. Seeing how they cultivate wheat and roast sesame in Djerba, and tasting the deep caramelized flavor of carob made us realize what industry truly forgot.",
    author: "Karim Ben Ali",
    role: "Gastronomic Historian",
    location: "Tunis, Tunisia"
  }
];

export const TIMELINE_EVENTS = [
  {
    year: "1200 BC",
    title: "The Phoenician Port of Meninx",
    description: "Phoenicians establish Meninx as a major trade center on the coast of Djerba, trading purple dye made from murex shells and sharing ancient barley and honey dough recipes across the Mediterranean."
  },
  {
    year: "146 BC",
    title: "Roman Agricultural Hegemony",
    description: "The Roman Empire develops immense olive press farms and stone mills in Djerba, supplying the imperial capital with golden oil and durable ancient grains."
  },
  {
    year: "800 AD",
    title: "The Rise of traditional Djerbian Menzels",
    description: "Local families construct self-sufficient, whitewashed dome architectural clusters ('Menzels'), using thick clay walls and rainwater cisterns, crafting sweet date doughs for winter sustenance."
  },
  {
    year: "Present Day",
    title: "Maison THYNA Preservation",
    description: "We open the doors of our living museum to share the sacred techniques, saving ancient seeds, local beekeeping practices, and heritage recipes from modern industrial oblivion."
  }
];
