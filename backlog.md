# backlog

# Backlog heavy-shop

## Contexte du projet

Le projet représente une boutique catalogue avec listes, recherche, détail produit, panier et checkout simplifié.

## User story 1

- Contexte : En tant que **client sensible aux enjeux climatiques**, je veux **être informé l’empreinte C02 d’un produit de seconde main**, afin de **connaître l'impact environnemental de mon achat**.
- Objectif : Implémenter une information visuelle comparant l’empreinte CO2 d’un type de produit neuf et l’achat du même type de produit en seconde main
- Bonne pratique d’eco-conception ciblée : **[2-3015] GR491** - “Pour permettre aux utilisateurs d'être acteurs dans la réduction de leurs impacts, ont-ils accès à des références qui les invitent à des pratiques NR  ?”
- KPI associés : L’information CO2 est disponible sans scroll sur la page produit
- Écran concerné : Page produit
- Critère de réussite :
    - J’ai accès à l’impact environnemental de mon achat sur la page produit
    - Je peux connaître l’impact de mon achat en seconde main vs neuf
    - L’information a une différentiation visuelle et est compréhensible facilement
- Niveau de priorité : Moyenne

## User story 2

- Contexte : En tant que **visiteur récurrent**,  je veux que **les pages ne soit pas trop lourde**, afin de **ne pas être pénalisé par une connexion lente.**
- Objectif : Limiter les données téléchargées pour alléger les pages et accélérer le chargement.
- Bonne pratique d’eco-conception ciblée : **[6.1] RGESN** - Le service numérique s’astreint-il à un poids maximum et une limite de requête par écran ?
- KPI associés : le poids des pages ainsi que le nombre de requête sont divisés par deux.
- Écrans concernés : page d’accueil, page produits, page produit
- Critère de réussite :
    - le nombre de requête est réduit d’au moins 30%
    - le poids de la page est réduit d’au moins 30%
- Niveau de priorité : Haute

## User story 3

- Contexte : En tant que **client en magasin**, je veux **sélectionner mes magasins préférés** afin de **voir directement leurs produits en stock**.
- Objectif : Réduire le nombre d'étapes inutiles dans le parcours et donc le temps passé sur le site.
- Bonne pratique d’éco-conception ciblée : **[0005] RWEB** - Optimiser le parcours utilisateur
- KPI associés : Grâce à un outils d’analyse de traffic, suivre le nombre de clics nécessaires pour accéder à un produit disponible en magasin et le taux d'utilisation du filtre magasin
- Écran concerné : Page d’accueil, page produits, page produits
- Critère de réussite :
    - Je peux sélectionner un ou plusieurs magasins depuis la page d’accueil
    - Les produits en stock dans ces magasins sont affichés en priorité
    - Les produits disponible présentent une différentiation visuelle
- Niveau de priorité : Moyenne

## User story 4

- Contexte : En tant que **visiteur pressé**,  je veux que **les pages se chargent rapidement**, afin de **trouver et commander un produit sans frustration ni temps d'attente inutile**.
- Objectif : Réduire le temps de chargement des pages et plus spécifiquement des images
- Bonne pratique d’eco-conception ciblée : **[8-3057] GR491** - Une politique de gestion/utilisation des médias afin de réduire leurs impacts est-elle en place, avec des critères de compression et de formats des médias ?
- KPI associés : le poids des images d’illustration (hors hero et banner) est inférieur à 100 ko
- Écrans concernés : page d’accueil, page produits, page produit
- Critère de réussite :
    - le poids du dossier “assets” est réduit d’au moins 30%
    - le choix du format d’image est pertinent avec son type (ex : svg pour les illustrations, webp pour les photographie)
- Niveau de priorité : Haute
