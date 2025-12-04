---
sidebar_label: Choisir le type de zone
title: Choisir le type de zone
slug: /methodo/choisir-type-zone
---

# Choisir le type de zone

Le choix du type de zone conditionne la qualité de l'analyse géo-marketing. Chaque type de zone répond à des besoins différents selon l'objectif étudié, la granularité souhaitée et les données disponibles.

## Types de zones

### Zones par distance

Zones définies selon des rayons géographiques. Adaptées pour des analyses rapides ou des zones rurales où le réseau viaire a peu de variation.

:::info[Exemples de secteurs]

Commerce agricole, activités en zone peu dense, première évaluation d'un territoire.

:::

### Zones isochrones (temps de trajet)

Basées sur un temps de déplacement réel. Elles reflètent l'accessibilité effective et sont privilégiées pour les activités dépendantes de la mobilité.

:::info[Exemples de secteurs]

Restauration, commerce de détail, services de proximité, centres de loisirs, salles de sport.

:::

### Zones administratives

Limites officielles comme les communes, IRIS, départements ou quartiers. Recommandées pour les analyses reposant sur des statistiques publiques.

:::info[Exemples de secteurs]

Études de marché, analyses démographiques, planification stratégique, benchmarking territorial.

:::

### Zones manuelles

Dessins réalisés par l'utilisateur pour isoler un secteur précis. Très utiles pour les besoins spécifiques : zone commerciale réelle, découpage interne, secteur opérationnel d'une équipe, etc.

:::info[Exemples de secteurs]

Organisation commerciale, secteurs de livraison, zones d'influence réelles observées.

:::

## Comment choisir la zone adaptée

Le choix dépend de plusieurs critères :

- objectif de l'analyse,
- précision attendue,
- densité urbaine ou contexte rural,
- données disponibles,
- type d'activité étudiée.

### Tableau comparatif

| Type de zone       | Cas d'usage                    | Avantages                          | Limites                                                       |
| ------------------ | ------------------------------ | ---------------------------------- | ------------------------------------------------------------- |
| **Distance**       | Première approche, zone rurale | Rapide, simple à créer             | Ignore le réseau routier réel                                 |
| **Isochrone**      | Commerce de détail, services   | Réaliste, reflète l'accessibilité  | Nécessite données réseau routier                              |
| **Administrative** | Analyse INSEE, comparaisons    | Données publiques riches           | Périmètre imposé, peut ne pas refléter la réalité commerciale |
| **Manuelle**       | Zones commerciales spécifiques | Contrôle total, précision maximale | Nécessite connaissance terrain, subjectif                     |

### Arbre de décision simplifié

1. **Avez-vous besoin de statistiques INSEE précises ?** → Zones administratives
2. **Analysez-vous un territoire urbain dense ?** → Zones isochrones
3. **Connaissez-vous précisément votre zone d'influence ?** → Zones manuelles
4. **Recherchez-vous une première approximation rapide ?** → Zones par distance

## Utilisation dans Isocarto

Dans Isocarto, il est possible de créer chaque type de zone et de les comparer. L'utilisateur peut choisir la méthodologie la plus adaptée ou combiner plusieurs approches pour obtenir une analyse plus complète.

:::tip[Conseil pratique]

Pour une analyse optimale, commencez par une zone isochrone ou par distance, puis affinez avec une zone manuelle basée sur votre connaissance terrain.

:::

**Pour aller plus loin** : découvrez comment [interpréter les données](/methodo/lire-donnees) une fois votre zone définie.
