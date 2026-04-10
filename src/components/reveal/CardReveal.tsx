import { useState, useEffect } from 'react';
import type { Card as CardData } from '../../types/card';
import { Card } from '../card/Card';
import { RARITY_CONFIG, CARD_TYPE_CONFIG } from '../../types/card';

interface CardRevealProps {
  card: CardData;
  onDismiss: () => void;
}

export function CardReveal({ card, onDismiss }: CardRevealProps) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const rarityConfig = RARITY_CONFIG[card.rarity];
  const typeConfig = CARD_TYPE_CONFIG[card.type];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)' }}
      onClick={onDismiss}
    >
      <div
        className="flex flex-col items-center gap-8"
        onClick={e => e.stopPropagation()}
      >
        {/* Rarity announcement */}
        <div
          className={`text-center transition-all duration-700 ${
            revealed ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'
          }`}
        >
          <p
            className="text-[11px] font-bold uppercase tracking-[0.15em] mb-2"
            style={{ color: typeConfig.glow }}
          >
            {typeConfig.label}
          </p>
          <p className="text-3xl font-black text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>
            {rarityConfig.label}!
          </p>
        </div>

        {/* Card with entrance animation */}
        <div
          className={`transition-all duration-700 ease-out ${
            revealed
              ? 'opacity-100 scale-100 rotate-0'
              : 'opacity-0 scale-75 rotate-6'
          }`}
        >
          <Card card={card} />
        </div>

        {/* Dismiss button */}
        <button
          className={`px-8 py-2.5 rounded-xl font-semibold text-sm transition-all duration-500 cursor-pointer ${
            revealed ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: `${typeConfig.color}20`,
            color: typeConfig.glow,
            border: `1px solid ${typeConfig.color}30`,
          }}
          onClick={onDismiss}
        >
          Add to Collection
        </button>
      </div>
    </div>
  );
}
