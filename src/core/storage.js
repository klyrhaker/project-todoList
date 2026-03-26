const saveState = (state) => {
  localStorage.setItem("state", JSON.stringify(state));
};
const loadState = () => {
  const data = localStorage.getItem("state");
  if (data === null) return [];
  return JSON.parse(data);
};
export { saveState, loadState };
