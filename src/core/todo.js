export function createTodo({ title, description, dueDate, priority }) {
  let done = false;
  const id = crypto.randomUUID();
  const toggle = () => {
    done = !done;
  };
  return { toggle, title, description, dueDate, priority, done, id };
}
