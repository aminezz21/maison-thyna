import { PRODUCTS } from "../data";
import { Product } from "../types";
import { ShoppingBag, Sparkles } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../LanguageContext";

export default function BoutiqueView() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("All");
  const { language, t } = useLanguage();

  const categories = [
    { id: "All", label: t.boutique.categories.all },
    { id: "Prestige Collections", label: t.boutique.categories.prestige },
    { id: "Signature Boxes", label: t.boutique.categories.signature },
    { id: "Tasting Caskets", label: t.boutique.categories.tasting },
  ];

  const filteredProducts = selectedCategoryId === "All"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === selectedCategoryId);

  const handleWhatsAppOrder = (product: Product) => {
    const localProd = t.boutique.items[product.id] || product;
    const message = language === "en"
      ? `Hello Maison THYNA, I am interested in acquiring your premium culinary product: "${localProd.name}" (${localProd.price}). Could you please share details on availability, custom engravings, and courier delivery options for my order?`
      : `Bonjour la Maison THYNA, je suis très intéressé par l'acquisition de votre création culinaire de prestige : "${localProd.name}" (${localProd.price}). Pourriez-vous me transmettre les détails de disponibilité, de gravure personnalisée et les options de livraison par coursier ?`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/+21622334455?text=${encoded}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="w-full pt-28 pb-24 bg-cream">
      {/* HEADER HERO */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-12">
        <span className="font-jost text-xs tracking-[0.2em] uppercase text-gold font-bold">
          {language === "en" ? "The Prestige Dispensary" : "Le Dispensaire de Prestige"}
        </span>
        <h2 className="font-title text-4xl sm:text-6xl text-espresso mt-2 font-bold">
          {t.boutique.title}
        </h2>
        <div className="w-16 h-[1.5px] bg-terracotta mx-auto my-6" />
        <p className="font-serif text-lg sm:text-xl italic text-espresso/90 max-w-2xl mx-auto leading-relaxed">
          "{t.boutique.subtitle}"
        </p>
      </section>

      {/* FILTER TABS */}
      <section className="max-w-5xl mx-auto px-6 mb-12 flex justify-center flex-wrap gap-2.5">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategoryId(cat.id)}
            className={`font-jost text-[10px] tracking-widest uppercase font-semibold px-5 py-2.5 rounded-full border transition-all duration-300 focus:outline-none ${
              selectedCategoryId === cat.id
                ? "bg-espresso text-cream border-espresso shadow-sm"
                : "bg-cream text-espresso/70 border-gold/15 hover:border-gold/40 hover:text-espresso"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </section>

      {/* LUXURY ORDERING INSTRUCTIONS BANNER */}
      <section className="max-w-5xl mx-auto px-6 mb-16">
        <div className="glass-card p-6 rounded-3xl border border-gold/15 flex flex-col md:flex-row items-center gap-6 justify-between">
          <div className="flex items-center gap-3.5">
            <Sparkles className="w-6 h-6 text-gold shrink-0" />
            <div>
              <h4 className="font-title text-xl text-espresso font-semibold">
                {language === "en" ? "Bespoke Artisan Gifting" : "Cadeaux d'Artisan sur Mesure"}
              </h4>
              <p className="font-serif text-xs text-espresso/75 leading-relaxed mt-0.5">
                {language === "en"
                  ? "We believe premium storytelling cannot be automated through cold online baskets. Every cookie collection is hand-packaged on order. Tap an item to order directly via private WhatsApp concierge."
                  : "Nous pensons que le récit d'un patrimoine d'exception ne peut être automatisé par de froids paniers en ligne. Chaque collection est emballée à la main sur commande. Appuyez sur un article pour commander directement via notre conciergerie privée WhatsApp."}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-olive/10 border border-olive/10 text-olive text-[10px] font-jost tracking-wider uppercase font-bold shrink-0">
            {language === "en" ? "No Automated Checkout • Handcrafted Service" : "Pas de Panier Automatisé • Service Artisanal"}
          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredProducts.map((prod) => {
          const localProd = t.boutique.items[prod.id] || {
            name: prod.name,
            description: prod.description,
            price: prod.price,
            category: prod.category,
            contents: prod.contents,
          };

          return (
            <div
              key={prod.id}
              className="group bg-secondary-cream/20 border border-gold/15 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between hover-gold-grow"
            >
              <div>
                {/* Product Image */}
                <div className="aspect-square w-full overflow-hidden relative border-b border-gold/10">
                  <img
                    src={prod.image}
                    alt={localProd.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-4 left-4 bg-espresso/90 text-gold font-jost text-[9px] tracking-widest uppercase px-3 py-1 rounded-full border border-gold/20">
                    {localProd.category}
                  </span>
                </div>

                {/* Product Details */}
                <div className="p-6 md:p-8">
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h3 className="font-title text-2xl text-espresso font-bold group-hover:text-gold transition-colors">
                      {localProd.name}
                    </h3>
                    <span className="font-jost text-sm font-extrabold text-terracotta shrink-0">
                      {localProd.price}
                    </span>
                  </div>

                  <p className="font-serif text-sm text-espresso/80 leading-relaxed mb-6">
                    {localProd.description}
                  </p>

                  {/* What's inside box layout */}
                  <div className="bg-cream/40 p-4 rounded-xl border border-gold/10 text-xs text-espresso/70 leading-normal">
                    <span className="font-jost text-[9px] tracking-wider uppercase font-bold text-olive block mb-1">
                      {t.boutique.contentsLabel}
                    </span>
                    <p className="font-serif italic">
                      {localProd.contents}
                    </p>
                  </div>
                </div>
              </div>

              {/* Ordering CTA */}
              <div className="p-6 md:p-8 pt-0 mt-auto">
                <button
                  onClick={() => handleWhatsAppOrder(prod)}
                  className="w-full group font-jost text-xs tracking-[0.2em] uppercase font-bold py-4 bg-espresso hover:bg-olive text-cream rounded-xl transition-all duration-300 flex items-center justify-center gap-2 border border-gold/15"
                >
                  {language === "en" ? "Order via WhatsApp" : "Commander via WhatsApp"}
                  <ShoppingBag className="w-4 h-4 text-gold shrink-0 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
