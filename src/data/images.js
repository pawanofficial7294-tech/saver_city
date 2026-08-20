/* Centralized image configuration for the Savera City website. */

const photo = (id, { w = 1200, h } = {}) => {
  const params = [`auto=format`, `fit=crop`, `w=${w}`, `q=80`];
  if (h) params.push(`h=${h}`);
  return `https://images.unsplash.com/${id}?${params.join('&')}`;
};

export const IMAGES = {
  /* Hero carousel backgrounds & plot aerial views */
  hero: {
    plotAerial: '/plot_aerial.png',
    plotDemarcation: '/plot_demarcation.png',
    gatedTownship: photo('photo-1500382017468-9049fed747ef', { w: 1920, h: 1080 }),
    greenMeadows: photo('photo-1542601906990-b4d3fb778b09', { w: 1920, h: 1080 }),
    ecoTownship: photo('photo-1600585154340-be6161a56a0c', { w: 1920, h: 1080 })
  },

  /* Plot layout demarcations & inventory */
  plots: {
    sd600: '/plot_demarcation.png',
    sc1200: photo('photo-1500382017468-9049fed747ef', { w: 800 }),
    sf1500: photo('photo-1542601906990-b4d3fb778b09', { w: 800 }),
    sb1800: '/plot_aerial.png',
    se2400: photo('photo-1600585154340-be6161a56a0c', { w: 800 }),
    sa3600: photo('photo-1500076656116-558758c991c1', { w: 800 }),
    sg4800: photo('photo-1524813686514-a57563d77965', { w: 800 })
  },

  /* Amenities & Lifestyle */
  amenities: {
    gatedSecurity: photo('photo-1600585154340-be6161a56a0c', { w: 800 }),
    landscapePark: photo('photo-1542601906990-b4d3fb778b09', { w: 800 }),
    pavedRoads: '/plot_demarcation.png',
    clubhouse: photo('photo-1600596542815-ffad4c1539a9', { w: 800 }),
    kidsPlay: photo('photo-1588880331179-bc9b93a8cb5e', { w: 800 }),
    powerWater: photo('photo-1500382017468-9049fed747ef', { w: 800 })
  },

  /* About section */
  about: {
    main: '/plot_aerial.png',
    overlay: '/plot_demarcation.png'
  },

  /* Blog imagery */
  blog: {
    trends: photo('photo-1500382017468-9049fed747ef', { w: 800 }),
    buying: photo('photo-1542601906990-b4d3fb778b09', { w: 800 }),
    rera: photo('photo-1450133064473-71024230f91b', { w: 800 }),
    smartCities: photo('photo-1460317442991-0ec209397118', { w: 800 })
  },

  /* Avatars */
  avatars: {
    man1: photo('photo-1507003211169-0a1dd7228f2d', { w: 150, h: 150 }),
    woman1: photo('photo-1544005313-94ddf0286df2', { w: 150, h: 150 }),
    man2: photo('photo-1500648767791-00dcc994a43e', { w: 150, h: 150 })
  }
};

/* Hero carousel slides */
export const heroSlides = [
  {
    id: 'plots-hero-main',
    image: IMAGES.hero.plotAerial,
    eyebrow: 'RERA APPROVED GATED TOWNSHIP',
    title: 'Apna Sapno Ka Plot, Sahi Dam Aur Prime Location Per',
    description:
      'Explore government-approved plot sizes: SD (600), SC (1200), SF (1500), SB (1800), SE (2400) & SA (3600 Sq.Ft) with 60ft wide blacktop roads, underground utilities, and immediate spot registry.',
    ctaPrimary: { label: 'Explore Plots', to: '/projects' },
    ctaSecondary: { label: 'Book Site Visit', action: 'siteVisit' }
  },
  {
    id: 'gated-plots',
    image: IMAGES.hero.plotDemarcation,
    eyebrow: 'READY REGISTRY & SPOT MUTATION',
    title: 'Clear Title Plots with 100% Bank Loan Support',
    description:
      'Build your dream home on demarcated land equipped with 24x7 security gates, streetlights, underground drainage, and lush green parks.',
    ctaPrimary: { label: 'View Plot Inventory', to: '/projects' },
    ctaSecondary: { label: 'Enquire Price', action: 'enquire' }
  },
  {
    id: 'commercial-land',
    image: IMAGES.hero.gatedTownship,
    eyebrow: 'HIGHWAY COMMERCIAL FRONTAGE',
    title: 'Prime Commercial Plots on Major Highways',
    description:
      'High appreciation commercial land suitable for showrooms, corporate complexes, and retail stores with heavy footfall access.',
    ctaPrimary: { label: 'View Commercial Plots', to: '/projects?type=Commercial Plot' },
    ctaSecondary: { label: 'Enquire Now', action: 'enquire' }
  }
];
