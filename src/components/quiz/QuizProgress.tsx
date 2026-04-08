import type { GameState } from '../../types/card';
import { cards } from '../../data/cards';

interface QuizProgressProps {
  state: GameState;
}

export function QuizProgress({ state }: QuizProgressProps) {
  const total = cards.length;
  const collected = state.collectedCardIds.length;
  const percentage = Math.round((collected / total) * 100);

  return (
    <div className="flex items-center gap-6 text-sm">
      {/* Streak */}
      <div className="flex items-center gap-2">
        <span className="text-orange-400">
          {state.currentStreak >= 3 ? '🔥' : '⚡'}
        </span>
        <span className="text-white/70">
          Streak: <span className="text-white font-bold">{state.currentStreak}</span>
        </span>
      </div>

      {/* Score */}
      <div className="text-white/70">
        Score: <span className="text-white font-bold">{state.totalCorrect}</span>/{state.totalAnswered}
      </div>

      {/* Collection progress */}
      <div className="flex items-center gap-2">
        <span className="text-white/70">Cards:</span>
        <div className="w-24 h-2 rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <span className="text-white font-bold">{collected}/{total}</span>
      </div>
    </div>
  );
}
