const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos";
let toDos = [];

function deleteToDo(event) {
  const li = event.target.parentElement;
  toDos = toDos.filter((todo) => todo.id.toString() !== li.id);
  li.remove();
  saveToDo();
}

function saveToDo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

/**
 * @param {text: string, id: number} newTodo
 */
function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
  };
  toDos.push(newTodoObj);
  toDoInput.value = "";
  paintToDo(newTodoObj);
  saveToDo();
}

toDoForm.addEventListener("submit", handleTodoSubmit);

const savedToDo = localStorage.getItem(TODOS_KEY);
if (savedToDo) {
  const parsedToDos = JSON.parse(savedToDo);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
