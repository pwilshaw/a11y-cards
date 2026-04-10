import type { Card as CardData } from '../../types/card';
import { CARD_TYPE_CONFIG, RARITY_CONFIG } from '../../types/card';

interface BinderSlotProps {
  card: CardData;
  collected: boolean;
  onSelect: (card: CardData) => void;
}

export function BinderSlot({ card, collected, onSelect }: BinderSlotProps) {
  const typeConfig = CARD_TYPE_CONFIG[card.type];
  const rarityConfig = RARITY_CONFIG[card.rarity];

  if (!collected) {
    return (
      <div className="aspect-[240/336] rounded-xl bg-white/5 border border-white/5 flex flex-col items-center justify-center gap-2 opacity-40">
        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
          <span className="text-white/30 text-lg">?</span>
        </div>
        <span className="text-[10px] text-white/30 font-mono">{card.id}</span>
        <div className="flex gap-0.5">
          {Array.from({ length: rarityConfig.stars }).map((_, i) => (
            <span key={i} className="text-[8px] text-white/20">★</span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <button
      className="aspect-[240/336] rounded-xl border overflow-hidden relative group cursor-pointer transition-all hover:scale-105 hover:z-10"
      style={{
        background: `var(--type-bg, ${typeConfig.color}20)`,
        borderColor: `${typeConfig.color}30`,
      }}
      onClick={() => onSelect(card)}
      data-type={card.type}
    >
      {/* Mini card preview */}
      <div className="absolute inset-0 flex flex-col p-2">
        <div className="flex items-center gap-1 mb-1">
          <span className="text-[8px] font-bold uppercase tracking-wider" style={{ color: typeConfig.color }}>
            {typeConfig.label}
          </span>
        </div>
        <p className="text-[11px] font-bold text-white leading-tight flex-1">{card.title}</p>
        <div className="flex items-center justify-between">
          <span className="text-[8px] font-mono text-white/30">{card.id}</span>
          <div className="flex gap-0.5">
            {Array.from({ length: rarityConfig.stars }).map((_, i) => (
              <span key={i} className="text-[8px] text-yellow-400">★</span>
            ))}
          </div>
        </div>
      </div>

      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity"
        style={{ background: `radial-gradient(ellipse at center, ${typeConfig.glow}, transparent 70%)` }}
      />
    </button>
  );
}
