import type { GameMode } from '../../types/card';

interface ModeSelectProps {
  onSelect: (mode: GameMode) => void;
}

const modes: { key: GameMode; number: string; title: string; description: string; accent: string }[] = [
  {
    key: 'easy',
    number: '2+',
    title: 'Easy',
    description: 'Two choices per question with a hint to help you learn. Great for getting started.',
    accent: '#5EEAD4',
  },
  {
    key: 'normal',
    number: '2',
    title: 'Normal',
    description: 'Two choices per question, no hints. Test your knowledge with straightforward A/B answers.',
    accent: '#C084FC',
  },
  {
    key: 'pro',
    number: '4',
    title: 'Accessibility Pro',
    description: 'Four choices with trickier options. For those who really know their accessibility.',
    accent: '#F472B6',
  },
];

export function ModeSelect({ onSelect }: ModeSelectProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ padding: '48px' }}>
      {/* Logo */}
      <div className="text-center" style={{ marginBottom: 64 }}>
        <h1
          className="font-black tracking-tight text-white"
          style={{ fontFamily: "'Outfit', sans-serif", fontSize: 48, marginBottom: 16 }}
        >
          Accessibility for Humans
        </h1>
        <p className="text-white/60" style={{ fontSize: 20 }}>Learn accessibility. Collect them all.</p>
      </div>

      {/* Mode cards */}
      <div className="flex flex-col sm:flex-row w-full" style={{ gap: 24, maxWidth: 900 }}>
        {modes.map(mode => (
          <button
            key={mode.key}
            className="flex-1 group relative rounded-2xl border border-white/10 bg-white/[0.03] text-left transition-all duration-300 hover:bg-white/[0.06] hover:scale-[1.02] active:scale-[0.98]"
            style={{ padding: '40px 36px', minHeight: 44 }}
            aria-label={`${mode.title} mode: ${mode.description}`}
            onClick={() => onSelect(mode.key)}
          >
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background: `linear-gradient(135deg, ${mode.accent}15, transparent)` }}
            />
            <div className="relative">
              <div
                className="font-black text-white/40"
                style={{ fontFamily: "'Outfit', sans-serif", fontSize: 48, marginBottom: 24 }}
              >
                {mode.number}
              </div>
              <h2
                className="font-bold text-white"
                style={{ fontFamily: "'Outfit', sans-serif", fontSize: 24, marginBottom: 12 }}
              >
                {mode.title}
              </h2>
              <p className="text-white/50" style={{ fontSize: 16, lineHeight: 1.6 }}>
                {mode.description}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
