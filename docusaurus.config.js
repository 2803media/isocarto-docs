// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer").themes.github;
const darkCodeTheme = require("prism-react-renderer").themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Documentation Isocarto",
  tagline: "Guide d'utilisation de la plateforme de géo-marketing",
  favicon: "img/favicon.ico",

  url: "https://docs.isocarto.fr",
  baseUrl: "/",

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
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "fr",
    locales: ["fr"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/", // Remettre à la racine
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        indexPages: true,
        docsRouteBasePath: "/docs",
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
          src: "/img/logofull.svg",
          srcDark: "/img/logofullwhite.svg",
          href: "https://isocarto.fr",
          target: "_self",
          width: 150,
          height: 40,
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Documentation",
            className: "navbar__item--documentation",
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
