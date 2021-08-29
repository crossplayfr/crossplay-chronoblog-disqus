---
title: Zen, le comeback d’AMD ?
cover: ./cover.jpg
date: 2017-08-18
description:
tags: ['CrossPlay-v1']
---

Actuellement, sur le marché des processeurs grand public, il existe deux grands groupes : Intel et AMD. Cependant, la concurrence d’Intel va mal, en effet, AMD a atteint un chiffre d’affaire de 958 Millions de dollars, mais affiche une perte opérative de 49 millions de dollars et une perte nette de 102 millions. Le désastre est tel qu’AMD a chuté à une valeur inférieure que celle d’ATI lors de son rachat par AMD. Intel profite alors d’un concurrent décadent pour augmenter les prix, la différence entre la génération précédente et celle actuelle est de plus de 100€ ! AMD a vraiment besoin de remonter la pente.

## Zen ?

C’est le nom de la nouvelle architecture de processeurs AMD. Une architecture de processeur est l’équivalent du plan du processeur (le centre de calcul de la machine), c’est l’agencement de briques qui ont chacune une fonction particulière, telle que la gestion de la mémoire. L’évolution des technologies impose à chaque constructeur (tel qu’Intel et AMD, il en existe d’autres) de mettre à jour leurs processeurs. Ainsi chaque génération a son lot de nouveautés (support de nouvelle génération de mémoire vive, nouveaux protocoles …).

## Donc quoi de neuf ?

Pour qualifier un processeur, on utilise différents paramètres :

Exemple : un i7 6700K est un processeur Skylake 4 cœurs, 8 threads cadencé à 4 GHz (4,20 GHz en boost) gravé en 14 nm consommant 95W.

Pour sa nouvelle génération de processeurs, AMD a amélioré son procédé de gravure en établissant un partenariat avec Samsung Electronics pour passer d’un procédé 28nm à 14nm. Cela permet une baisse impressionnante de la consommation, en effet, la quantité de matière et la perte d’énergie sous forme de chaleur sont proportionnelles, cela s’appelle l’effet Joule. De plus, une gravure plus fine prend moins de place, donc on pourra, sur une même taille de processeur, ajouter du contenu comme des cœurs.

Jusque-là, la notion de cœurs chez AMD était assez floue. En effet, les cœurs Intel sont composés d’une partie s’occupant du calcul sur les valeurs entières (Integer) et une partie s’occupant des valeurs flottantes (FP) (à virgule). Cependant, les cœurs AMD introduits depuis la génération Bulldozer jusqu’à Excavator, comportait des modules de deux unités entières partageant une unité flottante. Ainsi les « FX 8 Cores » contenaient 4 modules de deux unités entières et une unité flottante. Le processeur intègre alors 8 cœurs entiers mais seulement 4 cœurs flottants. Il y a de quoi embrouiller le consommateur.

Pour résumer, un FX 8 Core, tel que le FX 8370, contient 8 cœurs entiers et 4 cœurs flottants. Alors que son concurrent direct, l’Intel Core i5 4690K est un 4 cœurs entiers et 4 cœurs flottants.

La question qu’on pourrait se poser serait : alors s’il y a 2 fois plus de cœurs entiers pourquoi ce comporte-t-il aussi mal dans les jeux ?

La réponse réside dans le fait que les jeux n’utilisent quasiment pas les cœurs entiers. La plupart du temps, ils utilisent les cœurs flottants. C’est la raison pour laquelle les FX 8 Cores se comportent de façon similaire au i5 de chez Intel en jeu. Tout simplement car ils ont autant de cœurs flottants que les i5.

La notion de cœurs ainsi définie, penchons-nous sur la nouvelle notion, plus proche d’Intel, de l’architecture Zen :

Nous retrouvons dans Excavator les cœurs Integer (entourés en rouge) et les cœurs flottants (entourés en bleu), nous ne rentrerons pas en détail sur l’intérieur de ces cœurs. Ici, un module Excavator correspond à deux cœurs, mais un module Zen correspond à un seul Core. Ainsi un processeur FX Zen 8 Cores contiendra bien 8 unités entières et 8 unités flottantes.

Mais l’avancée ne s’arrête pas là, quand on regarde de près le schéma, on peut remarquer que le nombre de bits gérés par les unités FMAC (Fused Multiply–ACcumulate) a doublé, passant de 128 bits à 256. Sans rentrer dans les détails, la taille des FMAC correspond au nombre de bits géré en un cycle par l’unité, ainsi, si on double sa taille, on double la vitesse de traitement des données.

Pour résumer, l’efficacité des cœurs Zen peut quadrupler par rapport à Excavator en calcul flottant (2 fois plus de cœurs et taille des FMAC doublés).

On comprend mieux l’annonce d’AMD sur l’augmentation de 40% de leurs IPC (Instructions Per Cycle, le nombre de calculs en un temps donné).

A titre de comparaison, Intel entre Sandy Bridge (2011) et Broadwell (2015) n’a atteint que 20 % de progression.

Au regard du marché actuel, on peut constater que les processeurs AMD consomment largement plus d’énergie. Exemple : un i5 6600 consomme 65W alors qu’un FX 8370 consomme 100W. AMD a même sorti des processeurs à fréquence démentielle, mais aussi à consommation démentielle (FX 9590 : 4,7 GHz (5 GHz en Turbo) mais 220 W !).

Cependant, nous comparons deux processeurs qui ne sont pas à armes égales, le FX 8370 est gravé en 32nm, contrairement au i5 6600 gravé en 14nm.

Avec la nouvelle finesse de gravure, AMD va pouvoir réduire drastiquement sa consommation, voir même sortir un FX 9590 en 14nm aux alentours du 100W de consommation, qui sait ?

Alors selon vous ? AMD va-t-il enfin remonter la pente face à Intel toujours plus puissant et prenant ses aises en l’absence de concurrence ?
