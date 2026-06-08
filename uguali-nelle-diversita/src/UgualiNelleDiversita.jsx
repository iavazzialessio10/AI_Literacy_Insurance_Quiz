import { useState } from 'react'
import Foto from './components/Foto.jsx'
import {
  IconHeart,
  IconUsers,
  IconSparkles,
  IconHandHeart,
  IconCheck,
  IconArrowRight,
  IconMail,
  IconPhone,
  IconPin,
  IconEuro,
  IconMenu,
  IconClose,
} from './components/icons.jsx'

/* ------------------------------------------------------------------ *
 *  DATI DELL'ASSOCIAZIONE
 *  ⚠️  SEGNAPOSTO: sostituisci i valori contrassegnati con i dati reali.
 *  Tutto ciò che serve modificare è qui in un unico punto.
 * ------------------------------------------------------------------ */
const DATI = {
  nome: 'Uguali nelle Diversità APS',
  // Percorso del logo. Le immagini incollate in chat non sono salvabili su file:
  // qui c'è una ricostruzione SVG fedele. Per usare il PNG ufficiale, copia il
  // file in `public/logo.png` e cambia questa riga in '/logo.png'.
  logo: '/logo.svg',

  // TODO: inserire il Codice Fiscale REALE (11 cifre) per il 5x1000.
  codiceFiscale: '00000000000',

  // TODO: inserire i contatti reali.
  email: 'info@ugualinellediversita.it',
  telefono: '+39 000 000 0000',
  telefonoHref: '+390000000000',

  // TODO: inserire la sede legale reale.
  sede: 'Via Esempio 1, 00000 Città (PR)',

  // TODO (opzionale): coordinate per la donazione diretta.
  iban: 'IT00 X000 0000 0000 0000 0000 000',

  // TODO (opzionale): inserire i profili social reali.
  social: {
    facebook: '#',
    instagram: '#',
  },
}

const NAV = [
  { href: '#chi-siamo', label: 'Chi siamo' },
  { href: '#cosa-facciamo', label: 'Cosa facciamo' },
  { href: '#cinquexmille', label: '5x1000' },
  { href: '#galleria', label: 'Foto' },
  { href: '#contatti', label: 'Contatti' },
]

/* Galleria: collega le foto reali mettendole in `public/foto/` e
   aggiornando la prop `src`. L'alt è obbligatorio (descrivi la scena). */
const FOTO = [
  { src: '/foto/laboratorio.jpg', alt: 'Persone al lavoro durante un laboratorio creativo', caption: 'Laboratori creativi' },
  { src: '/foto/sport.jpg', alt: 'Attività sportiva inclusiva all’aperto', caption: 'Sport inclusivo' },
  { src: '/foto/gita.jpg', alt: 'Gruppo sorridente durante una gita', caption: 'Gite ed esperienze' },
  { src: '/foto/incontro.jpg', alt: 'Momento di incontro tra volontari e famiglie', caption: 'Incontri e comunità' },
  { src: '/foto/musica.jpg', alt: 'Laboratorio di musica con strumenti', caption: 'Musica insieme' },
  { src: '/foto/volontari.jpg', alt: 'I volontari dell’associazione', caption: 'I nostri volontari' },
]

const ATTIVITA = [
  {
    Icon: IconUsers,
    titolo: 'Inclusione sociale',
    testo:
      'Creiamo occasioni di incontro, amicizia e partecipazione, perché nessuno resti ai margini. La diversità è la nostra forza comune.',
  },
  {
    Icon: IconSparkles,
    titolo: 'Laboratori e attività',
    testo:
      'Laboratori creativi, sport, musica e gite: percorsi pensati per far crescere autonomia, talenti e fiducia in sé.',
  },
  {
    Icon: IconHandHeart,
    titolo: 'Supporto alle famiglie',
    testo:
      'Ascolto, orientamento e sostegno concreto alle famiglie delle persone con disabilità, ogni giorno, al loro fianco.',
  },
]

