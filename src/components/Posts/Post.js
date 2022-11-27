import { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Post = (props) => {
  const { post } = props;
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
        <Col className="me-4">{post.title}</Col>
      </Row>
      <Row>
        <Col className="ms-2" sm={2}>
          Body:
        </Col>
        <Col className="me-4">{post.body}</Col>
      </Row>
    </div>
  );
};

export default Post;
