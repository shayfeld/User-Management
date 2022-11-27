import { useState, useEffect } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

/**Show Person Address */
const Place = (props) => {
  const [street, setStreet] = useState(props.street);
  const [city, setCity] = useState(props.city);
  const [zipcode, setZipcode] = useState(props.zipcode);
  useEffect(() => {
    const update = () => {
      props.callback({ street, city, zipcode });
    };
    update();
  }, [street, city, zipcode]);

  return (
    <div
      className="ms-3 my-3"
      style={{
        width: "290px",
        border: "2px solid Chocolate",
        background: "Azure",
      }}
    >
      <Row className="mt-2 me-1">
        <Col sm={4}>Street:</Col>
        <Col sm={8}>
          <Form.Control
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </Col>
      </Row>
      <Row className="mt-2 me-1">
        <Col sm={4}>City:</Col>
        <Col sm={8}>
          <Form.Control
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </Col>
      </Row>
      <Row className="my-2 mx-1">
        <Col sm={4}>Zip Code:</Col>
        <Col sm={8}>
          <Form.Control
            type="text"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Place;
