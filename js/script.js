let userMessages = [];
let botMessages = [];
let mbtiType = "";
let botName = "";
let chatCnt = 0;

document.addEventListener('DOMContentLoaded', function() {
  var headerIcon = document.getElementById('header__icon');
  var siteCache = document.getElementById('site-cache');
  var body = document.body;

  Kakao.init('3bf57573d51a4272d82fce5a6cdaca0f'); 

  headerIcon.addEventListener('click', function(e) {
    e.preventDefault();
    body.classList.toggle('with--sidebar');
  });

  siteCache.addEventListener('click', function() {
    body.classList.remove('with--sidebar');
  });
});

/* ******************************************************************************************
 * EVENT
****************************************************************************************** */
//뒤로가기 버튼
function fnPrev() {
  //페이지 url에서 파일명만 추출
  var url = location.href;
  var filename = url.substring(url.lastIndexOf('/')+1);

  if(filename != "chat.html" && filename != "blog.html" && filename != "guide.html") {
    filename = filename.substring(0, filename.indexOf('?'));
  }
  if(filename == "chat.html" || filename == "blog.html" || filename == "guide.html") {
    if(langType == "" || langType == null || langType == "ko") {
      location.href = "/";
    } else {
      location.href = "/"+langType+"?langType="+langType;
    }
  } else {
    if(langType == "" || langType == null || langType == "ko") {
      location.href = '/blog.html'
    } else {
      location.href = '/blog.html'+"?langType="+langType;
    }
  }

}

//모달팝업창 닫기
function fnClose() {
  document.querySelector(".modal").style.display = "none";
}

// 채팅 페이지로 이동
function fnNextPage(type, name) {
  if(langType == "" || langType == null || langType == "ko") {
    location.href = "/chat.html"+"?mbtiType="+type+"&botName="+name;
  } else {
    location.href = "/chat.html"+"?mbtiType="+type+"&botName="+name+"&langType="+langType;
  }
}

function fnMovePage(page) {
  if(langType == "" || langType == null || langType == "ko") {
    if(page == "" || page == null) {
      location.href = "/";
    } else if(page == "blog") {
      location.href = "/"+page+".html";
    } else {
      location.href = "/"+page+".html";
    }
  } else {
    if(page == "" || page == null) {
      location.href = "/"+langType+"?langType="+langType;
    } else if(page == "blog") {
      location.href = "/"+page+".html"+"?langType="+langType;
    } else {
      location.href = "/"+langType+"/"+page+".html"+"?langType="+langType;
    }
  }
}

//메시지 전송 버튼 클릭
async function sendMessage() {
  const inputElement = document.getElementById('messageInput');
  const userMsg = inputElement.value;
  inputElement.value = '';

  displayUserMessage(userMsg);
  displayBotLoading();

  //messageInput 비활성화 처리
  document.getElementById('send').disabled = true;
  
  // console.log("사용자 메시지: ", userMessages);
  // console.log("AI 메시지: ", botMessages);
  // console.log("AI mbti 타입: ", mbtiType);
  // console.log("AI 이름: ", botName);

  try {
    const response = await fetch('http://localhost:3000/mbtiChat', { //로컬테스트용
    // const response = await fetch('https://asttatqmbxav6io5ic6mgd2aau0jwzpm.lambda-url.ap-northeast-2.on.aws/mbtiChat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mbtiType: mbtiType,
        botName: botName,
        userMessages: userMessages,
        botMessages: botMessages,
      })
    });

    if (!response.ok) {
      throw new Error('포스트 요청 실패');
    }

    const data = await response.json();
    const botMessage = data.assistant;
    displayBotMessage(botMessage);
    document.getElementById('send').disabled = false;
  } catch (error) {
    console.error(error);
    alert('챗봇 서버와 연결이 끊어졌습니다. 다시 시도해주세요.');
    // fnPrev();
  }
  
}

