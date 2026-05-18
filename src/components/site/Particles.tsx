import { useEffect, useState } from "react";

type Dot = {
  left: string;
  size: number;
  duration: number;
  delay: number;
};

export default function Particles() {
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    setDots(
      Array.from({ length: 24 }).map(() => ({
        left: `${Math.random() * 100}%`,
        size: 2 + Math.random() * 4,
        duration: 14 + Math.random() * 16,
        delay: Math.random() * 14,
      }))
    );
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d, i) => (
        <span
          key={i}
          className="absolute rounded-full"
          style={{
            left: d.left,
            bottom: "-10px",
            width: d.size,
            height: d.size,
            background: "var(--gold)",
            opacity: 0.5,
            filter: "blur(0.5px)",
            boxShadow: "0 0 12px var(--gold-soft)",
            animation: `float-up ${d.duration}s linear ${d.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
