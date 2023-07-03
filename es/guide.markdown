---
layout: post
title: Guía del usuario para mbtiChat
image: '/images/userGuide/thumbnail-en.jpg'
---

**La aplicación mbtiChat es una aplicación que permite a los usuarios comunicarse libremente con personajes de IA entrenados en los 16 diferentes tipos de personalidad del MBTI.** Diseñada con la idea de que los usuarios podrían estar interesados en las características de los diferentes tipos de MBTI, la aplicación tiene como objetivo mejorar la comprensión de los rasgos, relaciones, pensamientos y comportamientos a través de diferentes tipos. Veamos cómo usar la aplicación mbtiChat.

## Características de la aplicación y descripción general de las páginas
Además de la funcionalidad de chat de IA, nuestra aplicación mbtiChat ofrece otras características detalladas, guías y publicaciones de blog. Las características y páginas principales en la aplicación mbtiChat son el **Chat de IA** y el **Blog**. Aunque hay otras características detalladas como la página de guía del usuario y la selección de idioma, nos centraremos en estas dos características y páginas principales y abordaremos las demás características.

### 1. Chat de IA
![Selección de idioma para el chat de IA del MBTI](/images/userGuide/userguide-1.jpg)

La función de chat de IA le permite interactuar con los personajes de IA haciendo clic en el botón [Chatear ahora] en la página principal. La IA fue desarrollada utilizando la versión **gpt-3.5** de la API. Para comenzar una conversación con la IA, **primero seleccione el idioma para cambiar el idioma de la aplicación.**

![Selección de personaje y clic en el botón "Chatear ahora" para el chat de IA](/images/userGuide/userguide-2.jpg)

En la página principal, puede hacer clic en el botón [Chatear ahora] debajo de cada personaje para iniciar una conversación con el personaje seleccionado. Cada personaje ha sido entrenado en un tipo de MBTI específico. **Haga clic en el botón [Chatear ahora] ahora y comience la conversación con los personajes seleccionados.** En la siguiente imagen, puede ver la presentación del personaje y su solicitud de su tipo de MBTI.

![Página para chatear con la IA del MBTI](/images/userGuide/userguide-3.jpg)

Puede hacerle diferentes preguntas a la IA. Incluso si no revela su tipo de MBTI, **puede preguntar sobre las características de un tipo específico o sobre la interacción entre diferentes tipos.** Sin embargo, si está interesado en la compatibilidad o interacción entre su tipo y el tipo de la IA, deberá compartir su tipo de MBTI con la IA. **Por ejemplo, puede preguntarle al personaje: "¿Puede proporcionar una dirección web para una prueba del MBTI?" El personaje responderá amablemente.**

![Ejemplos de preguntas para la IA del MBTI](/images/userGuide/userguide-4.jpg)
![Ejemplos de preguntas para la IA del MBTI](/images/userGuide/userguide-5.jpg)
![Ejemplos de preguntas para la IA del MBTI](/images/userGuide/userguide-6.jpg)

Los usuarios pueden hacer múltiples preguntas. Supongamos que su personaje es Olivia con una personalidad INTP. Puede hacer preguntas como:

- **Por ejemplo: "¿Cuáles son las características de un INTP?"**
- **Por ejemplo: "Vi una película triste con un amigo cercano, pero mi amigo no parecía estar triste en absoluto. ¿Podría ser mi amigo un INTP?"**
- **Por ejemplo: "Cuéntame sobre la compatibilidad entre el tipo INTP de mi amigo y mi tipo ENFP."**

Haciendo este tipo de preguntas, **puede obtener ideas sobre características de personalidad específicas o incluso especular sobre el tipo de su amigo basado en sus reacciones.** Como se indica en la imagen anterior, tenga en cuenta que la aplicación mbtiChat es compatible con publicidad y patrocinios, y mostrará un mensaje informativo una vez durante el chat con el personaje.

![Compartir, expresar emociones y comentar después de usar la IA del MBTI](/images/userGuide/userguide-7.jpg)

¿Te ha ayudado la conversación con la IA? Si es así, ¡comparte la aplicación mbtiChat con tus amigos y deja comentarios! **Ten la seguridad de que la aplicación no guarda los contenidos del chat.**

### 2. Blog
![Página del blog en la aplicación mbtiChat](/images/userGuide/userguide-8.jpg)

**La aplicación mbtiChat no solo ofrece características, sino que también incluye un blog.** La mayoría de las publicaciones del blog se centran en los aspectos técnicos y habilidades utilizadas en el proceso de desarrollo de la aplicación mbtiChat.

## Análisis técnico e introducción
La aplicación mbtiChat es una aplicación web estática, es decir, un sitio web con contenido fijo y con funciones o interacciones dinámicas limitadas. Aunque la aplicación web mbtiChat no es muy grande, incluye características como un blog y una selección de idioma que limitan su desarrollo como una aplicación web estática pura. Por esta razón, he utilizado el **framework Jekyll para la generación de sitios web estáticos**.

Jekyll genera archivos HTML estáticos basados en plantillas y diseños establecidos por el usuario. Esto permite la reutilización efectiva de elementos recurrentes y la aplicación coherente de diseño y diseño.

El elemento clave de la aplicación mbtiChat es la función de chat de IA. La IA se basa en la versión **gpt-3.5** de la API. Para comunicarse con la API de GPT, he utilizado **Node.js** como tecnología del lado del servidor. Para la aplicación móvil, la he desarrollado con **React Native WebView**, lo que permite crear la aplicación móvil con sitios web receptivos.
