---
id: urbanisme-immobilier
title: Urbanisme et Immobilier
description: Guide pour afficher et analyser les données d'urbanisme et immobilier dans Isocarto.
sidebar_label: Urbanisme et Immobilier
slug: /utiliser/couches/urbanisme-immobilier
---

import VimeoVideo from '@site/src/theme/VimeoVideo';

# Urbanisme et Immobilier

Dans l'onglet **Couches de données** de l'application Isocarto, vous pouvez accéder à la section **Urbanisme et Immobilier** depuis la barre latérale en cliquant sur **Urbanisme et Immobilier**.

Cette section regroupe plusieurs couches permettant d’analyser le foncier, le cadre réglementaire et les dynamiques immobilières d’un territoire.

<VimeoVideo videoId="1147004584" />

## Couches disponibles

Les couches suivantes peuvent être affichées sur la carte :

- **Plan cadastral**
- **Ventes immobilières**
- **Données propriétaires**
- **Plan local d’urbanisme (PLU)**
- **Zones patrimoniales protégées**

Chaque couche peut être activée ou désactivée indépendamment selon vos besoins d’analyse.

## Plan cadastral

Le **plan cadastral** permet d’afficher le cadastre en temps réel directement sur la carte.

![cadastre](/img/cadastre.jpg)

### Informations disponibles sur une parcelle

Lorsque le cadastre est activé, un clic sur une parcelle affiche ses informations détaillées dans la barre latérale droite:

- **Code INSEE** de la commune
- **Préfixe de la parcelle**
- **Identifiant de la section**
- **Numéro de la parcelle**
- **Surface de la parcelle**

Ces informations permettent une identification précise et rapide des parcelles cadastrales.

### Personnalisation de l’affichage

L’affichage du cadastre est entièrement personnalisable. Vous pouvez notamment :

- Afficher ou masquer :
  - les **intitulés des sections**
  - les **lignes de bâtiments**
  - le **remplissage des bâtiments**
  - les **lignes de parcelles**
- Choisir d’afficher ou non :
  - les **mesures des parcelles**

### Mesure de la parcelle sélectionnée

Pour la parcelle actuellement sélectionnée, il est possible d’afficher le **métrage (périmètre)** directement, afin de faciliter l’analyse foncière sans quitter la carte.

## Ventes immobilières

Cliquez sur **Ventes immobilières** dans la section **Urbanisme et Immobilier** pour afficher les données de transactions immobilières sur la carte.

![immobilier](/img/immobilier.jpg)

### Affichage des ventes sur la carte

Selon le **niveau de zoom**, les ventes immobilières peuvent afficher directement :

- les **prix** des transactions,
- leur répartition géographique.

### Détail d’une vente

Un clic sur une vente permet d’afficher, dans la barre latérale droite, le **détail et l’historique de la transaction immobilière**.

### Historique des ventes

L’historique des ventes immobilières peut être filtré par période.  
À noter :

- les ventes sont **historisées à partir de 2014**.

### Filtres par typologie de biens

Il est possible de filtrer les ventes selon la **typologie des biens** :

- **Maisons**
- **Appartements**
- **Dépendances**
- **Terrains**
- **Locaux industriels**

### Modes de visualisation

Deux modes d’affichage sont disponibles :

- **Affichage par typologie de biens**  
  Permet de distinguer visuellement les types de transactions.
- **Affichage par prix au mètre carré**  
  Les ventes sont représentées selon des **classes de prix (quartiles)**, facilitant la lecture des niveaux de marché.

## Données propriétaires

La couche **Données propriétaires** permet d’analyser la répartition et la typologie des propriétaires fonciers.

![proprietaires](/img/proprietaires.jpg)

### Typologies de propriétaires identifiées

Vous pouvez afficher ou masquer les parcelles selon la **typologie des propriétaires** :

- **Personnes morales**
- **État**
- **Région**
- **Département**
- **Commune**
- **Office HLM**
- **Personne morale - Économie mixte**
- **Copropriétaire**
- **Associé**
- **Etablissements publics**

Chaque typologie peut être cochée ou décochée afin d’obtenir une lecture ciblée du territoire.

