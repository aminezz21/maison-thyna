import { useState } from "react";
import { MessageSquare, Send } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export default function WhatsAppButton({
  phoneNumber = "+21622334455", // Mock Tunisian luxury customer support
  defaultMessage = "Hello Maison THYNA, I would love to discover your heritage cookies and reserve an authentic workshop experience in Djerba.",
}: WhatsAppButtonProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    const encodedText = encodeURIComponent(defaultMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Elegant floating tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hidden sm:flex flex-col bg-espresso text-cream p-3 rounded-2xl shadow-xl border border-gold/30 max-w-xs"
          >
            <div className="flex items-center gap-1.5 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-jost text-[10px] tracking-widest uppercase text-gold font-semibold">Atelier Concierge</span>
            </div>
            <p className="font-serif text-[12px] text-[#F4EEE2]/90 leading-relaxed">
              Have questions? Ask our Heritage Host directly via WhatsApp.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pulsing button */}
      <button
        id="whatsapp-floating-button"
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative group w-14 h-14 bg-olive hover:bg-dark-olive text-cream rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 border border-gold/25"
        aria-label="Contact Maison THYNA on WhatsApp"
      >
        {/* Glow effect */}
        <span className="absolute inset-0 rounded-full bg-olive/30 animate-ping -z-10 group-hover:bg-olive/40" />

        {/* Custom luxury SVG icon that transitions from standard Message to Send */}
        <div className="relative w-6 h-6 flex items-center justify-center">
          <MessageSquare className="w-6 h-6 absolute group-hover:scale-0 group-hover:opacity-0 transition-all duration-300" />
          <Send className="w-5 h-5 absolute scale-0 opacity-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300 text-gold" />
        </div>
      </button>
    </div>
  );
}
