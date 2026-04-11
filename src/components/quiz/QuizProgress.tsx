import type { GameState } from '../../types/card';
import { cards } from '../../data/cards';

interface QuizProgressProps {
  state: GameState;
}

export function QuizProgress({ state }: QuizProgressProps) {
  const total = cards.length;
  const collected = state.collectedCardIds.length;

  return (
    <div className="flex items-center gap-5 text-base" role="status" aria-live="polite" aria-label={`Streak: ${state.currentStreak}. Score: ${state.totalCorrect} of ${state.totalAnswered}. Cards: ${collected} of ${total}.`}>
      {/* Streak */}
      <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
        <span className="text-orange-400">
          {state.currentStreak >= 3 ? '🔥' : ''}
        </span>
        <span className="text-white/60">Streak</span>
        <span className="text-white font-bold tabular-nums">{state.currentStreak}</span>
      </div>

      {/* Score */}
      <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
        <span className="text-white/60">Score</span>
        <span className="text-white font-bold tabular-nums">{state.totalCorrect}</span>
        <span className="text-white/40">/ {state.totalAnswered}</span>
      </div>

      {/* Cards collected */}
      <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
        <span className="text-white/60">Cards</span>
        <span className="text-white font-bold tabular-nums">{collected}</span>
        <span className="text-white/40">/ {total}</span>
      </div>
    </div>
  );
}
