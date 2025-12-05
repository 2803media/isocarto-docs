/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    // 🚀 DÉMARRER
    {
      type: "category",
      label: "Démarrer", // ✅ Le texte propre pour le breadcrumb
      collapsed: false,
      items: ["intro", "inscription", "connexion"],
    },

    // 📚 COMPRENDRE
    {
      type: "category",
      label: "Comprendre",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Définitions",
          customProps: {
            icon: "heroicons:information-circle",
          },
          items: [
            "comprendre/definitions/definition-isochrone",
            "comprendre/definitions/definition-isodistance",
            "comprendre/definitions/zones-manuelles",
            "comprendre/definitions/zones-administratives",
            "comprendre/definitions/zone-primaire",
          ],
        },
        {
          type: "category",
          label: "Concepts fondamentaux",
          customProps: {
            icon: "heroicons:light-bulb",
          },
          items: [
            "comprendre/concepts/geomarketing-introduction",
            "comprendre/concepts/zone-chalandise",
          ],
        },
        {
          type: "category",
          label: "Méthodologies",
          customProps: {
            icon: "heroicons:academic-cap",
          },
          items: [
            "comprendre/methodo/analyser-zone-chalandise",
            "comprendre/methodo/choisir-type-zone",
            "comprendre/methodo/lire-donnees",
          ],
        },
        "comprendre/glossaire",
      ],
    },

    // 🛠️ UTILISER
    {
      type: "category",
      label: "Utiliser Isocarto",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Interface générale",
          customProps: {
            icon: "heroicons:computer-desktop",
          },
          items: [
            "utiliser/interface/ecran-principal",
            "utiliser/interface/menus-barre-laterale",
            "utiliser/interface/recherche-adresse",
            "utiliser/interface/vues-fonds-de-carte",
            "utiliser/interface/masquer-barre-laterale",
            "utiliser/interface/geolocalisation",
            "utiliser/interface/plein-ecran",
            "utiliser/interface/impression-carte",
            "utiliser/interface/3D",
            "utiliser/interface/indicateur-pulse-vert",
            "utiliser/interface/reinitialisation-preferences",
            "utiliser/interface/changement-theme",
          ],
        },
        {
          type: "category",
          label: "Créer une nouvelle zone",
          customProps: {
            icon: "heroicons:plus-circle",
          },
          items: [
            "utiliser/ajouter-zone/point-depart",
            "utiliser/ajouter-zone/zone-isochrone",
          ],
        },
      ],
    },

    // 💼 CAS D'USAGE
    {
      type: "category",
      label: "Cas d'usage",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Par secteur",
          customProps: {
            icon: "heroicons:building-storefront",
          },
          items: [
            "cas-usage/retail",
            "cas-usage/franchise",
            "cas-usage/immobilier",
            "cas-usage/restauration",
          ],
        },
        {
          type: "category",
          label: "Par objectif",
          customProps: {
            icon: "heroicons:flag",
          },
          items: [
            "cas-usage/ouverture-point-vente",
            "cas-usage/analyse-concurrence",
            "cas-usage/optimisation-reseau",
          ],
        },
      ],
    },

    // 📊 TABLEAU DE BORD
    {
      type: "category",
      label: "Tableau de bord",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Cartes",
          customProps: {
            icon: "heroicons:map",
          },
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
          customProps: {
            icon: "heroicons:folder",
          },
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

    // ⚙️ GESTION DU COMPTE
    {
      type: "category",
      label: "Gestion du compte",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Abonnement",
          customProps: {
            icon: "heroicons:credit-card",
          },
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
          customProps: {
            icon: "heroicons:document-text",
          },
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
          customProps: {
            icon: "heroicons:users",
          },
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
