---
title: Xbox Series X et PlayStation 5, le point architecture
cover: ./cover.png
date: 2020-03-20
description: 
tags: ['CrossPlay-v1']
---
La semaine dernière, nous avons pu découvrir les configurations des consoles de la prochaine génération. Microsoft a ouvert le bal avec la Xbox Series X et Sony a ensuite répondu par l’intermédiaire de Mark Cerny, l’architecte de la future PlayStation 5. Les deux machines ont donc une fiche technique détaillée permettant de les comparer et surtout de comprendre comment chacune a été conçue.

Nous n’avions pas prévu d’entrer dans les détails techniques lorsque nous avons posté un visuel récapitulant les informations connues pour les deux concurrentes.

Après une conférence soporifique à souhait, la configuration de la #PS5 est connue. Félicitations à #Microsoft qui domine la technique avec sa future #XboxSeriesX ! 😉 pic.twitter.com/3AWQVOj7TH

En effet, sans porter de jugement par affinité personnelle, il est clair que malgré une conception similaire, la Xbox Series X a un net avantage sur le papier. Cet aspect n’est pas contestable puisque les chiffres sont ce qu’ils sont. Néanmoins, un utilisateur nous a très justement interpellé sur point intéressant : celui de l’architecture. À l’appui, un exemple, dont chacun jugera de la pertinence :

Il faut analyser l'architecture. Un camion va moins vite qu'une Smart en ville. Pourtant sur le papier le camion est plus puissant...

Si les chiffres donnent la Xbox plus performantes, qu’en est-il de l’architecture des deux machines. C’est le sujet que je vais tenter de traiter pour vous dans cet article. Attention, CrossPlay reste avant tout un site accessible à tous, aussi, il n’est pas question ici de faire un cours mais bien d’avancer des arguments sur la conception des consoles.

## Qu’est-ce qu’une architecture ?
En très résumé, l’architecture d’un appareil est la façon dont chacun de ces composants ont été choisis et assemblés de façon à maximiser l’efficacité de son fonctionnement. Dans une console de jeux, l’architecture englobe tous les aspects logiciels et matériels déterminants dans son fonctionnement :

Encore une fois, il s’agit d’être synthétique. L’architecture, c’est s’assurer que chacun des points ci-dessus est cohérent avec les autres. Un processeur très rapide sera significativement ralenti si le stockage est lent à envoyer des données par exemple.

## Xbox ou PlayStation, deux fiches haut de gamme
Avant de comparer quoi que ce soit, il convient de préciser que les deux consoles ont chacune une très belle fiche technique. Le fait que l’une puisse être plus puissante que l’autre reste intéressant pour comprendre les limites de chaque machine. Attention néanmoins à ne pas condamner une console pour des raisons techniques. La Nintendo Switch est techniquement loin derrière la Xbox ou la PlayStation mais son architecture est tout à fait fascinante. Bref, pas de bashing de console pour le plaisir.

## Le processeur
Ici, la comparaison est plutôt simple. Les deux machines ont chacune un processeur Zen 2 à 8 cœurs. La différence se joue sur la vitesse des cœurs.

Chez Microsoft, les cœurs fonctionnent à 3.6 GHz et peuvent atteindre 3.8 GHz si le développeur le souhaite. Cela n’a pas d’incidence sur le reste des composants.

Chez Sony, le processeur atteindra au mieux une fréquence de 3.5 GHz. La différence peut sembler faible, mais elle est conditionnée par l’usage du processeur graphique. En effet, Sony a fait le choix d’une alimentation électrique continue. Ainsi, si le processeur tourne à 3.5 GHz, le processeur graphique devra ralentir pour le laisser faire. Ce mécanisme permet d’éviter la surchauffe mais implique de trouver l’équilibre entre calculs et graphismes.

Microsoft l’emporte donc sur ce point puisque dans les faits, la console de Sony ne pourra jamais tirer partit simultanément de toutes la puissance du processeur et de celle du processeur graphique.

## Le processeur graphique
Microsoft a énormément communiqué sur ce point avec un gros chiffre : 12 téraflops. Isolé, seul, il ne veut pas dire grand-chose. En effet, la Xbox One X embarquait 6 TF. On pourrait être tenté de dire que la Xbox Series X aurait donc 2 fois la puissance d’une One X. Dans les faits, c’est un peu plus subtil.

