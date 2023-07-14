---
layout: post
title: Handleiding voor mbtiChat-gebruikers
image: '/images/userGuide/thumbnail-en.jpg'
---
De mbtiChat-app is een applicatie waarmee gebruikers vrij kunnen converseren met AI-karakters op basis van de 16 MBTI-types. Deze app is ontwikkeld vanuit de gedachte dat gebruikers nieuwsgierig zouden kunnen zijn naar de kenmerken van andere MBTI-types, de relaties tussen verschillende types, en de gedachten en gedragingen van verschillende types. Laten we nu eens kijken hoe je de mbtiChat-app kunt gebruiken.

## App-functies en pagina-introductie
Naast de mogelijkheid om te chatten met AI, heeft onze app ook meer gedetailleerde functies zoals handleidingen en blogposts. De belangrijkste functies en pagina's van de mbtiChat-app zijn **Chatten met AI** en **Blog**. Naast de huidige gebruikershandleiding en taalkeuzefunctie, zijn er nog andere gedetailleerde functies, maar we zullen ons richten op de twee belangrijkste functies en pagina's en ze in meer detail bespreken.

### 1. Chatten met AI
![Taalkeuze voor Chatten met MBTI AI](/images/userGuide/userguide-1.jpg)

De functie Chatten met AI stelt je in staat om te chatten met de door jou gekozen AI-karakters door op de knop [Chatten] te klikken vanuit het hoofdscherm. Deze AI is ontwikkeld op basis van de **gpt-3.5** API-versie. Om het chatten met AI te starten, moet je eerst de **taal selecteren om de taal van de app te wijzigen**.

![Karakterselectie en klikken op de Chatten-knop voor Chatten met MBTI AI](/images/userGuide/userguide-2.jpg)

Om met AI te chatten, kun je op de [Chatten] knop onder de karakters op het hoofdscherm klikken. Elk karakter is getraind met één MBTI-type. Laten we nu beginnen met chatten met het gekozen karakter. We zijn overgestapt naar de chatpagina en je kunt in de onderstaande afbeelding zien dat het karakter zichzelf voorstelt en vraagt naar je MBTI-type.

![Pagina om te chatten met MBTI AI](/images/userGuide/userguide-3.jpg)

Hoewel je je MBTI-type niet hoeft op te geven, kun je het karakter vragen stellen over de kenmerken van zijn/haar MBTI-type of vragen stellen over de compatibiliteit en interactie tussen jouw type en het AI-type. Maar als je meer wilt weten over de compatibiliteit of interactie tussen jouw type en het karakters-type, moet je het AI-karakter informeren over jouw MBTI-type. Je kunt het karakter vragen: "Kun je me het adres geven van een website waar ik een MBTI-test kan doen?" Het karakter zal vriendelijk antwoorden.

![Voorbeeldvragen aan MBTI AI](/images/userGuide/userguide-4.jpg)
![Voorbeeldvragen aan MBTI AI](/images/userGuide/userguide-5.jpg)
![Voorbeeldvragen aan MBTI AI](/images/userGuide/userguide-6.jpg)

Je kunt verschillende vragen stellen aan de AI. Bijvoorbeeld, als je chatkarakter het INTP-type persoonlijkheid heeft, zijn hier een paar voorbeeldvragen:

- **Voorbeeld: "Wat zijn de kenmerken van het INTP-type?"**
- **Voorbeeld: "Ik heb een emotionele film gekeken met een goede vriend, maar mijn vriend leek helemaal niet verdrietig. Is het mogelijk dat mijn vriend het MBTI-type INTP heeft?"**
- **Voorbeeld: "Kun je me vertellen over de compatibiliteit tussen het MBTI-type van mijn vriend, INTP, en mijn type, ENFP?"**

Door deze vragen te stellen, kun je **kenmerken van specifieke types begrijpen**, **het type van je vriend afleiden op basis van zijn/haar gedrag**, en **informatie krijgen over de compatibiliteit en voor- en nadelen tussen jouw type en het type van je vriend**. Bovendien, zoals aangegeven in het gemarkeerde gedeelte van de bovenstaande afbeelding, wordt de mbtiChat-app ondersteund door advertenties en sponsoring, dus er zal één keer een informatief bericht worden weergegeven tijdens het chatten met het karakter.

![Delen, emoties uiten en reageren na het gebruik van MBTI AI](/images/userGuide/userguide-7.jpg)

Heeft het chatten met AI je geholpen? Deel dan de mbtiChat-app met je vrienden en laat veel reacties achter! **Maak je geen zorgen, de inhoud van de chat in deze app wordt niet opgeslagen.**

### 2. Blog
![Blogpagina in de mbtiChat-app](/images/userGuide/userguide-8.jpg)

Naast de functies bevat de mbtiChat-app ook een blogsectie. De blogartikelen hebben voornamelijk betrekking op de ontwikkelingsvaardigheden die zijn gebruikt tijdens het ontwikkelingsproces van de mbtiChat-app.

## Technische analyse en introductie van de app
De mbtiChat-app is een statische webapplicatie. Een statische webapplicatie verwijst naar een website met vaste inhoud en beperkte dynamische functionaliteit of interactie. Hoewel de mbtiChat-webapplicatie niet groot van omvang is, bevat deze functionaliteiten zoals een blog en taalkeuzemogelijkheden die verder gaan dan de mogelijkheden van een statische webapplicatie. Daarom heb ik gebruik gemaakt van het **Jekyll framework voor het genereren van statische websites**.

Jekyll genereert statische HTML-bestanden op basis van door de gebruiker gespecificeerde sjablonen en lay-outs. Dit maakt effectief hergebruik van herhalende elementen en het toepassen van consistente ontwerpen en lay-outs mogelijk.

De belangrijkste functie van de mbtiChat-app is de functionaliteit om te chatten met AI. De AI is gebaseerd op de **gpt-3.5** API. Voor de communicatie met de GPT API heb ik gebruik gemaakt van **Node.js** als server. De mobiele app is ontwikkeld met behulp van **React-Native-Webview** om een responsieve mobiele app op basis van webtechnologie te creëren.
