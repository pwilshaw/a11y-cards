import { useState, useCallback } from 'react';
import type { Card as CardData } from '../../types/card';
import { CARD_TYPE_CONFIG, RARITY_CONFIG } from '../../types/card';
import { useCardInteraction } from '../../hooks/useCardInteraction';
import { CardFront } from './CardFront';
import { CardBack } from './CardBack';
import { CardShine } from './CardShine';
import { CardGlare } from './CardGlare';

import './card.css';
import './rarity-common.css';
import './rarity-uncommon.css';
import './rarity-rare.css';
import './rarity-ultra.css';
import '../../styles/card-types.css';

interface CardProps {
  card: CardData;
  flipped?: boolean;
  interactive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function Card({ card, flipped: controlledFlipped, interactive = true, className = '', style }: CardProps) {
  const { cardRef, handlers } = useCardInteraction();
  const [internalFlipped, setInternalFlipped] = useState(false);

  const isFlipped = controlledFlipped ?? internalFlipped;
  const typeConfig = CARD_TYPE_CONFIG[card.type];
  const rarityConfig = RARITY_CONFIG[card.rarity];

  const handleClick = useCallback(() => {
    if (interactive) {
      setInternalFlipped(prev => !prev);
    }
  }, [interactive]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (interactive && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      setInternalFlipped(prev => !prev);
    }
  }, [interactive]);

  return (
    <div
      ref={cardRef}
      className={`card ${isFlipped ? 'card--flipped' : ''} ${className}`}
      style={style}
      data-type={card.type}
      data-rarity={card.rarity}
      role="button"
      tabIndex={0}
      aria-label={`${card.title} — ${typeConfig.label}, ${rarityConfig.label}. ${isFlipped ? 'Showing back.' : 'Showing front.'} Press Enter to flip.`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      {...handlers}
    >
      <div className="card__translater">
        <div className="card__rotator">
          <div className="card__inner">
            <CardFront card={card} />
            <CardShine />
            <CardGlare />
            <CardBack card={card} />
          </div>
        </div>
      </div>
    </div>
  );
}
