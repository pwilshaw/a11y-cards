import { cards } from './cards';
import type { Card } from '../types/card';

export type TitleSlide = {
  kind: 'title';
  title: string;
  color: string;
};

export type CardSlide = {
  kind: 'card';
  card: Card;
};

export type Slide = TitleSlide | CardSlide;

/**
 * Build the presentation deck in talk order:
 * Title slide → cards in that section, repeating for each class.
 */
export function buildDeck(): Slide[] {
  const sections: { title: string; type: string; color: string }[] = [
    { title: 'Fundamentals', type: 'philosophy', color: '#BE185D' },
    { title: 'Colour',       type: 'contrast',   color: '#7B3FA0' },
    { title: 'Visual',       type: 'vision',     color: '#0B75B7' },
    { title: 'Interaction',  type: 'motor',       color: '#C05621' },
    { title: 'Sequence',     type: 'structure',   color: '#0F766E' },
    { title: 'KISS',         type: 'cognition',   color: '#B7940B' },
  ];

  const deck: Slide[] = [];

  for (const section of sections) {
    deck.push({ kind: 'title', title: section.title, color: section.color });

    const sectionCards = cards.filter(c => c.type === section.type);
    for (const card of sectionCards) {
      deck.push({ kind: 'card', card });
    }
  }

  return deck;
}
