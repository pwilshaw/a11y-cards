export type CardType = 'contrast' | 'vision' | 'motor' | 'cognition' | 'structure' | 'philosophy';

export type Rarity = 'common' | 'uncommon' | 'rare' | 'ultra-rare';

export interface Card {
  id: string;
  type: CardType;
  rarity: Rarity;
  title: string;
  subtitle: string;
  description: string;
  flavourText?: string;
  stat?: number;
}

export interface Question {
  id: string;
  cardId: string;
  question: string;
  answers: string[];
  correctIndex: number;
  explanation: string;
  difficulty: 1 | 2 | 3;
}

export interface GameState {
  version: number;
  collectedCardIds: string[];
  totalCorrect: number;
  totalAnswered: number;
  currentStreak: number;
  bestStreak: number;
  lastPlayedAt: string;
}

export const CARD_TYPE_CONFIG: Record<CardType, { label: string; color: string; glow: string }> = {
  contrast: { label: 'Contrast', color: 'hsl(270, 60%, 50%)', glow: 'hsl(270, 80%, 75%)' },
  vision: { label: 'Vision', color: 'hsl(180, 65%, 45%)', glow: 'hsl(180, 80%, 70%)' },
  motor: { label: 'Motor', color: 'hsl(25, 90%, 55%)', glow: 'hsl(25, 100%, 70%)' },
  cognition: { label: 'Cognition', color: 'hsl(50, 90%, 55%)', glow: 'hsl(50, 100%, 75%)' },
  structure: { label: 'Structure', color: 'hsl(140, 60%, 45%)', glow: 'hsl(140, 80%, 65%)' },
  philosophy: { label: 'Philosophy', color: 'hsl(340, 70%, 55%)', glow: 'hsl(340, 90%, 75%)' },
};

export const RARITY_CONFIG: Record<Rarity, { label: string; stars: number }> = {
  'common': { label: 'Common', stars: 1 },
  'uncommon': { label: 'Uncommon', stars: 2 },
  'rare': { label: 'Rare', stars: 3 },
  'ultra-rare': { label: 'Ultra Rare', stars: 4 },
};
