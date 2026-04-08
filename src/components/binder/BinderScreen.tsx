import { useState, useMemo } from 'react';
import type { Card as CardData, CardType, Rarity, GameState } from '../../types/card';
import { cards } from '../../data/cards';
import { Card } from '../card/Card';
import { BinderSlot } from './BinderSlot';
import { BinderFilters } from './BinderFilters';

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

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white">Collection</h2>
          <p className="text-sm text-white/50">
            {collected} of {total} cards collected ({Math.round((collected / total) * 100)}%)
          </p>
        </div>
      </div>

      {/* Filters */}
      <BinderFilters
        selectedType={selectedType}
        selectedRarity={selectedRarity}
        onTypeChange={setSelectedType}
        onRarityChange={setSelectedRarity}
      />

      {/* Card grid */}
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3">
        {filteredCards.map(card => (
          <BinderSlot
            key={card.id}
            card={card}
            collected={state.collectedCardIds.includes(card.id)}
            onSelect={setInspectingCard}
          />
        ))}
      </div>

      {filteredCards.length === 0 && (
        <div className="text-center py-12 text-white/40">
          No cards match your filters.
        </div>
      )}

      {/* Full card inspection overlay */}
      {inspectingCard && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setInspectingCard(null)}
        >
          <div onClick={e => e.stopPropagation()}>
            <Card card={inspectingCard} />
          </div>
        </div>
      )}
    </div>
  );
}
