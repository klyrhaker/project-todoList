//создаем метод сохранения state в хранилище lokalStorage
const saveState = (state) => {
  //используем встроенные функции добавляет в localStorage наш стейт
  //перед добавлением нужно создать ключ где значением будет наш state
  //преобразуем в json строки наш state иначе выйдет ошибка
  localStorage.setItem("state", JSON.stringify(state));
};
//создаем метод получения данных из localStorage
const loadState = () => {
  //создаем константу data со значением из локального хранилища
  const data = localStorage.getItem("state");
  //делаем проверку если оно пустое то возвращаем массив, чтобы наш код в дальнешем не ломался
  if (data === null) return [];
  //если не пустое возвращаем преобразованные данные из json строк в изначльный вид
  return JSON.parse(data);
};
export { saveState, loadState };
