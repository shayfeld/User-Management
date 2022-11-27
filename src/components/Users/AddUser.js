import { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AddUser = (props) => {
  const { callbacks } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div>
      <Row className="ms-1 mt-5 pt-5">
        <Col align="start">Add New User</Col>
      </Row>

      <div
        style={{
          width: "340px",
          height: "200px",
          border: "2px solid blue",
        }}
      >
        <Row className="mt-4 mx-3">
          <Col sm={3}>Name:</Col>
          <Col sm={8}>
            <Form.Control
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </Col>
        </Row>
        <Row className="mt-2 mx-3">
          <Col sm={3}>Email:</Col>
          <Col sm={8}>
            <Form.Control
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <Button
              className="me-1"
              variant="primary"
              size="sm"
              onClick={() => callbacks.addingUser({ name, email })}
            >
              Add
            </Button>
            <Button
              variant="danger"
              size="sm"
              onClick={() => callbacks.canceldUser()}
            >
              Cancel
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AddUser;
