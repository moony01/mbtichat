---
layout: post
title: Guia do Usuário para mbtiChat
image: '/images/userGuide/thumbnail-en.jpg'
---

**O aplicativo mbtiChat é um aplicativo que permite aos usuários conversar livremente com personagens de IA treinados nos 16 diferentes tipos de personalidade do MBTI.** Desenvolvido com a ideia de que os usuários podem estar curiosos sobre as características dos diferentes tipos do MBTI, o aplicativo tem como objetivo aprimorar a compreensão dos traços, relacionamentos, pensamentos e comportamentos entre os vários tipos. Vamos explorar como usar o aplicativo mbtiChat.

## Recursos do Aplicativo e Introdução às Páginas
Além da funcionalidade de conversa por IA, nosso aplicativo oferece recursos mais detalhados, guias e postagens de blog. Os principais recursos e páginas no aplicativo mbtiChat incluem **Conversa por IA** e o **Blog**. Embora haja outras funcionalidades detalhadas, como a página de guia do usuário e o seletor de idioma, vamos nos concentrar nesses dois recursos e páginas principais e explorar as outras funcionalidades.

### 1. Conversa por IA
![Selecionando Idioma para Conversa por IA do MBTI](/images/userGuide/1.png)

O recurso de Conversa por IA permite que você interaja com os personagens de IA clicando no botão [Conversar Agora] na página principal. A IA é desenvolvida usando a versão **gpt-3.5** da API. Para iniciar uma conversa com a IA, **você primeiro seleciona o idioma para alterar o idioma do aplicativo**.

![Selecionando Personagem e Clicando no Botão Conversar Agora para Conversa por IA](/images/userGuide/2.png)

Na página principal, você pode clicar no botão [Conversar Agora] abaixo de cada personagem para iniciar uma conversa com o personagem escolhido. Cada personagem foi treinado em um tipo específico do MBTI. **Agora, clique no botão [Conversar Agora] e comece a conversar com os personagens selecionados**. Na imagem a seguir, você pode ver a autoapresentação do personagem e o pedido do seu tipo MBTI.

![Página para Conversar com IA do MBTI](/images/userGuide/3.png)

Você pode fazer várias perguntas à IA. Mesmo que você não divulgue seu tipo MBTI, **você pode perguntar sobre as características de um tipo específico ou como os diferentes tipos interagem**. No entanto, se você estiver curioso sobre a compatibilidade ou interação entre o seu tipo e o tipo da IA, você precisa compartilhar seu tipo MBTI com a IA. **Você pode perguntar ao personagem, por exemplo, "Você pode fornecer um endereço de site para um teste de MBTI?" O personagem responderá gentilmente**.

![Exemplos de Perguntas para IA do MBTI](/images/userGuide/4.png)
![Exemplos de Perguntas para IA do MBTI](/images/userGuide/5.png)

Os usuários podem fazer várias perguntas. Supondo que seu personagem seja Olivia com personalidade INTP, você pode fazer perguntas como:

- **Por exemplo, "Quais são as características de um INTP?"**
- **Por exemplo, "Assisti a um filme triste com um amigo próximo, mas meu amigo não parecia triste. Meu amigo poderia ser um INTP?"**
- **Por exemplo, "Fale-me sobre a compatibilidade entre o tipo INTP do meu amigo e o meu tipo ENFP."**

Ao fazer tais perguntas, **você pode obter insights sobre traços de personalidade específicos ou até mesmo especular sobre o tipo do seu amigo com base em suas reações**. Conforme indicado na imagem acima, observe que o aplicativo mbtiChat é suportado por anúncios e patrocínios, e uma mensagem informativa será exibida uma vez durante a conversa com o personagem.

![Compartilhar, Expressar Emoções e Comentar após Usar a IA do MBTI](/images/userGuide/6.png)

A conversa com a IA foi útil para você? Se sim, por favor, compartilhe o aplicativo mbtiChat com seus amigos e deixe comentários! **Fique tranquilo, o aplicativo não armazena nenhum conteúdo da conversa**.

### 2. Blog
![Página do Blog no aplicativo mbtiChat](/images/userGuide/7.png)

**O aplicativo mbtiChat não oferece apenas recursos, mas também inclui um blog**. A maioria das postagens do blog se concentra nos aspectos técnicos e habilidades usadas no processo de desenvolvimento do aplicativo mbtiChat.

## Análise Técnica e Introdução
O aplicativo mbtiChat é um aplicativo da web estático, o que significa que é um site com conteúdo fixo e recursos ou interações limitados. Embora o aplicativo da web mbtiChat não seja muito grande em escala, ele inclui funcionalidades de blog e seleção de idioma, que têm limitações para serem desenvolvidas exclusivamente como um aplicativo da web estático. Portanto, utilizei o **framework de geração de sites estáticos Jekyll**.

O Jekyll gera arquivos HTML estáticos com base em modelos e layouts especificados pelo usuário. Isso permite a reutilização efetiva de elementos repetitivos e aplicação consistente de design e layout.

O recurso principal do aplicativo mbtiChat é a função de conversa por IA. A IA é baseada na versão **gpt-3.5** da API. Para se comunicar com a API do GPT, utilizei o **Node.js** como tecnologia do lado do servidor. Para o aplicativo móvel, desenvolvi-o usando o **React Native WebView**, que permite que o aplicativo móvel seja construído usando páginas da web responsivas.
