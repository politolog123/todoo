import React, { useState, useEffect } from "react";
import classes from "./Task.module.css";
import {
  Col,
  Row,
  Button,
  InputGroup,
  FormControl,
  ButtonGroup,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faTrash,
  faLock,
  faPenToSquare,
  faLockOpen,
} from "@fortawesome/free-solid-svg-icons";
const Task = ({ todoo, setTodoo }) => {
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState("");
  const [status, setStatus] = useState(todoo);

  useEffect(() => {
    setStatus(todoo);
  }, [todoo]);

  function allTask(status) {
    if (status === "All") {
      setStatus(todoo);
    } else {
      const newStatus = [...todoo].filter((item) => item.status === status);
      setStatus(newStatus);
    }
  }

  function deleteTodoo(id) {
    let newTodo = [...todoo].filter((item) => item.id != id);
    setTodoo(newTodo);
  }

  function closeTask(id) {
    let newTodoo = [...todoo].filter((item) => {
      if (item.id == id) {
        item.status = !item.status;
      }
      return item;
    });
    setTodoo(newTodoo);
  }
  function changeTask(id, title) {
    setEdit(id);
    setValue(title);
  }

  function saveTodoo(id) {
    let newTodoo = [...todoo].map((element) => {
      if (element.id == id) {
        element.title = value;
      }
      return element;
    });
    setTodoo(newTodoo);
    setEdit(null);
  }

  return (
    <div className={classes.task}>
      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary" onClick={() => allTask("All")}>
          All
        </Button>
        <Button variant="secondary" onClick={() => allTask(true)}>
          Completed
        </Button>
        <Button variant="secondary" onClick={() => allTask(false)}>
          Outstanding
        </Button>
      </ButtonGroup>
      {status.map((item) => (
        <div className={classes.elements} key={item.id}>
          {edit == item.id ? (
            <div>
              <FormControl
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
          ) : (
            <div className={!item.status ? classes.close : ""}>
              {item.title}
            </div>
          )}
          {edit == item.id ? (
            <div>
              <Button
                className={classes.btn}
                onClick={() => saveTodoo(item.id)}
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </Button>
            </div>
          ) : (
            <div>
              <Button onClick={() => deleteTodoo(item.id)}>
                <FontAwesomeIcon icon={faTrash} />
              </Button>
              <Button
                className={classes.btn}
                onClick={() => closeTask(item.id)}
              >
                {item.status ? (
                  <FontAwesomeIcon icon={faLockOpen} />
                ) : (
                  <FontAwesomeIcon icon={faLock} />
                )}
              </Button>
              <Button
                className={classes.btn}
                onClick={() => changeTask(item.id, item.title)}
              >
                <FontAwesomeIcon icon={faPenToSquare} />
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Task;
