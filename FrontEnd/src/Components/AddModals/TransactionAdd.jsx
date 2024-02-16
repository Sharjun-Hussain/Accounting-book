import { Container, Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const TransactionAddModal = (props) => {
  const currentDate = new Date().toISOString().split("T")[0];
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
                Add Transaction
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>From Account</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>To Account</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    className=""
                    controlId="formGridAddress1"
                  >
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" defaultValue={currentDate} />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridAddress2">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type="number"  />
                  </Form.Group>
                </Row>

                <Col>
                  <Form.Group
                    as={Col}
                    className="mb-3"
                    controlId="formGridAddress2"
                  >
                    <Form.Label>Notes</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "100px" }}
                    />
                  </Form.Group>
                </Col>
                <Form.Group controlId="formFileMultiple" className="mb-3">
                  <Form.Label>Upload Files</Form.Label>
                  <Form.Control type="file" multiple />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Create
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
};

export default TransactionAddModal;
