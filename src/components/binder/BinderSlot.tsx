import type { Card as CardData } from '../../types/card';
import { CARD_TYPE_CONFIG, RARITY_CONFIG } from '../../types/card';

interface BinderSlotProps {
  card: CardData;
  collected: boolean;
  onDoubleClick: (card: CardData) => void;
}

export function BinderSlot({ card, collected, onDoubleClick }: BinderSlotProps) {
  const typeConfig = CARD_TYPE_CONFIG[card.type];
  const rarityConfig = RARITY_CONFIG[card.rarity];

  if (!collected) {
    return (
      <div
        className="aspect-[240/336] rounded-xl border flex flex-col items-center justify-center gap-2 p-3"
        style={{
          background: 'rgba(255,255,255,0.015)',
          borderColor: 'rgba(255,255,255,0.04)',
          opacity: 0.45,
        }}
        aria-label={`Uncollected card: ${card.id}, ${rarityConfig.label}`}
      >
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center"
          style={{ background: 'rgba(255,255,255,0.05)' }}
        >
          <span className="text-white/30 text-base" aria-hidden="true">?</span>
        </div>
        <div className="flex gap-0.5" aria-hidden="true">
          {Array.from({ length: rarityConfig.stars }).map((_, i) => (
            <span key={i} className="text-xs" style={{ color: rarityConfig.starColor, opacity: 0.4 }}>&#9733;</span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <button
      className="aspect-[240/336] rounded-xl border overflow-hidden relative group cursor-pointer transition-all duration-200 hover:scale-105 hover:z-10"
      style={{
        background: '#F2FF6C',
        borderColor: '#FF4F81',
        borderWidth: 2,
      }}
      onDoubleClick={() => onDoubleClick(card)}
      onKeyDown={(e) => { if (e.key === 'Enter') onDoubleClick(card); }}
      aria-label={`${card.title} — ${typeConfig.label}, ${rarityConfig.label}. Press Enter to inspect.`}
      data-type={card.type}
    >
      {/* Illustration thumbnail — fills the card */}
      {card.illustration && (
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={card.illustration}
            alt=""
            className="w-[80%] h-[65%] object-contain"
            style={{ marginTop: '5%' }}
            draggable={false}
          />
        </div>
      )}

      {/* Stars at bottom — decorative, min 12px */}
      <div className="absolute bottom-0 left-0 right-0 p-2 flex items-center justify-end z-10" aria-hidden="true">
        <div className="flex gap-px">
          {Array.from({ length: rarityConfig.stars }).map((_, i) => (
            <span key={i} className="text-xs" style={{ color: rarityConfig.starColor }}>&#9733;</span>
          ))}
        </div>
      </div>

      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
        style={{ background: `radial-gradient(ellipse at center, ${typeConfig.glow}, transparent 70%)` }}
      />
    </button>
  );
}
