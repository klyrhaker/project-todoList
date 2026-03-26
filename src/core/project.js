export function createProject(name) {
  let arr = [];
  const id = crypto.randomUUID();
  const addTodo = (todo) => {
    if (arr.includes(todo)) return null;
    arr.push(todo);
  };
  const removeTodo = (todo) => {
    if (!arr.includes(todo)) return null;
    const index = arr.indexOf(todo);
    arr.splice(index, 1);
    return arr;
  };
  const movieTodo = (todo, targetProject) => {
    if (targetProject.arr.includes(todo)) return null;
    targetProject.addTodo(todo);
    removeTodo(todo);
  };

  return { arr, name, addTodo, removeTodo, movieTodo, id };
}
