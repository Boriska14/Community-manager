import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, BookOpen, Download } from 'lucide-react';
import { GLITCH_VOLUMES, SOCIAL_LINKS } from '../data/portfolioData';
import { SolarEmblem } from './ProjectArtwork';

export function GlitchSection() {
  const [selectedVolId, setSelectedVolId] = useState(GLITCH_VOLUMES[0].id);
  const [selectedSectionIdx, setSelectedSectionIdx] = useState(0);

  const activeVolume =
    GLITCH_VOLUMES.find((v) => v.id === selectedVolId) ?? GLITCH_VOLUMES[0];
  const activeSection =
    activeVolume.sections[selectedSectionIdx] ?? activeVolume.sections[0];

  const handleVolumeChange = (id: string) => {
    setSelectedVolId(id);
    setSelectedSectionIdx(0);
  };

  return (
    <section
      id="glitch"
      className="py-16 sm:py-24 bg-[#190B0B] text-[#F5EFE6] dark:bg-[#0D0707] border-y border-white/10"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 sm:pb-10 border-b border-white/15">
          <div className="space-y-3 min-w-0">
            <div className="flex items-center gap-3 text-[#E5A11A]">
              <motion.div
                animate={{ rotate: selectedSectionIdx * 18 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <SolarEmblem className="w-8 h-8 shrink-0" />
              </motion.div>
              <span className="text-xs font-mono-num uppercase tracking-[0.18em]">
                Magazine éditorial indépendant
              </span>
            </div>
            <h2
              className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-white"
              style={{ textWrap: 'balance' }}
            >
              GLITCH —{' '}
              <span className="font-editorial italic font-normal text-[#E5A11A]">
                Quand la confidence a besoin d’un prétexte.
              </span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            {GLITCH_VOLUMES.map((vol) => {
              const active = vol.id === activeVolume.id;
              return (
                <button
                  key={vol.id}
                  type="button"
                  onClick={() => handleVolumeChange(vol.id)}
                  className={`relative min-h-[44px] sm:min-h-[40px] px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'text-white'
                      : 'bg-white/8 text-white/75 border border-white/15 hover:bg-white/15'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="glitchVolumePill"
                      transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                      className="absolute inset-0 rounded-lg bg-[#C8231A]"
                    />
                  )}
                  <span className="relative z-10">{vol.number}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Split */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Editorial Intro */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeVolume.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 min-w-0 space-y-6"
            >
              <div className="space-y-2">
                <p className="text-xs font-mono-num uppercase tracking-wider text-white/65">
                  {activeVolume.number} · {activeVolume.date}
                </p>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                  {activeVolume.title}
                </h3>
                <p className="font-editorial italic text-lg text-[#E5A11A]">
                  « {activeVolume.tagline} »
                </p>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-[#F5EFE6]/85">
                {activeVolume.editorialIntro}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={activeVolume.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 text-sm font-semibold rounded-lg bg-[#C8231A] text-white hover:bg-[#E5A11A] hover:text-[#0D0E14] transition-colors whitespace-nowrap shrink-0"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Lire sur creative-glitch</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                {activeVolume.pdfUrl && (
                  <a
                    href={activeVolume.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 min-h-[44px] px-4 py-2.5 text-sm font-medium rounded-lg border border-white/25 text-white hover:border-[#E5A11A] hover:text-[#E5A11A] transition-colors whitespace-nowrap shrink-0"
                  >
                    <Download className="w-4 h-4" />
                    <span>PDF Vol. 02</span>
                  </a>
                )}
              </div>

              <p className="text-xs font-mono-num text-white/65 pt-2">
                Rubriques : Système · Corps · Machine · Esprit · Culture · Fun ·{' '}
                <a
                  href={SOCIAL_LINKS.pinterest}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-white hover:text-[#E5A11A]"
                >
                  Moodboard CUBUS ↗
                </a>
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Interactive Sommaire */}
          <div className="lg:col-span-7 min-w-0 space-y-5">
            <div className="flex items-center justify-between gap-4">
              <h4 className="text-xs font-mono-num uppercase tracking-[0.16em] text-white/65">
                Au sommaire — cliquez une rubrique
              </h4>
              <span className="text-xs font-mono-num text-white/65 shrink-0">
                {activeVolume.sections.length} entrées
              </span>
            </div>

            <div className="divide-y divide-white/12 border-y border-white/12">
              {activeVolume.sections.map((section, idx) => {
                const isSelected = idx === selectedSectionIdx;
                return (
                  <button
                    key={section.page + section.title}
                    type="button"
                    onClick={() => setSelectedSectionIdx(idx)}
                    className={`w-full text-left py-4 px-3 sm:px-4 transition-colors duration-150 cursor-pointer flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 ${
                      isSelected
                        ? 'bg-[#C8231A]/20 text-white'
                        : 'hover:bg-white/5 text-white/80'
                    }`}
                  >
                    <div className="flex items-baseline gap-3 sm:gap-4 min-w-0">
                      <span className="font-mono-num text-xs text-[#E5A11A] font-semibold shrink-0">
                        {section.page}
                      </span>
                      <div className="min-w-0">
                        <span className="text-xs font-mono-num uppercase tracking-wider text-white/60 mr-2.5">
                          {section.rubrique}
                        </span>
                        <span className="font-display font-bold text-base sm:text-lg text-white">
                          {section.title}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs sm:text-sm text-white/65 sm:text-right pl-7 sm:pl-0">
                      {section.summary}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Animated Active Rubrique Detail */}
            {activeSection && (
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection.page + activeSection.title}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="p-5 sm:p-6 rounded-xl bg-black/40 border border-[#E5A11A]/35"
                >
                  <p className="text-xs font-mono-num uppercase tracking-wider text-[#E5A11A] mb-1.5">
                    Page {activeSection.page} · {activeSection.rubrique} —{' '}
                    {activeSection.title}
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed text-[#F5EFE6]/90">
                    {activeSection.angle}
                  </p>
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
