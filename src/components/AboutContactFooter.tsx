import { FormEvent, useState } from 'react';
import { ArrowUpRight, CheckCircle2, Mail, Send } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/portfolioData';

export function AboutContactFooter() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Stratégie éditoriale & LinkedIn');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const buildMailtoHref = () =>
    `mailto:${SOCIAL_LINKS.email}?subject=${encodeURIComponent(
      `[Portfolio] ${subject} — ${name}`,
    )}&body=${encodeURIComponent(`${message}\n\n— ${name} (${email})`)}`;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSubmitted(true);
    window.location.href = buildMailtoHref();
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
    setSubmitted(false);
  };

  return (
    <>
      {/* À propos */}
      <section
        id="apropos"
        className="py-16 sm:py-22 border-t border-[#0D0E14]/15 dark:border-zinc-800"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          <div className="lg:col-span-5 min-w-0">
            <p className="text-xs font-mono-num uppercase tracking-[0.16em] text-[#C8231A] mb-2">
              À propos
            </p>
            <h2
              className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-[#0D0E14] dark:text-[#F5F2EB]"
              style={{ textWrap: 'balance' }}
            >
              Traduire la complexité en récits habités.
            </h2>
          </div>

          <div className="lg:col-span-7 min-w-0 space-y-5 text-base sm:text-lg leading-relaxed text-[#262522] dark:text-zinc-300">
            <p>
              Formée à l’intersection de l’ingénierie (Institut UCAC-ICAM à
              Douala) et de la création éditoriale, j’accompagne des structures
              technologiques, des cabinets de conseil RH et des initiatives
              d’innovation dans la construction de leur voix publique — notamment
              sur LinkedIn et Instagram entre l’Afrique francophone et l’Europe.
            </p>
            <p>
              Qu’il s’agisse de positionner un partenaire Microsoft comme{' '}
              <strong className="font-semibold text-[#152D7A] dark:text-[#E5A11A]">
                Likabo
              </strong>
              , de structurer le marketing de{' '}
              <strong className="font-semibold text-[#152D7A] dark:text-[#E5A11A]">
                Djine Care
              </strong>
              , d’écrire le lancement de{' '}
              <strong className="font-semibold text-[#152D7A] dark:text-[#E5A11A]">
                Linnov
              </strong>
              , de porter la communication du salon technologique{' '}
              <strong className="font-semibold text-[#152D7A] dark:text-[#E5A11A]">
                ETSIA
              </strong>{' '}
              ou d’éditer le magazine indépendant{' '}
              <strong className="font-semibold text-[#C8231A]">
                GLITCH
              </strong>
              , ma méthode reste la même : observer le réel sans maquillage,
              clarifier l’intention, puis soigner chaque mot et chaque cadrage.
            </p>

            <div className="pt-5 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-[#0D0E14]/15 dark:border-zinc-800 text-sm">
              <div className="min-w-0">
                <p className="font-mono-num text-xs uppercase tracking-wider text-[#C8231A] mb-1">
                  Stratégie &amp; LinkedIn
                </p>
                <p className="font-medium text-[#0D0E14] dark:text-white">
                  Positionnement B2B, ligne éditoriale, rédaction de fond
                </p>
              </div>
              <div className="min-w-0">
                <p className="font-mono-num text-xs uppercase tracking-wider text-[#152D7A] dark:text-[#E5A11A] mb-1">
                  Direction artistique
                </p>
                <p className="font-medium text-[#0D0E14] dark:text-white">
                  Identités visuelles, éditions web &amp; print, moodboards
                </p>
              </div>
              <div className="min-w-0">
                <p className="font-mono-num text-xs uppercase tracking-wider text-[#0D0E14] dark:text-zinc-300 mb-1">
                  Événementiel tech
                </p>
                <p className="font-medium text-[#0D0E14] dark:text-white">
                  Salons d’ingénierie, couverture Instagram &amp; récits terrain
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commanding Imperial Cobalt Contact Section */}
      <section
        id="contact"
        className="py-16 sm:py-22 bg-[#152D7A] text-white dark:bg-[#0D1638] border-t border-white/10"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          <div className="lg:col-span-5 min-w-0 space-y-4">
            <p className="text-xs font-mono-num uppercase tracking-[0.16em] text-[#E5A11A]">
              Correspondance
            </p>
            <h2
              className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-white leading-[1.04]"
              style={{ textWrap: 'balance' }}
            >
              Un projet, une collaboration ou une lettre ?
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-white/85">
              Disponible pour des missions de stratégie LinkedIn, direction
              artistique, communication événementielle et collaborations
              éditoriales. Chaque courrier envoyé via ce formulaire est redirigé
              directement vers ma boîte de réception.
            </p>

            <div className="pt-2 space-y-2.5 min-w-0">
              <div>
                <a
                  href={`${SOCIAL_LINKS.glitch}/correspondance`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono-num text-white/80 hover:text-[#E5A11A]"
                >
                  <span>Courrier des lecteurs sur GLITCH</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 min-w-0">
            {submitted ? (
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0D0E14] text-white border border-white/15 space-y-4">
                <div className="flex items-center gap-3 text-[#E5A11A]">
                  <CheckCircle2 className="w-6 h-6 shrink-0" />
                  <h3 className="font-display font-bold text-xl text-white">
                    Courrier redirigé vers votre messagerie
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-white/85 leading-relaxed">
                  Merci {name}. Votre message concernant « {subject} » a été
                  préparé et transmis vers votre application de messagerie. Si
                  elle ne s’est pas ouverte automatiquement, cliquez ci-dessous.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={buildMailtoHref()}
                    className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 text-sm font-semibold rounded-lg bg-[#C8231A] text-white hover:bg-[#E5A11A] hover:text-[#0D0E14] transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Relancer la redirection</span>
                  </a>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="inline-flex items-center min-h-[44px] px-4 py-2.5 text-sm font-medium rounded-lg border border-white/25 text-white hover:border-[#E5A11A] cursor-pointer"
                  >
                    Écrire un autre message
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-5 sm:p-8 rounded-2xl bg-[#E7DFD0] dark:bg-[#0D0E14] text-[#0D0E14] dark:text-white border border-[#0D0E14]/20 dark:border-white/15 space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="min-w-0">
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono-num uppercase tracking-wider text-[#3D3A35] dark:text-zinc-400 mb-1.5"
                    >
                      Prénom ou nom
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex. Claire Ndiaye"
                      className="w-full min-h-[44px] px-3.5 py-2 rounded-lg border border-[#0D0E14]/20 dark:border-zinc-700 bg-transparent text-sm text-[#0D0E14] dark:text-white focus:outline-none focus:border-[#C8231A]"
                    />
                  </div>
                  <div className="min-w-0">
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono-num uppercase tracking-wider text-[#3D3A35] dark:text-zinc-400 mb-1.5"
                    >
                      Adresse e-mail
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nom@entreprise.com"
                      className="w-full min-h-[44px] px-3.5 py-2 rounded-lg border border-[#0D0E14]/20 dark:border-zinc-700 bg-transparent text-sm text-[#0D0E14] dark:text-white focus:outline-none focus:border-[#C8231A]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-mono-num uppercase tracking-wider text-[#3D3A35] dark:text-zinc-400 mb-1.5"
                  >
                    Objet
                  </label>
                  <select
                    id="contact-subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full min-h-[44px] px-3.5 py-2 rounded-lg border border-[#0D0E14]/20 dark:border-zinc-700 bg-[#E7DFD0] dark:bg-[#0D0E14] text-sm text-[#0D0E14] dark:text-white focus:outline-none focus:border-[#C8231A]"
                  >
                    <option value="Stratégie éditoriale & LinkedIn">
                      Stratégie éditoriale &amp; LinkedIn
                    </option>
                    <option value="Direction artistique & Design graphique">
                      Direction artistique &amp; Design graphique
                    </option>
                    <option value="Événementiel tech & ETSIA">
                      Événementiel tech &amp; Conférences
                    </option>
                    <option value="GLITCH Magazine / Éditorial">
                      GLITCH Magazine / Éditorial
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono-num uppercase tracking-wider text-[#3D3A35] dark:text-zinc-400 mb-1.5"
                  >
                    Votre message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Parlez-moi de votre contexte, de votre calendrier et de ce que vous souhaitez construire."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#0D0E14]/20 dark:border-zinc-700 bg-transparent text-sm text-[#0D0E14] dark:text-white focus:outline-none focus:border-[#C8231A]"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-2.5 text-sm font-semibold rounded-lg bg-[#C8231A] text-white hover:bg-[#0D0E14] dark:hover:bg-[#E5A11A] dark:hover:text-[#0D0E14] transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Envoyer le message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 bg-[#0D0E14] text-[#F5F2EB]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <p className="font-display font-bold text-base text-white">
              Boriska Mbilongo
            </p>
            <p className="text-xs text-white/65">
              © 2026 Boriska Mbilongo · Creative Communicator &amp; Digital Content
              Strategist.
            </p>
          </div>

          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono-num">
            <li>
              <a
                href={SOCIAL_LINKS.glitch}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E5A11A] transition-colors"
              >
                GLITCH ↗
              </a>
            </li>
            <li>
              <a
                href={SOCIAL_LINKS.substack}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E5A11A] transition-colors"
              >
                Substack ↗
              </a>
            </li>
            <li>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E5A11A] transition-colors"
              >
                Instagram ↗
              </a>
            </li>
            <li>
              <a
                href={SOCIAL_LINKS.pinterest}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E5A11A] transition-colors"
              >
                Pinterest ↗
              </a>
            </li>
            <li>
              <a
                href={SOCIAL_LINKS.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E5A11A] transition-colors"
              >
                Spotify ↗
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
