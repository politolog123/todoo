import React from "react";
import { Col, Row } from "react-bootstrap";
import classes from "./Display.module.css";
const Display = () => {
  return (
    <Row>
      <Col>
        <div className={classes.header}>TODO LIST</div>
      </Col>
    </Row>
  );
};

export default Display;
