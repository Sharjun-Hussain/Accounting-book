import { useState } from "react";
import { Col, Container, Row, Form,Button } from "react-bootstrap";
export const Settings = () => {
  const [Name, setName] = useState("");
  return (
    <>
    <Container>
      <Row>
        <Col>
          <div className="text-white">
            <h5>General Settings</h5>
            <p
              style={{
                marginTop: "-10px",
                color: "wheat",
                fontSize: "14px",
                opacity: "0.7",
              }}
            >
              {" "}
              Settings and options for your application{" "}
            </p>
            <hr />
          </div>
        </Col>
      </Row>

      <Row>
        <Col md={3} xs={12}>
          <div className="text-white">
            <h6>Name :</h6>
            <p style={{ marginTop: "-10px", fontSize: "14px", opacity: "0.7" }}>
              Changes will update all URLS
            </p>
          </div>
        </Col>
        <Col md={5} xs={12}>
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
      <Row>
        <Col md={3} xs={12}>
          <div className="text-white">
            <h6>Update Logo :</h6>
            <p style={{ marginTop: "-10px", fontSize: "14px", opacity: "0.7" }}>
              Changes will update Entire Application
            </p>
          </div>
        </Col>
        <Col md={5} xs={12}>
          <div className="text-white">
            <Form.Group controlId="formFile" className="mb-3">
              
              <Form.Control type="file" />
            </Form.Group>
          </div>
        </Col>
        <Col md={4}>
          <Button
                  style={{ width: "100%" }}
                  variant="primary"
                  type="submit"
                  
                >
                  Save
                </Button>
        </Col>
      </Row>
    </Container>


{/* Advanced Setting */}

    <Container className="mt-5">
      <Row>
        <Col>
          <div className="text-white">
            <h5>Advanced  Settings</h5>
            <p
              style={{
                marginTop: "-10px",
                color: "wheat",
                fontSize: "14px",
                opacity: "0.7",
              }}
            >
              {" "}
              Settings and options for your application{" "}
            </p>
            <hr />
          </div>
        </Col>
      </Row>

      <Row>
        <Col md={3} xs={12}>
          <div className="text-white">
            <h6>Name :</h6>
            <p style={{ marginTop: "-10px", fontSize: "14px", opacity: "0.7" }}>
              Changes will update all URLS
            </p>
          </div>
        </Col>
        <Col md={5} xs={12}>
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
      <Row>
        <Col md={3} xs={12}>
          <div className="text-white">
            <h6>Update Logo :</h6>
            <p style={{ marginTop: "-10px", fontSize: "14px", opacity: "0.7" }}>
              Changes will update Entire Application
            </p>
          </div>
        </Col>
        <Col md={5} xs={12}>
          <div className="text-white">
            <Form.Group controlId="formFile" className="mb-3">
              
              <Form.Control type="file" />
            </Form.Group>
          </div>
        </Col>
        <Col md={4}>
          <Button
                  style={{ width: "100%" }}
                  variant="primary"
                  type="submit"
                  
                >
                  Save
                </Button>
        </Col>
      </Row>
    </Container>


{/*    Profile Setting */}

<Container className="mt-4">
      <Row>
        <Col>
          <div className="text-white">
            <h5>Profile Settings</h5>
            <p
              style={{
                marginTop: "-10px",
                color: "wheat",
                fontSize: "14px",
                opacity: "0.7",
              }}
            >
              {" "}
              Settings and options for your application{" "}
            </p>
            <hr />
          </div>
        </Col>
      </Row>

      <Row>
        <Col md={3} xs={12}>
          <div className="text-white">
            <h6>Full Name :</h6>
            <p style={{ marginTop: "-10px", fontSize: "14px", opacity: "0.7" }}>
              Display on the Profile Card
            </p>
          </div>
        </Col>

        
        <Col md={5} xs={12}>
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

      <Row>
        <Col md={3} xs={12}>
          <div className="text-white">
            <h6>Change Email :</h6>
            <p style={{ marginTop: "-10px", fontSize: "14px", opacity: "0.7" }}>
              Display on the Profile Card
            </p>
          </div>
        </Col>

        
        <Col md={5} xs={12}>
          <div className="text-white">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Control
                type="email"
                value={Name}
                autoComplete="off"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Example@sharjun.com"
              />
            </Form.Group>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={3} xs={12}>
          <div className="text-white">
            <h6>Currect Password :</h6>
            <p style={{ marginTop: "-10px", fontSize: "14px", opacity: "0.7" }}>
              Current Password
            </p>
          </div>
        </Col>

        
        <Col md={5} xs={12}>
          <div className="text-white">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Control
                type="password"
                value={Name}
                autoComplete="off"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="************"
              />
            </Form.Group>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={3} xs={12}>
          <div className="text-white">
            <h6>New Password :</h6>
            <p style={{ marginTop: "-10px", fontSize: "14px", opacity: "0.7" }}>
              New Password
            </p>
          </div>
        </Col>

        
        <Col md={5} xs={12}>
          <div className="text-white">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Control
                type="password"
                value={Name}
                autoComplete="off"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="************"
              />
            </Form.Group>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={3} xs={12}>
          <div className="text-white">
            <h6>Repeat New Password :</h6>
            <p style={{ marginTop: "-10px", fontSize: "14px", opacity: "0.7" }}>
              Repeat New Password
            </p>
          </div>
        </Col>

        
        <Col md={5} xs={12}>
          <div className="text-white">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Control
                type="password"
                value={Name}
                autoComplete="off"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="************"
              />
            </Form.Group>
          </div>
        </Col>
        <Col md={4}>
          <Button
                  style={{ width: "100%" }}
                  variant="primary"
                  type="submit"
                  
                >
                  Save
                </Button>
        </Col>
      </Row>
      
    </Container>

    </>
  );
  
};
