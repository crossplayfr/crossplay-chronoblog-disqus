---
title: Tout ce que vous devez savoir pour lancer votre livestream – Partie 4
cover: ./cover.jpg
date: 2020-02-01
description:
tags: ['CrossPlay-v1']
---

Précédemment dans ce dossier, j’ai abordé quelques-uns des nombreux outils destinés à réaliser et diffuser votre émission en direct. Il est maintenant temps de vérifier que votre ordinateur supportera de tout faire en même temps. Attention, il ne s’agit pas ici de vous donner des références de matériel clé en main (le marché change trop rapidement) mais de vous aider à vérifier que vos composants sont capables de faire fonctionner un jeu et diffuser en ligne simultanément.

## La diffusion, une activité gourmande en ressources 

Si vous avez déjà installé l’un des logiciels de diffusion cités, vous vous demandez peut-être quel est le meilleur choix d’un point de vue performance. En réalité, l’outil ne va pas changer grand-chose à la puissance nécessaire. C’est la configuration de votre émission qui peut tout faire basculer.

Dès que vous commencerez à diffuser, vous constaterez que cette activité est gourmande en ressources. Pour en avoir le cœur net, jetez un œil à l’interface de votre logiciel, vous devriez trouver en bas de la fenêtre principal une ligne avec les informations suivantes :

Essayons de décrypter tout ça !

Les FPS (Frames Per Second) sont le nombre d’images calculés par votre ordinateur chaque seconde. Plus il y en a, plus l’image sera fluide et lisse. Les joueurs PC ont l’habitude de profiter de jeux à 60 FPS. Ce chiffre va devenir la norme sur console, mais 30 FPS reste la norme actuelle.

Petit point vocabulaire :

Un écran, peu importe sa marque, son modèle, peut afficher un certain nombre d’IPS selon la vitesse à laquelle il peut agir sur chaque pixel qui le compose. L’action d’agir sur les pixels se fait à un intervalle régulier exprimé en Hertz (Hz). Un écran 60Hz ne pourra donc jamais afficher plus de 60 IPS.

Pourquoi je vous dis tout ça ? C’est plutôt simple. Plus vous allez augmenter la valeur des IPS pour votre émission, plus votre PC va devoir calculer d’images rapidement. N’oubliez pas que vos spectateurs ne jouent pas, ils ne font que regarder, avoir une image aussi fluide que la vôtre n’est pas important pour eux. Ceux qui vous regardent depuis un mobile vous remercieront également de ne pas saturer leur forfait mobile. 30 IPS, c’est un bon compromis entre fluidité et puissance de calcul !

Lorsque vous jouez sur votre PC, je ne doute pas que vous souhaitez avoir la meilleure qualité d’image possible. De fait, vous jouez très certainement avec la même résolution que celle utilisée par votre système d’exploitation.

La résolution s’exprime toujours par deux valeurs. Par exemple, une image en Full HD correspond à une résolution de 1920 x 1080. Elle comporte 1920 pixels sur chaque ligne et 1080 sur chaque colonne soit plus de 2 millions au total.

Vous comprendrez qu’avec autant de pixel à calculer, votre ordinateur peut rencontrer des ralentissements. Maintenant, pensez au taux de rafraîchissement évoqué juste au-dessus. Pensez à votre ordinateur, qui, lorsque vous jouez, doit calculer 60 images de plus de 2 millions de pixel chaque seconde. Et encore, je n’ai même pas parler des autres paramètres graphiques dans le cas d’un jeu. La lumière, les textures, la qualité des modèles 3D, tout ça vient s’ajouter à la résolution et au taux de rafraîchissement.

Pensez maintenant à votre spectateur. Il vous regarde, peut-être sur un PC, un téléphone, une tablette, allez savoir. Peut-être qu’il vous regarde en plein écran, qu’il fait autre chose en même temps. Ce qui est important pour lui, c’est que l’image soit suffisamment fluide (30 IPS) et suffisamment nette pour suivre l’action. Que vous calculiez 2 millions de pixel, plus, ou moins n’a aucun intérêt pour lui s’il ne peut pas suivre l’émission. Ma recommandation : utiliser une résolution plus basse (1280 x 720) pour garantir que les détails seront visibles sans saturer votre PC de calculs.

## CPU – GPU – Mémoire 

Curieusement, ces lignes peuvent vous paraître obscures alors qu’elles sont finalement très simples à comprendre.

Votre processeur (CPU = Central Processing Unit) est chargé de faire la majorité des calculs qui permettent à votre ordinateur de fonctionner. Dans le cas d’un jeu, c’est lui qui fait les calculs liés à l’intelligence artificielle, la gestion des parties en multijoueur pour savoir qui se trouve où et quand, qu’est-ce qu’il faut afficher ou non à l’écran. Sa capacité de calcul est exprimée en Gigahertz (sauf si vous avez une tour agée de 20 ans avec un vieux Windows XP dessus) que l’on abrège en GHz.

