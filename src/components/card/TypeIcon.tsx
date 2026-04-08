import type { CardType } from '../../types/card';

export function TypeIcon({ type, size = 24 }: { type: CardType; size?: number }) {
  const props = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

  switch (type) {
    case 'contrast':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a10 10 0 0 1 0 20z" fill="currentColor" />
        </svg>
      );
    case 'vision':
      return (
        <svg {...props}>
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case 'motor':
      return (
        <svg {...props}>
          <path d="M18 11V6a2 2 0 0 0-4 0v3" />
          <path d="M14 10V4a2 2 0 0 0-4 0v7" />
          <path d="M10 10.5V6a2 2 0 0 0-4 0v8" />
          <path d="M18 8a2 2 0 0 1 4 0v6a8 8 0 0 1-8 8H8a8 8 0 0 1-2-1" />
        </svg>
      );
    case 'cognition':
      return (
        <svg {...props}>
          <path d="M12 2a7 7 0 0 0-5.2 11.6c.7.8 1.2 1.8 1.2 2.9V18h8v-1.5c0-1.1.5-2.1 1.2-2.9A7 7 0 0 0 12 2z" />
          <path d="M10 22h4" />
          <path d="M10 18h4" />
        </svg>
      );
    case 'structure':
      return (
        <svg {...props}>
          <rect x="2" y="2" width="20" height="6" rx="1" />
          <rect x="2" y="12" width="9" height="10" rx="1" />
          <rect x="15" y="12" width="7" height="10" rx="1" />
        </svg>
      );
    case 'philosophy':
      return (
        <svg {...props}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
  }
}
