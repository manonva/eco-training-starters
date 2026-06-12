# Backlog heavy-shop

## Contexte du projet

Le projet représente une boutique catalogue avec listes, recherche, détail produit, panier et checkout simplifié.

## User story 1

- Contexte : En tant que **visiteur récurrent**,  je veux que **les pages ne soit pas trop lourde**, afin de **ne pas être pénalisé par une connexion lente.**
- Objectif : Limiter les données téléchargées pour alléger les pages et accélérer le chargement.
- Bonne pratique d’eco-conception ciblée : **[6.1] RGESN** - Le service numérique s’astreint-il à un poids maximum et une limite de requête par écran ?
- KPI associés : taille de la page produit < 5 Mo
- Écrans concernés : page produit
- Critère de réussite : La taille de la page produit a diminué d'environ 25%
- Niveau de priorité : Haute

## User story 2

- Contexte : En tant que **visiteur pressé**,  je veux que **les pages se chargent rapidement**, afin de **trouver et commander un produit sans frustration ni temps d'attente inutile**.
- Objectif : Réduire le TBT et améliorer le Speed Index
- Bonne pratique d’eco-conception ciblée : **[0053] RWEB** - **Éviter les temps de blocages par des traitements javascript trop longs**
- KPI associés : TBT < 350 ms et Speed Index < 2,3 s
- Écrans concernés : Page produit
- Critère de réussite : Réduire le TBT et améliorer le Speed Index
- Niveau de priorité : Haute

## User story 3

- Contexte : En tant que **développeuse backend**, je veux que **les API ne retournent que les données strictement nécessaires aux écrans consommateurs**, afin de r**éduire les échanges réseau et améliorer les performances environnementales du service.**
- Objectif : Réduire les échanges réseau
- Bonne pratique d’eco-conception ciblée : **[0066] RWEB - Optimiser les requêtes aux bases de données**
- KPI associés : < 270 requêtes
- Écrans concernés : Page produit, page produits, accueil
- Critère de réussite : Réduire le nombre de requêtes HTTP d'environ 25 % et diminuer les temps de traitement
- Niveau de priorité : Haute

## User story 4

- Contexte : En tant que **lead developer de decathlon.fr**, je veux **mettre en place une stratégie de cache sur les ressources statiques et les API**, afin de **réduire les appels répétitifs aux serveurs et diminuer les volumes de données transférées**.
- Objectif :
- Bonne pratique d’eco-conception ciblée :
- KPI associés : Note API Green Score “C”
- Écrans concernés : Page produit, page produits, accueil
- Critère de réussite : Améliorer l'API Green Score d'une classe (D → C)
- Niveau de priorité : Moyenne

## User story 5

- Contexte : En tant que **client en magasin**, je veux **sélectionner mes magasins préférés** afin de **voir directement leurs produits en stock**.
- Objectif : Réduire le nombre d'étapes inutiles dans le parcours et donc le temps passé sur le site.
- Bonne pratique d’éco-conception ciblée : **[0005] RWEB** - Optimiser le parcours utilisateur
- KPI associés : Grâce à un outils d’analyse de traffic, suivre le nombre de clics nécessaires pour accéder à un produit disponible en magasin et le taux d'utilisation du filtre magasin
- Écran concerné : Page d’accueil, page produits, page produits
- Critère de réussite : Je peux sélectionner un ou plusieurs magasins depuis la page d’accueil, les produits en stock dans ces magasins sont affichés en priorité et les produits disponible présentent une différentiation visuelle
- Niveau de priorité : Basse

## User story 6

- Contexte : En tant que **client sensible aux enjeux climatiques**, je veux **être informé l’empreinte C02 d’un produit de seconde main**, afin de **connaître l'impact environnemental de mon achat**.
- Objectif : Implémenter une information visuelle comparant l’empreinte CO2 d’un type de produit neuf et l’achat du même type de produit en seconde main
- Bonne pratique d’eco-conception ciblée : **[2-3015] GR491** - “Pour permettre aux utilisateurs d'être acteurs dans la réduction de leurs impacts, ont-ils accès à des références qui les invitent à des pratiques NR  ?”
- KPI associés : L’information CO2 est disponible sans scroll sur la page produit
- Écran concerné : Page produit
- Critère de réussite : J’ai accès à l’impact environnemental de mon achat sur la page produit, je peux connaître l’impact de mon achat en seconde main vs neuf, l’information a une différentiation visuelle et est compréhensible facilement
- Niveau de priorité : Basse