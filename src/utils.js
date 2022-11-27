import axios from "axios";
const url = "https://jsonplaceholder.typicode.com";

const getAll = async (name) => {
  const { data } = await axios.get(`${url}/${name}`);
  return data;
};

/**Delete */

const deleteById = (id, databese) => {
  return databese.filter((item) => item.id !== id);
};
const deleteByUserId = (id, databese) => {
  return databese.filter((item) => item.userId !== id);
};
const deleteAllData = (id, users, todos, posts) => {
  const newUsers = deleteById(id, users);
  const newTodos = deleteByUserId(id, todos);
  const newPosts = deleteByUserId(id, posts);
  return { newUsers, newTodos, newPosts };
};

/**Update */
const updateData = (id, update, database) => {
  const newData = database.map((data) => {
    if (id === data.id) {
      return { ...data, ...update };
    }
    return data;
  });
  return newData;
};
/**Add New */
const addNewItem = (data, database) => {
  const newData = [...database, data];
  return newData;
};

export { getAll, deleteById, deleteAllData, updateData, addNewItem };
