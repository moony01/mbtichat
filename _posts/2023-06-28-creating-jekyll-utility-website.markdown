---
layout: post
title: 수익형 웹 유틸리티 사이트를 만들기 위해 Jekyll을 사용해야하는 이유
image: '/images/posts/creating-profitable-website-with-jekyll/thumbnail-creating-profitable-website-with-jekyll.jpg'
---
개발자를 포함한 비 개발자분들까지 수익형 웹 유틸리티 사이트를 제작하는 데 관심이 많으실 거라 생각합니다. 그럼, 이그럼 이 글의 제목처럼 왜 개발하기 위해 Jekyll을 사용해야 한다고 했을까요? 제가 [MBTI-CHAT](/) 웹앱을 개발하면서 느낀 수익형 웹 유틸리티 사이트를 만들기 위해 Jekyll을 사용해야 하는 이유에 대해 3가지로 요약하고 설명하겠습니다.

* 첫 번째: Github를 통한 무료 호스팅 및 자동배포로 **홈페이지 관리**에 용이
* 두 번째: Jekyll을 활용한 정적 웹 생성으로 **비용 절감**
* 세 번째: AdSense를 이용하여 **수익 극대화**

## Github를 통한 무료 호스팅 및 자동배포로 홈페이지 관리에 용이

![Github 무료 호스팅은 Jekyll을 지원](/images/posts/creating-profitable-website-with-jekyll/creating-profitable-website-with-jekyll-1.jpg)

Jekyll을 사용해야 하는 이유에서 Github는 무슨 연관성이 있을까요? **Github에서는 Jekyll(정적 사이트 생성기)을 지원**하기 때문입니다. 따라서 깃허브를 사용하여 Repository를 만들고 깃허브 페이지(Github Pages)를 통해 Jekyll을 이용한 사이트를 **무료로 호스팅하고 배포**할 수 있습니다. 우리는 Jekyll을 이용한 코드를 저장소에 push만해도 Github에서 알아서 **Jekyll을 통해 정적 사이트로 빌드해주고 호스팅에 배포까지 자동으로 해주기 때문에 관리하기가 매우 편합니다.**

## Jekyll을 활용한 정적 웹 생성으로 비용절감

![정적 사이트 생성기 Jekyll 설명](/images/posts/creating-profitable-website-with-jekyll/creating-profitable-website-with-jekyll-2.jpg)

Jekyll의 정의가 무엇일까요? Jekyll이란 Ruby 기반의 정적 사이트 생성기입니다. 왜 비용 절감이 가능하다는 걸까요? 정적 웹사이트에 반해 동적 웹사이트는 MVC(Model View Controller) 패턴을 기반으로 Front-end와 Server 나아가 Database로 웹페이지를 생성하고 데이터를 조회하고 업데이트할 수 있습니다. 

이렇게 데이터양이 방대한 대규모 프로젝트나 페이지가 많고 기능이 많은 웹사이트의 경우 동적 웹사이트로 개발을 진행하는 데 적합합니다. 이런 동적 웹사이트의 경우 Front-end와 Server를 패키징하여 배포해야 하고 **이런 배포 및 개발, 운영 방식은 수익화, 상업화하려면 많은 서버비용이 나올 수밖에 없습니다.**


하지만 수익형 웹 유틸리티 사이트 즉 제가 개발한 [MBTI-CHAT](/) 웹사이트의 경우 블로그 기능을 제외한 페이지가 많아야 2~3페이지입니다. 이는 따로 데이터 관리가 필요하지 않을뿐 더러 페이지가 많지 않기 때문에 광고를 위한 Adsense 승인에 필요한 블로그 기능만 **Jekyll을 사용하여 붙여 넣으면 목표한 수익형 웹 유틸리티 사이트를 성공적으로 개발**할 수 있게 됩니다. 

이런 방식으로 개발 후 Front-end만 따로 배포한다면 우리는 **무료로 웹 개발이 가능** 하게됩니다. 그러면 [MBTI-CHAT](/) 앱에서의 AI와 채팅을 하기 위해 API를 호출하고 데이터를 받아와 주는 Back-end 즉 Server는 어떻게 구현하고 배포해야 할까요?

![Lanbda를 사용하여 서버 무료배포](/images/posts/creating-profitable-website-with-jekyll/creating-profitable-website-with-jekyll-3.jpg)

바로 클라우드 Lambda를 사용하여 서버리스 함수 방식으로 서버를 구현 할 수 있습니다. 이는 MVC패턴인 동적 웹사이트의 개발 목적은 아니지만 특정 함수를 실행하는 서버 호출에는 적합한 방식입니다. 이 방식은 **무료로 서버를 구현하고 배포**할 수 있으므로 위에 설명한 **Jekyll로 Front-end를 구현**하고 **Lambda를 이용하여 Back-end를 구현**한다면 단순 수익형 웹 유틸리티 사이트를 개발하는 데는 문제가 없게 됩니다.

## AdSense를 이용하여 수익 극대화

![Github 무료 호스팅은 Jekyll을 지원](/images/posts/creating-profitable-website-with-jekyll/creating-profitable-website-with-jekyll-4.jpg)
출처: [prometteursolutions](https://prometteursolutions.com/blog/what-is-google-adsense-and-how-can-it-be-used-on-your-website/)


우리가 수익형 웹사이트를 개발하는 이유는 **"수익"** 을 창출하기 위해서입니다. 수익을 창출하기 위한 방법은 여러 가지가 있지만 Ad(광고) 플랫폼을 통하여 광고를 붙이는 방법이 그중 하나입니다. Ad(광고) 플랫폼에는 대표적으로 애드핏(카카오), 애드포스트(네이버), 애드센스(구글) 등등 여러 가지가 있습니다. 플랫폼 별로 각자 장단점이 있지만 제가 추천하는 플랫폼은 애드센스입니다. 

**애드센스를 추천하는 이유는 바로 높은 수익성** 때문인데요. 쉽게 말해 애드센스는 광고를 통해 수익이 발생했을 때 구글과 사이트 운영자가 나눠 가지는 비율이 사이트 운영자가 더 높고 다른 Ad플랫폼들과 수익을 비교한 후기들을 보면 애드센스가 수익률이 더 높다는 후기 글들이 많습니다.

이는 Jekyll과 무슨 연관성이 있을까요? 우선 애드센스는 광고를 승인받는 조건이 애드핏에 비해 매우 까다롭습니다. 이는 애드센스의 단점입니다. 예를 들어 개발자가 수익형 유틸리티 사이트의 한개의 페이지에 기능만 동작하는 계산기 사이트를 만들었다고 했을 때 **애드핏은 바로 승인을 받을 수 있고 애드포스트는 일정 기간 홈페이지를 운영해야 승인을 받을 수 있는 조건**이 있습니다. 그러면 애드센스는 어떨까요?

**애드센스는 광고 수익이 높은 대신 사이트의 콘텐츠가 풍부한지, 품질이 높은지 등을 추가로 평가**합니다. 사이트 하나짜리를 떡하니 만들고 애드센스 광고 승인 요청을 하면 바로 거절을 당합니다. 이는 곧 Jekyll을 사용하여 개발해야 하는 주된 이유가 됩니다. 풍부한 양의 콘텐츠를 제공하려면 많은 페이지를 만들어야 하기 때문입니다.

- - -

따라서 동적 홈페이지를 만들어 많은 서버비용을 지불하지 않더라도 내가 개발한 **유틸리티 웹에 정적 웹 생성기를 사용하여 콘텐츠를 풍부하게 해줄 수 있는 블로그 기능을 붙여준다면** 애드센스 승인을 받을 수 있게 됩니다.