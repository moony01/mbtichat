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

  // messageInput에서 엔터키 입력 시 sendMessage() 호출
  document.getElementById('messageInput').addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
      sendMessage();
    }
  });
});

/* ******************************************************************************************
 * EVENT
****************************************************************************************** */
// 뒤로가기 버튼
function fnPrev() {
  window.history.back();
}

// 모달팝업창 닫기
function fnClose() {
  document.querySelector(".modal").style.display = "none";
}

// chat 페이지로 이동
function fnNextPage(type, name) {
  location.href = "chat.html"+"?mbtiType="+type+"&botName="+name+"&langType="+langType;
}

// user-guide 페이지로 이동
function fnGuidePage() {
  if(langType == "ko") {
    location.href = "/guide/ko";
  } else {
    location.href = "/guide/ko";
  }
}

// blog 페이지로 이동
function fnBlogPage() {
  location.href = "/blog.html"+"?langType="+langType;
}

async function sendMessage() {
  const inputElement = document.getElementById('messageInput');
  const userMsg = inputElement.value;
  inputElement.value = '';

  displayUserMessage(userMsg);
  displayBotLoading();

  console.log("사용자 메시지: ", userMessages);
  console.log("AI 메시지: ", botMessages);
  console.log("AI mbti 타입: ", mbtiType);
  console.log("AI 이름: ", botName);

  try {
    // const response = await fetch('http://localhost:3000/mbtiChat', { //로컬테스트용
    const response = await fetch('https://asttatqmbxav6io5ic6mgd2aau0jwzpm.lambda-url.ap-northeast-2.on.aws/mbtiChat', {
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
  } catch (error) {
    console.error(error);
  }
}

// 공유하기 버튼클릭
function fn_sendFB(sns) {
  var thisUrl = document.URL;
  // var imageUrl = "./images/splash.png";
  var snsTitle = "[MBTI-CHAT]MBTI 유형별 AI 상담 전문가와 친구하고 채팅하기";
  
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
            title: snsTitle, // 보여질 제목
            description: snsTitle, // 보여질 설명
            imageUrl: thisUrl, // 콘텐츠 URL
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
  }
}

// 언어변경
function fnChangeLang(lang) {
  langType = lang.value;
  if(lang.value == 'ko') {
    // 페이지 새로고침
    location.reload();
  } else if(lang.value == 'en') {
    // MAIN TEXT
    document.querySelector(".main-text h1").innerHTML = "You can become friends and chat with an AI counseling specialist based on your MBTI type.";
  
    // list-bg h2
    document.querySelector(".list-1-bg h2").innerHTML = "Analyst type";
    document.querySelector(".list-2-bg h2").innerHTML = "Diplomat type";
    document.querySelector(".list-3-bg h2").innerHTML = "Manager type";
    document.querySelector(".list-4-bg h2").innerHTML = "Consul type";
  
    // list-bg h3 span
    var spanElements = document.querySelectorAll(".char-contents h3 span");
    for (var i = 0; i < spanElements.length; i++) {
      spanElements[i].innerHTML = "expert"; // 변경하고자 하는 텍스트로 대체
    }

    // id intjName
    document.querySelector("#intjName").innerHTML = "Ethan";
    document.querySelector("#intpName").innerHTML = "Olivia";
    document.querySelector("#entjName").innerHTML = "Emma";
    document.querySelector("#entpName").innerHTML = "Liam";

    document.querySelector("#infjName").innerHTML = "Benjamin";
    document.querySelector("#infpName").innerHTML = "Ava";
    document.querySelector("#enfjName").innerHTML = "Sophia";
    document.querySelector("#enfpName").innerHTML = "Noah";

    document.querySelector("#istjName").innerHTML = "Alexander";
    document.querySelector("#isfjName").innerHTML = "Isabella";
    document.querySelector("#estjName").innerHTML = "Mia";
    document.querySelector("#esfjName").innerHTML = "Charlotte";
    
    document.querySelector("#istpName").innerHTML = "Oliver";
    document.querySelector("#isfpName").innerHTML = "Amelia";
    document.querySelector("#estpName").innerHTML = "William";
    document.querySelector("#esfpName").innerHTML = "Harper";

    fnChangeLangCommonEl();
  }
}

/* ******************************************************************************************
 * FUNCTION
****************************************************************************************** */
// 페이지 로딩시 bot의 첫 메시지 출력
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

// bot 메시지 로딩
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
}

