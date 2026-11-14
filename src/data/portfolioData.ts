export type Discipline =
  | 'Community management'
  | 'Design graphique'
  | 'Direction artistique'
  | 'Événementiel'
  | 'Éditorial';

export type ProjectStatus = 'Professionnel' | 'Personnel';

export type ArtworkVariant = 'orbits' | 'bauhaus' | 'stripes' | 'grid' | 'solar';

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  status: ProjectStatus;
  disciplines: Discipline[];
  location: string;
  year: string;
  summary: string;
  image?: string;
  artworkVariant: ArtworkVariant;
  accentLabel: string;
  context: string;
  roleAndDeliverables: string[];
  linkedinAngle?: string;
  linkedinPillars?: string[];
  impact: string;
  externalUrl?: string;
  externalLabel?: string;
  linkedinUrl?: string;
  linkedinLabel?: string;
}

export interface GlitchSectionEntry {
  page: string;
  rubrique: string;
  title: string;
  summary: string;
  angle: string;
}

export interface GlitchVolume {
  id: string;
  number: string;
  title: string;
  date: string;
  tagline: string;
  editorialIntro: string;
  url: string;
  pdfUrl?: string;
  sections: GlitchSectionEntry[];
}

export interface JournalArticle {
  id: string;
  date: string;
  title: string;
  subtitle: string;
  rubrique: string;
  readTime: string;
  excerpt: string[];
  url: string;
}

export interface SubstackNote {
  id: string;
  date: string;
  excerpt: string;
  url: string;
}

export const DISCIPLINES: Array<'Tous' | Discipline> = [
  'Tous',
  'Community management',
  'Design graphique',
  'Direction artistique',
  'Événementiel',
  'Éditorial',
];

export const STATUSES: Array<'Tous' | ProjectStatus> = [
  'Tous',
  'Professionnel',
  'Personnel',
];

export const HERO_IMAGE = '/src/assets/images/hero_editorial_atelier_1794644818966.jpg';

