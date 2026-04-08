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
  contrast: { label: 'Contrast', color: '#7B3FA0', glow: '#C084FC' },      // Purple
  vision: { label: 'Vision', color: '#0B75B7', glow: '#82D3F7' },          // Blue (Figma primary)
  motor: { label: 'Motor', color: '#C05621', glow: '#FB923C' },            // Orange
  cognition: { label: 'Cognition', color: '#B7940B', glow: '#FCD34D' },    // Gold
  structure: { label: 'Structure', color: '#0F766E', glow: '#5EEAD4' },    // Teal
  philosophy: { label: 'Philosophy', color: '#BE185D', glow: '#F472B6' },  // Pink
};

export const RARITY_CONFIG: Record<Rarity, { label: string; stars: number }> = {
  'common': { label: 'Common', stars: 1 },
  'uncommon': { label: 'Uncommon', stars: 2 },
  'rare': { label: 'Rare', stars: 3 },
  'ultra-rare': { label: 'Ultra Rare', stars: 4 },
};
