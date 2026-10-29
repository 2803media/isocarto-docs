---
title: Connecter Isocarto à un client MCP
description: Configurer le serveur MCP Isocarto dans Claude, Codex, Claude Code, Cursor ou un autre assistant compatible pour créer et analyser vos zones de chalandise.
sidebar_label: Isocarto avec MCP
slug: /utiliser/mcp
sidebar_custom_props:
  icon: heroicons:command-line
---

# Connecter Isocarto à un client MCP

Isocarto peut être utilisé depuis ChatGPT, Claude, Codex et d’autres assistants compatibles avec le **Model Context Protocol (MCP)**. Le serveur MCP donne à votre assistant un accès sécurisé aux cartes, aux zones de chalandise et aux données territoriales de votre compte Isocarto.

Vous pouvez ainsi créer une zone, analyser un territoire, comparer plusieurs implantations ou mesurer la concurrence directement en langage naturel. L’assistant conserve sa propre manière de raisonner et de présenter ses recommandations ; Isocarto fournit les outils, les géométries et les données métier.

:::info ChatGPT
Pour installer directement le plugin Isocarto depuis le répertoire ChatGPT, consultez le guide [Utiliser Isocarto dans ChatGPT](/utiliser/chatgpt).
:::

## Informations de connexion

Utilisez cette adresse dans les clients prenant en charge les serveurs MCP distants :

```text
https://mcp.isocarto.fr/mcp
```

La connexion utilise :

- le transport **Streamable HTTP** ;
- une authentification **OAuth 2.0 avec PKCE** ;
- les autorisations associées à votre compte et à votre abonnement Isocarto.

Vous ne devez pas créer manuellement de jeton ni renseigner de clé API. Le client découvre automatiquement les points d’entrée OAuth et ouvre la page d’autorisation Isocarto.

## Prérequis

Avant de commencer, vérifiez que vous disposez :

- d’un compte Isocarto actif ;
- d’un client compatible avec les serveurs MCP distants en Streamable HTTP ;
- d’un navigateur pour terminer l’autorisation OAuth.

Un client limité au transport STDIO ou ne prenant pas en charge OAuth ne peut pas se connecter directement au serveur distant Isocarto.

## Connecter Claude

Dans Claude sur le Web ou l’application Desktop :

1. Ouvrez **Personnaliser**, puis **Connecteurs**.
2. Cliquez sur **+**, puis sur **Ajouter un connecteur personnalisé**.
3. Nommez le connecteur **Isocarto**.
4. Renseignez l’URL `https://mcp.isocarto.fr/mcp`.
5. Cliquez sur **Ajouter**, puis sur **Connecter**.
6. Connectez-vous à Isocarto et acceptez les autorisations demandées.
7. Dans une conversation, activez Isocarto depuis **+ → Connecteurs**.

Sur une organisation Claude Team ou Enterprise, un propriétaire peut devoir ajouter le connecteur avant que les autres membres puissent l’utiliser.

## Connecter Codex

### Depuis l’interface Codex

1. Ouvrez **Plugins**.
2. Sélectionnez l’onglet **MCPs**, puis cliquez sur **Add**.
3. Choisissez **Streamable HTTP**.
4. Nommez le serveur `isocarto_mcp`.
5. Utilisez l’URL `https://mcp.isocarto.fr/mcp`.
6. Enregistrez, puis cliquez sur **Authenticate**.
7. Autorisez Codex depuis la page Isocarto ouverte dans le navigateur.

### Depuis le terminal

Ajoutez le serveur :

```bash
codex mcp add isocarto --url https://mcp.isocarto.fr/mcp
```

Lancez ensuite l’authentification :

```bash
codex mcp login isocarto
```

## Connecter Claude Code

Ajoutez Isocarto au niveau utilisateur pour le retrouver dans tous vos projets :

```bash
claude mcp add --transport http --scope user isocarto https://mcp.isocarto.fr/mcp
```

Puis :

1. lancez Claude Code ;
2. saisissez `/mcp` ;
3. sélectionnez **isocarto** ;
4. démarrez l’authentification OAuth ;
5. autorisez Claude Code dans le navigateur avant de revenir au terminal.

## Connecter Cursor

Ajoutez un serveur MCP distant depuis les réglages MCP de Cursor. Vous pouvez également utiliser cette configuration dans votre fichier `mcp.json` :

```json
{
  "mcpServers": {
    "isocarto": {
      "url": "https://mcp.isocarto.fr/mcp"
    }
  }
}
```

