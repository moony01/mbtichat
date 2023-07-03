---
layout: post
title: Przewodnik użytkownika aplikacji mbtiChat
image: '/images/userGuide/thumbnail-en.jpg'
---

**Aplikacja mbtiChat to narzędzie, które umożliwia użytkownikom swobodną rozmowę z postaciami AI, które zostały przeszkolone na podstawie 16 różnych typów osobowości MBTI.** Stworzona z myślą o tym, że użytkownicy mogą być ciekawi cech różnych typów MBTI, aplikacja ma na celu zwiększenie zrozumienia cech, relacji, myśli i zachowań w różnych typach. Zapraszamy do odkrycia, jak korzystać z aplikacji mbtiChat.

## Funkcje aplikacji i wprowadzenie do stron
Oprócz funkcji czatu z AI, nasza aplikacja oferuje bardziej szczegółowe funkcje, przewodniki i wpisy na blogu. Główne funkcje i strony w aplikacji mbtiChat to **AI Chatting** i **Blog**. Chociaż istnieją również inne szczegółowe funkcje, takie jak strona z przewodnikiem użytkownika i wybór języka, skoncentrujemy się na tych dwóch głównych funkcjach i stronach i przyjrzymy się innym funkcjom.

### 1. AI Chatting
![Wybór języka dla rozmowy AI MBTI](/images/userGuide/userguide-1.jpg)

Funkcja AI Chatting pozwala na interakcję z postaciami AI poprzez kliknięcie przycisku [Rozpocznij rozmowę] na stronie głównej. AI zostało stworzone przy użyciu wersji API **gpt-3.5**. Aby rozpocząć rozmowę z AI, **najpierw wybierz język, aby zmienić język aplikacji.**

![Wybór postaci i kliknięcie przycisku Rozpocznij rozmowę dla rozmowy z AI](/images/userGuide/userguide-2.jpg)

Na stronie głównej można kliknąć przycisk [Rozpocznij rozmowę] pod każdą postacią, aby rozpocząć rozmowę z wybraną postacią. Każda postać została przeszkolona na konkretny typ MBTI. **Teraz kliknij przycisk [Rozpocznij rozmowę] i rozpocznij rozmowę z wybranymi postaciami.** Na poniższym obrazku możesz zobaczyć samoopis postaci i ich prośbę o podanie Twojego typu MBTI.

![Strona czatu z AI MBTI](/images/userGuide/userguide-3.jpg)

Możesz zadawać różne pytania AI. Nawet jeśli nie ujawnisz swojego typu MBTI, **możesz zapytać o cechy konkretnego typu lub jak różne typy się oddziałują.** Jednak jeśli jesteś ciekawy zgodności lub interakcji między Twoim typem a typem AI, musisz podzielić się swoim typem MBTI z AI. **Możesz zapytać postać na przykład: "Czy mógłbyś podać adres strony internetowej z testem MBTI?" Postać uprzejmie odpowie.**

![Przykładowe pytania dla AI MBTI](/images/userGuide/userguide-4.jpg)
![Przykładowe pytania dla AI MBTI](/images/userGuide/userguide-5.jpg)
![Przykładowe pytania dla AI MBTI](/images/userGuide/userguide-6.jpg)

Użytkownicy mogą zadawać wiele pytań. Przyjmując, że Twoją postacią jest Harper o osobowości ESFP, możesz zadać pytania takie jak:

- **Np. "Jakie są cechy ESFP?"**
- **Np. "Obejrzałem smutny film z bliskim przyjacielem, ale mój przyjaciel w ogóle nie wydawał się smutny. Czy mój przyjaciel może być ESFP?"**
- **Np. "Powiedz mi o zgodności między typem mojego przyjaciela - ESFP, a moim typem - ENFJ."**

Zadając takie pytania, **możesz uzyskać wgląd w konkretne cechy osobowościowe lub nawet spekulować na temat typu Twojego przyjaciela na podstawie jego reakcji.** Jak wskazano na powyższym obrazku, proszę zauważyć, że aplikacja mbtiChat jest wspierana przez reklamy i sponsorowane, a jedna wiadomość informacyjna zostanie wyświetlona raz podczas rozmowy z postacią.

![Udostępnianie, wyrażanie emocji i komentowanie po skorzystaniu z AI MBTI](/images/userGuide/userguide-7.jpg)

Czy rozmowa z AI pomogła Ci? Jeśli tak, podziel się aplikacją mbtiChat ze swoimi przyjaciółmi i zostaw komentarz! **Nie martw się, aplikacja nie przechowuje żadnych treści rozmów.**

### 2. Blog
![Strona bloga w aplikacji mbtiChat](/images/userGuide/userguide-8.jpg)

**Aplikacja mbtiChat oferuje nie tylko funkcje, ale także zawiera bloga.** Większość wpisów na blogu koncentruje się na aspektach technicznych i umiejętnościach wykorzystanych podczas procesu tworzenia aplikacji mbtiChat.

## Analiza techniczna i wprowadzenie
Aplikacja mbtiChat jest statyczną aplikacją internetową, co oznacza, że jest to strona internetowa z ustaloną treścią i ograniczonymi funkcjami dynamicznymi lub interakcjami. Choć aplikacja mbtiChat nie jest zbyt duża, zawiera funkcję bloga i wybór języka, które mają ograniczenia w tworzeniu jej wyłącznie jako statycznej aplikacji internetowej. Dlatego też użyłem **Jekylla, ramki generowania statycznych stron internetowych**.

Jekyll generuje statyczne pliki HTML na podstawie szablonów i układów określonych przez użytkownika. Pozwala to na efektywne ponowne wykorzystanie powtarzających się elementów oraz konsekwentne zastosowanie projektu i układu.

Główną funkcją aplikacji mbtiChat jest funkcja czatu z AI. AI opiera się na wersji API **gpt-3.5**. Aby komunikować się z interfejsem API GPT, użyłem technologii serwerowej **Node.js**. Aplikację mobilną opracowałem przy użyciu **React Native WebView**, co pozwala na budowanie aplikacji mobilnej przy użyciu responsywnych stron internetowych.
