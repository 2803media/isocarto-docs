---
title: Consommation résidente par thématique
sidebar_label: Consommation résidente
description: Estimer la dépense des ménages d'une zone par thématique et le potentiel par établissement face à la moyenne France dans les rapports Isocarto.
slug: /utiliser/rapport/consommation
---

# Consommation résidente par thématique

La section **Consommation résidente** du rapport estime ce que dépensent chaque année les ménages qui habitent la zone active, thématique par thématique : restauration, cafés et bars, coiffure, salles de sport, entretien de véhicules, alimentaire et consommation totale.

Elle répond à deux questions :

- **Les habitants dépensent-ils plus ou moins qu'ailleurs, et combien au total ?**
- **Cette demande est-elle bien ou mal servie par les établissements présents ?**

:::warning[Résidents uniquement]

Ces chiffres ne comptent que la demande des **ménages résidant dans la zone**. Ils ignorent les actifs qui y travaillent sans y habiter, les touristes, les flux de passage et les entreprises. Ils sont donc sous-estimés, parfois fortement, dans les centres-villes et les zones touristiques, et ne représentent jamais le marché total d'un site.

:::

## Accéder à la section

La section se trouve dans le rapport de la zone, juste après **Revenu des ménages**. Vous pouvez aussi l'atteindre directement avec l'entrée **Consommation** du menu de navigation en haut du rapport.

Elle est disponible selon votre abonnement. Si elle n'est pas comprise dans votre offre, les tableaux apparaissent floutés avec un lien vers les [tarifs](https://isocarto.fr/pricing).

:::info[Note]

Le calcul est fait à la volée pour chaque zone et prend quelques secondes.

:::

## Les thématiques étudiées

| Thématique | Établissements comptés |
| --- | --- |
| Restauration | restaurants traditionnels et cafétérias |
| Cafés, bars | débits de boissons |
| Coiffure, esthétique | salons de coiffure et instituts de beauté |
| Salles de sport | centres de culture physique (fitness) |
| Entretien de véhicules | garages d'entretien et de réparation automobile |
| Alimentaire | supérettes, supermarchés, hypermarchés, commerces alimentaires spécialisés, boulangeries, pâtisseries et charcuteries |
| Consommation totale | aucun : dépense globale des ménages |

Les établissements sont issus de la base **Sirene**, hors entrepreneurs individuels.

## Tableau 1 : demande des ménages résidents

Le premier tableau mesure la dépense des habitants.

| Colonne | Ce qu'elle indique |
| --- | --- |
| **Écart / France** | Dépense d'un ménage de la zone comparée à celle d'un ménage moyen en France, en %. Exemple : « +12 à +27 % ». |
| **Dépense annuelle / ménage** | Montant dépensé par an par un ménage de la zone pour la thématique. |
| **Consommation résidente annuelle** | Dépense annuelle de l'ensemble des ménages de la zone pour la thématique. |

L'écart est coloré : en vert lorsque les habitants dépensent plus que la moyenne nationale, en rouge lorsqu'ils dépensent moins, d'autant plus foncé que l'écart dépasse 5 puis 10 %. Il reste gris lorsque la fourchette englobe la moyenne France.

## Tableau 2 : offre et potentiel par établissement

Le second tableau confronte cette demande aux établissements présents dans la zone.

| Colonne | Ce qu'elle indique |
| --- | --- |
| **Établissements** | Nombre d'établissements de la thématique dans la zone. |
| **Demande résidente théorique annuelle / établissement** | Consommation résidente divisée par le nombre d'établissements. |
| **Potentiel / établissement (France = 100)** | Demande résidente par établissement comparée à la moyenne France. |

### Lire le potentiel par établissement

C'est l'indicateur le plus directement exploitable :

- **100** : chaque établissement dispose d'autant de demande résidente qu'en moyenne en France ;
- **au-dessus de 100** : plus de demande résidente par établissement, le marché local est moins servi ;
- **en dessous de 100** : la demande résidente est partagée entre davantage d'établissements.

Le potentiel est coloré : en vert au-dessus de 110 (plus foncé au-delà de 125), en rouge en dessous de 90 (plus foncé sous 75), en gris lorsqu'il reste proche de 100.

:::tip[Astuce]

Un potentiel bas dans un centre-ville n'indique pas forcément une saturation : une grande partie de la clientèle y vient d'ailleurs (salariés, visiteurs) et n'est pas comptée. Comparez plutôt des zones de même type entre elles : centre-ville avec centre-ville, périphérie avec périphérie.

