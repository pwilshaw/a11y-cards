export type CardType = 'contrast' | 'vision' | 'motor' | 'cognition' | 'structure' | 'philosophy';

export type Rarity = 'common' | 'uncommon' | 'rare' | 'ultra-rare';

export type GameMode = 'easy' | 'normal' | 'pro';

export interface Card {
  id: string;
  type: CardType;
  rarity: Rarity;
  title: string;
  subtitle: string;
  description: string;
  flavourText?: string;
  stat?: number;
  illustration?: string;
}

export interface Question {
  id: string;
  cardId: string;
  question: string;
  answers: string[];
  correctIndex: number;
  explanation: string;
  hint: string;
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
  contrast:   { label: 'Colour',        color: '#7B3FA0', glow: '#C084FC' },
  vision:     { label: 'Visual',        color: '#0B75B7', glow: '#82D3F7' },
  motor:      { label: 'Interaction',   color: '#C05621', glow: '#FB923C' },
  cognition:  { label: 'KISS',          color: '#B7940B', glow: '#FCD34D' },
  structure:  { label: 'Sequence',      color: '#0F766E', glow: '#5EEAD4' },
  philosophy: { label: 'Fundamentals',  color: '#BE185D', glow: '#F472B6' },
};

export const RARITY_CONFIG: Record<Rarity, { label: string; stars: number; starColor: string }> = {
  'common':     { label: 'Common',      stars: 1, starColor: '#FFF830' },   // Yellow
  'uncommon':   { label: 'Rare',        stars: 2, starColor: '#FFB800' },   // Orange
  'rare':       { label: 'Ultra Rare',  stars: 3, starColor: '#FF4F81' },   // Pink
  'ultra-rare': { label: 'Legendary',   stars: 4, starColor: '#00AEEF' },   // Blue
};
