import { useState, useCallback } from 'react';
import type { Card as CardData } from '../../types/card';
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
}

export function Card({ card, flipped: controlledFlipped, interactive = true, className = '' }: CardProps) {
  const { cardRef, handlers } = useCardInteraction();
  const [internalFlipped, setInternalFlipped] = useState(false);

  const isFlipped = controlledFlipped ?? internalFlipped;

  const handleClick = useCallback(() => {
    if (interactive) {
      setInternalFlipped(prev => !prev);
    }
  }, [interactive]);

  return (
    <div
      ref={cardRef}
      className={`card ${isFlipped ? 'card--flipped' : ''} ${className}`}
      data-type={card.type}
      data-rarity={card.rarity}
      onClick={handleClick}
      {...handlers}
    >
      <div className="card__translater">
        <div className="card__rotator">
          <div className="card__inner">
            <CardFront card={card} />
            <CardShine />
            <CardGlare />
            <CardBack />
          </div>
        </div>
      </div>
    </div>
  );
}
