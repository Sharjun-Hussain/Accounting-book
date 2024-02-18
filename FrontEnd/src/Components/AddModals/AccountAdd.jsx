import { Col, Container, Row, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";




const AccountAddModal = (props) => {

  const [Category, setCategory] = useState([]);
  const [SelectedCategory, setSelectedCategory] = useState("");
  const [AccountName, setAccountName] = useState("");
  const navigate = useNavigate()

  useEffect(() => {

    const FetchAllCategory = async () => {
      const response = await axios.get(
        "http://localhost:8000/Category/list"
      );
      setCategory(response.data.Category);
    };

    FetchAllCategory();
    console.log(AccountName);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "http://localhost:8000/Accounts/Add",
        
          { AccountName, SelectedCategory },
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
                Add Account
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Account Name</Form.Label>
                    <Form.Control type="text" value={AccountName} onChange={(e)=>{setAccountName(e.target.value)}} placeholder="Sharjun-Hussain" />
                  </Form.Group>
               

                <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                <Form.Label>Account Type</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      {Object.values(Category).map((item)=>{
                        return(
                          <option onClick={(e)=>{setSelectedCategory(e.target.value)}} value={item.Name} key={item}>{item.Name}</option>
                        )
                      })}
                
                  {console.log(SelectedCategory)}
                    </Form.Select>
                </Form.Group>

                </Row> 
                <Button
                  style={{ alignSelf: "end",width:"100%"  }}
                  variant="primary"
                  type="submit"
                  onSubmit={HandleSubmit}
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
