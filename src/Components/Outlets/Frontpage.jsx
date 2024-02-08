/* eslint-disable react/no-unescaped-entities */
import { Card, Col, Container, Row, Table } from "react-bootstrap";
import bookmark from "../../assets/Icons/Bookmark.svg";

const today = new Date();
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

const monthFullName = months[today.getMonth()];

const Frontpage = () => {
  return (
    <>
      <Container fluid>
        <div className="d-flex flex-wrap  ">
          <Col md={6} xs={12} lg={4} xl={3} className="">
            <Card className="d-flex flex-column me-md-1 my-2">
              <Card.Body className="d-flex flex-row justify-content-between">
                <div>
                  {" "}
                  <h2>Rs . 10,000</h2>
                  <Card.Title>கையிருப்பு </Card.Title>
                </div>
                <span>Icon</span>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} xs={12} lg={4} xl={3} className="">
            <Card className="d-flex flex-column ms-md-1 mx-lg-1 my-2">
              <Card.Body className="d-flex flex-row justify-content-between  ">
                <div>
                  {" "}
                  <h2>Rs . 10,000</h2>
                  <Card.Title className="align-content-end">
                    {" "}
                    வங்கியிருப்பு{" "}
                  </Card.Title>
                </div>
                <img src={bookmark} width={35} />
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} xs={12} lg={4} xl={3} className="">
            <Card className="d-flex flex-column  me-md-1 mx-lg-1 my-2">
              <Card.Body className="d-flex flex-row justify-content-between  ">
                <div>
                  {" "}
                  <h2>Rs . 10,000</h2>
                  <Card.Title>சந்தாதாரர்கள் </Card.Title>
                </div>
                <span>Icon</span>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} xs={12} lg={4} xl={3} className="">
            <Card className="d-flex flex-column ms-md-1 my-2  ">
              <Card.Body className="d-flex flex-row justify-content-between  ">
                <div>
                  {" "}
                  <h2>Rs . 10,000</h2>
                  <Card.Title>{monthFullName} - சந்தா </Card.Title>
                </div>
                <span>Icon</span>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} xs={12} lg={4} xl={3} className="">
            <Card className="d-flex flex-column me-md-1 my-2">
              <Card.Body className="d-flex flex-row justify-content-between  ">
                <div>
                  {" "}
                  <h2>Rs . 10,000</h2>
                  <Card.Title>சந்தா குடுத்தவர்கள் </Card.Title>
                </div>
                <span>Icon</span>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} xs={12} lg={4} xl={3} className="">
            <Card className="d-flex flex-column ms-md-1 my-2">
              <Card.Body className="d-flex flex-row justify-content-between  ">
                <div>
                  {" "}
                  <h2>Rs . 10,000</h2>
                  <Card.Title>சந்தா வர இருப்பவை </Card.Title>
                </div>
                <span>Icon</span>
              </Card.Body>
            </Card>
          </Col>
        </div>
      </Container>
      <Container fluid className="">
        <Row>
          <Col md={8} className=" my-3   pe-md-3">
            <div className="Front-cards-Background-card ">
              {" "}
              <Sandha />
            </div>
          </Col>

          <Col md={4} className=" my-3">
            <div className="Front-cards-Background-card  ">
              {" "}
              <RecentPurchase />{" "}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Frontpage;

// Sandha List

const Sandha = () => {
  return (
    <>
      <h5 className="text-start text-white mb-3">இம்மாதம் சந்தா கொடுத்தவர்கள்   </h5>
      <Table striped hover bordered variant="dark">
        <thead>
          <tr>
            <th>Memebers</th>
            <th>Month</th>
          </tr>
          <tr>
            <td>Sharjun</td>
            <td>Month</td>
          </tr>
          <tr>
            <td>Sharjun</td>
            <td>Month</td>
          </tr>
        </thead>
      </Table>
    </>
  );
};

// Recent Purchases

const RecentPurchase = () => {
  return (
    <>
      <h5 className="text-start text-white mb-3">இம்மாத செலவுகள் </h5>
      <Table striped hover bordered variant="dark">
        <thead>
          <tr>
            <th>Item</th>
            <th>Amount</th>
          </tr>
          <tr>
            <td>Sharjun</td>
            <td>Month</td>
          </tr>
          <tr>
            <td>Sharjun</td>
            <td>Month</td>
          </tr>
        </thead>
      </Table>
    </>
  );
};
