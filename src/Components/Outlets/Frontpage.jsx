import { Card, Col, Container, Row, Table } from "react-bootstrap";

const Frontpage = () => {
  return (
    <>
      <Container>
        <Row>
          <div className="d-flex flex-wrap  mt-3 Front-cards-Background-card rounded-3 py-3  ">
            <Col md={4} xs={12} xl={3} className="">
              <Card className="d-flex flex-column mx-1 my-2">
                <Card.Body className="d-flex flex-row justify-content-between  ">
                  <div>
                    {" "}
                    <h2>Rs . 10,000</h2>
                    <Card.Title>Kaiyiruppu</Card.Title>
                  </div>
                  <span>Icon</span>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} xs={12} xl={3} className="">
              <Card className="d-flex flex-column mx-1 my-2">
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

            <Col md={4} xs={12} xl={3} className="">
              <Card className="d-flex flex-column mx-1 my-2">
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

            <Col md={4} xs={12} xl={3} className="">
              <Card className="d-flex flex-column mx-1 my-2">
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

            <Col md={4} xs={12} xl={3} className="">
              <Card className="d-flex flex-column mx-1 my-2">
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

            <Col md={4} xs={12} xl={3} className="">
              <Card className="d-flex flex-column mx-1 my-2">
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
        </Row>
      </Container>
      <Container className="mt-3">
        <Row>
          <Col md={8} className="pe-5 m-0 ps-0">
            <div className="Front-cards-Background-card rounded-3 p-3">
              {" "}
              <Sandha />
            </div>
          </Col>

          <Col md={4} className="ps-0 pe-0">
            <div className="Front-cards-Background-card rounded-3 ">
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
      <h4 className="text-center text-white mb-3">This Month's Sandha Providers</h4>
            <Table striped hover bordered variant="dark">
              <thead>
                <tr>
                  <th>Memebrts</th>
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
      <Container>
        <Row>
          <Col>
            <Card>Hello</Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
