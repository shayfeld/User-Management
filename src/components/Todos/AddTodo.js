import { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const EditTodo = (props) => {
  const { callbacks } = props;
  const [title, setTitle] = useState(props.title);
  return (
    <div>
      <Row className="mt-5 ms-3 me-4">
        <Col sm={3}>Title:</Col>
        <Col sm={8}>
          <Form.Control
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </Col>
      </Row>
      <Row className="mt-2 me-1">
        <Col>
          <Button
            className="me-1"
            variant="primary"
            size="sm"
            onClick={() => callbacks.addNew(title)}
          >
            Add
          </Button>
          <Button
            variant="danger"
            size="sm"
            onClick={() => callbacks.canceld()}
          >
            Cancel
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default EditTodo;
