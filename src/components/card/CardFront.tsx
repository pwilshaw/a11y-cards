import type { Card as CardData, CardType } from '../../types/card';
import { CARD_TYPE_CONFIG } from '../../types/card';
import { TypeIcon } from './TypeIcon';

/** Pattern textures per card type — Default (back) and Level 1 (mid) */
const TYPE_PATTERNS: Record<CardType, { back: string; mid: string }> = {
  philosophy: { back: '/textures/pattern-stars-pink.png',      mid: '/textures/pattern-stars-pink-l1.png' },
  contrast:   { back: '/textures/pattern-crosses-violet.png',  mid: '/textures/pattern-crosses-violet-l1.png' },
  vision:     { back: '/textures/pattern-diamonds-green.png',  mid: '/textures/pattern-diamonds-green-l1.png' },
  motor:      { back: '/textures/pattern-stars-orange.png',    mid: '/textures/pattern-stars-orange-l1.png' },
  structure:  { back: '/textures/pattern-asterisk-green.png',  mid: '/textures/pattern-asterisk-green-l1.png' },
  cognition:  { back: '/textures/pattern-diamonds-orange.png', mid: '/textures/pattern-diamonds-orange-l1.png' },
};

const FIESTA = {
  back: '/textures/pattern-fiesta.png',
  mid: '/textures/pattern-fiesta-l1.png',
};

export function CardFront({ card }: { card: CardData }) {
  const typeConfig = CARD_TYPE_CONFIG[card.type];
  const isLegendary = card.rarity === 'ultra-rare';
  const patterns = isLegendary ? FIESTA : TYPE_PATTERNS[card.type];

  return (
    <div className="card__front" style={{ padding: '11% 11% 8%', display: 'flex', flexDirection: 'column' }}>
      {/* Layer 1: Background pattern — moves slowest (deepest) */}
      <img
        className="card__pattern"
        src={patterns.back}
        alt=""
        draggable={false}
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '120%',
          height: '120%',
          transform: 'translate(-50%, -50%)',
          objectFit: 'contain',
          objectPosition: 'center',
          zIndex: 0,
          pointerEvents: 'none',
          opacity: isLegendary ? 0.85 : 0.65,
        }}
      />

      {/* Layer 2: Mid pattern — moves at medium speed */}
      <img
        className="card__pattern-mid"
        src={patterns.mid}
        alt=""
        draggable={false}
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '115%',
          height: '115%',
          transform: 'translate(-50%, -50%)',
          objectFit: 'contain',
          objectPosition: 'center',
          zIndex: 0,
          pointerEvents: 'none',
          opacity: isLegendary ? 0.9 : 0.75,
        }}
      />

      {/* Title — top left */}
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

      {/* Layer 3: Illustration — moves fastest (floats above) */}
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
