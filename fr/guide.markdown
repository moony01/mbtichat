---
layout: post
title: Guide de l'utilisateur pour mbtiChat
image: '/images/userGuide/thumbnail-en.jpg'
---
L'application mbtiChat est une application qui permet aux utilisateurs de dialoguer librement avec des personnages IA basés sur les 16 types MBTI. Cette application a été développée dans le but de satisfaire la curiosité des utilisateurs concernant les caractéristiques des différents types MBTI, les relations entre les différents types, ainsi que les pensées et comportements des différents types. Maintenant, voyons comment utiliser l'application mbtiChat.

## Fonctionnalités de l'application et présentation des pages
En plus de la fonction de discussion avec l'IA, notre application propose des fonctionnalités plus détaillées telles que des guides et une section blog. Les principales fonctionnalités et pages de l'application mbtiChat sont **Discussion avec l'IA** et **Blog**. Bien qu'il y ait d'autres fonctionnalités telles que la page de guide de l'utilisateur et la sélection de la langue, nous allons nous concentrer sur ces deux principales fonctionnalités et les explorer en détail.

### 1. Fonction de discussion avec l'IA
![Sélection de la langue pour discuter avec l'IA basée sur le MBTI](/images/userGuide/userguide-1.jpg)

La fonction de discussion avec l'IA permet d'engager des conversations avec les personnages IA que vous avez choisis en cliquant sur le bouton [Discuter] depuis la page principale. L'IA est développée en utilisant la version **gpt-3.5** de l'API. Pour démarrer une conversation avec l'IA, vous devez d'abord **sélectionner une langue pour changer la langue de l'application**.

![Sélection du personnage et clic sur le bouton de discussion pour dialoguer avec l'IA basée sur le MBTI](/images/userGuide/userguide-2.jpg)

Pour discuter avec l'IA, vous pouvez cliquer sur le bouton [Discuter] situé sous les personnages sur la page principale. Chaque personnage a été formé avec un type MBTI spécifique. Maintenant, lançons une discussion avec les personnages sélectionnés. Nous avons accédé à la page de discussion et vous pouvez voir dans l'image ci-dessous que le personnage se présente et demande votre type MBTI.

![Page pour discuter avec l'IA basée sur le MBTI](/images/userGuide/userguide-3.jpg)

Même si vous ne fournissez pas votre type MBTI, vous pouvez quand même poser des questions au personnage sur les caractéristiques de son type MBTI ou demander des informations sur la compatibilité et l'interaction entre votre type et celui de l'IA. Cependant, si vous souhaitez connaître la compatibilité ou l'interaction entre votre type et celui du personnage, vous devez informer l'IA de votre type MBTI. Vous pouvez demander au personnage : "Pouvez-vous me fournir l'adresse du site web pour passer le test MBTI ?" Le personnage vous répondra aimablement.

![Exemples de questions à poser à l'IA basée sur le MBTI](/images/userGuide/userguide-4.jpg)
![Exemples de questions à poser à l'IA basée sur le MBTI](/images/userGuide/userguide-5.jpg)
![Exemples de questions à poser à l'IA basée sur le MBTI](/images/userGuide/userguide-6.jpg)

Vous pouvez poser diverses questions à l'IA. En supposant que votre personnage de discussion ait le type de personnalité INTP, voici quelques exemples de questions que vous pouvez poser :

- **Par exemple : "Quelles sont les caractéristiques d'un INTP ?"**
- **Par exemple : "J'ai regardé un film triste avec mon ami proche, mais mon ami ne semblait pas du tout triste. Est-ce que le type MBTI de mon ami pourrait être INTP ?"**
- **Par exemple : "Parlez-moi de la compatibilité entre le type MBTI de mon ami, INTP, et mon type, ENFP."**

En posant ces questions, vous pouvez **comprendre les caractéristiques de types spécifiques**, **déduire le type de votre ami en fonction de son comportement** et **demander des informations sur la compatibilité et les forces/faiblesses entre votre type et celui de votre ami**. De plus, comme indiqué dans la partie surlignée de l'image ci-dessus, l'application mbtiChat est soutenue par des publicités et des parrainages, donc un message informatif s'affichera une fois pendant la discussion avec le personnage.

![Partage, expression d'émotions et commentaires après utilisation de l'IA basée sur le MBTI](/images/userGuide/userguide-7.jpg)

La conversation avec l'IA vous a-t-elle été utile ? Si oui, partagez l'application mbtiChat avec vos amis et laissez de nombreux commentaires ! **Soyez assuré que le contenu des discussions dans cette application ne sera jamais enregistré.**

### 2. Blog
![Page de blog dans l'application mbtiChat](/images/userGuide/userguide-8.jpg)

En plus de ses fonctionnalités, l'application mbtiChat comprend également une section blog. Les articles de blog traitent principalement des compétences de développement utilisées dans le processus de développement de l'application mbtiChat.

## Analyse technique de l'application et introduction
L'application mbtiChat est une application web statique. Une application web statique fait référence à un site web dont le contenu est fixe et les fonctionnalités ou interactions dynamiques sont limitées. Bien que l'application web mbtiChat ne soit pas de grande envergure, elle comprend des fonctionnalités de blog et de sélection de langue qui dépassent les capacités d'une application web statique. J'ai donc utilisé le **framework de génération de sites web statiques Jekyll** pour le développement.

Jekyll génère des fichiers HTML statiques en se basant sur des modèles et des mises en page spécifiés par l'utilisateur. Cela permet une réutilisation efficace des éléments répétitifs, ainsi qu'une conception et une mise en page cohérentes.

La fonctionnalité clé de l'application mbtiChat est la fonction de discussion avec l'IA. L'IA est basée sur la version **gpt-3.5** de l'API. Pour la communication avec l'API GPT, j'ai utilisé **Node.js** comme serveur. L'application mobile a été développée en utilisant **React-Native-Webview** pour créer une application mobile basée sur le web et réactive.