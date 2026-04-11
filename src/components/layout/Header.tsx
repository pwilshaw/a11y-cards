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
    <header className="relative border-b border-white/[0.06]" role="banner">
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

      <div className="relative flex items-center justify-between px-8 py-6">
        {/* Left: Logo + mode */}
        <div className="flex items-center gap-4">
          <h1
            className="text-xl font-black text-white tracking-tight"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            A11Y Cards
          </h1>
          <button
            onClick={onModeChange}
            aria-label={`Current mode: ${mode === 'pro' ? 'Accessibility Pro' : 'Normal'}. Click to change.`}
            className="text-base font-bold uppercase tracking-widest rounded-lg transition-colors cursor-pointer"
            style={{
              padding: '12px 20px',
              minHeight: 44,
              background: mode === 'pro' ? 'rgba(190,24,93,0.15)' : 'rgba(255,255,255,0.06)',
              color: mode === 'pro' ? '#F472B6' : 'rgba(255,255,255,0.5)',
              border: `1px solid ${mode === 'pro' ? 'rgba(190,24,93,0.25)' : 'rgba(255,255,255,0.1)'}`,
            }}
          >
            {mode === 'pro' ? 'Pro' : 'Normal'}
          </button>
        </div>

        {/* Center: Nav tabs */}
        <nav aria-label="Main navigation" className="flex gap-1 bg-white/[0.04] rounded-2xl p-2 border border-white/[0.06]">
          {tabs.map(tab => (
            <button
              key={tab.key}
              aria-current={currentView === tab.key ? 'page' : undefined}
              className={`rounded-xl text-base font-medium transition-all duration-200 ${
                currentView === tab.key
                  ? 'bg-white/10 text-white shadow-sm'
                  : 'text-white/50 hover:text-white/70'
              }`}
              style={{ padding: '12px 24px', minHeight: 44 }}
              onClick={() => onViewChange(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Right: Collection count + progress */}
        <div className="flex items-center gap-4" aria-label={`${collected} of ${total} cards collected`}>
          <div className="w-24 h-2 rounded-full bg-white/[0.06] overflow-hidden" role="progressbar" aria-valuenow={percentage} aria-valuemin={0} aria-valuemax={100}>
            <div
              className="h-full rounded-full transition-all duration-700 ease-out"
              style={{
                width: `${percentage}%`,
                background: 'linear-gradient(90deg, #7B3FA0, #BE185D, #F78E05)',
              }}
            />
          </div>
          <span className="text-base font-mono text-white/50 tabular-nums">
            {collected}/{total}
          </span>
        </div>
      </div>
    </header>
  );
}
