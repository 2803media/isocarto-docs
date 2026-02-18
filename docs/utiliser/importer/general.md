---
id: general
title: Importer des zones
description: Importer des zones depuis des outils externes dans Isocarto
sidebar_label: Importer des zones
slug: /utiliser/importer/general
---

# Importer des zones

L’importation de zones dans Isocarto peut se faire à différents endroits de l’outil, offrant une flexibilité d’usage. Vous pouvez lancer l’import depuis le menu en haut, dans l’onglet **Outils**, en sélectionnant **Import de zones**, ou directement depuis la barre latérale lors de la création d’une nouvelle zone, via le bouton **Importer des zones**.

## Sélection du fichier à importer

Une fois que vous avez cliqué sur le bouton d’import, vous devrez sélectionner un fichier provenant d’un autre outil de géomarketing, tel que Smappen, QGIS, ArcGIS, Google Earth, ou Géoportail. Pensez à préparer vos zones en amont dans ces outils.

:::info[info]

Plus d'information sur comment exporter ses zones depuis Smappen [ici](/utiliser/importer/smappen).
:::

:::info[info]

Plus d'information sur comment exporter ses zones depuis Géoportail [ici](/utiliser/importer/geoportail).
:::

## Processus d'import

Une fois que vous avez exporté vos zones de vos anciens outils, vous pouvez les importer dans Isocarto.

![import de zones](/img/import-zone-1.jpg)

Les formats compatibles pour l’import sont les suivants :

- Fichiers KML
- Fichiers GeoJSON
- Shapefiles (fichiers ZIP contenant .shp, .shx, .dbf, .prj).

Assurez-vous que le fichier soit prêt dans l’un de ces formats avant de continuer.

## Conversion et aperçu

Après avoir sélectionné le fichier, cliquez sur le bouton **Convertir les zones**.
![import de zones - conversion](/img/import-zone-2.jpg)

L’outil va analyser le fichier, et vous verrez un aperçu des zones converties avec un décompte, des couleurs, et le type de chaque zone. Cela vous permettra de vérifier que tout est correct avant l’import.

![import de zones - carte](/img/import-zone-3.jpg)

## Choix de la carte cible

Ensuite, choisissez la carte dans laquelle importer ces zones. Vous pouvez choisir une carte existante ou créer une nouvelle carte pour accueillir les zones importées.

![import de zones - import](/img/import-zone-4.jpg)

## Importation finale

Une fois la carte sélectionnée, cliquez sur **Importer les zones**. Les zones apparaîtront immédiatement dans votre application Isocarto, prêtes à être visualisées et exploitées sans autres manipulations.

:::tip[Astuce]

Pour un import optimisé, assurez-vous que vos zones soient bien géolocalisées dans les outils de départ. Cela garantit une importation fluide et précise dans Isocarto.

:::
