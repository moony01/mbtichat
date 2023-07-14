---
layout: post
title: User Guide for mbtiChat
# permalink: /guide/en/
image: '/images/userGuide/thumbnail-en.jpg'
---
The mbtiChat app is an application that allows users to have free conversations with AI characters based on the 16 MBTI types. The purpose of this app is to satisfy users' curiosity about the characteristics of different MBTI types, the relationships between different types, and how different types think and behave. Now, let's take a look at how to use the mbtiChat app.

## App Features and Page Introduction
In addition to the chatting feature with AI, our app includes more detailed functionalities such as guides and a blog section. The main functionalities and pages in the mbtiChat app are **AI Chatting** and **Blog**. Although there are other features such as the user guide page and language selection, we will focus on these two main functionalities and explore them in detail.

### 1. AI Chatting Feature
![Language Selection for Chatting with MBTI AI](/images/userGuide/userguide-1.jpg)

The AI Chatting feature allows you to have conversations with the AI characters you choose by clicking the [Chat] button from the main page. The AI is developed based on the **gpt-3.5** API version. To start a conversation with AI, you first need to **select a language to change the app's language**.

![Character Selection and Clicking Chat Button for Chatting with MBTI AI](/images/userGuide/userguide-2.jpg)

To chat with AI, you can click the [Chat] button below the characters on the main page. Each character has been trained with one MBTI type. Now, let's initiate a chat with the selected characters. We have moved to the chat page, and you can see in the image below that the character introduces itself and asks for your MBTI type.

![Page for Chatting with MBTI AI](/images/userGuide/userguide-3.jpg)

Even if you don't provide your MBTI type, you can still ask the character about the characteristics of its MBTI type or inquire about the compatibility and interaction between your type and the AI's type. However, if you want to know about the compatibility or interaction between your type and the character's type, you need to inform the AI about your MBTI type. You can ask the character, "Can you provide me with the website address for taking the MBTI test?" The character will kindly respond.

![Example Questions to Ask MBTI AI](/images/userGuide/userguide-4.jpg)
![Example Questions to Ask MBTI AI](/images/userGuide/userguide-5.jpg)
![Example Questions to Ask MBTI AI](/images/userGuide/userguide-6.jpg)

You can ask various questions to the AI. Assuming your chatting character has the INTP personality type, here are some examples of questions you can ask:

- **E.g., "What are the characteristics of an INTP?"**
- **E.g., "I watched a sad movie with my close friend, but my friend didn't seem sad at all. Could my friend's MBTI type be INTP?"**
- **E.g., "Tell me about the compatibility between my friend's MBTI type, INTP, and my type, ENFP."**

By asking these questions, you can **understand the characteristics of specific types**, **deduce your friend's type based on their behavior**, and **inquire about the compatibility and strengths/weaknesses between your type and your friend's type**. Additionally, as indicated in the highlighted section of the above image, the mbtiChat app is supported by ads and sponsorships, so an informative message will be displayed once during the chat with the character.

![Share, Emote, and Comment after Using MBTI AI](/images/userGuide/userguide-7.jpg)

Did the conversation with AI provide you with assistance? If so, please share the mbtiChat app with your friends and leave plenty of comments! **Rest assured that the chat contents in this app will never be stored.**

### 2. Blog
![Blog Page in the mbtiChat App](/images/userGuide/userguide-8.jpg)

In addition to its functionalities, the mbtiChat app also includes a blog section. The blog posts mainly cover the development skills used in the process of developing the mbtiChat app.

## App Technical Analysis and Introduction
The mbtiChat app is a static web application. A static web app refers to a website with fixed content and limited dynamic functionalities or interactions. Although the mbtiChat web app is not large in scale, it includes blog functionality and language selection, which exceed the capabilities of a static web app. Therefore, I used the **Jekyll static website generation framework** for development.

Jekyll generates static HTML files based on user-specified templates and layouts. This allows for effective reuse of repetitive elements and consistent design and layout.

The key feature of the mbtiChat app is the AI chatting functionality. The AI is based on the **gpt-3.5** version API. For communication with the GPT API, I used **Node.js** as the server. The mobile app was developed using **React-Native-Webview** to create a responsive web-based mobile app.
