import "./styles.css";
import {
  handleTodo,
  sideBar,
  renderSelectOptions,
  handleSelectOptions,
  deleteProjectHandle,
  editTodoHandle,
} from "./render/controller.js";
import { createProject } from "./core/project.js";
import { renderProject } from "./render/render-project.js";
import { loadState } from "./core/storage.js";
import { getState, setActiveProject, addProject } from "./core/app-state.js";
import { createTodo } from "./core/todo.js";

// Только создаем объект
function createDefault() {
  return createProject("General");
}

// создаем функцию загрузки данных из localstorage
function storageLoad() {
  const projects = loadState(); // берем все объекты из localStorage

  if (projects.length === 0) {
    // 1. Создаем General, если пусто
    const project = createDefault();
    addProject(project);
  } else {
    // 2. Восстанавливаем данные из localStorage
    for (let i = 0; i < projects.length; i++) {
      const projectData = projects[i];
      const project = createProject(projectData.name);

      for (let todoData of projectData.arr) {
        const todo = createTodo(todoData);
        project.addTodo(todo);
      }
      addProject(project);
    }
  }

  // 3. ЕДИНАЯ ТОЧКА РЕНДЕРА ПОСЛЕ ЗАГРУЗКИ
  const allProjects = getState();
  if (allProjects.length > 0) {
    const firstProject = allProjects[0];
    setActiveProject(firstProject);

    sideBar.innerHTML = "";
    sideBar.append(renderProject(firstProject));

    renderSelectOptions();
  }
}

editTodoHandle();
handleTodo();
storageLoad();
deleteProjectHandle();
handleSelectOptions();