Activez ensuite le serveur dans Cursor et suivez le parcours OAuth proposé.

## Utiliser un autre client MCP

Lorsque votre client propose l’ajout d’un serveur personnalisé :

1. choisissez **Streamable HTTP** ou **Remote HTTP** ;
2. utilisez `https://mcp.isocarto.fr/mcp` ;
3. n’ajoutez aucun en-tête d’autorisation manuel ;
4. laissez le client découvrir automatiquement OAuth ;
5. terminez la connexion sur Isocarto.

Les libellés peuvent varier selon le client. Vérifiez dans sa documentation qu’il prend en charge Streamable HTTP et OAuth pour les serveurs MCP distants.

## Premières demandes à essayer

Une fois Isocarto connecté, commencez par une demande simple :

> Liste mes cartes Isocarto et indique le nombre de zones de chacune.

Vous pouvez ensuite demander :

- « Crée une carte pour mon étude d’implantation à Lille. »
- « Crée une zone de 10 minutes à pied autour de cette adresse. »
- « Affiche les zones de cette carte. »
- « Analyse la population, les revenus, les ménages et le logement de cette zone. »
- « Compare ces trois zones pour l’ouverture d’une pizzeria. »
- « Compte les concurrents dans chaque zone sans enregistrer de nouvelle couche. »
- « Estime la consommation des habitants de cette zone en restauration et le potentiel par restaurant. »
- « Classe les zones selon leur potentiel et explique les critères utilisés. »

Pour une demande plus pertinente, précisez l’activité, le territoire, le type de zone, les concurrents étudiés et la décision à prendre.

## Ce que le serveur MCP permet de faire

Selon les fonctionnalités de votre abonnement, votre assistant peut notamment :

- lister, créer et consulter vos cartes ;
- créer des zones isochrones, circulaires ou administratives ;
- afficher une carte lorsque le client prend en charge MCP Apps ;
- analyser les indicateurs démographiques, économiques et résidentiels ;
- compter des équipements BPE, des points d’intérêt OpenStreetMap ou des établissements SIRENE ;
- estimer la consommation des ménages résidents par thématique et le potentiel par établissement ;
- comparer plusieurs zones avec une définition homogène de la concurrence ;
- préparer une étude d’implantation, une analyse territoriale ou un scoring relatif ;
- supprimer une zone ou une couche après votre confirmation.

## Outils disponibles

Le serveur MCP met 30 outils à la disposition de votre assistant. Vous n’avez pas à les appeler vous-même : l’assistant choisit ceux dont il a besoin à partir de votre demande. Les outils en **écriture** modifient votre carte ; les **suppressions** demandent toujours votre confirmation.

### Cartes

Créer, retrouver, inspecter et afficher les cartes Isocarto.

| Outil | Rôle | Mode |
| --- | --- | --- |
| `list_maps` | **Lister mes cartes** : Retourne toutes les cartes accessibles avec leur nom, leur date de création et leur nombre de zones. | Lecture |
| `create_map` | **Créer une carte** : Crée une nouvelle carte avec un nom court et représentatif de l’objectif de l’utilisateur. | Écriture |
| `get_map_details` | **Détails d’une carte** : Retourne les zones, les couches de données, les identifiants techniques et le contexte complet d’une carte. | Lecture |
| `visualize_map` | **Visualiser une carte** : Prépare la carte, ses zones et ses données pour un client compatible MCP Apps, avec une synthèse structurée de secours. | Lecture |
| `reset_view` | **Réinitialiser la carte** : Efface les éléments temporaires de la vue afin de repartir d’un espace cartographique propre. | Écriture |
| `request_map_selection` | **Demander le choix d’une carte** : Prépare une sélection lorsque la demande de création ne précise pas la carte cible. | Interaction |

### Zones

Rechercher un territoire, créer une zone de chalandise et l’analyser.

