import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate progress bar
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { clearInterval(interval); return 100; }
        return p + Math.random() * 12;
      });
    }, 80);

    const timer = setTimeout(() => setVisible(false), 2800);
    return () => { clearTimeout(timer); clearInterval(interval); };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          id="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9997] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "#F4EEE2" }}
        >
          {/* Ambient concentric rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            {[700, 550, 400].map((size, i) => (
              <div
                key={i}
                className="absolute rounded-full border border-gold/10"
                style={{
                  width: size,
                  height: size,
                  animation: `spin ${60 + i * 20}s linear infinite ${i % 2 === 0 ? "" : "reverse"}`,
                  borderStyle: i === 1 ? "dashed" : "solid",
                }}
              />
            ))}
          </div>

          {/* Warm radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(circle at 50% 50%, rgba(176,141,87,0.08) 0%, transparent 65%)",
            }}
          />

          {/* Main content */}
          <div className="relative flex flex-col items-center max-w-sm px-8 text-center">
            {/* SVG Olive Branch + Logo */}
            <div className="relative mb-10 flex items-center justify-center" style={{ width: 130, height: 130 }}>
              <div className="absolute inset-0 rounded-full border border-dashed border-gold/20"
                style={{ animation: "spin 40s linear infinite" }} />
              <div className="absolute inset-5 rounded-full border border-gold/10" />

              {/* Drawing olive branch SVG */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100"
                fill="none" stroke="#B08D57" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <motion.path d="M50,85 C47,68 47,48 50,15"
                  initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }} />
                {[
                  ["M48,70 C36,67 31,57 41,53 C45,52 48,60 48,70", 0.35],
                  ["M51,63 C64,60 68,51 58,47 C54,46 52,54 51,63", 0.55],
                  ["M47,50 C35,47 30,37 40,33 C44,32 47,40 47,50", 0.75],
                  ["M51,42 C64,39 69,30 59,26 C55,25 52,33 51,42", 0.95],
                  ["M50,22 C41,13 43,6 50,6 C57,6 59,13 50,22", 1.15],
                ].map(([d, delay], i) => (
                  <motion.path key={i} d={d as string}
                    initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.9 }}
                    transition={{ delay: delay as number, duration: 1.1, ease: "easeInOut" }} />
                ))}
                {/* Small berries */}
                {[[48, 63], [52, 55], [47, 43]].map(([cx, cy], i) => (
                  <motion.circle key={i} cx={cx} cy={cy} r="1.8" fill="#B08D57" stroke="none"
                    initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.7 }}
                    transition={{ delay: 0.8 + i * 0.2, duration: 0.4, ease: "backOut" }} />
                ))}
              </svg>

              {/* Monogram */}
              <motion.span
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.8, ease: "backOut" }}
                className="font-logo text-4xl z-10 pt-3"
                style={{ color: "#B08D57" }}
              >
                Th
              </motion.span>
            </div>

            {/* Brand name */}
            <motion.h1
              initial={{ opacity: 0, letterSpacing: "0.5em" }}
              animate={{ opacity: 1, letterSpacing: "0.2em" }}
              transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-title text-2xl uppercase text-espresso font-semibold mb-1"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Maison THYNA
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="font-jost text-[9px] tracking-[0.35em] uppercase text-espresso mb-8"
            >
              Djerba — Since Antiquity
            </motion.p>

            {/* Progress bar */}
            <div className="w-48 h-[1px] bg-gold/15 relative overflow-hidden rounded-full">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.3, ease: "linear" }}
                style={{ background: "linear-gradient(90deg, #B08D57, #5C6B3D)" }}
              />
            </div>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 2.2, duration: 0.6 }}
              className="font-jost text-[8px] tracking-[0.3em] uppercase mt-6"
              style={{ color: "#5C6B3D" }}
            >
              Crafting Heritage
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
