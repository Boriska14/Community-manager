import { useEffect, useState } from 'react';
import { AboutContactFooter } from './components/AboutContactFooter';
import { CycleChaptersSection } from './components/CycleChaptersSection';
import { GlitchSection } from './components/GlitchSection';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { JournalSection } from './components/JournalSection';
import { ProjectsSection } from './components/ProjectsSection';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark')
        ? 'dark'
        : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('bm_theme', theme);
    } catch {
      // ignore storage failure
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="editorial-canvas min-h-screen w-full overflow-x-clip flex flex-col text-[#141413] dark:text-[#FAFAFA] transition-colors duration-200">
      <a
        href="#projets"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[#D52B1E] focus:text-white focus:font-semibold"
      >
        Aller au contenu
      </a>

      <Header />

      <main className="flex-1 min-w-0">
        <Hero theme={theme} onToggleTheme={toggleTheme} />
        <CycleChaptersSection />
        <ProjectsSection />
        <GlitchSection />
        <JournalSection />
        <AboutContactFooter />
      </main>
    </div>
  );
}
