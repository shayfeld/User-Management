//import "../App.css";
import { useState, useEffect } from "react";
import Users from "./Users/Users";
import Todos from "./Todos/Todos";
import Posts from "./Posts/Posts";
import AddUser from "./Users/AddUser";
import { getAll, deleteAllData, updateData, addNewItem } from "../utils";
const Dashboard = () => {
  /** DB */
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [todos, setTodos] = useState([]);
  const [add, setAdd] = useState(false);
  const [userId, setUserId] = useState(0);

  /**Initialize DB */
  useEffect(() => {
    const getData = async () => {
      const usersData = await getAll("users");
      setUsers(usersData);
      const postsData = await getAll("posts");
      setPosts(postsData);
      const todosData = await getAll("todos");
      setTodos(todosData);
    };
    getData();
  }, []);

  /** Callbacks Functions */
  /** User Functions */
  const userFunctions = {
    pickedUser: (id) => {
      if (id === userId) setUserId(0);
      else setUserId(id);
    },
    NewUser: () => {
      setAdd(true);
    },
    DeleteUserData: (id) => {
      const { newUsers, newTodos, newPosts } = deleteAllData(
        id,
        users,
        todos,
        posts
      );
      setUsers(newUsers);
      setPosts(newTodos);
      setTodos(newPosts);
    },
    updateUser: (data) => {
      const id = data.id;
      const newUsers = updateData(id, data, users);
      setUsers(newUsers);
    },
  };
  /** Other Functions */
  const functions = {
    canceldUser: () => {
      setAdd(false);
    },
    addingUser: (data) => {
      let biggestId = 0;

      users.forEach((user) => {
        if (user.id > biggestId) biggestId = user.id;
      });
      const userData = {
        id: biggestId + 1,
        ...data,
        address: { city: "", street: "", zipcode: "" },
      };
      const newData = addNewItem(userData, users);
      setUsers(newData);
      setAdd(false);
    },
    addingPost: (data) => {
      const newData = addNewItem(data, posts);
      setPosts(newData);
    },
    addingTodo: (data) => {
      const newData = addNewItem(data, todos);
      setTodos(newData);
    },
    MarkTodo: (id) => {
      const newData = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: true };
        }
        return todo;
      });
      setTodos(newData);
    },
  };

  return (
    <div style={{ display: "flex" }}>
      <div className="left">
        <Users
          users={users}
          userID={userId}
          todos={todos}
          callbacks={userFunctions}
        />
      </div>

      {add ? (
        <div className="right ms-2">
          <AddUser callbacks={functions} />
        </div>
      ) : userId > 0 ? (
        <div className="right ms-2">
          <Todos id={userId} todos={todos} callbacks={functions} />
          <Posts id={userId} posts={posts} callbacks={functions} />
        </div>
      ) : null}
    </div>
  );
};

export default Dashboard;
