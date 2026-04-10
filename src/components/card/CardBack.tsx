import type { Card as CardData } from '../../types/card';
import { CARD_TYPE_CONFIG, RARITY_CONFIG } from '../../types/card';
import { cards } from '../../data/cards';

export function CardBack({ card }: { card: CardData }) {
  const typeConfig = CARD_TYPE_CONFIG[card.type];
  const rarityConfig = RARITY_CONFIG[card.rarity];
  const cardIndex = cards.findIndex(c => c.id === card.id) + 1;
  const totalCards = cards.length;

  return (
    <div
      className="card__back"
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '2% 11% 8%',
      }}
    >
      {/* Top row: Class + Category — matching Figma exactly */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: 12,
          lineHeight: 1,
          padding: '4% 0',
        }}
      >
        <span style={{ fontWeight: 400, color: '#552570' }}>Class</span>
        <span style={{ fontWeight: 700, color: '#333333' }}>{typeConfig.label}</span>
      </div>

      {/* Title — 24px Black, #1D0E24 */}
      <h3
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 900,
          fontSize: 'clamp(1rem, 5cqi, 1.35rem)',
          lineHeight: 1.2,
          color: '#1D0E24',
          margin: '2% 0 6%',
        }}
      >
        {card.title}
      </h3>

      {/* Subtitle — 32px Black, larger and bolder */}
      {card.subtitle && (
        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(1.1rem, 6cqi, 1.6rem)',
            lineHeight: 1.15,
            color: '#1D0E24',
            margin: '0 0 8%',
          }}
        >
          {card.subtitle}
        </p>
      )}

      {/* Description — 20px Regular */}
      <p
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 400,
          fontSize: 'clamp(0.7rem, 3.5cqi, 0.95rem)',
          lineHeight: 1.45,
          color: '#1D0E24',
          flex: 1,
        }}
      >
        {card.description}
      </p>

      {/* Bottom row: card number + rarity + star */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginTop: '4%',
        }}
      >
        <div style={{ fontSize: 12, lineHeight: 1.5 }}>
          <div style={{ fontWeight: 400, color: '#1D0E24' }}>
            {cardIndex} of {totalCards}
          </div>
          <div style={{ fontWeight: 700, color: '#552570' }}>
            {rarityConfig.label}
          </div>
        </div>

        {/* Kawaii star matching Figma */}
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path
            d="M14 2l3.5 7.5L25 11l-5.5 5 1.5 7.5L14 19.5 7 23.5l1.5-7.5L3 11l7.5-1.5L14 2z"
            fill="#FFF830"
            stroke="#1D0E24"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
          {/* Kawaii face on star */}
          <circle cx="11.5" cy="13" r="1" fill="#1D0E24" />
          <circle cx="16.5" cy="13" r="1" fill="#1D0E24" />
          <ellipse cx="10" cy="14.5" rx="1.5" ry="0.8" fill="#FF6B58" opacity="0.5" />
          <ellipse cx="18" cy="14.5" rx="1.5" ry="0.8" fill="#FF6B58" opacity="0.5" />
          <path d="M12.5 15.5 Q14 17 15.5 15.5" stroke="#1D0E24" strokeWidth="0.8" fill="none" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}
