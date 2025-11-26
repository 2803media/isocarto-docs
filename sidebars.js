/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    "intro",
    "inscription",
    "connexion",
    {
      type: "category",
      label: "Définitions",
      items: [
        "definitions/definition-isochrone",
        "definitions/definition-isodistance",
        "definitions/zones-manuelles",
        "definitions/zones-administratives",
        "definitions/zone-primaire",
      ],
    },
    {
      type: "category",
      label: "Tableau de bord",
      items: [
        {
          type: "category",
          label: "Vos cartes",
          items: [
            "tableau-de-bord/vos-cartes/general",
            "tableau-de-bord/vos-cartes/ajout-carte",
            "tableau-de-bord/vos-cartes/edit-carte",
            "tableau-de-bord/vos-cartes/supprimer-carte",
            "tableau-de-bord/vos-cartes/partage-carte",
            "tableau-de-bord/vos-cartes/ajout-editeur",
          ],
        },
        {
          type: "category",
          label: "Cartes invitées",
          items: ["tableau-de-bord/cartes-invitees/general"],
        },
        {
          type: "category",
          label: "Vos fichiers",
          items: [
            "tableau-de-bord/vos-fichiers/general",
            "tableau-de-bord/vos-fichiers/ajout-fichier",
            "tableau-de-bord/vos-fichiers/edition-fichier",
            "tableau-de-bord/vos-fichiers/gestion-quota",
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
