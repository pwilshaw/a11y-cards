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
    <header className="flex flex-col items-center gap-4 px-6 py-6 border-b border-white/10">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold text-white tracking-tight">A11Y Cards</h1>
        <span className="text-xs text-white/30 font-mono bg-white/5 px-2 py-0.5 rounded">
          {collected}/{total}
        </span>
      </div>

      {/* Nav tabs */}
      <nav className="flex gap-1 bg-white/5 rounded-lg p-1">
        <button
          className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
            currentView === 'quiz'
              ? 'bg-white/15 text-white'
              : 'text-white/50 hover:text-white/80'
          }`}
          onClick={() => onViewChange('quiz')}
        >
          Quiz
        </button>
        <button
          className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
            currentView === 'binder'
              ? 'bg-white/15 text-white'
              : 'text-white/50 hover:text-white/80'
          }`}
          onClick={() => onViewChange('binder')}
        >
          Collection
        </button>
      </nav>

      {/* Progress bar */}
      <div className="w-48 h-1 rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </header>
  );
}
