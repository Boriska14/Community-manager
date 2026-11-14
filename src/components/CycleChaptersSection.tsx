import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ProjectArtwork } from './ProjectArtwork';
import {
  ArtworkVariant,
  DJINE_IMAGE,
  HERO_IMAGE,
  LIKABO_IMAGE,
} from '../data/portfolioData';

interface CycleChapter {
  number: string;
  roman: string;
  phase: string;
  title: string;
  subtitle: string;
  description: string;
  projectsLabel: string;
  targetAnchor: string;
  image?: string;
  variant: ArtworkVariant;
}

const CYCLE_CHAPTERS: CycleChapter[] = [
  {
    number: '01',
    roman: 'I',
    phase: 'Observer',
    title: 'Écouter le terrain avant d’écrire.',
    subtitle: 'Origine · Douala & écosystème tech',
    description:
      "Tout commence par le réel sans maquillage : comprendre les usages, les tensions et le vocabulaire d'une organisation avant de poser une première phrase. C'est ainsi qu'est né le manifeste inaugural de Linnov sur LinkedIn.",
    projectsLabel: 'Linnov · Prise de parole inaugurale',
    targetAnchor: '#projets',
    variant: 'stripes',
  },
  {
    number: '02',
    roman: 'II',
    phase: 'Structurer',
    title: 'Relier l’expertise technique aux décideurs.',
    subtitle: 'Ponts B2B · Paris — Douala',
    description:
      "Traduire des architectures Microsoft Azure, de la gouvernance FinOps ou de la chasse de têtes C-Level en prises de parole LinkedIn lisibles. Construire une crédibilité continue entre l'Afrique francophone et l'Europe.",
    projectsLabel: 'Likabo (MSP Microsoft) · Djine Care (RH)',
    targetAnchor: '#projets',
    image: LIKABO_IMAGE,
    variant: 'orbits',
  },
  {
    number: '03',
    roman: 'III',
    phase: 'Rassembler',
    title: 'Mettre en scène l’ingénierie en mouvement.',
    subtitle: 'Événementiel · Akwa, Douala',
    description:
      "Porter la voix d'ETSIA — le Salon Technologique et Stratégique d'Informatique en Afrique à l'Institut UCAC-ICAM — sur Instagram : vulgariser l'Agritech, l'IA éthique et la cybersécurité PME pour faire salle comble.",
    projectsLabel: 'ETSIA · Conférence technologique UCAC-ICAM',
    targetAnchor: '#projets',
    image: HERO_IMAGE,
    variant: 'grid',
  },
  {
    number: '04',
    roman: 'IV',
    phase: 'Éditer',
    title: 'Publier quand la confidence a besoin d’un prétexte.',
    subtitle: 'Édition indépendante · Web & Print',
    description:
      "Avec GLITCH Magazine et le Journal Substack, ouvrir un espace éditorial libre autour du système, du corps, de la machine et de l'esprit — là où l'esthétique graphique sert la sincérité du texte.",
    projectsLabel: 'GLITCH Magazine Vol. 01 & 02 · Journal',
    targetAnchor: '#glitch',
    image: DJINE_IMAGE,
    variant: 'solar',
  },
];

