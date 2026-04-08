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
    <div className="flex flex-wrap gap-4 mb-6">
      {/* Type filters */}
      <div className="flex gap-1.5 flex-wrap">
        {types.map(type => {
          const isActive = selectedType === type;
          const config = type !== 'all' ? CARD_TYPE_CONFIG[type] : null;

          return (
            <button
              key={type}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                isActive
                  ? 'bg-white/20 text-white'
                  : 'bg-white/5 text-white/50 hover:bg-white/10'
              }`}
              style={isActive && config ? { background: `${config.color}30`, color: config.color } : undefined}
              onClick={() => onTypeChange(type)}
            >
              {type === 'all' ? 'All Types' : CARD_TYPE_CONFIG[type].label}
            </button>
          );
        })}
      </div>

      {/* Rarity filters */}
      <div className="flex gap-1.5 flex-wrap">
        {rarities.map(rarity => (
          <button
            key={rarity}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
              selectedRarity === rarity
                ? 'bg-white/20 text-white'
                : 'bg-white/5 text-white/50 hover:bg-white/10'
            }`}
            onClick={() => onRarityChange(rarity)}
          >
            {rarity === 'all' ? 'All Rarities' : RARITY_CONFIG[rarity].label}
          </button>
        ))}
      </div>
    </div>
  );
}
