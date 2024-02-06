/* eslint-disable react/no-unescaped-entities */
import { Card, Col, Container, Row, Table } from "react-bootstrap";

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
                    <Card.Title>Kaiyiruppu</Card.Title>
                  </div>
                  <span>Icon</span>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} xs={12} lg={4} xl={3} className="">
              <Card className="d-flex flex-column mx-md-1 my-2">
                <Card.Body className="d-flex flex-row justify-content-between  ">
                  <div>
                    {" "}
                    <h2>Rs . 10,000</h2>
                    <Card.Title>Vangi iruppu</Card.Title>
                  </div>
                  <span>Icon</span>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} xs={12} lg={4} xl={3} className="">
              <Card className="d-flex flex-column mx-md-1 my-2">
                <Card.Body className="d-flex flex-row justify-content-between  ">
                  <div>
                    {" "}
                    <h2>Rs . 10,000</h2>
                    <Card.Title>Members</Card.Title>
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
                    <Card.Title>Immaathe Santhaa</Card.Title>
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
                    <Card.Title>Santha Count</Card.Title>
                  </div>
                  <span>Icon</span>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} xs={12} lg={4} xl={3} className="">
              <Card className="d-flex flex-column mx-md-1 my-2">
                <Card.Body className="d-flex flex-row justify-content-between  ">
                  <div>
                    {" "}
                    <h2>Rs . 10,000</h2>
                    <Card.Title>Santha Count</Card.Title>
                  </div>
                  <span>Icon</span>
                </Card.Body>
              </Card>
            </Col>
         
        </div>
      </Container >
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
      <h5 className="text-start text-white mb-3">This Month's Sandha Providers</h5>
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
     <h5 className="text-start text-white mb-3">Recent Purchase</h5>
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
