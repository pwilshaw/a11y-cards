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
      >
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center"
          style={{ background: 'rgba(255,255,255,0.05)' }}
        >
          <span className="text-white/20 text-sm">?</span>
        </div>
        <span className="text-[9px] text-white/20 font-mono">{card.id}</span>
        <div className="flex gap-0.5">
          {Array.from({ length: rarityConfig.stars }).map((_, i) => (
            <span key={i} className="text-[7px]" style={{ color: rarityConfig.starColor, opacity: 0.4 }}>&#9733;</span>
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
      title="Double-click to inspect"
      data-type={card.type}
    >
      {/* Illustration thumbnail — centered in middle of card */}
      {card.illustration && (
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={card.illustration}
            alt=""
            className="w-[75%] h-[55%] object-contain"
            style={{ marginTop: '10%' }}
            draggable={false}
          />
        </div>
      )}

      {/* Top: type + title */}
      <div className="absolute top-0 left-0 right-0 p-2 z-10">
        <span
          className="text-[7px] font-bold uppercase tracking-wider block mb-0.5"
          style={{ color: typeConfig.color }}
        >
          {typeConfig.label}
        </span>
        <p
          className="text-[9px] font-bold leading-tight"
          style={{ color: '#1D0E24', fontFamily: "'Outfit', sans-serif" }}
        >
          {card.title}
        </p>
      </div>

      {/* Bottom: ID + stars */}
      <div className="absolute bottom-0 left-0 right-0 p-2 flex items-center justify-between z-10">
        <span className="text-[7px] font-mono" style={{ color: 'rgba(29,14,36,0.3)' }}>{card.id}</span>
        <div className="flex gap-px">
          {Array.from({ length: rarityConfig.stars }).map((_, i) => (
            <span key={i} className="text-[8px]" style={{ color: rarityConfig.starColor }}>&#9733;</span>
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
