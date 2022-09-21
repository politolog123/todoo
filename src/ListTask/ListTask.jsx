import React from "react";
import classes from "./ListTask.module.css";

const ListTask = ({ todos }) => {
  return (
    <div>
      {todos.map((element) => (
        <div>{element}</div>
      ))}
    </div>
  );
};
export default ListTask;
