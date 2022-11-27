import { useState } from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import { Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Todos = (props) => {
  const { id, todos, callbacks } = props;
  const [add, setAdd] = useState(false);
  const canceld = () => {
    setAdd(false);
  };
  const addNew = (title, body) => {
    callbacks.addingTodo({
      userId: id,
      id: todos[todos.length - 1].id + 1,
      title,
      completed: false,
    });
    setAdd(false);
  };
  const finish = (title) => {
    if (title.length > 0) {
      callbacks.addingTodo({
        userId: id,
        id: todos[todos.length - 1].id + 1,
        title,
        completed: false,
      });
    }
    setAdd(false);
  };

  return (
    <div>
      <Row className="mb-1 mt-3">
        <Col className="ms-3" align="start">
          Todos - User {id}
        </Col>
        {add ? null : (
          <Col>
            <Button variant="success" size="sm" onClick={() => setAdd(true)}>
              Add
            </Button>
          </Col>
        )}
      </Row>
      <div
        style={{
          width: "350px",
          height: "190px",
          overflowY: "scroll",
          border: "2px solid blue",
        }}
      >
        {add ? (
          <AddTodo callbacks={{ ...callbacks, canceld, addNew }} />
        ) : (
          todos.map((todo) => {
            if (todo.userId === id) {
              return <Todo key={todo.id} todo={todo} callbacks={callbacks} />;
            }
          })
        )}
      </div>
    </div>
  );
};

export default Todos;
