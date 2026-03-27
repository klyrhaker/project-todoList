import { createTodo } from "../core/todo.js";
import { createProject } from "../core/project.js";
import { renderProject } from "./render-project.js";
import { saveState } from "../core/storage.js";

import {
  getState,
  getActiveProject,
  setActiveProject,
  removeProject,
  addProject,
} from "../core/app-state.js";

const selectProject = document.getElementById("select-project");
const projectName = document.getElementById("project-name");

const sideBar = document.getElementById("side-bar");

const add = document.getElementById("add");
const title = document.getElementById("title");
const description = document.getElementById("description");
const dueDate = document.getElementById("due-date");
const selectTodo = document.getElementById("select-todo");

// создаем функцию отрисовки проекта которая принимает в себя аргументом данные из createTodo
function handleProject(todo) {
  // создаем переменную и записываем туда данные из валью инпута ,убираем лишние пробелы и приводим все к нижнему регистру для исключения дуюликатов
  const name = projectName.value.toLowerCase().trim();
  if (!name) return; // Если имя пустое, ничего не делаем

  const state = getState(); // создаем переменную и кладем в нее данные из источника истины state

  // 1. Ищем проект в данных state ОДИН РАЗ в самом начале
  const existingProject = state.find((project) => project.name === name);

  if (existingProject) {
    // ЕСЛИ НАШЛИ: работаем с существующим
    existingProject.addTodo(todo); // добавляем в существующий проект новый туду
    setActiveProject(existingProject); // делаем этот проект активным

    // Перерисовываем проект целиком, чтобы всё было актуально
    sideBar.innerHTML = "";
    sideBar.append(renderProject(existingProject));
    return; // Выходим
  }

  // 2. ЕСЛИ НЕ НАШЛИ: создаем новый (этот код выполнится, только если return не сработал)
  const newProject = createProject(name);
  newProject.addTodo(todo); // добавляем туду в новый проект
  addProject(newProject); // добавляем этот проект в state

  setActiveProject(newProject); // делаем его активным
  renderSelectOptions(); // Обновляем список выбора проектов в селекте

  sideBar.innerHTML = ""; // очищаем сайд бар
  sideBar.append(renderProject(newProject)); // и добавляем туда наш проект
}

