import { useState,useEffect } from "react";
import { Container, Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const TransactionAddModal = (props) => {
  const currentDate = new Date().toISOString().split("T")[0];
  const Navigate = useNavigate();
  const [AllAccounts, setAllAccounts] = useState([]); // All Accounts from UseEffect
  const [FromAccount, setFromAccount] = useState(""); // All Accounts from UseEffect
  const [ToAccount, setToAccount] = useState(""); // All Accounts from UseEffect
  const [Amount, setAmount] = useState(); // All Accounts from UseEffect
  const [Description, setDescription] = useState(""); // All Accounts from UseEffect
  // const [Files, setFiles] = useState([]); // All Accounts from UseEffect
  const [TransactionDate, setTransactionDate] = useState(currentDate); // All Accounts from UseEffect

  useEffect(() => {

    const FetchAllAccounts = async () => {
      const response = await axios.get(
        "http://localhost:8000/Accounts/All"
      );
      setAllAccounts(response.data.Accounts);
    };

    FetchAllAccounts();
    console.log(AllAccounts);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const HandleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "http://localhost:8000/Transactions/Add",
        
          { FromAccount, ToAccount, Amount,Description, TransactionDate},
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        
      )
      .then((res) => {
        console.log(res.data);
        Navigate(0);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    console.log(FromAccount, ToAccount, Amount,Description, TransactionDate);
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
                Add Transaction
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>From Account</Form.Label>
                    <Form.Select  onChange={(e) => {
                        setFromAccount(e.target.value);
                      }} aria-label="Default select example">
                      <option>Open this select menu</option>
                      {Object.values(AllAccounts).map((account) =>{
                        return (
                          <option value={account._id} key={account._id}>
                            {account.Name}
                          </option>
                        );
                      })}
                      
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>To Account</Form.Label>
                    <Form.Select  onChange={(e) => {
                        setToAccount(e.target.value);
                      }} aria-label="Default select example">
                      <option>Open this select menu</option>
                      {Object.values(AllAccounts).map((account) =>{
                        return (
                          <option value={account._id} key={account._id}>
                            {account.Name}
                          </option>
                        );
                      })}
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
                    <Form.Control type="date" defaultValue={currentDate}  onChange={(e)=>{setTransactionDate(e.target.value)}}/>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridAddress2">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type="number" value={Amount} onChange={(e)=>{setAmount(e.target.value)}}  />
                  </Form.Group>
                </Row>

                <Col>
                  <Form.Group
                    as={Col}
                    className="mb-3"
                    controlId="formGridAddress2"
                  >
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "100px" }}
                      value={Description}
                      onChange={(e)=>{setDescription(e.target.value)}}
                    />
                  </Form.Group>
                </Col>
                <Form.Group controlId="formFileMultiple" className="mb-3">
                  <Form.Label>Upload Files</Form.Label>
                  <Form.Control type="file" multiple />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={HandleSubmit}>
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
