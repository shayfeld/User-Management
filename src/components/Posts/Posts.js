import { useState } from "react";
import AddPost from "./AddPost";
import Post from "./Post";
import { Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Posts = (props) => {
  const { id, posts, callbacks } = props;
  const [add, setAdd] = useState(false);

  const canceld = () => {
    setAdd(false);
  };
  const addNew = (title, body) => {
    callbacks.addingPost({
      userId: id,
      id: posts[posts.length - 1].id + 1,
      title,
      body,
    });
    setAdd(false);
  };

  return (
    <div>
      <Row className="mb-1 mt-3">
        <Col className="ms-3" align="start">
          Posts - User {id}
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
          height: "210px",
          overflowY: "scroll",
          border: "2px solid blue",
        }}
      >
        {add ? (
          <AddPost callbacks={{ ...callbacks, canceld, addNew }} />
        ) : (
          posts.map((post) => {
            if (post.userId === id) {
              return <Post key={post.id} post={post} />;
            }
          })
        )}
      </div>
    </div>
  );
};

export default Posts;