:::

### Valeurs « Non significatif » et « – »

- **Non significatif** : moins de 5 établissements dans la zone. Avec un ou deux établissements, la valeur par établissement prendrait des valeurs extrêmes : elle n'est pas calculée.
- **–** : aucun établissement de la thématique dans la zone, ou valeur indisponible.

## Pourquoi des fourchettes ?

Chaque valeur est affichée sous forme de fourchette, par exemple « 698 € à 792 € ». La borne basse et la borne haute correspondent à deux manières d'estimer la dépense :

- selon le **niveau de vie** des ménages de la zone seul ;
- selon le niveau de vie **corrigé de la composition des ménages** (part de personnes seules et de familles monoparentales).

Les deux effets se recoupent en partie : la valeur réelle se situe entre les deux bornes. Lorsque les deux estimations sont identiques, une seule valeur est affichée.

## Méthodologie

L'estimation part de la dépense moyenne d'un ménage en France par thématique, issue de l'enquête **Budget de famille de l'INSEE**. Elle est ensuite ajustée à la zone :

1. **Niveau de vie** : la dépense est modulée selon l'écart entre le niveau de vie de la zone et la moyenne nationale. La sensibilité au revenu diffère selon la thématique : elle est forte pour la restauration ou le sport, faible pour l'alimentaire.
2. **Composition des ménages** : une zone comptant beaucoup de personnes seules ne consomme pas comme une zone familiale.
3. **Motorisation** : pour l'entretien de véhicules, la dépense est ajustée à la part de ménages ayant au moins une voiture dans la zone. Un centre-ville où 45 % des ménages sont motorisés, contre 81 % en France, voit sa dépense fortement réduite.
4. **Nombre de ménages** : la dépense par ménage est multipliée par le nombre de ménages de la zone pour obtenir la consommation résidente.

Les montants sont exprimés en euros 2017, année de l'enquête. Les écarts et les potentiels, calculés par rapport à la France, ne sont pas affectés par cette date.

**Sources** : INSEE (enquête Budget de famille 2017, Filosofi, recensement à l'IRIS) et Sirene.

## Limites à connaître

- **Résidents uniquement** : la clientèle de passage, les salariés non résidents et les touristes ne sont pas comptés.
- **Ce n'est pas un chiffre d'affaires** : la demande résidente théorique par établissement ne prédit pas le chiffre d'affaires d'un établissement.
- **Le nombre d'établissements ne tient pas compte de leur taille** : un hypermarché pèse autant qu'une épicerie. Une zone sans grande surface peut afficher un potentiel alimentaire élevé parce que ses habitants font leurs courses en dehors de la zone.
- **Offre concentrée** : garages et salles de sport se regroupent souvent dans les zones d'activité, le long des axes. Un potentiel élevé en zone résidentielle peut traduire une offre située juste à côté, plutôt qu'une demande mal servie. Élargir la zone permet de le vérifier.

## Comparer avec une autre zone

Lorsqu'une [zone de comparaison](/utiliser/rapport/comparaison) est sélectionnée, chaque tableau gagne une dernière colonne, séparée par un trait vertical :

- **Écart / France : _nom de la zone_** dans le tableau de la demande ;
- **Potentiel / établissement : _nom de la zone_** dans le tableau de l'offre.

Ces colonnes affichent les valeurs propres à la zone de comparaison, dans la même unité que la zone active, pour les lire côte à côte.

## Dans l'analyse IA et les assistants

- L'[analyse IA](/utiliser/rapport/ia) du rapport tient compte de ces données dans ses parties consacrées à l'économie et aux opportunités.
- Depuis un assistant connecté par [MCP](/utiliser/mcp) (Claude, ChatGPT, Codex…), vous pouvez obtenir les mêmes estimations en langage naturel.

## Cas d'usage

:::tip[Exemple d'application]

Vérifier qu'un quartier résidentiel aisé dispose d'assez de demande pour un restaurant supplémentaire.
:::

:::tip[Exemple d'application]

Comparer le potentiel par salle de sport de deux zones périphériques avant de choisir un emplacement.
:::

:::tip[Exemple d'application]

Compléter un État Local du Marché avec une estimation de la demande des habitants par thématique.
:::

## Conclusion

La section Consommation résidente transforme le profil des habitants en une estimation concrète de leur demande, puis la confronte à l'offre en place. Elle aide à repérer les zones où la demande locale est peu servie, à condition de la lire pour ce qu'elle est : la demande des résidents, à comparer entre zones de même type.
