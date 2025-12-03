---
id: moyens-paiement
title: Moyens de paiement
description: Gérer vos moyens de paiement via l’interface Stripe.
sidebar_label: Moyens de paiement
slug: /compte/factures/moyens-paiement
---

# Moyens de paiement

La gestion des moyens de paiement est opérée via **Stripe**, notre prestataire de paiement sécurisé.

## Accéder à la gestion des moyens de paiement

1. Rendez-vous dans **Compte → Factures**.
2. Cliquez sur **Gérer les moyens de paiement**.

![Section 'Moyens de paiement' avec le bouton 'Gérer les moyens de paiement' mis en évidence](/img/moyen-paid.jpg)

3. Vous serez redirigé vers l’espace sécurisé Stripe.

![Tableau de bord Stripe sécurisé avec la liste des méthodes de paiement enregistrées](/img/moyen-paid-3.jpg)

## Ajouter un moyen de paiement

Sur la page Stripe, vous pouvez :

- Mettre à jour un moyen de paiement existant

![Menu déroulant des options de paiement disponibles (carte bancaire, prélèvement SEPA)](/img/moyen-paid-2.jpg)

- Ajouter une **carte bancaire**
- Configurer un **prélèvement SEPA**

![Formulaire de configuration du prélèvement SEPA avec les champs IBAN et coordonnées du titulaire du compte](/img/moyen-paid-4.jpg)

Stripe vous demande ensuite de confirmer l’ajout.

## Spécificité du moyen de paiement SEPA

Les prélèvements SEPA sont automatiquement traités par Stripe et ne nécessitent aucune action de votre part une fois configurés.

:::warning[Attention]

Si vous optez pour le prélèvement SEPA sachez qu'il y a une période de validation de ce moyen par Stripe et donc durant cette période de quelques jours l'abonnement ne sera pas activé. L'activation est en revanche automatique dès que Stripe validera le SEPA.
:::

## Sécurité

:::tip[Information]

Toutes les opérations effectuées sur vos moyens de paiement sont entièrement sécurisées et conformes aux exigences bancaires européennes. Isocarto ne stocke aucune donnée sensible relative à vos moyens de paiement, celles-ci sont gérées exclusivement par Stripe.
:::
