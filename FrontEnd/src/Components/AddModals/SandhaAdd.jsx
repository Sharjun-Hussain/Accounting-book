import axios from "axios";

import { useState, useEffect } from "react";
import {
  Col,
  Container,
  Row,
  Form,
  Dropdown,
  Button,
  Modal,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate()
  const [AlluserData, setAlluserData] = useState([]); // All UserData from UseEffect
  const [Item, setItem] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const [MemberID, setMemberID] = useState("");
  const [Amount, setAmount] = useState();
  const [Description, setDescription] = useState()
  // const Date = new Date().toISOString().split("T")[0];

  useEffect(() => {

    const FetchAllUser = async () => {
      const response = await axios.get(
        "http://localhost:8000/Sandha-members/All"
      );
      setAlluserData(response.data.Members);
    };

    FetchAllUser();
    console.log(AlluserData, PaidMonths);

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
toggleMonth
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
    e.preventDefault();
    await axios
      .post(
        "http://localhost:8000/Sandha/Add",
        
          { PaidMonths, MemberID, Amount },
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

  const toggleMonth = (option) => {
    if (PaidMonths.includes(option)) {
      SetPaidMonths(PaidMonths.filter((item) => item !== option));
    } else {
      SetPaidMonths([...PaidMonths, option]);
    }
  };
  console.log(MemberID);

  return (
    <Container>
      <Row>
        <Col>
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            top
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
                      }}
                    >
                      {filteredUsers.map((user) => (
                        <li
                          className="text-white"
                          key={user._id}
                          onClick={() => {
                            HandleUserClick(user);
                          }}
                        >
                          {user.Name}
                        </li>
                      ))}
                    </ul>
                  </Form.Group>
                  <Form.Group as={Col} controlId="Months">
                    <Dropdown style={{ marginTop: "31px", marginLeft: "31px" }}>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Select Months
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
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

                <Row>
                  <Form.Group as={Col} className="mb-3" controlId="Amount">
                    <Form.Label>Sandha Amount</Form.Label>
                    <Form.Control
                      type="number"
                      value={Amount}
                      required
                      onChange={(e) => {
                        setAmount(e.target.value);
                      }}
                      placeholder=""
                    />
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    className="my-1"
                    controlId="formGridPhone"
                    
                  >
                    {PaidMonths.map((btn) => {
                      return (
                        <Button className="mx-1 mt-4"   key={btn}>
                          {btn}
                        </Button>
                      );
                    })}
                  </Form.Group>
                </Row>
                <Row>
                <Form.Group  className="mb-3" controlId="Description">
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

                <Button
                  style={{ alignSelf: "end", width: "100%" }}
                  variant="primary"
                  type="submit"
                  onClick={HandleSubmit}
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
