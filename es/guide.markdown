---
layout: post
title: Guía del usuario para mbtiChat
image: '/images/userGuide/thumbnail-en.jpg'
---
La aplicación mbtiChat es una aplicación que permite a los usuarios chatear libremente con personajes de IA entrenados para cada uno de los 16 tipos de MBTI. La aplicación fue desarrollada con la idea de que los usuarios podrían estar interesados en las características de los diferentes tipos de MBTI, las relaciones entre diferentes tipos y cómo piensan y se comportan los diferentes tipos. Ahora, veamos cómo utilizar la aplicación mbtiChat.

## Funciones de la aplicación y descripción de las páginas
Además de la funcionalidad de chatear con IA, nuestra aplicación también incluye características más detalladas como guías y publicaciones de blog. Las principales funcionalidades y páginas en la aplicación mbtiChat son **Chat con IA** y **Blog**. También hay otras características detalladas, como la página de guía de usuario que estás viendo actualmente y la selección de idioma. Sin embargo, nos centraremos en las dos principales funcionalidades y páginas, proporcionando información detallada sobre las demás características.

### 1. Chat con IA
![Selección de idioma para chatear con la IA de MBTI](/images/userGuide/userguide-1.jpg)

La función de Chat con IA te permite interactuar con los personajes seleccionados haciendo clic en el botón [Chatear] para cada personaje de MBTI en la página principal. La IA se basa en la versión **gpt-3.5** de la API. Primero, debes **seleccionar un idioma para cambiar el idioma de la aplicación** y poder chatear con la IA.

![Selección de personaje y clic en el botón Chatear para chatear con la IA de MBTI](/images/userGuide/userguide-2.jpg)

Para chatear con la IA, puedes hacer clic en el botón [Chatear] en la parte inferior de los personajes en la página principal. Cada personaje ha sido entrenado con un tipo de MBTI. Ahora, **hagamos clic en el botón [Chatear] y comencemos a chatear con los personajes seleccionados**. Nos hemos trasladado a la página de chat, y en la imagen de abajo puedes ver la presentación personal del personaje y la solicitud de tu tipo de MBTI.

![Página para chatear con la IA de MBTI](/images/userGuide/userguide-3.jpg)

Incluso si no le dices al personaje tu tipo de MBTI, puedes hacer preguntas sobre las características del tipo de MBTI del personaje u otros temas. Sin embargo, si estás interesado en la **compatibilidad** o **interacción** entre tu tipo y el tipo de IA, debes informarle a la IA tu tipo de MBTI. Si no sabes tu tipo de MBTI, puedes preguntarle al personaje: "¿Puedes darme la dirección del sitio web donde puedo hacer un test de MBTI?" El personaje responderá amablemente.

![Ejemplos de preguntas para hacer a la IA de MBTI](/images/userGuide/userguide-4.jpg)
![Ejemplos de preguntas para hacer a la IA de MBTI](/images/userGuide/userguide-5.jpg)
![Ejemplos de preguntas para hacer a la IA de MBTI](/images/userGuide/userguide-6.jpg)

Puedes hacer diversas preguntas a la IA. Supongamos que el personaje con el que estás chateando tiene el tipo de personalidad INTP, puedes hacer preguntas como:

- **Ejemplo) "¿Cuáles son las características de la personalidad de un INTP?"**
- **Ejemplo) "Vi una película triste con un amigo cercano, pero mi amigo no se sintió triste en absoluto. ¿Podría ser mi amigo un INTP?"**
- **Ejemplo) "Cuéntame sobre la compatibilidad entre el tipo INTP de mi amigo y mi tipo ENFP."**

Al hacer este tipo de preguntas, puedes **entender la personalidad de un tipo específico**, deducir el tipo de tu amigo y obtener información sobre la **compatibilidad y fortalezas/debilidades entre el tipo de tu amigo y el tuyo propio**. Además, como se muestra en la parte marcada de la imagen anterior, ten en cuenta que la aplicación mbtiChat funciona a través de anuncios y patrocinios, por lo que se mostrará un mensaje informativo una vez durante el chat con el personaje.

![Funciones de Compartir, Emoticonos y Comentarios después de usar la IA de MBTI](/images/userGuide/userguide-7.jpg)

¿Fue útil la conversación con la IA? Si es así, ¡comparte la aplicación mbtiChat con tus amigos y deja muchos comentarios! **Ten la seguridad de que el contenido del chat dentro de la aplicación nunca se almacenará.**

### 2. Blog
![Página de blog en la aplicación mbtiChat](/images/userGuide/userguide-8.jpg)

Además de las funcionalidades, la aplicación mbtiChat también incluye un blog. Las publicaciones del blog se centran principalmente en las habilidades de desarrollo utilizadas durante el proceso de desarrollo de la aplicación mbtiChat.

## Análisis técnico e introducción de la aplicación
La aplicación mbtiChat es una aplicación web estática, lo que significa que es un sitio web con contenido fijo y funciones o interacciones limitadas. Aunque el alcance de la aplicación web mbtiChat no es grande, incluye características como un blog y la selección de idioma, que tienen limitaciones al desarrollarse como una aplicación web estática. Por lo tanto, utilicé la tecnología del **framework Jekyll para la generación de sitios web estáticos**.

Jekyll genera archivos HTML estáticos basados en plantillas y diseños especificados por el usuario. Esto permite la reutilización eficiente de elementos repetitivos y la aplicación de un diseño y una estructura coherentes.

La característica principal de la aplicación mbtiChat es la funcionalidad de chat con IA. La IA se basa en la versión **gpt-3.5** de la API. Para comunicarse con la API GPT, utilicé **NODE.JS** como servidor. Para la aplicación móvil, desarrollé una aplicación basada en una página web receptiva utilizando **React-Native-Webview**.
