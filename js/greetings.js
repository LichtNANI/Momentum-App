const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// 관습, 일반적으로 string만 포함된 변수는 대문자 + 중요한 변수가 아니라서
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  // localStorage.setItem("저장될 이름", 변수)
  localStorage.setItem(USERNAME_KEY, username);
  // greeting.innerText = "Hello " + username;
  // string이랑 변수를 합치는 방법, 변수를 string 안에 포함시키는 방법
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}

// local storage: 정보를 저장하고 불러오고 삭제하는 브라우저가 가지고 있는 작은 DB같은 API
// localStorage.get으로 불러오면 "string" 형태로 출략됨
// display:none : 공간자체가 할당되지 않음.
// visibility:hidden : 공간은 할당되어 있지만 보이지 않음
// string 오타시 자바스크립트가 알려주지 않음.
// 하지만 변수 이름이 틀린 경우 알려줌. 자주 쓰는 string은 변수로 지정하자.

// 리뷰
// localStorage 키에 username이 없다면 loginForm의 hidden class를 remove해준뒤
// loginForm이 submit된다면 onLoginSubmit함수 실행
// 브라우저의 기본 동작을 멈춰 submit시 새로고침 되는 기능을 멈춘 뒤 다시 hidden class 추가
// 입력된 정보를 localStorage에 key와 value로 저장한 뒤
// greeting class를 가진 h1에 메시지를 추가하고 hidden값을 remove해 메시지를 출력해주는
// paintGreetings함수를 실행.
// 만약 localStorage 키에 username이 있다면 paintGreetings()의 인자를
// 저장되어 있는 localStorage의 username으로 실행
