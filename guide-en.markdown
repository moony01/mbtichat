---
layout: post
title: MBTI AI CHAT 사용자 가이드
permalink: /guide/en/
image: '/images/userGuide/0.jpg'
---

The application is an application that allows users to have free conversations with AI characters based on the 16 different MBTI types. The motivation and purpose behind the development of the MBTI-CHAT app were to provide users who are aware of their own MBTI type with the opportunity to explore the characteristics of other MBTI types, understand the relationships with different types, and learn how different types might think or behave in specific situations.

Now let's explore how to use the MBTI-CHAT app and introduce its features and pages.

## App Technical Analysis and Introduction
The MBTI-CHAT app is a static web app. A static web app is a website where the content is fixed, and dynamic features or interactions are limited. These websites are typically built using static web technologies such as HTML, CSS, and JavaScript. Static web apps are commonly used to provide information, such as company introduction pages, product brochures, news articles, etc. However, due to the MBTI-CHAT app's inclusion of features like blog functionality and language selection, and the presence of multiple pages, developing it as a static web app has its limitations.

Therefore, I employed the **Jekyll static website generation framework** for its development. Jekyll generates static HTML files based on user-defined templates and layouts. This facilitates efficient reuse of repetitive elements and ensures a consistent design and layout.The primary feature of the MBTI-CHAT app is its AI-powered chat functionality. The AI utilizes the **gpt-3.5** version of the API. To facilitate communication with the GPT API, a NODE.JS server was employed.

I developed a mobile app using **React-Native-Webview** to create a mobile app from a responsive web page.

## App Features and Page Introduction
The main feature of the MBTI-CHAT app, as mentioned in the introduction, is the ability to have free conversations with AI characters based on the 16 different MBTI types. In addition to the AI chatting feature, the app also includes more detailed functionalities such as guides and blog posts.

The app can be divided into two main sections: **AI Chatting** and **Blog**. While there are other features such as the User Guide page and language selection, we will focus on these two main sections and delve into their functionalities.

### 1. AI Chatting
![Language Selection for AI Chatting](/images/userGuide/1.png)

The AI Chatting feature allows users to interact with the AI characters they select by clicking the [Chat Now] button on the main page. The AI is developed based on the gpt-3.5 version API. To start a conversation with the AI, the user first selects the language preference to change the app's language.

![Character Selection and Chatting Button](/images/userGuide/2.png)

To initiate a conversation with the AI, the user can click the [Chat Now] button on the chosen character's element. Each character represents one of the MBTI types, and their respective MBTI types can be identified from the character images. By clicking the [Chat Now] button, we can enter the chatting page and see the character's self-introduction and request for the user's MBTI type.

![Chatting Page with AI](/images/userGuide/3.png)

Even if the user does not provide their MBTI type, they can still ask the characters about the characteristics of a specific MBTI type or any other questions of interest. However, if the user wants to explore the compatibility or interaction between their own type and the character's type, they need to inform the AI about their MBTI type. For example, if the user's type is unknown, they can ask the character, "Can you provide me with a website address where I can take the MBTI test?" The character will kindly respond and assist.

![Example Questions for AI](/images/userGuide/4.png)
![Example Questions for AI](/images/userGuide/5.png)

Users can ask various questions to the AI. Suppose the selected character is Olivia, representing the INTP type. The user can ask questions like "What are the characteristics of an INTP?" or "I watched a sad movie with my friend, but my friend didn't feel sad at all. Could my friend be an INTP?" By asking such questions, users can gain insights into the personality traits of specific types or trace the type of their friends based on their behavior.

Furthermore, users can inquire about the compatibility and strengths/weaknesses between their type and their friends' types. For instance, they can ask, "Can you tell me about the compatibility between an INTP (friend's type) and an ENFP (my type)?" The MBTI-CHAT app is supported by advertisements and donations, so an occasional ad message may appear during the chat.

![Share AI, Emoticons, and Commenting](/images/userGuide/6.png)

Did you find the AI chat helpful? If so, please share the MBTI-CHAT app with your friends and leave comments! Rest assured that the chat contents are never stored.

### 2. Blog
![Blog Page in the MBTI-CHAT app](/images/userGuide/7.png)

The MBTI-CHAT app also includes a blog section. The blog mainly focuses on technical aspects related to the development process of the app, serving as a technology blog. Users can access the blog page by clicking the "Blog" menu on the top navigation bar. The addition of the blog feature was prompted by the need for more content during the Google AdSense approval process. You can find detailed information about Google AdSense in the blog posts.

