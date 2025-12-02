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
      label: "Outil Isocarto",
      collapsed: false,
      items: ["interface/ecran-principal", "interface/changement-theme"],
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
            "compte/abonnement/periode-essai",
          ],
        },
        "compte/informations",
        {
          type: "category",
          label: "Factures",
          items: [
            "compte/factures/general",
            "compte/factures/facturation-informations",
            "compte/factures/moyens-paiement",
            "compte/factures/historique-factures",
          ],
        },
        {
          type: "category",
          label: "Utilisateurs",
          items: [
            "compte/utilisateurs/general",
            "compte/utilisateurs/invitation-membres",
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
