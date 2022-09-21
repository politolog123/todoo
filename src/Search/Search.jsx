import React, { useState } from "react";
import classes from "./Search.module.css";
import { v4 as uuidv4 } from "uuid";
import { Col, Row, Button, InputGroup, FormControl } from "react-bootstrap";

const Search = (props) => {
  return (
    <Row>
      <Col className={classes.input}>
        <FormControl
          onChange={({ target: { value } }) => props.search(value)}
          type="text"
          placeholder="Search here..."
        />
      </Col>
    </Row>
  );
};
export default Search;
