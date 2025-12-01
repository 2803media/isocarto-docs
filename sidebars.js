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
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Cartes",
          items: [
            "tableau-de-bord/cartes/general",
            "tableau-de-bord/cartes/ajout-carte",
            "tableau-de-bord/cartes/edit-carte",
            "tableau-de-bord/cartes/supprimer-carte",
            "tableau-de-bord/cartes/partage-carte",
            "tableau-de-bord/cartes/ajout-editeur",
          ],
        },
        "tableau-de-bord/cartes-invitees",
        {
          type: "category",
          label: "Fichiers",
          items: [
            "tableau-de-bord/fichiers/general",
            "tableau-de-bord/fichiers/ajout-fichier",
            "tableau-de-bord/fichiers/edition-fichier",
            "tableau-de-bord/fichiers/supprimer-fichier",
            "tableau-de-bord/fichiers/gestion-quota",
          ],
        },
        "tableau-de-bord/rapport",
      ],
    },
    {
      type: "category",
      label: "Gestion du compte",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Abonnement",
          items: [
            "compte/abonnement/general",
            "compte/abonnement/synthese",
            "compte/abonnement/maj-abonnement",
            "compte/abonnement/annulation-abonnement",
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