Le FLOPS (floating-point operations per second) est une unité de calcul qui quantifie les opérations en virgule flottante par seconde. Oui, je sais, ça fait un peu mal à la tête dit comme ça. Plus simplement, un ordinateur n’aime pas faire des calculs avec des nombres à virgule. Plus son nombre de FLOPS est élevé, plus il peut en faire dans le même laps de temps.

Dans les jeux vidéo, le calcul des images se fait à l’aide de ces fameuses opérations avec des nombres à virgules. Plus il y a de FLOPS, plus il est possible de rendre les images rapidement, même si ces dernières comportent de nombreux détails. Les 12 TF de la Xbox Series X en font donc la machine avec la meilleure puissance de calcul graphique totale.

Néanmoins, Sony envisage les choses différement. Ici, embarque 10.28 TF (au mieux, si le processeur lui permet) de puissance de calcul. La répartition de cette puissance se fait dans des unités de calculs : des petites mains qui vont se charger d’une partie des opérations. La PS5 embarque 36 unités de calculs cadencées à 2.33 GHz. C’est extrêmement rapide, vraiment ! Chaque unité de calcul est très performante.

Pour la Xbox, on dénombre 58 unités de calcul à 1.825 GHz. La fréquence est nettement moins importante mais le nombre d’unité est significativement plus important.

Alors, que faut-il en retenir ? C’est simple : plus il y a d’unité de calcul, plus la console va pouvoir effectuer d’opérations en parallèle. Sony table donc sur de gros calculs centralisés tandis que Microsoft préfère la parallélisation. Mais alors, quelle stratégie est la plus pertinente ?

De mon point de vue, celle de Xbox pour plusieurs raisons. D’abord, il ne faut pas oublier que les 2.33 GHz ne seront atteints que si le processeur de la PS5 ralentit pour le permettre. Etant donné qu’il est déjà moins performant que celui de la Xbox, ce n’est pas forcément une bonne idée de le ralentir encore. Ensuite, Microsoft a fait un travail incroyable sur la partie logicielle avec DirectX 12. J’en reparlerai au moment d’évoquer le système d’exploitation, mais DirectX 12 permet d’exploiter la force de la parallélisation pour effectuer de très gros calculs sans avoir une puissance brute colossale. Dernier point pour Microsoft, le nombre de téraflops est au total plus important, la console dispose tout simplement d’un matériel globalement plus performant pour les graphismes.

Un autre détail important : celui du Ray Tracing. Si vous ne connaissez pas cette technologie, nous avons écrit un papier sur le sujet il y a un moment déjà. Elle permet d’obtenir des calculs de lumière bien plus réalistes que ce qui se fait aujourd’hui. Microsoft a fait le choix d’inclure du matériel dédié au Ray Tracing dans sa console : 13 TF en plus, juste pour la lumière. Sony devra compter sur les 10.28 TF de sa console pour tout faire.

## La mémoire vive
Un sujet plutôt simple de mon point de vue. 16 Go de RAM dans les deux consoles.

Celle de la PS5 fonctionne à 448 Go/s.

Sur Xbox, 10 Go fonctionneront à 560 Go/s, le reste à 336 Go/s. Microsoft a déjà précisé que sur les 16 Go, 13 seront alloués aux jeux, le reste au fonctionnement de la machine. On suppose donc que les développeurs auront accès aux 10 Go les plus rapides et 3 plus lents. Finalement, peu de jeux mobilisent 10 Go de RAM et si le cas venait à se présenter, la gestion des 3 Go restant n’impacteraient que peu les performances en jeu.

Les deux sont donc très performantes mais Xbox l’emporte ici encore en partant du principe que les développeurs auront besoin de moins de RAM (les plus gros jeux dépassent rarement 8 Go) mais plus rapides.

## Le stockage
Encore un sujet facile ! Les deux consoles embarqueront un SSD NVMe. Néanmoins, celui de la PlayStation sera bien plus rapide que celui de la Xbox.

En effet, Sony a fait le choix d’un SSD monstrueux avec un débit de 5.5 Go/s et jusqu’à 9 Go/s sur de la donnée compressée. Le stockage pourra donc venir en soutient à la RAM si jamais le scénario se présentait. Néanmoins, le problème ici concerne le refroidissement. De tels débits risquent de générer beaucoup de chaleur. Si le refroidissement n’est pas efficace, le débit n’atteindra jamais des vitesses aussi élevées.

