//создаем данные state единственный источник истины
//и создаем активный проект со значением null
let state = [];
let active = null;

//создаем метод возврата копии state
const getState = () => {
  return state;
};

//создаем метод добавления проекта в state
const addProject = (project) => {
  //проверка на наличие проекта в state , если есть то ретерним, если нет то пушим в state
  if (state.includes(project)) return;
  state.push(project);
  return state;
};

//создаем метод удаления проекта из state
const removeProject = (project) => {
  //если его там нет то ретерним
  if (!state.includes(project)) return;

  //если есть то берем его индекс из state
  const index = state.indexOf(project);
  //и удаляем с помощью мутирующего метода splice, который принмает два аргумента : первый индекс с которого нужно начать удаление, второй сколько элементов нужно удалить
  state.splice(index, 1);
  //возвращаем обновленный state
  return state;
};

//cоздаем метод установки активного проекта
const setActiveProject = (project) => {
  active = project;
  return active;
};
//метод возврата активного проекта
const getActiveProject = () => {
  return active;
};
export {
  getState,
  getActiveProject,
  setActiveProject,
  removeProject,
  addProject,
};
