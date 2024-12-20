import React from "react";
import { MdDeleteSweep } from "react-icons/md";

export const TaskItem = ({ task, deleteTask, toggleCheck }) => {
  return (
    <li className="items">
      <div className="item-text">
        <input
          type="checkbox"
          checked={task.checked}
          onChange={() => toggleCheck(task.taskName)}
        />
        <p className={task.checked ? "isChecked" : ""}>{task.taskName}</p>
      </div>
      <MdDeleteSweep
        className="delete-icon"
        onClick={() => deleteTask(task.taskName)}
      />
    </li>
  );
};
