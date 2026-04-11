import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { CARD_TYPE_CONFIG, RARITY_CONFIG } from '../../types/card';
import { buildDeck } from '../../data/presentationDeck';
import { Card } from '../card/Card';
import { useCardInteraction } from '../../hooks/useCardInteraction';

function TitleCard({ title, color, illustration }: { title: string; color: string; illustration: string }) {
  const { cardRef, handlers } = useCardInteraction();
  const lightColor = color + '90';

  return (
    <div
      ref={cardRef}
      className="card"
      style={{
        '--card-width': 'min(520px, 65vh)',
      } as React.CSSProperties}
      {...handlers}
    >
      <div className="card__translater">
        <div className="card__rotator">
          <div className="card__inner">
            <div
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: 20,
                background: color,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                padding: '11%',
                boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.3)',
                border: `4px solid ${lightColor}`,
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
              <div style={{ position: 'relative', zIndex: 2 }}>
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

              {/* Illustration — parallax via CSS variable */}
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                <img
                  className="card__illustration"
                  src={illustration}
                  alt=""
                  draggable={false}
                  style={{
                    width: '85%',
                    height: '85%',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.3))',
                  }}
                />
              </div>

              {/* Bottom credit */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 2,
                  fontSize: 16,
                  color: 'rgba(255,255,255,0.5)',
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 500,
                }}
              >
                @paulwilshaw
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PresenterScreen() {
  const deck = useMemo(() => buildDeck(), []);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const slide = deck[index];

  const goNext = useCallback(() => {
    setFlipped(false);
    setIndex(i => Math.min(i + 1, deck.length - 1));
  }, [deck.length]);

  const goPrev = useCallback(() => {
    setFlipped(false);
    setIndex(i => Math.max(i - 1, 0));
  }, []);

  // Focus container on mount for keyboard nav
  useEffect(() => {
    containerRef.current?.focus();
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
      // Home / End to jump to start / end
      if (e.key === 'Home') {
        e.preventDefault();
        setFlipped(false);
        setIndex(0);
      }
      if (e.key === 'End') {
        e.preventDefault();
        setFlipped(false);
        setIndex(deck.length - 1);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [goNext, goPrev, slide.kind, deck.length]);

  const isFirst = index === 0;
  const isLast = index === deck.length - 1;

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
    <div
      ref={containerRef}
      tabIndex={-1}
      className="w-full flex flex-col items-center"
      style={{ maxWidth: '100vw', gap: 24, outline: 'none' }}
      aria-label="Presentation mode. Use arrow keys to navigate, F to flip cards."
      role="region"
    >
      {/* Top bar */}
      <div className="w-full max-w-3xl flex items-center justify-between" style={{ padding: '0 8px' }}>
        <span
          className="rounded-xl text-base font-bold uppercase tracking-[0.12em]"
          style={{
            padding: '12px 20px',
            background: `${topColor}15`,
            color: topGlow,
            border: `1px solid ${topColor}25`,
          }}
        >
          {slide.kind === 'title' ? 'Section' : topLabel}
        </span>

        <div className="flex items-center" style={{ gap: 12 }}>
          <span className="text-base text-white/50 font-mono tabular-nums">
            {index + 1} / {deck.length}
          </span>
          <div className="w-32 h-2 rounded-full bg-white/[0.06] overflow-hidden" role="progressbar" aria-valuenow={index + 1} aria-valuemin={1} aria-valuemax={deck.length}>
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
          className="rounded-xl text-base font-bold uppercase tracking-[0.12em]"
          style={{
            padding: '12px 20px',
            background: 'rgba(255,255,255,0.04)',
            color: 'rgba(255,255,255,0.4)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          {slide.kind === 'title' ? 'Title' : `${rarityLabel} ${rarityStars}`}
        </span>
      </div>

      {/* Slide + navigation */}
      <div className="flex items-center w-full justify-center flex-1" style={{ gap: 24 }}>
        {/* Prev */}
        <button
          onClick={goPrev}
          disabled={isFirst}
          aria-label="Previous slide"
          className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-200 shrink-0"
          style={{
            background: isFirst ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.05)',
            border: `1px solid ${isFirst ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.1)'}`,
            color: isFirst ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.6)',
            cursor: isFirst ? 'default' : 'pointer',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
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
            <TitleCard title={slide.title} color={slide.color} illustration={slide.illustration} />
          ) : (
            <Card
              card={slide.card}
              flipped={flipped}
              interactive={true}
              style={{ '--card-width': 'min(520px, 65vh)' } as React.CSSProperties}
            />
          )}
        </div>

        {/* Next */}
        <button
          onClick={goNext}
          disabled={isLast}
          aria-label="Next slide"
          className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-200 shrink-0"
          style={{
            background: isLast ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.05)',
            border: `1px solid ${isLast ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.1)'}`,
            color: isLast ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.6)',
            cursor: isLast ? 'default' : 'pointer',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M8 5L13 10L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Controls */}
      <div className="flex flex-col items-center" style={{ gap: 12 }}>
        {slide.kind === 'card' && (
          <button
            onClick={() => setFlipped(f => !f)}
            aria-label={flipped ? 'Show card front' : 'Flip card to read details'}
            className="rounded-xl text-base font-medium transition-all duration-200 cursor-pointer"
            style={{
              padding: '14px 32px',
              minHeight: 48,
              background: flipped ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.04)',
              color: flipped ? 'white' : 'rgba(255,255,255,0.5)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {flipped ? 'Show Front' : 'Flip to Read'}
          </button>
        )}

        <p className="text-base text-white/50" aria-hidden="true">
          <kbd className="px-2 py-1 rounded-lg bg-white/[0.06] border border-white/[0.08] text-white/50 font-mono text-base">&larr;</kbd>{' '}
          <kbd className="px-2 py-1 rounded-lg bg-white/[0.06] border border-white/[0.08] text-white/50 font-mono text-base">&rarr;</kbd>{' '}
          navigate{' · '}
          <kbd className="px-2 py-1 rounded-lg bg-white/[0.06] border border-white/[0.08] text-white/50 font-mono text-base">F</kbd>{' '}
          flip{' · '}
          <kbd className="px-2 py-1 rounded-lg bg-white/[0.06] border border-white/[0.08] text-white/50 font-mono text-base">Home</kbd>{' '}
          <kbd className="px-2 py-1 rounded-lg bg-white/[0.06] border border-white/[0.08] text-white/50 font-mono text-base">End</kbd>
        </p>
      </div>
    </div>
  );
}
