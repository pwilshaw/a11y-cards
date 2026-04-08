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
      style={{ background: '#FF4F81' }}
    >
      {/* Lime inner area */}
      <div
        className="absolute inset-[1.4%] rounded-[16px] overflow-hidden flex flex-col"
        style={{ background: '#F2FF6C', padding: '10% 8%' }}
      >
        {/* Top row: Class + Category */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6%' }}>
          <div>
            <span style={{ fontSize: '0.55rem', color: '#00AEEF', fontWeight: 700 }}>Class</span>
          </div>
          <div>
            <span style={{ fontSize: '0.55rem', color: '#222222', fontWeight: 700 }}>
              {typeConfig.label}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(1rem, 5vw, 1.3rem)',
            lineHeight: 1.2,
            color: '#222222',
            marginBottom: '5%',
          }}
        >
          {card.title}
        </h3>

        {/* Subtitle — bold, larger */}
        {card.subtitle && (
          <p
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(0.85rem, 4vw, 1.1rem)',
              lineHeight: 1.2,
              color: '#222222',
              marginBottom: '6%',
            }}
          >
            {card.subtitle}
          </p>
        )}

        {/* Description */}
        <p
          style={{
            fontSize: 'clamp(0.55rem, 2.5vw, 0.7rem)',
            lineHeight: 1.5,
            color: '#222222',
            flex: 1,
          }}
        >
          {card.description}
        </p>

        {/* Bottom row: card number + rarity */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '5%' }}>
          <div>
            <span style={{ fontSize: '0.55rem', fontWeight: 700, color: '#222222' }}>
              {cardIndex} of {totalCards}
            </span>
            <br />
            <span style={{ fontSize: '0.55rem', fontWeight: 700, color: '#FF4F81' }}>
              {rarityConfig.label}
            </span>
          </div>
          <div>
            {/* Star icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#F78E05" stroke="#222222" strokeWidth="1">
              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