export const HERO_CHAPTERS = [
  {
    id: '01',
    label: 'Stratégie LinkedIn B2B',
    title: 'Likabo, Djine Care & Linnov',
    caption:
      "Positionner des partenaires Microsoft, cabinets RH et structures tech entre Douala et Paris avec une voix éditoriale nette.",
    image: '/src/assets/images/project_likabo_bridge_1794644818593.jpg',
  },
  {
    id: '02',
    label: 'Événementiel Tech',
    title: 'Salon ETSIA · UCAC-ICAM',
    caption:
      "Couverture Instagram et mise en récit de la 1ʳᵉ édition à Akwa (Douala) autour de 6 axes numériques africains.",
    image: '/src/assets/images/hero_editorial_atelier_1794644818966.jpg',
  },
  {
    id: '03',
    label: 'Édition indépendante',
    title: 'GLITCH Magazine Vol. 01 & 02',
    caption:
      '« Quand la confidence a besoin d’un prétexte. » Revue indépendante entre système, corps, machine et esprit.',
    image: '/src/assets/images/project_djine_editorial_1794644819942.jpg',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'likabo',
    index: '01',
    title: 'Likabo',
    status: 'Professionnel',
    disciplines: ['Community management', 'Direction artistique', 'Éditorial'],
    location: 'Paris (47 rue Vivienne) & Douala (Logpom)',
    year: '2025 – 2026',
    summary:
      "Faire exister un MSP Microsoft (« Like a Business Owner ») sur LinkedIn, entre l'Afrique francophone et l'Europe.",
    image: '/src/assets/images/project_likabo_bridge_1794644818593.jpg',
    artworkVariant: 'orbits',
    accentLabel: 'LinkedIn B2B & Microsoft MSP',
    context:
      "LIKABO (« Like a Business Owner ») est un fournisseur de services managés (MSP) et partenaire stratégique Microsoft implanté entre un siège européen à Paris (47 rue Vivienne, 75002) et un bureau d'ingénierie à Douala (Logpom, Carrefour Andem). Sa mission : transformer l'IT d'entreprise en levier de croissance durable autour de cinq pratiques clés : Cloud & Infrastructure (Azure), Business Solutions & Modern Workplace (Microsoft 365, Dynamics 365, Power Platform), Sécurité & Conformité (Microsoft Defender), Data & IA, et Managed Cloud IT (infogérance, service desk, supervision, FinOps et gestion des correctifs).",
    roleAndDeliverables: [
      'Déploiement et animation de la page LinkedIn officielle de Likabo pour installer une prise de parole régulière entre la France et le Cameroun.',
      'Traduction éditoriale des cinq pôles d’expertise Microsoft (Azure, Microsoft 365, Defender, Data & IA, Managed Cloud IT) en contenus orientés dirigeants et DSI.',
      'Direction artistique des carrousels, visuels de marque et formats pédagogiques (FinOps, gouvernance cloud, cybersécurité pragmatique).',
    ],
    linkedinAngle:
      "Sur LinkedIn, l'objectif était de dépasser le discours purement technique pour incarner la promesse « Like a Business Owner » : parler coût maîtrisé, continuité d'activité et sérénité opérationnelle, tout en valorisant la complémentarité des équipes basées à Paris et Douala.",
    linkedinPillars: [
      'Cloud & Infrastructure (Microsoft Azure)',
      'Modern Workplace & Business Solutions (M365, Power Platform)',
      'Sécurité & Conformité (Microsoft Defender)',
      'Data & IA appliquées aux métiers',
      'Managed Cloud IT (Infogérance, FinOps & Service Desk)',
    ],
    impact:
      'Une présence LinkedIn structurée et crédible qui relie l’expertise d’ingénierie de Douala aux attentes des PME et ETI européennes.',
    externalUrl: 'https://likabo-ind.fr',
    externalLabel: 'Site officiel Likabo',
    linkedinUrl: 'https://www.linkedin.com/company/likabo/',
    linkedinLabel: 'Page LinkedIn Likabo',
  },
  {
    id: 'djine-care',
    index: '02',
    title: 'Djine Care',
    status: 'Professionnel',
    disciplines: ['Community management', 'Design graphique'],
    location: 'Douala (Bonanjo) & Paris',
    year: '2025 – 2026',
    summary:
      'Plateforme digitale RH : le volet commercial, marketing et rayonnement LinkedIn.',
    image: '/src/assets/images/project_djine_editorial_1794644819942.jpg',
    artworkVariant: 'bauhaus',
    accentLabel: 'Marketing RH & Mobilité',
    context:
      "DJINE CARE HR Consulting SARL est un cabinet panafricain de conseil en ressources humaines, de chasse de têtes (recrutement exécutif C-Level), d'ingénierie des compétences et de mobilité internationale, ancré à Douala (Bonanjo) avec une représentation à Paris pour la diaspora et les partenariats européens.",
    roleAndDeliverables: [
      'Appui sur le volet commercial et marketing de la plateforme digitale RH : clarification de la proposition de valeur pour les entreprises et les candidats.',
      'Valorisation sur LinkedIn des expertises du cabinet : CV-thèque certifiée ATS, accompagnement carrière, relations écoles/universités et conciergerie de mobilité.',
      'Création de supports graphiques éditoriaux pour professionnaliser les annonces d’opportunités et les formats conseils destinés aux talents.',
    ],
    linkedinAngle:
      'La communication LinkedIn de Djine Care mise sur l’exigence et la proximité : parler autant aux directions générales qui recrutent des profils stratégiques qu’aux cadres et jeunes diplômés préparant leur mobilité.',
    impact:
      'Cohérence renforcée entre l’offre commerciale du cabinet et sa prise de parole digitale auprès des DRH et candidats.',
    externalUrl: 'https://djine-care.com',
    externalLabel: 'Visiter Djine Care',
    linkedinUrl: 'https://www.linkedin.com/company/djine-care/',
    linkedinLabel: 'Page LinkedIn Djine Care',
  },
  {
    id: 'linnov',
    index: '03',
    title: 'Linnov',
    status: 'Professionnel',
    disciplines: ['Éditorial', 'Community management'],
    location: 'Douala, Cameroun',
    year: '2025',
    summary:
      "Le post d'ouverture LinkedIn et le positionnement inaugural d'une structure tech de Douala.",
    artworkVariant: 'stripes',
    accentLabel: 'Prise de parole inaugurale',
    context:
      "Lorsqu'une structure technologique de Douala s'apprête à prendre la parole publiquement pour la première fois sur LinkedIn, le premier texte fixe la barre de crédibilité pour tout ce qui suit : partenaires, clients et futurs talents observent le ton autant que l'offre.",
    roleAndDeliverables: [
      'Conception et rédaction du post d’ouverture LinkedIn : trouver l’angle juste entre ambition technologique, utilité concrète et ancrage camerounais.',
      'Travail sur le rythme narratif, l’accroche sans emphase artificielle et la formulation claire de la mission de la structure.',
      'Recommandations de tonalité pour les publications suivantes afin de bâtir une voix reconnaissable dès les premières semaines.',
    ],
    linkedinAngle:
      "Éviter les annonces grandiloquentes typiques des lancements tech : privilégier un manifeste sobre, précis et orienté vers les problèmes réels résolus sur le terrain.",
    impact:
      'Une entrée en scène LinkedIn structurée et crédible, posant les fondations éditoriales de la marque.',
  },
  {
    id: 'conference-ucac-icam',
    index: '04',
    title: 'Conférence technologique UCAC-ICAM — ETSIA',
    status: 'Professionnel',
    disciplines: ['Événementiel', 'Éditorial', 'Design graphique'],
    location: "Immeuble de l'Élite, Akwa · Douala",
    year: 'Janvier 2026',
    summary:
      "Communication Instagram, identité éditoriale et mise en récit de la 1ʳᵉ édition d'ETSIA (Salon Technologique et Stratégique d'Informatique en Afrique).",
    artworkVariant: 'grid',
    accentLabel: 'ETSIA · UCAC-ICAM',
    context:
      "Organisé par les élèves-ingénieurs de 5ᵉ année du parcours informatique de l'Institut UCAC-ICAM à Douala (16 janvier 2026, Immeuble de l'Élite à Akwa), l'ETSIA réunit étudiants, professionnels et décideurs autour de six axes stratégiques pour le continent : infrastructures numériques pour l'éducation, IA et gouvernance des contenus, Agritech, audiovisuel intelligent, e-commerce/retail et cybersécurité accessible pour les PME africaines.",
    roleAndDeliverables: [
      'Animation éditoriale et visuelle de la page Instagram d’ETSIA pour installer l’événement avant le jour J et valoriser les projets portés par les étudiants-ingénieurs.',
      'Vulgarisation des six thématiques technologiques du salon (Agritech, IA éthique, cybersécurité PME, EdTech, retail et logiciel audiovisuel) en formats digestes.',
      'Conception des supports graphiques d’annonce, compte à rebours, présentation des démonstrations et couverture en direct de la conférence.',
    ],
    linkedinAngle:
      "Montrer sur les réseaux sociaux que l'ingénierie formée à Douala ne reste pas théorique : elle répond à des cas d'usage concrets de terrain (PME, éducation, agriculture, création numérique).",
    impact:
      "Mobilisation de l'écosystème tech de Douala autour d'une première édition structurée à Akwa le 16 janvier 2026.",
  },
  {
    id: 'glitch',
    index: '05',
    title: 'GLITCH',
    status: 'Personnel',
    disciplines: ['Éditorial', 'Direction artistique', 'Design graphique'],
    location: 'Édition indépendante · Web & PDF',
    year: '2026',
    summary:
      'Un magazine éditorial indépendant. Volume 02 : la vulnérabilité — « Quand la confidence a besoin d’un prétexte. »',
    artworkVariant: 'solar',
    accentLabel: 'Magazine indépendant',
    context:
      "GLITCH est le laboratoire éditorial et artistique de Boriska : un magazine numérique et imprimable articulé autour de six rubriques récurrentes — Système, Corps, Machine, Esprit, Culture et Fun. Chaque volume interroge une faille contemporaine avec sincérité, humour et exigence graphique.",
    roleAndDeliverables: [
      'Direction éditoriale complète, écriture des textes et conception des sommaires (Volume 01 & Volume 02).',
      'Direction artistique solaire et typographique (palette encre, sable, cobalt, or et rouge cinabre) déployée sur creative-glitch.vercel.app.',
      'Édition du journal associé, des moodboards Pinterest (CUBUS) et du courrier des lecteurs (Correspondance).',
    ],
    impact:
      '2 volumes complets publiés, une communauté de lecteurs engagée entre Substack, Spotify, Pinterest et Instagram.',
    externalUrl: 'https://creative-glitch.vercel.app',
    externalLabel: 'Lire GLITCH en ligne',
  },
];