function CycleDial({ activeIndex }: { activeIndex: number }) {
  const rotation = activeIndex * 90;
  return (
    <svg
      viewBox="0 0 120 120"
      className="w-20 h-20 sm:w-24 sm:h-24 text-[#EFE6D2]"
      aria-hidden="true"
    >
      <circle
        cx="60"
        cy="60"
        r="52"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.22"
        strokeWidth="1"
        strokeDasharray="3 4"
      />
      <circle
        cx="60"
        cy="60"
        r="38"
        fill="none"
        stroke="#E5A11A"
        strokeOpacity="0.45"
        strokeWidth="1.2"
      />
      <g
        style={{
          transform: `rotate(${rotation}deg)`,
          transformOrigin: '60px 60px',
          transition: 'transform 500ms cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <line
          x1="60"
          y1="60"
          x2="60"
          y2="12"
          stroke="#E5A11A"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="60" cy="12" r="4.5" fill="#C8231A" />
      </g>
      <circle cx="60" cy="60" r="4.5" fill="#EFE6D2" />
    </svg>
  );
}

export function CycleChaptersSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const chapterRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const elements = chapterRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!elements.length || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idxAttr = entry.target.getAttribute('data-chapter-index');
            if (idxAttr !== null) {
              setActiveIdx(Number(idxAttr));
            }
          }
        });
      },
      {
        rootMargin: '-32% 0px -42% 0px',
        threshold: 0.1,
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const currentChapter = CYCLE_CHAPTERS[activeIdx] ?? CYCLE_CHAPTERS[0];

  const scrollToChapter = (idx: number) => {
    setActiveIdx(idx);
    const el = chapterRefs.current[idx];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section
      id="cycle"
      aria-label="Les chapitres du cycle créatif"
      className="py-16 sm:py-24 bg-[#101532] text-[#EFE6D2] dark:bg-[#0B0E20] border-b border-white/10"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 sm:pb-10 border-b border-white/15">
          <div className="min-w-0 max-w-2xl">
            <p className="text-xs font-mono-num uppercase tracking-[0.18em] text-[#E5A11A] mb-2">
              Méthode en quatre temps
            </p>
            <h2
              className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-white leading-[1.04]"
              style={{ textWrap: 'balance' }}
            >
              Du terrain brut{' '}
              <span className="font-editorial italic font-normal text-[#E5A11A]">
                à l’objet éditorial.
              </span>
            </h2>
          </div>

          {/* Interactive chapter jump controls with shared layout highlight */}
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            {CYCLE_CHAPTERS.map((chap, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={chap.number}
                  type="button"
                  onClick={() => scrollToChapter(idx)}
                  className={`relative min-h-[40px] px-3.5 py-1.5 text-xs font-mono-num rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'text-[#0D0E14] font-semibold'
                      : 'bg-white/8 text-white/75 hover:bg-white/15 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="cycleTabHighlight"
                      transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                      className="absolute inset-0 rounded-lg bg-[#E5A11A]"
                    />
                  )}
                  <span className="relative z-10">
                    {chap.number} · {chap.phase}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Sticky Split Storytelling Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0">
          {/* Left Sticky Stage (Desktop) */}
          <div className="hidden lg:block lg:col-span-5 lg:pr-10 lg:border-r border-white/15 pt-10">
            <div className="sticky top-24 space-y-6">
              <div className="flex items-center justify-between">
                <div className="overflow-hidden">
                  <p className="text-xs font-mono-num uppercase tracking-[0.16em] text-[#E5A11A]">
                    Chapitre {currentChapter.roman} / IV
                  </p>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentChapter.number}
                      initial={{ y: 18, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -18, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-baseline gap-3 mt-1"
                    >
                      <span className="font-mono-num text-3xl font-bold text-[#C8231A]">
                        {currentChapter.number}
                      </span>
                      <span className="font-display font-extrabold text-3xl text-white">
                        {currentChapter.phase}
                      </span>
                    </motion.div>
                  </AnimatePresence>
                </div>
                <CycleDial activeIndex={activeIdx} />
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-white/15 aspect-[4/3] bg-[#090B1A]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentChapter.number}
                    initial={{ scale: 1.07, opacity: 0, clipPath: 'inset(0 0 10% 0)' }}
                    animate={{ scale: 1, opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
                    exit={{ scale: 0.98, opacity: 0 }}
                    transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full"
                  >
                    <ProjectArtwork
                      title={currentChapter.title}
                      image={currentChapter.image}
                      variant={currentChapter.variant}
                      className="w-full h-full"
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent p-5 text-white">
                  <p className="text-[11px] font-mono-num uppercase tracking-wider text-[#E5A11A]">
                    {currentChapter.subtitle}
                  </p>
                  <p className="text-sm font-medium mt-0.5">
                    {currentChapter.projectsLabel}
                  </p>
                </div>
              </div>

              {/* Progress Bars */}
              <div className="grid grid-cols-4 gap-2" aria-hidden="true">
                {CYCLE_CHAPTERS.map((chap, idx) => (
                  <div
                    key={chap.number}
                    className={`h-1.5 rounded-full transition-colors duration-200 ${
                      idx <= activeIdx ? 'bg-[#E5A11A]' : 'bg-white/15'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Scrolling Chapters */}
          <div className="lg:col-span-7 lg:pl-10 divide-y divide-white/12">
            {CYCLE_CHAPTERS.map((chap, idx) => {
              const isActive = idx === activeIdx;
              return (
                <div
                  key={chap.number}
                  data-chapter-index={idx}
                  ref={(el) => {
                    chapterRefs.current[idx] = el;
                  }}
                  onClick={() => setActiveIdx(idx)}
                  className={`py-10 sm:py-14 lg:py-20 transition-opacity duration-200 cursor-pointer ${
                    isActive
                      ? 'opacity-100'
                      : 'lg:opacity-45 lg:hover:opacity-85'
                  }`}
                >
                  <div className="flex items-center gap-3 text-xs font-mono-num uppercase tracking-[0.16em] text-white/65 mb-3">
                    <span className="text-[#E5A11A] font-semibold">
                      {chap.number}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{chap.phase}</span>
                    <span aria-hidden="true">·</span>
                    <span>{chap.subtitle}</span>
                  </div>

                  <h3
                    className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-white mb-4 leading-[1.08]"
                    style={{ textWrap: 'balance' }}
                  >
                    {chap.title}
                  </h3>

                  <p className="font-editorial text-base sm:text-xl leading-relaxed text-[#EFE6D2]/90 max-w-[54ch] mb-6">
                    {chap.description}
                  </p>

                  {/* Mobile/Tablet inline artwork */}
                  <div className="lg:hidden mb-6 rounded-xl overflow-hidden border border-white/15 aspect-[16/10]">
                    <ProjectArtwork
                      title={chap.title}
                      image={chap.image}
                      variant={chap.variant}
                      className="w-full h-full"
                    />
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                    <span className="text-xs font-mono-num text-white/65">
                      {chap.projectsLabel}
                    </span>
                    <a
                      href={chap.targetAnchor}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 min-h-[40px] text-xs sm:text-sm font-semibold text-[#E5A11A] hover:underline whitespace-nowrap shrink-0"
                    >
                      <span>Voir les réalisations</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
