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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onDismiss}
    >
      <div
        className="flex flex-col items-center gap-6"
        onClick={e => e.stopPropagation()}
      >
        {/* Rarity announcement */}
        <div
          className={`text-center transition-all duration-700 ${
            revealed ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <p className="text-sm font-bold uppercase tracking-widest mb-1" style={{ color: typeConfig.color }}>
            {typeConfig.label} Type
          </p>
          <p className="text-2xl font-bold text-white">
            {rarityConfig.label}!
          </p>
        </div>

        {/* Card with entrance animation */}
        <div
          className={`transition-all duration-700 ${
            revealed
              ? 'opacity-100 scale-100 rotate-0'
              : 'opacity-0 scale-75 rotate-12'
          }`}
        >
          <Card card={card} />
        </div>

        {/* Dismiss button */}
        <button
          className={`px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-all duration-500 ${
            revealed ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={onDismiss}
        >
          Add to Collection
        </button>
      </div>
    </div>
  );
}
