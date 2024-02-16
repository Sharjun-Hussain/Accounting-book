import { Col, Container, Row, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const AccountAddModal = (props) => {
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
                Add Account
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Account Name</Form.Label>
                    <Form.Control type="text" placeholder="Sharjun-Hussain" />
                  </Form.Group>
               

                <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                <Form.Label>Account Type</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">Income</option>
                      <option value="2">Expense</option>
                  
                    </Form.Select>
                </Form.Group>

                </Row> 
                <Button
                  style={{ alignSelf: "end",width:"100%"  }}
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

export default AccountAddModal;
