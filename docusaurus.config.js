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

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Isocarto",
        logo: {
          alt: "Isocarto Logo",
          src: "https://isocarto.fr/images/logo.svg",
          href: "https://isocarto.fr", // Clic sur le logo renvoie vers isocarto.fr
          target: "_self",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Documentation",
          },
          {
            href: "https://isocarto.fr",
            label: "← Retour à Isocarto",
            position: "right",
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
