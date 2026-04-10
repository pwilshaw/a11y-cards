import { useState, useMemo, useEffect, useRef } from 'react';
import type { Card as CardData, CardType, Rarity, GameState } from '../../types/card';
import { cards } from '../../data/cards';
import { Card } from '../card/Card';
import { BinderSlot } from './BinderSlot';
import { BinderFilters } from './BinderFilters';

function CardInspectModal({ card, onClose }: { card: CardData; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    ref.current?.focus();
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <div
      ref={ref}
      role="dialog"
      aria-modal="true"
      aria-label={`Inspecting card: ${card.title}`}
      tabIndex={-1}
      className="fixed inset-0 z-50 flex items-center justify-center cursor-pointer"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)', outline: 'none' }}
      onClick={onClose}
    >
      <div className="animate-zoom-in" onClick={e => e.stopPropagation()}>
        <Card card={card} />
      </div>
    </div>
  );
}

interface BinderScreenProps {
  state: GameState;
}

export function BinderScreen({ state }: BinderScreenProps) {
  const [selectedType, setSelectedType] = useState<CardType | 'all'>('all');
  const [selectedRarity, setSelectedRarity] = useState<Rarity | 'all'>('all');
  const [inspectingCard, setInspectingCard] = useState<CardData | null>(null);

  const filteredCards = useMemo(() => {
    return cards.filter(card => {
      if (selectedType !== 'all' && card.type !== selectedType) return false;
      if (selectedRarity !== 'all' && card.rarity !== selectedRarity) return false;
      return true;
    });
  }, [selectedType, selectedRarity]);

  const collected = state.collectedCardIds.length;
  const total = cards.length;
  const pct = Math.round((collected / total) * 100);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h2
          className="text-2xl font-black text-white mb-2"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          Collection
        </h2>
        <p className="text-sm text-white/55">
          {collected} of {total} cards ({pct}%)
        </p>
      </div>

      {/* Filters */}
      <BinderFilters
        selectedType={selectedType}
        selectedRarity={selectedRarity}
        onTypeChange={setSelectedType}
        onRarityChange={setSelectedRarity}
      />

      {/* Card grid */}
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3 mt-8">
        {filteredCards.map(card => (
          <BinderSlot
            key={card.id}
            card={card}
            collected={state.collectedCardIds.includes(card.id)}
            onDoubleClick={setInspectingCard}
          />
        ))}
      </div>

      {filteredCards.length === 0 && (
        <div className="text-center py-16 text-white/50 text-sm">
          No cards match your filters.
        </div>
      )}

      {/* Full card inspection overlay */}
      {inspectingCard && (
        <CardInspectModal card={inspectingCard} onClose={() => setInspectingCard(null)} />
      )}
    </div>
  );
}
