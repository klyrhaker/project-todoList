import { createTodo } from "../core/todo.js";
import { createProject } from "../core/project.js";
import { renderTodo } from "./render-todo.js";
import { renderProject } from "./render-project.js";
import { saveState, loadState } from "../core/storage.js";

import {
  getState,
  getActiveProject,
  setActiveProject,
  removeProject,
  addProject,
} from "../core/app-state.js";

const formProject = document.getElementById("form-project");
const selectProject = document.getElementById("select-project");
const projectName = document.getElementById("project-name");

const sideBtn = document.getElementById("side-btn");
const sideBar = document.getElementById("side-bar");

const add = document.getElementById("add");
const title = document.getElementById("title");
const description = document.getElementById("description");
const done = document.getElementById("done");
const dueDate = document.getElementById("due-date");
const selectTodo = document.getElementById("select-todo");
const priority1 = document.getElementById("priority1");
const priority2 = document.getElementById("priority2");
const priority3 = document.getElementById("priority3");

function handleProject(todo) {
  const name = projectName.value;
  const state = getState();

  for (let i = 0; i < state.length; i++) {
    if (name === state[i].name) {
      const project = state[i];
      project.addTodo(todo);

      setActiveProject(project);
      const todoEl = renderTodo(todo);
      sideBar.append(todoEl);
      return;
    }
  }
  const project = createProject(name);
  project.addTodo(todo);
  addProject(project);
  renderSelectOptions();
  setActiveProject(project);
  const projectEl = renderProject(project);
  sideBar.append(projectEl);
  if (Array.from(selectProject.options).find((opt) => opt.value === name))
    return;
}

function handleTodo() {
  add.addEventListener("click", (e) => {
    e.preventDefault();

    if (!title.value || !description.value || !dueDate.value) {
      alert("Заполните поля");
      return;
    }

    const todo = createTodo({
      title: title.value,
      description: description.value,
      dueDate: dueDate.value,
      priority: selectTodo.value,
    });

    const nameValue = projectName.value?.trim();

    if (!nameValue) {
      let project = getActiveProject();

      if (!project || getState().length === 0) {
        project = createProject("General");
        addProject(project);
        setActiveProject(project);
      }

      project.addTodo(todo);

      sideBar.innerHTML = "";
      sideBar.append(renderProject(project));

      renderSelectOptions();
    } else {
      handleProject(todo);
    }

    saveState(getState());
    resetInputs();
  });
}
function resetInputs() {
  selectTodo.value = "low";
  title.value = "";
  description.value = "";
  projectName.value = "";
  dueDate.value = "";
}

function deleteProjectHandle() {
  sideBar.addEventListener("click", (e) => {
    if (!e.target.classList.contains("delete-project-btn")) return;

    const id = e.target.dataset.id;
    const state = getState();
    const projectToRemove = state.find((p) => p.id === id);

    if (projectToRemove) {
      removeProject(projectToRemove);
      saveState(getState());

      renderSelectOptions();

      if (getActiveProject()?.id === id) {
        sideBar.innerHTML = "";
        const newState = getState();
        if (newState.length > 0) {
          setActiveProject(newState[0]);
          sideBar.append(renderProject(newState[0]));
        }
      } else {
        sideBar.innerHTML = "";
        sideBar.append(renderProject(getActiveProject()));
      }
    }
  });
}

function deleteTodo() {
  sideBar.addEventListener("click", (e) => {
    if (e.target.classList.contains("deleteTodoBtn")) {
      const deleteTodoBtn = e.target;

      const id = deleteTodoBtn.dataset.id;
      const state = getState();
      for (let i = 0; i < state.length; i++) {
        const projects = state[i];

        for (let todo of projects.arr) {
          if (id === todo.id) {
            projects.removeTodo(todo);
            e.target.closest("div").remove();
            saveState(getState());
            break;
          }
        }
      }
    }
  });
}
function renderSelectOptions() {
  selectProject.innerHTML = "";
  let stateName = [];
  const state = getState();
  for (let i = 0; i < state.length; i++) {
    stateName.push(state[i].name);
  }
  for (let j = 0; j < stateName.length; j++) {
    const option = document.createElement("option");
    option.textContent = stateName[j];
    option.value = stateName[j];
    selectProject.append(option);
  }
}
function handleSelectOptions() {
  selectProject.addEventListener("change", (e) => {
    const name = selectProject.value;
    const state = getState();
    for (let i = 0; i < state.length; i++) {
      if (name === state[i].name) {
        setActiveProject(state[i]);
        const active = getActiveProject();
        const project = renderProject(active);
        sideBar.innerHTML = "";
        sideBar.append(project);
      }
    }
  });
}
function movieTodoHandler() {
  sideBar.addEventListener("click", (e) => {
    if (e.target.classList.contains("edit-btn")) {
      //добавить создание дом елемента со списком всех доступных проектов и при нажатии на какой-то из них использование метода movieProject();
    }
  });
}

deleteTodo();
export {
  handleTodo,
  sideBar,
  selectProject,
  renderSelectOptions,
  handleSelectOptions,
  deleteProjectHandle,
};
