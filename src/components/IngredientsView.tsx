import { useState, useRef } from "react";
import { INGREDIENTS } from "../data";
import InteractiveMap from "./InteractiveMap";
import { ArrowRight, BookOpen } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function IngredientsView() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const ingredientRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const { language, t } = useLanguage();

  const handleSelectIngredient = (id: string | null) => {
    setSelectedId(id);
    if (id && ingredientRefs.current[id]) {
      // Smoothly scroll to the corresponding card on selection
      ingredientRefs.current[id]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <div className="w-full pt-28 pb-24 bg-cream">
      {/* HEADER SECTION */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-16">
        <span className="font-jost text-xs tracking-[0.2em] uppercase text-gold font-bold">
          {language === "en" ? "The Terroir of Djerba" : "Le Terroir de Djerba"}
        </span>
        <h2 className="font-title text-4xl sm:text-6xl text-espresso mt-2 font-bold">
          {t.ingredients.title}
        </h2>
        <div className="w-16 h-[1.5px] bg-terracotta mx-auto my-6" />
        <p className="font-serif text-lg sm:text-xl italic text-espresso/90 max-w-2xl mx-auto leading-relaxed">
          "{t.ingredients.subtitle}"
        </p>
      </section>

      {/* CORE SPLIT SCREEN MAP + TEXT CARDS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">
        
        {/* Left Column (lg:col-span-7): Detailed Ingredient Story Cards */}
        <div className="lg:col-span-7 flex flex-col gap-10">
          <div className="p-6 bg-secondary-cream/30 border border-gold/15 rounded-3xl mb-4">
            <h4 className="font-title text-2xl text-espresso font-semibold mb-2">
              {language === "en" ? "Our Culinary Integrity" : "Notre Intégrité Culinaire"}
            </h4>
            <p className="font-serif text-sm text-espresso/80 leading-relaxed">
              {t.ingredients.intro}
            </p>
          </div>

          {INGREDIENTS.map((ing) => {
            const isSelected = selectedId === ing.id;
            const localIng = t.ingredients.items[ing.id] || {
              name: ing.name,
              origin: ing.origin,
              story: ing.story,
              aroma: ing.aroma,
              heritageText: ing.heritageText
            };

            return (
              <div
                key={ing.id}
                ref={(el) => { ingredientRefs.current[ing.id] = el; }}
                onClick={() => setSelectedId(ing.id)}
                className={`group p-8 rounded-3xl border transition-all duration-500 cursor-pointer flex flex-col gap-6 ${
                  isSelected
                    ? "bg-secondary-cream/50 border-terracotta shadow-md scale-[1.01]"
                    : "bg-cream border-gold/15 hover:border-gold/40 hover:bg-secondary-cream/20 shadow-sm"
                }`}
              >
                {/* Image and Origin Row */}
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-sm shrink-0 border border-gold/15">
                      <img
                        src={ing.image}
                        alt={localIng.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <span className="font-jost text-[10px] tracking-widest text-gold uppercase font-bold">
                        {localIng.origin}
                      </span>
                      <h3 className="font-title text-2xl text-espresso font-bold group-hover:text-gold transition-colors mt-0.5">
                        {localIng.name}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Coordinates Badge */}
                  <div className="px-3.5 py-1.5 rounded-full bg-espresso/5 border border-gold/15 text-espresso/70 font-mono text-[10px]">
                    X: {ing.x}% / Y: {ing.y}%
                  </div>
                </div>

                {/* Cultural Story text */}
                <div className="flex flex-col gap-3">
                  <p className="font-serif text-sm text-espresso/85 leading-relaxed">
                    {localIng.story}
                  </p>
                  
                  {/* Interactive Heritage box */}
                  <div className="bg-cream/70 p-4 rounded-xl border border-gold/10 text-xs text-espresso/80 leading-normal font-serif">
                    <div className="flex items-center gap-1.5 text-terracotta font-semibold font-jost text-[10px] tracking-wider uppercase mb-1">
                      <BookOpen className="w-3.5 h-3.5 text-gold shrink-0" />
                      {language === "en" ? "Heritage Legend" : "Légende d'Héritage"}
                    </div>
                    {localIng.heritageText}
                  </div>
                </div>

                {/* Aroma & Scent profile */}
                <div className="border-t border-gold/10 pt-4 flex flex-wrap items-center justify-between gap-2">
                  <span className="font-jost text-[10px] text-olive uppercase tracking-widest font-bold">
                    {language === "en" ? "Aromatic Spectrum:" : "Spectre Aromatique :"}
                  </span>
                  <span className="font-serif text-sm italic text-espresso/80">{localIng.aroma}</span>
                </div>

                {/* Interactive Highlight Callout Indicator */}
                <div className="flex items-center gap-1.5 text-[10px] font-jost text-terracotta uppercase tracking-wider font-semibold self-end opacity-40 group-hover:opacity-100 transition-opacity">
                  <span>{language === "en" ? "Pinpoint on map" : "Localiser sur la carte"}</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column (lg:col-span-5): Sticky Interactive Djerba Map */}
        <div className="lg:col-span-5 sticky lg:top-32 w-full mt-6 lg:mt-0">
          <div className="w-full flex flex-col gap-4">
            <InteractiveMap
              selectedIngredientId={selectedId}
              onSelectIngredient={handleSelectIngredient}
            />
            <div className="text-center bg-secondary-cream/30 p-4 rounded-2xl border border-gold/15">
              <p className="font-serif text-xs text-espresso/70">
                {language === "en"
                  ? "Our master artisans use these geographical alignments to match cookies with the mineral profiles of each specific region's spring water."
                  : "Nos maîtres artisans utilisent ces alignements géographiques pour accorder nos biscuits avec le profil minéral des eaux de source de chaque région."}
              </p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
