import React, { useState, useEffect } from "react";
import Display from "./Display/Display";
import "./App.css";
import Add from "./Add/Add";
import Task from "./Task/Task";
import { Container } from "react-bootstrap";
import Search from "./Search/Search";
import ListTask from "./ListTask/ListTask";

function App() {
  const [todoList, setTodoo] = useState([]);

  useEffect(() => {
    setTodoo(getLocalItems());
  }, []);

  const getLocalItems = () => {
    const lists = JSON.parse(localStorage.getItem("lists")) ?? [];
    console.log(lists);

    return lists;
  };

  return (
    <Container>
      <Display />
      <Add todoList={todoList} setTodoo={setTodoo} />
      {todoList.length > 0 && <Task todoo={todoList} setTodoo={setTodoo} />}
    </Container>
  );
}

export default App;
