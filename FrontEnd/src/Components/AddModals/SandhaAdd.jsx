import axios from "axios";
import { useState, useEffect } from "react";
import { Col, Container, Row, Form, Dropdown, Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SandhaAddModal = (props) => {
  const [PaidMonths, SetPaidMonths] = useState([]);
  const MonthData = [
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
  const navigate = useNavigate();
  const [AlluserData, setAlluserData] = useState([]); // All UserData from UseEffect
  const [Item, setItem] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setloading] = useState(false);

  const [MemberID, setMemberID] = useState("");
  const [Amount, setAmount] = useState();
  const [Description, setDescription] = useState();

  useEffect(() => {
    const FetchAllUser = async () => {
      const response = await axios.get("http://localhost:8000/Sandha-members/All");
      setAlluserData(response.data.Members);
    };

    FetchAllUser();
  }, []);

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setItem(searchTerm);
    if (searchTerm === "") {
      setFilteredUsers([]);
    } else {
      const filteredItems = AlluserData.filter((user) =>
        user.Name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredUsers(filteredItems);
    }
  };

  const HandleUserClick = (param) => {
    setMemberID(param._id);
    setItem(param.Name);
    setFilteredUsers([]);
    setAmount(param.Amount);
    setDescription(param.Description);
  };

  const HandleSubmit = async (e) => {
    setloading(true)
    e.preventDefault();
    await axios
      .post(
        "http://localhost:8000/Sandha/Add",
        { PaidMonths, MemberID, Amount },
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      )
      .then((res) => {
        setloading(false)
        Swal.fire({
          icon: "success",
          title: res.data.Message,
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true,
        });
        setTimeout(() => {
          navigate(0);
        }, 2000);
      })
      .catch((error) => {
        setloading(false)
        Swal.fire({
          icon: "error",
          title: "Transaction Failed",
          text: error.response.data.Message,
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        });
      });
  };

  const toggleMonth = (option) => {
    if (PaidMonths.includes(option)) {
      SetPaidMonths(PaidMonths.filter((item) => item !== option));
    } else {
      SetPaidMonths([...PaidMonths, option]);
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
                Add Subscription
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={HandleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="MemberName">
                    <Form.Label>Member Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={Item}
                      onChange={handleInputChange}
                      placeholder="Sharjun-Hussain"
                      autoComplete="off"
                      required
                    />
                    <ul
                      style={{
                        zIndex: 100,
                        position: "absolute",
                        backgroundColor: "black",
                        overflowY: "scroll",
                        width: "100%",
                        maxHeight: "150px",
                        listStyleType: "none",
                        padding: 0,
                        margin: 0,
                      }}
                    >
                      {filteredUsers.map((user) => (
                        <li
                          className="text-white"
                          key={user._id}
                          onClick={() => {
                            HandleUserClick(user);
                          }}
                          style={{ padding: "5px 10px", cursor: "pointer" }}
                        >
                          {user.Name}
                        </li>
                      ))}
                    </ul>
                  </Form.Group>
                  <Form.Group as={Col} controlId="Months" style={{ display: "flex", alignItems: "flex-end" }}>
                    <Dropdown style={{ width: "100%" }}>
                      <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ width: "100%" }}>
                        Select Months
                      </Dropdown.Toggle>
                      <Dropdown.Menu style={{ width: "100%" }}>
                        {MonthData.map((option, index) => (
                          <Dropdown.Item
                            key={index}
                            onClick={() => toggleMonth(option)}
                            active={PaidMonths.includes(option)}
                          >
                            {option}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="Amount">
                    <Form.Label>Subscription Amount</Form.Label>
                    <Form.Control
                      type="number"
                      value={Amount}
                      required
                      onChange={(e) => {
                        setAmount(e.target.value);
                      }}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="SelectedMonths" className="d-flex flex-wrap align-items-center">
                    {PaidMonths.map((btn) => (
                      <Button
                        key={btn}
                        variant="outline-secondary"
                        className="me-2 mt-2"
                        onClick={() => toggleMonth(btn)}
                      >
                        {btn}
                      </Button>
                    ))}
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group controlId="Description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      type="text"
                      value={Description}
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                      placeholder=""
                    />
                  </Form.Group>
                </Row>

                <Button style={{ width: "100%" }} className="text-center" variant="primary" type="submit" disabled={loading}>
                {loading? <div className="loader"></div> : "Submit"} 
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
