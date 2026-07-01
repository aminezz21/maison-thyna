import { useState } from "react";
import { INGREDIENTS } from "../data";
import { Ingredient } from "../types";
import { MapPin, Compass, ShieldAlert } from "lucide-react";

interface InteractiveMapProps {
  selectedIngredientId: string | null;
  onSelectIngredient: (id: string | null) => void;
}

export default function InteractiveMap({
  selectedIngredientId,
  onSelectIngredient,
}: InteractiveMapProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Find the currently active or hovered ingredient to display its info card on the map
  const activeId = hoveredId || selectedIngredientId;
  const activeIngredient = INGREDIENTS.find((ing) => ing.id === activeId);

  return (
    <div className="relative w-full aspect-[4/3] bg-secondary-cream/30 border border-gold/20 rounded-3xl p-6 overflow-hidden shadow-sm flex flex-col justify-between">
      {/* Ancient Map Style Header */}
      <div className="flex justify-between items-start z-10 pointer-events-none">
        <div>
          <span className="font-jost text-xs tracking-[0.2em] text-gold uppercase font-medium">Cartography of Heritage</span>
          <h4 className="font-title text-2xl text-espresso mt-1">Djerba & The Gulf of Gabès</h4>
        </div>
        <div className="text-right">
          <span className="font-mono text-[10px] text-olive/70 block">LAT 33.807° N</span>
          <span className="font-mono text-[10px] text-olive/70 block">LON 10.845° E</span>
        </div>
      </div>

      {/* Map Content Container */}
      <div className="absolute inset-0 flex items-center justify-center p-8">
        {/* Stylized Djerba Island Vector */}
        <svg
          viewBox="0 0 500 400"
          className="w-full h-full max-w-lg opacity-90 drop-shadow-[0_8px_24px_rgba(92,107,61,0.08)]"
          aria-label="Interactive Map of Djerba Island"
        >
          {/* Graticule / Ancient Grid Lines */}
          <line x1="50" y1="0" x2="50" y2="400" stroke="#B08D57" strokeWidth="0.5" strokeDasharray="4 8" opacity="0.15" />
          <line x1="250" y1="0" x2="250" y2="400" stroke="#B08D57" strokeWidth="0.5" strokeDasharray="4 8" opacity="0.15" />
          <line x1="450" y1="0" x2="450" y2="400" stroke="#B08D57" strokeWidth="0.5" strokeDasharray="4 8" opacity="0.15" />
          <line x1="0" y1="100" x2="500" y2="100" stroke="#B08D57" strokeWidth="0.5" strokeDasharray="4 8" opacity="0.15" />
          <line x1="0" y1="300" x2="500" y2="300" stroke="#B08D57" strokeWidth="0.5" strokeDasharray="4 8" opacity="0.15" />

          {/* Sea Waves / Ancient flourishes */}
          <path d="M 60 70 Q 70 65 80 70 M 75 72 Q 85 67 95 72" stroke="#B08D57" strokeWidth="0.75" fill="none" opacity="0.25" />
          <path d="M 410 320 Q 420 315 430 320 M 425 322 Q 435 317 445 322" stroke="#B08D57" strokeWidth="0.75" fill="none" opacity="0.25" />
          <path d="M 120 280 Q 130 275 140 280" stroke="#B08D57" strokeWidth="0.75" fill="none" opacity="0.2" />

          {/* Compass Rose */}
          <g transform="translate(80, 310) scale(0.7)" opacity="0.4" className="animate-[spin_120s_linear_infinite]">
            <circle cx="0" cy="0" r="30" stroke="#B08D57" strokeWidth="1" fill="none" strokeDasharray="2 4" />
            <line x1="-40" y1="0" x2="40" y2="0" stroke="#B08D57" strokeWidth="1" />
            <line x1="0" y1="-40" x2="0" y2="40" stroke="#B08D57" strokeWidth="1" />
            <polygon points="0,-45 5,-10 0,0 -5,-10" fill="#3F4A29" />
            <polygon points="0,45 5,10 0,0 -5,10" fill="#B08D57" />
            <polygon points="45,0 10,5 0,0 10,-5" fill="#B08D57" />
            <polygon points="-45,0 -10,5 0,0 -10,-5" fill="#B08D57" />
          </g>

          {/* Djerba Main Coastline (Bespoke premium stylized shape) */}
          <path
            d="M 120 180 
               C 100 130, 160 80, 220 70 
               C 270 60, 350 70, 390 100 
               C 420 120, 440 160, 430 210 
               C 420 260, 390 310, 320 330 
               C 280 340, 220 310, 200 300 
               C 180 295, 140 290, 120 260 
               C 100 230, 130 200, 120 180 Z"
            fill="#ECE3D2"
            stroke="#B08D57"
            strokeWidth="1.5"
            strokeLinejoin="round"
            className="transition-colors duration-500 hover:fill-[#ECE3D2]/90"
          />

          {/* Roman Causeway to Mainland (El Kantara) */}
          <line x1="320" y1="330" x2="350" y2="390" stroke="#B08D57" strokeWidth="3" strokeDasharray="2 2" opacity="0.7" />
          <text x="355" y="375" fill="#3F4A29" className="font-jost text-[8px] tracking-wider uppercase font-medium" opacity="0.7">Roman Causeway</text>

          {/* Ancient City ruins of Meninx (Southern Coast) */}
          <g transform="translate(310, 280)" className="cursor-help group">
            <rect x="-8" y="-8" width="16" height="16" fill="none" stroke="#8B4226" strokeWidth="1" strokeDasharray="2 2" />
            <line x1="-4" y1="-4" x2="4" y2="4" stroke="#8B4226" strokeWidth="1" />
            <line x1="4" y1="-4" x2="-4" y2="4" stroke="#8B4226" strokeWidth="1" />
            <circle cx="0" cy="0" r="1.5" fill="#8B4226" />
            <text x="12" y="4" fill="#8B4226" className="font-title text-[9px] tracking-wide font-semibold italic">Meninx Ruins</text>
          </g>

          {/* Houmt Souk Capital Marker */}
          <circle cx="230" cy="100" r="4" fill="#3F4A29" />
          <circle cx="230" cy="100" r="8" fill="none" stroke="#3F4A29" strokeWidth="0.5" opacity="0.6" />
          <text x="242" y="103" fill="#3F4A29" className="font-jost text-[9px] tracking-wider uppercase font-semibold">Houmt Souk</text>

          {/* Guellala Pottery Village Marker */}
          <circle cx="190" cy="260" r="3" fill="#8B4226" />
          <text x="140" y="272" fill="#8B4226" className="font-jost text-[8px] tracking-wider uppercase font-medium">Guellala (Pottery)</text>

          {/* Midoun Olive Market */}
          <circle cx="340" cy="150" r="3" fill="#5C6B3D" />
          <text x="348" y="153" fill="#5C6B3D" className="font-jost text-[8px] tracking-wider uppercase font-medium">Midoun Groves</text>

          {/* Interactive Ingredient Pin Markers */}
          {INGREDIENTS.map((ing) => {
            // Translate standard percent coordinates to our SVG coordinate grid 0-500 x 0-400
            // Djerba map is roughly contained between X: 110-440, Y: 60-340
            const mapX = 110 + (ing.x / 100) * 310;
            const mapY = 60 + (ing.y / 100) * 260;

            const isActive = selectedIngredientId === ing.id || hoveredId === ing.id;

            return (
              <g
                key={ing.id}
                transform={`translate(${mapX}, ${mapY})`}
                className="cursor-pointer group"
                onClick={() => onSelectIngredient(ing.id === selectedIngredientId ? null : ing.id)}
                onMouseEnter={() => setHoveredId(ing.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Pulse wave animation on active pin */}
                {isActive && (
                  <circle
                    cx="0"
                    cy="0"
                    r="16"
                    fill="none"
                    stroke={ing.id === "dates" || ing.id === "honey" ? "#B08D57" : "#5C6B3D"}
                    strokeWidth="1.5"
                    className="animate-ping"
                    style={{ animationDuration: "2s" }}
                  />
                )}

                {/* Main pin node */}
                <circle
                  cx="0"
                  cy="0"
                  r={isActive ? "9" : "6"}
                  fill={isActive ? "#8B4226" : "#5C6B3D"}
                  stroke="#F4EEE2"
                  strokeWidth="1.5"
                  className="transition-all duration-300 shadow-md group-hover:scale-125"
                />

                {/* Tiny inner center */}
                <circle cx="0" cy="0" r="2" fill="#F4EEE2" />

                {/* Floating label */}
                <text
                  x="0"
                  y="-14"
                  textAnchor="middle"
                  fill={isActive ? "#8B4226" : "#2A211A"}
                  className={`font-jost text-[9px] font-semibold tracking-wide transition-all duration-300 ${
                    isActive ? "opacity-100 scale-105" : "opacity-40 group-hover:opacity-100"
                  }`}
                >
                  {ing.name.replace("Ancient ", "").replace("Heirloom ", "").replace("Wild ", "").replace("Djerbian ", "")}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Floating Dynamic Info Card - Lower Left */}
      <div className="z-10 w-full max-w-[280px] mt-auto">
        {activeIngredient ? (
          <div className="glass-card-dark text-[#F4EEE2] p-4 rounded-2xl shadow-xl border border-gold/30 animate-in fade-in slide-in-from-bottom-3 duration-300">
            <div className="flex justify-between items-center mb-1">
              <span className="font-jost text-[10px] tracking-widest text-gold uppercase font-medium">
                {activeIngredient.origin}
              </span>
              <span className="font-mono text-[9px] text-[#F4EEE2]/60">ID: {activeIngredient.id.toUpperCase()}</span>
            </div>
            <h5 className="font-title text-lg text-white font-medium mb-1">{activeIngredient.name}</h5>
            <p className="font-serif text-xs text-[#F4EEE2]/80 leading-relaxed mb-2 line-clamp-3">
              {activeIngredient.story}
            </p>
            <div className="border-t border-white/10 pt-2 flex items-center justify-between">
              <span className="font-jost text-[9px] text-gold uppercase tracking-wider">Aroma Notes:</span>
              <span className="font-serif text-[11px] italic text-[#F4EEE2]/90 truncate pl-2 max-w-[150px]">
                {activeIngredient.aroma}
              </span>
            </div>
          </div>
        ) : (
          <div className="glass-card p-4 rounded-2xl shadow-sm border border-gold/15 flex items-center gap-3">
            <Compass className="w-5 h-5 text-gold animate-[spin_20s_linear_infinite]" />
            <p className="font-serif text-xs text-espresso/70 leading-normal">
              Hover or tap on a golden coordinate marker to trace the origin of each sacred ingredient across the soil of Djerba.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
