---
layout: post
title: Przewodnik użytkownika aplikacji mbtiChat
image: '/images/userGuide/thumbnail-en.jpg'
---
Aplikacja mbtiChat to aplikacja umożliwiająca użytkownikom swobodną rozmowę z postaciami opartymi na 16 typach MBTI. Aplikacja została stworzona z myślą o ciekawości użytkowników na temat cech różnych typów MBTI, relacji między typami oraz myśli i zachowań różnych typów. Przejdźmy teraz do poznania sposobu korzystania z aplikacji mbtiChat.

## Przedstawienie funkcji i stron aplikacji
Oprócz możliwości rozmowy z SI, nasza aplikacja oferuje także bardziej szczegółowe funkcje, takie jak przewodniki i wpisy na blogu. Główne funkcje i strony aplikacji mbtiChat to **Rozmowa z SI** i **Blog**. Oprócz aktualnie przeglądanej strony przewodnika użytkownika i funkcji wyboru języka, istnieją także inne szczegółowe funkcje, ale skoncentrujemy się na tych dwóch głównych funkcjach i stronach i omówimy je dokładniej.

### 1. Rozmowa z SI
![Wybór języka dla rozmowy z SI w MBTI](/images/userGuide/userguide-1.jpg)

Funkcja Rozmowy z SI umożliwia rozmowę z wybranymi postaciami SI poprzez kliknięcie przycisku [Rozmawiaj] na ekranie głównym. Ta SI została stworzona w oparciu o wersję API **gpt-3.5**. Aby rozpocząć rozmowę z SI, należy najpierw **wybrać język, aby zmienić język aplikacji**.

![Wybór postaci i kliknięcie przycisku Rozmawiaj dla rozmowy z SI w MBTI](/images/userGuide/userguide-2.jpg)

Aby porozmawiać z SI, można kliknąć przycisk [Rozmawiaj] pod postaciami na stronie głównej. Każda postać została przeszkolona na jeden typ MBTI. Teraz porozmawiajmy z wybraną postacią. Przeszliśmy do strony rozmowy i na poniższym obrazku można zobaczyć, że postać przedstawia się i pyta o Twój typ MBTI.

![Strona umożliwiająca rozmowę z SI w MBTI](/images/userGuide/userguide-3.jpg)

Chociaż nie musisz podawać swojego typu MBTI, możesz zadać postaci pytania dotyczące cech jej typu MBTI lub zapytać o zgodność i interakcję między Twoim typem a typem SI. Jeśli chcesz uzyskać więcej informacji na temat zgodności lub interakcji między Twoim typem a typem postaci, musisz poinformować postać SI o swoim typie MBTI. Możesz zapytać postać: "Czy możesz podać mi adres strony internetowej, na której mogę wykonać test MBTI?" Postać uprzejmie odpowie.

![Przykładowe pytania do SI na temat MBTI](/images/userGuide/userguide-4.jpg)
![Przykładowe pytania do SI na temat MBTI](/images/userGuide/userguide-5.jpg)
![Przykładowe pytania do SI na temat MBTI](/images/userGuide/userguide-6.jpg)

Możesz zadać różne pytania SI. Na przykład, jeśli postać, z którą rozmawiasz, ma osobowość typu INTP, oto kilka przykładowych pytań:

- **Przykład: "Jakie są cechy osobowości typu INTP?"**
- **Przykład: "Oglądałem smutny film ze znajomym, ale on zupełnie nie wydawał się smutny. Czy to możliwe, że mój znajomy ma typ MBTI INTP?"**
- **Przykład: "Czy możesz mi powiedzieć o zgodności między typem mojego znajomego, INTP, a moim typem, ENFP?"**

Poprzez zadawanie takich pytań możesz **zrozumieć cechy konkretnych typów**, **odgadnąć typ swojego znajomego na podstawie jego zachowania** oraz **uzyskać informacje na temat zgodności i zalet oraz wad między Twoim typem a typem Twojego znajomego**. Ponadto, jak wskazano na zaznaczonym obszarze na powyższym obrazku, aplikacja mbtiChat jest wspierana przez reklamy i sponsorowanie, dlatego podczas rozmowy z postacią zostanie wyświetlona jedna informacyjna wiadomość.

![Udostępnianie, wyrażanie emocji i komentowanie po korzystaniu z SI w MBTI](/images/userGuide/userguide-7.jpg)

Czy rozmowa z SI była dla Ciebie pomocna? Podziel się aplikacją mbtiChat ze znajomymi i zostaw wiele komentarzy! **Nie martw się, treść rozmowy w tej aplikacji nie jest przechowywana.**

### 2. Blog
![Strona bloga w aplikacji mbtiChat](/images/userGuide/userguide-8.jpg)

Oprócz funkcji, aplikacja mbtiChat zawiera również sekcję bloga. Artykuły na blogu dotyczą głównie umiejętności rozwojowych wykorzystywanych podczas tworzenia aplikacji mbtiChat.

## Analiza techniczna i przedstawienie aplikacji
Aplikacja mbtiChat jest statyczną aplikacją internetową. Statyczna aplikacja internetowa odnosi się do witryny z ustaloną zawartością i ograniczonymi funkcjami dynamicznymi lub interakcjami. Chociaż aplikacja mbtiChat nie jest duża pod względem skali, zawiera funkcje takie jak blog i możliwość wyboru języka, które wychodzą poza możliwości statycznej aplikacji internetowej. Dlatego też użyłem technologii **Jekyll jako frameworku generującego statyczne strony internetowe**.

Jekyll generuje statyczne pliki HTML na podstawie szablonów i układów określonych przez użytkownika. Pozwala to na efektywne ponowne wykorzystanie powtarzających się elementów oraz stosowanie spójnego projektu i układu.

Główną funkcją aplikacji mbtiChat jest możliwość rozmowy z SI. SI oparte jest na wersji API **gpt-3.5**. Do komunikacji z interfejsem API GPT użyłem **Node.js** jako serwera. Aplikacja mobilna została stworzona przy użyciu technologii **React-Native-Webview** w celu stworzenia responsywnej aplikacji mobilnej opartej na technologii webowej.
