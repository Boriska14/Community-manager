import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  LayoutGrid,
  Linkedin,
  List,
  RotateCcw,
  X,
} from 'lucide-react';
import {
  DISCIPLINES,
  Discipline,
  PROJECTS,
  ProjectItem,
  ProjectStatus,
  STATUSES,
} from '../data/portfolioData';
import { ProjectArtwork } from './ProjectArtwork';

export function ProjectsSection() {
  const [selectedDiscipline, setSelectedDiscipline] = useState<'Tous' | Discipline>('Tous');
  const [selectedStatus, setSelectedStatus] = useState<'Tous' | ProjectStatus>('Tous');
  const [viewMode, setViewMode] = useState<'grid' | 'index'>('grid');
  const [hoveredId, setHoveredId] = useState<string>(PROJECTS[0].id);
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchDiscipline =
        selectedDiscipline === 'Tous' ||
        project.disciplines.includes(selectedDiscipline);
      const matchStatus =
        selectedStatus === 'Tous' || project.status === selectedStatus;
      return matchDiscipline && matchStatus;
    });
  }, [selectedDiscipline, selectedStatus]);

  const previewProject = useMemo(() => {
    return (
      filteredProjects.find((p) => p.id === hoveredId) ??
      filteredProjects[0] ??
      null
    );
  }, [filteredProjects, hoveredId]);

  useEffect(() => {
    if (!activeProject) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveProject(null);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeProject]);

  const resetFilters = () => {
    setSelectedDiscipline('Tous');
    setSelectedStatus('Tous');
  };

  return (
    <section id="projets" className="py-16 sm:py-22">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header + CRL View Mode Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 sm:pb-8 border-b border-[#0D0E14]/15 dark:border-zinc-800">
          <div className="min-w-0">
            <p className="text-xs font-mono-num uppercase tracking-[0.16em] text-[#C8231A] mb-2">
              Archive &amp; études de cas
            </p>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-[#0D0E14] dark:text-[#F5F2EB]">
              Cinq terrains d’expression
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-between sm:justify-end gap-4">
            <p className="text-xs sm:text-sm font-mono-num text-[#3D3A35] dark:text-zinc-400">
              {filteredProjects.length} projet{filteredProjects.length > 1 ? 's' : ''} sur{' '}
              {PROJECTS.length}
            </p>

            <div
              role="group"
              aria-label="Mode d'affichage des projets"
              className="inline-flex items-center p-1 rounded-lg bg-[#DCD2BF] dark:bg-[#121216] border border-[#0D0E14]/15 dark:border-zinc-800"
            >
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`relative inline-flex items-center gap-1.5 min-h-[36px] px-3 py-1.5 text-xs font-semibold rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                  viewMode === 'grid'
                    ? 'text-white dark:text-[#0D0E14]'
                    : 'text-[#3D3A35] dark:text-zinc-400 hover:text-[#0D0E14] dark:hover:text-white'
                }`}
              >
                {viewMode === 'grid' && (
                  <motion.span
                    layoutId="viewModePill"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute inset-0 rounded-md bg-[#152D7A] dark:bg-[#E5A11A]"
                  />
                )}
                <LayoutGrid className="relative z-10 w-3.5 h-3.5" />
                <span className="relative z-10">Grille</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('index')}
                className={`relative inline-flex items-center gap-1.5 min-h-[36px] px-3 py-1.5 text-xs font-semibold rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                  viewMode === 'index'
                    ? 'text-white dark:text-[#0D0E14]'
                    : 'text-[#3D3A35] dark:text-zinc-400 hover:text-[#0D0E14] dark:hover:text-white'
                }`}
              >
                {viewMode === 'index' && (
                  <motion.span
                    layoutId="viewModePill"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute inset-0 rounded-md bg-[#152D7A] dark:bg-[#E5A11A]"
                  />
                )}
                <List className="relative z-10 w-3.5 h-3.5" />
                <span className="relative z-10">Index</span>
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Filters with spring layoutId pills */}
        <div className="py-5 sm:py-6 space-y-4 border-b border-[#0D0E14]/15 dark:border-zinc-800">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-4">
            <span className="text-xs font-mono-num uppercase tracking-wider text-[#3D3A35] dark:text-zinc-400 sm:w-28 shrink-0">
              Discipline
            </span>
            <div className="flex flex-wrap gap-2">
              {DISCIPLINES.map((discipline) => {
                const isActive = selectedDiscipline === discipline;
                return (
                  <button
                    key={discipline}
                    type="button"
                    onClick={() => setSelectedDiscipline(discipline)}
                    className={`relative min-h-[44px] sm:min-h-[38px] px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                      isActive
                        ? 'text-white dark:text-[#0D0E14] font-semibold'
                        : 'bg-[#DCD2BF] text-[#262522] hover:bg-[#CFC3AD] dark:bg-[#121216] dark:text-zinc-300 dark:hover:bg-zinc-800'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="disciplineFilterPill"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        className="absolute inset-0 rounded-lg bg-[#0D0E14] dark:bg-[#F5F2EB]"
                      />
                    )}
                    <span className="relative z-10">{discipline}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-4">
            <span className="text-xs font-mono-num uppercase tracking-wider text-[#3D3A35] dark:text-zinc-400 sm:w-28 shrink-0">
              Statut
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {STATUSES.map((status) => {
                const isActive = selectedStatus === status;
                return (
                  <button
                    key={status}
                    type="button"
                    onClick={() => setSelectedStatus(status)}
                    className={`relative min-h-[44px] sm:min-h-[38px] px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                      isActive
                        ? 'text-white font-semibold'
                        : 'bg-[#DCD2BF] text-[#262522] hover:bg-[#CFC3AD] dark:bg-[#121216] dark:text-zinc-300 dark:hover:bg-zinc-800'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="statusFilterPill"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        className="absolute inset-0 rounded-lg bg-[#C8231A]"
                      />
                    )}
                    <span className="relative z-10">{status}</span>
                  </button>
                );
              })}

              {(selectedDiscipline !== 'Tous' || selectedStatus !== 'Tous') && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="inline-flex items-center gap-1.5 min-h-[44px] sm:min-h-[38px] px-3 py-2 text-xs font-semibold text-[#C8231A] hover:underline whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Réinitialiser</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 ? (
          <div className="py-16 text-center space-y-4">
            <p className="text-base text-[#3D3A35] dark:text-zinc-400">
              Aucun projet ne correspond à cette combinaison de filtres.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 text-sm font-semibold rounded-lg bg-[#152D7A] text-white cursor-pointer"
            >
              Afficher tous les projets
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          /* Asymmetric Editorial Spread */
          <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-12">
            {filteredProjects.map((project, idx) => {
              const isLeadCard = idx === 0 && filteredProjects.length > 2;
              const colSpanClass = isLeadCard
                ? 'md:col-span-12'
                : idx % 3 === 1
                ? 'md:col-span-7'
                : 'md:col-span-5';

              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.4,
                    delay: idx * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`group min-w-0 flex flex-col justify-between ${colSpanClass}`}
                >
                  <div
                    className={
                      isLeadCard
                        ? 'grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch p-5 sm:p-7 rounded-2xl bg-[#DCD2BF] dark:bg-[#10121C] border border-[#0D0E14]/15 dark:border-zinc-800'
                        : 'flex flex-col h-full justify-between'
                    }
                  >
                    <button
                      type="button"
                      onClick={() => setActiveProject(project)}
                      aria-label={`Ouvrir l'étude de cas : ${project.title}`}
                      className={`block w-full text-left rounded-2xl overflow-hidden border border-[#0D0E14]/20 dark:border-zinc-800 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C8231A] ${
                        isLeadCard
                          ? 'lg:col-span-7 mb-0 aspect-[4/3] lg:h-full'
                          : 'mb-5 aspect-[4/3]'
                      }`}
                    >
                      <ProjectArtwork
                        title={project.title}
                        image={project.image}
                        variant={project.artworkVariant}
                        className="w-full h-full"
                      />
                    </button>

                    <div
                      className={
                        isLeadCard
                          ? 'lg:col-span-5 flex flex-col justify-between py-1'
                          : 'flex-1 flex flex-col justify-between'
                      }
                    >
                      <div>
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono-num text-[#3D3A35] dark:text-zinc-400 mb-2">
                          <span className="font-bold text-[#C8231A]">
                            {project.index}
                          </span>
                          <span aria-hidden="true">/</span>
                          <span className="font-semibold text-[#152D7A] dark:text-[#E5A11A]">
                            {project.status}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span>{project.location}</span>
                          <span aria-hidden="true">·</span>
                          <span>{project.year}</span>
                        </div>

                        <h3 className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight text-[#0D0E14] dark:text-white mb-2.5">
                          <button
                            type="button"
                            onClick={() => setActiveProject(project)}
                            className="text-left hover:text-[#C8231A] transition-colors duration-150 cursor-pointer"
                          >
                            {project.title}
                          </button>
                        </h3>

                        <p className="text-sm sm:text-base text-[#262522] dark:text-zinc-300 leading-relaxed mb-4">
                          {project.summary}
                        </p>

                        {isLeadCard && (
                          <p className="hidden sm:block text-sm text-[#3D3A35] dark:text-zinc-400 leading-relaxed mb-5">
                            {project.context}
                          </p>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#0D0E14]/15 dark:border-zinc-800">
                        <p className="text-xs text-[#3D3A35] dark:text-zinc-400 truncate">
                          {project.disciplines.join(' · ')}
                        </p>
                        <div className="flex items-center gap-4 shrink-0">
                          {project.linkedinUrl && (
                            <a
                              href={project.linkedinUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 min-h-[40px] text-xs font-mono-num text-[#152D7A] dark:text-[#E5A11A] hover:text-[#C8231A] whitespace-nowrap shrink-0"
                            >
                              <Linkedin className="w-3.5 h-3.5" />
                              <span>LinkedIn ↗</span>
                            </a>
                          )}
                          <button
                            type="button"
                            onClick={() => setActiveProject(project)}
                            className="inline-flex items-center gap-1.5 min-h-[40px] text-xs sm:text-sm font-semibold text-[#0D0E14] dark:text-white hover:text-[#C8231A] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
                          >
                            <span>Étude de cas</span>
                            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        ) : (
          /* CRL-Inspired Interactive Archival Index + Animated Preview */
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 min-w-0 divide-y divide-[#0D0E14]/15 dark:divide-zinc-800 border-y border-[#0D0E14]/15 dark:border-zinc-800">
              {filteredProjects.map((project) => {
                const isSelected = previewProject?.id === project.id;
                return (
                  <div
                    key={project.id}
                    onMouseEnter={() => setHoveredId(project.id)}
                    onFocus={() => setHoveredId(project.id)}
                    className={`transition-colors duration-150 ${
                      isSelected
                        ? 'bg-[#152D7A] text-white dark:bg-[#1C213D]'
                        : 'hover:bg-[#DCD2BF]/70 dark:hover:bg-[#121216]'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveProject(project)}
                      className="w-full text-left py-4 sm:py-5 px-3 sm:px-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer"
                    >
                      <div className="flex items-baseline gap-4 min-w-0">
                        <span
                          className={`font-mono-num text-xs font-bold shrink-0 ${
                            isSelected ? 'text-[#E5A11A]' : 'text-[#C8231A]'
                          }`}
                        >
                          {project.index}
                        </span>
                        <div className="min-w-0">
                          <h3
                            className={`font-display font-bold text-lg sm:text-xl truncate ${
                              isSelected
                                ? 'text-white'
                                : 'text-[#0D0E14] dark:text-white'
                            }`}
                          >
                            {project.title}
                          </h3>
                          <p
                            className={`text-xs sm:text-sm truncate ${
                              isSelected
                                ? 'text-white/80'
                                : 'text-[#3D3A35] dark:text-zinc-400'
                            }`}
                          >
                            {project.accentLabel} · {project.location}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-4 pl-8 sm:pl-0 shrink-0">
                        <span
                          className={`text-xs font-mono-num ${
                            isSelected
                              ? 'text-white/80'
                              : 'text-[#3D3A35] dark:text-zinc-400'
                          }`}
                        >
                          {project.year}
                        </span>
                        <ArrowRight
                          className={`w-4 h-4 ${
                            isSelected ? 'text-[#E5A11A]' : 'text-[#C8231A]'
                          }`}
                        />
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Sticky Preview Frame on Desktop */}
            {previewProject && (
              <div className="hidden lg:block lg:col-span-5 sticky top-24">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={previewProject.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    className="rounded-2xl overflow-hidden border border-[#0D0E14]/20 dark:border-zinc-800 bg-[#DCD2BF] dark:bg-[#121216]"
                  >
                    <div className="aspect-[4/3]">
                      <ProjectArtwork
                        title={previewProject.title}
                        image={previewProject.image}
                        variant={previewProject.artworkVariant}
                        className="w-full h-full"
                      />
                    </div>
                    <div className="p-6 space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono-num text-[#3D3A35] dark:text-zinc-400">
                        <span>
                          {previewProject.index} · {previewProject.status}
                        </span>
                        <span>{previewProject.year}</span>
                      </div>
                      <h4 className="font-display font-bold text-xl text-[#0D0E14] dark:text-white">
                        {previewProject.title}
                      </h4>
                      <p className="text-sm text-[#262522] dark:text-zinc-300 leading-relaxed">
                        {previewProject.summary}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 pt-1">
                        <button
                          type="button"
                          onClick={() => setActiveProject(previewProject)}
                          className="inline-flex items-center gap-1.5 min-h-[40px] text-sm font-semibold text-[#C8231A] hover:underline cursor-pointer"
                        >
                          <span>Ouvrir l’étude complète</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                        {previewProject.linkedinUrl && (
                          <a
                            href={previewProject.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 min-h-[40px] text-xs font-mono-num text-[#152D7A] dark:text-[#E5A11A] hover:text-[#C8231A]"
                          >
                            <Linkedin className="w-3.5 h-3.5" />
                            <span>LinkedIn ↗</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Animated Case Study Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-3xl max-h-[92dvh] overflow-y-auto rounded-2xl bg-[#E7DFD0] dark:bg-[#121216] text-[#0D0E14] dark:text-white border border-[#0D0E14]/25 dark:border-zinc-800 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                aria-label="Fermer l'étude de cas"
                className="sticky top-3 sm:top-4 float-right mr-3 sm:mr-4 mt-3 sm:mt-4 z-10 inline-flex items-center justify-center w-11 h-11 rounded-lg bg-[#E7DFD0]/95 dark:bg-[#050507]/95 border border-[#0D0E14]/20 dark:border-zinc-800 text-[#0D0E14] dark:text-white hover:bg-[#C8231A] hover:text-white hover:border-[#C8231A] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-5 sm:p-8 space-y-6">
                <div className="rounded-xl overflow-hidden aspect-[16/9] border border-[#0D0E14]/20 dark:border-zinc-800">
                  <ProjectArtwork
                    title={activeProject.title}
                    image={activeProject.image}
                    variant={activeProject.artworkVariant}
                    className="w-full h-full"
                  />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono-num text-[#3D3A35] dark:text-zinc-400 mb-2">
                    <span className="font-semibold text-[#C8231A]">
                      {activeProject.index} · {activeProject.status}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{activeProject.location}</span>
                    <span aria-hidden="true">·</span>
                    <span>{activeProject.year}</span>
                  </div>

                  <h3
                    id="modal-project-title"
                    className="font-display font-extrabold text-2xl sm:text-4xl tracking-tight text-[#0D0E14] dark:text-white mb-3"
                  >
                    {activeProject.title}
                  </h3>

                  <p className="text-base sm:text-lg font-medium text-[#262522] dark:text-zinc-200">
                    {activeProject.summary}
                  </p>
                </div>

                <div className="space-y-5 pt-5 border-t border-[#0D0E14]/15 dark:border-zinc-800">
                  <div>
                    <h4 className="text-xs font-mono-num uppercase tracking-wider text-[#3D3A35] dark:text-zinc-400 mb-2">
                      Contexte &amp; positionnement
                    </h4>
                    <p className="text-sm sm:text-base leading-relaxed text-[#262522] dark:text-zinc-300">
                      {activeProject.context}
                    </p>
                  </div>

                  {activeProject.linkedinAngle && (
                    <div className="p-4 sm:p-5 rounded-xl bg-[#DCD2BF] dark:bg-[#050507] border border-[#0D0E14]/15 dark:border-zinc-800 space-y-3">
                      <h4 className="text-xs font-mono-num uppercase tracking-wider text-[#152D7A] dark:text-[#E5A11A]">
                        Approche éditoriale &amp; LinkedIn
                      </h4>
                      <p className="text-sm sm:text-base leading-relaxed text-[#262522] dark:text-zinc-300">
                        {activeProject.linkedinAngle}
                      </p>
                      {activeProject.linkedinPillars && (
                        <ul className="pt-2 border-t border-[#0D0E14]/15 dark:border-zinc-800 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs sm:text-sm text-[#262522] dark:text-zinc-300">
                          {activeProject.linkedinPillars.map((pillar) => (
                            <li key={pillar} className="flex items-baseline gap-2">
                              <span className="text-[#C8231A] font-mono-num">·</span>
                              <span>{pillar}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}

                  <div>
                    <h4 className="text-xs font-mono-num uppercase tracking-wider text-[#3D3A35] dark:text-zinc-400 mb-2.5">
                      Rôle &amp; livrables
                    </h4>
                    <ul className="space-y-2.5">
                      {activeProject.roleAndDeliverables.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-sm sm:text-base leading-relaxed text-[#262522] dark:text-zinc-300"
                        >
                          <span className="font-mono-num text-xs text-[#C8231A] mt-1 shrink-0">
                            0{idx + 1}.
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-[#0D0E14]/15 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="min-w-0">
                      <p className="text-xs font-mono-num uppercase tracking-wider text-[#3D3A35] dark:text-zinc-400 mb-1">
                        Impact
                      </p>
                      <p className="text-sm font-medium text-[#0D0E14] dark:text-white">
                        {activeProject.impact}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 shrink-0">
                      {activeProject.linkedinUrl && (
                        <a
                          href={activeProject.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2.5 text-sm font-semibold rounded-lg border border-[#0D0E14]/25 dark:border-zinc-700 text-[#0D0E14] dark:text-white hover:border-[#152D7A] hover:text-[#152D7A] dark:hover:border-[#E5A11A] dark:hover:text-[#E5A11A] transition-colors whitespace-nowrap shrink-0"
                        >
                          <Linkedin className="w-4 h-4" />
                          <span>{activeProject.linkedinLabel ?? 'LinkedIn'}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {activeProject.externalUrl && (
                        <a
                          href={activeProject.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 text-sm font-semibold rounded-lg bg-[#C8231A] text-white hover:bg-[#152D7A] transition-colors whitespace-nowrap shrink-0"
                        >
                          <span>{activeProject.externalLabel ?? 'Voir en ligne'}</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
