//функция создания проекта принимающая его название
export function createProject(name) {
  //сохжаем хранилище для будущих туду
  let arr = [];

  //создаем уникальный id
  const id = crypto.randomUUID();

  //создаем метод добавления туду в хранилище если его там нет
  const addTodo = (todo) => {
    if (arr.includes(todo)) return null;
    arr.push(todo);
  };

  //создаем метод удаления туду если оно там есть
  const removeTodo = (todo) => {
    if (!arr.includes(todo)) return null;
    //используем индексацию и метод splice
    const index = arr.indexOf(todo);
    arr.splice(index, 1);
    //возвращаем обновленное хранилище
    return arr;
  };

  //создаем метод перетаскивания туду с текущего проекта на другой
  //принимает туду который хотим перетащить и проект куда хотим перетащить
  const movieTodo = (todo, targetProject) => {
    if (targetProject.arr.includes(todo)) return null;
    targetProject.addTodo(todo);
    removeTodo(todo);
  };

  return { arr, name, addTodo, removeTodo, movieTodo, id };
}
