import { useState, useEffect } from "react";
import Place from "./Place";
import TaskCheck from "./TaskCheck";
import { Button, Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const User = (props) => {
  const { callbacks, userID } = props;
  const [user, setUser] = useState(props.user);
  const [isOver, setIsOver] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [name, setName] = useState(props.user.name);
  const [email, setEmail] = useState(props.user.email);
  const changeIsComplete = (data) => {
    setIsComplete(data);
  };
  const deleteUser = (id) => {
    callbacks.DeleteUserData(id);
  };
  const placeUpdate = (data) => {
    setUser({
      ...user,
      address: {
        street: data.street,
        city: data.city,
        zipcode: data.zipcode,
      },
    });
  };
  const updateUser = (e) => {
    e.preventDefault();
    const newUser = { ...user, name: name, email: email };
    setUser(newUser);
    callbacks.updateUser(newUser);
  };
  return (
    <div className="ms-3">
      <div key={user.id}>
        <TaskCheck
          id={user.id}
          todos={props.todos}
          callback={changeIsComplete}
        />
        <Form
          onSubmit={updateUser}
          style={{
            height: isOver ? "410px" : "200px",
            width: "320px",
            border: isComplete ? "2px solid green" : "2px solid red",
            background: userID === user.id ? "Azure" : "white",
          }}
        >
          <Row className="mb-2 mt-2">
            <Col sm={1}></Col>
            <Col align="left">
              <Form.Label onClick={() => callbacks.pickedUser(user.id)}>
                ID: {user.id}
              </Form.Label>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col sm={1}></Col>
            <Col sm={2}>
              <Form.Label>Name:</Form.Label>
            </Col>
            <Col sm={7}>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col sm={1}></Col>
            <Col sm={2}>
              <Form.Label>Email:</Form.Label>
            </Col>
            <Col sm={7}>
              <Form.Control
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Col>
          </Row>
          <div className="row">
            <Row>
              <Col sm={isOver ? 12 : 6}>
                <Button
                  variant="secondary"
                  size="sm"
                  onMouseOver={() => setIsOver(true)}
                  onClick={() => setIsOver(false)}
                >
                  Other Data
                </Button>
                {isOver ? (
                  <Place
                    street={user.address.street}
                    city={user.address.city}
                    zipcode={user.address.zipcode}
                    callback={placeUpdate}
                  />
                ) : null}
              </Col>
              <Col align="end">
                <Button
                  className="me-1"
                  type="submit"
                  variant="primary"
                  size="sm"
                >
                  Update
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={(e) => {
                    deleteUser(user.id);
                  }}
                >
                  Delete
                </Button>
              </Col>
            </Row>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default User;
