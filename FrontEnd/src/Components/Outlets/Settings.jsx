import { useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { getCookie } from "react-use-cookie";
export const Settings = () => {
  const UserName = getCookie("Name");
  const Email = getCookie("Email");
  const OrganizationName = getCookie("OrganizationName");
  const Phone = getCookie("Phone");
  const [Name, setName] = useState("");
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="text-white">
              <h5>Organization Settings</h5>
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
              <p
                style={{ marginTop: "-10px", fontSize: "14px", opacity: "0.7" }}
              >
                Changes will update all URLS
              </p>
            </div>
          </Col>
          <Col md={5} xs={12}>
            <div className="text-white">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Control
                  type="text"
                  value={OrganizationName}
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
              <p
                style={{ marginTop: "-10px", fontSize: "14px", opacity: "0.7" }}
              >
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
          
        </Row>
      </Container>

      {/* Advanced Setting */}

  

      {/*    Profile Setting */}

      <Container className="mt-4">
        <Row>
          <Col>
            <div className="text-white">
              <h5> User Profile Settings</h5>
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
              <h6>Full Name : </h6>
              <p
                style={{ marginTop: "-10px", fontSize: "14px", opacity: "0.7" }}
              >
                Display on the Profile Card
              </p>
            </div>
          </Col>

          <Col md={5} xs={12}>
            <div className="text-white">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Control
                  type="text"
                  value={UserName}
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
              <p
                style={{ marginTop: "-10px", fontSize: "14px", opacity: "0.7" }}
              >
                Display on the Profile Card
              </p>
            </div>
          </Col>

          <Col md={5} xs={12}>
            <div className="text-white">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Control
                  type="email"
                  value={Email}
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
          <Col md={4}>
            <Button style={{ width: "100%" }} variant="primary" type="submit">
              Save
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
