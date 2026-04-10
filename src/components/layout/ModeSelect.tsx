import type { GameMode } from '../../types/card';

interface ModeSelectProps {
  onSelect: (mode: GameMode) => void;
}

export function ModeSelect({ onSelect }: ModeSelectProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      {/* Logo / Title */}
      <div className="text-center mb-20">
        <h1
          className="text-5xl font-black tracking-tight text-white mb-4"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          A11Y Cards
        </h1>
        <p className="text-white/60 text-lg">Learn accessibility. Collect them all.</p>
      </div>

      {/* Mode cards */}
      <div className="flex flex-col sm:flex-row gap-6 w-full max-w-xl">
        {/* Normal Mode */}
        <button
          className="flex-1 group relative rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-left transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:scale-[1.02] active:scale-[0.98]"
          aria-label="Normal mode: four answer choices per question"
          onClick={() => onSelect('normal')}
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative">
            <div className="text-5xl font-black text-white/40 mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>4</div>
            <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>Normal</h2>
            <p className="text-sm text-white/50 leading-relaxed mb-8">
              Four choices per question. Perfect for learning the fundamentals of accessibility.
            </p>
            <div className="flex gap-2">
              {['A', 'B', 'C', 'D'].map(l => (
                <span key={l} className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center text-xs font-mono text-white/40">
                  {l}
                </span>
              ))}
            </div>
          </div>
        </button>

        {/* Accessibility Pro */}
        <button
          className="flex-1 group relative rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-left transition-all duration-300 hover:border-pink-500/30 hover:bg-white/[0.06] hover:scale-[1.02] active:scale-[0.98]"
          aria-label="Accessibility Pro mode: two trickier answer choices per question"
          onClick={() => onSelect('pro')}
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative">
            <div className="text-5xl font-black text-white/40 mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>2</div>
            <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Accessibility Pro
            </h2>
            <p className="text-sm text-white/50 leading-relaxed mb-8">
              Two choices. Sounds easier? The options are trickier. For those who know their stuff.
            </p>
            <div className="flex gap-2">
              {['A', 'B'].map(l => (
                <span key={l} className="w-8 h-8 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-xs font-mono text-pink-400/60">
                  {l}
                </span>
              ))}
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
