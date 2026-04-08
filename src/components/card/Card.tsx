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
  className?: string;
}

export function Card({ card, flipped = false, className = '' }: CardProps) {
  const { cardRef, handlers } = useCardInteraction();

  return (
    <div
      ref={cardRef}
      className={`card ${className}`}
      data-type={card.type}
      data-rarity={card.rarity}
      {...handlers}
    >
      <div className="card__translater">
        <div className="card__rotator">
          <div className="card__inner" style={{ transform: flipped ? 'rotateY(180deg)' : undefined }}>
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
