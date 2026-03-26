export function renderTodo(todo) {
  const todoEl = document.createElement("div");
  todoEl.classList.add("todo-item");
  const doneInput = document.createElement("input");

  doneInput.type = "checkbox";

  const deleteTodoBtn = document.createElement("button");
  deleteTodoBtn.dataset.id = todo.id;
  deleteTodoBtn.textContent = "X";
  deleteTodoBtn.classList.add("deleteTodoBtn");

  const description = document.createElement("textarea");
  description.disabled = true;
  description.classList.add("description");
  description.textContent = todo.description;

  const titleTodo = document.createElement("input");
  titleTodo.type = "text";
  titleTodo.disabled = true;
  titleTodo.classList.add("titleTodo");
  titleTodo.value = todo.title;

  const priorityTodo = document.createElement("select");
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

  priorityTodo.value = todo.priority;

  const dueDateTodo = document.createElement("input");
  dueDateTodo.disabled = true;
  dueDateTodo.type = "date";
  dueDateTodo.value = todo.dueDate;

  const editBtn = document.createElement("button");
  editBtn.textContent = "edit";
  editBtn.classList.add("edit-btn");

  todoEl.append(titleTodo);
  todoEl.append(description);
  todoEl.append(priorityTodo);
  todoEl.append(deleteTodoBtn);
  todoEl.append(doneInput);
  todoEl.append(dueDateTodo);
  todoEl.append(editBtn);
  return todoEl;
}
