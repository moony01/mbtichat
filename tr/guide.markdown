---
layout: post
title: mbtiChat Kullanıcı Kılavuzu
image: '/images/userGuide/thumbnail-en.jpg'
---

**mbtiChat** uygulaması, kullanıcıların 16 farklı MBTI kişilik tiplerine eğitilmiş yapay zeka karakterleriyle serbestçe konuşmasına olanak tanıyan bir uygulamadır. Farklı MBTI tiplerinin özellikleri hakkında meraklı olabileceğiniz düşüncesiyle geliştirilen uygulama, çeşitli tipler arasındaki özellikler, ilişkiler, düşünceler ve davranışlar hakkındaki anlayışı artırmayı amaçlar. mbtiChat uygulamasını nasıl kullanacağınızı keşfetmek için okumaya devam edin.

## Uygulama Özellikleri ve Sayfa Tanıtımı
AI sohbet işlevselliğine ek olarak, uygulamamız daha detaylı özellikler, kılavuzlar ve blog yazıları sunmaktadır. mbtiChat uygulamasındaki ana özellikler ve sayfalar, **AI Sohbet** ve **Blog**'dur. Kullanım kılavuzu sayfası ve dil seçici gibi diğer detaylı işlevler olsa da, burada iki ana özellik ve sayfaya odaklanarak diğer işlevleri de inceleyeceğiz.

### 1. AI Sohbet
![MBTI AI Konuşması için Dil Seçimi](/images/userGuide/1.png)

AI Sohbet özelliği, ana sayfadaki [Şimdi Sohbet Et] düğmesine tıklayarak AI karakterleriyle etkileşimde bulunmanıza olanak tanır. AI, **gpt-3.5** sürüm API kullanılarak geliştirilmiştir. AI ile sohbet başlatmak için **ilk olarak uygulamanın dilini değiştirmek için dil seçeneğini seçersiniz.**

![Karakter Seçimi ve AI Sohbeti için Şimdi Sohbet Et Düğmesine Tıklama](/images/userGuide/2.png)

Ana sayfada, seçtiğiniz karakterin altındaki [Şimdi Sohbet Et] düğmesine tıklayarak seçtiğiniz karakterle bir sohbete başlayabilirsiniz. Her karakter belirli bir MBTI tipine eğitilmiştir. **Şimdi [Sohbet Et] düğmesine tıklayalım ve seçilen karakterlerle sohbet etmeye başlayalım.** Aşağıdaki resimde karakterin kendini tanıtması ve sizden MBTI tipinizi istemesi görülebilir.

![MBTI AI ile Sohbet için Sayfa](/images/userGuide/3.png)

AI'ye çeşitli sorular sorabilirsiniz. MBTI tipinizi açıklamazsanız bile, **belirli bir tipin özellikleri hakkında veya farklı tiplerin nasıl etkileşime girdiği hakkında soru sorabilirsiniz.** Ancak, kendi tipinizle AI'nın tipi arasındaki uyumluluk veya etkileşim hakkında meraklıysanız, MBTI tipinizi AI ile paylaşmanız gerekmektedir. **Karaktere "Bir MBTI testi için bir web sitesi adresi sağlayabilir misiniz?" gibi bir soru sorabilirsiniz. Karakter nazikçe cevap verecektir.**

![MBTI AI için Örnek Sorular](/images/userGuide/4.png)
![MBTI AI için Örnek Sorular](/images/userGuide/5.png)

Kullanıcılar birden fazla soru sorabilir. Varsayalım ki karakteriniz INTP kişilik tipine sahip olan Olivia ise, şu gibi sorular sorabilirsiniz:

- **Örn., "INTP'nin özellikleri nelerdir?"**
- **Örn., "Yakın bir arkadaşımla üzücü bir film izledim, ancak arkadaşım hiç üzgün görünmedi. Arkadaşım INTP olabilir mi?"**
- **Örn., "Arkadaşımın INTP tipiyle benim ENFP tipim arasındaki uyumluluk hakkında bana bilgi verir misiniz?"**

Bu tür soruları sorarak, **belirli kişilik özellikleri hakkında bilgi edinebilir veya tepkilerine dayanarak arkadaşınızın tipini tahmin edebilirsiniz.** Yukarıdaki resimde belirtildiği gibi, lütfen unutmayın ki mbtiChat uygulaması reklamlar ve sponsorluklar tarafından desteklenmektedir ve sohbet sırasında bir bilgi mesajı bir kez görüntülenecektir.

![MBTI AI Kullanımından Sonra Paylaşma, Duyguları İfade Etme ve Yorum Yapma](/images/userGuide/6.png)

AI ile yapılan sohbet size yardımcı oldu mu? Öyleyse lütfen mbtiChat uygulamasını arkadaşlarınızla paylaşın ve yorum bırakın! **Uygulamanın sohbet içeriğini saklamadığınızdan emin olabilirsiniz.**

### 2. Blog
![mbtiChat Uygulamasındaki Blog Sayfası](/images/userGuide/7.png)

**mbtiChat uygulaması, sadece özellikler sunmakla kalmaz, aynı zamanda bir blogu da içerir.** Blog yazılarının çoğu, mbtiChat uygulamasının geliştirme sürecinde kullanılan teknik yönler ve beceriler üzerinde odaklanmaktadır.

## Teknik Analiz ve Tanıtım
mbtiChat uygulaması, sabit içeriğe ve sınırlı dinamik özelliklere veya etkileşimlere sahip bir statik web uygulamasıdır. mbtiChat web uygulaması çok büyük ölçekte olmasa da, blog işlevselliği ve dil seçimi gibi sınırlamaları olan bir statik web uygulaması olarak geliştirmek için **Jekyll statik web sitesi oluşturma çerçevesini** kullandım.

Jekyll, kullanıcı tarafından belirtilen şablonlar ve düzenlere dayanarak statik HTML dosyaları oluşturur. Bu, tekrarlayan unsurların etkin bir şekilde yeniden kullanılmasını ve tutarlı tasarım ve düzen uygulamasını sağlar.

mbtiChat uygulamasının temel özelliği, AI sohbet işleviydi. AI, **gpt-3.5** sürümü API'ye dayanmaktadır. GPT API ile iletişim kurmak için sunucu tarafı teknolojisi olarak **Node.js**'i kullandım. Mobil uygulama için ise, duyarlı web sayfaları kullanarak mobil uygulamanın oluşturulmasını sağlayan **React Native WebView** kullanarak geliştirdim.
