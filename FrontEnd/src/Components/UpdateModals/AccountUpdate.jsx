/* eslint-disable react/prop-types */
import { Col, Container, Row, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import axios from "axios";

const AccountAddModal = (props) => {
  const [Description, setDescription] = useState("");
  const [FetchCategory, setFetchCategory] = useState([]);
  const [Category, setCategory] = useState("");
  const [Name, setName] = useState("");


  useEffect(() => {
    const FetchAllCategory = async () => {
      const response = await axios.get("http://localhost:8000/Category/All");
      setFetchCategory(response.data.Category);
    };

    FetchAllCategory();
    console.log(Name);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put(
        "http://localhost:8000/Accounts/Add",

        { Name, Category, Description },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        props.onUpdateAccount(props.data._id,);
        props.onHide()
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
                Update Account
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Row className="mb-3">
                  <Col className="my-3 my-md-0" md={6} xs={12}>
                    <Form.Group controlId="formGridName">
                      <Form.Label>Account Name</Form.Label>
                      <Form.Control
                        type="text"
                        // eslint-disable-next-line react/prop-types
                        value={props.data.Name}
                        autoComplete="off"
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        placeholder="Sharjun-Hussain"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} xs={12}>
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                      <Form.Label>Account Type</Form.Label>
                      <Form.Select
                        onChange={(e) => {
                          setCategory(e.target.value);
                        }}
                        aria-label="Default select example"
                      >
                        <option>Open this select menu</option>
                        {Object.values(FetchCategory).map((item, key) => {
                          return (
                            <option value={item._id} key={key}>
                              {item.Name}
                            </option>
                          );
                        })}

                        
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} xs={12}>
                  <Form.Group controlId="formGridName">
                    <Form.Label>Account Description</Form.Label>
                    <Form.Control
                      type="text"
                      value={props.data.Description}
                      required
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                      placeholder="Description"
                    />
                  </Form.Group>
                </Col>
                <Col md={6} xs={12}>
                  <Button
                    style={{
                      alignSelf: "end",
                      width: "100%",
                      marginTop: "30px",
                    }}
                    variant="primary"
                    type="submit"
                    onClick={HandleSubmit}
                  >
                    Update
                  </Button>
                  </Col>
                </Row>
              
              </Form>
            </Modal.Body>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
};

export default AccountAddModal;
