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
      document.getElementById('send').click();
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
    if (chatCnt == 2) {
      const tossLink = document.createElement('a');
      const kakaoLink = document.createElement('a');
      tossLink.href = "https://toss.me/moony01"
      tossLink.target = "_blank";
      tossLink.innerText = "토스 후원하기";
      kakaoLink.href = "https://qr.kakaopay.com/Ej7w3g3Vb"
      kakaoLink.target = "_blank";
      kakaoLink.innerText = "카카오페이 후원하기";

      botMessageWrap.innerHTML += "<br><br><span class='support-text'>mbtiChat 앱은 광고와 후원으로 운영되고있습니다.</span>"
      botMessageWrap.innerHTML += "<br><span class='support-text'>후원해주시면 더욱 발전하는 앱이 될 수 있습니다. 감사합니다.</span>"
      botMessageWrap.innerHTML += "<br><span class='support-text toss-donation'></span>"
      botMessageWrap.innerHTML += "<br><span class='support-text kakao-donation'></span>"
      botMessage.appendChild(botMessageWrap);
      // toss-donation 에 토스 후원하기 링크 추가
      document.querySelector('.toss-donation').appendChild(tossLink);
      // kakao-donation 에 카카오 후원하기 링크 추가
      document.querySelector('.kakao-donation').appendChild(kakaoLink);
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

// 채팅창 스크롤 최하단으로 이동
function fnScrollToBottom() {
  const chatContainer = document.getElementById('chatContainer');
  chatContainer.scrollTop = chatContainer.scrollHeight;
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
    botMessageProcessing(`안녕하세요! 저의 이름은 ${name}입니다. 
                        <br>저는 ${type} 유형의 전문가입니다. 
                        <br>${type} 유형에 대해 궁금한 점이나 
                        <br>${type} 유형과 당신의 MBTI 유형 간의 궁합 등을 물어보세요.
                        <br>우선 당신의 MBTI 유형을 알려주세요!
                        `);
  } else if (langType === 'en') {
    botMessageProcessing(`Hello! My name is ${name}.
                        <br>I am an ${type}, which is the Analyst type. 
                        <br>Feel free to ask me anything about the ${type} type, 
                        <br>such as any questions you have about ${type} or the compatibility between ${type} and your MBTI type.
                        <br>First, please let me know your MBTI type!
                        `);
  } else if (langType === 'de') {
    botMessageProcessing(`Hallo! Mein Name ist ${name}.
                        <br>Ich bin ein ${type}, der Analystentyp. 
                        <br>Fragen Sie mich gerne alles über den ${type}-Typ, 
                        <br>wie zum Beispiel Fragen zum ${type} oder zur Kompatibilität zwischen ${type} und Ihrem MBTI-Typ.
                        <br>Bitte teilen Sie mir zuerst Ihren MBTI-Typ mit!
                        `);
  } else if (langType === 'es') {
    botMessageProcessing(`¡Hola! Mi nombre es ${name}.
                        <br>Soy un ${type}, que es el tipo Analista. 
                        <br>No dudes en preguntarme cualquier cosa sobre el tipo ${type}, 
                        <br>como cualquier pregunta que tengas sobre ${type} o la compatibilidad entre ${type} y tu tipo de MBTI.
                        <br>¡Primero, por favor dime tu tipo de MBTI!
                        `);
  } else if (langType === 'fr') {
    botMessageProcessing(`Bonjour! Je m'appelle ${name}.
                        <br>Je suis un ${type}, qui est le type Analyste. 
                        <br>N'hésitez pas à me poser des questions sur le type ${type}, 
                        <br>comme toutes les questions que vous avez sur le ${type} ou la compatibilité entre le ${type} et votre type de MBTI.
                        <br>Tout d'abord, veuillez me faire connaître votre type de MBTI!
                        `);
  } else if (langType === 'id') {
    botMessageProcessing(`Halo! Nama saya ${name}.
                        <br>Saya adalah seorang ${type}, yang merupakan tipe Analis. 
                        <br>Jangan ragu untuk mengajukan pertanyaan seputar tipe ${type}, 
                        <br>seperti pertanyaan apa pun yang Anda miliki tentang ${type} atau kesesuaian antara ${type} dan tipe MBTI Anda.
                        <br>Silakan beri tahu saya terlebih dahulu tipe MBTI Anda!
                        `);
  } else if (langType === 'ja') {
    botMessageProcessing(`こんにちは！私の名前は${name}です。
                        <br>私はアナリストタイプの${type}です。
                        <br>${type}タイプについての質問や、
                        <br>${type}とあなたのMBTIタイプとの相性など、何でもお気軽にお尋ねください。
                        <br>まず、あなたのMBTIタイプを教えてください！
                        `);
  } else if (langType === 'nl') {
    botMessageProcessing(`Hallo! Mijn naam is ${name}.
                        <br>Ik ben een ${type}, wat het Analist-type is. 
                        <br>Stel me gerust vragen over het ${type}-type, 
                        <br>zoals vragen die je hebt over het ${type} of de compatibiliteit tussen ${type} en je MBTI-type.
                        <br>Laat me eerst weten wat je MBTI-type is!
                        `);
  } else if (langType === 'pl') {
    botMessageProcessing(`Cześć! Mam na imię ${name}.
                        <br>Jestem ${type}, czyli typem Analityka. 
                        <br>Śmiało pytaj mnie o cokolwiek dotyczące typu ${type}, 
                        <br>na przykład o jakiekolwiek pytania, jakie masz na temat ${type} lub zgodność między ${type} a Twoim typem MBTI.
                        <br>Najpierw podaj mi swój typ MBTI!
                        `);
  } else if (langType === 'pt') {
    botMessageProcessing(`Olá! Meu nome é ${name}.
                        <br>Eu sou um ${type}, que é o tipo Analista. 
                        <br>Fique à vontade para me perguntar qualquer coisa sobre o tipo ${type}, 
                        <br>como qualquer pergunta que você tenha sobre ${type} ou a compatibilidade entre ${type} e seu tipo de MBTI.
                        <br>Primeiro, por favor me diga seu tipo de MBTI!
                        `);
  } else if (langType === 'ru') {
    botMessageProcessing(`Привет! Меня зовут ${name}.
                        <br>Я являюсь ${type}, который относится к типу Аналитиков. 
                        <br>Не стесняйтесь задавать мне любые вопросы о типе ${type}, 
                        <br>например, о любых вопросах, которые у вас есть о ${type} или совместимости между ${type} и вашим типом MBTI.
                        <br>Сначала, пожалуйста, сообщите мне ваш тип MBTI!
                        `);
  } else if (langType === 'tr') {
    botMessageProcessing(`Merhaba! Benim adım ${name}.
                        <br>Ben bir ${type}ım, yani Analist tipiyim. 
                        <br>${type} tipiyle ilgili herhangi bir soru sormaktan çekinmeyin, 
                        <br>${type} veya MBTI tipiniz arasındaki uyumlulukla ilgili olarak ${type} hakkında herhangi bir sorunuz varsa bana sorun.
                        <br>Lütfen önce MBTI tipinizi bana bildirin!
                        `);
  } else if (langType === 'uk') {
    botMessageProcessing(`Привіт! Мене звуть ${name}.
                        <br>Я є ${type}, що відноситься до типу Аналітиків. 
                        <br>Не соромтеся задавати мені будь-які питання щодо типу ${type}, 
                        <br>наприклад, будь-які питання, які ви маєте щодо ${type} або сумісності між ${type} та вашим типом MBTI.
                        <br>Спочатку, будь ласка, повідомте мені свій тип MBTI!
                        `);
  } else if (langType === 'vi') {
    botMessageProcessing(`Xin chào! Tên tôi là ${name}.
                        <br>Tôi là một ${type}, thuộc loại Người phân tích. 
                        <br>Hãy thoải mái hỏi tôi bất cứ điều gì về loại ${type}, 
                        <br>như bất kỳ câu hỏi nào bạn có về ${type} hoặc sự tương thích giữa ${type} và loại MBTI của bạn.
                        <br>Đầu tiên, xin vui lòng cho tôi biết loại MBTI của bạn!
                        `);
  } else if (langType === 'zh') {
    botMessageProcessing(`你好！我的名字是${name}。
                        <br>我是一名${type}，属于分析师类型。 
                        <br>请随意向我提问有关${type}类型的任何问题， 
                        <br>比如关于${type}或者你的MBTI类型与${type}之间的兼容性等等。
                        <br>首先，请告诉我你的MBTI类型！
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

// function scrollToBottom() {
//   //chatContainer 요소 변수 저장
//   const chatContainer = document.getElementById('chatContainer');
//   //chat-body 요소의 문서 높이를 저장
//   const chatContainerHeight = chatContainer.offsetHeight;
  
//   window.scrollTo({
//     top: chatContainerHeight,
//     behavior: 'smooth'
//   });
// }