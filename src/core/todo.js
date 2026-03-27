// функцию создания туду которая приниает в сеья объект с данными
export function createTodo({
  title,
  description,
  dueDate,
  priority,
  id = crypto.randomUUID(),
}) {
  return { title, description, dueDate, priority, id };
}
