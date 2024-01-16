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
    <Container fluid>
      <Row>
        {/* Members with Monthly Buttons */}
        <Table>
          <thead>
            <tr>
                <td colSpan={10}>Memebrts</td>
                <td>Month</td>
            </tr>
            <tr>
                <td>Memebrts</td>
                <td>Month</td>
            </tr>
          </thead>
        </Table>
      </Row>
    </Container>
  );
};

export default Members;
