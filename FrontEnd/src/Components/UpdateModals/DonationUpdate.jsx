import { Col, Container, Row, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DonationAddModal = (props) => {
  const [Description, setDescription] = useState("");
 const [Amount, setAmount] = useState();
  const [Name, setName] = useState("");
  const navigate = useNavigate();



  const HandleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "http://localhost:8000/Donation/Add",

        { Name,  Description, Amount },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        navigate(0);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
              Update Donation
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridName">
                    <Form.Label> Name</Form.Label>
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

                  <Form.Group
                    as={Col}
                    className="mb-3"
                    controlId="formGridAddress1"
                  >
                    
                    <Form.Label>Amount</Form.Label>
                  <Form.Control
                    type="number"
                    value={Amount}
                    required
                    onChange={(e) => {
                      setAmount(e.target.value);
                    }}
                    placeholder="Amount"
                  /> 
                  </Form.Group>
                </Row>
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Label>Account Description</Form.Label>
                  <Form.Control
                    type="text"
                    value={Description}
                    required
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                    placeholder="Description"
                  />
                </Form.Group>
                <Row></Row>
                <Button
                  style={{ alignSelf: "end", width: "100%" }}
                  variant="primary"
                  type="submit"
                  onClick={HandleSubmit}
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

export default DonationAddModal;
