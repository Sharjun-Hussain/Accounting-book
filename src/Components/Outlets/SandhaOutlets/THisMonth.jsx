import { useState } from "react";
import { Container, Form, Row } from "react-bootstrap";

const Months = [
  { value: "January" },
  { value: "February" },
  { value: "March" },
  { value: "April" },
  { value: "May" },
  { value: "June" },
  { value: "July" },
  { value: "August" },
  { value: "September" },
  { value: "October" },
  { value: "November" },
  { value: "December" },
];

const ThisMonth = () => {
  const [Item, setItem] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setItem(searchTerm);
    if (searchTerm === "") {
      setFilteredUsers([]);
    } else {
      const filteredItems = Months.filter((user) =>
        user.value.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setFilteredUsers(filteredItems);
    }
  };

  return (
    <div>
      <Container>
        <Row>
          <Form.Group>
            <Form.Control
              type="text"
              value={Item}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Row>

        <ul>
          {filteredUsers.map((user) => (
            <li className="text-white" key={user.id}>
              {user.value}
            </li>
          ))}
          Hello
        </ul>
      </Container>
    </div>
  );
};

export default ThisMonth;
