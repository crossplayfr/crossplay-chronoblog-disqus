---
title: Build 2020, Microsoft donne la direction de l’année à venir pour les développeurs
cover: ./cover.jpg
date: 2020-05-21
description: 
tags: ['CrossPlay-v1']
---
Comme chaque année à la même époque, Microsoft a organisé son grand évènement dédié aux développeurs d’applications : Build. Cette édition 2020 cible les axes de travail les plus importants du moment dans l’univers de Windows : L’Universal Windows Platform, L’accessibilité sous Windows 10, l’ouverture à l’open source et la collaboration en milieu professionnel.

Un très beau programme donc, qui laisse place à des annonces attendues pour certaines, mais plus surprenantes pour d’autres.

## Windows Package Manager, gérez vos applications dans PowerShell
Ne nous en cachons pas, trouver et installer des applications sous Windows reste aujourd’hui un processus fastidieux. Le Microsoft Store ne prend pas encore en charge toutes les applications Win32 tandis que les apps UWP (dont les jeux du Xbox Game Pass) ne sont pas disponibles ailleurs. Bref, la vision initiale du store unifié est loin d’être atteinte et c’est certainement sur ce point que la marge de progression est la plus importante dans Windows 10.

Le Windows Package Manager est une première étape vers la gestion unifiée des applications. En effet, cet outil en ligne de commande permet à n’importe quel utilisateur de télécharger et d’installer des applications via un dépôt sécurisé. L’outil étant open source, d’autres fournisseurs d’applications pourront venir y proposer leurs packages qui seront toutefois validés en amont par Microsoft.

À l’aide d’un simple winget install steam, il sera donc possible de télécharger et d’installer automatiquement le store de Valve sur Windows 10. Les utilisateurs avancés pourront également créer leurs propres scripts afin d’automatiser le déploiement d’outils après l’installation de Windows par exemple. S’il vous intéresse, le WPM est disponible via GitHub dès à présent.

## PowerToys Run Launcher, la recherche intelligente dans Windows
Si vous utilisez MacOS, vous connaissez certainement Spotlight : une barre d’outils polyvalente qui permet de lancer des applications et trouver des fichiers rapidement. Windows dispose déjà d’une fonctionnalité similaire via sa barre de recherche et Cortana mais l’ergonomie et la qualité des résultats laisse souvent à désirer lorsqu’il s’agit de trouver un fichier.

Run Launcher est le PowerToy destiné à combler cette lacune en proposant une barre de recherche disponible partout avec le raccourci Alt + Espace. Il sera ainsi possible de chercher n’importe quelle application ou fichier sur la machine et d’obtenir des résultats pertinents en un clin d’œil.

Les PowerToys sont disponibles sur GitHub en version préliminaire. Attendez-vous à des bugs puisque ces outils sont encore en développement.

## Fluid Office, la création procédurale de document
Parmi les nombreux domaines dans lesquels Microsoft s’investit, la bureautique reste un monde où Office est souvent copié mais jamais égalé. Office est la solution bureautique la plus utilisée au monde et Microsoft le sait. Il incombe donc à la société américaine de penser au futur de la collaboration en mettant l’utilisateur au centre du travail. Fluid Office incarne cet avenir grâce à une démarche procédurale inédite.

Lorsque vous créez un document, la première question qui vous vient à l’esprit est très certainement : « quel outil dois-je utiliser ? ». S’il s’agit d’un tableau, vous opterez certainement pour Excel tandis qu’un article comme celui que vous lisez en ce moment sera plutôt rédigé dans Word.

Imaginez maintenant le cas d’une collaboration entre plusieurs personnes. Vous réalisez un tableaux Excel qu’un membre de votre équipe doit intégrer dans un Word pour un compte rendu et un PowerPoint pour une présentation. Il y a de fortes chances pour que vous soyez obligé d’envoyer tout le document, via Teams ou par mail.

