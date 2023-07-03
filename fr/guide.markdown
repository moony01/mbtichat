---
layout: post
title: Guide de l'utilisateur pour mbtiChat
image: '/images/userGuide/thumbnail-en.jpg'
---

**L'application mbtiChat est une application qui permet aux utilisateurs de communiquer librement avec des personnages d'IA formés aux 16 types de personnalité différents du MBTI.** Conçue avec l'idée que les utilisateurs pourraient être intéressés par les caractéristiques des différents types MBTI, l'application vise à améliorer la compréhension des traits, des relations, des pensées et des comportements à travers les différents types. Voyons comment utiliser l'application mbtiChat.

## Fonctionnalités de l'application et aperçu des pages
En plus de la fonctionnalité de chat IA, notre application mbtiChat offre d'autres fonctionnalités telles que des guides détaillés et des articles de blog. Les principales fonctionnalités et pages de l'application mbtiChat sont le **Chat IA** et le **Blog**. Bien qu'il y ait d'autres fonctionnalités détaillées telles que la page de guide de l'utilisateur et la sélection de langue, nous nous concentrerons sur ces deux principales fonctionnalités et pages et aborderons les autres fonctionnalités.

### 1. Chat IA
![Sélection de langue pour le chat IA MBTI](/images/userGuide/userguide-1.jpg)

La fonctionnalité de chat IA vous permet d'interagir avec les personnages d'IA en cliquant sur le bouton [Commencer le chat] sur la page d'accueil. L'IA a été développée en utilisant la version **gpt-3.5** de l'API. Pour démarrer une conversation avec l'IA, **sélectionnez d'abord la langue pour changer la langue de l'application.**

![Sélection du personnage et clic sur le bouton "Commencer le chat" pour le chat IA](/images/userGuide/userguide-2.jpg)

Sur la page d'accueil, vous pouvez cliquer sur le bouton [Commencer le chat] sous chaque personnage pour démarrer une conversation avec le personnage sélectionné. Chaque personnage a été formé sur un type MBTI spécifique. **Cliquez sur le bouton [Commencer le chat] maintenant et commencez la conversation avec les personnages sélectionnés.** Dans l'image suivante, vous pouvez voir la présentation du personnage et sa demande de votre type MBTI.

![Page de chat avec l'IA MBTI](/images/userGuide/userguide-3.jpg)

Vous pouvez poser différentes questions à l'IA. Même si vous ne révélez pas votre type MBTI, **vous pouvez demander des informations sur les caractéristiques d'un type spécifique ou sur l'interaction entre différents types.** Cependant, si vous êtes intéressé par la compatibilité ou l'interaction entre votre type et le type de l'IA, vous devrez partager votre type MBTI avec l'IA. **Par exemple, vous pouvez demander au personnage : "Pouvez-vous fournir un lien vers un test MBTI en ligne ?" Le personnage répondra aimablement.**

![Exemples de questions pour l'IA MBTI](/images/userGuide/userguide-4.jpg)
![Exemples de questions pour l'IA MBTI](/images/userGuide/userguide-5.jpg)
![Exemples de questions pour l'IA MBTI](/images/userGuide/userguide-6.jpg)

Les utilisateurs peuvent poser plusieurs questions. Supposons que votre personnage soit Olivia avec une personnalité INTP. Vous pouvez poser des questions comme :

- **Par exemple : "Quelles sont les caractéristiques d'un INTP ?"**
- **Par exemple : "J'ai regardé un film triste avec un ami proche, mais mon ami ne semblait pas du tout triste. Pourrait-il être un INTP ?"**
- **Par exemple : "Parlez-moi de la compatibilité entre le type INTP de mon ami et mon type ENFP."**

En posant ce type de questions, **vous pouvez obtenir des idées sur des traits de personnalité spécifiques ou même spéculer sur le type de votre ami en fonction de ses réactions.** Comme indiqué dans l'image ci-dessus, veuillez noter que l'application mbtiChat prend en charge la publicité et les parrainages, et affichera un message informatif une fois pendant le chat avec le personnage.

![Partage, expression des émotions et commentaires après avoir utilisé l'IA MBTI](/images/userGuide/userguide-7.jpg)

La conversation avec l'IA vous a-t-elle été utile ? Si oui, partagez l'application mbtiChat avec vos amis et laissez des commentaires ! **Sachez que l'application ne conserve pas le contenu des discussions.**

### 2. Blog
![Page de blog dans l'application mbtiChat](/images/userGuide/userguide-8.jpg)

**L'application mbtiChat ne propose pas seulement des fonctionnalités, mais inclut également un blog.** La plupart des articles de blog se concentrent sur les aspects techniques et les compétences utilisées dans le processus de développement de l'application mbtiChat.

## Analyse technique et introduction
L'application mbtiChat est une application Web statique, c'est-à-dire un site Web avec un contenu fixe et des fonctionnalités ou interactions dynamiques limitées. Bien que l'application Web mbtiChat ne soit pas très grande, elle comprend des fonctionnalités telles qu'un blog et une sélection de langue qui limitent son développement en tant qu'application Web statique pure. C'est pourquoi j'ai utilisé **Jekyll, un générateur de sites Web statiques**, pour le développement de l'application.

Jekyll génère des fichiers HTML statiques basés sur des modèles et des mises en page définis par l'utilisateur. Cela permet une réutilisation efficace des éléments récurrents et une application cohérente du design et de la mise en page.

L'élément clé de l'application mbtiChat est la fonctionnalité de chat IA. L'IA est basée sur la version **gpt-3.5** de l'API. Pour communiquer avec l'API GPT, j'ai utilisé **Node.js** comme technologie côté serveur. Pour l'application mobile, je l'ai développée avec **React Native WebView**, ce qui permet de créer l'application mobile à partir de sites Web réactifs.
