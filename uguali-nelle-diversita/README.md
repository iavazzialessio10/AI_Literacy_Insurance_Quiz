# Uguali nelle Diversità APS — Sito web

Sito ufficiale dell'associazione **Uguali nelle Diversità APS**, dedicata
all'integrazione delle persone con disabilità. Realizzato per farsi conoscere e
raccogliere il **5x1000**.

**Stack:** React + Vite + Tailwind CSS · Font **Fraunces** (titoli) + **Mulish**
(testo) · Accessibilità WCAG (focus visibili, contrasti, `prefers-reduced-motion`).

---

## Avvio in locale

Requisiti: [Node.js](https://nodejs.org) 18+.

```bash
npm install      # installa le dipendenze
npm run dev      # avvia in sviluppo su http://localhost:5173
npm run build    # crea la versione di produzione nella cartella dist/
npm run preview  # anteprima locale della build di produzione
```

---

## Cosa personalizzare

| Elemento | Dove |
|---|---|
| Codice Fiscale, contatti, sede, presidente | oggetto `DATI` in `src/UgualiNelleDiversita.jsx` |
| Logo | file ufficiale `public/logo.png` (referenziato da `DATI.logo`) |
| Foto | cartella `public/foto/` + array `FOTO` in `src/UgualiNelleDiversita.jsx` |
| Numeri di impatto | array `IMPATTO` (attualmente valori indicativi) |

> ℹ️ I dati ufficiali dell'associazione (C.F., contatti, sede, presidente) sono
> già inseriti. L'**IBAN** è volutamente assente: aggiungilo in `DATI` solo se
> serve. Ricorda di aggiungere il file **`public/logo.png`** e le foto reali.

---

## Pubblicare online con un dominio — in 3 passi

> Il progetto vive nella sottocartella `uguali-nelle-diversita/`. Il file
> `netlify.toml` (in radice del repository) è già configurato.

### Passo 1 — Metti il codice su GitHub
Carica il repository su GitHub (è già un repo git): `git push`.

### Passo 2 — Collega Vercel o Netlify
- **Vercel:** [vercel.com](https://vercel.com) → *Add New Project* → importa il
  repo → imposta **Root Directory = `uguali-nelle-diversita`** (Framework: Vite,
  rilevato in automatico) → *Deploy*. Avrai subito un indirizzo
  `*.vercel.app`.
- **Netlify (alternativa):** [netlify.com](https://netlify.com) → *Add new site*
  → importa il repo. Il `netlify.toml` imposta già build e cartella di
  pubblicazione → *Deploy*.

### Passo 3 — Collega il tuo dominio
1. Acquista un dominio (es. `ugualinellediversita.it`) da un registrar.
2. Nel pannello del progetto (Vercel/Netlify) vai su **Domains / Domini** →
   *Add domain* e inserisci il tuo dominio.
3. Imposta i DNS come indicato dalla piattaforma (di solito un record **A** e/o
   **CNAME**). Il certificato **HTTPS** viene generato automaticamente.

A ogni `git push`, il sito si aggiorna da solo. 🎉
