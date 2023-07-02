---
layout: post
title: Benutzerhandbuch für mbtiChat
image: '/images/userGuide/thumbnail-en.jpg'
---

**Die mbtiChat-App ist eine Anwendung, die es Benutzern ermöglicht, frei mit KI-Charakteren zu kommunizieren, die auf den 16 verschiedenen MBTI-Persönlichkeitstypen trainiert sind.** Entwickelt mit der Idee, dass Benutzer neugierig auf die Eigenschaften unterschiedlicher MBTI-Typen sein könnten, zielt die App darauf ab, das Verständnis für Merkmale, Beziehungen, Gedanken und Verhalten über verschiedene Typen hinweg zu verbessern. Schauen wir uns an, wie man die mbtiChat-App verwendet.

## Funktionen der App und Seitenübersicht
Neben der AI-Chat-Funktionalität bietet unsere App weitere detaillierte Funktionen, Anleitungen und Blog-Beiträge. Die wichtigsten Funktionen und Seiten in der mbtiChat-App sind der **AI-Chat** und der **Blog**. Obwohl es weitere detaillierte Funktionen wie die Benutzerhandbuch-Seite und den Sprachauswahl gibt, konzentrieren wir uns auf diese beiden Hauptfunktionen und Seiten und gehen auf die anderen Funktionen ein.

### 1. AI-Chat
![Auswahl der Sprache für das MBTI-AI-Gespräch](/images/userGuide/1.png)

Die AI-Chat-Funktion ermöglicht es Ihnen, mit den KI-Charakteren zu interagieren, indem Sie auf die Schaltfläche [Jetzt chatten] auf der Hauptseite klicken. Die KI wurde mit der **gpt-3.5** Version der API entwickelt. Um ein Gespräch mit der KI zu beginnen, **wählen Sie zuerst die Sprache aus, um die Sprache der App zu ändern.**

![Auswahl des Charakters und Klicken der Schaltfläche "Jetzt chatten" für das AI-Gespräch](/images/userGuide/2.png)

Auf der Hauptseite können Sie auf die Schaltfläche [Jetzt chatten] unter jedem Charakter klicken, um ein Gespräch mit Ihrem ausgewählten Charakter zu führen. Jeder Charakter wurde auf einen spezifischen MBTI-Typ trainiert. **Klicken Sie jetzt auf die Schaltfläche [Jetzt chatten] und beginnen Sie das Gespräch mit den ausgewählten Charakteren.** Im folgenden Bild können Sie die Selbstvorstellung des Charakters und deren Aufforderung zu Ihrem MBTI-Typ sehen.

![Seite für das Chatten mit MBTI-AI](/images/userGuide/3.png)

Sie können der KI verschiedene Fragen stellen. Selbst wenn Sie Ihren MBTI-Typ nicht preisgeben, **können Sie nach den Merkmalen eines bestimmten Typs oder nach der Interaktion zwischen verschiedenen Typen fragen.** Wenn Sie jedoch neugierig auf die Kompatibilität oder Interaktion zwischen Ihrem Typ und dem Typ der KI sind, müssen Sie Ihren MBTI-Typ mit der KI teilen. **Sie können den Charakter zum Beispiel fragen: "Können Sie eine Website-Adresse für einen MBTI-Test angeben?" Der Charakter wird freundlich antworten.**

![Beispiel Fragen für MBTI-AI](/images/userGuide/4.png)
![Beispiel Fragen für MBTI-AI](/images/userGuide/5.png)

Benutzer können mehrere Fragen stellen. Nehmen wir an, Ihr Charakter ist Olivia mit einer INTP-Persönlichkeit. Sie können Fragen stellen wie:

- **Zum Beispiel: "Was sind die Merkmale eines INTP?"**
- **Zum Beispiel: "Ich habe mit einem engen Freund einen traurigen Film gesehen, aber mein Freund schien überhaupt nicht traurig zu sein. Könnte mein Freund ein INTP sein?"**
- **Zum Beispiel: "Erzählen Sie mir von der Kompatibilität zwischen dem INTP-Typ meines Freundes und meinem ENFP-Typ."**

Indem Sie solche Fragen stellen, **können Sie Erkenntnisse über bestimmte Persönlichkeitsmerkmale gewinnen oder sogar über den Typ Ihres Freundes spekulieren, basierend auf ihren Reaktionen.** Wie im obigen Bild angegeben, beachten Sie bitte, dass die mbtiChat-App durch Werbung und Sponsoring unterstützt wird und während des Chats mit dem Charakter einmal eine Informationsnachricht angezeigt wird.

![Teilen, Emotionen ausdrücken und Kommentieren nach der Verwendung von MBTI-AI](/images/userGuide/6.png)

Hat Ihnen das Gespräch mit der KI geholfen? Wenn ja, teilen Sie bitte die mbtiChat-App mit Ihren Freunden und hinterlassen Sie Kommentare! **Sie können sicher sein, dass die App keine Chat-Inhalte speichert.**

### 2. Blog
![Blog-Seite in der mbtiChat-App](/images/userGuide/7.png)

**Die mbtiChat-App bietet nicht nur Funktionen, sondern umfasst auch einen Blog.** Die meisten Blog-Beiträge konzentrieren sich auf die technischen Aspekte und Fähigkeiten, die im Entwicklungsprozess der mbtiChat-App verwendet werden.

## Technische Analyse und Einführung
Die mbtiChat-App ist eine statische Webanwendung, d. h. eine Website mit festem Inhalt und begrenzten dynamischen Funktionen oder Interaktionen. Obwohl die mbtiChat-Web-App nicht allzu groß ist, umfasst sie Funktionen wie einen Blog und eine Sprachauswahl, die ihre Entwicklung als reine statische Webanwendung einschränken. Aus diesem Grund habe ich das **Jekyll-Framework zur statischen Website-Generierung** verwendet.

Jekyll generiert statische HTML-Dateien auf der Grundlage von vom Benutzer festgelegten Vorlagen und Layouts. Dies ermöglicht eine effektive Wiederverwendung wiederkehrender Elemente sowie eine konsistente Design- und Layoutanwendung.

Das Schlüsselelement der mbtiChat-App ist die KI-Chat-Funktion. Die KI basiert auf der **gpt-3.5**-Version der API. Zur Kommunikation mit der GPT-API habe ich **Node.js** als serverseitige Technologie genutzt. Für die mobile App habe ich sie mit **React Native WebView** entwickelt, was es ermöglicht, die mobile App mit responsiven Webseiten zu erstellen.
