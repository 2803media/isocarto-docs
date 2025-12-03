// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer").themes.github;
const darkCodeTheme = require("prism-react-renderer").themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Documentation Isocarto",
  tagline: "Guide d'utilisation de la plateforme de géo-marketing",
  favicon: "img/favicon.ico",
  future: {
    v4: true,
  },

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

  plugins: [
    "./src/plugins/tailwind-config.js",
    function (context, options) {
      return {
        name: "image-optimizer",
        configureWebpack(config, isServer) {
          if (!isServer) {
            return {
              plugins: [
                new (require("image-minimizer-webpack-plugin"))({
                  minimizer: {
                    implementation: require("image-minimizer-webpack-plugin")
                      .imageminMinify,
                    options: {
                      plugins: [
                        ["mozjpeg", { quality: 75 }],
                        ["pngquant", { quality: [0.6, 0.8] }],
                      ],
                    },
                  },
                }),
              ],
            };
          }
        },
      };
    },
  ],

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
