let state = [];
let active = null;

const getState = () => {
  return [...state];
};
const addProject = (project) => {
  if (state.includes(project)) return;
  state.push(project);
  return state;
};
const removeProject = (project) => {
  if (!state.includes(project)) return;
  const index = state.indexOf(project);
  state.splice(index, 1);
  return state;
};
const setActiveProject = (project) => {
  active = project;
  return active;
};
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
