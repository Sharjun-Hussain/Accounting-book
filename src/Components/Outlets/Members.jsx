import { useState } from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";

const Members = () => {
  const [paymentStatus, setPaymentStatus] = useState({});
  const members = ["Member 1", "Member 2", "Member 3"]; // Replace with your actual member data
  const months = [
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

  const handleButtonClick = (member, month) => {
    setPaymentStatus((prevStatus) => ({
      ...prevStatus,
      [member]: {
        ...prevStatus[member],
        [month]: !prevStatus[member]?.[month] || false,
      },
    }));
  };

  return (
    <Container fluid className="mt-3">
      <Row>
        {/* Members with Monthly Buttons */}
       <Col md={12} xs={12} className="ps-0 pe-0">
       <div className="Front-cards-Background-card">
<h3 className="text-center text-white py-3">Masjidhul Haadhi Sandha Providers List</h3>
        <Table hover striped variant="dark" bordered>
          <thead>
            <tr>
              <th>Memebers</th>
              <th>Month</th>
            </tr>
            <tr>
              <td>Memebrts</td>
              <td>Month</td>
            </tr>
          </thead>
        </Table>
       </div>
       </Col>
      </Row>
    </Container>
  );
};

export default Members;
