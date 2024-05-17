import { useState } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
export const Settings = () => {
  const [Name, setName] = useState("");
  return (
    <Container>
      <Row>
        <Col>
          <div className="text-white">
            <h5>General Settings</h5>
            <p style={{ marginTop: "-10px", color: "wheat" }}>
              {" "}
              Settings and options for your application{" "}
            </p>
            <hr />
          </div>
        </Col>
      </Row>

      <Row>
        <Col md={2}>
          <div className="text-white">
            <p>Name :</p>
          </div>
        </Col>
        <Col md={5}>
          <div className="text-white">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Control
                type="text"
                value={Name}
                autoComplete="off"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Sharjun-Hussain"
              />
            </Form.Group>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
