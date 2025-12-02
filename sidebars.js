/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    // 🚀 DÉMARRER
    {
      type: "category",
      label: "icon:heroicons:rocket-launch Démarrer",
      collapsed: false,
      items: [
        "intro",
        "inscription",
        "connexion",
        //"demarrage/premier-projet",
        //"demarrage/premiere-zone",
      ],
    },

    // 📚 COMPRENDRE
    {
      type: "category",
      label: "icon:heroicons:book-open Comprendre",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "icon:heroicons:light-bulb Concepts fondamentaux",
          items: [
            //"concepts/geomarketing-introduction",
            //"concepts/zone-chalandise",
            "definitions/definition-isochrone",
            "definitions/definition-isodistance",
            "definitions/zones-manuelles",
            "definitions/zones-administratives",
            "definitions/zone-primaire",
          ],
        },
        /*
        {
          type: "category",
          label: "icon:heroicons:academic-cap Méthodologies",
          items: [
            "methodo/analyser-zone-chalandise",
            "methodo/choisir-type-zone",
            "methodo/lire-donnees",
          ],
        },
        */
        //"concepts/glossaire",
      ],
    },

    // 🛠️ UTILISER
    {
      type: "category",
      label: "icon:heroicons:cursor-arrow-rays Utiliser Isocarto",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "icon:heroicons:computer-desktop Interface",
          items: ["interface/ecran-principal", "interface/changement-theme"],
        },
        /*
        {
          type: "category",
          label: "icon:heroicons:map-pin Créer des zones",
          items: [
            "zones/overview",
            "zones/isochrone",
            "zones/isodistance",
            "zones/manuelle",
            "zones/administrative",
          ],
        },
        {
          type: "category",
          label: "icon:heroicons:chart-bar-square Analyser",
          items: [
            "analyse/donnees-disponibles",
            "analyse/population",
            "analyse/concurrence",
            "analyse/indicateurs",
          ],
        },
        {
          type: "category",
          label: "icon:heroicons:arrow-down-tray Exporter",
          items: [
            "export/formats",
            "export/rapports",
            "export/partage",
          ],
        },
        */
      ],
    },

    // 💼 CAS D'USAGE
    /*
    {
      type: "category",
      label: "icon:heroicons:briefcase Cas d'usage",
      items: [
        {
          type: "category",
          label: "icon:heroicons:building-storefront Par secteur",
          items: [
            "cas-usage/retail",
            "cas-usage/franchise",
            "cas-usage/immobilier",
            "cas-usage/restauration",
          ],
        },
        {
          type: "category",
          label: "icon:heroicons:flag Par objectif",
          items: [
            "cas-usage/ouverture-point-vente",
            "cas-usage/analyse-concurrence",
            "cas-usage/optimisation-reseau",
          ],
        },
      ],
    },
    */

    // 📊 TABLEAU DE BORD
    {
      type: "category",
      label: "icon:heroicons:chart-pie Tableau de bord",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "icon:heroicons:map Cartes",
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
          label: "icon:heroicons:folder Fichiers",
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
      label: "icon:heroicons:cog-6-tooth Gestion du compte",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "icon:heroicons:credit-card Abonnement",
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
          label: "icon:heroicons:document-text Factures",
          items: [
            "compte/factures/general",
            "compte/factures/facturation-informations",
            "compte/factures/moyens-paiement",
            "compte/factures/historique-factures",
          ],
        },
        {
          type: "category",
          label: "icon:heroicons:users Utilisateurs",
          items: [
            "compte/utilisateurs/general",
            "compte/utilisateurs/invitation-membres",
          ],
        },
      ],
    },

    // 🎓 ALLER PLUS LOIN
    /*
    {
      type: "category",
      label: "icon:heroicons:academic-cap Aller plus loin",
      items: [
        "avance/bonnes-pratiques",
        "avance/limites-donnees",
        "avance/faq",
      ],
    },
    */
  ],
};

module.exports = sidebars;
