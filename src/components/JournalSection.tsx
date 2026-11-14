import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, BookText, X } from 'lucide-react';
import {
  JOURNAL_ARTICLES,
  JournalArticle,
  SOCIAL_LINKS,
  SUBSTACK_NOTES,
} from '../data/portfolioData';

export function JournalSection() {
  const [activeArticle, setActiveArticle] = useState<JournalArticle | null>(null);

  useEffect(() => {
    if (!activeArticle) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveArticle(null);
    };
    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeArticle]);

  return (
    <section id="journal" className="py-16 sm:py-22">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 sm:pb-8 border-b border-[#0D0E14]/15 dark:border-zinc-800">
          <div className="min-w-0">
            <p className="text-xs font-mono-num uppercase tracking-[0.16em] text-[#152D7A] dark:text-[#E5A11A] mb-2">
              Journal &amp; Substack
            </p>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-[#0D0E14] dark:text-[#F5F2EB]">
              Écrits, essais &amp; carnets
            </h2>
          </div>

          <a
            href={SOCIAL_LINKS.substack}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 min-h-[44px] text-sm font-semibold text-[#C8231A] hover:text-[#152D7A] dark:hover:text-[#E5A11A] underline underline-offset-4 whitespace-nowrap shrink-0"
          >
            <span>S’abonner sur Substack</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* 3 Published Articles */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {JOURNAL_ARTICLES.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.38,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="min-w-0 flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-[#DCD2BF] dark:bg-[#121216] border border-[#0D0E14]/15 dark:border-zinc-800 hover:border-[#152D7A] dark:hover:border-[#E5A11A] transition-colors duration-150"
            >
              <div>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono-num text-[#3D3A35] dark:text-zinc-400 mb-3">
                  <span>{article.date}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#152D7A] dark:text-[#E5A11A] font-medium">
                    {article.rubrique}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="font-display font-bold text-xl leading-snug text-[#0D0E14] dark:text-white mb-2">
                  {article.title}
                </h3>

                <p className="font-editorial italic text-sm text-[#C8231A] mb-3">
                  {article.subtitle}
                </p>

                <p className="text-sm leading-relaxed text-[#262522] dark:text-zinc-300">
                  {article.excerpt[0]}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#0D0E14]/12 dark:border-zinc-800 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setActiveArticle(article)}
                  className="inline-flex items-center gap-1.5 min-h-[40px] text-xs font-semibold text-[#0D0E14] dark:text-white hover:text-[#C8231A] cursor-pointer"
                >
                  <BookText className="w-3.5 h-3.5" />
                  <span>Lire l’extrait</span>
                </button>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 min-h-[40px] text-xs font-mono-num text-[#3D3A35] dark:text-zinc-400 hover:text-[#C8231A]"
                >
                  <span>Article complet</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Short Substack Notes */}
        <div className="mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-[#0D0E14]/15 dark:border-zinc-800">
          <div className="flex items-center justify-between gap-4 mb-6">
            <h3 className="text-xs font-mono-num uppercase tracking-[0.16em] text-[#3D3A35] dark:text-zinc-400">
              Notes courtes · côté Substack
            </h3>
            <a
              href={`${SOCIAL_LINKS.glitch}/journal`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono-num text-[#C8231A] hover:underline whitespace-nowrap shrink-0"
            >
              Toutes les notes ↗
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {SUBSTACK_NOTES.map((note) => (
              <a
                key={note.id}
                href={note.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group min-w-0 block p-5 rounded-xl border border-[#0D0E14]/15 dark:border-zinc-800 bg-[#DCD2BF]/75 dark:bg-[#121216] hover:bg-[#152D7A] hover:text-white dark:hover:border-[#E5A11A] transition-colors duration-200"
              >
                <div className="flex items-center justify-between text-xs font-mono-num text-[#3D3A35] dark:text-zinc-400 group-hover:text-[#E5A11A] mb-2.5">
                  <span>{note.date}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                </div>
                <p className="font-editorial text-sm sm:text-base leading-relaxed text-[#0D0E14] dark:text-zinc-200 group-hover:text-white">
                  « {note.excerpt} »
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Article Reader Modal */}
      <AnimatePresence>
        {activeArticle && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="article-modal-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm"
            onClick={() => setActiveArticle(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl max-h-[90dvh] overflow-y-auto rounded-2xl bg-[#E7DFD0] dark:bg-[#121216] text-[#0D0E14] dark:text-white border border-[#0D0E14]/25 dark:border-zinc-800 p-5 sm:p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                aria-label="Fermer l'extrait"
                className="float-right inline-flex items-center justify-center w-11 h-11 rounded-lg border border-[#0D0E14]/20 dark:border-zinc-800 hover:bg-[#C8231A] hover:text-white hover:border-[#C8231A] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <p className="text-xs font-mono-num text-[#3D3A35] dark:text-zinc-400 mb-2">
                {activeArticle.date} · {activeArticle.rubrique} · {activeArticle.readTime}
              </p>

              <h3
                id="article-modal-title"
                className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight text-[#0D0E14] dark:text-white mb-2 pr-12"
              >
                {activeArticle.title}
              </h3>

              <p className="font-editorial italic text-base text-[#C8231A] mb-6">
                {activeArticle.subtitle}
              </p>

              <div className="space-y-4 font-editorial text-base sm:text-lg leading-relaxed text-[#262522] dark:text-zinc-200">
                {activeArticle.excerpt.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div className="mt-8 pt-5 border-t border-[#0D0E14]/15 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-[#3D3A35] dark:text-zinc-400">
                  Publié sur GLITCH Magazine
                </span>
                <a
                  href={activeArticle.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 text-sm font-semibold rounded-lg bg-[#C8231A] text-white hover:bg-[#152D7A] transition-colors"
                >
                  <span>Lire l’article complet</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
