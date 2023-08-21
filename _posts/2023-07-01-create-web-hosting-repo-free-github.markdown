---
layout: post
title: Github로 무료 웹호스팅해서 사이트 무한으로 만들고 쉽게 관리하기
# image: '/images/posts/thumbnail-create-web-hosting-repo-free-github.jpg'
---
Github에는 무료 웹호스팅 기능이 있습니다. 여러 플랫폼에서도 웹 호스팅을 무료로 제공하고 있지만 Github에서 즉시 웹호스팅을 한다는 것은 많은 장점이 있습니다. 무료라는 점뿐만 아니라 **쉬운 관리, 협업 가능, 배포 자동화, 커스텀 도메인이 가능하다는 점이 장점**입니다. 하지만 우리가 Github 웹호스팅에 대해 알아야 할 점이 있습니다. 바로 **무료 웹호스팅 기능은 해당 저장소를 공개**로 해야 한다는 점입니다. 이미 많은 개발자들이 사이드 프로젝트나 개인 블로그를 운영하는데 이 호스팅 기능을 사용하고 있습니다.

**- 이 포스팅에는 Git, 코드 편집기가 설치되어 있다는 가정하에 진행합니다.**

1. Github 저장소 생성하기
2. 저장소 호스팅하기

## Github 저장소 생성하기
![Github 무료 호스팅을 위한 저장소 생성](/images/posts/create-web-hosting-repo-free-github/create-web-hosting-repo-free-github-1.jpg)

**[Create repository] 버튼**을 클릭하여 웹 호스팅을 할 저장소를 만들겠습니다.

![Github 무료 호스팅을 위한 저장소 이름 규칙](/images/posts/create-web-hosting-repo-free-github/create-web-hosting-repo-free-github-2.jpg)

이때 웹호스팅을 할 **저장소 이름에는 규칙**이 있습니다. **예) username.github.io** 이런 식으로 username에 자신의 깃허브 이름을 붙여서 저장소를 생성합니다. 저같은 경우는 "moony1201.github.io" 가 되겠네요. 다음은 옵션들에 대해 간략하게 알아볼까요?

### Description
저장소에 대한 설명입니다. 입력해도 되고 안 해도 됩니다.

### Public or Private
저장소를 공개할지 안 할지 선택하는 옵션입니다. 무료 웹호스팅은 공개로 해야 무료로 호스팅을 할 수 있습니다.

### Add a README file
보통 저장소, 즉 프로젝트의 상세 설명이나 사용법, 업데이트 내용 등을 작성합니다.

### Add .gitignore
우리의 저장소를 로컬에서 Clone 하여 작업할 때 Github 저장소에 Commit을 제외할 폴더명이나 파일명을 적어서 Commit을 제외시킬 수 있습니다.

### Choose a license
우리의 프로젝트에 라이선스를 적용할 수 있습니다. MIT 라이선스, 아파치 라이선스 등을 선택하여 내가 개발한 소프트웨어에 대한 사용 조건과 권한을 정의하는 법적 문서입니다.

- - -

우리는 웹호스팅하는 게 주목적이니 **Add a README file 체크** 후 **Public으로 설정**하고 저장소를 생성하겠습니다.

![Github 무료 호스팅을 위한 저장소 URL 복사](/images/posts/create-web-hosting-repo-free-github/create-web-hosting-repo-free-github-3.jpg)

저장소 생성이 완료되었습니다. 그럼 이제 생성한 저장소를 우리의 로컬에 가져와서 코딩을 해야겠죠? 생성한 저장소에 들어가면 **HTTPS 통신방식의 URL을 복사해 주는 버튼**이 있습니다. 버튼을 클릭하여 복사하거나 URL을 그대로 복사합니다.

![Github 무료 호스팅을 위한 저장소 로컬 복사](/images/posts/create-web-hosting-repo-free-github/create-web-hosting-repo-free-github-4.jpg)

저장소를 설치할 우리의 **로컬 경로에 이미지와 같이 마우스 우클릭 후 [Git Bash Here]을 클릭** 해줍니다. GitBash를 사용하기 위해서는 [Git](https://git-scm.com/){:target="_blank"}을 설치해야 합니다.

![Github 무료 호스팅을 위한 저장소 로컬 설치](/images/posts/create-web-hosting-repo-free-github/create-web-hosting-repo-free-github-5.jpg)

GitBash 명령 프롬프트를 열었으면 위에 복사한 저장소의 HTTPS 통신방식의 URL과 함께 아래와 같이 입력 후 엔터를 누릅니다.
```
git clone https://github.com/사용자계정/저장소.git
```

![Github 무료 호스팅을 위한 테스트](/images/posts/create-web-hosting-repo-free-github/create-web-hosting-repo-free-github-6.jpg)

우리가 지정한 path에 저장소가 설치가 되었을 텐데요. 이제 코드 편집기 Visual Studio Code를 열어 index.html 파일을 생성해 주고 "hello world!"를 입력합니다.

![Github 무료 호스팅을 위한 저장소 commit](/images/posts/create-web-hosting-repo-free-github/create-web-hosting-repo-free-github-7.jpg)

이제 우리의 깃허브에서 생성한 원격 저장소에 commit과 push를 해볼까요? 위 이미지처럼 커밋 메시지를 입력 후 [commit] 버튼을 클릭합니다.

## 저장소 호스팅하기
![Github 무료 호스팅을 위한 저장소 setting](/images/posts/create-web-hosting-repo-free-github/create-web-hosting-repo-free-github-8.jpg)

다시 깃허브 저장소에 돌아가 정상적으로 commit이 되었는지 확인합니다. 이제 우리의 웹 호스팅이 정상적으로 처리되었는지 확인해보겠습니다. **우측 상단의 [Setting] 버튼**을 클릭해 줍니다.

![Github 무료 호스팅 확인 후 홈페이지 접속](/images/posts/create-web-hosting-repo-free-github/create-web-hosting-repo-free-github-9.jpg)

좌측 메뉴의 **Pages를 클릭 후 Github Pages 페이지에 이동**합니다. 보이시나요? 우리의 저장소가 웹 호스팅 처리가 된 걸 확인할 수 있습니다. 그럼 이제 **[Visit site] 버튼**을 눌러 우리들의 웹 홈페이지에 접속해서 "hello world!"가 정상적으로 표시되는지 확인해 보세요.

- - -

우리가 **"사용자명.github.io"**로 생성한 저장소는 우리들의 메인 도메인이 됩니다. 주로 이 저장소는 자신의 포트폴리오 및 블로그로 활용되고 사이드 프로젝트는 **저장소를 추가로 생성하여 메인 도메인에 연결하면 "사용자명.github.io/저장소명"** 이런 식으로 URL이 생성됩니다. 이 URL에 사이드 프로젝트를 진행할 수 있습니다. 그러면 저장소를 생성하고 메인 도메인에 연결해 주면 **계속해서 무료 호스팅을 할 수 있다는 게 Github의 큰 장점**입니다.

