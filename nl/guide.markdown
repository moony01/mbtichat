---
layout: post
title: Handleiding voor mbtiChat-gebruikers
image: '/images/userGuide/thumbnail-en.jpg'
---

De mbtiChat-app is een **applicatie waarmee gebruikers vrij kunnen communiceren met AI's op basis van de 16 MBTI-types**. Deze app is ontwikkeld vanuit het idee dat gebruikers wellicht nieuwsgierig zijn naar de kenmerken van andere MBTI-types, de relaties tussen verschillende types, en hoe verschillende types denken en handelen. Laten we nu eens kijken hoe je de mbtiChat-app kunt gebruiken.

## Functies en pagina's van de app
Naast de mogelijkheid om met AI te chatten, biedt onze app ook andere functies, zoals gedetailleerde handleidingen en een blogfunctie. De functionaliteiten en pagina's van de mbtiChat-app zijn onderverdeeld in twee hoofdcategorieën: **Chatfunctie met AI** en **Blog**. Naast deze twee functies zijn er ook andere gedetailleerde functies, zoals de handleidingspagina waar je je nu op bevindt, en de mogelijkheid om de taal van de app te wijzigen. Laten we meer in detail kijken naar de twee belangrijkste functies en pagina's.

### 1. Chatfunctie met AI
![Taalkeuze voor communicatie met de MBTI AI](/images/userGuide/1.png)

De chatfunctie met AI stelt je in staat om te communiceren met de door jou gekozen karakters die elk een specifiek MBTI-type hebben. Je kunt deze functie activeren door op de "Chat starten" knop te klikken naast het karakter van je keuze. De AI is gebaseerd op de **gpt-3.5** API-versie. Voordat je met de AI kunt chatten, moet je eerst de **taal selecteren** die je wilt gebruiken in de app.

![Karakterselectie en "Chat starten" knop](/images/userGuide/2.png)

Om met de AI te chatten, kun je op de "Chat starten" knop onder het gekozen karakter klikken. Elk karakter is getraind op één specifiek MBTI-type. Laten we nu eens kijken hoe we kunnen chatten met de door ons gekozen karakters. We zijn nu op de chatpagina en we kunnen zien dat het karakter zichzelf voorstelt en vraagt naar ons MBTI-type, zoals te zien is in de onderstaande afbeelding.

![Pagina waar je met de MBTI AI kunt chatten](/images/userGuide/3.png)

Je kunt vragen stellen over de kenmerken van een specifiek type, de compatibiliteit en interactie tussen jouw type en andere types, en meer. Als je je MBTI-type niet weet, kun je aan het karakter vragen: "Kun je me een website-adres geven waar ik de MBTI-test kan doen?" Het karakter zal vriendelijk antwoorden.

![Voorbeeldvragen aan de MBTI AI](/images/userGuide/4.png)
![Voorbeeldvragen aan de MBTI AI](/images/userGuide/5.png)

Je kunt verschillende soorten vragen stellen, zoals: 

- **Bijvoorbeeld: "Wat zijn de kenmerken van het INTP-type?"**
- **Bijvoorbeeld: "Ik keek met een goede vriend naar een verdrietige film, maar mijn vriend was helemaal niet verdrietig. Is mijn vriend misschien een INTP?"**
- **Bijvoorbeeld: "Kun je me vertellen over de compatibiliteit tussen mijn vriend met het INTP-type en ik met het ENFP-type?"**

Door deze vragen te stellen, kun je de kenmerken van specifieke types achterhalen, proberen te raden welk type je vriend heeft op basis van hun gedrag, en informatie krijgen over de compatibiliteit en sterke en zwakke punten tussen jouw type en het type van je vriend. Zoals aangegeven in de afbeelding, bevat de mbtiChat-app advertenties en sponsormeldingen die af en toe tijdens het chatten worden weergegeven.

![Delen, emoties uitdrukken en opmerkingen plaatsen na het gebruik van de MBTI AI](/images/userGuide/6.png)

Heeft de chat met de AI je geholpen? Deel de mbtiChat-app dan met je vrienden en laat veel reacties achter! Maak je geen zorgen, de inhoud van de app-chats wordt nooit opgeslagen.

### 2. Blog
![Pagina voor de blog van de mbtiChat-app](/images/userGuide/7.png)

Naast de functies bevat de mbtiChat-app ook een blogsectie. De artikelen op dit blog hebben voornamelijk betrekking op de ontwikkelingsvaardigheden die zijn gebruikt tijdens de ontwikkeling van de mbtiChat-app.

## Technische analyse en introductie van de app
De mbtiChat-app is een statische webapp. Een statische webapp is een website waarvan de inhoud vaststaat en waarop beperkte dynamische functionaliteit en interactie mogelijk is. Hoewel de mbtiChat-webapp niet erg groot is, bevat het functies zoals de blogfunctie en de mogelijkheid om de taal te selecteren, waardoor het ontwikkelen als een statische webapp beperkt is. Daarom heb ik gebruik gemaakt van de technologie van **Jekyll, een framework voor het genereren van statische websites**.

Jekyll genereert statische HTML-bestanden op basis van door de gebruiker opgegeven sjablonen en lay-outs. Dit maakt het mogelijk om herhaalde elementen efficiënt te hergebruiken en consistente ontwerpen en lay-outs toe te passen.

De belangrijkste functie van de mbtiChat-app is de chatfunctie met AI. De AI maakt gebruik van de **gpt-3.5** API-versie. Voor de communicatie met de GPT API heb ik gebruik gemaakt van **Node.js** als server. Voor de mobiele app heb ik de responsieve webpagina's ontwikkeld met **React Native Webview**.