//공유하기 버튼클릭
function fn_sendFB(sns) {
  var thisUrl = "https://mbtichat.info";
  if(!langType == "" || !langType == null || !langType == "ko") {
    thisUrl = "https://mbtichat.info/"+langType+"?langType="+langType;
  }
  var snsTitle = "[MBTI AI CHAT] MBTI 유형별 AI와 다양한 대화를 해보세요.";
  var snsDesc = "우선 당신과 우리의 MBTI 유형간의 궁합부터 알아볼까요? 링크를 클릭해 AI를 선택해주세요.";
  if( sns == 'facebook' ) {
      var url = "http://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(thisUrl);
      window.open(url, "", "width=486, height=286");
  }
  else if( sns == 'twitter' ) {
      var url = "http://twitter.com/share?url="+encodeURIComponent(thisUrl)+"&text="+encodeURIComponent(snsTitle);
      window.open(url, "tweetPop", "width=486, height=286,scrollbars=yes");
  }
  else if( sns == 'band' ) {
      var url = "http://www.band.us/plugin/share?body="+encodeURIComponent(snsTitle)+"&route="+encodeURIComponent(thisUrl);
      window.open(url, "shareBand", "width=400, height=500, resizable=yes");
  }
  else if( sns == 'kakaotalk' ) {
      // 카카오링크 버튼 생성
      Kakao.Link.sendDefault({
          objectType: 'feed',
          content: {
            title: snsTitle,                    // 제목
            description: snsDesc,               // 설명
            imageUrl: 'https://mbtichat.info/images/share-img.jpg',  // 썸네일 이미지
            link: {
                mobileWebUrl: thisUrl,
                webUrl: thisUrl
            }
          }
      });
  } else if( sns == 'kakaostory') {
      // 사용할 앱의 JavaScript 키 설정
      Kakao.Story.share({
        url: thisUrl,
        text: snsTitle
      });
  } else if( sns == 'copyurl') {
      var tmp = document.createElement('input');
      var url = thisUrl;
      document.body.appendChild(tmp);
      tmp.value = url;
      tmp.select();
      document.execCommand("copy");
      document.body.removeChild(tmp);
      alert("URL이 복사되었습니다.");
  } 
}

//언어변경
function fnChangeLang(lang) {
  langType = lang.value;
  if(langType == "" || langType == null || langType == "ko") {
    location.href = "/";
  } else {
    location.href = "/"+langType+"?langType="+langType;
  }
}

//앱 다운로드 페이지 이동
function fnAppDownloadPage() {
  var url = "https://play.google.com/store/apps/details?id=com.mhhan01.myapp"
  window.open(url);
}

/* ******************************************************************************************
 * FUNCTION
****************************************************************************************** */
//페이지 로딩시 bot의 첫 메시지 출력
async function botMessageProcessing(message) {
  displayBotLoading();
  setTimeout(() => {
    displayBotMessage(message);
  }, 2000);

  // return new Promise((resolve, reject) => {
  //   displayBotLoading();
  //   setTimeout(() => {
  //     displayBotMessage(message);
  //     resolve(); // 완료 시점에 resolve 호출
  //   }, 2000);
  // });
}

//BOT 메시지 로딩
function displayBotLoading() {
  const mbtiType = document.getElementById('mbtiType').value;

  const chatContainer = document.getElementById('chatContainer');
  const messageContent = document.createElement('div');
  messageContent.classList.add('chat-cont', 'ai-chat-view');

  const messageElement = document.createElement('p');
  messageElement.classList.add('ai-last-msg');
  messageElement.innerHTML = `<i class="fas fa-circle-notch fa-spin"></i>`;

  const imgElement = document.createElement('img');
  imgElement.classList.add('ico-img');

  imgElement.src = `./images/face-${mbtiType}.png`;

  const figureElement = document.createElement('figure');
  figureElement.appendChild(imgElement);

  messageContent.appendChild(figureElement);
  messageContent.appendChild(messageElement);
  chatContainer.appendChild(messageContent);
  fnScrollToBottom();
}

//BOT 메시지 출력
function displayBotMessage(message) {
  document.querySelector('.ai-last-msg > i').remove();
  const botMessage = document.querySelector('.ai-last-msg');
  const botMessageWrap = document.createElement('span');
  botMessageWrap.innerHTML = message;
  botMessages.push(message);
  
  if (langType == 'ko' || langType == '' || langType == null) {
    if (chatCnt == 3 && !isReactNativeWebView) {
      const tossLink = document.createElement('a');
      const kakaoLink = document.createElement('a');

      tossLink.href = "https://toss.me/moony01"
      tossLink.target = "_blank";
      tossLink.innerText = "토스 후원하기";

      kakaoLink.href = "https://qr.kakaopay.com/Ej7w3g3Vb"
      kakaoLink.target = "_blank";
      kakaoLink.innerText = "카카오페이 후원하기";

      botMessageWrap.innerHTML += "<br><br><span class='support-text'>mbtiChat 앱은 광고와 후원으로 운영되고있습니다.</span>"
      botMessageWrap.innerHTML += "<br><span class='support-text'>후원해주시면 더욱 발전하는 앱이 될 수 있습니다. 감사합니다. (후원 메시지는 1회 출력됩니다.)</span>"
      botMessageWrap.innerHTML += "<br><span class='support-text toss-donation'></span>"
      botMessageWrap.innerHTML += "<br><span class='support-text kakao-donation'></span>"
      botMessage.appendChild(botMessageWrap);

      // toss-donation 에 토스 후원하기 링크 추가
      document.querySelector('.toss-donation').appendChild(tossLink);
      // kakao-donation 에 카카오 후원하기 링크 추가
      document.querySelector('.kakao-donation').appendChild(kakaoLink);
    }
  } else {
    if (chatCnt == 3 && !isReactNativeWebView) {
      const buyMeCoffeeLink = document.createElement('a');
      buyMeCoffeeLink.href = "https://www.buymeacoffee.com/moony01"
      buyMeCoffeeLink.target = "_blank";
      buyMeCoffeeLink.innerText = "Buy me a coffee";

      botMessageWrap.innerHTML += "<br><br><span class='support-text'>mbtiChat app is operated by advertising and donations.</span>"
      botMessageWrap.innerHTML += "<br><span class='support-text'>If you support, it can be a better app. Thank you. (Donation message will be displayed once.)</span>"
      botMessageWrap.innerHTML += "<br><span class='support-text buy-me-coffee'></span>"
      botMessage.appendChild(botMessageWrap);
      // buy-me-coffee 에 Buy me a coffee 링크 추가
      document.querySelector('.buy-me-coffee').appendChild(buyMeCoffeeLink);
    }
  }
  botMessage.appendChild(botMessageWrap);
  botMessage.classList.remove('ai-last-msg');
  chatCnt++;
  fnScrollToBottom();
}

