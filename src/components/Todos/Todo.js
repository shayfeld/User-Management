import { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Todo = (props) => {
  const { callbacks } = props;
  const { todo } = props;

  return (
    <div
      className="m-3"
      style={{
        border: "1px solid purple",
      }}
    >
      <Row>
        <Col className="ms-2" sm={2}>
          Title:
        </Col>
        <Col className="me-4">{todo.title}</Col>
      </Row>
      <Row>
        <Col className="ms-2" sm={2}>
          Completed:
        </Col>
        <Col className="me-4 mb-1">
          {todo.completed ? "Ture" : "False"}
          {todo.completed ? null : (
            <Button
              className="ms-1"
              variant="primary"
              size="sm"
              onClick={() => callbacks.MarkTodo(todo.id)}
            >
              Mark Completed
            </Button>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Todo;
