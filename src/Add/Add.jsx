import React, { useState } from "react";
import { Col, Row, Button, InputGroup, FormControl } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import classes from "./Add.module.css";

const Add = ({ setTodoo, todoList }) => {
  let [value, setValue] = useState("");

  const search = (val) => {
    if (val) {
      const newList = todoList.filter((todo) => {
        return todo.title.includes(val);
      });
      setTodoo(newList);
    } else {
      setTodoo(JSON.parse(localStorage.getItem("lists")));
    }
  };

  function saveTodoo() {
    const newTask = {
      id: uuidv4(),
      title: value,
      status: true,
    };

    const newarray = [...todoList, newTask];

    setTodoo(newarray);

    setValue("");

    if (todoList?.length > 0) {
      localStorage.setItem("lists", JSON.stringify(todoList));
    }
  }

  return (
    <Row>
      <Col className={classes.inp}>
        <FormControl
          placeholder="search"
          // value={}
          onChange={(e) => search(e.target.value)}
        />
        {/* <Button onclick={search1}>Search</Button> */}
        <FormControl
          className={classes.input}
          placeholder="Input task"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button onClick={saveTodoo}>Save</Button>
      </Col>
    </Row>
  );
};

export default Add;
