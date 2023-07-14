---
layout: post
title: Guia do Usuário para mbtiChat
image: '/images/userGuide/thumbnail-en.jpg'
---
O aplicativo mbtiChat é um aplicativo que permite aos usuários conversar livremente com personagens de IA com base nos 16 tipos MBTI. Este aplicativo foi desenvolvido com a ideia de que os usuários podem estar curiosos sobre as características de diferentes tipos MBTI, os relacionamentos entre diferentes tipos e os pensamentos e comportamentos de diferentes tipos. Agora, vamos ver como você pode usar o aplicativo mbtiChat.

## Apresentação das funcionalidades e páginas do aplicativo
Além da funcionalidade de conversar com IA, nosso aplicativo também possui recursos mais detalhados, como guias e postagens de blog. As principais funcionalidades e páginas do aplicativo mbtiChat são **Conversar com IA** e **Blog**. Além da página de guia do usuário atual e do recurso de seleção de idioma, existem outros recursos detalhados, mas vamos nos concentrar nas duas principais funcionalidades e páginas e discuti-las com mais detalhes.

### 1. Conversar com IA
![Seleção de idioma para Conversar com IA no MBTI](/images/userGuide/userguide-1.jpg)

A funcionalidade de Conversar com IA permite conversar com os personagens MBTI de sua escolha, clicando no botão [Conversar] na tela inicial. Essa IA foi desenvolvida com base na versão API **gpt-3.5**. Para começar a conversar com IA, você deve primeiro **selecionar o idioma para alterar o idioma do aplicativo**.

![Seleção de personagem e clique no botão Conversar para Conversar com IA no MBTI](/images/userGuide/userguide-2.jpg)

Para conversar com IA, você pode clicar no botão [Conversar] abaixo dos personagens na página inicial. Cada personagem foi treinado em um tipo MBTI. Agora, vamos começar a conversar com o personagem escolhido. Mudamos para a página de conversa e você pode ver na imagem abaixo que o personagem se apresenta e pergunta sobre o seu tipo MBTI.

![Página para Conversar com IA no MBTI](/images/userGuide/userguide-3.jpg)

Embora você não precise fornecer seu tipo MBTI, você pode fazer perguntas ao personagem sobre as características do tipo MBTI dele ou perguntar sobre a compatibilidade e interação entre o seu tipo e o tipo de IA. Mas se você quiser saber mais sobre a compatibilidade ou interação entre o seu tipo e o tipo do personagem, você precisa informar ao personagem IA o seu tipo MBTI. Você pode perguntar ao personagem: "Você pode me dar o endereço de um site onde posso fazer um teste MBTI?" O personagem responderá amavelmente.

![Exemplos de perguntas para IA no MBTI](/images/userGuide/userguide-4.jpg)
![Exemplos de perguntas para IA no MBTI](/images/userGuide/userguide-5.jpg)
![Exemplos de perguntas para IA no MBTI](/images/userGuide/userguide-6.jpg)

Você pode fazer várias perguntas à IA. Por exemplo, se o personagem com quem você está conversando tem uma personalidade do tipo INTP, aqui estão algumas perguntas de exemplo:

- **Exemplo: "Quais são as características da personalidade do tipo INTP?"**
- **Exemplo: "Assisti a um filme triste com um amigo, mas ele não parecia triste de forma alguma. É possível que meu amigo tenha o tipo MBTI INTP?"**
- **Exemplo: "Você pode me falar sobre a compatibilidade entre o tipo do meu amigo, INTP, e o meu tipo, ENFP?"**

Fazendo essas perguntas, você pode **entender as características de tipos específicos**, **deduzir o tipo do seu amigo com base no comportamento dele** e **obter informações sobre a compatibilidade e vantagens e desvantagens entre o seu tipo e o tipo do seu amigo**. Além disso, como indicado na área destacada da imagem acima, o aplicativo mbtiChat é suportado por anúncios e patrocínios, portanto, uma mensagem informativa será exibida durante a conversa com o personagem.

![Compartilhar, expressar emoções e comentar após usar a IA no MBTI](/images/userGuide/userguide-7.jpg)

A conversa com IA foi útil para você? Compartilhe o aplicativo mbtiChat com seus amigos e deixe muitos comentários! **Não se preocupe, o conteúdo da conversa neste aplicativo não é armazenado.**

### 2. Blog
![Página do blog no aplicativo mbtiChat](/images/userGuide/userguide-8.jpg)

Além das funcionalidades, o aplicativo mbtiChat também inclui uma seção de blog. Os artigos do blog são principalmente sobre habilidades de desenvolvimento utilizadas durante o processo de desenvolvimento do aplicativo mbtiChat.

## Análise técnica e apresentação do aplicativo
O aplicativo mbtiChat é um aplicativo web estático. Um aplicativo web estático refere-se a um site com conteúdo fixo e funcionalidades dinâmicas ou interações limitadas. Embora o aplicativo mbtiChat não seja grande em escala, ele possui recursos como blog e seleção de idioma que vão além das capacidades de um aplicativo web estático. Por isso, utilizei o **Jekyll como framework para gerar páginas web estáticas**.

O Jekyll gera arquivos HTML estáticos com base em modelos e layouts definidos pelo usuário. Isso permite a reutilização eficiente de elementos repetitivos e a aplicação de um design e layout consistentes.

A principal funcionalidade do aplicativo mbtiChat é a capacidade de conversar com IA. A IA é baseada na versão API **gpt-3.5**. Para se comunicar com a API GPT, usei o **Node.js** como servidor. O aplicativo móvel foi desenvolvido usando a tecnologia **React-Native-Webview** para criar um aplicativo móvel responsivo baseado na web.