Xbox a opté pour un SSD de meilleur capacité (1 To contre 825 Go chez Sony) mais plus lent : 4.8 Go/s dans le meilleur des cas. Si la valeur est bien plus basse que sur PS5, elle reste extrêmement rapide.

Mention sur le stockage externe. Microsoft opte pour un port propriétaire : grâce à  un partenariat avec Seagate, des cartes spécifiques pour étendre la mémoire de la console sans perte de performances seront disponibles à l’achat. Sony fait le choix de supporter les standards en précisant que les vitesses de transfert seront beaucoup moins importantes que sur le SSD interne.

Ici, Sony l’emporte haut la main, à condition d’avoir un système de refroidissement efficace.

## L’alimentation électrique
Peu de choses à dire sur le sujet, Microsoft fait le choix d’une consommation variable pour des performances stables et facile à anticiper.

Sony opte pour une alimentation continue dont la consommation sera invariable, ce sont donc les composants, et les performances qui fluctueront. Le processeur et le processeur graphiques ne pourront jamais fonctionner au maximum de leur capacité simultanément. C’est un moyen efficace de limiter l’émission de chaleur.

## Le refroidissement
La question est plus claire chez Microsoft que chez Sony. Toute la console a été pensée pour évacuer la chaleur. La forme de cheminée permet à la chaleur de monter et d’être évacuée par le haut tandis qu’une chambre à vapeur permet de répartir uniformément les températures entre le processeur et la mémoire. Enfin, l’ajout d’un dissipateur thermique permet de refroidir mécaniquement la console.

Chez Sony, nous ne savons rien de la forme et du refroidissement de la console. Tout le monde se souviendra néanmoins de la PS4, performante mais particulièrement bruyante sur des titres comme Until Dawn ou God of War.

## Le son
Les deux consoles ont ici deux philosophies très différentes. Sony a fait le choix d’utiliser son propre moteur audio : le Tempest Engine. Pour en tirer partit, les développeurs devront impérativement travailler avec. Les capacités semblent prometteuses avec la gestion simultanée de milliers de canaux audio. Sony n’avait certainement pas envie de payer la licence Dolby Atmos pour l’intégrer dans sa console.

La Xbox embarquera les derniers standards, surtout le Dolby Atmos, compatible avec des nombreux équipements audios et assurant une fidélité sonore incroyable. Le Dolby Atmos ne permet la gestion que de 32 canaux audios mais sera certainement bien plus simple à utiliser par les développeurs de jeux.

Sony gagne ce round avec son moteur audio très pointu sur le papier. Il faudra attendre d’en savoir plus sur la facilité d’intégration pour juger définitivement de la qualité de cette technologie. Le Dolby Atmos a déjà fait ces preuves et offres un résultat d’excellente facture.

## Le système d’exploitation
Sony n’est pas éditeur de logiciel. Il s’agit d’un domaine maîtrisé et dominé par Microsoft depuis très longtemps maintenant.

Windows est au cœur de Xbox. Cela signifie que la complémentarité entre le matériel et le logiciel est accrue. J’évoquai DirectX 12 un peu plus tôt pour ces raisons. Microsoft a une connaissance de la partie logicielle, même très pointue, qui lui permet de mobiliser moins de ressources matérielles et de compenser avec l’excellence de ses propres logiciels.

Je ne rentrerai pas dans le détail mais si vous souhaitez en savoir plus, des optimisations comme l’ombrage à taux variable, l’entrée de latence dynamique et la rétrocompatibilité ne sont que quelques exemples des trésors d’innovation que Microsoft déploie dans sa future console.

Sony n’a rien évoqué à ce sujet. Absolument rien du tout. Comment les développeurs vont-ils pouvoir optimiser leurs jeux ? La question reste entière.

Microsoft l’emporte donc ici, aussi !

## Conclusion
Si les deux machines sont très performantes sur le papier, Microsoft dispose de la plus puissante et de la plus cohérente d’un point de vue architecturale. La stratégie de Sony et de son SSD surpuissant ne s’avérera payante qu’à condition d’avoir des outils logiciels parfaitement maîtrisés, ce que Microsoft sait déjà faire avec brio.

