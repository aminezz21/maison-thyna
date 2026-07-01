import { useState, useEffect, FormEvent } from "react";
import { EXPERIENCES } from "../data";
import { ReservationState } from "../types";
import { Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight, MessageSquare } from "lucide-react";
import { useLanguage } from "../LanguageContext";

interface ContactViewProps {
  selectedExperienceId: string | null;
}

export default function ContactView({ selectedExperienceId }: ContactViewProps) {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState<ReservationState>({
    name: "",
    whatsapp: "",
    email: "",
    guests: 2,
    date: "",
    experienceType: "thyna_signature",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Sync pre-selected experience from state if passed
  useEffect(() => {
    if (selectedExperienceId) {
      setFormData((prev) => ({
        ...prev,
        experienceType: selectedExperienceId,
      }));
    }
  }, [selectedExperienceId]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.whatsapp && formData.email) {
      setSubmitted(true);
    }
  };

  const handleWhatsAppInstantCTA = () => {
    const selectedExpName = t.experiences.items[formData.experienceType]?.name || "THYNA Signature";
    const msg = language === "en"
      ? `Hello Maison THYNA, I would love to instantly book the "${selectedExpName}" experience on ${formData.date || "[Select Date]"} for ${formData.guests} guests. My name is ${formData.name || "[Your Name]"} and my email is ${formData.email || "[Your Email]"}.`
      : `Bonjour la Maison THYNA, j'aimerais réserver instantanément l'expérience "${selectedExpName}" le ${formData.date || "[Choisir Date]"} pour ${formData.guests} personnes. Mon nom est ${formData.name || "[Votre Nom]"} et mon email est ${formData.email || "[Votre Email]"}.`;
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/+21622334455?text=${encoded}`, "_blank", "noopener,noreferrer");
  };

  const currentSelectedExpName = t.experiences.items[formData.experienceType]?.name || "THYNA Signature";

  return (
    <div className="w-full pt-28 pb-24 bg-cream">
      {/* HEADER HERO */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-16">
        <span className="font-jost text-xs tracking-[0.2em] uppercase text-gold font-bold">
          {t.contact.badge}
        </span>
        <h2 className="font-title text-4xl sm:text-6xl text-espresso mt-2 font-bold">
          {t.contact.title}
        </h2>
        <div className="w-16 h-[1.5px] bg-terracotta mx-auto my-6" />
        <p className="font-serif text-lg sm:text-xl italic text-espresso/90 max-w-2xl mx-auto leading-relaxed">
          "{t.contact.subtitle}"
        </p>
      </section>

      {/* CORE SPLIT SECTION: FORM vs CONTACT DETAILS & MAP */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left column (lg:col-span-7): Elegant reservation form */}
        <div className="lg:col-span-7">
          <div className="glass-card p-8 md:p-10 rounded-3xl border border-gold/20 shadow-lg">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <h3 className="font-title text-2xl text-espresso font-semibold mb-2">
                    {t.contact.formTitle}
                  </h3>
                  <p className="font-serif text-xs text-espresso/70 leading-relaxed">
                    {t.contact.formDesc}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="res-name" className="font-jost text-[10px] tracking-widest uppercase font-bold text-espresso">
                      {t.contact.labelName}
                    </label>
                    <input
                      type="text"
                      id="res-name"
                      required
                      placeholder={language === "en" ? "e.g., Alexandra Moreau" : "ex: Alexandra Moreau"}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-cream border border-gold/15 rounded-xl px-4 py-3 font-serif text-sm focus:outline-none focus:border-gold transition-colors text-espresso"
                    />
                  </div>

                  {/* WhatsApp field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="res-whatsapp" className="font-jost text-[10px] tracking-widest uppercase font-bold text-espresso">
                      {t.contact.labelWhatsapp}
                    </label>
                    <input
                      type="tel"
                      id="res-whatsapp"
                      required
                      placeholder="+33 6 12 34 56 78"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="bg-cream border border-gold/15 rounded-xl px-4 py-3 font-serif text-sm focus:outline-none focus:border-gold transition-colors text-espresso"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {/* Email field */}
                  <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <label htmlFor="res-email" className="font-jost text-[10px] tracking-widest uppercase font-bold text-espresso">
                      {t.contact.labelEmail}
                    </label>
                    <input
                      type="email"
                      id="res-email"
                      required
                      placeholder={language === "en" ? "alex@boutiquetravel.com" : "alex@voyagedeprestige.com"}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-cream border border-gold/15 rounded-xl px-4 py-3 font-serif text-sm focus:outline-none focus:border-gold transition-colors text-espresso"
                    />
                  </div>

                  {/* Number of guests */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="res-guests" className="font-jost text-[10px] tracking-widest uppercase font-bold text-espresso">
                      {t.contact.labelGuests}
                    </label>
                    <input
                      type="number"
                      id="res-guests"
                      required
                      min={1}
                      max={8}
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) || 2 })}
                      className="bg-cream border border-gold/15 rounded-xl px-4 py-3 font-serif text-sm focus:outline-none focus:border-gold transition-colors text-espresso"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Date field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="res-date" className="font-jost text-[10px] tracking-widest uppercase font-bold text-espresso">
                      {t.contact.labelDate}
                    </label>
                    <input
                      type="date"
                      id="res-date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="bg-cream border border-gold/15 rounded-xl px-4 py-3 font-serif text-sm focus:outline-none focus:border-gold transition-colors text-espresso"
                    />
                  </div>

                  {/* Experience Type */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="res-experience" className="font-jost text-[10px] tracking-widest uppercase font-bold text-espresso">
                      {t.contact.labelExpType}
                    </label>
                    <select
                      id="res-experience"
                      value={formData.experienceType}
                      onChange={(e) => setFormData({ ...formData, experienceType: e.target.value })}
                      className="bg-cream border border-gold/15 rounded-xl px-4 py-3 font-serif text-sm focus:outline-none focus:border-gold transition-colors text-espresso"
                    >
                      {EXPERIENCES.map((exp) => {
                        const localExp = t.experiences.items[exp.id] || exp;
                        return (
                          <option key={exp.id} value={exp.id}>
                            {localExp.name} ({localExp.duration})
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="res-notes" className="font-jost text-[10px] tracking-widest uppercase font-bold text-espresso">
                    {t.contact.labelNotes}
                  </label>
                  <textarea
                    id="res-notes"
                    rows={4}
                    placeholder={
                      language === "en"
                        ? "Let us know of any dietary allergies, sensory preferences, or special occasions you are celebrating with us..."
                        : "Faites-nous part de vos allergies, préférences sensorielles ou occasions spéciales à célébrer..."
                    }
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="bg-cream border border-gold/15 rounded-xl px-4 py-3 font-serif text-sm focus:outline-none focus:border-gold transition-colors text-espresso"
                  />
                </div>

                {/* Submission trigger */}
                <button
                  type="submit"
                  className="w-full font-jost text-xs tracking-[0.2em] uppercase font-bold py-4 bg-olive hover:bg-dark-olive text-cream rounded-xl transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                >
                  {t.contact.btnSubmit}
                  <ArrowRight className="w-4 h-4 text-gold shrink-0" />
                </button>
              </form>
            ) : (
              <div className="text-center py-10 flex flex-col items-center justify-center gap-4">
                <CheckCircle className="w-16 h-16 text-olive" />
                <h3 className="font-title text-3xl text-espresso font-bold">
                  {t.contact.successTitle}
                </h3>
                <p className="font-serif text-base text-espresso/80 leading-relaxed max-w-md mx-auto">
                  {t.contact.successDesc
                    .replace("{name}", formData.name)
                    .replace("{exp}", currentSelectedExpName)
                    .replace("{date}", formData.date)}
                </p>
                <p className="font-serif text-xs text-espresso/60 leading-relaxed max-w-sm mx-auto">
                  {t.contact.successSub
                    .replace("{email}", formData.email)
                    .replace("{whatsapp}", formData.whatsapp)}
                </p>

                {/* Instant WhatsApp confirmation option */}
                <div className="w-full p-4 bg-secondary-cream/40 rounded-2xl border border-gold/15 text-center flex flex-col items-center gap-3 mt-4">
                  <p className="font-serif text-xs text-espresso/80 leading-relaxed">
                    {t.contact.bypassTitle}
                  </p>
                  <button
                    onClick={handleWhatsAppInstantCTA}
                    className="font-jost text-[10px] tracking-[0.2em] uppercase font-extrabold px-6 py-3 bg-espresso hover:bg-olive text-cream rounded-xl transition-all flex items-center gap-2 shadow-sm focus:outline-none"
                  >
                    {t.contact.btnBypass}
                    <MessageSquare className="w-4 h-4 text-gold" />
                  </button>
                </div>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 font-jost text-[10px] tracking-widest uppercase font-bold px-6 py-2 border border-gold/35 text-espresso hover:bg-espresso hover:text-cream rounded-full transition-all"
                >
                  {t.contact.btnReset}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right column (lg:col-span-5): Contact Info & Google Maps */}
        <div className="lg:col-span-5 flex flex-col gap-8 w-full">
          {/* Contact Details Card */}
          <div className="glass-card p-6 md:p-8 rounded-3xl border border-gold/15">
            <h4 className="font-title text-2xl text-espresso font-semibold mb-6">
              {t.contact.detailsTitle}
            </h4>
            
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-olive/10 flex items-center justify-center text-olive shrink-0">
                  <MapPin className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <span className="font-jost text-[9px] tracking-widest uppercase text-gold font-bold">
                    {t.contact.coordBadge}
                  </span>
                  <p className="font-serif text-sm text-espresso/85 mt-0.5">
                    {t.contact.coordValue}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-olive/10 flex items-center justify-center text-olive shrink-0">
                  <Phone className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <span className="font-jost text-[9px] tracking-widest uppercase text-gold font-bold">
                    {t.contact.phoneBadge}
                  </span>
                  <p className="font-serif text-sm text-espresso/85 mt-0.5">
                    {t.contact.phoneValue}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-olive/10 flex items-center justify-center text-olive shrink-0">
                  <Mail className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <span className="font-jost text-[9px] tracking-widest uppercase text-gold font-bold">
                    {t.contact.mailBadge}
                  </span>
                  <p className="font-serif text-sm text-espresso/85 mt-0.5">
                    {t.contact.mailValue}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-olive/10 flex items-center justify-center text-olive shrink-0">
                  <Clock className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <span className="font-jost text-[9px] tracking-widest uppercase text-gold font-bold">
                    {t.contact.hoursBadge}
                  </span>
                  <p className="font-serif text-sm text-espresso/85 mt-0.5 leading-relaxed">
                    {t.contact.hoursDays}<br />
                    <span className="text-xs text-olive/80 font-medium">
                      {t.contact.hoursClosed}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Integrated Google Maps Block */}
          <div className="w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-gold/15 shadow-sm relative">
            <iframe
              title="Maison THYNA Google Map Location near Ruins of Meninx"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13149.799787114777!2d10.9427672!3d33.6896222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13ab0a76fb878bbf%3A0xe5a3e143890c2957!2sMeninx%20Archaeological%20Site!5e0!3m2!1sen!2stn!4v1680000000000!5m2!1sen!2stn"
              className="w-full h-full border-none filter contrast-105 saturate-95"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Soft overlay banner */}
            <div className="absolute bottom-4 left-4 right-4 bg-espresso/95 text-[#F4EEE2] p-3 rounded-2xl border border-gold/25 flex items-center justify-between text-xs font-serif shadow-xl">
              <span>{t.contact.mapBanner}</span>
              <a
                href="https://maps.google.com/?q=Meninx+Archaeological+Site"
                target="_blank"
                rel="noreferrer"
                className="font-jost text-[9px] tracking-wider uppercase font-bold text-gold hover:text-white"
              >
                {t.contact.mapBtn}
              </a>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
