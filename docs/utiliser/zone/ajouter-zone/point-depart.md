---
id: point-depart
title: Point de départ
description: Guide pour créer sélectionner un point de départ de zone
sidebar_label: Sélectionner un point de départ
slug: /utiliser/zone/ajouter-zone/point-depart
---

import { Icon } from '@iconify/react';

# Déterminer le point de départ de la zone

La création d’une zone dans Isocarto s’effectue depuis la barre latérale gauche, dans le panneau général.  
Cette page décrit l’ensemble du processus : ouverture du panneau, choix du point de départ, validation dans Street View et sélection du type de zone.

## Ouvrir le panneau "Ajouter nouvelle zone"

Dans la barre latérale, cliquez sur le bouton **"Ajouter nouvelle zone"** <span class="inline-flex items-center ml-1"><span class="relative flex h-6 w-6"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-100"></span><span class="relative inline-flex"><Icon icon="heroicons:plus-circle" className="h-6 w-6 text-slate-500" /></span></span></span>

Ce bouton est volontairement mis en avant afin de guider l’utilisateur vers la création de sa première zone.

![bouton ajout de zone](/img/bouton-add-zone.jpg)

Cela ouvre le panneau **"Ajouter nouvelle zone"**, qui présente en haut une section **Besoin d'aide ?** expliquant comment choisir et positionner le point central de la zone.

## Choisir le point de départ de la zone

Sur ordinateur, il suffit de **faire un clic droit sur la carte**. Sur mobile un appui long fait aussi apparaitre cette fenêtre de validation.
Une **modale de confirmation** apparaît alors :

- soit on confirme le point choisi ;
- soit on annule pour sélectionner un autre emplacement.

![positionnement du point de départ](/img/add-zone.jpg)

Ce point constitue le centre ou l’origine de la zone selon le type choisi.

## Vérifier le point dans Street View (Pegman)

### Utiliser Pegman

Dans la fenêtre de validation, un bouton représentant une **petite icône "bonhomme" [Pegman](/comprendre/glossaire#pegman)** est disponible.  
Il permet d’ouvrir **Google Street View** exactement à l’endroit sélectionné.

L’objectif :

- vérifier visuellement que l'adresse ou le point choisi correspond bien à la localisation souhaitée ;
- identifier les bâtiments, rues, commerces ou points d’intérêt autour du point ;
- éviter les erreurs de placement pour les analyses sensibles (zones commerciales, chalandise, zones scolaires, etc.).

![vérification Pegman](/img/add-zone-2.jpg)

L’utilisateur peut ensuite fermer cette fenêtre "Google Street View" et **confirmer ou recommencer** le processus.

## Choisir le type de zone

Une fois le point confirmé, quatre types de zones peuvent être créés :

- **Zone isochrone** (basée sur un temps de trajet)
- **Zone isodistante** (basée sur une distance)
- **Zone manuelle** (tracée à main levée)
- **Zone administrative** (basée sur des limites officielles)
