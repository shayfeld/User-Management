import { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const EditPost = (props) => {
  const { callbacks } = props;
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);

  return (
    <div>
      <Row className="mt-4 ms-3 me-4">
        <Col sm={3}>Title:</Col>
        <Col sm={8}>
          <Form.Control
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </Col>
      </Row>
      <Row className="mt-2 ms-3 me-4">
        <Col sm={3}>Body:</Col>
        <Col sm={8}>
          <Form.Control type="text" onChange={(e) => setBody(e.target.value)} />
        </Col>
      </Row>
      <Row className="mt-2 mx-1">
        <Col>
          <Button
            className="me-1"
            variant="primary"
            size="sm"
            onClick={() => callbacks.addNew(title, body)}
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

export default EditPost;
