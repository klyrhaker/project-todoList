//создаем фукцию рендера туду, которая принимает обьект методов из createTodo, далее передадим его в контроллере
export function renderTodo(todo) {
  //создаем див куда будем помещать другие елементы
  const todoEl = document.createElement("div");
  todoEl.classList.add("todo-item");
  const btnTodo = document.createElement("div");
  btnTodo.classList.add("btn-todo-box");
  //создаем кнопку удаления туду
  const deleteTodoBtn = document.createElement("button");
  deleteTodoBtn.classList.add("btn-todo");
  deleteTodoBtn.classList.add("form-el");
  //присваиваем ей датасет айди из нашего объекта методов туду, чтобы в дальнейшем при нажатии на кнопку удалялся туду с таким айди из хранилища в проекте
  deleteTodoBtn.dataset.id = todo.id;
  deleteTodoBtn.textContent = "X";
  deleteTodoBtn.classList.add("deleteTodoBtn");
  deleteTodoBtn.classList.add("delete");
  //создаем элемент textarea  и делаем его нередактируемым disabled = true;
  const description = document.createElement("textarea");
  description.classList.add("text");
  description.classList.add("form-el");
  description.classList.add("editable");
  description.disabled = true;
  description.classList.add("description");

  //берем значение из todo и записываем его в наш элемент
  description.textContent = todo.description;

  //создаем инпут с типом text и делаем его disabled для того чтобы пользователь не мог изменить тект без нажатия на кнопку редакторивания
  const titleTodo = document.createElement("input");
  titleTodo.classList.add("text");
  titleTodo.classList.add("form-el");
  titleTodo.type = "text";
  titleTodo.classList.add("editable");
  titleTodo.disabled = true;
  titleTodo.classList.add("titleTodo");

  //берем значение из туду и записываем его в валью нашего элемента
  titleTodo.value = todo.title;

  //создаем селект и три опции также делаем их disabled
  const priorityTodo = document.createElement("select");
  priorityTodo.classList.add("editable");
  priorityTodo.classList.add("form-el");
  priorityTodo.classList.add("priorityTodo");
  priorityTodo.disabled = true;
  const option1 = document.createElement("option");
  option1.textContent = "low";
  option1.value = "low";
  const option2 = document.createElement("option");
  option2.textContent = "medium";
  option2.value = "medium";
  const option3 = document.createElement("option");
  option3.textContent = "high";
  option3.value = "high";

  priorityTodo.append(option1);
  priorityTodo.append(option2);
  priorityTodo.append(option3);

  //берем значение из туду и присваеваем его нашему селекту
  priorityTodo.value = todo.priority;

  //создаем инпут с типом date и делаем его disabled
  const dueDateTodo = document.createElement("input");
  dueDateTodo.classList.add("dueDateTodo");
  dueDateTodo.classList.add("form-el");
  dueDateTodo.classList.add("editable");
  dueDateTodo.disabled = true;
  dueDateTodo.type = "date";

  //берем значение из туду и присваеваем его в валью нашего элемента
  dueDateTodo.value = todo.dueDate;

  //создаем кнопку редакторования , в будущем при нажатии на которую все неактивные поля disabled = true станут disabled = false;
  const editBtn = document.createElement("button");
  editBtn.dataset.id = todo.id;
  editBtn.textContent = "edit";
  editBtn.classList.add("edit-btn");
  editBtn.classList.add("btn-todo");
  editBtn.classList.add("form-el");

  //добавляем все созданные элементы в див туду и ретерним его
  todoEl.append(titleTodo);
  todoEl.append(description);
  todoEl.append(priorityTodo);

  todoEl.append(dueDateTodo);
  btnTodo.append(deleteTodoBtn);
  btnTodo.append(editBtn);
  todoEl.append(btnTodo);

  return todoEl;
}
