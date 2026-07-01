import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let raf: number;
    let mouseX = -100, mouseY = -100;
    let ringX = -100, ringY = -100;

    const onMove = (e: MouseEvent) => { mouseX = e.clientX; mouseY = e.clientY; };

    const onEnter = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setIsPointer(
        t.tagName === "BUTTON" || t.tagName === "A" || t.closest("button") !== null || t.closest("a") !== null
      );
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`;
      }
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onEnter);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onEnter);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (typeof window !== "undefined" && !window.matchMedia("(pointer: fine)").matches) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" style={{
        transform: "translate(-100px,-100px)",
        width: isPointer ? 6 : 8,
        height: isPointer ? 6 : 8,
        background: isPointer ? "#5C6B3D" : "#B08D57",
      }} />
      <div ref={ringRef} className={`cursor-ring ${isPointer ? "hovered" : ""}`}
        style={{ transform: "translate(-100px,-100px)" }} />
    </>
  );
}
