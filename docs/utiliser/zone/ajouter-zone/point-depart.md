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

Dans la barre latérale, cliquez sur le bouton **"Ajouter nouvelle zone"** avec l'icône <span class="inline-flex items-center h-6 w-6 mx-0.5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="absolute animate-ping text-slate-400 opacity-100"><circle cx="12" cy="12" r="10"></circle></svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="relative z-10"><path fill="currentColor" stroke="currentColor" stroke-width="0" d="M11 13v3q0 .425.288.713T12 17t.713-.288T13 16v-3h3q.425 0 .713-.288T17 12t-.288-.712T16 11h-3V8q0-.425-.288-.712T12 7t-.712.288T11 8v3H8q-.425 0-.712.288T7 12t.288.713T8 13zm1 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"></path></svg></span>

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
