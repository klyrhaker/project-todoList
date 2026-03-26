import { renderTodo } from "./render-todo.js";

export function renderProject(project) {
  const projectEl = document.createElement("div");

  projectEl.classList.add("project-container");

  const title = document.createElement("h2");
  title.textContent = project.name;
  projectEl.append(title);

 
  const deleteProjectBtn = document.createElement("button");
  deleteProjectBtn.classList.add("delete-project-btn");
  deleteProjectBtn.textContent = "Удалить проект"; // Сделаем текст понятнее
  deleteProjectBtn.dataset.id = project.id;
  projectEl.append(deleteProjectBtn);

 
  const todoList = document.createElement("div");
  todoList.classList.add("todo-list");

  for (let todo of project.arr) {
    todoList.append(renderTodo(todo));
  }

  projectEl.append(todoList);

  return projectEl;
}
