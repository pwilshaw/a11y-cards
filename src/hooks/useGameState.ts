import { useState, useCallback } from 'react';
import type { GameState } from '../types/card';
import { loadGameState, saveGameState, resetGameState } from '../lib/storage';

export function useGameState() {
  const [state, setState] = useState<GameState>(loadGameState);

  const updateState = useCallback((updater: (prev: GameState) => GameState) => {
    setState(prev => {
      const next = updater(prev);
      saveGameState(next);
      return next;
    });
  }, []);

  const collectCard = useCallback((cardId: string) => {
    updateState(prev => ({
      ...prev,
      collectedCardIds: prev.collectedCardIds.includes(cardId)
        ? prev.collectedCardIds
        : [...prev.collectedCardIds, cardId],
    }));
  }, [updateState]);

  const recordAnswer = useCallback((correct: boolean) => {
    updateState(prev => ({
      ...prev,
      totalAnswered: prev.totalAnswered + 1,
      totalCorrect: prev.totalCorrect + (correct ? 1 : 0),
      currentStreak: correct ? prev.currentStreak + 1 : 0,
      bestStreak: correct
        ? Math.max(prev.bestStreak, prev.currentStreak + 1)
        : prev.bestStreak,
      lastPlayedAt: new Date().toISOString(),
    }));
  }, [updateState]);

  const hasCard = useCallback((cardId: string) => {
    return state.collectedCardIds.includes(cardId);
  }, [state.collectedCardIds]);

  const reset = useCallback(() => {
    resetGameState();
    setState(loadGameState());
  }, []);

  return {
    state,
    collectCard,
    recordAnswer,
    hasCard,
    reset,
  };
}