Cette situation est omniprésente dans le travail en collaboration et Fluid Office propose une philosophie de gestion de l’information différente censée supprimer ce problème. Dans Fluid Office, vous ne concevez pas de document mais des blocs contenant des données. Chaque bloc peut être un texte, un tableau, une image qu’il vous sera possible de sauvegarder et de réutiliser dans d’autres contenus. Ainsi, la question n’est plus « quel outil dois-je utiliser » mais « quelle structure de données » est la plus adaptée. Ce changement de philosophie est une simplification majeure des usages bureautique et un grand pas en avant pour la collaboration.

Chaque composant peut être créé et modifié en direct par tous les membres de votre équipe impliqué sur un projet. Un même bloc sera ensuite disponible dans toutes les applications Office, le tout dans le web.

Fluid Office étant un framework web, Microsoft a pris la décision de le rendre open source. Ainsi, le monde entier pourra s’appuyer sur ce travail et l’intégrer dans d’autres applications et services.

## Les interfaces Linux bientôt prises en charge dans Windows
Vous êtes développeurs, vous utiliser un système GNU / Linux pour votre travail mais vos jeux et vos autres activités sont sous Windows ? Microsoft propose d’unifier tous ces environnements sous la bannière de Windows 10 en prenant en charge les interfaces graphiques Linux.

Depuis l’ajout de Bash dans Windows 10, Microsoft n’a cessé d’améliorer sa prise en charge de sous-système Linux. Ubuntu, SUSE Linux, Fedora sont ainsi disponibles sur le Microsoft Store tandis qu’OpenSSH est maintenant intégré nativement dans le système propriétaire.

La prochaine grand étape de la prise en charge des sous-systèmes consiste à amener la compatibilité des interfaces graphiques au sein de Windows 10 afin que les applications Win32 puisses s’exécuter simultanément aux applications GNU / Linux. Un grand pas en avant donc, puisque l’usage de Bash et d’un sous-système était jusqu’à présent limité au terminal sous peine de souffrir de performances relativement médiocres.

Les Insiders pourront ainsi accéder à ces nouvelles fonctionnalités prochainement avant un déploiement pour tous. Cette annonce s’accompagne également d’améliorations sur la prise en charge du système de fichiers de Linux dans l’explorateur de Windows 10 ainsi qu’un passage en version 1.0 du Windows Terminal lancé l’année passée.

## Project Reunion : unifier les applications Win32 et UWP
Un développeur d’application à destination de Windows doit aujourd’hui faire le choix entre la compatibilité et la modernité. L’API historique Win32 permet de lancer un outil sur pratiquement toutes les versions de Windows en activité tandis qu’UWP garantit de pouvoir tirer partit des dernières fonctionnalités de Windows et de coder une fois pour tout l’écosystème Windows.

Project Reunion est un grand chantier dont l’objectif est d’unifier les deux mondes. Ainsi, les développeurs pourront tirer partit du meilleur des deux mondes sans avoir à se préoccuper de la compatibilité de l’application ou de sa prise en charge sur Xbox par exemple.

Pour ce faire, Microsoft va unifier les API Win32 et UWP tout en proposant de nouvelle version de certain composants, plus souples et compatibles. WinUI 3 aura ainsi la charge de gérer les interfaces graphiques de Project Reunion en proposant une expérience moderne sur tous les types d’appareils tandis que WebView 2 permettra aux développeurs d’intégrer du web dans leur applications grâce à une fenêtre Chromium découplée de Windows. Ce dernier point est important puisqu’il signifie que la version de Chromium pourra évoluer indépendamment de Windows afin de rester toujours à jour.

Enfin, cette nouvelle API unifiée sera optimisée pour le cloud et permettra aux applications d’être virtualisé et exécutée sur n’importe quel appareil. Il est donc tout à fait envisageable, à terme, de pouvoir utiliser les versions complètes d’Office sur un téléphone iOS ou Android grâce à ce système. Le projet xCloud s’appuie vraisemblablement sur ces technologies afin de proposer du jeu vidéo sur tous les supports.

Les annonces étaient donc nombreuses et tout à fait enthousiasmante pour l’année à venir. Reste à voir comment les développeurs d’applications se serviront de ces nouveaux outils pour moderniser, mettre à l’échelle et diffuser leurs applications.

