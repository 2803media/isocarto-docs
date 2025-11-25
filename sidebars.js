/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    "intro",
    "inscription",
    {
      type: "category",
      label: "Zones",
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
