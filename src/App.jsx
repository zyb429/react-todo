import { useState } from "react";
import "./index.css";
import TaskInput from "./components/TaskInput";
import { TaskItem } from "./components/TaskItem";
import Stats from "./components/Stats";

function App() {
  const [toDoList, setToDoList] = useState([]);

  const addTask = (taskName) => {
    const newTask = { taskName, checked: false };
    setToDoList([...toDoList, newTask]);
  };

  function deleteTask(deleteTask) {
    setToDoList(toDoList.filter((task) => task.taskName !== deleteTask));
  }

  function toggleCheck(taskName) {
    setToDoList((prevToDoList) =>
      prevToDoList.map((task) =>
        task.taskName === taskName ? { ...task, checked: !task.checked } : task
      )
    );
  }

  console.log(toDoList);

  return (
    <>
      <div className="container">
        <h1>Task master</h1>
        <TaskInput addTask={addTask} />
        <div className="toDoList">
          <span>To do</span>
          <ul className="list-items">
            {toDoList.map((task, key) => (
              <TaskItem
                task={task}
                key={key}
                deleteTask={deleteTask}
                toggleCheck={toggleCheck}
              />
            ))}
          </ul>
          {toDoList.length === 0 ? (
            <p className="notify">You are done!</p>
          ) : null}
        </div>
      </div>
      <Stats toDoList={toDoList} />
    </>
  );
}

export default App;
