/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";
import { Col, Container, Row, Form, Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MemberUpdateModal = (props) => {
  const [Name, setName] = useState(props.data.Name); // For Post Data
  const [Address, setAddress] = useState(props.data.Address); // For Post Data
  const [Phone, setPhone] = useState(props.data.Phone); // For Post Data
  const [Amount, setAmount] = useState(props.data.Amount); // For Post Data
  const [Email, setEmail] = useState(props.data.Email); // For Post Data

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios
        .put(
          `http://localhost:8000/Sandha-members/Update/${props.data.id}`,
          { Name, Address, Phone, Amount, Email },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          navigate(0);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Update Member
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={Name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      placeholder="Sharjun-Hussain"
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      value={Email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      placeholder="Example@gmail.com"
                    />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    value={Address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                    placeholder="1234 Main St"
                    required
                  />
                </Form.Group>

                <Row>
                  <Form.Group
                    as={Col}
                    className="mb-3"
                    controlId="formGridPhone"
                  >
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="number"
                      value={Phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                      placeholder="075 74 74 744"
                      required
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    className="mb-3"
                    controlId="formGridPhone"
                  >
                    <Form.Label>Sandha Amount</Form.Label>
                    <Form.Control
                      type="number"
                      value={Amount}
                      onChange={(e) => {
                        setAmount(e.target.value);
                      }}
                      placeholder="5000"
                      required
                    />
                  </Form.Group>
                </Row>

                <Button
                  style={{ alignSelf: "end", width: "100%" }}
                  variant="primary"
                  type="submit"
                >
                  Update
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
};

export default MemberUpdateModal;
