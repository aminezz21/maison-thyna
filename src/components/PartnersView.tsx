import { useState, FormEvent } from "react";
import { Handshake, ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function PartnersView() {
  const { language, t } = useLanguage();
  const [partnerForm, setPartnerForm] = useState({
    name: "",
    property: "",
    whatsapp: "",
    email: "",
    partnerType: "Luxury Hotel",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (partnerForm.name && partnerForm.property) {
      setSubmitted(true);
    }
  };

  const localizedBenefits = [
    {
      title: language === "en" ? "Generous Commissions" : "Commissions Généreuses",
      description: language === "en"
        ? "Enjoy a premium 15% commission on all guest booking referrals to our Signature and Private Courtyard Ateliers, paid monthly in Euros or Dinars."
        : "Profitez d'une commission premium de 15% sur toutes les réservations d'ateliers Signature et Privés par vos clients, payée mensuellement en Euros ou Dinars."
    },
    {
      title: t.partners.benefit1Title,
      description: t.partners.benefit1Desc,
    },
    {
      title: t.partners.benefit2Title,
      description: t.partners.benefit2Desc,
    },
    {
      title: t.partners.benefit3Title,
      description: t.partners.benefit3Desc,
    }
  ];

  return (
    <div className="w-full pt-28 pb-24 bg-cream">
      {/* HEADER HERO */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-16">
        <span className="font-jost text-xs tracking-[0.2em] uppercase text-gold font-bold">
          {language === "en" ? "The Lineage Network" : "Le Réseau d'Héritage"}
        </span>
        <h2 className="font-title text-4xl sm:text-6xl text-espresso mt-2 font-bold">
          {t.partners.title}
        </h2>
        <div className="w-16 h-[1.5px] bg-terracotta mx-auto my-6" />
        <p className="font-serif text-lg sm:text-xl italic text-espresso/90 max-w-2xl mx-auto leading-relaxed">
          "{t.partners.subtitle}"
        </p>
      </section>

      {/* BENCHMARKS / STATS ROW */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <span className="font-jost text-xs tracking-[0.2em] uppercase text-olive font-bold">
            {language === "en" ? "Preserving Hospitality" : "Préserver l'Hospitalité"}
          </span>
          <h3 className="font-title text-3xl md:text-4xl text-espresso font-bold mt-2 mb-6">
            {language === "en" ? "Elevate your Guest Experiences" : "Sublimez l'Expérience de vos Invités"}
          </h3>
          <p className="font-serif text-base text-espresso/80 leading-relaxed mb-6">
            {language === "en"
              ? "Djerba has been a sanctuary of shared cultures for millennia. At Maison THYNA, we believe that luxury hospitality is built on genuine storytelling, transmission of arts, and historical density."
              : "Djerba est un sanctuaire de cultures partagées depuis des millénaires. À la Maison THYNA, nous croyons que l'hospitalité de luxe repose sur des récits authentiques, la transmission des arts et la densité historique."}
          </p>
          <p className="font-serif text-base text-espresso/80 leading-relaxed mb-8">
            {language === "en"
              ? "By partnering with Maison THYNA, your property or concierge service does not simply offer a recommendation—you open a gateway to a living museum. Whether through co-branded welcome treats in their rooms, private sunset ateliers on your pool decks, or coordinated workshop reservations, your guests will experience Tunisia on a profound sensory level."
              : "En devenant partenaire de la Maison THYNA, votre établissement ou service de conciergerie ne propose pas une simple recommandation : vous ouvrez les portes d'un musée vivant. Qu'il s'agisse de douceurs d'accueil personnalisées, d'ateliers privés au coucher du soleil sur vos terrasses ou de réservations prioritaires, vos clients vivront la Tunisie à un niveau sensoriel profond."}
          </p>

          <div className="flex items-center gap-4 p-4 bg-secondary-cream/30 rounded-2xl border border-gold/15 max-w-md">
            <Handshake className="w-8 h-8 text-gold shrink-0" />
            <div>
              <span className="font-jost text-xs tracking-wider uppercase font-bold text-espresso">
                {language === "en" ? "Official Guild Relations" : "Relations Officielles de la Guilde"}
              </span>
              <p className="font-serif text-xs text-espresso/70 leading-relaxed mt-0.5">
                {language === "en"
                  ? "We strictly register and honor guest trackability to preserve commission compliance."
                  : "Nous enregistrons et honorons rigoureusement la traçabilité des clients pour préserver les accords de commission."}
              </p>
            </div>
          </div>
        </div>

        {/* Right side: Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {localizedBenefits.map((ben, idx) => (
            <div key={idx} className="glass-card p-6 md:p-8 rounded-2xl border border-gold/15 flex flex-col gap-3">
              <span className="font-jost text-[10px] tracking-widest text-gold uppercase font-bold">Benefit 0{idx + 1}</span>
              <h4 className="font-title text-xl text-espresso font-semibold">{ben.title}</h4>
              <p className="font-serif text-xs text-espresso/75 leading-relaxed">{ben.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PARTNERSHIP COMMISSION BREAKDOWN */}
      <section className="bg-secondary-cream/30 py-16 border-t border-b border-gold/10 mb-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <span className="font-jost text-xs tracking-[0.2em] uppercase text-gold font-bold">
            {language === "en" ? "Financial Framework" : "Cadre Financier"}
          </span>
          <h3 className="font-title text-3xl text-espresso font-bold mt-1 mb-10">
            {language === "en" ? "Commission & wholesale terms" : "Commissions & Conditions de Vente"}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-cream/70 rounded-2xl border border-gold/10">
              <span className="font-jost text-[9px] tracking-widest uppercase text-olive font-bold">
                {language === "en" ? "Hotel Referral" : "Recommandation d'Hôtel"}
              </span>
              <span className="font-title text-4xl text-terracotta font-bold block my-2">15%</span>
              <p className="font-serif text-xs text-espresso/75">
                {language === "en"
                  ? "Referral commission on all booked masterclass experiences hosted at Maison THYNA."
                  : "Commission de recommandation sur toutes les expériences réservées et vécues à la Maison THYNA."}
              </p>
            </div>
            <div className="p-6 bg-cream/70 rounded-2xl border border-gold/10">
              <span className="font-jost text-[9px] tracking-widest uppercase text-olive font-bold">
                {language === "en" ? "Private Villa Atelier" : "Atelier en Villa Privée"}
              </span>
              <span className="font-title text-4xl text-terracotta font-bold block my-2">20%</span>
              <p className="font-serif text-xs text-espresso/75">
                {language === "en"
                  ? "On-site masterclass sessions coordinated for your private estate or chartered luxury yacht."
                  : "Sessions de masterclass coordonnées sur site dans votre résidence privée ou yacht de luxe."}
              </p>
            </div>
            <div className="p-6 bg-cream/70 rounded-2xl border border-gold/10">
              <span className="font-jost text-[9px] tracking-widest uppercase text-olive font-bold">
                {language === "en" ? "Prestige Wholesales" : "Vente de Prestige en Gros"}
              </span>
              <span className="font-title text-4xl text-terracotta font-bold block my-2">25% - 40%</span>
              <p className="font-serif text-xs text-espresso/75">
                {language === "en"
                  ? "Discounts on physical cookie boxes purchased as welcome amenities or seasonal B2B gifts."
                  : "Remises sur les coffrets physiques achetés comme attentions d'accueil ou cadeaux d'affaires B2B."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS FORM AND SUBMISSION */}
      <section className="max-w-3xl mx-auto px-6">
        <div className="glass-card p-8 md:p-12 rounded-3xl border border-gold/20 shadow-lg">
          <div className="text-center mb-10">
            <Sparkles className="w-6 h-6 text-gold mx-auto mb-3" />
            <span className="font-jost text-xs tracking-[0.2em] uppercase text-gold font-bold">
              {language === "en" ? "The Registry" : "Le Registre"}
            </span>
            <h3 className="font-title text-3xl text-espresso font-bold mt-1">
              {t.partners.formTitle}
            </h3>
            <p className="font-serif text-xs text-espresso/75 max-w-sm mx-auto mt-2">
              {t.partners.formDesc}
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="partner-name" className="font-jost text-[10px] tracking-widest uppercase font-bold text-espresso">
                    {t.partners.labelName}
                  </label>
                  <input
                    type="text"
                    id="partner-name"
                    required
                    placeholder="e.g., Slim Ben Abdallah"
                    value={partnerForm.name}
                    onChange={(e) => setPartnerForm({ ...partnerForm, name: e.target.value })}
                    className="bg-cream border border-gold/15 rounded-xl px-4 py-3 font-serif text-sm focus:outline-none focus:border-gold transition-colors text-espresso"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="partner-property" className="font-jost text-[10px] tracking-widest uppercase font-bold text-espresso">
                    {t.partners.labelProperty}
                  </label>
                  <input
                    type="text"
                    id="partner-property"
                    required
                    placeholder="e.g., Dar Selim Boutique Villa"
                    value={partnerForm.property}
                    onChange={(e) => setPartnerForm({ ...partnerForm, property: e.target.value })}
                    className="bg-cream border border-gold/15 rounded-xl px-4 py-3 font-serif text-sm focus:outline-none focus:border-gold transition-colors text-espresso"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="partner-type" className="font-jost text-[10px] tracking-widest uppercase font-bold text-espresso">
                    {t.partners.labelType}
                  </label>
                  <select
                    id="partner-type"
                    value={partnerForm.partnerType}
                    onChange={(e) => setPartnerForm({ ...partnerForm, partnerType: e.target.value })}
                    className="bg-cream border border-gold/15 rounded-xl px-4 py-3 font-serif text-sm focus:outline-none focus:border-gold transition-colors text-espresso"
                  >
                    <option value="Luxury Hotel">{t.partners.optHotel}</option>
                    <option value="Guest House / Villa">{t.partners.optVilla}</option>
                    <option value="Concierge Service">{t.partners.optYacht}</option>
                    <option value="Destination Management">{t.partners.optConcierge}</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="partner-whatsapp" className="font-jost text-[10px] tracking-widest uppercase font-bold text-espresso">
                    {t.partners.labelPhone}
                  </label>
                  <input
                    type="tel"
                    id="partner-whatsapp"
                    required
                    placeholder="+216 22 123 456"
                    value={partnerForm.whatsapp}
                    onChange={(e) => setPartnerForm({ ...partnerForm, whatsapp: e.target.value })}
                    className="bg-cream border border-gold/15 rounded-xl px-4 py-3 font-serif text-sm focus:outline-none focus:border-gold transition-colors text-espresso"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="partner-email" className="font-jost text-[10px] tracking-widest uppercase font-bold text-espresso">
                    {t.partners.labelEmail}
                  </label>
                  <input
                    type="email"
                    id="partner-email"
                    required
                    placeholder="concierge@luxuryvilla.com"
                    value={partnerForm.email}
                    onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                    className="bg-cream border border-gold/15 rounded-xl px-4 py-3 font-serif text-sm focus:outline-none focus:border-gold transition-colors text-espresso"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="partner-notes" className="font-jost text-[10px] tracking-widest uppercase font-bold text-espresso">
                  {t.partners.labelNotes}
                </label>
                <textarea
                  id="partner-notes"
                  rows={4}
                  placeholder={
                    language === "en"
                      ? "Tell us about your guests, approximate volume, or inquiry on co-branded wooden stamps..."
                      : "Parlez-nous de vos clients, du volume estimé ou de vos questions sur les moules co-marqués..."
                  }
                  value={partnerForm.notes}
                  onChange={(e) => setPartnerForm({ ...partnerForm, notes: e.target.value })}
                  className="bg-cream border border-gold/15 rounded-xl px-4 py-3 font-serif text-sm focus:outline-none focus:border-gold transition-colors text-espresso"
                />
              </div>

              <button
                type="submit"
                className="w-full font-jost text-xs tracking-[0.2em] uppercase font-bold py-4 bg-olive hover:bg-dark-olive text-cream rounded-xl transition-all duration-300 shadow-md flex items-center justify-center gap-2"
              >
                {t.partners.btnSubmit}
                <ArrowRight className="w-4 h-4 text-gold shrink-0" />
              </button>
            </form>
          ) : (
            <div className="text-center py-8 flex flex-col items-center justify-center gap-4">
              <CheckCircle className="w-16 h-16 text-olive" />
              <h4 className="font-title text-2xl text-espresso font-bold">
                {t.partners.successTitle}
              </h4>
              <p className="font-serif text-sm text-espresso/80 leading-relaxed max-w-sm mx-auto">
                {language === "en"
                  ? `Thank you, ${partnerForm.name}. We have securely received the partnership request for ${partnerForm.property}. Our relations host will reach out to you via WhatsApp (${partnerForm.whatsapp}) or email shortly with our official brochures.`
                  : `Merci, ${partnerForm.name}. Nous avons bien enregistré la proposition de partenariat pour ${partnerForm.property}. Notre responsable des relations vous contactera très rapidement par WhatsApp (${partnerForm.whatsapp}) ou e-mail pour partager nos brochures officielles.`}
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 font-jost text-[10px] tracking-widest uppercase font-bold px-6 py-2 border border-gold/35 text-espresso hover:bg-espresso hover:text-cream rounded-full transition-all"
              >
                {t.partners.btnReset}
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
