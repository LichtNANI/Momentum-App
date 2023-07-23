const clock = document.querySelector("#clock");

// clock.innerText = "lalalalala";
// interval : 매번 일어나야 하는 무언가.

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}`;
}

getClock();
setInterval(getClock, 1000);

// setInterval(): 두개의 인자를 받음, (실행할 함수, 함수를 실행시킬 시간 간격(ms))
// setTimeout(): 두개의 인자(실행할 함수, 함수를 실행하기 위해 기다릴 시간(ms))
// padStart(): 두개의 인자를 받음(원하는 string의 길이, 원하는 string의 길이보다 짧을 경우 추가할 string)
// padEnd() : 뒤로 추가
