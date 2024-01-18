/* eslint-disable react/no-unescaped-entities */
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

const SandhaMainPage = () => {
  return (
    <>
      <Container>
        <Row>
          <div className="d-flex flex-wrap  mt-3 Front-cards-Background-card   ">
           
              <Col md={4} xs={12} xl={3} className="">
              <Link to="this-month">
                <Card className="d-flex flex-column mx-1 my-2">
                  <Card.Body className="d-flex flex-row justify-content-between  ">
                    <div>
                      {" "}
                      <h2>Rs . 10,000</h2>
                      <Card.Title>Immaadhe Sandha</Card.Title>
                    </div>
                    <span>Icon</span>
                  </Card.Body>
                </Card>
                </Link>
              </Col>
            

            <Col md={4} xs={12} xl={3} className="">
              <Card className="d-flex flex-column mx-1 my-2">
                <Card.Body className="d-flex flex-row justify-content-between  ">
                  <div>
                    {" "}
                    <h2>100</h2>
                    <Card.Title>Santha THanthor</Card.Title>
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
                    <h2>50</h2>
                    <Card.Title> Sandha Tharathor</Card.Title>
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
                    <Card.Title>Due Sandha</Card.Title>
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
                    <Card.Title>Last Month Sandha</Card.Title>
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
                    <Card.Title>Last Month Due Sandha</Card.Title>
                  </div>
                  <span>Icon</span>
                </Card.Body>
              </Card>
            </Col>
          </div>
        </Row>
      </Container>
      <Container className="">
        <Row>
          <Col md={12} className=" my-3  ps-0  pe-0 pe-md-3">
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SandhaMainPage;
