import type { GameState } from '../../types/card';
import { cards } from '../../data/cards';

interface QuizProgressProps {
  state: GameState;
}

export function QuizProgress({ state }: QuizProgressProps) {
  const total = cards.length;
  const collected = state.collectedCardIds.length;

  return (
    <div className="flex items-center gap-5 text-sm">
      {/* Streak */}
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
        <span className="text-orange-400 text-xs">
          {state.currentStreak >= 3 ? '🔥' : ''}
        </span>
        <span className="text-white/40 text-xs">Streak</span>
        <span className="text-white font-bold text-sm tabular-nums">{state.currentStreak}</span>
      </div>

      {/* Score */}
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
        <span className="text-white/40 text-xs">Score</span>
        <span className="text-white font-bold text-sm tabular-nums">{state.totalCorrect}</span>
        <span className="text-white/20 text-xs">/ {state.totalAnswered}</span>
      </div>

      {/* Cards collected */}
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
        <span className="text-white/40 text-xs">Cards</span>
        <span className="text-white font-bold text-sm tabular-nums">{collected}</span>
        <span className="text-white/20 text-xs">/ {total}</span>
      </div>
    </div>
  );
}
