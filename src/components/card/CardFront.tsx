import type { Card as CardData } from '../../types/card';
import { CARD_TYPE_CONFIG, RARITY_CONFIG } from '../../types/card';
import { TypeIcon } from './TypeIcon';

export function CardFront({ card }: { card: CardData }) {
  const typeConfig = CARD_TYPE_CONFIG[card.type];
  const rarityConfig = RARITY_CONFIG[card.rarity];

  return (
    <div className="card__front" style={{ background: '#F0FAFF' }}>
      {/* Blue inner card area */}
      <div
        className="absolute inset-[1.4%] rounded-[20px] overflow-hidden"
        style={{ background: typeConfig.color }}
      >
        {/* Diagonal light overlay — the signature Figma effect */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(215deg, transparent 45%, rgba(255,255,255,0.15) 45%, rgba(255,255,255,0.15) 100%)`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full px-[12%] pt-[8%] pb-[5%]">
          {/* Hashtag + Title */}
          <div className="flex-1">
            <span className="text-white/40 font-black text-[1.2em] mr-1">#</span>
            <h3
              className="font-black text-white leading-[1.15] inline"
              style={{
                fontSize: 'clamp(1.1rem, 5.5vw, 1.8rem)',
                fontFamily: "'Inter', 'Roboto', system-ui, sans-serif",
              }}
            >
              {card.title}
            </h3>

            {/* Description — shown below the title for cards with more text */}
            {card.description && (
              <p className="text-white/80 font-bold leading-snug mt-[8%]" style={{ fontSize: 'clamp(0.6rem, 2.8vw, 0.85rem)' }}>
                {card.description}
              </p>
            )}
          </div>

          {/* Bottom bar: type badge + rarity + card ID */}
          <div className="flex items-end justify-between mt-auto pt-[5%]">
            <div className="flex items-center gap-1.5">
              <span className="text-white/60">
                <TypeIcon type={card.type} size={14} />
              </span>
              <span className="text-[0.5rem] font-bold uppercase tracking-widest text-white/60">
                {typeConfig.label}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* Rarity stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: rarityConfig.stars }).map((_, i) => (
                  <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="text-white/50">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                  </svg>
                ))}
              </div>
              <span className="text-[0.45rem] font-mono text-white/30">{card.id}</span>
            </div>
          </div>

          {/* Stat bar for uncommon+ */}
          {card.stat != null && (
            <div className="flex items-center gap-2 mt-[4%]">
              <div className="text-[0.45rem] font-bold uppercase tracking-wider text-white/40">PWR</div>
              <div className="flex-1 h-1 rounded-full bg-white/15 overflow-hidden">
                <div
                  className="h-full rounded-full bg-white/60"
                  style={{ width: `${card.stat}%` }}
                />
              </div>
              <div className="text-[0.55rem] font-bold text-white/60 font-mono">{card.stat}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
