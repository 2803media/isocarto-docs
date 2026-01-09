---
id: zone-chalandise-donnees-cb
title: Zone de chalandise par données CB
description: Déterminer une zone de chalandise via les données de cartes bancaires
sidebar_label: Déterminer la vrai zone de chalandise
slug: /comprendre/methodo/zone-chalandise-donnees-cb
---

# Déterminer une zone de chalandise via les données de cartes bancaires

L’analyse de la zone de chalandise par données de cartes bancaires (CB) représente aujourd’hui l’approche la plus avancée et la plus réaliste pour comprendre l’origine géographique réelle de la clientèle d’un commerce existant.  
Contrairement aux modèles théoriques (distance, temps ou découpage administratif), cette méthode repose sur des **comportements d’achat observés**.

## Principe général

Chaque transaction par carte bancaire contient, côté réseaux de paiement et établissements financiers :

- le point de vente où l’achat est réalisé,
- une information de localisation agrégée du porteur (lieu de résidence ou zone de vie),
- une date, un montant et un type de transaction.

Ces données ne sont **jamais transmises à l’unité**, mais **anonymisées, agrégées et strictement conformes au RGPD**. Elles sont ensuite exploitées par des acteurs spécialisés pour produire des analyses géomarketing à forte valeur ajoutée.

## Un accès réservé à des acteurs établis

Il est essentiel de comprendre que les **données de transactions CB ne sont pas librement accessibles**.

### Qui peut réellement y accéder ?

- grandes enseignes nationales,
- réseaux de franchises structurés,
- retailers multi-sites,
- groupes disposant d’un volume d’activité suffisant.

Ces acteurs disposent :
- des budgets nécessaires,
- des volumes de transactions requis pour garantir l’anonymisation,
- de partenariats contractuels avec les réseaux bancaires ou agrégateurs.

:::warning[Point clé]

Les données CB sont **réservées à des réseaux établis** capables de financer ces accès.  
Un commerce indépendant ou un petit réseau n’y accède généralement pas directement.

:::

### Accès indirect pour les acteurs plus modestes

Les structures plus petites peuvent toutefois en bénéficier **indirectement** via :
- cabinets d’études spécialisés,
- foncières commerciales,
- plateformes de géomarketing intégrant des données CB agrégées,
- études ponctuelles (audit d’implantation, benchmark).

## Type de zone obtenue

### Zone de chalandise observée (réelle)

La zone n’est plus définie par une hypothèse, mais par les **zones de provenance effective des clients**.

Caractéristiques :
- contours irréguliers et non circulaires,
- intégration implicite de la concurrence,
- prise en compte des freins réels (axes routiers, coupures urbaines, attracteurs),
- reflet direct des usages et habitudes de consommation.

:::info[À retenir]

Deux commerces proches géographiquement peuvent avoir des zones de chalandise radicalement différentes selon leur positionnement, leur notoriété et leur environnement.

:::

## Données généralement fournies

Selon le fournisseur et le niveau d’abonnement, les livrables peuvent inclure :

- carte de densité clients par zones (IRIS, carreaux, hexagones),
- répartition domicile / travail,
- distance ou temps médian de déplacement,
- fréquence et récurrence de visite,
- taux de clientèle locale vs clientèle de destination,
- horaires de visite,
- évolution temporelle (avant / après ouverture, travaux, campagnes).

:::info[Secteurs concernés]

Restauration, retail, centres commerciaux, hôtellerie, loisirs, grande distribution, franchises.

:::

## Itération avec Isocarto : transformer une donnée coûteuse en modèle exploitable

Les données CB fournissent une **photographie réelle**, mais souvent ponctuelle et coûteuse.  
La valeur ajoutée d’Isocarto réside dans la capacité à **reproduire et généraliser cette zone réelle par itération**.

### Méthodologie recommandée

1. Importer ou analyser la zone de chalandise issue des données CB
2. Créer des zones isochrones (temps) ou par distance autour du point de vente
3. Comparer les écarts entre zones théoriques et zone observée
4. Ajuster :
   - temps de parcours,
   - modes de transport,
   - exclusions géographiques,
   - barrières naturelles ou urbaines
5. Itérer jusqu’à obtenir une zone **théorique cohérente avec la réalité CB**

:::tip[Approche clé]

L’objectif n’est pas de dépendre en permanence des données CB, mais de **calibrer un modèle reproductible** à partir d’une réalité observée.

:::

## Comparaison avec les autres types de zones

| Méthode                  | Nature          | Réalisme | Coût | Usage principal |
| ------------------------ | --------------- | -------- | ---- | --------------- |
| **Distance**             | Théorique       | Faible   | €    | Estimation rapide |
| **Isochrone**            | Modélisée       | Bon      | €€   | Accessibilité |
| **Administrative**       | Statistique     | Moyen    | €    | Analyses INSEE |
| **CB transactionnelle**  | Observée réelle | Excellent| €€€  | Calibration stratégique |

## Cas d’usage stratégiques

- validation ou correction d’une zone de chalandise existante,
- harmonisation des zones sur un réseau de points de vente,
- amélioration du ciblage marketing local,
- aide à la décision pour l’ouverture de nouveaux sites,
- benchmarking de performances inter-magasins.

## Limites à connaître

- applicable uniquement à des commerces existants,
- dépendante du mix cartes / usages locaux,
- granularité variable selon la densité,
- nécessite une interprétation experte pour éviter les biais.

## Positionnement dans Isocarto

Dans Isocarto, les données CB servent de **référence ultime**, permettant :

- de valider objectivement une méthodologie,
- d’affiner les zones isochrones ou manuelles,
- de construire des modèles robustes, réutilisables et comparables.

**Pour aller plus loin** : découvrez comment [croiser ces zones avec des données socio-démographiques](/comprendre/methodo/lire-donnees) afin d’identifier des leviers de croissance durables.
