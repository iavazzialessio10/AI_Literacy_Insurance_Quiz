/**
 * Icone SVG (stile Lucide, stroke 1.8) — niente emoji come icone.
 * Tutte ereditano `currentColor` e accettano className.
 */

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export function IconHeart({ className = 'h-6 w-6' }) {
  return (
    <svg {...base} className={className}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}

export function IconUsers({ className = 'h-6 w-6' }) {
  return (
    <svg {...base} className={className}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

export function IconSparkles({ className = 'h-6 w-6' }) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="m5.6 5.6 2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
    </svg>
  )
}

export function IconHandHeart({ className = 'h-6 w-6' }) {
  return (
    <svg {...base} className={className}>
      <path d="M11 14h2a2 2 0 0 0 2-2 1 1 0 0 0-1-1H9.5a2 2 0 0 0-1.4.55L6 13" />
      <path d="m2 15 3-3 5.5 5.5a1.5 1.5 0 0 0 2.12 0L20 11" />
      <path d="M14 6.5a2 2 0 0 1 3.5-1.3 2 2 0 0 1 3.5 1.3c0 1.9-2.4 3.2-3.5 4-1.1-.8-3.5-2.1-3.5-4Z" />
    </svg>
  )
}

export function IconCheck({ className = 'h-5 w-5' }) {
  return (
    <svg {...base} className={className}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

export function IconArrowRight({ className = 'h-5 w-5' }) {
  return (
    <svg {...base} className={className}>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

export function IconMail({ className = 'h-5 w-5' }) {
  return (
    <svg {...base} className={className}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

export function IconPhone({ className = 'h-5 w-5' }) {
  return (
    <svg {...base} className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  )
}

export function IconPin({ className = 'h-5 w-5' }) {
  return (
    <svg {...base} className={className}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

export function IconEuro({ className = 'h-5 w-5' }) {
  return (
    <svg {...base} className={className}>
      <path d="M14.5 4A8 8 0 0 0 5.5 18M3 9h9M3 13h9" />
      <path d="M14.5 20A8 8 0 0 1 7 16" />
    </svg>
  )
}

export function IconMenu({ className = 'h-6 w-6' }) {
  return (
    <svg {...base} className={className}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

export function IconClose({ className = 'h-6 w-6' }) {
  return (
    <svg {...base} className={className}>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  )
}
