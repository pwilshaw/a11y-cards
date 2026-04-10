import { useState, useEffect, useCallback, useMemo } from 'react';
import { CARD_TYPE_CONFIG, RARITY_CONFIG } from '../../types/card';
import { buildDeck } from '../../data/presentationDeck';
import { Card } from '../card/Card';

function TitleCard({ title, color }: { title: string; color: string }) {
  // Lighter shade for the fold/shadow
  const lightColor = color + '90';

  return (
    <div
      style={{
        width: 'var(--card-width, 280px)',
        aspectRatio: '240 / 336',
        borderRadius: 20,
        background: color,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        padding: '11%',
        boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.3)',
      }}
    >
      {/* Fold/shadow triangle */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: '15%',
          width: '45%',
          height: '85%',
          background: lightColor,
          clipPath: 'polygon(0 0, 100% 30%, 0 100%)',
        }}
      />

      {/* Section title */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h2
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(1.2rem, 6vw, 2.4rem)',
            lineHeight: 1.1,
            color: 'white',
            whiteSpace: 'nowrap',
          }}
        >
          <span style={{ opacity: 0.5, fontWeight: 700 }}>#</span>
          {title}
        </h2>
      </div>

      {/* Bottom credit */}
      <div
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '11%',
          fontSize: 'clamp(0.5rem, 2.5cqi, 0.75rem)',
          color: 'rgba(255,255,255,0.5)',
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 500,
        }}
      >
        @paulwilshaw
      </div>
    </div>
  );
}

export function PresenterScreen() {
  const deck = useMemo(() => buildDeck(), []);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const slide = deck[index];

  const goNext = useCallback(() => {
    setFlipped(false);
    setIndex(i => Math.min(i + 1, deck.length - 1));
  }, [deck.length]);

  const goPrev = useCallback(() => {
    setFlipped(false);
    setIndex(i => Math.max(i - 1, 0));
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        goNext();
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goPrev();
      }
      if (e.key === 'f' || e.key === 'Enter') {
        e.preventDefault();
        if (slide.kind === 'card') setFlipped(f => !f);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [goNext, goPrev, slide.kind]);

  const isFirst = index === 0;
  const isLast = index === deck.length - 1;

  // Get contextual info for the top bar
  let topLabel = '';
  let topColor = '';
  let topGlow = '';
  let rarityLabel = '';
  let rarityStars = '';

  if (slide.kind === 'title') {
    topLabel = slide.title;
    topColor = slide.color;
    topGlow = 'white';
  } else {
    const tc = CARD_TYPE_CONFIG[slide.card.type];
    const rc = RARITY_CONFIG[slide.card.rarity];
    topLabel = tc.label;
    topColor = tc.color;
    topGlow = tc.glow;
    rarityLabel = rc.label;
    rarityStars = '★'.repeat(rc.stars);
  }

  return (
    <div className="w-full flex flex-col items-center gap-6" style={{ maxWidth: '100vw' }}>
      {/* Top bar */}
      <div className="w-full max-w-3xl flex items-center justify-between px-2">
        <span
          className="px-3.5 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-[0.12em]"
          style={{
            background: `${topColor}15`,
            color: topGlow,
            border: `1px solid ${topColor}25`,
          }}
        >
          {slide.kind === 'title' ? 'Section' : topLabel}
        </span>

        <div className="flex items-center gap-3">
          <span className="text-xs text-white/30 font-mono tabular-nums">
            {index + 1} / {deck.length}
          </span>
          <div className="w-32 h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-300 ease-out"
              style={{
                width: `${((index + 1) / deck.length) * 100}%`,
                background: `linear-gradient(90deg, ${topColor}, ${topGlow})`,
              }}
            />
          </div>
        </div>

        <span
          className="px-3.5 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-[0.12em]"
          style={{
            background: 'rgba(255,255,255,0.04)',
            color: 'rgba(255,255,255,0.4)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          {slide.kind === 'title' ? 'Title' : `${rarityLabel} ${rarityStars}`}
        </span>
      </div>

      {/* Slide + navigation */}
      <div className="flex items-center gap-6 w-full justify-center flex-1">
        {/* Prev */}
        <button
          onClick={goPrev}
          disabled={isFirst}
          className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 shrink-0"
          style={{
            background: isFirst ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.05)',
            border: `1px solid ${isFirst ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.1)'}`,
            color: isFirst ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.6)',
            cursor: isFirst ? 'default' : 'pointer',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12 5L7 10L12 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Slide content */}
        <div
          key={index}
          className="animate-zoom-in"
          onClick={() => { if (slide.kind === 'card') setFlipped(f => !f); }}
        >
          {slide.kind === 'title' ? (
            <div style={{ '--card-width': 'min(420px, 55vh)' } as React.CSSProperties}>
              <TitleCard title={slide.title} color={slide.color} />
            </div>
          ) : (
            <Card
              card={slide.card}
              flipped={flipped}
              interactive={true}
              style={{ '--card-width': 'min(420px, 55vh)' } as React.CSSProperties}
            />
          )}
        </div>

        {/* Next */}
        <button
          onClick={goNext}
          disabled={isLast}
          className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 shrink-0"
          style={{
            background: isLast ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.05)',
            border: `1px solid ${isLast ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.1)'}`,
            color: isLast ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.6)',
            cursor: isLast ? 'default' : 'pointer',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M8 5L13 10L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Controls */}
      <div className="flex flex-col items-center gap-3">
        {slide.kind === 'card' && (
          <button
            onClick={() => setFlipped(f => !f)}
            className="px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer"
            style={{
              background: flipped ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.04)',
              color: flipped ? 'white' : 'rgba(255,255,255,0.5)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {flipped ? 'Show Front' : 'Flip to Read'}
          </button>
        )}

        <p className="text-[11px] text-white/20">
          <kbd className="px-1.5 py-0.5 rounded bg-white/[0.06] border border-white/[0.08] text-white/30 font-mono text-[10px]">&larr;</kbd>{' '}
          <kbd className="px-1.5 py-0.5 rounded bg-white/[0.06] border border-white/[0.08] text-white/30 font-mono text-[10px]">&rarr;</kbd>{' '}
          navigate{' · '}
          <kbd className="px-1.5 py-0.5 rounded bg-white/[0.06] border border-white/[0.08] text-white/30 font-mono text-[10px]">F</kbd>{' '}
          flip
        </p>
      </div>
    </div>
  );
}
