import type { GameState } from '../../types/card';
import { cards } from '../../data/cards';

type View = 'quiz' | 'binder';

interface HeaderProps {
  currentView: View;
  onViewChange: (view: View) => void;
  state: GameState;
}

export function Header({ currentView, onViewChange, state }: HeaderProps) {
  const collected = state.collectedCardIds.length;
  const total = cards.length;
  const percentage = Math.round((collected / total) * 100);

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-white/10">
      <div className="flex items-center gap-3">
        <h1 className="text-xl font-bold text-white">A11Y Cards</h1>
        <span className="text-xs text-white/30 font-mono">{collected}/{total}</span>
      </div>

      {/* Nav tabs */}
      <nav className="flex gap-1 bg-white/5 rounded-lg p-1">
        <button
          className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
            currentView === 'quiz'
              ? 'bg-white/15 text-white'
              : 'text-white/50 hover:text-white/80'
          }`}
          onClick={() => onViewChange('quiz')}
        >
          Quiz
        </button>
        <button
          className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
            currentView === 'binder'
              ? 'bg-white/15 text-white'
              : 'text-white/50 hover:text-white/80'
          }`}
          onClick={() => onViewChange('binder')}
        >
          Collection
        </button>
      </nav>

      {/* Streak indicator */}
      <div className="flex items-center gap-4 text-sm">
        {state.currentStreak >= 3 && (
          <span className="text-orange-400 font-bold">
            {state.currentStreak} streak!
          </span>
        )}
        <div className="w-20 h-1.5 rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </header>
  );
}
