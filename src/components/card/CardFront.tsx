import type { Card as CardData } from '../../types/card';
import { CARD_TYPE_CONFIG, RARITY_CONFIG } from '../../types/card';
import { TypeIcon } from './TypeIcon';

export function CardFront({ card }: { card: CardData }) {
  const typeConfig = CARD_TYPE_CONFIG[card.type];
  const rarityConfig = RARITY_CONFIG[card.rarity];

  return (
    <div
      className="card__front flex flex-col"
      style={{ background: `var(--type-bg)` }}
    >
      {/* Inner border */}
      <div className="absolute inset-[3px] rounded-[inherit] border border-white/10 pointer-events-none z-10" />

      {/* Top bar: type + rarity */}
      <div className="flex items-center justify-between px-4 pt-3 pb-2 relative z-10">
        <div className="flex items-center gap-2">
          <span style={{ color: typeConfig.color }}>
            <TypeIcon type={card.type} size={18} />
          </span>
          <span
            className="text-[10px] font-bold uppercase tracking-widest"
            style={{ color: typeConfig.color }}
          >
            {typeConfig.label}
          </span>
        </div>
        <div className="flex gap-0.5">
          {Array.from({ length: rarityConfig.stars }).map((_, i) => (
            <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-400">
              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
            </svg>
          ))}
        </div>
      </div>

      {/* Title area */}
      <div className="px-4 py-3 relative z-10">
        <h3 className="text-lg font-bold leading-tight text-white">{card.title}</h3>
        {card.subtitle && (
          <p className="text-[10px] font-medium uppercase tracking-wider mt-1 opacity-60 text-white">
            {card.subtitle}
          </p>
        )}
      </div>

      {/* Decorative divider */}
      <div className="mx-4 h-px relative z-10" style={{ background: `linear-gradient(90deg, transparent, ${typeConfig.color}, transparent)` }} />

      {/* Description */}
      <div className="flex-1 px-4 py-3 relative z-10">
        <p className="text-sm leading-relaxed text-white/80">{card.description}</p>
      </div>

      {/* Bottom section: stat + flavour text */}
      <div className="px-4 pb-3 relative z-10">
        {card.stat != null && (
          <div className="flex items-center gap-2 mb-2">
            <div className="text-[10px] font-bold uppercase tracking-wider text-white/50">Power</div>
            <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full rounded-full transition-all"
                style={{
                  width: `${card.stat}%`,
                  background: `linear-gradient(90deg, ${typeConfig.color}, ${typeConfig.glow})`,
                }}
              />
            </div>
            <div className="text-xs font-bold text-white/70">{card.stat}</div>
          </div>
        )}

        {card.flavourText && (
          <p className="text-[10px] italic text-white/40 leading-snug">{card.flavourText}</p>
        )}

        {/* Card ID */}
        <div className="flex justify-between items-center mt-2">
          <span className="text-[9px] font-mono text-white/30">{card.id}</span>
          <span className="text-[9px] font-mono text-white/30">{rarityConfig.label}</span>
        </div>
      </div>

      {/* Background accent gradient */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 30% 20%, ${typeConfig.color} 0%, transparent 60%)`,
        }}
      />
    </div>
  );
}