// bot 메시지 출력
function displayBotMessage(message) {
  document.querySelector('.ai-last-msg > i').remove();
  const botMessage = document.querySelector('.ai-last-msg');
  const botMessageWrap = document.createElement('span');
  botMessageWrap.innerHTML = message;
  botMessages.push(message);
  
  if (langType == 'ko') {
    if (chatCnt == 2) {
      const link = document.createElement('a');
      link.href = "https://toss.me/moony01"
      link.target = "_blank";
      link.innerText = "후원하기";
      botMessageWrap.innerHTML += "<br><br><span class='support-text'>mbtiChat 앱은 광고와 후원으로 운영되고있습니다.</span>"
      botMessageWrap.innerHTML += "<br><span class='support-text'>후원해주시면 더욱 발전하는 앱이 될 수 있습니다.</span>"
      botMessageWrap.innerHTML += "<br><span class='support-text'>감사합니다. =></span>"
      botMessageWrap.appendChild(link);
    }
  }

  botMessage.appendChild(botMessageWrap);
  botMessage.classList.remove('ai-last-msg');
  chatCnt++;
}

// user 메시지 출력
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

// chat 페이지 로드시 기본 세팅 함수
function fnChatPageLoad(type, name) {
  mbtiType = type;
  botName = name;

  // // viewport 최상단으로 이동
  window.scrollTo({ top: 0, behavior: 'smooth' });

  const charView = document.querySelector(".ai-char-view");
  const chatHead = document.querySelector(".chat-head");
  const chatBody = document.querySelector(".chat-body");

  /* 분석가형 */
  if (type === "intj") {
    charView.style.backgroundImage = "url(./images/intj.png)";
    chatHead.style.backgroundColor = "#625772";
    chatBody.style.backgroundColor = "#625772";
  } else if (type === "intp") {
    charView.style.backgroundImage = "url(./images/intp.png)";
    chatHead.style.backgroundColor = "#625772";
    chatBody.style.backgroundColor = "#625772";
  } else if (type === "entj") {
    charView.style.backgroundImage = "url(./images/entj.png)";
    chatHead.style.backgroundColor = "#625772";
    chatBody.style.backgroundColor = "#625772";
  } else if (type === "entp") {
    charView.style.backgroundImage = "url(./images/entp.png)";
    chatHead.style.backgroundColor = "#625772";
    chatBody.style.backgroundColor = "#625772";
  }
  /* 외교관형 */
  else if (type === "infj") {
    charView.style.backgroundImage = "url(./images/infj.png)";
    chatHead.style.backgroundColor = "#2ea673";
    chatBody.style.backgroundColor = "#2ea673";
  }else if (type === "infp") {
    charView.style.backgroundImage = "url(./images/infp.png)";
    chatHead.style.backgroundColor = "#2ea673";
    chatBody.style.backgroundColor = "#2ea673";
  }else if (type === "enfj") {
    charView.style.backgroundImage = "url(./images/enfj.png)";
    chatHead.style.backgroundColor = "#2ea673";
    chatBody.style.backgroundColor = "#2ea673";
  }else if (type === "enfp") {
    charView.style.backgroundImage = "url(./images/enfp.png)";
    chatHead.style.backgroundColor = "#2ea673";
    chatBody.style.backgroundColor = "#2ea673";
  }
  /* 관리자형 */
  else if (type === "istj") {
    charView.style.backgroundImage = "url(./images/istj.png)";
    chatHead.style.backgroundColor = "#429bb8";
    chatBody.style.backgroundColor = "#429bb8";
  }else if (type === "isfj") {
    charView.style.backgroundImage = "url(./images/isfj.png)";
    chatHead.style.backgroundColor = "#429bb8";
    chatBody.style.backgroundColor = "#429bb8";
  }else if (type === "estj") {
    charView.style.backgroundImage = "url(./images/estj.png)";
    chatHead.style.backgroundColor = "#429bb8";
    chatBody.style.backgroundColor = "#429bb8";
  }else if (type === "esfj") {
    charView.style.backgroundImage = "url(./images/esfj.png)";
    chatHead.style.backgroundColor = "#429bb8";
    chatBody.style.backgroundColor = "#429bb8";
  }
  /* 탐험가형 */
  else if (type === "istp") {
    charView.style.backgroundImage = "url(./images/istp.png)";
    chatHead.style.backgroundColor = "#e4ae3a";
    chatBody.style.backgroundColor = "#e4ae3a";
  }else if (type === "isfp") {
    charView.style.backgroundImage = "url(./images/isfp.png)";
    chatHead.style.backgroundColor = "#e4ae3a";
    chatBody.style.backgroundColor = "#e4ae3a";
  }else if (type === "estp") {
    charView.style.backgroundImage = "url(./images/estp.png)";
    chatHead.style.backgroundColor = "#e4ae3a";
    chatBody.style.backgroundColor = "#e4ae3a";
  }else if (type === "esfp") {
    charView.style.backgroundImage = "url(./images/esfp.png)";
    chatHead.style.backgroundColor = "#e4ae3a";
    chatBody.style.backgroundColor = "#e4ae3a";
  }

  if(langType == 'ko') {
    botMessageProcessing(`안녕하세요! 저의 이름은 ${name} 입니다. 
                      <br> 저는 ${type} 유형의 전문가입니다. 
                      <br> 저에게 ${type} 유형에 대해 궁금한 점이나 
                      <br> ${type} 유형과 당신의 MBTI 유형 간의 궁합 등을 물어보세요.
                      <br> 우선 당신의 mbti 유형을 알려주세요!
                      `);
  } else if(langType == 'en') {
    botMessageProcessing(`Hello! My name is ${name}.
                      <br>I am an ${type}, which is the Analyst type. 
                      <br>Feel free to ask me anything about the ${type} type, 
                      <br>such as any questions you have about ${type} or the compatibility between ${type} and your MBTI type.
                      <br>First, please let me know your MBTI type!
                      `);
  } else {
    botMessageProcessing(`안녕하세요! 저의 이름은 ${name} 입니다. 
                      <br> 저는 ${type} 유형의 전문가입니다. 
                      <br> 저에게 ${type} 유형에 대해 궁금한 점이나 
                      <br> ${type} 유형과 당신의 MBTI 유형 간의 궁합 등을 물어보세요.
                      <br> 우선 당신의 mbti 유형을 알려주세요!
                      `);
  }

}

// chat 페이지 언어 변경
function fnChangeChatLang() {
  if(langType == 'en') {
    document.querySelector(".chat-head a").innerHTML = '<i id="prevPage" class="fa-solid fa-chevron-left"></i>back';
    document.querySelector(".coution-text").innerHTML = 'The conversation with AI is not saved.';
    document.querySelector("#messageInput").placeholder = "Enter your message here...";
  }
}

// blog 페이지 언어 변경
function fnChangeBlogLang() {
  if(langType == 'en') {
    document.querySelector(".grid-head a").innerHTML = '<i id="prevPage" class="fa-solid fa-chevron-left"></i>back';
  }
}

// header menu 언어 변경
function fnChangeLangCommonEl() {
  if(langType == 'en') {
    // HEADER
    document.querySelector(".menu").children[0].innerHTML = "Home";
    document.querySelector(".menu").children[1].innerHTML = "User Guide";
    document.querySelector(".menu").children[2].innerHTML = "Blog";
  }
}