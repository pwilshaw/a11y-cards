import type { CardType, Rarity } from '../../types/card';
import { CARD_TYPE_CONFIG, RARITY_CONFIG } from '../../types/card';

interface BinderFiltersProps {
  selectedType: CardType | 'all';
  selectedRarity: Rarity | 'all';
  onTypeChange: (type: CardType | 'all') => void;
  onRarityChange: (rarity: Rarity | 'all') => void;
}

export function BinderFilters({
  selectedType,
  selectedRarity,
  onTypeChange,
  onRarityChange,
}: BinderFiltersProps) {
  const types: (CardType | 'all')[] = ['all', ...Object.keys(CARD_TYPE_CONFIG) as CardType[]];
  const rarities: (Rarity | 'all')[] = ['all', ...Object.keys(RARITY_CONFIG) as Rarity[]];

  return (
    <div className="flex flex-col gap-4">
      {/* Type filters */}
      <div className="flex gap-3 flex-wrap">
        {types.map(type => {
          const isActive = selectedType === type;
          const config = type !== 'all' ? CARD_TYPE_CONFIG[type] : null;

          return (
            <button
              key={type}
              className="rounded-xl text-base font-semibold transition-all duration-200"
              style={{
                padding: '12px 24px',
                minHeight: 44,
                background: isActive
                  ? config ? `${config.color}20` : 'rgba(255,255,255,0.1)'
                  : 'rgba(255,255,255,0.03)',
                color: isActive
                  ? config ? config.glow : 'white'
                  : 'rgba(255,255,255,0.5)',
                border: `1px solid ${isActive
                  ? config ? `${config.color}30` : 'rgba(255,255,255,0.15)'
                  : 'rgba(255,255,255,0.06)'}`,
              }}
              onClick={() => onTypeChange(type)}
            >
              {type === 'all' ? 'All Types' : CARD_TYPE_CONFIG[type].label}
            </button>
          );
        })}
      </div>

      {/* Rarity filters */}
      <div className="flex gap-3 flex-wrap">
        {rarities.map(rarity => {
          const isActive = selectedRarity === rarity;
          return (
            <button
              key={rarity}
              className="rounded-xl text-base font-semibold transition-all duration-200"
              style={{
                padding: '12px 24px',
                minHeight: 44,
                background: isActive ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.03)',
                color: isActive ? 'white' : 'rgba(255,255,255,0.5)',
                border: `1px solid ${isActive ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.06)'}`,
              }}
              onClick={() => onRarityChange(rarity)}
            >
              {rarity === 'all' ? 'All Rarities' : RARITY_CONFIG[rarity].label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
