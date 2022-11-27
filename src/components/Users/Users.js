import { useState, useEffect } from "react";
import User from "./User";
import "../../App.css";
import { Button, Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Users = (props) => {
  const { callbacks, userID } = props;
  const [users, setUsers] = useState(props.users);
  const [searching, setSearching] = useState("");

  /** Searching Person */
  useEffect(() => {
    const search = () => {
      if (searching.length > 0) {
        const searchedUser = props.users?.filter(
          (person) =>
            person.email.search(searching) !== -1 ||
            person.name.search(searching) !== -1
        );
        setUsers(searchedUser);
      }
    };
    search();
  }, [searching]);

  return (
    <div
      className="Dash ms-2 mt-2"
      style={{ border: "2px solid black", borderRadius: "5px", width: "370px" }}
    >
      <Row className="mb-3 mt-3">
        <Col sm={4} align="end">
          Searching:
        </Col>
        <Col sm={5}>
          <Form.Control
            type="text"
            size="sm"
            onChange={(e) => setSearching(e.target.value)}
          />
        </Col>
        <Col sm={3}>
          <Button
            variant="success"
            size="sm"
            onClick={() => callbacks.NewUser()}
          >
            Add
          </Button>
        </Col>
      </Row>

      <div style={{ overflowY: "scroll", height: "430px" }}>
        {searching.length > 0
          ? users.map((user) => {
              return (
                <div key={user.id}>
                  <User
                    user={user}
                    todos={props.todos}
                    userID={userID}
                    callbacks={callbacks}
                  />
                  <br />
                </div>
              );
            })
          : props.users.map((user) => {
              return (
                <div key={user.id}>
                  <User
                    user={user}
                    todos={props.todos}
                    userID={userID}
                    callbacks={callbacks}
                  />
                  <br />
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Users;
