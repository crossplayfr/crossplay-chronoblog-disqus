---
title: Les mails chiffrés sur macOS ne le sont pas tant que ça
cover: ./cover.jpg
date: 2019-11-09
description: 
tags: ['CrossPlay-v1']
---
Utilisez le client de messagerie d’Apple pour envoyer vos e-mails ? Si la réponse est oui, alors il est possible que vos courriels ne soient pas aussi confidentiels que ce que vous pourriez croire.

Bob Gendler est un spécialiste des produits de la marque à la pomme qu’il scrute au microscope régulièrement. Dans un billet publié récemment, il indique très précisément comment, après analyse, il s’est rendu compte que des mails pourtant censés être chiffrés par le système sont en réalité stockés tel quel sur la machine.

Afin d’offrir une expérience personnalisée à ses utilisateurs, Siri, l’assistant vocal Apple, est autorisé à accéder à vos documents. Cela lui permet d’en apprendre plus à votre sujet mais aussi de répondre de façon plus pertinente à vos demandes. Cependant, cela passe aussi par la mise à disposition d’informations comme vos mails auprès de Siri, et c’est là que le bât blesse.

Gendler a mis le doigt sur un fichier : snippet.db. Ce dernier stock en effet le text non crypté de vos mails censés l’être. En effet, un mail chiffré ne peut l’être qu’à l’aide d’une clé de décodage. En supprimant la clé, Apple Mail n’est donc plus en mesure d’afficher le texte du message. Mais même en supprimant cette clé de son ordinateur, Gendler a pu accéder au travers du fichier snippet.db aux textes de ces mails. Un problème de sécurité que l’on peut qualifier d’inquiétant.

Pourtant, ça n’est pas faute de l’avoir remonté au support. Le 29 juillet, Apple a été mis au courant du problème et n’y a apporté une solution que le 5 novembre, soit 99 jours plus tard. Malgré les patchs disponibles pour macOS Catalina, Mojave, High Sierra et Sierra, le problème persiste. Aucun correctif n’a réellement corrigé le problème.

Aujourd’hui, Apple suggère à ses utilisateurs de désactiver l’option « Apprendre de cette app » dans les préférences de Siri. Attention, cela ne concerne que les nouveaux mails entrants, les anciens resteront stockés dans snippets.db si vous ne supprimez pas le fichier.

Afin d’éviter ce genre de problème, vous pouvez également activer FileVault qui cryptera l’ensemble des données sur votre disque dur si ça n’est pas déjà fait.

Malgré le faible pourcentage de personne potentiellement touchée par le problème, cela pose la question de l’usage des données des utilisateurs et donc de la confidentialité de chacun.