| Outil | Rôle | Mode |
| --- | --- | --- |
| `search_location` | **Rechercher un lieu** : Géocode une adresse française et retourne ses coordonnées et son contexte géographique. | Lecture |
| `search_admin_area` | **Rechercher une zone administrative** : Recherche une commune, un EPCI ou un département et retourne ses codes administratifs. | Lecture |
| `create_isochrone_zone` | **Créer une zone isochrone ou isodistance** : Crée une zone accessible selon un temps de trajet ou une distance, avec le mode de transport demandé. | Écriture |
| `create_isochrone_zones` | **Créer plusieurs zones isochrones** : Crée en une seule opération plusieurs zones avec des adresses et paramètres de trajet distincts. | Écriture |
| `create_admin_zone` | **Créer une zone administrative** : Crée une zone à partir du périmètre officiel d’une commune, d’un EPCI ou d’un département. | Écriture |
| `create_circle_zone` | **Créer une zone circulaire** : Crée un cercle autour d’une adresse selon un rayon exprimé en kilomètres. | Écriture |
| `save_zone` | **Enregistrer une zone** : Enregistre dans une carte une zone temporaire déjà calculée, sans la recalculer. | Écriture |
| `save_zones` | **Enregistrer plusieurs zones** : Enregistre en lot plusieurs zones temporaires déjà présentes dans le contexte. | Écriture |
| `list_zones` | **Lister les zones** : Retourne toutes les zones d’une carte avec les identifiants techniques nécessaires aux analyses suivantes. | Lecture |
| `get_zone_details` | **Détails d’une zone** : Retourne la géométrie GeoJSON, la superficie et les métadonnées complètes d’une zone. | Lecture |
| `get_zone_analysis` | **Analyse territoriale d’une zone** : Retourne les indicateurs INSEE et Filosofi : population, âges, revenus, ménages, CSP, chômage et logement. | Lecture |
| `get_consumption_zone` | **Consommation résidente d’une zone** ([détails](#estimer-la-consommation-résidente)) : Estime par thématique la dépense annuelle des ménages résidents, la consommation totale et le potentiel par établissement face à la moyenne France. | Lecture |
| `delete_zone` | **Supprimer une zone** : Supprime définitivement une zone d’une carte Isocarto. | Suppression |

### Données et concurrence

Qualifier l’offre locale avec des bases qualifiées.

| Outil | Rôle | Mode |
| --- | --- | --- |
| `list_osm_categories` | **Lister les catégories OSM** : Retourne les catégories OpenStreetMap disponibles et leurs libellés normalisés. | Lecture |
| `list_bpe_categories` | **Lister les catégories BPE** : Retourne les codes et libellés de la Base permanente des équipements. | Lecture |
| `list_sirene_categories` | **Lister les catégories SIRENE** : Retourne les codes NAF et les natures juridiques utilisables dans les recherches SIRENE. | Lecture |
| `get_osm_data` | **Données OpenStreetMap** : Compte les points d’intérêt OSM dans une ou plusieurs zones et enregistre la couche calculée. | Écriture |
| `get_bpe_data` | **Données équipements BPE** : Compte les équipements officiels BPE dans une ou plusieurs zones et enregistre la couche calculée. | Écriture |
| `get_sirene_data` | **Données entreprises SIRENE** : Compte les établissements selon leur activité, leur nature juridique, leurs effectifs ou leur chiffre d’affaires. | Écriture |
| `get_multi_source_data` | **Recherche multi-sources** : Regroupe plusieurs comptages OSM, BPE et SIRENE dans une seule opération sur plusieurs zones. | Écriture |
| `get_competition_metrics` | **Mesurer la concurrence par zone** : Applique la même définition métier des concurrents directs, substituts et marché élargi à plusieurs zones. | Lecture |
| `save_data` | **Réenregistrer une couche** : Réenregistre une couche OSM, BPE ou SIRENE déjà calculée et présente dans le contexte. | Écriture |
| `save_datas` | **Réenregistrer plusieurs couches** : Réenregistre en lot plusieurs couches de données déjà calculées. | Écriture |
| `delete_data` | **Supprimer une couche de données** : Supprime définitivement une couche OSM, BPE ou SIRENE d’une carte. | Suppression |

## Estimer la consommation résidente

L’outil `get_consumption_zone` donne à votre assistant les mêmes estimations que la section [Consommation résidente](/utiliser/rapport/consommation) du rapport. Pour une zone enregistrée, il renvoie par thématique :

- l’indice de dépense d’un ménage de la zone (France = 100) ;
- la dépense annuelle par ménage et la consommation résidente de la zone ;
- le nombre d’établissements Sirene, hors entrepreneurs individuels ;
- la demande résidente théorique et le potentiel par établissement (France = 100).

Thématiques disponibles : restauration, cafés et bars, coiffure et esthétique, salles de sport, entretien de véhicules, alimentaire et consommation totale. Vous pouvez en demander une seule ou toutes à la fois.

Exemples de demandes :

- « Estime la consommation résidente de cette zone pour toutes les thématiques. »
- « Compare le potentiel par salle de sport de ces trois zones périphériques. »
- « Dans quelles zones de cette carte la demande des habitants en restauration est-elle la moins servie ? »

L’outil est en lecture seule : il ne crée aucune couche sur la carte. Il est disponible selon votre abonnement, comme la section du rapport.

:::warning[Résidents uniquement]

Les valeurs sont des fourchettes et ne comptent que les ménages qui habitent la zone. Elles ne représentent ni un chiffre d’affaires ni le marché total d’un site, et sont sous-estimées dans les centres-villes et les zones touristiques. Sous 5 établissements, les valeurs par établissement ne sont pas calculées. L’assistant a pour consigne de rappeler ces limites dans sa réponse.

:::

## Différences entre les clients

Les outils et les données Isocarto sont identiques, mais chaque assistant conserve ses propres capacités de raisonnement, de rédaction et de présentation.

ChatGPT et certains clients compatibles MCP Apps peuvent afficher le widget cartographique interactif. Les clients qui ne prennent pas en charge ce format reçoivent une synthèse textuelle et structurée contenant les mêmes informations utiles.

L’absence de widget ne bloque donc pas la création des zones, les comptages ou les analyses. Pour consulter les tracés complets et gérer visuellement la carte, vous pouvez toujours ouvrir [la carte Isocarto](https://isocarto.fr/carte).

## Données et limites de l’abonnement

Le serveur respecte automatiquement les fonctionnalités et les quotas de votre abonnement Isocarto.

- Une source non comprise dans l’offre n’est pas interrogée.
- Une couche de données persistante occupe un emplacement sur la carte.
- Recompter une couche déjà enregistrée sur une ou plusieurs zones ne consomme pas de nouvel emplacement.
- Les métriques explicitement demandées sans persistance ne créent pas de couche.
- Lorsqu’une limite est atteinte, l’assistant peut proposer de supprimer une couche existante, après votre confirmation, ou de passer à une offre supérieure.

Les données verrouillées ne sont jamais transmises au client MCP.

## Autorisations et révocation

Chaque connexion OAuth est indépendante. Vous pouvez connecter Claude, Codex et d’autres clients sans affecter la connexion utilisée par ChatGPT.

Pour consulter ou révoquer une connexion :

1. ouvrez [les connexions MCP de votre compte Isocarto](https://isocarto.fr/account/mcp) ;
2. identifiez le client concerné ;
3. cliquez sur l’action de révocation ;
4. confirmez la suppression.

Vous pouvez également déconnecter Isocarto depuis les paramètres du client concerné.

## Bonnes pratiques

- Laissez l’assistant récupérer les identifiants techniques des cartes, zones et couches ; ne les inventez pas.
- Confirmez explicitement toute suppression demandée.
- Pour comparer des zones, utilisez les mêmes indicateurs et les mêmes périmètres.
- Ne mélangez pas les comptages BPE, OSM et SIRENE comme s’ils formaient un total dédupliqué.
- Comparez les potentiels de consommation entre zones de même type (centre-ville avec centre-ville, périphérie avec périphérie).
- Vérifiez les décisions importantes dans la carte et, si nécessaire, sur le terrain.

## Résoudre les problèmes de connexion

### Le client demande de s’authentifier à nouveau

Révoquez la connexion concernée depuis [votre compte Isocarto](https://isocarto.fr/account/mcp), supprimez le serveur dans le client, puis ajoutez-le à nouveau.

### Le navigateur affiche une erreur sur `127.0.0.1`

Certains clients utilisent temporairement une adresse locale pour récupérer le code OAuth. Le client doit rester ouvert pendant l’autorisation afin d’écouter cette adresse. Si la page locale ne répond pas, relancez l’authentification depuis le client et vérifiez qu’aucun pare-feu ne bloque la boucle locale.

### Le client ne trouve aucun outil

Vérifiez que l’adresse configurée est exactement `https://mcp.isocarto.fr/mcp`, que le transport sélectionné est Streamable HTTP et que l’authentification est terminée. Redémarrez ensuite le client ou ouvrez une nouvelle conversation pour actualiser la liste des outils.

### Une carte ne s’affiche pas

Le client ne prend peut-être pas en charge MCP Apps. Demandez une synthèse textuelle des zones ou ouvrez [Isocarto](https://isocarto.fr/carte) pour consulter la carte interactive.

## Aller plus loin

- [Découvrir le serveur MCP Isocarto](https://isocarto.fr/mcp)
- [Utiliser Isocarto dans ChatGPT](/utiliser/chatgpt)
- [Créer votre première zone](/start)
- [Consulter les rapports de zones](/utiliser/rapport/general)
- [Lire la consommation résidente](/utiliser/rapport/consommation)
