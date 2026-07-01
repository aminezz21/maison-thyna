/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = "en" | "fr";

export interface TranslationDictionary {
  navbar: {
    story: string;
    ingredients: string;
    experiences: string;
    boutique: string;
    partners: string;
    cta: string;
  };
  home: {
    heroTitlePart1: string;
    heroTitlePart2: string;
    heroTitleItalic: string;
    heroDesc: string;
    heroCtaBook: string;
    heroCtaPartner: string;
    metricHarvest: string;
    metricGrains: string;
    metricSessions: string;
    museumBadge: string;
    museumTitle: string;
    museumDesc: string;
    museumQuote: string;
    museumCta: string;
    pillarsTitle: string;
    pillarsSubtitle: string;
    pillarsDesc: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
    expTitle: string;
    expSubtitle: string;
    expCtaAll: string;
    expCardCta: string;
    summerBadge: string;
    summerTitle: string;
    summerDesc: string;
    summerCta: string;
    summerNote: string;
    voicesBadge: string;
    voicesTitle: string;
    partnersBadge: string;
    instaBadge: string;
    instaTitle: string;
  };
  story: {
    badge: string;
    title: string;
    subtitle: string;
    quote: string;
    section1Title: string;
    section1Text1: string;
    section1Text2: string;
    section2Title: string;
    section2Text1: string;
    section2Text2: string;
    geoBadge: string;
    geoTitle: string;
    geoText: string;
    timelineTitle: string;
    timelineSubtitle: string;
    timelineEvents: Array<{
      year: string;
      title: string;
      description: string;
    }>;
  };
  ingredients: {
    badge: string;
    title: string;
    subtitle: string;
    intro: string;
    mapInstruction: string;
    clickPrompt: string;
    cardOrigin: string;
    cardAroma: string;
    cardStory: string;
    cardHeritage: string;
    ctaReserve: string;
    items: {
      [id: string]: {
        name: string;
        origin: string;
        story: string;
        aroma: string;
        heritageText: string;
      };
    };
  };
  experiences: {
    badge: string;
    title: string;
    subtitle: string;
    quote: string;
    featuresBadge: string;
    featuresTitle: string;
    featuresDesc: string;
    highlightsTitle: string;
    vibeTitle: string;
    btnReserve: string;
    items: {
      [id: string]: {
        name: string;
        duration: string;
        description: string;
        highlights: string[];
        price: string;
        vibe: string;
      };
    };
  };
  boutique: {
    badge: string;
    title: string;
    subtitle: string;
    quote: string;
    shippingBadge: string;
    shippingTitle: string;
    shippingDesc: string;
    categories: {
      all: string;
      prestige: string;
      signature: string;
      tasting: string;
    };
    contentsLabel: string;
    btnInquire: string;
    btnInstantBuy: string;
    securingTitle: string;
    securingText: string;
    features: Array<{
      title: string;
      desc: string;
    }>;
    items: {
      [id: string]: {
        name: string;
        description: string;
        price: string;
        category: string;
        contents: string;
      };
    };
  };
  partners: {
    badge: string;
    title: string;
    subtitle: string;
    quote: string;
    benefitsTitle: string;
    benefit1Title: string;
    benefit1Desc: string;
    benefit2Title: string;
    benefit2Desc: string;
    benefit3Title: string;
    benefit3Desc: string;
    formTitle: string;
    formDesc: string;
    labelName: string;
    labelProperty: string;
    labelEmail: string;
    labelPhone: string;
    labelType: string;
    optHotel: string;
    optVilla: string;
    optYacht: string;
    optConcierge: string;
    labelNotes: string;
    btnSubmit: string;
    successTitle: string;
    successDesc: string;
    successSub: string;
    btnReset: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    formTitle: string;
    formDesc: string;
    labelName: string;
    labelWhatsapp: string;
    labelEmail: string;
    labelGuests: string;
    labelDate: string;
    labelExpType: string;
    labelNotes: string;
    btnSubmit: string;
    successTitle: string;
    successDesc: string;
    successSub: string;
    bypassTitle: string;
    btnBypass: string;
    btnReset: string;
    detailsTitle: string;
    coordBadge: string;
    coordValue: string;
    phoneBadge: string;
    phoneValue: string;
    mailBadge: string;
    mailValue: string;
    hoursBadge: string;
    hoursDays: string;
    hoursClosed: string;
    mapBanner: string;
    mapBtn: string;
  };
  footer: {
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
    newsletterTitle: string;
    newsletterSuccess: string;
    newsletterPlaceholder: string;
    contactTitle: string;
    rights: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  en: {
    navbar: {
      story: "Our Story",
      ingredients: "Ingredients",
      experiences: "Experiences",
      boutique: "Boutique",
      partners: "Partners",
      cta: "Book an Experience",
    },
    home: {
      heroTitlePart1: "One Cookie.",
      heroTitlePart2: "One Land.",
      heroTitleItalic: "One Story.",
      heroDesc: "What industry forgot, the land still remembers. Discover the ancient flavors of Djerba through our curated cookie experiences.",
      heroCtaBook: "Book Your Visit",
      heroCtaPartner: "Become a Partner",
      metricHarvest: "Local Harvest",
      metricGrains: "Ancient Grains",
      metricSessions: "Monthly Sessions",
      museumBadge: "The Living Museum",
      museumTitle: "Where gastronomy meets Phoenician archaeology.",
      museumDesc: "Maison THYNA is named after the legendary archaeological heritage of Djerba. Inspired by the ancient maritime ruins of Meninx—once an imperial port of purple dye and Roman granaries—we revive recipes that have slumbered in local soils for over two thousand years.",
      museumQuote: "We are not a bakery, nor are we a shop. Maison THYNA is a living archive. When you break our biscuit, you taste the hard wheat of Gightis, the wild carob of Guellala, and the history of Tunisia itself.",
      museumCta: "Explore Our Lineage",
      pillarsTitle: "The Tryptich of THYNA",
      pillarsSubtitle: "Our Sacred Foundations",
      pillarsDesc: "Maison THYNA operates purely under three foundational values, refusing modern shortcuts to honor ancient craft.",
      pillar1Title: "Heritage",
      pillar1Desc: "Resurrecting forgotten seeds and geometric cookie molds that trace back to Carthago, Rome, and the early Islamic dynasties of southern Tunisia.",
      pillar2Title: "Transmission",
      pillar2Desc: "We teach the exact sensory hand-motions and wooden stamp designs to travelers, protecting these fragile, oral master crafts from industrial erasure.",
      pillar3Title: "Authenticity",
      pillar3Desc: "Every single ingredient is wild-foraged or cold-pressed in Djerba, with zero preservatives, processed chemicals, or industrial machinery.",
      expTitle: "The Sensory Ateliers",
      expSubtitle: "Discover Our Experiences",
      expCtaAll: "View All 5 Experiences",
      expCardCta: "Reserve Atelier",
      summerBadge: "Summer Solstice Ateliers",
      summerTitle: "Sunset Baking & Stargazing at the ruins of Meninx",
      summerDesc: "Throughout July and August, our private ateliers shift to the golden hours of twilight. Discover how Carthage bakers aligned their hearths with the stars while baking, followed by local astronomical viewings and premium iced infusions.",
      summerCta: "Secure Summer Seat",
      summerNote: "Extremely limited availability. Only 3 ateliers hosted per week.",
      voicesBadge: "L'Écho Des Voyageurs",
      voicesTitle: "Voices from the Atelier",
      partnersBadge: "Prestige Hotel & Villa Partners",
      instaBadge: "Visual Archives",
      instaTitle: "Follow @MaisonThyna",
    },
    story: {
      badge: "The Living Archive",
      title: "Maison THYNA Lineage",
      subtitle: "Preserving the ancient cookie recipes and ancestral techniques of Djerba.",
      quote: "\"To understand our pastries is to read the geology of the Mediterranean. It is a slow, silent liturgy written in stone, wheat, and smoke.\"",
      section1Title: "The Silt of Meninx",
      section1Text1: "Our workshops stand on the historic outskirts of Meninx, the grand Phoenician port that once overflowed with purple murex dyes, Amphora containers of liquid oil, and Saharan gold. For millennia, travelers left their taste blueprints in Djerba’s sandy soils. Maison THYNA was founded to rescue this complex, multicultural heritage.",
      section1Text2: "Our stone ovens are modeled exactly on the ancient domed Menzels. We bake using heat stored in volcanic basalt stone, stoking the fire exclusively with dried olive branches and wild aromatic brushwood. We do not use electric ovens or standard yeast—only the slow, biological wild starters of local sourdough.",
      section2Title: "The Symmetrical Seal",
      section2Text1: "The geometric, concentric stamps on our biscuits are not decorative; they are archaeological. Hand-carved from wild olive wood by master cabinetmakers of Guellala, each stamp replicates the mosaic grids of Roman thermal bath floors and Carthage stellar alignments.",
      section2Text2: "When you press the wood into the dough, you are not merely styling a cookie; you are sealing an ancient pact between human hands and the geography of Tunisia. It is an act of sheer kinetic memory, passed down generation to generation through oral tradition.",
      geoBadge: "Geographical Anchoring",
      geoTitle: "Djerba Sanctuary",
      geoText: "Situated near the southern Roman bridge causeway in Djerba, Tunisia.",
      timelineTitle: "The Golden Thread",
      timelineSubtitle: "Our Chronicles of Bread and Earth",
      timelineEvents: [
        {
          year: "1200 BC",
          title: "The Phoenician Port of Meninx",
          description: "Phoenicians establish Meninx as a major trade center on the coast of Djerba, trading purple dye made from murex shells and sharing ancient barley and honey dough recipes across the Mediterranean.",
        },
        {
          year: "146 BC",
          title: "Roman Agricultural Hegemony",
          description: "The Roman Empire develops immense olive press farms and stone mills in Djerba, supplying the imperial capital with golden oil and durable ancient grains.",
        },
        {
          year: "800 AD",
          title: "The Rise of traditional Djerbian Menzels",
          description: "Local families construct self-sufficient, whitewashed dome architectural clusters ('Menzels'), using thick clay walls and rainwater cisterns, crafting sweet date doughs for winter sustenance.",
        },
        {
          year: "Present Day",
          title: "Maison THYNA Preservation",
          description: "We open the doors of our living museum to share the sacred techniques, saving ancient seeds, local beekeeping practices, and heritage recipes from modern industrial oblivion.",
        },
      ],
    },
    ingredients: {
      badge: "The Sacred Botany",
      title: "Our Seven Ingredients",
      subtitle: "Grown by rainwater, harvested by hand, milled by volcanic stone.",
      intro: "We use exactly seven raw ingredients. Each is wild-harvested or produced organically by local Tunisian families. Click on any ingredient below to reveal its geographic origin, sensory aroma, and ancestral history.",
      mapInstruction: "Interactive Botanical Sourcing Map",
      clickPrompt: "Click an interactive node on the map to inspect an ingredient.",
      cardOrigin: "Geographic Origin",
      cardAroma: "Sensory Aroma Profile",
      cardStory: "The Sensory Story",
      cardHeritage: "Heritage & Mythology",
      ctaReserve: "Reserve a Sourcing Workshop",
      items: {
        wheat: {
          name: "Ancient Wheat",
          origin: "Plains of Gightis",
          story: "Milled slowly using volcanic basalt stones, this ancient durum wheat provides the earthy backbone of our pastries, carrying the structural strength of Roman-era grain storage.",
          aroma: "Toasted straw, warm sun-baked clay, golden fields",
          heritageText: "The Roman Empire relied on Tunisian grain as its primary breadbasket, leaving behind massive stone granaries that still echo with the whispers of ancient harvests.",
        },
        barley: {
          name: "Roasted Barley",
          origin: "Arid Terraces of Matmata",
          story: "Roasted in ancient clay drums over olive wood fires, our pearl barley is crushed into 'Zoumit', a dark flour with a signature nutty smokiness that has fueled Saharan nomads for millennia.",
          aroma: "Nutty, smoky hearth, caramelized grains",
          heritageText: "Barley was the original cereal of the Indigenous Amazigh tribes, praised by Herodotus as a grain that instills resilience and physical fortitude.",
        },
        dates: {
          name: "Deglet Nour Dates",
          origin: "Oasis of Tozeur",
          story: "Revered as the 'Queen of Dates' or 'Finger of Light', these translucent, amber dates are harvested by hand. They melt into a rich, golden paste that acts as our natural, refined-sugar-free sweetener.",
          aroma: "Rich honey, warm molasses, brown butter",
          heritageText: "The dates are harvested under the scorching desert sun where oasis rivers run cold beneath the sand, preserving their crystalline syrup.",
        },
        olive_oil: {
          name: "Djerbian Olive Oil",
          origin: "Centennial Groves of Midoun",
          story: "Pressed from olives harvested from groves planted during the Carthaginian era, this oil is gold-green, offering notes of wild herbs, green almonds, and a peppery finish.",
          aroma: "Fresh cut grass, wild sage, peppery green fruit",
          heritageText: "Olive trees in Djerba are sacred treasures, with roots extending centuries deep into the sand, nourished only by rainwater and sea breezes.",
        },
        carob: {
          name: "Wild Carob Pods",
          origin: "Cliffs of Guellala",
          story: "Grown wild on the rocky cliffs of southern Djerba, carob pods are sun-dried and ground into a dark, chocolate-like flour. It adds a beautiful mahogany shade and deep cocoa notes to our dough.",
          aroma: "Balsamic earth, dark cacao, roasted nuts",
          heritageText: "Used historically as a valuable trade currency due to the consistent weight of its seeds, carob represents the balance and measurement of heritage crafts.",
        },
        sesame: {
          name: "Heirloom Sesame Seeds",
          origin: "Sandy Dunes of Aghir",
          story: "Our sesame seeds are lightly toasted in clay pans, releasing rich essential oils that coat our cookies with a crispy, golden armor. Each seed is a symbol of fertility and cosmic order.",
          aroma: "Warm toasted hazelnut, organic oil, earthiness",
          heritageText: "In traditional Mediterranean folk rituals, sesame is the key that unlocks ancient portals and secret cave treasuries, representing spiritual passage.",
        },
        honey: {
          name: "Wild Thyme Honey",
          origin: "Ghar el Melh Hills",
          story: "Harvested by nomadic apiarists, this dark honey is packed with the essence of wild thyme, rosemary, and eucalyptus. It binds our flour with a complex, floral sweetness.",
          aroma: "Floral perfume, medicinal herbs, sun-baked stone",
          heritageText: "Beekeeping in Tunisia dates back to Phoenician times, when honey was considered the nectar of the gods and used for both sacred offerings and preservation.",
        },
      },
    },
    experiences: {
      badge: "Sensory Liturgy",
      title: "Maison THYNA Ateliers",
      subtitle: "Step into our living kitchen and feel the rhythm of ancestral baking.",
      quote: "\"The hand must learn what the eyes have forgotten. Join us under the shade of our centennial olive trees.\"",
      featuresBadge: "Craft Preservation",
      featuresTitle: "The Pillars of our Ateliers",
      featuresDesc: "Every booking supports local archaeological preservation and guarantees fair wages to the agricultural lineage of Djerba.",
      highlightsTitle: "Atelier Highlights",
      vibeTitle: "The Vibe",
      btnReserve: "Request Reservation",
      items: {
        thyna_signature: {
          name: "THYNA Signature",
          duration: "2.5 Hours",
          description: "An immersive journey into the sensory heritage of Djerba. Discover our ancient ingredients, try your hand at shaping cookies using traditional wooden stamps, and taste your creation paired with premium tea ceremonies.",
          highlights: [
            "Guided sensory tasting of 7 raw ingredients",
            "Interactive baking workshop with a master artisan",
            "Authentic clay-oven baking experience",
            "Bespoke herbal infusion and tea pairing",
          ],
          price: "45 EUR / guest",
          vibe: "Ideal for cultural explorers and gastronomy enthusiasts looking to master ancient pastry techniques.",
        },
        thyna_discovery: {
          name: "THYNA Discovery",
          duration: "1.5 Hours",
          description: "A condensed masterclass focusing on the architectural origin of our recipes. Understand how the Roman city of Meninx inspired our geometry, taste three distinct historic recipes, and take home a fresh batch.",
          highlights: [
            "Historical briefing on the ruins of Meninx",
            "Tasting flight of 4 traditional cookies",
            "Hands-on shaping and stamping demonstration",
            "Beautifully packaged signature cookie box",
          ],
          price: "30 EUR / guest",
          vibe: "A perfect introduction for busy travelers, boutique lovers, and families wanting a quick cultural bite.",
        },
        private_experience: {
          name: "Private Heritage Atelier",
          duration: "4 Hours",
          description: "An exclusive, completely customized private atelier for families, couples, or small groups. Set in our private courtyard under the olive branches, this workshop deepens your connection to the sacred craft, followed by a light Mediterranean sunset lunch.",
          highlights: [
            "Private use of the beautiful Maison THYNA courtyard",
            "One-on-one masterclass with our Head Heritage Pastry Chef",
            "Curation of a personalized ingredient blend based on your taste",
            "Exquisite three-course traditional Djerbian courtyard lunch with local wines/infusions",
          ],
          price: "120 EUR / guest",
          vibe: "Tailored for special celebrations, honeymoon couples, and travelers seeking complete privacy and high luxury.",
        },
        hotel_concierge: {
          name: "Bespoke Villa & Concierge Ateliers",
          duration: "Custom",
          description: "We bring the ancient culinary theater of Maison THYNA directly to your private villa, yacht, or luxury boutique hotel. Our traveling master artisans set up a high-end, visual, and sensory workshop for your distinguished guests.",
          highlights: [
            "On-site service in the comfort of your private residence",
            "Skins, copper bowls, and authentic wooden tools brought by us",
            "Perfect for high-net-worth travelers, private parties, and corporate retreats",
            "Coordinated with major luxury concierges across Djerba and Tunis",
          ],
          price: "On Demand",
          vibe: "Favored by premium luxury resort partners (e.g., Hasdrubal Prestige, Radisson, private Djerbian Dar villas).",
        },
        gift_boxes: {
          name: "Prestige Gift boxes & Custom Gifting",
          duration: "Curated Collection",
          description: "An elegant showcase of our hand-carved heritage cookie boxes. Perfect for weddings, corporate gifts, state visits, or celebratory hampers, we create bespoke wooden and lacquer boxes engraved with Carthage-inspired designs.",
          highlights: [
            "Bespoke boxes in solid olive wood, brass, or handcrafted linen",
            "Personalized geometric seal stamping on each cookie",
            "International courier shipping for partners",
            "Tailored sensory storytelling booklet inside each package",
          ],
          price: "Custom quote",
          vibe: "Designed for premium institutions, luxury brands, and individuals wanting to offer the ultimate cultural gift.",
        },
      },
    },
    boutique: {
      badge: "Prestige Artifacts",
      title: "The Heritage Boutique",
      subtitle: "Bring the sensory archives of Maison THYNA to your home table.",
      quote: "\"Every casket is a tactile museum. Sealed by hand, delivered to luxury residences across the world.\"",
      shippingBadge: "Premium Logistics",
      shippingTitle: "Global Air Dispatch",
      shippingDesc: "We ship our freshly-baked creations weekly in pressurized, linen-wrapped wooden caskets to preserve structural geometry and natural aroma.",
      categories: {
        all: "All Artifacts",
        prestige: "Prestige Collections",
        signature: "Signature Boxes",
        tasting: "Tasting Caskets",
      },
      contentsLabel: "Contents",
      btnInquire: "Inquire via Concierge",
      btnInstantBuy: "Buy Now & Courier",
      securingTitle: "Uncompromising Preservation",
      securingText: "Our caskets are sealed with natural beeswax and organic paper wrappers. No chemical preservation is used; the high density of thyme honey and natural sugars acts as a geological seal to preserve softness for up to 30 days.",
      features: [
        {
          title: "Solid Olive Wood",
          desc: "Each prestige box is individually hand-carved by local artisans, making it a unique heritage sculpture.",
        },
        {
          title: "Freshness Guaranteed",
          desc: "Baked on-demand on the Wednesday following your order and dispatched by express carrier on Thursday.",
        },
        {
          title: "Customized Seals",
          desc: "Option to engrave your family seal or marriage initials onto our traditional wooden molds.",
        },
      ],
      items: {
        coffret_meninx: {
          name: "Le Coffret Meninx",
          description: "Our signature collection housed in a hand-polished olive wood chest. Contains 24 cookies celebrating the geometric precision of the ancient Phoenician capital, crafted using the seven traditional ingredients.",
          price: "65 EUR",
          category: "Prestige Collections",
          contents: "24 hand-stamped cookies (Ancient Wheat, Dates, Sesame, Olive Oil, Carob, Honey, Roasted Barley).",
        },
        coffret_djerba: {
          name: "L'Écrin de l'Île des Rêves",
          description: "A luxury linen-bound jewelry-style box featuring 16 cookies. Inspired by the white vaults of traditional Djerbian 'Menzel' architecture. Every cookie is sealed with wild thyme honey and organic orange blossom.",
          price: "45 EUR",
          category: "Signature Boxes",
          contents: "16 heirloom cookies, divided into four geometric expressions, accompanied by a loose-leaf chamomile and wild thyme herbal blend.",
        },
        les_sept_piliers: {
          name: "Les Sept Piliers de THYNA",
          description: "A minimalist tasting casket featuring 7 oversized heritage cookies, each formulated to emphasize a single sacred local ingredient (e.g., extra dates, heavy roasted carob, dense roasted barley).",
          price: "32 EUR",
          category: "Tasting Caskets",
          contents: "7 conceptual master cookies, paired with detailed tasting notes and a geographical map tracing the origin of each ingredient.",
        },
      },
    },
    partners: {
      badge: "Hospitality Guild",
      title: "Prestige Partnership",
      subtitle: "Join major luxury resorts and private concierges offering Maison THYNA culinary rituals.",
      quote: "\"We curate bespoke gastronomic theater for the world's most discerning boutique environments.\"",
      benefitsTitle: "Why Partner with Maison THYNA",
      benefit1Title: "Bespoke Concierge integration",
      benefit1Desc: "Allow your hotel guests to bypass standard reservation waitlists, with dedicated weekly slots reserved entirely for your luxury properties.",
      benefit2Title: "Bespoke Villa Theater",
      benefit2Desc: "Our master bakers bring clay pots, hand-stamped molds, and sensory tables to your clients' private villas for high-end on-site workshops.",
      benefit3Title: "Branded Prestige Amenities",
      benefit3Desc: "Exquisite solid wood mini-caskets left in suites as turndown surprises, customizable with your resort logo or guest's family initial.",
      formTitle: "Partnership Inquiry",
      formDesc: "Let us design a bespoke sensory experience for your estate or hotel. Submit your details below, and our brand director will call you within 24 hours.",
      labelName: "Your Name & Title",
      labelProperty: "Luxury Estate / Company Name",
      labelEmail: "Official Email Address",
      labelPhone: "WhatsApp / Direct Phone",
      labelType: "Property Classification",
      optHotel: "Boutique Hotel / Luxury Resort",
      optVilla: "Private Villa / Guest House",
      optYacht: "Yacht Charter / Luxury Concierge",
      optConcierge: "Embassy / State Institution",
      labelNotes: "Partnership Vision & Sensory Alignment",
      btnSubmit: "Submit Partnership Proposal",
      successTitle: "Proposal Received",
      successDesc: "Thank you for initiating contact, **{name}**. We appreciate the architectural and hospitality excellence of **{property}**.",
      successSub: "Our Partnership Director will contact you on your registered credentials shortly to share our physical press booklet and coordinate a sensory tasting flight.",
      btnReset: "Submit another proposal",
    },
    contact: {
      badge: "Secure Your Lineage Seat",
      title: "Atelier Reservation",
      subtitle: "\"Our wood-fired ovens are stoked only on request. Request your booking below to join us beneath the olive groves of Djerba.\"",
      formTitle: "Request Booking",
      formDesc: "Reservations must be requested at least 48 hours in advance. No payment is charged today; our hospitality host will call you to confirm your sensory preferences.",
      labelName: "Your Full Name",
      labelWhatsapp: "WhatsApp Number",
      labelEmail: "Email Address",
      labelGuests: "Guests (Max 8)",
      labelDate: "Desired Date",
      labelExpType: "Experience Type",
      labelNotes: "Sensory Notes & Dietary Preferences",
      btnSubmit: "Submit Reservation Request",
      successTitle: "Atelier Requested",
      successDesc: "Dearest **{name}**, your request to reserve the **{exp}** on **{date}** has been successfully logged inside the Maison THYNA ledger.",
      successSub: "A verification receipt and coordinate confirmation have been dispatched to **{email}**. We will contact you on your WhatsApp number (**{whatsapp}**) to finalize parameters.",
      bypassTitle: "Want to bypass the queue? Send your pre-filled request directly to our concierge phone.",
      btnBypass: "Instant Confirm via WhatsApp",
      btnReset: "Submit another reservation",
      detailsTitle: "Maison THYNA Sanctuary",
      coordBadge: "Archaeological Coordinates",
      coordValue: "Coastal Road of El Kantara (Ruins of Meninx Site), Djerba, Tunisia",
      phoneBadge: "WhatsApp Concierge",
      phoneValue: "+216 22 334 455 (International support available)",
      mailBadge: "Electronic Dispatch",
      mailValue: "host@maisonthyna.com • partners@maisonthyna.com",
      hoursBadge: "Liturgy Hours",
      hoursDays: "Wednesday – Sunday: 09:00 AM – 06:00 PM",
      hoursClosed: "Closed Monday & Tuesday for stone grain grinding.",
      mapBanner: "Adjacent to Roman causeway bridge",
      mapBtn: "Open Maps",
    },
    footer: {
      pillar1Title: "Heritage",
      pillar1Desc: "Rooted in Djerbian history",
      pillar2Title: "Transmission",
      pillar2Desc: "Passing ancestral craft",
      pillar3Title: "Authenticity",
      pillar3Desc: "Pure, honest ingredients",
      newsletterTitle: "Join the heritage mailing list",
      newsletterSuccess: "Enrolled in the THYNA Ledger",
      newsletterPlaceholder: "EMAIL ADDRESS",
      contactTitle: "Maison THYNA Sanctuary, Ruins of Meninx, Coastal Road El Kantara, Djerba, Tunisia",
      rights: "© 2026 Maison THYNA. Preservation of the sacred Tunisian cookie craft. Built near Roman ruins.",
    },
  },
  fr: {
    navbar: {
      story: "Notre Histoire",
      ingredients: "Ingrédients",
      experiences: "Expériences",
      boutique: "Boutique",
      partners: "Partenaires",
      cta: "Réserver un Atelier",
    },
    home: {
      heroTitlePart1: "Un Biscuit.",
      heroTitlePart2: "Une Terre.",
      heroTitleItalic: "Une Histoire.",
      heroDesc: "Ce que l'industrie a oublié, la terre s'en souvient encore. Découvrez les saveurs antiques de Djerba à travers nos ateliers de dégustation et de confection.",
      heroCtaBook: "Réserver Votre Visite",
      heroCtaPartner: "Devenir Partenaire",
      metricHarvest: "Récolte Locale",
      metricGrains: "Grains Anciens",
      metricSessions: "Sessions Mensuelles",
      museumBadge: "Le Musée Vivant",
      museumTitle: "Là où la gastronomie rencontre l'archéologie phénicienne.",
      museumDesc: "La Maison THYNA tire son nom de l'héritage archéologique légendaire de Djerba. Inspirés par les ruines maritimes de Meninx—ancien port impérial de pourpre et greniers romains—nous faisons renaître des recettes assoupies sous la terre locale depuis plus de deux mille ans.",
      museumQuote: "Nous ne sommes ni une boulangerie, ni une simple boutique. La Maison THYNA est une archive vivante. En goûtant nos biscuits, vous savourez le blé dur de Gightis, le caroube sauvage de Guellala, et l'histoire même de la Tunisie.",
      museumCta: "Explorer Notre Lignée",
      pillarsTitle: "Le Triptyque de THYNA",
      pillarsSubtitle: "Nos Fondations Sacrées",
      pillarsDesc: "La Maison THYNA repose sur trois valeurs fondamentales immuables, refusant tout raccourci moderne pour honorer le geste ancestral.",
      pillar1Title: "Héritage",
      pillar1Desc: "Ressusciter les semences oubliées et les moules géométriques dont les tracés remontent à Carthage, à Rome et aux premières dynasties islamiques du Sud tunisien.",
      pillar2Title: "Transmission",
      pillar2Desc: "Nous transmettons aux voyageurs les gestes sensoriels précis et la gravure des tampons en bois, protégeant cet artisanat oral fragile de l'oubli industriel.",
      pillar3Title: "Authenticité",
      pillar3Desc: "Chaque ingrédient est cueilli à l'état sauvage ou pressé à froid à Djerba, sans aucun conservateur, additif chimique ou procédé mécanique industriel.",
      expTitle: "Les Ateliers Sensoriels",
      expSubtitle: "Découvrir Nos Expériences",
      expCtaAll: "Découvrir les 5 Expériences",
      expCardCta: "Réserver l'Atelier",
      summerBadge: "Ateliers du Solstice d'Été",
      summerTitle: "Pétrissage au Coucher du Soleil & Astronomie à Meninx",
      summerDesc: "Tout au long de juillet et août, nos ateliers privés se déplacent aux heures dorées du crépuscule. Découvrez comment les boulangers carthaginois alignaient leurs fours sur les étoiles, suivi d'une observation astronomique et d'infusions glacées.",
      summerCta: "Réserver une Soirée d'Été",
      summerNote: "Disponibilité extrêmement limitée. Seulement 3 ateliers par semaine.",
      voicesBadge: "L'Écho Des Voyageurs",
      voicesTitle: "Témoignages de l'Atelier",
      partnersBadge: "Hôtels de Prestige & Villas Partenaires",
      instaBadge: "Archives Visuelles",
      instaTitle: "Suivre @MaisonThyna",
    },
    story: {
      badge: "L'Archive Vivante",
      title: "La Lignée Maison THYNA",
      subtitle: "Préserver les recettes de biscuits antiques et les techniques ancestrales de Djerba.",
      quote: "\"Comprendre nos pâtisseries, c'est lire la géologie de la Méditerranée. C'est une liturgie lente et silencieuse écrite dans la pierre, le blé et la fumée.\"",
      section1Title: "Le Limon de Meninx",
      section1Text1: "Nos ateliers s'élèvent sur les lisières historiques de Meninx, ce grand port phénicien d'où s'écoulaient jadis la pourpre du murex, les amphores d'huile d'olive et l'or saharien. Depuis des millénaires, les voyageurs ont laissé leurs empreintes gustatives dans les sables de Djerba. La Maison THYNA a été fondée pour sauver ce patrimoine multiculturel d'une valeur inestimable.",
      section1Text2: "Nos fours en pierre sont calqués sur les anciens Menzels voûtés. Nous cuisons grâce à la chaleur accumulée par les blocs de basalte volcanique, en alimentant le foyer exclusivement avec des branches d'olivier sèches et des herbes aromatiques sauvages. Nous n'utilisons aucun four électrique, ni levure chimique — seulement les levains sauvages issus du terroir.",
      section2Title: "Le Sceau de la Symétrie",
      section2Text1: "Les empreintes géométriques et concentriques sur nos biscuits ne sont pas décoratives : elles sont archéologiques. Sculptés à la main dans du bois d'olivier sauvage par les maîtres ébénistes de Guellala, chaque tampon réplique les motifs de mosaïques des thermes romains ou l'alignement stellaire de Carthage.",
      section2Text2: "Lorsque vous pressez le bois dans la pâte, vous ne dessinez pas seulement un biscuit ; vous scellez un pacte séculaire entre la main de l'homme et la géographie de la Tunisie. C'est un pur geste de mémoire cinétique, transmis de génération en génération par une tradition purement orale.",
      geoBadge: "Ancrage Géographique",
      geoTitle: "Sanctuaire de Djerba",
      geoText: "Situé près de la chaussée romaine romaine de Meninx à Djerba, en Tunisie.",
      timelineTitle: "Le Fil d'Or",
      timelineSubtitle: "Nos Chroniques de Pain et de Terre",
      timelineEvents: [
        {
          year: "1200 AV. JC",
          title: "Le Port Phénicien de Meninx",
          description: "Les Phéniciens font de Meninx un carrefour commercial majeur à Djerba, exportant la pourpre et partageant des recettes de pâte d'orge et de miel à travers la Méditerranée.",
        },
        {
          year: "146 AV. JC",
          title: "L'Hégémonie Agricole Romaine",
          description: "L'Empire Romain développe d'immenses pressoirs à olives et des moulins de pierre à Djerba, approvisionnant Rome en huile dorée et en grains anciens robustes.",
        },
        {
          year: "800 AP. JC",
          title: "L'Émergence des Menzels Djerbiens",
          description: "Les familles construisent les premiers Menzels fortifiés et blanchis à la chaux, utilisant des dômes d'argile et des citernes d'eau de pluie, façonnant des pâtes de dattes pour l'hiver.",
        },
        {
          year: "Aujourd'hui",
          title: "Préservation Maison THYNA",
          description: "Nous ouvrons les portes de notre musée vivant pour transmettre ces techniques sacrées, protégeant les variétés de blé ancien, l'apiculture locale et les secrets de pétrissage.",
        },
      ],
    },
    ingredients: {
      badge: "La Botanique Sacrée",
      title: "Nos Sept Ingrédients",
      subtitle: "Nourris par la pluie, récoltés à la main, moulus par la pierre volcanique.",
      intro: "Nous utilisons exactement sept ingrédients bruts. Chacun est cueilli à l'état sauvage ou cultivé biologiquement par des familles djerbiennes. Cliquez sur un ingrédient pour révéler son origine géographique, son profil aromatique et son histoire ancestrale.",
      mapInstruction: "Carte Interactive des Sources Botaniques",
      clickPrompt: "Cliquez sur un point interactif de la carte pour inspecter un ingrédient.",
      cardOrigin: "Origine Géographique",
      cardAroma: "Profil Aromatique",
      cardStory: "L'Histoire Sensorielle",
      cardHeritage: "Héritage & Mythologie",
      ctaReserve: "Réserver un Atelier de Récolte",
      items: {
        wheat: {
          name: "Blé Ancien",
          origin: "Plaines de Gightis",
          story: "Moulu lentement par des meules de basalte volcanique, ce blé dur ancien constitue la colonne vertébrale terreuse de nos pâtisseries, héritier de la vigueur des cultures céréalières de l'époque romaine.",
          aroma: "Paille grillée, argile chauffée par le soleil, champs dorés",
          heritageText: "L'Empire romain dépendait des plaines tunisiennes comme de son grenier principal, laissant derrière lui de gigantesques structures de pierre qui résonnent encore des moissons d'autrefois.",
        },
        barley: {
          name: "Orge Torréfiée",
          origin: "Terrasses Arides de Matmata",
          story: "Torréfié dans des tambours d'argile sur feu de bois d'olivier, notre orge perlé est broyé en 'Zoumit', une farine sombre à la saveur fumée caractéristique qui nourrit les nomades sahariens depuis des millénaires.",
          aroma: "Noisette grillée, foyer fumé, grains caramélisés",
          heritageText: "L'orge était la céréale originelle des tribus autochtones Amazighs, célébrée par Hérodote comme un grain de résilience et de force physique.",
        },
        dates: {
          name: "Dattes Deglet Nour",
          origin: "Oasis de Tozeur",
          story: "Surnommées la 'Reine des Dattes' ou 'Doigt de Lumière', ces dattes ambrées et translucides sont récoltées à la main. Elles fondent en une pâte dorée qui sert de sucrant naturel, sans sucre raffiné.",
          aroma: "Miel riche, mélasse tiède, beurre noisette",
          heritageText: "Les dattes sont récoltées sous le soleil brûlant du désert là où les rivières d'oasis coulent fraîches sous le sable, préservant leur sirop cristallin.",
        },
        olive_oil: {
          name: "Huile d'Olive de Djerba",
          origin: "Oliveraies Centenaires de Midoun",
          story: "Pressée à partir d'olives issues d'arbres plantés dès l'époque carthaginoise, cette huile vert-doré offre des notes d'herbes sauvages, d'amandes vertes et une finale poivrée.",
          aroma: "Herbe fraîchement coupée, sauge sauvage, fruit vert poivré",
          heritageText: "Les oliviers à Djerba sont des trésors sacrés, leurs racines plongeant depuis des siècles dans le sable, irrigués uniquement par l'eau du ciel et les brises marines.",
        },
        carob: {
          name: "Caroube Sauvage",
          origin: "Falaises de Guellala",
          story: "Poussant à l'état sauvage sur les falaises rocheuses du sud de Djerba, les gousses de caroube sont séchées au soleil puis moulues en une farine brune chocolatée qui donne sa couleur acajou et ses notes cacaotées à notre pâte.",
          aroma: "Terre balsamique, cacao noir, fruits à coque grillés",
          heritageText: "Utilisée historiquement comme monnaie d'échange précieuse grâce au poids constant de ses graines (le carat), la caroube symbolise la mesure et l'équilibre de nos métiers.",
        },
        sesame: {
          name: "Graines de Sésame Locales",
          origin: "Dunes de Sable d'Aghir",
          story: "Nos graines de sésame sont délicatement dorées à la poêle d'argile, libérant des huiles essentielles riches qui enveloppent nos biscuits d'une armure croustillante et dorée.",
          aroma: "Noisette grillée chaude, huile biologique, accents terreux",
          heritageText: "Dans les rituels traditionnels de la Méditerranée, le sésame est la clé qui ouvre les portails antiques et les trésors secrets, symbolisant le passage spirituel.",
        },
        honey: {
          name: "Miel de Thym Sauvage",
          origin: "Collines de Ghar el Melh",
          story: "Récolté par des apiculteurs nomades, ce miel ambré et corsé regorge d'essences de thym sauvage, de romarin et d'eucalyptus. Il lie notre farine avec une douceur florale complexe.",
          aroma: "Parfum floral, herbes médicinales, pierre cuite par le soleil",
          heritageText: "L'apiculture en Tunisie remonte aux Phéniciens, époque où le miel était considéré comme le nectar des dieux, utilisé pour les offrandes sacrées et la conservation.",
        },
      },
    },
    experiences: {
      badge: "Liturgie Sensorielle",
      title: "Ateliers Maison THYNA",
      subtitle: "Entrez dans notre cuisine vivante et ressentez le rythme du pétrissage ancestral.",
      quote: "\"La main doit apprendre ce que les yeux ont oublié. Rejoignez-nous à l'ombre de nos oliviers centenaires.\"",
      featuresBadge: "Préservation du Geste",
      featuresTitle: "Les Piliers de nos Ateliers",
      featuresDesc: "Chaque réservation soutient directement la préservation archéologique locale et garantit un salaire juste aux familles agricoles de Djerba.",
      highlightsTitle: "Points Forts de l'Atelier",
      vibeTitle: "L'Atmosphère",
      btnReserve: "Demander une Réservation",
      items: {
        thyna_signature: {
          name: "Signature THYNA",
          duration: "2.5 Heures",
          description: "Un voyage immersif dans le patrimoine sensoriel de Djerba. Découvrez nos ingrédients antiques, initiez-vous au façonnage des biscuits à l'aide de tampons en bois sculptés et dégustez vos créations lors de cérémonies de thé raffinées.",
          highlights: [
            "Dégustation sensorielle guidée de nos 7 ingrédients bruts",
            "Atelier de pâtisserie interactive avec un maître artisan",
            "Cuisson authentique au four à argile",
            "Accords avec infusions d'herbes sauvages et rituels de thé",
          ],
          price: "45 EUR / personne",
          vibe: "Idéal pour les explorateurs culturels et amateurs de gastronomie désireux de maîtriser des techniques de pâtisserie millénaires.",
        },
        thyna_discovery: {
          name: "Découverte THYNA",
          duration: "1.5 Heure",
          description: "Une masterclass condensée axée sur l'origine architecturale de nos recettes. Découvrez comment la cité romaine de Meninx a inspiré notre géométrie, dégustez trois recettes historiques et repartez avec votre coffret.",
          highlights: [
            "Présentation historique sur les ruines de la cité de Meninx",
            "Vol de dégustation de 4 biscuits traditionnels",
            "Démonstration de façonnage et d'estampage traditionnel",
            "Superbe coffret de biscuits signature à emporter",
          ],
          price: "30 EUR / personne",
          vibe: "Une introduction parfaite pour les voyageurs pressés, amateurs d'authenticité et familles en quête d'un moment culturel.",
        },
        private_experience: {
          name: "Atelier Privé Héritage",
          duration: "4 Heures",
          description: "Un atelier privé exclusif et entièrement personnalisé pour les familles, les couples ou les petits groupes. Installé dans notre cour secrète à l'ombre des oliviers, cet atelier approfondit votre lien avec le geste sacré, suivi d'un déjeuner léger au coucher du soleil.",
          highlights: [
            "Usage exclusif de la magnifique cour intérieure de la Maison THYNA",
            "Masterclass individuelle avec notre Chef Pâtissier Héritage",
            "Création d'un assemblage d'ingrédients personnalisé selon vos goûts",
            "Déjeuner traditionnel djerbien raffiné en trois services avec vins locaux",
          ],
          price: "120 EUR / personne",
          vibe: "Conçu pour les célébrations spéciales, les voyages de noces et les voyageurs en quête de haute confidentialité.",
        },
        hotel_concierge: {
          name: "Ateliers Villas & Conciergeries de Luxe",
          duration: "Sur Mesure",
          description: "Nous transportons le théâtre culinaire de la Maison THYNA directement dans votre villa privée, votre yacht ou votre hôtel-boutique de luxe. Nos artisans maîtres installent un atelier sensoriel d'exception pour vos invités de marque.",
          highlights: [
            "Service sur site dans le confort de votre résidence privée",
            "Poteries, bassines de cuivre et outils traditionnels apportés par nos soins",
            "Idéal pour les réceptions haut de gamme, fêtes privées et retraites professionnelles",
            "Coordonné avec les plus grandes conciergeries de luxe de Djerba et Tunis",
          ],
          price: "Sur Demande",
          vibe: "Préféré par nos partenaires hôteliers de grand standing (Hasdrubal Prestige, Radisson, villas privées Dar).",
        },
        gift_boxes: {
          name: "Coffrets de Prestige & Cadeaux Personnalisés",
          duration: "Collection Sélectionnée",
          description: "Une présentation raffinée de nos coffrets de biscuits sculptés à la main. Parfait pour les mariages, cadeaux d'affaires, visites diplomatiques ou paniers d'exception, nous créons des coffrets en bois d'olivier gravés de motifs carthaginois.",
          highlights: [
            "Coffrets sur mesure en bois d'olivier massif, laiton ou lin tissé main",
            "Estampage géométrique personnalisé sur chaque biscuit",
            "Expédition internationale sécurisée par transporteur rapide",
            "Livret de contes et légendes sensorielles inclus dans chaque écrin",
          ],
          price: "Sur Devis",
          vibe: "Destiné aux institutions de prestige, marques de luxe et particuliers désireux d'offrir le présent culturel ultime.",
        },
      },
    },
    boutique: {
      badge: "Objets de Prestige",
      title: "La Boutique d'Héritage",
      subtitle: "Faites entrer les archives sensorielles de la Maison THYNA à votre table.",
      quote: "\"Chaque écrin est un musée tactile. Scellé à la main, livré dans les plus belles résidences du monde.\"",
      shippingBadge: "Logistique d'Exception",
      shippingTitle: "Livraison Aérienne Internationale",
      shippingDesc: "Nous expédions nos créations fraîchement cuites chaque semaine dans des coffrets en bois précieux pour préserver leur géométrie et leur parfum délicat.",
      categories: {
        all: "Tous les Objets",
        prestige: "Collections de Prestige",
        signature: "Coffrets Signature",
        tasting: "Coffrets Dégustation",
      },
      contentsLabel: "Contenu",
      btnInquire: "S'informer via la Conciergerie",
      btnInstantBuy: "Acheter & Expédier",
      securingTitle: "Une Conservation sans Compromis",
      securingText: "Nos coffrets sont scellés à la cire d'abeille naturelle et enveloppés de papier biologique. Aucun conservateur chimique n'est utilisé ; la densité élevée de miel de thym sauvage et de sucres de dattes fait office de conservateur naturel pour préserver le moelleux pendant 30 jours.",
      features: [
        {
          title: "Bois d'Olivier Massif",
          desc: "Chaque coffret de prestige est sculpté à la main par des artisans locaux, en faisant une œuvre d'art unique.",
        },
        {
          title: "Fraîcheur Garantie",
          desc: "Cuit à la demande le mercredi suivant votre commande et expédié par transporteur express le jeudi.",
        },
        {
          title: "Sceaux Personnalisés",
          desc: "Possibilité de graver votre blason familial ou vos initiales sur nos moules traditionnels en bois.",
        },
      ],
      items: {
        coffret_meninx: {
          name: "Le Coffret Meninx",
          description: "Notre collection signature logée dans un écrin en bois d'olivier poli à la main. Contient 24 biscuits célébrant la précision géométrique de l'ancienne capitale phénicienne, façonnés avec nos sept ingrédients.",
          price: "65 EUR",
          category: "Collections de Prestige",
          contents: "24 biscuits estampés à la main (Blé ancien, Dattes, Sésame, Huile d'olive, Caroube, Miel, Orge torréfiée).",
        },
        coffret_djerba: {
          name: "L'Écrin de l'Île des Rêves",
          description: "Un coffret luxueux relié en lin façon écrin à bijoux, abritant 16 biscuits. Inspiré par les voûtes blanchies à la chaux de l'architecture d'un Menzel traditionnel. Chaque biscuit est scellé au miel sauvage.",
          price: "45 EUR",
          category: "Coffrets Signature",
          contents: "16 biscuits précieux, divisés en quatre géométries, accompagnés d'une infusion de camomille et de thym sauvage.",
        },
        les_sept_piliers: {
          name: "Les Sept Piliers de THYNA",
          description: "Un coffret dégustation minimaliste réunissant 7 biscuits géants, chacun formulé pour sublimer un seul ingrédient sacré (ex. surdosage de dattes, caroube intense, orge fumée dense).",
          price: "32 EUR",
          category: "Coffrets Dégustation",
          contents: "7 biscuits conceptuels d'exception, accompagnés de notes de dégustation et d'une carte retraçant l'origine des ingrédients.",
        },
      },
    },
    partners: {
      badge: "Guilde de l'Hospitalité",
      title: "Partenariats de Prestige",
      subtitle: "Rejoignez les grands complexes de luxe et conciergeries privées proposant les rituels de la Maison THYNA.",
      quote: "\"Nous concevons des rituels culinaires sur mesure pour les plus beaux établissements du monde.\"",
      benefitsTitle: "Pourquoi collaborer avec la Maison THYNA",
      benefit1Title: "Intégration Conciergerie Privilège",
      benefit1Desc: "Permettez à vos clients d'accéder en priorité à nos ateliers avec des créneaux hebdomadaires réservés exclusivement à vos résidences.",
      benefit2Title: "Théâtre de Villa Privée",
      benefit2Desc: "Nos artisans pâtissiers installent pressoirs, argiles et moules traditionnels directement dans les villas de vos résidents d'exception.",
      benefit3Title: "Cadeaux de Suite d'Exception",
      benefit3Desc: "De somptueux coffrets en bois d'olivier déposés en suite lors de la couverture, personnalisés aux couleurs de votre hôtel ou aux initiales du client.",
      formTitle: "Demande de Partenariat",
      formDesc: "Laissez-nous imaginer un rituel sensoriel sur mesure pour votre établissement. Renseignez vos coordonnées, et notre direction vous contactera sous 24 heures.",
      labelName: "Votre Nom & Fonction",
      labelProperty: "Établissement / Nom de l'Hôtel",
      labelEmail: "Adresse E-mail Professionnelle",
      labelPhone: "Téléphone / WhatsApp",
      labelType: "Type d'Établissement",
      optHotel: "Hôtel-Boutique / Resort de Luxe",
      optVilla: "Villa Privée / Maison d'Hôtes",
      optYacht: "Location de Yacht / Conciergerie de Luxe",
      optConcierge: "Ambassade / Institution d'État",
      labelNotes: "Vision du Partenariat & Alignement Artistique",
      btnSubmit: "Soumettre la Proposition de Partenariat",
      successTitle: "Demande Bien Reçue",
      successDesc: "Nous vous remercions pour cette démarche, **{name}**. Nous apprécions grandement la renommée et le prestige de **{property}**.",
      successSub: "Notre Direction des Partenariats reviendra vers vous très rapidement pour vous faire parvenir notre dossier de presse et organiser un vol de dégustation privé.",
      btnReset: "Soumettre une autre proposition",
    },
    contact: {
      badge: "S'assurer un Siège d'Exception",
      title: "Réservation d'Atelier",
      subtitle: "\"Nos fours à bois ne sont allumés que sur réservation. Soumettez votre demande pour vous joindre à nous sous les oliviers de Djerba.\"",
      formTitle: "Demande de Réservation",
      formDesc: "Les réservations doivent être demandées au moins 48 heures à l'avance. Aucun paiement n'est exigé aujourd'hui ; notre service d'accueil vous contactera pour valider vos préférences.",
      labelName: "Votre Nom Complet",
      labelWhatsapp: "Numéro WhatsApp",
      labelEmail: "Adresse E-mail",
      labelGuests: "Nombre d'Invités (Max 8)",
      labelDate: "Date Souhaitée",
      labelExpType: "Type d'Expérience",
      labelNotes: "Notes Sensorielles & Préférences Alimentaires",
      btnSubmit: "Envoyer la Demande de Réservation",
      successTitle: "Atelier Demandé",
      successDesc: "Chère **{name}**, votre demande de réservation pour l'expérience **{exp}** le **{date}** a bien été inscrite dans le grand registre de la Maison THYNA.",
      successSub: "Un accusé de réception et les coordonnées exactes ont été envoyés à **{email}**. Nous prendrons contact avec vous sur WhatsApp (**{whatsapp}**) pour finaliser les détails.",
      bypassTitle: "Vous souhaitez confirmer instantanément ? Envoyez votre demande pré-remplie à notre conciergerie mobile.",
      btnBypass: "Confirmer Immédiatement via WhatsApp",
      btnReset: "Soumettre une autre demande",
      detailsTitle: "Sanctuaire Maison THYNA",
      coordBadge: "Coordonnées Archéologiques",
      coordValue: "Route Côtière d'El Kantara (Site archéologique de Meninx), Djerba, Tunisie",
      phoneBadge: "Conciergerie WhatsApp",
      phoneValue: "+216 22 334 455 (Support international disponible)",
      mailBadge: "Courrier Électronique",
      mailValue: "host@maisonthyna.com • partners@maisonthyna.com",
      hoursBadge: "Heures d'Ouverture",
      hoursDays: "Du Mercredi au Dimanche : de 09h00 à 18h00",
      hoursClosed: "Fermé lundi et mardi pour la mouture traditionnelle des grains sur pierre.",
      mapBanner: "Adjacent au pont romain",
      mapBtn: "Ouvrir Google Maps",
    },
    footer: {
      pillar1Title: "Héritage",
      pillar1Desc: "Inscrit dans l'histoire d'El Kantara",
      pillar2Title: "Transmission",
      pillar2Desc: "Le geste artisanal partagé",
      pillar3Title: "Authenticité",
      pillar3Desc: "Des ingrédients purs et sauvages",
      newsletterTitle: "S'inscrire à la liste de diffusion d'héritage",
      newsletterSuccess: "Inscrit au Registre THYNA",
      newsletterPlaceholder: "VOTRE ADRESSE E-MAIL",
      contactTitle: "Sanctuaire Maison THYNA, Site de Meninx, Route de l'El Kantara, Djerba, Tunisie",
      rights: "© 2026 Maison THYNA. Sauvegarde de la pâtisserie djerbienne antique. Près des vestiges de Meninx.",
    },
  },
};
