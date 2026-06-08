import { useState } from 'react'

/**
 * Componente <Foto> — immagine accessibile e ottimizzata per la galleria.
 *
 * Uso:
 *   <Foto src="/foto/laboratorio.jpg" alt="Persone al laboratorio creativo" caption="Laboratorio creativo" />
 *
 * Le foto vanno collegate tramite la prop `src` e devono trovarsi in `public/foto/`.
 * - `alt` è OBBLIGATORIO per l'accessibilità (descrivi cosa si vede).
 * - Se l'immagine non è ancora disponibile mostra un segnaposto elegante,
 *   così il layout non si rompe (niente icona di "immagine rotta").
 *
 * Props:
 *   src       percorso della foto (es. "/foto/nome.jpg")
 *   alt       testo alternativo descrittivo
 *   caption   didascalia opzionale mostrata sotto la foto
 *   className classi extra opzionali
 */
export default function Foto({ src, alt, caption, className = '' }) {
  const [errored, setErrored] = useState(!src)

  return (
    <figure
      className={`group overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-brand-ink/10 ${className}`}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-peach/40">
        {errored ? (
          // Segnaposto: mostrato finché la foto reale non viene aggiunta in public/foto/
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-brand-peach/60 to-brand-tan/40 p-4 text-center">
            <svg
              className="h-9 w-9 text-brand-brown/70"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21" />
            </svg>
            <span className="text-xs font-semibold text-brand-brown/80">
              Foto in arrivo
            </span>
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            width={800}
            height={600}
            onError={() => setErrored(true)}
            className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04] motion-reduce:transform-none"
          />
        )}
      </div>
      {caption && (
        <figcaption className="px-4 py-3 text-sm font-medium text-brand-inkSoft">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