//создаем функцию отрисовки туду
function handleTodo() {
  // вешаем событие слушателя на кнопку add
  add.addEventListener("click", (e) => {
    // отменяем дефолтное поведение отправки
    e.preventDefault();

    // делаем проверку на ввод : если эти поля пустые то кидаем всплывающуб надпись и прекращаем работу функции
    if (!title.value || !description.value || !dueDate.value) {
      alert("Заполните поля");
      return;
    }

    // создаем туду с помощью createTodo помещаяю туда дааные из формы
    const todo = createTodo({
      title: title.value,
      description: description.value,
      dueDate: dueDate.value,
      priority: selectTodo.value,
    });

    // создаем переменную и записываем туда данные из валью инпута ,убираем лишние пробелы и приводим все к нижнему регистру для исключения дуюликатов
    const nameValue = projectName.value?.toLowerCase().trim();

    // если оно пустое :
    if (!nameValue) {
      // создаем переменную в которую записываем активный проект
      let project = getActiveProject();

      // если активного проекта нет  или в state нет объектов :
      if (!project || getState().length === 0) {
        // создаем дефолтный проект и добавляем его в state затем делаем активным
        project = createProject("General");
        addProject(project);
        setActiveProject(project);
      }

      // добавляем в проект todo
      project.addTodo(todo);

      // очищаем сайд бар и добавляем в него отрендированный проект
      sideBar.innerHTML = "";
      sideBar.append(renderProject(project));

      // Обновляем список выбора проектов в селекте
      renderSelectOptions();

      // если есть активный проект и state не пустой то вызываем handleProject с аргументом todo
    } else {
      handleProject(todo);
    }

    // сохраняем в localStorage наш текущий стейт и очищаем инпуты
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

// создаем функцию удаления проекта
function deleteProjectHandle() {
  // вешаем событие слушателя на сайд бар потому что кнопка удаления добавляется туда при рендере проекта
  sideBar.addEventListener("click", (e) => {
    // если кликнули не по кнопке удаления то завершаем работу функции
    if (!e.target.classList.contains("delete-project-btn")) return;

    // если клик был по кнопке то :
    // создаем константу id со значением датасета из кликнутой кнопки
    const id = e.target.dataset.id;

    // создаем константу с текущими данными из источника истины
    const state = getState();

    // ищем совпадение датасета кнопки в стейте у проекта с таким же id и присваеваем булево константе
    const projectToRemove = state.find((p) => p.id === id);

    // если такой проект есть то:
    if (projectToRemove) {
      // удалаем этот проект из стейта
      removeProject(projectToRemove);

      // обновляем localStorage
      saveState(getState());

      // Обновляем список выбора проектов в селекте
      renderSelectOptions();

      // если id активного проекта равно датасету кликнутой кнопки то
      if (getActiveProject()?.id === id) {
        sideBar.innerHTML = ""; // очищаем сайд бар
        const newState = getState(); // берем стейт и записываем его в переменную
        if (newState.length > 0) {
          // если стейт не пустой
          setActiveProject(newState[0]); // устанавоиваем активным проектом первый объект в стейте
          sideBar.append(renderProject(newState[0])); // добавляем первый объект в стейте в сайд бар с помощью рендера проектов
        }
      } else {
        // если айди активного проекта не равно датасету кнопки то
        sideBar.innerHTML = ""; // очищаем сайд бар
        sideBar.append(renderProject(getActiveProject())); // рендерим активный проект
      }
    }
  });
}

// создаем функцию удаления туду
function deleteTodo() {
  // вешаем слушатель событий на сайдбар
  sideBar.addEventListener("click", (e) => {
    // если кликнули по кнопке удаления туду то
    if (e.target.classList.contains("deleteTodoBtn")) {
      // cоздаем переменную id  и присваеваем ей датасет кликнутой кнопки
      const id = e.target.dataset.id;
      const state = getState(); // берем текущий стейт и записываем его в переменную
      for (let i = 0; i < state.length; i++) {
        const projects = state[i]; // на каждой итерации создаем проект из стейта

        for (let todo of projects.arr) {
          // добавляем еще один цикл чтобы пройтись по туду в проекте
          if (id === todo.id) {
            // если датасет кнопки равен id туду из проекта то
            projects.removeTodo(todo); // удаляем это туду из проекта
            e.target.closest(".todo-item").remove(); // удаляем див с этим туду
            saveState(getState()); // сохраняем текущее state в localStorage
            break; // останавливаем цикл
          }
        }
      }
    }
  });
}

// создаем функцию рендера опций селекта проектов
function renderSelectOptions() {
  selectProject.innerHTML = ""; // очищаем селект
  let stateName = []; // создаем массив и для складывания имен проектов из стейта
  const state = getState(); // создаем переменную с текущим стейт
  for (let i = 0; i < state.length; i++) {
    stateName.push(state[i].name); // пушим  имя  проектов на каждой итерации
  }
  for (let j = 0; j < stateName.length; j++) {
    // создаем на каждой итерции опцию и присваеваем ей значения из нашего массива имен
    const option = document.createElement("option");
    option.textContent = stateName[j];
    option.value = stateName[j];
    selectProject.append(option);
  }
}

// создаем функцию отрисовки опций селекта проектов
function handleSelectOptions() {
  selectProject.addEventListener("change", (e) => {
    // вешаем слушатель событий реагирующий на изменение на селект проектов
    const name = selectProject.value; // создаем переменную с значением валью из выбранной опции в селекте проектов
    const state = getState(); // берем текущий стейт
    for (let i = 0; i < state.length; i++) {
      if (name === state[i].name) {
        // если текущий выбранный проект в селекте есть в стейте то
        setActiveProject(state[i]); // делаем его активным
        const active = getActiveProject(); // записываем его в переменную
        const project = renderProject(active); // рендерим наш проект
        sideBar.innerHTML = ""; // очищаем сайдбар
        sideBar.append(project); // и добавляем в него наш проект
      }
    }
  });
}

//создаем функцию редактирования туду
function editTodoHandle() {
  let enable = false; // создаем флаг состояния
  sideBar.addEventListener("click", (e) => {
    if (!e.target.classList.contains("edit-btn")) return; // если клик не по кнопке редактирования - завершаем функцию
    e.preventDefault(); // останавливаем дефолтное поведение

    if (!enable) {
      // если false то находим родительский див кликнутой кнопки
      const todoEl = e.target.closest(".todo-item");
      const editTable = todoEl.querySelectorAll(".editable"); //находим все элементы в диве с классом editable
      for (let edit of editTable) {
        edit.disabled = false; // делаем их редактируемыми
      }
      enable = true; // меняем флаг состояния на true
    } else {
      // если кликнули второй раз то
      const id = e.target.dataset.id; // берем датасет кликнутой кнопки
      const state = getState(); // берем текущий стейт
      for (let projects of state) {
        for (let todo of projects.arr) {
          if (id === todo.id) {
            // если есть совпадение то
            // присваиваем всем елементам новые значения из валью
            const todoEl = e.target.closest(".todo-item");
            const editTable = todoEl.querySelectorAll(".editable");
            todo.title = todoEl.querySelector(".titleTodo").value;
            todo.description = todoEl.querySelector(".description").value;
            todo.dueDate = todoEl.querySelector(".dueDateTodo").value;
            todo.priority = todoEl.querySelector(".priorityTodo").value;

            saveState(getState()); //обновляем localStorage
            enable = false; // меняем состояние
            for (let edit of editTable) {
              edit.disabled = true; // делаем не редактируемыми наши элементы
            }

            break; // останавоиваем цикл
          }
        }
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
  editTodoHandle,
};
