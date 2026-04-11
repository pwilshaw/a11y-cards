import { cards } from './cards';
import type { Card } from '../types/card';

export type TitleSlide = {
  kind: 'title';
  title: string;
  color: string;
  illustration: string; // path to illustration for the section
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
  const sections: { title: string; type: string; color: string; illustration: string }[] = [
    { title: 'Fundamentals', type: 'philosophy', color: '#BE185D', illustration: '/illustrations/phi-001.png' },
    { title: 'Colour',       type: 'contrast',   color: '#7B3FA0', illustration: '/illustrations/con-003.png' },
    { title: 'Visual',       type: 'vision',      color: '#0B75B7', illustration: '/illustrations/vis-001.png' },
    { title: 'Interaction',  type: 'motor',       color: '#C05621', illustration: '/illustrations/mot-002.png' },
    { title: 'Sequence',     type: 'structure',   color: '#0F766E', illustration: '/illustrations/str-001.png' },
    { title: 'KISS',         type: 'cognition',   color: '#B7940B', illustration: '/illustrations/cog-001.png' },
  ];

  const deck: Slide[] = [];

  for (const section of sections) {
    deck.push({
      kind: 'title',
      title: section.title,
      color: section.color,
      illustration: section.illustration,
    });

    const sectionCards = cards.filter(c => c.type === section.type);
    for (const card of sectionCards) {
      deck.push({ kind: 'card', card });
    }
  }

  return deck;
}
