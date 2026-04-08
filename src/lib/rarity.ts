import type { Card, Rarity } from '../types/card';

const BASE_RATES: Record<Rarity, number> = {
  'common': 0.40,
  'uncommon': 0.30,
  'rare': 0.20,
  'ultra-rare': 0.10,
};

const STREAK_RATES: Record<Rarity, number> = {
  'common': 0.25,
  'uncommon': 0.25,
  'rare': 0.25,
  'ultra-rare': 0.25,
};

export function pickRandomCard(
  allCards: Card[],
  collectedIds: string[],
  streak: number,
): Card | null {
  const rates = streak >= 3 ? STREAK_RATES : BASE_RATES;
  const uncollected = allCards.filter(c => !collectedIds.includes(c.id));

  if (uncollected.length === 0) return null;

  // Try up to 5 times to pick from weighted rarity, falling back to any uncollected
  for (let attempt = 0; attempt < 5; attempt++) {
    const rarity = rollRarity(rates);
    const pool = uncollected.filter(c => c.rarity === rarity);
    if (pool.length > 0) {
      return pool[Math.floor(Math.random() * pool.length)];
    }
  }

  // Fallback: any uncollected card
  return uncollected[Math.floor(Math.random() * uncollected.length)];
}

function rollRarity(rates: Record<Rarity, number>): Rarity {
  const roll = Math.random();
  let cumulative = 0;

  for (const [rarity, rate] of Object.entries(rates) as [Rarity, number][]) {
    cumulative += rate;
    if (roll < cumulative) return rarity;
  }

  return 'common';
}