//USER 메시지 출력
function displayUserMessage(message) {
  const chatContainer = document.getElementById('chatContainer');
  const messageContent = document.createElement('div');
  messageContent.classList.add('chat-cont', 'usr-chat-view');
  
  userMessages.push(message);

  const messageElement = document.createElement('p');
  messageElement.textContent = message;

  messageContent.appendChild(messageElement);
  chatContainer.appendChild(messageContent);
} 

//CHAT 페이지 로드시 기본 세팅 함수
function fnChatPageLoad(type, name) {
  mbtiType = type;
  botName = name;

  //VIEWPORT 최상단으로 이동
  window.scrollTo({ top: 0, behavior: 'smooth' });

  const charView = document.querySelector(".ai-char-view");
  const chatHead = document.querySelector(".chat-head");
  const chatBody = document.querySelector(".chat-body");

  charView.style.backgroundImage = "url(./images/"+type+".png)";

  /* 분석가형 */
  if (type === "intj"||type === "intp"||type === "entj"||type === "entp") {
    chatHead.style.backgroundColor = "#625772";
    chatBody.style.backgroundColor = "#625772";
  }
  /* 외교관형 */
  else if (type === "infj"||type === "infp"||type === "enfj"||type === "enfp") {
    chatHead.style.backgroundColor = "#2ea673";
    chatBody.style.backgroundColor = "#2ea673";
  }
  /* 관리자형 */
  else if (type === "istj"||type === "isfj"||type === "estj"||type === "esfj") {
    chatHead.style.backgroundColor = "#429bb8";
    chatBody.style.backgroundColor = "#429bb8";
  }
  /* 탐험가형 */
  else if (type === "istp"||type === "isfp"||type === "estp"||type === "esfp") {
    chatHead.style.backgroundColor = "#e4ae3a";
    chatBody.style.backgroundColor = "#e4ae3a";
  }

  if (langType === 'ko' || langType === '' || langType === null) {
    botMessageProcessing(`우선 저의 MBTI 유형 ${type}와 당신의 MBTI 유형의 궁합에 대해 알아볼까요?
                        <br>당신의 MBTI 유형을 먼저 알려주세요!
                        `);
  } else if (langType === 'en') {
    botMessageProcessing(`First, shall we find out about the compatibility between my MBTI type ${type} and your MBTI type?
                        <br>Please let me know your MBTI type first!
                        `);
  } else if (langType === 'de') {
    botMessageProcessing(`Zuerst wollen wir herausfinden, wie gut mein MBTI-Typ ${type} und dein MBTI-Typ zusammenpassen.
                        <br>Bitte teilen Sie mir zuerst Ihren MBTI-Typ mit!
                        `);
  } else if (langType === 'es') {
    botMessageProcessing(`Primero, ¿no averiguamos la compatibilidad entre mi tipo de MBTI ${type} y tu tipo de MBTI?
                        <br>¡Por favor, primero hágame saber su tipo de MBTI!
                        `);
  } else if (langType === 'fr') {
    botMessageProcessing(`Tout d'abord, ne devrions-nous pas découvrir la compatibilité entre mon type MBTI ${type} et votre type MBTI?
                        <br>S'il vous plaît laissez-moi d'abord savoir votre type MBTI!
                        `);
  } else if (langType === 'id') {
    botMessageProcessing(`Pertama, apakah kita tidak mengetahui tentang kompatibilitas antara tipe MBTI saya ${type} dan tipe MBTI Anda?
                        <br>Silakan beri tahu saya tipe MBTI Anda terlebih dahulu!
                        `);
  } else if (langType === 'ja') {
    botMessageProcessing(`まず、私のMBTIタイプ${type}とあなたのMBTIタイプの互換性について知りましょうか？
                        <br>最初にあなたのMBTIタイプを教えてください！
                        `);
  } else if (langType === 'nl') {
    botMessageProcessing(`Eerst zullen we de compatibiliteit tussen mijn MBTI-type ${type} en jouw MBTI-type ontdekken.
                        <br>Laat me alsjeblieft eerst je MBTI-type weten!
                        `);
  } else if (langType === 'pl') {
    botMessageProcessing(`Najpierw dowiedzmy się o zgodności między moim typem MBTI ${type} a twoim typem MBTI.
                        <br>Najpierw podaj mi swój typ MBTI!
                        `);
  } else if (langType === 'pt') {
    botMessageProcessing(`Primeiro, vamos descobrir a compatibilidade entre meu tipo MBTI ${type} e seu tipo MBTI.
                        <br>Por favor, deixe-me saber seu tipo MBTI primeiro!
                        `);
  } else if (langType === 'ru') {
    botMessageProcessing(`Сначала давайте узнаем о совместимости моего типа MBTI ${type} и вашего типа MBTI.
                        <br>Пожалуйста, дайте мне знать свой тип MBTI сначала!
                        `);
  } else if (langType === 'tr') {
    botMessageProcessing(`Önce, MBTI türüm ${type} ve MBTI türünüz arasındaki uyumu bulalım mı?
                        <br>Lütfen önce MBTI türünüzü bana bildirin!
                        `);
  } else if (langType === 'uk') {
    botMessageProcessing(`Спочатку давайте дізнаємося про сумісність мого типу MBTI ${type} і вашого типу MBTI.
                        <br>Будь ласка, спочатку дайте мені знати свій тип MBTI!
                        `);
  } else if (langType === 'vi') {
    botMessageProcessing(`Đầu tiên, chúng ta hãy tìm hiểu về tính tương thích giữa loại MBTI của tôi ${type} và loại MBTI của bạn.
                        <br>Vui lòng cho tôi biết loại MBTI của bạn trước!
                        `);
  } else if (langType === 'zh') {
    botMessageProcessing(`首先我的 MBTI 类型是 ${type} ，你是？
                        <br>请告诉我你的 MBTI 类型！
                        `);
  } else {
    botMessageProcessing(`First, shall we find out about the compatibility between my MBTI type ${type} and your MBTI type?
                        <br>Please let me know your MBTI type first!
                        `);
  }
  

}

