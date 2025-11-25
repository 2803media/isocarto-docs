/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    "intro",

    {
      type: "category",
      label: "Zones de Chalandise",
      items: [
        {
          type: "category",
          label: "Définitions",
          items: [
            "zone-chalandise/definitions/definition-isochrone",
            "zone-chalandise/definitions/definition-isodistance",
            "zone-chalandise/definitions/zones-manuelles",
            "zone-chalandise/definitions/zones-administratives",
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
