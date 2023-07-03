---
layout: post
title: User Guide for mbtiChat
# permalink: /guide/en/
image: '/images/userGuide/thumbnail-en.jpg'
---

**The mbtiChat app is an application that allows users to freely converse with AI characters trained on the 16 different MBTI personality types.** Developed with the idea that users might be curious about the characteristics of different MBTI types, the app aims to enhance understanding of traits, relationships, thoughts, and behaviors across various types. Let's explore how to use the mbtiChat app.

## App Features and Page Introduction
In addition to the AI chat functionality, our app offers more detailed features, guides, and blog posts. The main features and pages in the mbtiChat app include **AI Chatting** and the **Blog**. While there are other detailed functionalities such as the user guide page and language selector, we will focus on these two main features and pages and delve into the other functionalities.

### 1. AI Chatting
![Selecting Language for MBTI AI Conversation](/images/userGuide/userguide-1.jpg)

The AI Chatting feature allows you to interact with the AI characters by clicking the [Chat Now] button on the main page. The AI is developed using the **gpt-3.5** version API. To initiate a conversation with the AI, **you first select the language to change the app's language.**

![Selecting Character and Clicking the Chat Now Button for AI Conversation](/images/userGuide/userguide-2.jpg)

On the main page, you can click the [Chat Now] button below each character to engage in a conversation with your chosen character. Each character has been trained on a specific MBTI type. **Now, let's click the [Chat Now] button and start chatting with the selected characters.** In the following image, you can see the character's self-introduction and their request for your MBTI type.

![Page for Chatting with MBTI AI](/images/userGuide/userguide-3.jpg)

You can ask various questions to the AI. Even if you don't disclose your MBTI type, **you can inquire about the characteristics of a specific type or how different types interact.** However, if you're curious about the compatibility or interaction between your type and the AI's type, you need to share your MBTI type with the AI. **You can ask the character, for example, "Could you provide a website address for an MBTI test?" The character will kindly respond.**

![Example Questions for MBTI AI](/images/userGuide/userguide-4.jpg)
![Example Questions for MBTI AI](/images/userGuide/userguide-5.jpg)
![Example Questions for MBTI AI](/images/userGuide/userguide-6.jpg)

Users can ask multiple questions. Assuming your character is Olivia with an INTP personality, you can ask questions like:

- **E.g., "What are the characteristics of an INTP?"**
- **E.g., "I watched a sad movie with a close friend, but my friend didn't seem sad at all. Could my friend be an INTP?"**
- **E.g., "Tell me about the compatibility between my friend's INTP type and my ENFP type."**

By asking such questions, **you can gain insights into specific personality traits or even speculate about your friend's type based on their reactions.** As indicated in the above image, please note that the mbtiChat app is supported by advertisements and sponsorships, and an information message will be displayed once during the chat with the character.

![Share, Express Emotions, and Comment after Using MBTI AI](/images/userGuide/userguide-7.jpg)

Did the conversation with the AI help you? If so, please share the mbtiChat app with your friends and leave comments! **Rest assured that the app does not store any chat content.**

### 2. Blog
![Blog Page in the mbtiChat App](/images/userGuide/userguide-8.jpg)

**The mbtiChat app not only offers features but also includes a blog.** Most of the blog posts focus on the technical aspects and skills used in the development process of the mbtiChat app.

## Technical Analysis and Introduction
The mbtiChat app is a static web app, meaning it is a website with fixed content and limited dynamic features or interactions. Although the mbtiChat web app is not too large in scale, it includes blog functionality and language selection, which have limitations in developing it solely as a static web app. Therefore, I used the **Jekyll static website generation framework**.

Jekyll generates static HTML files based on user-specified templates and layouts. This allows for effective reuse of repetitive elements and consistent design and layout application.

The key feature of the mbtiChat app is the AI chat function. The AI is based on the **gpt-3.5** version API. To communicate with the GPT API, I utilized **Node.js** as the server-side technology. For the mobile app, I developed it using **React Native WebView**, which allows the mobile app to be built using responsive web pages.

