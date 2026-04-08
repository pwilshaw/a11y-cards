import type { Card as CardData } from '../../types/card';
import { CARD_TYPE_CONFIG } from '../../types/card';
import { TypeIcon } from './TypeIcon';

export function CardFront({ card }: { card: CardData }) {
  const typeConfig = CARD_TYPE_CONFIG[card.type];

  return (
    <div
      className="card__front"
      style={{ background: '#FF4F81' }}
    >
      {/* Lime inner area */}
      <div
        className="absolute inset-[1.4%] rounded-[16px] overflow-hidden flex flex-col"
        style={{ background: '#F2FF6C' }}
      >
        {/* Title */}
        <div style={{ padding: '15% 10% 0' }}>
          <h3
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(1.2rem, 6vw, 1.6rem)',
              lineHeight: 1.15,
              color: '#222222',
            }}
          >
            {card.title}
          </h3>
        </div>

        {/* Illustration area — type icon centred */}
        <div className="flex-1 flex items-center justify-center" style={{ padding: '5% 10%' }}>
          <div
            style={{
              width: '55%',
              aspectRatio: '1',
              borderRadius: '50%',
              background: 'rgba(0,0,0,0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ color: typeConfig.color, opacity: 0.6 }}>
              <TypeIcon type={card.type} size={64} />
            </span>
          </div>
        </div>

        {/* Decorative elements */}
        <div
          className="absolute"
          style={{
            top: '12%',
            right: '8%',
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: '#F78E05',
          }}
        />
        <div
          className="absolute"
          style={{
            top: '35%',
            left: '6%',
            width: 6,
            height: 6,
            background: '#F78E05',
            transform: 'rotate(45deg)',
          }}
        />
        <div
          className="absolute"
          style={{
            bottom: '20%',
            right: '10%',
            width: 10,
            height: 10,
            background: '#00AEEF',
            borderRadius: '2px',
            transform: 'rotate(20deg)',
          }}
        />
        <div
          className="absolute"
          style={{
            top: '50%',
            right: '15%',
            width: 5,
            height: 5,
            borderRadius: '50%',
            background: '#FF4F81',
          }}
        />
      </div>
    </div>
  );
}
