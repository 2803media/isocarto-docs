// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer").themes.github;
const darkCodeTheme = require("prism-react-renderer").themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Documentation Isocarto",
  tagline: "Guide d'utilisation de la plateforme de géo-marketing",
  favicon: "img/favicon.ico",
  /*
  future: {
    v4: true,
  },
*/
  url: "https://docs.isocarto.fr",
  baseUrl: "/",
  trailingSlash: false,

  scripts: [
    {
      src: "https://analytics.2803media.fr/js/script.js",
      defer: true,
      "data-domain": "docs.isocarto.fr",
    },
  ],

  organizationName: "2803media",
  projectName: "isocarto-docs",

  onBrokenLinks: "warn",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  i18n: {
    defaultLocale: "fr",
    locales: ["fr"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          editUrl: "https://github.com/2803media/isocarto-docs/edit/main/",
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          lastVersion: "current",
          versions: {
            current: {
              label: "2.2",
              path: "/", // Version actuelle à la racine
              banner: "none",
            },
          },
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        indexPages: true,
        docsRouteBasePath: "/",
        hashed: true,
        language: ["fr"],
        highlightSearchTermsOnTargetPage: false,
        searchResultContextMaxLength: 50,
        searchResultLimits: 8,
        searchBarShortcut: true,
        searchBarShortcutHint: true,
      },
    ],
  ],

  plugins: ["./src/plugins/tailwind-config.js"],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Personnalisation des libellés
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      // Personnalisation des textes
      metadata: [
        {
          name: "keywords",
          content: "isocarto, documentation, géomarketing, cartographie",
        },
      ],
      // Configuration de la documentation
      navbar: {
        hideOnScroll: false,
        logo: {
          alt: "Isocarto Logo",
          src: "/img/logo.svg",
          href: "https://docs.isocarto.fr",
          target: "_self",
          width: 32,
          height: 32,
        },
        items: [
          {
            to: "https://isocarto.fr",
            html: `
              <span class="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-iso-p bg-iso-s/70 hover:bg-iso-s/10 dark:hover:bg-iso-s/80 border border-iso-s/20 hover:border-iso-s/40 rounded-lg transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4.4 7.4L6.8 4h2.5L7.2 7h6.3a6.5 6.5 0 0 1 0 13H9l1-2h3.5a4.5 4.5 0 1 0 0-9H7.2l2.1 3H6.8L4.4 8.6L4 8z"/></svg>
                <span>Retour sur Isocarto</span>
              </span>
            `,
            position: "right",
            className: "navbar__item--back-to-site text-sm",
            "aria-label": "Retour sur Isocarto",
          },
          {
            type: "docsVersionDropdown",
            position: "right",
            dropdownActiveClassDisabled: true,
          },
        ],
      },

      footer: {
        copyright: `© ${new Date().getFullYear()} # 2803 MEDIA. Tous droits réservés.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