export const GLITCH_VOLUMES: GlitchVolume[] = [
  {
    id: 'vol-02',
    number: 'Volume 02',
    title: 'La vulnérabilité',
    date: '1 novembre 2026',
    tagline: "Quand la confidence a besoin d'un prétexte.",
    editorialIntro:
      "Il y a des choses que l'on dit à voix basse, d'autres que l'on tait, et certaines que l'on confie à des machines. Nous vivons à une époque où tout semble pouvoir être partagé, exposé, enregistré, commenté. Pourtant, jamais la confidence n'a semblé aussi complexe. On se dévoile, mais sommes-nous réellement vus ? Pour ce deuxième volume de GLITCH, chaque sujet explore une facette de notre rapport à l'autre et à nous-mêmes.",
    url: 'https://creative-glitch.vercel.app/volumes/vol-02',
    pdfUrl:
      'https://fmlmcxaketpeaznxtlbr.supabase.co/storage/v1/object/public/media/volumes/vol-02/pdf-1793529567818.pdf',
    sections: [
      {
        page: '06',
        rubrique: 'Système',
        title: 'Le fumoir sans règles',
        summary: "Le dehors où la hiérarchie se dissout, et ce qui s'y dit.",
        angle:
          "Observer les zones informelles où les statuts tombent le temps d'une pause — et ce que ces conversations révèlent des organisations.",
      },
      {
        page: '08',
        rubrique: 'Corps',
        title: 'Qui peut se montrer',
        summary: 'Celui qui cache, celle qui est exposée malgré elle.',
        angle:
          'Interroger l’asymétrie du regard porté sur les corps dans l’espace public et numérique : entre invisibilité choisie et exposition subie.',
      },
      {
        page: '10',
        rubrique: 'Machine',
        title: 'La confidente',
        summary: 'Se confier à ce qui enregistre tout.',
        angle:
          'Que devient la confession intime lorsque nos interlocuteurs les plus disponibles sont des interfaces conversationnelles et des journaux de données ?',
      },
      {
        page: '12',
        rubrique: 'Esprit',
        title: 'Vertu ou injonction',
        summary: 'La vulnérabilité, relue sans slogan.',
        angle:
          'Démêler la fragilité réelle de sa mise en scène performative sur les réseaux professionnels et personnels.',
      },
      {
        page: '14',
        rubrique: 'Culture',
        title: 'Exposer, sur-exposer',
        summary: 'Les œuvres qui font de la mise à nu leur matière.',
        angle:
          'Traversée critique d’œuvres littéraires, musicales et visuelles qui transforment l’aveu en forme esthétique.',
      },
      {
        page: '16',
        rubrique: 'Fun',
        title: 'Mode sans filtre',
        summary: 'Quiz, patch notes, courrier des bugs.',
        angle:
          'Respiration ludique du numéro : auto-dérision générationnelle, notes de mise à jour humaines et réponses aux lecteurs.',
      },
    ],
  },
  {
    id: 'vol-01',
    number: 'Volume 01',
    title: 'Résilience ? Acception des normes ?',
    date: '11 octobre 2026',
    tagline: 'Et si le bug était le système.',
    editorialIntro:
      "Numéro fondateur de GLITCH Magazine, consacré aux frictions entre adaptation sociale, normes invisibles et désir d'émancipation créative. Accompagné du moodboard « CUBUS — creative culture, a solar one ».",
    url: 'https://creative-glitch.vercel.app/volumes/vol-01',
    sections: [
      {
        page: '01',
        rubrique: 'Système',
        title: 'Et si le bug était le système',
        summary: 'Quand ce que l’on appelle dysfonctionnement révèle la règle cachée.',
        angle:
          'Poser les bases du manifeste GLITCH : refuser d’appeler « résilience » la simple résignation face à des cadres mal pensés.',
      },
      {
        page: '02',
        rubrique: 'Moodboard',
        title: 'CUBUS — Creative culture, a solar one',
        summary: 'Direction visuelle solaire entre architecture géométrique et chaleur organique.',
        angle:
          'Collection de références graphiques et chromatiques qui structurent l’identité visuelle du magazine.',
      },
    ],
  },
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'the-nice-guy',
    date: '6 novembre 2026',
    title: "The Nice Guy : tout le monde l'aime, personne ne le connaît.",
    subtitle: "Celui qu'on ne remarque pas",
    rubrique: 'Esprit · Essai',
    readTime: '4 min',
    excerpt: [
      "C'est toujours aussi perturbant, cet homme qu'on ne remarque pas, qui ne cherche jamais à se faire remarquer. Il n'est en conflit avec personne, mais il n'est véritablement d'accord avec personne non plus. Très versatile dans ses réponses, il sait épouser les opinions, les sensibilités et parfois même les indignations de ceux qui l'entourent.",
      "Avec le temps, j'ai commencé à me méfier de cette figure du nice guy. Non pas de la gentillesse elle-même, mais de cette gentillesse qui ne coûte rien, qui ne prend aucun risque et qui semble surtout servir à préserver une image.",
    ],
    url: 'https://creative-glitch.vercel.app/journal/the-nice-guy-tout-le-monde-laime',
  },
  {
    id: 'genz-relations',
    date: '23 août 2026',
    title: 'Une GENZ Face aux relations humaines',
    subtitle: 'Proximité virtuelle vs. présence réelle',
    rubrique: 'Système · Société',
    readTime: '5 min',
    excerpt: [
      'À l’ère de la mondialisation, le vrai défi n’est plus de savoir ce qui se passe à l’autre bout du monde, mais de se connecter vraiment aux autres.',
      'La Gen Z a multiplié les étiquettes pour décrire presque chaque configuration relationnelle possible. Cette abondance de noms pourrait laisser croire à une plus grande clarté. En réalité, elle s’accompagne souvent d’un flou important sur les limites, le droit d’attendre ou de demander.',
    ],
    url: 'https://creative-glitch.vercel.app/journal/une-genz-face-aux-relations-humaines',
  },
  {
    id: 'edgar-morin',
    date: '7 juillet 2026',
    title: "Boriska pov : leçon d'un siècle de vie de Edgar Morin",
    subtitle: 'Notes de lecture sans posture',
    rubrique: 'Culture · Lecture',
    readTime: '4 min',
    excerpt: [
      'Disclaimer : Je ne suis ni critique, ni écrivaine, juste une lectrice qui a un avis. Ce livre est comme une conversation avec un aîné : confortable, éducative, sans être agressive.',
      'Il aborde la nécessité qu’est le besoin de considération et d’appartenance à une communauté : « Le “je” a besoin du “tu”, mais le “je” a aussi besoin du “nous”. »',
    ],
    url: 'https://creative-glitch.vercel.app/journal/boriska-pov-lecon-dun-siecle-de-vie',
  },
];

