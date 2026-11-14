import { useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 240,
    damping: 32,
    restDelta: 0.001,
  });

  const navItems = [
    { label: 'Méthode', href: '#cycle' },
    { label: 'Projets', href: '#projets' },
    { label: 'GLITCH', href: '#glitch' },
    { label: 'Journal', href: '#journal' },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-[#0D0E14]/15 dark:border-zinc-800 bg-[#E7DFD0]/92 dark:bg-[#050507]/92 backdrop-blur-md">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4 md:gap-8">
        {/* Zone 1: Single-element wordmark */}
        <a
          href="#"
          className="font-display text-base sm:text-lg font-extrabold tracking-tight text-[#0D0E14] dark:text-[#F5F2EB] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C8231A]"
        >
          Boriska Mbilongo
        </a>

        {/* Zone 2: 4 single-line navigation links */}
        <nav
          aria-label="Navigation principale"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#3D3A35] dark:text-zinc-400"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative whitespace-nowrap shrink-0 py-1.5 hover:text-[#0D0E14] dark:hover:text-white transition-colors duration-150"
            >
              <span>{item.label}</span>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-[#C8231A] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center min-h-[40px] px-5 py-2 text-sm font-semibold rounded-lg bg-[#152D7A] text-white hover:bg-[#C8231A] transition-colors duration-150 whitespace-nowrap shrink-0"
          >
            Me contacter
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-[#0D0E14]/20 dark:border-zinc-800 text-[#0D0E14] dark:text-white cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Scroll-driven reading hairline */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX }}
        className="h-[2.5px] w-full origin-left bg-gradient-to-r from-[#152D7A] via-[#C8231A] to-[#E5A11A]"
      />

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#0D0E14]/15 dark:border-zinc-800 bg-[#E7DFD0] dark:bg-[#050507] px-4 py-4 space-y-3">
          <nav aria-label="Navigation mobile" className="flex flex-col">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="min-h-[44px] flex items-center text-base font-medium text-[#0D0E14] dark:text-white border-b border-[#0D0E14]/12 dark:border-zinc-800"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="inline-flex w-full items-center justify-center min-h-[44px] px-5 py-2.5 text-sm font-semibold rounded-lg bg-[#C8231A] text-white"
          >
            Me contacter
          </a>
        </div>
      )}
    </header>
  );
}