Comme le taux de rafraîchissement était la limite d’images par seconde qu’un écran peut afficher, la fréquence (GHz) est la limite de données que peut traiter votre processus chaque seconde. Par exemple, un processeur unique de 2GHz peut théoriquement traiter jusqu’à 2 gigas de données chaque seconde. Dans les faits, il aura certainement pris feu avant, mais vous comprenez le principe. Votre processeur fait des calculs, dans la limite de ce qu’il peut supporter.

Histoire de lui filer un coup de main, il est parfois soutenu par une carte graphique. Elle occupe le même rôle que le processeur pour tout ce qui concerne les calculs d’images 2D et 3D. Dans un jeu vidéo, elle gère généralement 80% des calculs effectués. Elle aussi a une fréquence et dispose même d’une mémoire dédiée. Si l’une des deux sature, votre jeu va commencer à ralentir sérieusement jusqu’à potentiellement crasher.

Tout ça nous amène à la mémoire. Il s’agit d’un espace de stockage qu’on pourrait décrire comme un entrepôt Amazon. Tout un tas de paquet y entrent, sont traités par les salariés sur place et ressortent lorsqu’ils ont été achetés par un client. La mémoire, c’est l’entrepôt. Les données sont les marchandises stockées et les salariés sur place, ce sont votre CPU et votre GPU qui font tout le travail pour vous, le client qui a acheté le produit.

Je conçois que ça puisse vous paraître abstrait. Mais ce qu’il faut retenir, c’est que le CPU, le GPU et la mémoire sont les composants essentiels d’un direct fluide. Leur capacité n’est pas illimitée. Si vous jouez et diffusez en même temps, les deux activités viendront s’en servir. C’est la raison pour laquelle vous devez limiter la résolution et le taux de rafraîchissement pour nettement soulager votre PC.

## Du coup, le matériel, je prends quoi ? 

Si vous voulez diffuser en direct, il vous faudra de la puissance et surtout des cœurs de calcul. Un CPU possède des cœurs qui permettent de faire plusieurs tâches simultanément. Plus il y a de cœurs, plus il y a de tâches. Le prix n’est plus le même, mais ça je n’y peux pas grand-chose.

Côté CPU, privilégiez les processeurs Intel i5 et i7 de neuvième génération (i5-9400 par exemple). Ils ont l’avantage d’avoir 6 cœurs ce qui permet de répartir la charge de calcul. Si vous préférez AMD, les Ryzen 5 et 7 (Zen+ et Zen 2) sont également un très bon choix (comme le Ryzen 5 3600) par exemple.

Avant de parler du GPU, vous allez avoir un choix important à faire. Lorsque vous configurerez votre direct, vous pourrez choisir de faire les calculs avec votre CPU ou votre GPU. Nous y reviendrons en détail mais c’est une question importante.

Si vous jouez plutôt à de gros jeux comme Forza, Battlefield ou Gears 5, votre GPU risque d’être déjà bien occupé. Il vaudra donc mieux choisir de placer les calculs de votre direct sur le CPU (et donc d’opter pour un modèle plus costaud).

À l’inverse, vous jouez peut-être à des jeux indépendants ou moins exigeants graphiquement. Le choix d’une carte graphique un peu plus solide peut être une bonne idée pour les calculs de votre émission dans ce cas.

Dans tous les cas, j’aurai tendance à vous recommander NVIDIA plutôt qu’AMD en ce qui concerne le GPU. Pour diffuser sur de gros jeux, une GTX 1080 est un bon compromis. Une RTX 2070 sera certainement plus adaptée si vous voulez du confort et placer les calculs de votre émission sur le GPU. Enfin, le prix ne fait pas tout : évitez d’acheter plusieurs cartes graphiques, sans quoi vous vous lancerez dans des opérations à n’en plus finir pour refroidir le matériel et certains jeux ne fonctionneront purement et simplement pas. Faites simples et efficaces !

Sur des jeux plus modestes, les GTX 970 et 980 sont de très bons choix.

Là encore, faisons simple. La plupart des PC de joueurs fonctionnent aujourd’hui avec 8Go de mémoire (dite RAM = Random Access Memory). Sans tourner autour du pot, je vous recommande d’acheter deux barrettes de RAM de 8Go. Pourquoi me direz-vous ? Pour un usage optimal, il est recommandé d’avoir une quantité de RAM dans votre PC égale à une puissance de 2 (2, 4, 8, 16, …). Physiquement, l’usage de deux barrettes physique différentes permet de mieux répartir les la charge de calcul.

## En résumé 

Lorsque vous allez diffuser, votre ordinateur va se retrouver à calculer tout le nécessaire pour votre activité (un jeu par exemple) mais aussi pour l’émission (le rendu des images et l’envoi en ligne). Tout ça est très gourmand. Vous devez donc impérativement veiller à maîtriser le nombre d’images par seconde et la résolution de votre émission. Votre matériel est important. Le CPU, le GPU et la mémoire seront sollicités activement.
