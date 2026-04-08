import type { GameState } from '../types/card';

const STORAGE_KEY = 'a11y-cards-state';
const CURRENT_VERSION = 1;

const DEFAULT_STATE: GameState = {
  version: CURRENT_VERSION,
  collectedCardIds: [],
  totalCorrect: 0,
  totalAnswered: 0,
  currentStreak: 0,
  bestStreak: 0,
  lastPlayedAt: new Date().toISOString(),
};

export function loadGameState(): GameState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_STATE };
    const state = JSON.parse(raw) as GameState;
    if (state.version !== CURRENT_VERSION) return { ...DEFAULT_STATE };
    return state;
  } catch {
    return { ...DEFAULT_STATE };
  }
}

export function saveGameState(state: GameState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // localStorage full or unavailable
  }
}

export function resetGameState(): void {
  localStorage.removeItem(STORAGE_KEY);
}
