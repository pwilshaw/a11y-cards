import type { GameState, GameMode } from '../../types/card';
import { cards } from '../../data/cards';

type View = 'quiz' | 'binder' | 'presenter';

interface HeaderProps {
  currentView: View;
  onViewChange: (view: View) => void;
  state: GameState;
  mode: GameMode;
  onModeChange: () => void;
}

export function Header({ currentView, onViewChange, state, mode, onModeChange }: HeaderProps) {
  const collected = state.collectedCardIds.length;
  const total = cards.length;
  const percentage = Math.round((collected / total) * 100);

  const tabs: { key: View; label: string }[] = [
    { key: 'quiz', label: 'Quiz' },
    { key: 'binder', label: 'Collection' },
    { key: 'presenter', label: 'Present' },
  ];

  return (
    <header className="relative border-b border-white/[0.06]">
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

      <div className="relative flex items-center justify-between px-6 py-5">
        {/* Left: Logo + mode */}
        <div className="flex items-center gap-3">
          <h1
            className="text-xl font-black text-white tracking-tight"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            A11Y Cards
          </h1>
          <button
            onClick={onModeChange}
            className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-md transition-colors cursor-pointer"
            style={{
              background: mode === 'pro' ? 'rgba(190,24,93,0.15)' : 'rgba(255,255,255,0.06)',
              color: mode === 'pro' ? '#F472B6' : 'rgba(255,255,255,0.35)',
              border: `1px solid ${mode === 'pro' ? 'rgba(190,24,93,0.25)' : 'rgba(255,255,255,0.08)'}`,
            }}
            title="Change mode"
          >
            {mode === 'pro' ? 'Pro' : 'Normal'}
          </button>
        </div>

        {/* Center: Nav tabs */}
        <nav className="flex gap-1 bg-white/[0.04] rounded-xl p-1.5 border border-white/[0.06]">
          {tabs.map(tab => (
            <button
              key={tab.key}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                currentView === tab.key
                  ? 'bg-white/10 text-white shadow-sm'
                  : 'text-white/40 hover:text-white/70'
              }`}
              onClick={() => onViewChange(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Right: Collection count + progress */}
        <div className="flex items-center gap-3">
          <div className="w-20 h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-700 ease-out"
              style={{
                width: `${percentage}%`,
                background: 'linear-gradient(90deg, #7B3FA0, #BE185D, #F78E05)',
              }}
            />
          </div>
          <span className="text-xs font-mono text-white/30 tabular-nums">
            {collected}/{total}
          </span>
        </div>
      </div>
    </header>
  );
}
