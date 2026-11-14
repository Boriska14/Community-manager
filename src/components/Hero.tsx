import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, Moon, Sun } from 'lucide-react';
import { HERO_CHAPTERS, SOCIAL_LINKS } from '../data/portfolioData';

interface HeroProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export function Hero({ theme, onToggleTheme }: HeroProps) {
  const [activeChapterIdx, setActiveChapterIdx] = useState(0);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const activeChapter = HERO_CHAPTERS[activeChapterIdx] ?? HERO_CHAPTERS[0];

  const metrics = [
    { value: '05', label: 'Projets sélectionnés' },
    { value: '02', label: 'Volumes publiés · GLITCH' },
    { value: '06', label: 'Axes tech · ETSIA 2026' },
    { value: '2 pôles', label: 'Douala & Paris' },
  ];

  const marqueeItems = [
    'Stratégie LinkedIn B2B',
    'Likabo MSP Microsoft',
    'Direction artistique',
    'ETSIA UCAC-ICAM',
    'Édition indépendante',
    'GLITCH Magazine',
  ];

  return (
    <section className="pt-8 sm:pt-12 lg:pt-16 pb-0">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-7 min-w-0 flex flex-col justify-between py-1">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <p className="text-xs sm:text-sm font-mono-num uppercase tracking-wider text-[#152D7A] dark:text-[#E5A11A] font-medium">
                  Creative Communicator · Douala — Paris
                </p>

                <button
                  type="button"
                  onClick={onToggleTheme}
                  aria-label={
                    theme === 'dark'
                      ? 'Passer au thème travertin'
                      : 'Passer au thème archive sombre'
                  }
                  className="inline-flex items-center gap-2 min-h-[40px] px-3.5 py-1.5 text-xs font-semibold rounded-lg border border-[#0D0E14]/20 dark:border-zinc-800 bg-[#DCD2BF] dark:bg-[#121216] text-[#0D0E14] dark:text-white hover:border-[#C8231A] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  {theme === 'dark' ? (
                    <>
                      <Sun className="w-3.5 h-3.5 text-[#E5A11A]" />
                      <span>Édition jour</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-3.5 h-3.5 text-[#152D7A]" />
                      <span>Archive nuit</span>
                    </>
                  )}
                </button>
              </div>

              {/* Expressive split curtain headline */}
              <h1
                className="font-display font-extrabold tracking-tight text-[#0D0E14] dark:text-[#F5F2EB] leading-[0.98] mb-6"
                style={{
                  fontSize: 'clamp(2.6rem, 5.8vw, 4.85rem)',
                  textWrap: 'balance',
                }}
              >
                <span className="block overflow-hidden">
                  <motion.span
                    initial={{ y: '105%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="block"
                  >
                    Écrire juste,
                  </motion.span>
                </span>
                <span className="block overflow-hidden">
                  <motion.span
                    initial={{ y: '105%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.55,
                      delay: 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="block font-editorial italic font-normal text-[#C8231A]"
                  >
                    cadrer fort.
                  </motion.span>
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: 0.16,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-base sm:text-lg text-[#262522] dark:text-zinc-300 leading-relaxed max-w-[58ch] mb-8"
              >
                Stratégie éditoriale B2B sur LinkedIn (Likabo, Djine Care,
                Linnov), communication du salon technologique ETSIA à l’UCAC-ICAM
                et édition indépendante avec le magazine{' '}
                <strong className="font-semibold text-[#152D7A] dark:text-[#E5A11A]">
                  GLITCH
                </strong>
                . Un index vivant entre rigueur d’ingénierie et direction
                artistique.
              </motion.p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projets"
                className="group relative overflow-hidden inline-flex items-center justify-center min-h-[46px] px-6 py-3 text-sm font-semibold rounded-lg bg-[#C8231A] text-white whitespace-nowrap shrink-0"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-[#152D7A] translate-y-full group-hover:translate-y-0 transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
                <span className="relative z-10">Explorer les projets</span>
              </a>

              <a
                href={SOCIAL_LINKS.glitch}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 min-h-[46px] px-4 py-3 text-sm font-semibold text-[#0D0E14] dark:text-[#F5F2EB] hover:text-[#C8231A] dark:hover:text-[#E5A11A] underline underline-offset-4 transition-colors duration-150 whitespace-nowrap shrink-0"
              >
                <span>Lire GLITCH Vol. 02</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right visual stage: Stacked deck + shutter-wipe transitions */}
          <div className="lg:col-span-5 min-w-0 relative pb-3 pr-2 sm:pr-3">
            {/* Layered architectural shadow card behind */}
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-2.5 translate-y-2.5 rounded-2xl bg-[#152D7A] dark:bg-[#C8231A]/80"
            />

            <div className="relative h-full min-h-[320px] sm:min-h-[400px] lg:min-h-[450px] rounded-2xl overflow-hidden border border-[#0D0E14]/25 dark:border-zinc-800 bg-[#0D0E14] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                {!imgErrors[activeChapter.id] ? (
                  <motion.div
                    key={activeChapter.id}
                    initial={{ scale: 1.09, opacity: 0, clipPath: 'inset(8% 0 0 0)' }}
                    animate={{ scale: 1, opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
                    exit={{ scale: 0.98, opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <img
                      src={activeChapter.image}
                      alt={activeChapter.title}
                      referrerPolicy="no-referrer"
                      onError={() =>
                        setImgErrors((prev) => ({
                          ...prev,
                          [activeChapter.id]: true,
                        }))
                      }
                      className="w-full h-full object-cover contrast-[1.14] saturate-[1.2]"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-[#152D7A]/20 mix-blend-multiply"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 halftone-screen opacity-25 mix-blend-multiply"
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key={activeChapter.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-gradient-to-br from-[#152D7A] via-[#0D0E14] to-[#C8231A]/60"
                  />
                )}
              </AnimatePresence>

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/15 to-black/90"
              />

              {/* Interactive Chapter Switcher with animated layout indicator */}
              <div className="relative z-10 p-4 sm:p-5 flex flex-wrap items-center gap-2">
                {HERO_CHAPTERS.map((chap, idx) => {
                  const isActive = idx === activeChapterIdx;
                  return (
                    <button
                      key={chap.id}
                      type="button"
                      onClick={() => setActiveChapterIdx(idx)}
                      className={`relative min-h-[36px] px-3 py-1.5 text-xs font-mono-num rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                        isActive
                          ? 'text-white font-semibold'
                          : 'bg-black/55 text-white/85 hover:bg-black/80 border border-white/15'
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="heroChapterHighlight"
                          transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                          className="absolute inset-0 rounded-md bg-[#C8231A]"
                        />
                      )}
                      <span className="relative z-10">
                        {chap.id} · {chap.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Bottom Caption */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeChapter.id}
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -8, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-10 p-5 sm:p-6 text-white"
                >
                  <p className="text-xs font-mono-num uppercase tracking-wider text-[#E5A11A] mb-1">
                    Chapitre {activeChapter.id} · {activeChapter.label}
                  </p>
                  <p className="font-display font-bold text-lg sm:text-xl text-white mb-1">
                    {activeChapter.title}
                  </p>
                  <p className="text-xs sm:text-sm leading-relaxed text-white/90">
                    {activeChapter.caption}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Full-width 4-column Practice Strip */}
        <div className="mt-12 pt-8 pb-10 border-t border-[#0D0E14]/15 dark:border-zinc-800 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.35,
                delay: idx * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="min-w-0 space-y-1"
            >
              <p className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight text-[#152D7A] dark:text-[#E5A11A] font-mono-num">
                {metric.value}
              </p>
              <p className="text-xs sm:text-sm text-[#3D3A35] dark:text-zinc-400">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bold Imperial Cobalt Marquee Divider */}
      <div
        className="border-y border-[#0D0E14]/20 bg-[#152D7A] text-[#F5F2EB] py-3.5 overflow-hidden"
        aria-hidden="true"
      >
        <div className="animate-marquee text-xs font-mono-num uppercase tracking-[0.2em]">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center gap-8 pr-8">
              {marqueeItems.map((item) => (
                <span key={`${dup}-${item}`} className="flex items-center gap-8 whitespace-nowrap">
                  <span>{item}</span>
                  <span className="text-[#E5A11A]">/</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
