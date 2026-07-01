import { EXPERIENCES } from "../data";
import { Clock, Check, Calendar, Star } from "lucide-react";
import { useLanguage } from "../LanguageContext";

interface ExperiencesViewProps {
  onPageChange: (pageId: string) => void;
  onSelectExperience: (expId: string) => void;
}

export default function ExperiencesView({
  onPageChange,
  onSelectExperience,
}: ExperiencesViewProps) {
  const { language, t } = useLanguage();

  const handleBook = (expId: string) => {
    // Select the experience type in state
    onSelectExperience(expId);
    // Navigate to Contact view which houses the form
    onPageChange("contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full pt-28 pb-24 bg-cream">
      {/* HEADER HERO */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-16">
        <span className="font-jost text-xs tracking-[0.2em] uppercase text-gold font-bold">
          {language === "en" ? "Gastronomic Rituals" : "Rituels Gastronomiques"}
        </span>
        <h2 className="font-title text-4xl sm:text-6xl text-espresso mt-2 font-bold">
          {t.experiences.title}
        </h2>
        <div className="w-16 h-[1.5px] bg-terracotta mx-auto my-6" />
        <p className="font-serif text-lg sm:text-xl italic text-espresso/90 max-w-2xl mx-auto leading-relaxed">
          "{t.experiences.subtitle}"
        </p>
      </section>

      {/* CORE EXPERIENCES LIST */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col gap-16">
        
        {EXPERIENCES.map((exp, idx) => {
          const isEven = idx % 2 === 0;
          const localExp = t.experiences.items[exp.id] || {
            name: exp.name,
            duration: exp.duration,
            description: exp.description,
            highlights: exp.highlights,
            price: exp.price,
            vibe: exp.vibe,
          };

          return (
            <div
              key={exp.id}
              className={`flex flex-col lg:flex-row gap-12 items-stretch rounded-3xl overflow-hidden bg-secondary-cream/20 border border-gold/15 p-6 md:p-10 shadow-sm hover:shadow-xl transition-all duration-500`}
            >
              {/* Image Section - Alternating order on desktop */}
              <div
                className={`w-full lg:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden relative border border-gold/10 ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <img
                  src={exp.image}
                  alt={localExp.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-espresso/95 backdrop-blur-md text-gold px-4 py-2 rounded-full border border-gold/25 font-jost text-[10px] tracking-widest uppercase flex items-center gap-1.5 shadow-md">
                  <Clock className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>{localExp.duration}</span>
                </div>
              </div>

              {/* Text Narrative Section */}
              <div
                className={`w-full lg:w-1/2 flex flex-col justify-between py-2 ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="flex flex-col gap-4">
                  {/* Category / Pricing Header */}
                  <div className="flex items-center justify-between">
                    <span className="font-jost text-[10px] tracking-widest text-gold uppercase font-bold">
                      {language === "en" ? "Cultural Masterclass" : "Masterclass Culturelle"}
                    </span>
                    <span className="font-jost text-xs tracking-widest text-terracotta font-extrabold uppercase">
                      {localExp.price}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-title text-3xl text-espresso font-bold group-hover:text-gold transition-colors">
                    {localExp.name}
                  </h3>

                  {/* Vibe / Audience Callout */}
                  <p className="font-serif text-xs italic text-olive font-semibold leading-relaxed">
                    “ {localExp.vibe} ”
                  </p>

                  <div className="h-[1px] bg-gold/15 w-full my-1" />

                  {/* Description */}
                  <p className="font-serif text-sm md:text-base text-espresso/80 leading-relaxed">
                    {localExp.description}
                  </p>

                  {/* Highlights section */}
                  <div className="flex flex-col gap-2 mt-2">
                    <h5 className="font-jost text-[10px] tracking-wider uppercase font-bold text-espresso">
                      {t.experiences.highlightsTitle}
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
                      {localExp.highlights.map((hl, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                          <span className="font-serif text-xs text-espresso/80 leading-relaxed">
                            {hl}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Booking Call To Action */}
                <div className="mt-8 pt-6 border-t border-gold/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 text-gold fill-gold" />
                    <span className="font-serif text-[11px] text-espresso/60 italic">
                      {language === "en" ? "Private booking slots available weekly" : "Créneaux de réservation privés hebdomadaires"}
                    </span>
                  </div>
                  <button
                    onClick={() => handleBook(exp.id)}
                    className="w-full sm:w-auto font-jost text-xs tracking-[0.2em] uppercase font-bold px-7 py-3.5 bg-olive hover:bg-dark-olive text-cream rounded-xl transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                  >
                    {t.experiences.btnReserve}
                    <Calendar className="w-4 h-4 text-gold shrink-0" />
                  </button>
                </div>

              </div>
            </div>
          );
        })}

      </section>

      {/* ADDITIONAL DETAILS BLOCK */}
      <section className="max-w-4xl mx-auto px-6 mt-20 text-center bg-secondary-cream/30 p-8 rounded-3xl border border-gold/15">
        <h4 className="font-title text-2xl text-espresso font-semibold mb-2">
          {language === "en" ? "Important Atelier Guidelines" : "Consignes Importantes pour les Ateliers"}
        </h4>
        <p className="font-serif text-sm text-espresso/80 leading-relaxed max-w-2xl mx-auto">
          {language === "en"
            ? "To maintain the pristine cultural quality of Maison THYNA, we accommodate a maximum of 8 participants per open masterclass slot. For larger groups, corporate team events, or state gifts, please submit a request for a Private Heritage Atelier. Closed shoes and loose attire are highly recommended as we use clay wood-fired ovens."
            : "Afin de préserver la qualité culturelle exceptionnelle de la Maison THYNA, nous accueillons un maximum de 8 participants par atelier public. Pour les groupes plus importants, séminaires ou cadeaux d'État, veuillez faire une demande d'Atelier Privé. Des chaussures fermées et des vêtements confortables sont recommandés pour manipuler nos fours en argile chauffés au feu de bois."}
        </p>
      </section>
    </div>
  );
}
