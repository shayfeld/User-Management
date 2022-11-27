import { useState, useEffect } from "react";

const TaskCheck = ({ id, todos, callback }) => {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const CheckComplete = () => {
      const tasks = todos?.filter((todo) => todo.userId === id);
      const tasksIsComplete = todos?.filter(
        (todo) => todo.userId === id && todo.completed === true
      );
      if (tasks.length === tasksIsComplete.length) {
        /**Tasks completed */
        setIsComplete(true);
      } else {
        setIsComplete(false);
      }
      callback(isComplete);
    };
    CheckComplete();
  });
  return <div></div>;
};

export default TaskCheck;
