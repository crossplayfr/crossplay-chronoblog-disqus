---
title: Pourquoi YouTube est-il si lent lorsque vous n’utilisez pas Chrome ?
cover: ./cover.jpg
date: 2018-08-03
description: 
tags: ['CrossPlay-v1']
---
Il y a quelques jours, le site The Verge dévoilait comment rendre YouTube cinq fois plus rapide  si vous n’utilisez pas Chrome. Nous y reviendrons plus tard, mais d’abord, essayons surtout de comprendre pourquoi le service est si lent quand vous n’utilisez pas le navigateur de Google.

Voyez-vous, il y a quelques années, Microsoft avait eu la malheureuse idée de tenter d’imposer des standards en profitant de sa position dominante avec Internet Explorer. L’entreprise a ensuite laissé son logiciel sombrer dans la médiocrité jusqu’à finalement reprendre les choses en main à partir de la version 9. Malheureusement, le mal était déjà fait. Edge, le successeur d’Internet Explorer, souffre aujourd’hui de la réputation de son prédécesseur et peine à gagner la confiance des utilisateurs. Bien que les choix douteux de la concurrence pourraient servir de leçon aux autres développeurs de navigateurs afin que leurs outils soit une réussite. Il semblerait que Google aujourd’hui prenne le même chemin qu’Internet Explorer à l’époque.

## Une histoire de technologie obsolète dans YouTube
Pour ceux souhaitant connaître la version courte de l’histoire, sachez que Chrome implémente une technologie obsolète qu’il est le seul à encore supporter et que YouTube (de Google également) utilise allégrement encore aujourd’hui. Cette technologie n’étant plus implémenté sur Edge et Firefox puisque dépassée, YouTube ne peut pas fonctionner comme prévu. La responsabilité en revient donc à YouTube qui aurait pu se passer de cette technologie mais a choisi de la conserver.

Venons-en à la version longue de cette histoire qui est révélatrice de ce que j’expliquais plus tôt au sujet de Chrome se métamorphosant en Internet Explorer. Pour ceux ne souhaitant pas plus de détails à ce sujet, vous pouvez passer à la méthode pour solutionner le problème !

Chrome implémente aujourd’hui une API nommée Shadow DOM qui consiste à simplifier le travail du développeur web tout en intégrant des éléments directement dans le navigateur. Google peut ainsi intégrer les éléments dont le développeur a besoin pour construire ses pages mais aussi les enrichir sans rendre le tout plus complexe puisque qu’une partie du code ne sera pas accessible au programmeur. Il s’agit d’une explication succincte mais qui résume le potentiel de Shadow DOM. Malheureusement, ce dernier est maintenant obsolète et a été remplacé par une autre API : Web Components, actuellement prise en charge par tous les navigateurs. Mais alors, pourquoi Google n’a-t-il pas agi pour que YouTube n’utilise plus Shadow DOM ?

## Aucune raison avancée aujourd’hui
Disons les choses simplement : peu importe le point de vue adopté, la décision de Google est inexplicable. Prenons les arguments possibles en faveur de la société américaine pour mieux comprendre.

Google n’aurait aucun intérêt à travailler pour les navigateurs concurrents. C’est faux, tout simplement parce qu’en continuant d’utiliser cette technologie, Google met non seulement en péril   les utilisateurs de Edge et Firefox, mais aussi ceux de Chrome qui utilise une technologie présentant de potentielles failles de sécurité et qui finira un jour où l’autre par bloquer la voie à l’amélioration de Chrome. En solutionnant le problème, non seulement Google assure la pérennité de son propre navigateur mais se plie aux standards du web. Tout le monde y gagne !

Il serait trop long et/ou couteux de passer de Shadow DOM à Web Components. Là encore, c’est faux. Google Chrome utilise déjà la technologie Web Components puisqu’elle est prise en charge sur d’autres sites internet. Même Google y fait référence dans sa propre documentation à destination des développeurs. Absurde donc…

YouTube a tout intérêt à mieux fonctionner sur Chrome puisque Google en fait la promotion. De prime abord, je serai tenté de dire que c’est vrai. Mais en y réfléchissant un peu plus, je me rends compte que c’est idiot comme façon de voir les choses. Un certain nombre de sites se basent aujourd’hui sur des technologies présentes uniquement dans Chrome, comme Internet Explorer à l’époque. La suite, nous la connaissons tous. Microsoft a voulu moderniser son navigateur tout en prenant en charge les vieux sites web et le tout s’est effondré sous le nez d’utilisateurs en colère. En pariant sur le bon fonctionnement de YouTube et en continuant de prendre en charge des technologies obsolètes, Google entre dans un processus qui ne peut que conduire à l’effondrement de son logiciel puisqu’il deviendra impossible à long terme de prendre les derniers standards en charge aux côtés des technologies dépassées.

L’avenir nous dira ce quelle direction a choisi Google, mais le futur ne semble pas franchement assuré pour Chrome.

Cette solution ne s’applique qu’à Microsoft Edge, Mozilla Firefox et Safari. Si une page d’erreur s’affiche après l’installation du script, pas d’inquiétude, le script a bien été installé, redémarrer votre navigateur et tout ira bien !

## Microsoft Edge
## Mozilla Firefox
## Safari
