let userMessages = [];
let botMessages = [];
let mbtiType = "";
let botName = "";

document.addEventListener('DOMContentLoaded', function() {
  var headerIcon = document.getElementById('header__icon');
  var siteCache = document.getElementById('site-cache');
  var body = document.body;

  headerIcon.addEventListener('click', function(e) {
    e.preventDefault();
    body.classList.toggle('with--sidebar');
  });

  siteCache.addEventListener('click', function() {
    body.classList.remove('with--sidebar');
  });
});

window.addEventListener('load', function() {
  // document.querySelector(".modal").style.display = "block";
  // 사용할 앱의 JavaScript 키 설정
  Kakao.init('3bf57573d51a4272d82fce5a6cdaca0f'); 
});

function fnNextPage(type, name) {
  location.href = "chat.html"+"?mbtiType="+type+"&botName="+name;
}

function fnNext(type, name) {
  mbtiType = type;
  botName = name;

  // // id = mbtyType 인 input 태그에 type 값 넣기
  // document.getElementById("mbtiType").value = type;
  // document.getElementById("botName").value = name;

  // document.getElementById("contChat").style.display = "";
  // document.getElementById("contAi").style.display = "none";
  // document.querySelector(".main-text").style.display = "none";

  // // viewport 최상단으로 이동
  // window.scrollTo({ top: 0, behavior: 'smooth' });

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

  //${type}, ${name}
  botMessageProcessing(`안녕하세요! 저의 이름은 ${name} 입니다. 
                    <br> 저는 ${type} 유형의 전문가입니다. 
                    <br> 저에게 ${type} 유형에 대해 궁금한 점이나 
                    <br> ${type} 유형과 당신의 mbti 유형 간의 궁합 등등... 무엇이든 물어보세요!
                    <br>
                    <br> 우선 당신의 mbti 유형을 알려주세요!
                    `);
}

function fnPrev() {
  location.href = './index.html';
}

function fnClose() {
  document.querySelector(".modal").style.display = "none";
}

async function botMessageProcessing(message) {
  displayBotLoading();
  setTimeout(() => {
    displayBotMessage(message);
  }, 3000);

  // return new Promise((resolve, reject) => {
  //   displayBotLoading();
  //   setTimeout(() => {
  //     displayBotMessage(message);
  //     resolve(); // 완료 시점에 resolve 호출
  //   }, 2000);
  // });
}

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

function displayBotMessage(message) {
  document.querySelector('.ai-last-msg > i').remove();
  const botMessage = document.querySelector('.ai-last-msg');
  botMessages.push(message);
  botMessage.innerHTML = message;
  botMessage.classList.remove('ai-last-msg');
}

function displayBotLoading() {
  // #mbtiTyp 값을 변수에 담기
  const mbtiType = document.getElementById('mbtiType').value;

  const chatContainer = document.getElementById('chatContainer');
  const messageContent = document.createElement('div');
  messageContent.classList.add('chat-cont', 'ai-chat-view');

  const messageElement = document.createElement('p');
  messageElement.classList.add('ai-last-msg');
  messageElement.innerHTML = `<i class="fas fa-circle-notch fa-spin"></i>`;

  const imgElement = document.createElement('img');
  imgElement.classList.add('ico-img');

  // #mbtiTyp 값을 이미지 경로에 넣기
  imgElement.src = `./images/face-${mbtiType}.png`;

  const figureElement = document.createElement('figure');
  figureElement.appendChild(imgElement);

  messageContent.appendChild(figureElement);
  messageContent.appendChild(messageElement);
  chatContainer.appendChild(messageContent);
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
    const response = await fetch('https://c5ojwc37zapz7xko4p35m62oju0dmxee.lambda-url.ap-northeast-2.on.aws/mbtiChat', {
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