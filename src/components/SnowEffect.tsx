import React, { useState, useEffect } from 'react';
import { Snowflake } from 'lucide-react';

interface SnowflakeData {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export const SnowEffect: React.FC = () => {
  const [snowEnabled, setSnowEnabled] = useState(true);
  const [flakes, setFlakes] = useState<SnowflakeData[]>([]);

  useEffect(() => {
    // Generate 28 lightweight snowflakes
    const generated: SnowflakeData[] = Array.from({ length: 28 }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage across viewport
      size: Math.random() * 10 + 8, // 8px to 18px
      duration: Math.random() * 8 + 6, // 6s to 14s fall duration
      delay: Math.random() * 5, // 0s to 5s delay
      opacity: Math.random() * 0.6 + 0.3, // 0.3 to 0.9 opacity
    }));
    setFlakes(generated);
  }, []);

  if (!snowEnabled) {
    return (
      <button
        onClick={() => setSnowEnabled(true)}
        className="fixed bottom-20 sm:bottom-6 right-3 sm:right-6 z-40 p-2.5 rounded-full bg-stone-900/90 text-amber-300 border border-amber-500/40 shadow-xl backdrop-blur-md text-xs font-semibold flex items-center gap-1.5 hover:bg-stone-800 transition-all active:scale-95"
        title="Activar ambiente navideño"
      >
        <Snowflake className="w-4 h-4 text-sky-300" />
        <span className="hidden xs:inline">Navidad</span>
      </button>
    );
  }

  return (
    <>
      {/* Floating snowflake particles */}
      <div
        className="fixed inset-0 pointer-events-none z-30 overflow-hidden"
        aria-hidden="true"
      >
        {flakes.map((f) => (
          <span
            key={f.id}
            className="absolute text-white select-none pointer-events-none"
            style={{
              left: `${f.x}%`,
              top: '-20px',
              fontSize: `${f.size}px`,
              opacity: f.opacity,
              animation: `snowFall ${f.duration}s linear infinite`,
              animationDelay: `${f.delay}s`,
            }}
          >
            ❄
          </span>
        ))}
      </div>

      {/* Floating festive button to toggle */}
      <button
        onClick={() => setSnowEnabled(false)}
        className="fixed bottom-20 sm:bottom-6 right-3 sm:right-6 z-40 px-3 py-2 rounded-full bg-stone-900/90 text-amber-300 border border-amber-500/40 shadow-xl backdrop-blur-md text-xs font-semibold flex items-center gap-1.5 hover:bg-stone-800 transition-all active:scale-95"
        title="Pausar copos de nieve"
      >
        <Snowflake className="w-4 h-4 text-sky-300 animate-spin" style={{ animationDuration: '8s' }} />
        <span className="text-[11px] font-bold">🎄 Navidad</span>
      </button>

      {/* Embedded keyframe animation */}
      <style>{`
        @keyframes snowFall {
          0% {
            transform: translateY(-20px) rotate(0deg);
          }
          50% {
            transform: translateY(50vh) translateX(15px) rotate(180deg);
          }
          100% {
            transform: translateY(105vh) translateX(-15px) rotate(360deg);
          }
        }
      `}</style>
    </>
  );
};