const IMPATTO = [
  { numero: '120+', label: 'Persone coinvolte' },
  { numero: '15', label: 'Progetti attivi' },
  { numero: '40', label: 'Volontari' },
  { numero: '10', label: 'Anni di attività' },
]

const PASSI_5X1000 = [
  'Nella tua dichiarazione dei redditi (Modello 730, Redditi PF o CU) cerca il riquadro "Sostegno del volontariato e delle ONLUS / APS".',
  'Firma nel riquadro dedicato e scrivi il nostro Codice Fiscale.',
  'Non ti costa nulla: il 5x1000 è una quota già destinata, scegli solo a chi donarla.',
]

export default function UgualiNelleDiversita() {
  const [menuOpen, setMenuOpen] = useState(false)
  const annoCorrente = new Date().getFullYear()

  return (
    <div className="min-h-dvh bg-brand-cream">
      {/* Skip link per la navigazione da tastiera / screen reader */}
      <a
        href="#contenuto"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-brand-redDeep focus:px-4 focus:py-2 focus:font-semibold focus:text-white"
      >
        Vai al contenuto principale
      </a>

      {/* ---------------------------------------------------------- HEADER */}
      <header className="sticky top-0 z-40 border-b border-brand-ink/10 bg-brand-cream/90 backdrop-blur supports-[backdrop-filter]:bg-brand-cream/75">
        <div className="container-site flex h-20 items-center justify-between gap-4">
          <a
            href="#top"
            className="flex items-center gap-3 rounded-xl py-1 pr-2"
            aria-label={`${DATI.nome} — torna all'inizio`}
          >
            <img
              src={DATI.logo}
              alt=""
              width={48}
              height={48}
              className="h-12 w-12 shrink-0"
            />
            <span className="flex flex-col leading-tight">
              <span className="font-display text-lg font-bold text-brand-ink sm:text-xl">
                Uguali nelle Diversità
              </span>
              <span className="text-xs font-semibold uppercase tracking-wide text-brand-redDeep">
                APS · Inclusione
              </span>
            </span>
          </a>

          {/* Nav desktop */}
          <nav aria-label="Navigazione principale" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex min-h-[44px] items-center rounded-lg px-3 py-2 text-sm font-semibold text-brand-ink transition-colors duration-200 hover:bg-brand-peach/50 hover:text-brand-redDeeper"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#cinquexmille"
                  className="ml-2 inline-flex min-h-[44px] items-center gap-2 rounded-full bg-brand-redDeep px-5 py-2 text-sm font-bold text-white shadow-soft transition-colors duration-200 hover:bg-brand-redDeeper"
                >
                  Dona il 5x1000
                  <IconArrowRight className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </nav>

          {/* Toggle menu mobile */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-lg text-brand-ink transition-colors hover:bg-brand-peach/50 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'}
          >
            {menuOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>

        {/* Menu mobile */}
        {menuOpen && (
          <nav
            id="menu-mobile"
            aria-label="Navigazione mobile"
            className="border-t border-brand-ink/10 bg-brand-cream md:hidden"
          >
            <ul className="container-site flex flex-col gap-1 py-3">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex min-h-[44px] items-center rounded-lg px-3 py-2 text-base font-semibold text-brand-ink hover:bg-brand-peach/50"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-1">
                <a
                  href="#cinquexmille"
                  onClick={() => setMenuOpen(false)}
                  className="flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-brand-redDeep px-5 py-3 text-base font-bold text-white"
                >
                  Dona il 5x1000
                  <IconArrowRight className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>

      <main id="contenuto">
        <span id="top" className="sr-only" aria-hidden="true" />

        {/* ------------------------------------------------------- HERO */}
        <section className="relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-brand-peach/40 via-brand-cream to-brand-cream"
            aria-hidden="true"
          />
          <div className="container-site grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:gap-12 lg:py-24">
            <div className="animate-fade-up">
              <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-bold text-brand-redDeep shadow-card ring-1 ring-brand-redDeep/15">
                <IconHeart className="h-4 w-4" />
                Insieme, nessuno escluso
              </p>
              <h1 className="mt-5 font-display text-4xl font-black leading-[1.05] text-brand-ink sm:text-5xl lg:text-6xl">
                L'integrazione delle persone con{' '}
                <span className="text-brand-redDeep">disabilità</span> è una cosa
                di tutti.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-brand-inkSoft">
                <strong className="font-bold text-brand-ink">
                  {DATI.nome}
                </strong>{' '}
                costruisce ogni giorno occasioni di incontro, autonomia e
                partecipazione. Aiutaci a far crescere una comunità in cui le
                differenze sono un valore.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#cinquexmille"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-brand-redDeep px-7 py-3 text-base font-bold text-white shadow-soft transition-colors duration-200 hover:bg-brand-redDeeper"
                >
                  Dona il tuo 5x1000
                  <IconArrowRight />
                </a>
                <a
                  href="#chi-siamo"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border-2 border-brand-ink/15 bg-white px-7 py-3 text-base font-bold text-brand-ink transition-colors duration-200 hover:border-brand-redDeep hover:text-brand-redDeep"
                >
                  Scopri chi siamo
                </a>
              </div>
            </div>

            <div className="relative animate-fade-up">
              <div
                className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-[2rem] bg-brand-tan/30"
                aria-hidden="true"
              />
              <div className="flex items-center justify-center rounded-[2rem] bg-white p-8 shadow-soft ring-1 ring-brand-ink/10 sm:p-12">
                <img
                  src={DATI.logo}
                  alt="Logo di Uguali nelle Diversità: quattro mani di colori diversi unite a formare un cuore."
                  width={320}
                  height={320}
                  className="h-auto w-full max-w-[280px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* -------------------------------------------------- CHI SIAMO */}
        <section id="chi-siamo" className="scroll-mt-24 py-16 sm:py-20">
          <div className="container-site grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-14">
            <div>
              <SectionKicker>Chi siamo</SectionKicker>
              <h2 className="mt-3 font-display text-3xl font-bold text-brand-ink sm:text-4xl">
                Una comunità che mette al centro la persona
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-brand-inkSoft">
                Siamo un'Associazione di Promozione Sociale (APS) nata dalla
                volontà di famiglie, volontari e cittadini convinti che ogni
                persona, con qualsiasi disabilità, abbia il diritto di vivere
                una vita piena, autonoma e in relazione con gli altri.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-brand-inkSoft">
                Le quattro mani del nostro logo, di colori diversi e unite in un
                unico cuore, raccontano la nostra idea di mondo: diverse, ma
                uguali nel valore.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Attività gratuite e accessibili a tutti',
                  'Volontari formati e presenti sul territorio',
                  'Trasparenza su progetti e risorse',
                ].map((punto) => (
                  <li key={punto} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-redDeep text-white">
                      <IconCheck className="h-4 w-4" />
                    </span>
                    <span className="text-brand-ink">{punto}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4 rounded-3xl bg-white p-6 shadow-soft ring-1 ring-brand-ink/10 sm:p-8">
              {IMPATTO.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-brand-cream p-5 text-center ring-1 ring-brand-ink/5"
                >
                  <div className="font-display text-3xl font-black text-brand-redDeep sm:text-4xl">
                    {stat.numero}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-brand-inkSoft">
                    {stat.label}
                  </div>
                </div>
              ))}
              <p className="col-span-2 text-center text-xs text-brand-inkSoft/80">
                Dati indicativi — aggiorna i numeri con quelli reali.
              </p>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------- COSA FACCIAMO */}
        <section
          id="cosa-facciamo"
          className="scroll-mt-24 bg-white py-16 sm:py-20"
        >
          <div className="container-site">
            <div className="max-w-2xl">
              <SectionKicker>Cosa facciamo</SectionKicker>
              <h2 className="mt-3 font-display text-3xl font-bold text-brand-ink sm:text-4xl">
                Progetti concreti, ogni giorno
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-brand-inkSoft">
                Trasformiamo l'inclusione in attività reali: dai laboratori al
                sostegno alle famiglie, costruiamo autonomia e relazioni.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {ATTIVITA.map(({ Icon, titolo, testo }) => (
                <article
                  key={titolo}
                  className="group rounded-2xl border border-brand-ink/10 bg-brand-cream p-7 transition-shadow duration-200 hover:shadow-soft"
                >
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-redDeep/10 text-brand-redDeep transition-colors duration-200 group-hover:bg-brand-redDeep group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-brand-ink">
                    {titolo}
                  </h3>
                  <p className="mt-2 leading-relaxed text-brand-inkSoft">
                    {testo}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* -------------------------------------------------- 5 X 1000 */}
        <section id="cinquexmille" className="scroll-mt-24 py-16 sm:py-20">
          <div className="container-site">
            <div className="overflow-hidden rounded-3xl bg-brand-ink text-brand-cream shadow-soft">
              <div className="grid gap-8 p-8 sm:p-12 lg:grid-cols-2 lg:items-center lg:gap-12">
                <div>
                  <SectionKicker className="text-brand-tan">
                    Il tuo 5x1000
                  </SectionKicker>
                  <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
                    Una firma. Nessun costo. Un grande aiuto.
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-brand-cream/85">
                    Destinare il 5x1000 a {DATI.nome} è gratuito e semplice: ti
                    basta una firma e il nostro Codice Fiscale nella
                    dichiarazione dei redditi.
                  </p>

                  <ol className="mt-6 space-y-4">
                    {PASSI_5X1000.map((passo, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-redDeep font-display text-sm font-black text-white">
                          {i + 1}
                        </span>
                        <span className="text-brand-cream/90">{passo}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="rounded-2xl bg-brand-cream p-7 text-brand-ink ring-1 ring-white/10 sm:p-8">
                  <p className="text-sm font-bold uppercase tracking-wide text-brand-inkSoft">
                    Il nostro Codice Fiscale
                  </p>
                  <p className="mt-2 select-all font-display text-3xl font-black tracking-wide text-brand-redDeep sm:text-4xl">
                    {DATI.codiceFiscale}
                  </p>
                  <p className="mt-2 text-sm text-brand-inkSoft">
                    Scrivilo nel riquadro dedicato e firma. Tutto qui.
                  </p>

                  <div className="my-6 h-px bg-brand-ink/10" />

                  <p className="text-sm font-bold uppercase tracking-wide text-brand-inkSoft">
                    Preferisci donare direttamente?
                  </p>
                  <p className="mt-2 flex items-center gap-2 font-semibold text-brand-ink">
                    <IconEuro className="h-5 w-5 text-brand-redDeep" />
                    <span className="select-all break-all">{DATI.iban}</span>
                  </p>
                  <a
                    href={`mailto:${DATI.email}?subject=Vorrei%20sostenere%20Uguali%20nelle%20Diversit%C3%A0`}
                    className="mt-5 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-brand-redDeep px-6 py-3 font-bold text-white transition-colors duration-200 hover:bg-brand-redDeeper"
                  >
                    Voglio sostenervi
                    <IconArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* -------------------------------------------------- GALLERIA */}
        <section id="galleria" className="scroll-mt-24 bg-white py-16 sm:py-20">
          <div className="container-site">
            <div className="max-w-2xl">
              <SectionKicker>La nostra comunità</SectionKicker>
              <h2 className="mt-3 font-display text-3xl font-bold text-brand-ink sm:text-4xl">
                I volti dell'inclusione
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-brand-inkSoft">
                Sorrisi, attività e momenti condivisi: ecco cosa significa,
                concretamente, essere uguali nelle diversità.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {FOTO.map((foto) => (
                <Foto
                  key={foto.src}
                  src={foto.src}
                  alt={foto.alt}
                  caption={foto.caption}
                />
              ))}
            </div>
            <p className="mt-5 text-sm text-brand-inkSoft/80">
              Aggiungi le foto reali nella cartella{' '}
              <code className="rounded bg-brand-cream px-1.5 py-0.5 font-mono text-brand-ink">
                public/foto/
              </code>{' '}
              e collegale tramite la prop <code className="font-mono">src</code>.
            </p>
          </div>
        </section>

        {/* -------------------------------------------------- CONTATTI */}
        <section id="contatti" className="scroll-mt-24 py-16 sm:py-20">
          <div className="container-site grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <SectionKicker>Contatti</SectionKicker>
              <h2 className="mt-3 font-display text-3xl font-bold text-brand-ink sm:text-4xl">
                Parliamone insieme
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-brand-inkSoft">
                Vuoi diventare volontario, proporre un progetto o semplicemente
                conoscerci? Scrivici o passa a trovarci.
              </p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              <ContactCard
                Icon={IconPin}
                titolo="Sede"
                testo={DATI.sede}
              />
              <ContactCard
                Icon={IconMail}
                titolo="Email"
                testo={DATI.email}
                href={`mailto:${DATI.email}`}
              />
              <ContactCard
                Icon={IconPhone}
                titolo="Telefono"
                testo={DATI.telefono}
                href={`tel:${DATI.telefonoHref}`}
              />
              <ContactCard
                Icon={IconEuro}
                titolo="Codice Fiscale"
                testo={DATI.codiceFiscale}
              />
            </ul>
          </div>
        </section>
      </main>

      {/* ---------------------------------------------------------- FOOTER */}
      <footer className="border-t border-brand-ink/10 bg-brand-ink text-brand-cream">
        <div className="container-site grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img src={DATI.logo} alt="" width={40} height={40} className="h-10 w-10" />
              <span className="font-display text-lg font-bold">{DATI.nome}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-cream/75">
              Associazione di Promozione Sociale per l'integrazione delle
              persone con disabilità.
            </p>
          </div>

          <nav aria-label="Link rapidi">
            <h2 className="font-display text-sm font-bold uppercase tracking-wide text-brand-tan">
              Naviga
            </h2>
            <ul className="mt-4 space-y-2">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex min-h-[40px] items-center text-sm text-brand-cream/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-wide text-brand-tan">
              Dove siamo
            </h2>
            <address className="mt-4 space-y-2 text-sm not-italic text-brand-cream/80">
              <p className="flex items-start gap-2">
                <IconPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-tan" />
                {DATI.sede}
              </p>
              <p>
                <a href={`mailto:${DATI.email}`} className="hover:text-white">
                  {DATI.email}
                </a>
              </p>
              <p>C.F. {DATI.codiceFiscale}</p>
            </address>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="container-site flex flex-col items-center justify-between gap-2 py-6 text-xs text-brand-cream/60 sm:flex-row">
            <p>
              © {annoCorrente} {DATI.nome}. Tutti i diritti riservati.
            </p>
            <p className="flex items-center gap-1.5">
              Fatto con
              <IconHeart className="h-3.5 w-3.5 text-brand-red" />
              per l'inclusione
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

/* ------------------------------------------------------------------ *
 *  Sotto-componenti di supporto
 * ------------------------------------------------------------------ */
function SectionKicker({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-brand-redDeep ${className}`}
    >
      <span className="h-px w-6 bg-current" aria-hidden="true" />
      {children}
    </span>
  )
}

function ContactCard({ Icon, titolo, testo, href }) {
  const inner = (
    <>
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-redDeep/10 text-brand-redDeep">
        <Icon className="h-5 w-5" />
      </span>
      <span className="flex flex-col">
        <span className="text-sm font-bold uppercase tracking-wide text-brand-inkSoft">
          {titolo}
        </span>
        <span className="font-semibold text-brand-ink">{testo}</span>
      </span>
    </>
  )

  return (
    <li>
      {href ? (
        <a
          href={href}
          className="flex min-h-[44px] items-center gap-4 rounded-2xl border border-brand-ink/10 bg-white p-4 transition-colors duration-200 hover:border-brand-redDeep/40 hover:bg-brand-peach/20"
        >
          {inner}
        </a>
      ) : (
        <div className="flex min-h-[44px] items-center gap-4 rounded-2xl border border-brand-ink/10 bg-white p-4">
          {inner}
        </div>
      )}
    </li>
  )
}
