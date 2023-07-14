---
layout: post
title: Benutzerhandbuch für mbtiChat
image: '/images/userGuide/thumbnail-en.jpg'
---
Die mbtiChat-App ist eine Anwendung, mit der Benutzer frei mit KI-Charakteren für die 16 MBTI-Typen chatten können. Die App wurde mit der Idee entwickelt, dass Benutzer sich für die Merkmale verschiedener MBTI-Typen, Beziehungen zwischen verschiedenen Typen und das Denken und Verhalten verschiedener Typen interessieren könnten. Nun wollen wir herausfinden, wie man die mbtiChat-App verwendet.

## App-Funktionen und Seitenübersicht
Neben der Funktion des Chattens mit KI gibt es in unserer App weitere detaillierte Funktionen wie Anleitungen und Blogbeiträge. Die Hauptfunktionen und Seiten in der mbtiChat-App sind **AI-Chats** und **Blog**. Es gibt auch andere detaillierte Funktionen wie die Benutzerhandbuchseite, auf der Sie sich gerade befinden, und die Sprachauswahl. Wir werden uns jedoch auf die beiden Hauptfunktionen und -seiten konzentrieren und weitere Informationen zu anderen Funktionen geben.

### 1. AI-Chats
![Sprachauswahl für das Chatten mit MBTI KI](/images/userGuide/userguide-1.jpg)

Die AI-Chat-Funktion ermöglicht es Ihnen, mit den ausgewählten Charakteren durch Klicken auf die [Chat]-Schaltfläche für jeden MBTI-Typ-Charakter von der Hauptseite aus zu interagieren. Die KI basiert auf der **gpt-3.5**-Version der API. Zuerst müssen Sie eine Sprache auswählen, um die Sprache der App zu ändern, damit Sie mit der KI chatten können.

![Charakterauswahl und Klicken der Chat-Schaltfläche für das Chatten mit MBTI KI](/images/userGuide/userguide-2.jpg)

Um mit der KI zu chatten, können Sie auf der Hauptseite auf die [Chat]-Schaltfläche am unteren Rand der Charaktere klicken. Jeder Charakter wurde mit einem MBTI-Typ trainiert. Nun lassen Sie uns **auf die [Chat]-Schaltfläche klicken und mit den ausgewählten Charakteren chatten**. Wir haben uns zur Chat-Seite bewegt, und auf dem untenstehenden Bild können Sie die Selbstvorstellung des Charakters und die Anfrage nach Ihrem MBTI-Typ sehen.

![Seite zum Chatten mit MBTI KI](/images/userGuide/userguide-3.jpg)

Selbst wenn Sie dem Charakter Ihren MBTI-Typ nicht mitteilen, können Sie Fragen zu den Merkmalen des MBTI-Typs des Charakters oder zu anderen Themen stellen. Wenn Sie jedoch an der **Kompatibilität** oder **Interaktion** zwischen Ihrem Typ und dem KI-Typ interessiert sind, müssen Sie der KI Ihren MBTI-Typ mitteilen. Wenn Sie Ihren MBTI-Typ nicht kennen, können Sie den Charakter fragen: "Können Sie mir die Adresse der Website geben, auf der ich einen MBTI-Test machen kann?" Der Charakter wird freundlich antworten.

![Beispiel-Fragen an MBTI KI](/images/userGuide/userguide-4.jpg)
![Beispiel-Fragen an MBTI KI](/images/userGuide/userguide-5.jpg)
![Beispiel-Fragen an MBTI KI](/images/userGuide/userguide-6.jpg)

Sie können der KI verschiedene Fragen stellen. Angenommen, der Charakter, mit dem Sie chatten, hat den Persönlichkeitstyp INTP, können Sie Fragen stellen wie:

- **Beispiel) "Was sind die Merkmale der Persönlichkeit eines INTP?"**
- **Beispiel) "Ich habe einen traurigen Film mit einem engen Freund gesehen, aber mein Freund war überhaupt nicht traurig. Könnte mein Freund ein INTP sein?"**
- **Beispiel) "Erzählen Sie mir etwas über die Kompatibilität zwischen dem INTP-Typ meines Freundes und meinem ENFP-Typ."**

Indem Sie diese Art von Fragen stellen, können Sie die **Persönlichkeit eines bestimmten Typs verstehen**, den Typ Ihres Freundes ableiten und Informationen über die **Kompatibilität und Stärken/Schwächen zwischen dem Typ Ihres Freundes und Ihrem eigenen** erfragen. Beachten Sie außerdem, dass die mbtiChat-App über Werbung und Sponsoring betrieben wird, daher wird während des Chats mit dem Charakter einmalig eine Anleitungsnachricht angezeigt.

![Teilen, Emoticon und Kommentarfunktionen nach der Verwendung von MBTI KI](/images/userGuide/userguide-7.jpg)

War das Gespräch mit der KI hilfreich? Wenn ja, teilen Sie bitte die mbtiChat-App mit Ihren Freunden und hinterlassen Sie viele Kommentare! **Bitte seien Sie versichert, dass der Chat-Inhalt in der App niemals gespeichert wird.**

### 2. Blog
![Blog-Seite in der mbtiChat-App](/images/userGuide/userguide-8.jpg)

Neben den Funktionen umfasst die mbtiChat-App auch einen Blog. Die Blogbeiträge konzentrieren sich hauptsächlich auf die Entwicklungsfähigkeiten, die während des Entwicklungsprozesses der mbtiChat-App verwendet wurden.

## App-technische Analyse und Einführung
Die mbtiChat-App ist eine statische Web-App, das heißt, es handelt sich um eine Website mit festem Inhalt und begrenzten dynamischen Funktionen oder Interaktionen. Obwohl der Umfang der mbtiChat-Web-App nicht groß ist, enthält sie Funktionen wie einen Blog und eine Sprachauswahl, die bei der Entwicklung als statische Web-App ihre Grenzen haben. Daher habe ich die Technologie des **Jekyll-Frameworks zur Erzeugung statischer Websites** verwendet.

Jekyll generiert statische HTML-Dateien auf Basis von benutzerdefinierten Vorlagen und Layouts. Dadurch können wiederkehrende Elemente effizient wiederverwendet und einheitliches Design und Layout angewendet werden.

Das Hauptmerkmal der mbtiChat-App ist die AI-Chat-Funktionalität. Die KI basiert auf der **gpt-3.5**-Version der API. Zur Kommunikation mit der GPT-API habe ich **NODE.JS** als Server verwendet. Für die mobile App habe ich **React-Native-Webview** verwendet, um eine mobile App basierend auf einer responsiven Web-Seite zu entwickeln.
