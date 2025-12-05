---
id: zone-isodistance
title: Création d'une zone isodistance
description: Guide pour créer une zone basée sur une distance définie.
sidebar_label: Créer une zone isodistance
slug: /utiliser/zone/ajouter-zone/zone-isodistance
---

import VimeoVideo from '@site/src/theme/VimeoVideo';

# Création d'une zone isodistance

La zone isodistance permet de visualiser une aire géographique définie par un rayon exprimé en mètres ou en kilomètres autour d’un point de départ. Contrairement aux zones isochrones, elle ne dépend pas du mode de déplacement mais uniquement de la distance.

## Étapes de création

<VimeoVideo videoId="1143866123" />

1. **Ouvrir le panneau "Ajouter nouvelle zone"**

2. **Ajouter un point de départ** : Suivez les étapes détaillées dans la documentation sur la  
   [définition du point de départ](/utiliser/ajouter-zone/point-depart).

3. **Choisir le type de zone** : Sélectionnez l’icône **"Distance"** pour indiquer que vous souhaitez créer une zone isodistance.

4. **Définir le mode de déplacement** : Vous avez plusieurs options :

   - **À pied**
   - **En voiture**
   - **À vélo**
   - **En transport en commun** (train, tram, bus, métro...)
   - **En camion**

   Cliquez sur l’icône correspondante pour sélectionner le mode de déplacement souhaité.

5. **Définir la distance** : Indiquez la distance souhaitée.  
   Les zones isodistances peuvent couvrir des distances de **1 à 200 kilomètres**.

6. **Créer la zone** : Une fois la distance définie, cliquez sur le bouton **"Créer la zone"** pour générer la zone isodistance sur la carte.

## Zones primaires, secondaires et tertiaires

Les zones isodistances peuvent également être utilisées pour structurer une analyse en trois niveaux :

- **Zone primaire** : distance la plus courte (ex : 0-500 m), zone d'influence immédiate.
- **Zone secondaire** : distance intermédiaire (ex : 500 m - 1 km), zone d'usagers réguliers mais moins proches.
- **Zone tertiaire** : distance plus large (ex : 1 km - 3 km), zone d'attractivité élargie.

Ces découpages s’appliquent particulièrement bien aux établissements dont l’accès ne dépend pas fortement du mode de déplacement (commerces, services, implantations locales).

Plus d'information sur le concept des [zones en trois niveaux](/comprendre/definitions/zone-primaire).

## Exemples d'utilisation

La zone isodistance est particulièrement utile pour :

- Définir un rayon précis autour d’une implantation.
- Calculer des zones de chalandise simples et homogènes.
- Comparer des zones d’exclusion ou d’influence (ex : 1 km autour d’une école).
- Réaliser des analyses réglementaires basées sur une distance fixe.
