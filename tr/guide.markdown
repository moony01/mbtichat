---
layout: post
title: mbtiChat Kullanıcı Kılavuzu
image: '/images/userGuide/thumbnail-en.jpg'
---
mbtiChat uygulaması, kullanıcıların 16 farklı MBTI türüne dayalı AI karakterlerle özgürce sohbet edebilmelerini sağlayan bir uygulamadır. Bu uygulama, kullanıcıların farklı MBTI türlerinin özellikleri, farklı türler arasındaki ilişkiler ve farklı türlerin düşünceleri ve davranışları hakkında meraklı olabileceklerini düşünerek geliştirilmiştir. Şimdi mbtiChat uygulamasını nasıl kullanabileceğinizi görelim.

## Uygulama Özellikleri ve Sayfaları Tanıtımı
AI ile konuşma özelliğinin yanı sıra, uygulamamızda daha detaylı özellikler, rehberler ve blog yazıları gibi ek özellikler bulunmaktadır. mbtiChat uygulamasındaki özellikler ve sayfalar **AI ile Sohbet** ve **Blog** olarak büyük çizgilerle ayrılabilir. Şu an bulunduğunuz Kullanıcı Rehberi sayfası ve dil seçeneği gibi ayrıntılı özelliklerin dışında diğer özellikleri de inceleyeceğiz, ancak öncelikle bu iki temel özelliği ve sayfayı detaylı bir şekilde inceleyelim.

### 1. AI ile Sohbet Özelliği
![MBTI ile Sohbet için Dil Seçimi](/images/userGuide/userguide-1.jpg)

AI ile Sohbet özelliği, ana ekrandan MBTI'ya dayalı karakterlerden birini seçip [Sohbet Et] düğmesine tıklayarak seçtiğim karakterlerle sohbet etme özelliğidir. AI, **gpt-3.5** sürümü API tabanlı olarak geliştirilmiştir. İlk olarak, AI ile konuşmak için **dili seçerek uygulamanın dilini değiştirmelisiniz**.

![MBTI ile Sohbet için Karakter Seçimi ve Sohbet Et Düğmesine Tıklama](/images/userGuide/userguide-2.jpg)

AI ile sohbet etmek için ana sayfada karakterlerin altında [Sohbet Et] düğmesine tıklayabilirsiniz. Bu karakterlerden her biri birer MBTI türünü öğrenmiş durumdadır. Şimdi [Sohbet Et] düğmesine tıklayarak seçtiğim karakterlerle sohbet etmeyi deneyelim. Sohbet sayfasına geçtik ve aşağıdaki resimde karakterin kendini tanıttığını ve sizin MBTI türünüzü sorduğunu görebilirsiniz.

![MBTI ile Sohbet için Sayfa](/images/userGuide/userguide-3.jpg)

MBTI türünüzü belirtmeniz gerekmez, ancak karakterin MBTI türünün özellikleri hakkında veya sizin türünüzle AI'nın türü arasındaki uyum ve etkileşim hakkında sorular sorabilirsiniz. Ancak, uyum veya etkileşim hakkında daha fazla bilgi almak istiyorsanız, AI'ye MBTI türünüzü bildirmeniz gerekmektedir. Karaktere "MBTI testini yapabileceğim bir site adresi verebilir misiniz?" diye sorabilirsiniz. Karakter size nazikçe cevap verecektir.

![AI'ye Sorulan Örnek Sorular](/images/userGuide/userguide-4.jpg)
![AI'ye Sorulan Örnek Sorular](/images/userGuide/userguide-5.jpg)
![AI'ye Sorulan Örnek Sorular](/images/userGuide/userguide-6.jpg)

AI'ye çeşitli sorular sorabilirsiniz. Örneğin, sohbet ettiğiniz karakterin INTP türünde bir kişilik olduğunu varsayarsak, işte bazı örnek sorular:

- **Örnek: "INTP kişilik özellikleri nelerdir?"**
- **Örnek: "Arkadaşımla üzücü bir film izledim, ancak onun hiç üzülmediği görünüyor. Arkadaşımın MBTI türü INTP olabilir mi?"**
- **Örnek: "Arkadaşımın MBTI türü INTP, benim türüm ise ENFP. Arkadaşımın türüyle benim türüm arasındaki uyum hakkında bana bilgi verebilir misiniz?"**

Bu tür soruları sorarak, **belirli türlerin özelliklerini anlayabilir**, **arkadaşınızın davranışlarına dayanarak türünü tahmin edebilir** ve **arkadaşınızın türü ile sizin türünüz arasındaki uyumu, avantajları ve dezavantajları öğrenebilirsiniz**. Ayrıca yukarıdaki resimde vurgulanan alan gibi, mbtiChat uygulaması reklamlar ve sponsorluklarla desteklendiği için karakterle yapılan sohbet sırasında bilgilendirme mesajı görüntülenecektir.

![AI ile Sohbetten Sonra Paylaşma, Duygusal İfade ve Yorum Yapma](/images/userGuide/userguide-7.jpg)

AI ile yapılan sohbet size yardımcı oldu mu? O zaman mbtiChat uygulamasını arkadaşlarınızla paylaşın ve bolca yorum bırakın! **Endişelenmeyin, bu uygulamadaki sohbet içeriği kaydedilmez.**

### 2. Blog
![mbtiChat Uygulamasındaki Blog Sayfası](/images/userGuide/userguide-8.jpg)

mbtiChat uygulaması, özelliklerin yanı sıra bir blog bölümü de içerir. Blog yazıları çoğunlukla mbtiChat uygulaması geliştirme sürecinde kullanılan geliştirme becerileri hakkında teknik blog niteliği taşır.

## Uygulama Teknik Analizi ve Tanıtımı
mbtiChat uygulaması bir statik web uygulamasıdır. Statik web uygulaması, içeriği sabit olan ve sınırlı dinamik özelliklere veya etkileşime sahip web sitesidir. mbtiChat web uygulaması, ölçek olarak büyük olmasa da blog ve dil seçeneği gibi özellikler içerdiğinden, tam anlamıyla bir statik web uygulaması olarak geliştirmek için sınırlamalar vardır. Bu nedenle, **statik web sayfaları oluşturmak için Jekyll statik web sitesi oluşturma çerçevesini** kullandım.

Jekyll, kullanıcının belirlediği şablonlar ve düzenlemelere dayalı olarak statik HTML dosyaları oluşturur. Bu sayede tekrarlayan öğelerin etkin bir şekilde yeniden kullanılmasını ve tutarlı bir tasarım ve düzen uygulanmasını sağlar.

mbtiChat uygulamasındaki temel işlev, AI ile konuşma yeteneğidir. AI, **gpt-3.5** sürümü API'sini kullanmaktadır. GPT API ile iletişim kurmak için bir sunucu olarak **Node.js** kullandım. Mobil uygulama ise duyarlı bir web tabanlı mobil uygulama oluşturmak için **React-Native-Webview** teknolojisini kullandım.
