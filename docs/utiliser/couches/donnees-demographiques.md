---
id: donnees-demographiques
title: Données démographiques
description: Présentation et gestion des indicateurs démographiques dans Isocarto.
sidebar_label: Données démographiques
slug: /utiliser/couches/donnees-demographiques
---

import VimeoVideo from '@site/src/theme/VimeoVideo';

# Données démographiques

L'option **Données démographiques** de l'onglet "Couches de données" permet d’afficher la vingtaine d'indicateurs statistiques liés à la population et les logements sur la carte.

<VimeoVideo videoId="1146620428" />

## Activation des indicateurs

Pour afficher les données démographiques, activez le toggle principal (devenant vert). Cela fera apparaître un menu déroulant pour sélectionner un indicateur spécifique.

![layer demographie](/img/layer-demographie.jpg)

## Catégories d’indicateurs

### Individus

- **Densité de population** : Nombre d’habitants par kilomètre carré.
- **Variation de la population** : Évolution entre 2017 et 2019.
- **Répartition par tranches d’âge** : Pourcentages des groupes d’âge (moins de 18 ans, 18-24 ans, 25-34 ans, 35-44 ans, 45-54 ans, 55-64 ans, 65-79 ans, plus de 80 ans).

![visualisation](/img/demographie.jpg)

### Revenus

- **Revenu moyen** : Niveau de vie moyen en euros.
- **Pourcentage de ménages pauvres** : Données tronquées à 80% pour raison de confidentialité.

### Ménages

- **Ménages d’un seul individu** : Pourcentage de ménages composés d’une seule personne.
- **Ménages nombreux** : Pourcentage de ménages de cinq individus ou plus.
- **Ménages monoparentaux** : Pourcentage de ménages monoparentaux.

### Logement

- **Surface moyenne des logements** : Superficie moyenne en mètres carrés.
- **Type de logement** : Pourcentage de logements collectifs, maisons, propriétaires, logements sociaux.
- **Âge des logements** : Pourcentages des logements construits avant 1945, entre 1945 et 1969, entre 1970 et 1989, et depuis 1990.

## Légende et affichage dynamique

Chaque indicateur sélectionné dispose d’une légende dynamique en bas à droite de la carte. L’affichage s’adapte en fonction du niveau de zoom, garantissant une lisibilité optimale à toutes les échelles.