export const SUBSTACK_NOTES: SubstackNote[] = [
  {
    id: 'note-1',
    date: '2 novembre 2026',
    excerpt:
      "Parce que tel est peut-être le destin d'une rêveuse : revivre les vieux souvenirs et, lorsqu'ils ne suffisent plus, s'en inventer de nouveaux, à la mesure de ses rêves.",
    url: 'https://substack.com/@boriskamb/note/c-376529206',
  },
  {
    id: 'note-2',
    date: '1 novembre 2026',
    excerpt:
      'Apprenez à harmoniser vos énergies. Puisez vos forces dans l’héritage de vos ancêtres, et tracez avec clarté les contours de votre identité.',
    url: 'https://substack.com/@boriskamb/note/c-375813841',
  },
  {
    id: 'note-3',
    date: '31 octobre 2026',
    excerpt:
      "Qu'est-ce qu'un cœur qui n'oublie pas devient dans une société qui consomme à l'excès, qui effleure sans s'attarder, et qui confond l'oubli avec la guérison ?",
    url: 'https://substack.com/@boriskamb/note/c-361161264',
  },
];

export const SOCIAL_LINKS = {
  glitch: 'https://creative-glitch.vercel.app',
  substack: 'https://boriskamb.substack.com',
  instagram: 'https://www.instagram.com/boriska_mb',
  pinterest: 'https://pin.it/2EmBtBnWz',
  spotify: 'https://open.spotify.com/user/31n3gwbzzbfhptvflra67jzlvwv4',
  email: 'danya-maylis.mbilongo@2026.icam.fr',
};