//채팅 페이지 언어 변경
function fnChangeChatLang() {
  if(langType == 'ko' || langType == '' || langType == null) {
    document.querySelector(".chat-head a").innerHTML = '<i id="prevPage" class="fa-solid fa-chevron-left"></i>뒤로가기';
    document.querySelector(".ctn-notsave").innerHTML = '* AI와의 채팅 내용은 저장되지않습니다.';
    document.querySelector(".ctn-continue").innerHTML = '* AI의 말이 끊겼나요? "이어서 말해줘" 라고 AI에게 말해보세요.';
    document.querySelector("#messageInput").placeholder = "메세지를 입력하세요.";
  } else {
    document.querySelector(".chat-head a").innerHTML = '<i id="prevPage" class="fa-solid fa-chevron-left"></i>back';
    document.querySelector(".ctn-notsave").innerHTML = '* The conversation with AI is not saved.';
    document.querySelector(".ctn-continue").innerHTML = '* Did AI`s words stop? Say "Continue" to AI.';
    document.querySelector("#messageInput").placeholder = "Enter your message here...";
  }
}

//블로그 페이지 언어 변경
function fnChangeBlogLang() {
  if(langType == 'ko' || langType == '' || langType == null) {
    document.querySelector(".grid-head a").innerHTML = '<i id="prevPage" class="fa-solid fa-chevron-left"></i>뒤로가기';
  } else {
    document.querySelector(".grid-head a").innerHTML = '<i id="prevPage" class="fa-solid fa-chevron-left"></i>back';
  }
}

//메뉴 언어 변경
function fnChangeLangCommonEl() {
  if(langType == 'ko' || langType == '' || langType == null) {
    document.querySelector(".menu").children[0].innerHTML = "메인";
    document.querySelector(".menu").children[1].innerHTML = "사용자 가이드";
    document.querySelector(".menu").children[2].innerHTML = "포스트";
  } else {
    document.querySelector(".menu").children[0].innerHTML = "Home";
    document.querySelector(".menu").children[1].innerHTML = "User Guide";
    document.querySelector(".menu").children[2].innerHTML = "Post";
  }
}

// 채팅창 스크롤 최하단으로 이동
function fnScrollToBottom() {
  const chatContainer = document.getElementById('chatContainer');
  chatContainer.scrollTop = chatContainer.scrollHeight;
}