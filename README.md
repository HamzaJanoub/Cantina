### YouCode Canteen Planner

Plateforme de numérisation et de planification dynamique des menus hebdomadaires pour le campus YouCode.

# À propos du Projet

Le projet YouCode Canteen Planner répond au besoin de modernisation de la restauration du campus. Il s'agit d'une application Web responsive et intuitive qui permet au chef cuisinier et aux gestionnaires d'élaborer l'ensemble des repas de la semaine (du Lundi au Vendredi) tout en garantissant un suivi budgétaire rigoureux et un équilibre nutritionnel adapté aux apprenants.

# Capacités et Spécifications Système

## 1. Garde-Manger (Réserve de Recettes)

Création dynamique via Modal : Formulaire sécurisé par des expressions régulières (Regex) en temps réel.

Nom du plat : Validation stricte (3 à 30 caractères).

Catégorie : Entrée, Plat principal ou Dessert.

Prix : Valeur numérique positive obligatoire.

Badge qualitatif : Classification (Bio, Végétarien, Classique).

Verrouillage de sécurité : Un plat assigné au planning ne peut pas être modifié directment. Il doit être réinitialisé vers l'état "En réserve" pour autoriser l'édition.

Suppression sécurisée : Boîte de confirmation avant toute suppression définitive.

Recherche & Filtrage (Bonus) : Filtres instantanés par nom et par type de plat.

## 2. Moteur de Planification du Menu

Attribution des créneaux : Affectation des repas via menus déroulants ou par Glisser-Déposer / Drag & Drop (Bonus).

Respect des règles culinaires : Incompatibilité stricte entre types d'emplacements (impossible d'attribuer une Entrée au créneau Plat Principal).

Indicateur d'état dynamique :

Plat en réserve ➔ Carte normale.

Plat sélectionné ➔ Carte semi-transparente avec mention [Assigné : Jour - Créneau].

## 3. Contrôle Financier & Équilibre Nutritionnel

Plafond financier imperméable : Limite automatique fixée à 50 DH par jour et par apprenant. Tout dépassement est bloqué par le système.

Statistiques globales en temps réel :

Progression globale du planning (ex. 3/5 jours prêts).

Calcul automatique du coût quotidien et hebdomadaire.

Audit santé : Vérification automatique de la présence d'au moins 1 plat végétarien dans la semaine.

## 4. Expérience Utilisateur & Ergonomie (UX/UI)

Système de Toast Notifications : Retours visuels instantanés (Succès, Erreur, Avertissement) fermables manuellement.

Mode Sombre / Clair (Bonus) : Adaptation visuelle en un clic.

Affichage Imprimable (Bonus) : Basculement entre la Vue Cartes interactive et la Vue Tableau adaptée à l'impression.

Auto-Remplissage Intelligent (Bonus) : Bouton "Compléter la semaine" pour attribuer automatiquement les plats disponibles selon le budget restants.

Highlight Visuel (Bonus) : Clic sur une recette du menu pour faire clignoter sa carte source dans la réserve.

Persistance LocalStorage (Bonus) : Sauvegarde automatique des données dans le navigateur.