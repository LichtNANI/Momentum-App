const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
document.getElementsByClassName;
document.getElementById;

const TODOS_KEY = "todos";

let toDos = [];

// JSON.stringify(): 인자안에 데이터를 string으로 바꿔줌
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// todo 즉, 이벤트리스너가 실행된 spanTag의 id와 다른 li의 아이디를 toDos로 저장.
// id는 Number이고 localStorege의 toDos는 string이기때문에 parseInt로 strinf=>number
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  saveToDos();
}

function clickCheckBox(event) {
  const li = event.target.parentElement;
  li.querySelector(".todo-text").classList.toggle("checked");
  saveToDos();
}

// toDoList>li>span,button 생성
// 클라이언트가 적은 todo text를 spanText로 지정
// button을 클릭하면 deleteToDo Function 실행
function paintToDo(todoValue) {
  const li = document.createElement("li");
  li.id = todoValue.id;
  const span = document.createElement("span");
  span.classList.add("todo-text");
  span.innerText = todoValue.text;
  const button = document.createElement("button");
  button.classList.add("todo-button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("todo-checkbox");
  checkbox.addEventListener("click", clickCheckBox);
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
  if (todoValue.checked) {
    span.classList.add("checked");
  }
}

// submit시 기본동작 정지
// input.value를 변수로 지정하고 input값을 ""로 비워줌
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// 파이썬 리스트컴프리헨션같이 간결하게 coding할 수 있음
// => arrow function(화살표 함수)
// JSON.parse(): 다시 string이 아닌 js에서만 사용 가능한 object로 만들어줌
// 밑의 경우 array로 return됨
// parsedToDos.forEach((item) => console.log("this is the turn if", item));
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

// filter: True를 return한 값만 출력
// ex) arr = [1,2,3,4,5]가 있고
// function filter(item) {return item !== 3}
// arr.filter(filter)를 했을때 3이 아닌 것들을 return해 같은 arr에서 작업하는게 아닌
// 새로운 arr을 다시 만들어줌

// preventDefault()함수로submit시 form이 새로고침되는 기본동작을 멈추고
// input.value를 변수로 저장해준 뒤 input.value값을 지워준다.
// target: 클릭된 HTML의 Element
// parentElement: HTML element당 하나이상은 꼭 있는 property

// localstorage에는 array를 저장할 수 없음. 오직 텍스트만 저장가능
// forEach(): 각각 인덱스에 대해 (function)을 실행시켜줌
