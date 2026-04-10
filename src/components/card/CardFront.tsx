import type { Card as CardData } from '../../types/card';
import { CARD_TYPE_CONFIG } from '../../types/card';
import { TypeIcon } from './TypeIcon';

export function CardFront({ card }: { card: CardData }) {
  const typeConfig = CARD_TYPE_CONFIG[card.type];

  return (
    <div className="card__front" style={{ padding: '11% 11% 8%', display: 'flex', flexDirection: 'column' }}>
      {/* Title — top left, bold dark text matching Figma */}
      <h3
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 900,
          fontSize: 'clamp(1.1rem, 5.2cqi, 1.5rem)',
          lineHeight: 1.2,
          color: '#1D0E24',
          margin: 0,
        }}
      >
        {card.title}
      </h3>

      {/* Illustration area — type icon as placeholder for kawaii art */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '5%',
        }}
      >
        <div
          style={{
            width: '50%',
            aspectRatio: '1',
            borderRadius: '50%',
            background: 'rgba(0,0,0,0.04)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span style={{ color: typeConfig.color, opacity: 0.5 }}>
            <TypeIcon type={card.type} size={56} />
          </span>
        </div>
      </div>

      {/* Scattered decorative elements matching Figma style */}
      <div style={{ position: 'absolute', top: '15%', right: '12%', width: 8, height: 8, borderRadius: '50%', background: '#F78E05' }} />
      <div style={{ position: 'absolute', top: '25%', right: '25%', width: 5, height: 5, borderRadius: '50%', background: '#FF4F81' }} />
      <div style={{ position: 'absolute', bottom: '25%', left: '8%', width: 14, height: 8, borderRadius: 4, background: '#00AEEF', transform: 'rotate(-30deg)' }} />
      <div style={{ position: 'absolute', bottom: '15%', right: '12%', width: 14, height: 8, borderRadius: 4, background: '#00AEEF', transform: 'rotate(20deg)' }} />
      <div style={{ position: 'absolute', top: '45%', left: '10%', width: 10, height: 10, background: '#F78E05', transform: 'rotate(45deg)' }} />
    </div>
  );
}
