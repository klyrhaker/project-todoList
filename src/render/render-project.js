import { renderTodo } from "./render-todo.js";

//создаем функцию рендера проекта которая принимает объект с методами из createProject
export function renderProject(project) {
  //создаем родительский див куда будем складывать все туду
  const projectEl = document.createElement("div");
  projectEl.classList.add("project-container");

  //создаем заголовок с названием взятым из имени проекта и добавляем его в родительский див
  const title = document.createElement("h2");
  title.textContent = project.name;
  projectEl.append(title);

  //создаем кнопку удаления проекта.
  const deleteProjectBtn = document.createElement("button");
  deleteProjectBtn.classList.add("delete-project-btn");
  deleteProjectBtn.classList.add("delete");
  deleteProjectBtn.classList.add("form-el");
  deleteProjectBtn.textContent = "Удалить проект";
  //присваиваем ей датасет айди из айди проекта
  deleteProjectBtn.dataset.id = project.id;
  projectEl.append(deleteProjectBtn);

  //создаем туду лист для размещения в нем всех туду содержащихся в проекте
  const todoList = document.createElement("div");
  todoList.classList.add("todo-list");

  //делаем цикл для перебора всех туду содержащихся в хранилище проекта
  for (let todo of project.arr) {
    //рендерим туду и добавляем на кажжой итерации в наш туду лист див
    todoList.append(renderTodo(todo));
  }
  //добавляем в родительский див тудулист и ретерним родительский див
  projectEl.append(todoList);

  return projectEl;
}
