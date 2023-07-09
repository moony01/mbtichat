---
layout: post
title: Benutzerhandbuch für mbtiChat
image: '/images/userGuide/thumbnail-en.jpg'
---

**Die mbtiChat-App ist eine Anwendung, mit der Sie mit KI-Charakteren chatten können, die auf den 16 verschiedenen MBTI-Persönlichkeitstypen basieren.** Die App wurde mit dem Gedanken entwickelt, dass Sie sich für die Eigenschaften verschiedener MBTI-Typen interessieren könnten. Sie soll Ihnen helfen, die Merkmale, Beziehungen, Gedanken und Verhaltensweisen der verschiedenen Typen besser zu verstehen. Lassen Sie uns sehen, wie Sie die mbtiChat-App nutzen können.

## Funktionen der App und Übersicht über die Seiten
Neben der KI-Chat-Funktion bietet unsere App weitere nützliche Funktionen, Anleitungen und Blog-Artikel. Die wichtigsten Funktionen und Seiten in der mbtiChat-App sind der **KI-Chat** und der **Blog**. Es gibt auch weitere detaillierte Funktionen wie die Benutzerhandbuch-Seite und die Sprachauswahl, aber wir konzentrieren uns hier auf diese beiden Hauptfunktionen und Seiten und erklären die anderen Funktionen später.

### 1. KI-Chat
![Sprachauswahl für den MBTI-KI-Chat](/images/userGuide/userguide-1.jpg)

Die KI-Chat-Funktion ermöglicht es Ihnen, mit den KI-Charakteren zu interagieren, indem Sie auf die Schaltfläche [Jetzt chatten] auf der Startseite klicken. Die KI wurde mit der **gpt-3.5** Version der API entwickelt. Um ein Gespräch mit der KI zu starten, **müssen Sie zuerst die Sprache auswählen, um die Sprache der App anzupassen.**

![Charakterauswahl und Klick auf die Schaltfläche "Jetzt chatten" für den KI-Chat](/images/userGuide/userguide-2.jpg)

Auf der Startseite können Sie unter jedem Charakter auf die Schaltfläche [Jetzt chatten] klicken, um ein Gespräch mit Ihrem gewählten Charakter zu beginnen. Jeder Charakter wurde auf einen bestimmten MBTI-Typ trainiert. **Klicken Sie nun auf die Schaltfläche [Jetzt chatten] und starten Sie das Gespräch mit dem ausgewählten Charakter.** Im folgenden Bild können Sie sehen, wie sich der Charakter vorstellt und nach Ihrem MBTI-Typ fragt.

![Seite für den Chat mit der MBTI-KI](/images/userGuide/userguide-3.jpg)

Sie können der KI verschiedene Fragen stellen. Selbst wenn Sie Ihren MBTI-Typ nicht verraten, **können Sie nach den Eigenschaften eines bestimmten Typs oder nach der Interaktion zwischen verschiedenen Typen fragen.** Wenn Sie jedoch neugierig auf die Kompatibilität oder Interaktion zwischen Ihrem Typ und dem Typ der KI sind, sollten Sie Ihren MBTI-Typ mit der KI teilen. **Sie können den Charakter zum Beispiel fragen: "Können Sie mir eine Website-Adresse für einen MBTI-Test geben?" Der Charakter wird Ihnen freundlich antworten.**

![Beispielhafte Fragen für die MBTI-KI](/images/userGuide/userguide-4.jpg)
![Beispielhafte Fragen für die MBTI-KI](/images/userGuide/userguide-5.jpg)
![Beispielhafte Fragen für die MBTI-KI](/images/userGuide/userguide-6.jpg)

Sie können mehrere Fragen stellen. Nehmen wir an, Ihr Charakter ist Olivia mit einer INTP-Persönlichkeit. Sie können Fragen stellen wie:

- **Zum Beispiel: "Was sind die Eigenschaften eines INTP?"**
- **Zum Beispiel: "Ich habe mit einem engen Freund einen traurigen Film gesehen, aber mein Freund schien überhaupt nicht traurig zu sein. Könnte mein Freund ein INTP sein?"**
- **Zum Beispiel: "Erzählen Sie mir von der Kompatibilität zwischen dem INTP-Typ meines Freundes und meinem ENFP-Typ."**

Indem Sie solche Fragen stellen, **können Sie Einblicke in bestimmte Persönlichkeitseigenschaften gewinnen oder sogar über den Typ Ihres Freundes spekulieren, basierend auf seinen Reaktionen.** Wie im obigen Bild angegeben, beachten Sie bitte, dass die mbtiChat-App durch Werbung und Sponsoring unterstützt wird und während des Chats mit dem Charakter einmal eine Werbenachricht angezeigt wird.

![Teilen, Emotionen ausdrücken und Kommentieren nach der Nutzung der MBTI-KI](/images/userGuide/userguide-7.jpg)

Hat Ihnen das Gespräch mit der KI gefallen? Wenn ja, teilen Sie bitte die mbtiChat-App mit Ihren Freunden und hinterlassen Sie Kommentare! **Sie können sicher sein, dass die App keine Chat-Inhalte speichert.**

### 2. Blog
![Blog-Seite in der mbtiChat-App](/images/userGuide/userguide-8.jpg)

**Die mbtiChat-App bietet nicht nur Funktionen an, sondern verfügt auch über einen Blog.** Die meisten Blog-Artikel beschäftigen sich mit den technischen Aspekten und Fertigkeiten, die im Entwicklungsprozess der mbtiChat-App eingesetzt werden.

## Technische Analyse und Vorstellung
Die mbtiChat-App ist eine statische Webanwendung, d. h. eine Website mit festem Inhalt und begrenzten dynamischen Funktionen oder Interaktionen. Obwohl die mbtiChat-Web-App nicht allzu umfangreich ist, beinhaltet sie Funktionen wie einen Blog und eine Sprachauswahl, die ihre Entwicklung als reine statische Webanwendung erschweren. Deshalb habe ich das **Jekyll-Framework zur statischen Website-Erzeugung** verwendet.

Jekyll erzeugt statische HTML-Dateien auf der Basis von vom Benutzer definierten Vorlagen und Layouts. Dies ermöglicht eine effiziente Wiederverwendung von wiederkehrenden Elementen sowie eine konsistente Design- und Layout-Anwendung.

Das Schlüsselelement der mbtiChat-App ist die KI-Chat-Funktion. Die KI basiert auf der **gpt-3.5**-Version der API. Um mit der GPT-API zu kommunizieren, habe ich **Node.js** als serverseitige Technologie genutzt. Für die mobile App habe ich sie mit **React Native WebView** entwickelt, was es erlaubt, die mobile App mit responsiven Webseiten zu erstellen.

