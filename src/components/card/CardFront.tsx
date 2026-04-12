import type { Card as CardData, CardType } from '../../types/card';
import { CARD_TYPE_CONFIG } from '../../types/card';
import { TypeIcon } from './TypeIcon';

/** Pattern texture per card type */
const TYPE_PATTERNS: Record<CardType, string> = {
  philosophy: '/textures/pattern-stars-pink.png',
  contrast:   '/textures/pattern-crosses-violet.png',
  vision:     '/textures/pattern-diamonds-green.png',
  motor:      '/textures/pattern-stars-orange.png',
  structure:  '/textures/pattern-asterisk-green.png',
  cognition:  '/textures/pattern-diamonds-orange.png',
};

const FIESTA_PATTERN = '/textures/pattern-fiesta.png';

export function CardFront({ card }: { card: CardData }) {
  const typeConfig = CARD_TYPE_CONFIG[card.type];
  const isLegendary = card.rarity === 'ultra-rare';
  const patternSrc = isLegendary ? FIESTA_PATTERN : TYPE_PATTERNS[card.type];

  return (
    <div className="card__front" style={{ padding: '11% 11% 8%', display: 'flex', flexDirection: 'column' }}>
      {/* Background pattern — moves slower than illustration for parallax depth */}
      <img
        className="card__pattern"
        src={patternSrc}
        alt=""
        draggable={false}
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: '-10%',
          width: '120%',
          height: '120%',
          objectFit: 'cover',
          zIndex: 0,
          pointerEvents: 'none',
          opacity: isLegendary ? 0.9 : 0.7,
        }}
      />

      {/* Title — top left, bold dark text */}
      <h3
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 900,
          fontSize: 'clamp(1rem, 7cqi, 3rem)',
          lineHeight: 1.2,
          color: '#1D0E24',
          margin: 0,
          position: 'relative',
          zIndex: 2,
        }}
      >
        {card.title}
      </h3>

      {/* Illustration — parallax layer that moves on tilt */}
      <div
        className="card__illustration-wrapper"
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '2%',
          overflow: 'visible',
          position: 'relative',
        }}
      >
        {card.illustration ? (
          <img
            className="card__illustration"
            src={card.illustration}
            alt=""
            draggable={false}
            style={{
              width: '130%',
              height: '130%',
              objectFit: 'contain',
              position: 'relative',
              zIndex: 1,
              filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.1))',
            }}
          />
        ) : (
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
        )}
      </div>
    </div>
  );
}
