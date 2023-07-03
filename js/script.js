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
//뒤로가기 버튼
function fnPrev() {
  //페이지 url에서 파일명만 추출
  var url = location.href;
  var filename = url.substring(url.lastIndexOf('/')+1);
  // filename에서 ?langType=ko 제거
  filename = filename.substring(0, filename.indexOf('?'));
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

  // console.log("사용자 메시지: ", userMessages);
  // console.log("AI 메시지: ", botMessages);
  // console.log("AI mbti 타입: ", mbtiType);
  // console.log("AI 이름: ", botName);

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

//공유하기 버튼클릭
function fn_sendFB(sns) {
  var thisUrl = document.URL;
  var snsTitle = "[mbtiChat]MBTI 유형별 AI 상담 전문가와 친구하고 채팅하기";
  
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
            title: snsTitle,        // 제목
            description: snsTitle,  // 설명
            imageUrl: thisUrl,      // URL
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

//언어변경
function fnChangeLang(lang) {
  langType = lang.value;
  if(langType == "" || langType == null || langType == "ko") {
    location.href = "/";
  } else {
    location.href = "/"+langType+"?langType="+langType;
  }
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
}

//BOT 메시지 출력
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

  if(langType == 'ko' || langType == '' || langType == null) {
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
    botMessageProcessing(`Hello! My name is ${name}.
                      <br>I am an ${type}, which is the Analyst type. 
                      <br>Feel free to ask me anything about the ${type} type, 
                      <br>such as any questions you have about ${type} or the compatibility between ${type} and your MBTI type.
                      <br>First, please let me know your MBTI type!
                      `);
  }

}

//채팅 페이지 언어 변경
function fnChangeChatLang() {
  if(langType == 'ko' || langType == '' || langType == null) {
    document.querySelector(".chat-head a").innerHTML = '<i id="prevPage" class="fa-solid fa-chevron-left"></i>뒤로가기';
    document.querySelector(".coution-text").innerHTML = 'AI와의 채팅 내용은 저장되지않습니다.';
    document.querySelector("#messageInput").placeholder = "메세지를 입력하세요.";
  } else {
    document.querySelector(".chat-head a").innerHTML = '<i id="prevPage" class="fa-solid fa-chevron-left"></i>back';
    document.querySelector(".coution-text").innerHTML = 'The conversation with AI is not saved.';
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