### Détail d’un propriétaire

Pour afficher le détail d’un propriétaire :

1. Cliquez sur une **parcelle colorée**.
2. Consultez la **barre latérale droite**.

Les informations affichées sont :

- **Nom du propriétaire**
- **Numéro de SIREN**
- **Nombre total de parcelles détenues**

## Plan local d’urbanisme (PLU)

La couche **Plan local d’urbanisme (PLU)** permet d’afficher les zones de règlementation d’urbanisme définies par le territoire.

![plu](/img/plu.jpg)

### Affichage des zones PLU sur la carte

Les zones définies par le PLU sont **superposées à la carte**. Chaque zone a une couleur distincte, indiquant un type spécifique de règlement :

- **Zones résidentielles**
- **Zones commerciales**
- **Zones industrielles**
- **Zones agricoles**
- **Zones naturelles**

### Informations sur une zone PLU

Lorsque vous cliquez sur une parcelle, la **barre latérale droite** affiche les informations suivantes :

- **Type de zone** (par exemple, zone résidentielle, zone commerciale, zone industrielle, zone agricole, zone naturelle, etc.)
- **Règlement de la zone** : restrictions et obligations liées à l’utilisation du sol dans cette zone.

### Téléchargement du règlement PLU

Il est possible de **télécharger l'intégralité du règlement** du PLU au format PDF directement depuis l'interface de la carte.

## Zones patrimoniales protégées

La couche **Zones patrimoniales protégées** permet d’identifier les secteurs soumis à des protections patrimoniales spécifiques.

![monuments](/img/monuments.jpg)

### Types de zones affichées

Les typologies suivantes peuvent être affichées sur la carte :

- **Sites patrimoniaux remarquables**
- **Sites inscrits**
- **Sites classés**
- **Monuments historiques**

Les **monuments historiques** sont généralement représentés avec un **cercle concentrique de 500 mètres de rayon**, correspondant à leur périmètre de protection.

### Filtres par typologie

Chaque typologie de zone protégée peut être :

- **affichée**
- ou **masquée**

afin de concentrer l’analyse sur un type de protection spécifique.

### Cas d’usage

Ces informations sont particulièrement utiles pour :

- les **projets immobiliers**, afin d’anticiper les contraintes réglementaires,
- les projets de **construction ou de rénovation**,
- l’identification de **zones d’intérêt historique**,
- l’analyse de **zones à potentiel touristique ou locatif**.

## Cas d’usage

Les couches **Urbanisme et Immobilier** permettent une lecture complète et contextualisée d’un territoire, en croisant données foncières, réglementaires, patrimoniales et économiques.

Elles sont particulièrement utiles pour :

- **Analyser le foncier et le parcellaire**

  - identification précise des parcelles,
  - compréhension des surfaces, périmètres et limites cadastrales,
  - repérage des grands propriétaires fonciers.

- **Étudier le marché immobilier local**

  - analyse des prix et des dynamiques de ventes,
  - comparaison par typologie de biens (maisons, appartements, terrains, etc.),
  - visualisation des niveaux de prix au mètre carré.

- **Sécuriser les projets immobiliers et d’aménagement**

  - identification des règles d’urbanisme applicables via le PLU,
  - anticipation des contraintes réglementaires et patrimoniales,
  - accès direct aux règlements et documents officiels.

- **Identifier les contraintes et opportunités patrimoniales**

  - repérage des zones protégées et des périmètres de monuments historiques,
  - évaluation de la complexité réglementaire pour la construction ou la rénovation,
  - valorisation des secteurs à intérêt historique ou touristique.

- **Croiser les données pour une aide à la décision**
  - combinaison des ventes, du cadastre, du PLU et du patrimoine,
  - analyse fine d’un secteur avant acquisition, investissement ou étude urbaine,
  - appui à la décision pour les professionnels de l’immobilier, de l’aménagement ou des collectivités.

Ces couches offrent ainsi une **vision globale, cohérente et opérationnelle** du territoire, directement exploitable dans des contextes d’analyse, de prospection ou de projet.
