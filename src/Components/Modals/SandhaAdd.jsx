import axios from "axios";
import { useState } from "react";
import {
  Col,
  Container,
  Row,
  Form,
  Dropdown,
  Button,
  Modal,
} from "react-bootstrap";

const SandhaAddModal = (props) => {
  const [SelectedMonths, SetSelectedMonths] = useState([]);
  const Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];



  const toggleLang = (option) => {
    if (SelectedMonths.includes(option)) {
      SetSelectedMonths(SelectedMonths.filter((item) => item !== option));
    } else {
      SetSelectedMonths([...SelectedMonths, option]);
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
                Add Sandha
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="MemberName">
                    <Form.Label>Member Name</Form.Label>
                    <Form.Control type="text" placeholder="Sharjun-Hussain" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="Months">
                    <Dropdown style={{marginTop:"31px",marginLeft:"31px"}}>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Select Months
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        {Months.map((option, index) => (
                          <Dropdown.Item
                            key={index}
                            onClick={() => toggleLang(option)}
                            active={SelectedMonths.includes(option)}
                          >
                            {option}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </Form.Group>
                  
                  
                </Row>

                <Row>
                  <Form.Group as={Col} className="mb-3" controlId="Amount">
                    <Form.Label>Sandha Amount</Form.Label>
                    <Form.Control type="number" placeholder="" />
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    className="my-1"
                    controlId="formGridPhone"
                  >
                    {SelectedMonths.map((btn)=>{
                    return(
                      <Button className="mx-1 my-1" key={btn}>{btn}</Button>
                    )
                  })}
                 
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
