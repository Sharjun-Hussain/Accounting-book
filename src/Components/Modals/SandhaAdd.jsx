import { Col, Container, Row, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const SandhaAddModal = (props) => {
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
                Add Sandha
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Member Name</Form.Label>
                    <Form.Control type="text" placeholder="Sharjun-Hussain" />
                  </Form.Group>
                </Row>

                <Row>
                  
                  <Form.Group
                    as={Col}
                    className="mb-3"
                    controlId="formGridPhone"
                  >
                    <Form.Label>Sandha Amount</Form.Label>
                    <Form.Control type="number" placeholder="" />
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    className="mb-3"
                    controlId="formGridPhone"
                  >
                    <Form.Label>Status</Form.Label>
                    
                  </Form.Group>
                </Row>

                <Button
                  style={{ alignSelf: "end", width: "100%" }}
                  variant="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
};

export default SandhaAddModal;
