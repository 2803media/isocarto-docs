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
https://api.isocarto.fr/mcp
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
4. Renseignez l’URL `https://api.isocarto.fr/mcp`.
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
5. Utilisez l’URL `https://api.isocarto.fr/mcp`.
6. Enregistrez, puis cliquez sur **Authenticate**.
7. Autorisez Codex depuis la page Isocarto ouverte dans le navigateur.

### Depuis le terminal

Ajoutez le serveur :

```bash
codex mcp add isocarto --url https://api.isocarto.fr/mcp
```

Lancez ensuite l’authentification :

```bash
codex mcp login isocarto
```

## Connecter Claude Code

Ajoutez Isocarto au niveau utilisateur pour le retrouver dans tous vos projets :

```bash
claude mcp add --transport http --scope user isocarto https://api.isocarto.fr/mcp
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
      "url": "https://api.isocarto.fr/mcp"
    }
  }
}
```

Activez ensuite le serveur dans Cursor et suivez le parcours OAuth proposé.

## Utiliser un autre client MCP

Lorsque votre client propose l’ajout d’un serveur personnalisé :

1. choisissez **Streamable HTTP** ou **Remote HTTP** ;
2. utilisez `https://api.isocarto.fr/mcp` ;
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
- « Classe les zones selon leur potentiel et explique les critères utilisés. »

Pour une demande plus pertinente, précisez l’activité, le territoire, le type de zone, les concurrents étudiés et la décision à prendre.

## Ce que le serveur MCP permet de faire

Selon les fonctionnalités de votre abonnement, votre assistant peut notamment :

- lister, créer et consulter vos cartes ;
- créer des zones isochrones, circulaires ou administratives ;
- afficher une carte lorsque le client prend en charge MCP Apps ;
- analyser les indicateurs démographiques, économiques et résidentiels ;
- compter des équipements BPE, des points d’intérêt OpenStreetMap ou des établissements SIRENE ;
- comparer plusieurs zones avec une définition homogène de la concurrence ;
- préparer une étude d’implantation, une analyse territoriale ou un scoring relatif ;
- supprimer une zone ou une couche après votre confirmation.

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
- Vérifiez les décisions importantes dans la carte et, si nécessaire, sur le terrain.

## Résoudre les problèmes de connexion

### Le client demande de s’authentifier à nouveau

Révoquez la connexion concernée depuis [votre compte Isocarto](https://isocarto.fr/account/mcp), supprimez le serveur dans le client, puis ajoutez-le à nouveau.

### Le navigateur affiche une erreur sur `127.0.0.1`

Certains clients utilisent temporairement une adresse locale pour récupérer le code OAuth. Le client doit rester ouvert pendant l’autorisation afin d’écouter cette adresse. Si la page locale ne répond pas, relancez l’authentification depuis le client et vérifiez qu’aucun pare-feu ne bloque la boucle locale.

### Le client ne trouve aucun outil

Vérifiez que l’adresse configurée est exactement `https://api.isocarto.fr/mcp`, que le transport sélectionné est Streamable HTTP et que l’authentification est terminée. Redémarrez ensuite le client ou ouvrez une nouvelle conversation pour actualiser la liste des outils.

### Une carte ne s’affiche pas

Le client ne prend peut-être pas en charge MCP Apps. Demandez une synthèse textuelle des zones ou ouvrez [Isocarto](https://isocarto.fr/carte) pour consulter la carte interactive.

## Aller plus loin

- [Découvrir le serveur MCP Isocarto](https://isocarto.fr/mcp)
- [Utiliser Isocarto dans ChatGPT](/utiliser/chatgpt)
- [Créer votre première zone](/start)
- [Consulter les rapports de zones](/utiliser/rapport/general)
