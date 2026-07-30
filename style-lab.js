/* Temporary Style Lab — font + colour pickers for demo review.
   Remove this file and its <script> tag once a final look is chosen. */
(function () {
  const FONTS = [
    { id: 'michroma', label: 'Michroma', family: "'Michroma', sans-serif" },
    { id: 'orbitron', label: 'Orbitron', family: "'Orbitron', sans-serif" },
    { id: 'audiowide', label: 'Audiowide', family: "'Audiowide', sans-serif" },
    { id: 'exo2', label: 'Exo 2', family: "'Exo 2', sans-serif" },
    { id: 'chakra', label: 'Chakra Petch', family: "'Chakra Petch', sans-serif" },
    { id: 'syncopate', label: 'Syncopate', family: "'Syncopate', sans-serif" },
    { id: 'quantico', label: 'Quantico', family: "'Quantico', sans-serif" },
    { id: 'electrolize', label: 'Electrolize', family: "'Electrolize', sans-serif" },
    { id: 'russo', label: 'Russo One', family: "'Russo One', sans-serif" },
    { id: 'zendots', label: 'Zen Dots', family: "'Zen Dots', sans-serif" },
  ];

  const THEMES = [
    {
      id: 'opera-gold',
      label: 'Opera Gold',
      vars: {
        '--color-gold': '#C9922A',
        '--color-gold-light': '#E0B050',
        '--color-gold-dark': '#9A6E1A',
        '--color-burgundy': '#7B1B2E',
        '--color-burgundy-light': '#B03048',
        '--color-bg-primary': '#080408',
        '--color-bg-secondary': '#100810',
        '--color-bg-card': '#0E0610',
        '--color-text-primary': '#FFF5E6',
        '--color-text-secondary': '#BFA888',
        '--accent-gold': '#C9922A',
        '--text-light': '#FFF5E6',
      },
    },
    {
      id: 'neon-cyan',
      label: 'Neon Cyan',
      vars: {
        '--color-gold': '#00F0FF',
        '--color-gold-light': '#7AFFFF',
        '--color-gold-dark': '#00A8B8',
        '--color-burgundy': '#0B3C5D',
        '--color-burgundy-light': '#1F7A9C',
        '--color-bg-primary': '#03070C',
        '--color-bg-secondary': '#071018',
        '--color-bg-card': '#0A1520',
        '--color-text-primary': '#E8FBFF',
        '--color-text-secondary': '#9AD7E2',
        '--accent-gold': '#00F0FF',
        '--text-light': '#E8FBFF',
      },
    },
    {
      id: 'electric-magenta',
      label: 'Electric Magenta',
      vars: {
        '--color-gold': '#FF2BD6',
        '--color-gold-light': '#FF79E8',
        '--color-gold-dark': '#C4009C',
        '--color-burgundy': '#5B0A45',
        '--color-burgundy-light': '#9C1A78',
        '--color-bg-primary': '#0A0308',
        '--color-bg-secondary': '#140610',
        '--color-bg-card': '#1A0A16',
        '--color-text-primary': '#FFE9FB',
        '--color-text-secondary': '#E2A8D4',
        '--accent-gold': '#FF2BD6',
        '--text-light': '#FFE9FB',
      },
    },
    {
      id: 'laser-lime',
      label: 'Laser Lime',
      vars: {
        '--color-gold': '#B8FF00',
        '--color-gold-light': '#D8FF66',
        '--color-gold-dark': '#7FB000',
        '--color-burgundy': '#1E3A0A',
        '--color-burgundy-light': '#3F6E14',
        '--color-bg-primary': '#050804',
        '--color-bg-secondary': '#0C1208',
        '--color-bg-card': '#121A0C',
        '--color-text-primary': '#F4FFE6',
        '--color-text-secondary': '#C4DFA0',
        '--accent-gold': '#B8FF00',
        '--text-light': '#F4FFE6',
      },
    },
    {
      id: 'plasma-purple',
      label: 'Plasma Purple',
      vars: {
        '--color-gold': '#A855FF',
        '--color-gold-light': '#C994FF',
        '--color-gold-dark': '#6E22C8',
        '--color-burgundy': '#3A0F6E',
        '--color-burgundy-light': '#6A2BB0',
        '--color-bg-primary': '#07040F',
        '--color-bg-secondary': '#10081C',
        '--color-bg-card': '#160C26',
        '--color-text-primary': '#F3E9FF',
        '--color-text-secondary': '#C6B0E8',
        '--accent-gold': '#A855FF',
        '--text-light': '#F3E9FF',
      },
    },
    {
      id: 'solar-orange',
      label: 'Solar Orange',
      vars: {
        '--color-gold': '#FF7A18',
        '--color-gold-light': '#FFB067',
        '--color-gold-dark': '#C24E00',
        '--color-burgundy': '#7A2208',
        '--color-burgundy-light': '#C2431A',
        '--color-bg-primary': '#0B0603',
        '--color-bg-secondary': '#160C07',
        '--color-bg-card': '#1C100A',
        '--color-text-primary': '#FFF1E5',
        '--color-text-secondary': '#E2B793',
        '--accent-gold': '#FF7A18',
        '--text-light': '#FFF1E5',
      },
    },
    {
      id: 'arctic-ice',
      label: 'Arctic Ice',
      vars: {
        '--color-gold': '#7EC8FF',
        '--color-gold-light': '#B7E1FF',
        '--color-gold-dark': '#3E8FC8',
        '--color-burgundy': '#163A5C',
        '--color-burgundy-light': '#2F6FA3',
        '--color-bg-primary': '#04080D',
        '--color-bg-secondary': '#0A121A',
        '--color-bg-card': '#101A24',
        '--color-text-primary': '#EAF5FF',
        '--color-text-secondary': '#A9C6DD',
        '--accent-gold': '#7EC8FF',
        '--text-light': '#EAF5FF',
      },
    },
    {
      id: 'hot-coral',
      label: 'Hot Coral',
      vars: {
        '--color-gold': '#FF4D6D',
        '--color-gold-light': '#FF8FA3',
        '--color-gold-dark': '#C9184A',
        '--color-burgundy': '#6A1026',
        '--color-burgundy-light': '#A61C43',
        '--color-bg-primary': '#0B0406',
        '--color-bg-secondary': '#16080C',
        '--color-bg-card': '#1C0C11',
        '--color-text-primary': '#FFE8EE',
        '--color-text-secondary': '#E3A8B6',
        '--accent-gold': '#FF4D6D',
        '--text-light': '#FFE8EE',
      },
    },
    {
      id: 'emerald-matrix',
      label: 'Emerald Matrix',
      vars: {
        '--color-gold': '#00E59B',
        '--color-gold-light': '#6BFFC8',
        '--color-gold-dark': '#00A870',
        '--color-burgundy': '#0A4A38',
        '--color-burgundy-light': '#168564',
        '--color-bg-primary': '#030A08',
        '--color-bg-secondary': '#071411',
        '--color-bg-card': '#0C1C17',
        '--color-text-primary': '#E6FFF6',
        '--color-text-secondary': '#9AD9C2',
        '--accent-gold': '#00E59B',
        '--text-light': '#E6FFF6',
      },
    },
    {
      id: 'chrome-violet',
      label: 'Chrome Violet',
      vars: {
        '--color-gold': '#C4B5FD',
        '--color-gold-light': '#E0D7FF',
        '--color-gold-dark': '#8B7AE0',
        '--color-burgundy': '#3B2A78',
        '--color-burgundy-light': '#6350B5',
        '--color-bg-primary': '#07060E',
        '--color-bg-secondary': '#100E1C',
        '--color-bg-card': '#161325',
        '--color-text-primary': '#F2EFFE',
        '--color-text-secondary': '#C3BDE0',
        '--accent-gold': '#C4B5FD',
        '--text-light': '#F2EFFE',
      },
    },
    {
      id: 'hyper-teal',
      label: 'Hyper Teal',
      vars: {
        '--color-gold': '#14F1D9',
        '--color-gold-light': '#79FFF0',
        '--color-gold-dark': '#00B8A4',
        '--color-burgundy': '#0A4B4A',
        '--color-burgundy-light': '#16807C',
        '--color-bg-primary': '#03090A',
        '--color-bg-secondary': '#071314',
        '--color-bg-card': '#0C1B1C',
        '--color-text-primary': '#E7FFFC',
        '--color-text-secondary': '#9DDAD3',
        '--accent-gold': '#14F1D9',
        '--text-light': '#E7FFFC',
      },
    },
    {
      id: 'crimson-neon',
      label: 'Crimson Neon',
      vars: {
        '--color-gold': '#FF1744',
        '--color-gold-light': '#FF6B88',
        '--color-gold-dark': '#C4001D',
        '--color-burgundy': '#5C0014',
        '--color-burgundy-light': '#9B1235',
        '--color-bg-primary': '#0A0204',
        '--color-bg-secondary': '#140508',
        '--color-bg-card': '#1A080C',
        '--color-text-primary': '#FFE6EB',
        '--color-text-secondary': '#E0A0AC',
        '--accent-gold': '#FF1744',
        '--text-light': '#FFE6EB',
      },
    },
    {
      id: 'gold-future',
      label: 'Gold Future',
      vars: {
        '--color-gold': '#FFD166',
        '--color-gold-light': '#FFE29A',
        '--color-gold-dark': '#D4A017',
        '--color-burgundy': '#5C3B00',
        '--color-burgundy-light': '#9A6B10',
        '--color-bg-primary': '#0A0802',
        '--color-bg-secondary': '#141008',
        '--color-bg-card': '#1B160C',
        '--color-text-primary': '#FFF8E7',
        '--color-text-secondary': '#D9C79A',
        '--accent-gold': '#FFD166',
        '--text-light': '#FFF8E7',
      },
    },
    {
      id: 'indigo-pulse',
      label: 'Indigo Pulse',
      vars: {
        '--color-gold': '#5B8CFF',
        '--color-gold-light': '#9BBCFF',
        '--color-gold-dark': '#2F5FD6',
        '--color-burgundy': '#1A2F78',
        '--color-burgundy-light': '#3555B8',
        '--color-bg-primary': '#04060F',
        '--color-bg-secondary': '#0A1020',
        '--color-bg-card': '#10182A',
        '--color-text-primary': '#EAF0FF',
        '--color-text-secondary': '#A9B8E2',
        '--accent-gold': '#5B8CFF',
        '--text-light': '#EAF0FF',
      },
    },
    {
      id: 'rose-quartz',
      label: 'Rose Quartz',
      vars: {
        '--color-gold': '#FF9ECF',
        '--color-gold-light': '#FFC3E2',
        '--color-gold-dark': '#E068A8',
        '--color-burgundy': '#6E2A4E',
        '--color-burgundy-light': '#A84A7A',
        '--color-bg-primary': '#0C0609',
        '--color-bg-secondary': '#170B12',
        '--color-bg-card': '#1E1018',
        '--color-text-primary': '#FFF0F7',
        '--color-text-secondary': '#E2B3C9',
        '--accent-gold': '#FF9ECF',
        '--text-light': '#FFF0F7',
      },
    },
  ];

  const root = document.documentElement;
  const storageKey = 'oscar-style-lab-v1';

  function applyFont(fontId) {
    const font = FONTS.find((f) => f.id === fontId) || FONTS[0];
    root.style.setProperty('--font-display', font.family);
    root.style.setProperty('--font-heading', font.family);
    root.style.setProperty('--font-body', font.family);
    root.style.setProperty('--font-ui', font.family);
    document.querySelectorAll('[data-font-id]').forEach((btn) => {
      btn.classList.toggle('is-active', btn.dataset.fontId === font.id);
    });
    save({ font: font.id });
  }

  function applyTheme(themeId) {
    const theme = THEMES.find((t) => t.id === themeId) || THEMES[0];
    Object.entries(theme.vars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
    document.querySelectorAll('[data-theme-id]').forEach((btn) => {
      btn.classList.toggle('is-active', btn.dataset.themeId === theme.id);
    });
    save({ theme: theme.id });
  }

  function load() {
    try {
      return JSON.parse(localStorage.getItem(storageKey) || '{}');
    } catch (_) {
      return {};
    }
  }

  function save(partial) {
    const next = { ...load(), ...partial };
    localStorage.setItem(storageKey, JSON.stringify(next));
  }

  function buildPanel() {
    const panel = document.createElement('aside');
    panel.id = 'styleLab';
    panel.className = 'style-lab';
    panel.innerHTML = `
      <button type="button" class="style-lab-toggle" id="styleLabToggle" aria-expanded="false">Style Lab</button>
      <div class="style-lab-drawer" id="styleLabDrawer" hidden>
        <div class="style-lab-head">
          <strong>Temporary Style Lab</strong>
          <span>Demo only — pick a look, then tell me which to keep</span>
        </div>
        <section>
          <h3>Fonts (10 angular)</h3>
          <div class="style-lab-grid fonts" id="styleLabFonts"></div>
        </section>
        <section>
          <h3>Colours (15 futuristic)</h3>
          <div class="style-lab-grid themes" id="styleLabThemes"></div>
        </section>
        <button type="button" class="style-lab-reset" id="styleLabReset">Reset to current site default</button>
      </div>
    `;
    document.body.appendChild(panel);

    const fontsWrap = panel.querySelector('#styleLabFonts');
    FONTS.forEach((font) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.dataset.fontId = font.id;
      btn.className = 'style-lab-font';
      btn.style.fontFamily = font.family;
      btn.textContent = font.label;
      btn.addEventListener('click', () => applyFont(font.id));
      fontsWrap.appendChild(btn);
    });

    const themesWrap = panel.querySelector('#styleLabThemes');
    THEMES.forEach((theme) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.dataset.themeId = theme.id;
      btn.className = 'style-lab-theme';
      btn.title = theme.label;
      btn.innerHTML = `
        <span class="swatch" style="background: linear-gradient(135deg, ${theme.vars['--color-gold']}, ${theme.vars['--color-burgundy-light']})"></span>
        <span class="name">${theme.label}</span>
      `;
      btn.addEventListener('click', () => applyTheme(theme.id));
      themesWrap.appendChild(btn);
    });

    const toggle = panel.querySelector('#styleLabToggle');
    const drawer = panel.querySelector('#styleLabDrawer');
    toggle.addEventListener('click', () => {
      const open = drawer.hasAttribute('hidden');
      if (open) drawer.removeAttribute('hidden');
      else drawer.setAttribute('hidden', '');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    panel.querySelector('#styleLabReset').addEventListener('click', () => {
      localStorage.removeItem(storageKey);
      applyFont('michroma');
      applyTheme('opera-gold');
    });

    const saved = load();
    applyFont(saved.font || 'michroma');
    applyTheme(saved.theme || 'opera-gold');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildPanel);
  } else {
    buildPanel();
  }
})();
