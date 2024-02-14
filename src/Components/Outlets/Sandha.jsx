
import { Button, Card, Col, Container } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import SandhaAddModal from "../AddModals/SandhaAdd";
import { useState } from "react";

const SandhaMainPage = () => {
  // const today = new Date();
  // const months = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  //   "August",
  //   "September",
  //   "October",
  //   "November",
  //   "December",
  // ];
  // const ThisMonth = months[today.getMonth()];
  // const PreviousMonth = months[today.getMonth() - 1];
  const [ModalShow, setModalShow] = useState(false);
  return (
    <>
      <Container fluid>
        <>
          <div className="Front-cards-Background-card  mt-3 ">
            <Col className="d-flex">
              <h3 className="text-white">Sandha Details</h3>

              <div className="ms-auto">
                <Button onClick={() => setModalShow(true)}>Add Sandha</Button>
                <SandhaAddModal
                  show={ModalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
            </Col>
          </div>
        </>
        <>
          <div className="d-flex flex-wrap  mt-3 Front-cards-Background-card   ">
            <Col md={6} xs={12} lg={4} xl={3} className="">
              <Link to="this-month">
                <Card className="d-flex flex-column me-md-1 my-2">
                  <Card.Body className="d-flex flex-row justify-content-between">
                    <div>
                      {" "}
                      <h2>Rs . 10,000</h2>
                      <Card.Title>இம்மாத சந்தா </Card.Title>
                    </div>
                    <span>Icon</span>
                  </Card.Body>
                </Card>{" "}
              </Link>
            </Col>

            <Col md={6} xs={12} lg={4} xl={3} className="">
              <Link to="this-month">
                <Card className="d-flex flex-column me-md-1 my-2">
                  <Card.Body className="d-flex flex-row justify-content-between">
                    <div>
                      {" "}
                      <h2>Rs . 10,000</h2>
                      <Card.Title>இம்மாத சந்தா </Card.Title>
                    </div>
                    <span>Icon</span>
                  </Card.Body>
                </Card>{" "}
              </Link>
            </Col>

            <Col md={6} xs={12} lg={4} xl={3} className="">
              <Link to="this-month">
                <Card className="d-flex flex-column me-md-1 my-2">
                  <Card.Body className="d-flex flex-row justify-content-between">
                    <div>
                      {" "}
                      <h2>Rs . 10,000</h2>
                      <Card.Title>இம்மாத சந்தா </Card.Title>
                    </div>
                    <span>Icon</span>
                  </Card.Body>
                </Card>{" "}
              </Link>
            </Col>

            <Col md={6} xs={12} lg={4} xl={3} className="">
              <Link to="this-month">
                <Card className="d-flex flex-column me-md-1 my-2">
                  <Card.Body className="d-flex flex-row justify-content-between">
                    <div>
                      {" "}
                      <h2>Rs . 10,000</h2>
                      <Card.Title>இம்மாத சந்தா </Card.Title>
                    </div>
                    <span>Icon</span>
                  </Card.Body>
                </Card>{" "}
              </Link>
            </Col>

            <Col md={6} xs={12} lg={4} xl={3} className="">
              <Link to="this-month">
                <Card className="d-flex flex-column me-md-1 my-2">
                  <Card.Body className="d-flex flex-row justify-content-between">
                    <div>
                      {" "}
                      <h2>Rs . 10,000</h2>
                      <Card.Title>இம்மாத சந்தா </Card.Title>
                    </div>
                    <span>Icon</span>
                  </Card.Body>
                </Card>{" "}
              </Link>
            </Col>

            <Col md={6} xs={12} lg={4} xl={3} className="">
              <Link to="this-month">
                <Card className="d-flex flex-column me-md-1 my-2">
                  <Card.Body className="d-flex flex-row justify-content-between">
                    <div>
                      {" "}
                      <h2>Rs . 10,000</h2>
                      <Card.Title>இம்மாத சந்தா </Card.Title>
                    </div>
                    <span>Icon</span>
                  </Card.Body>
                </Card>{" "}
              </Link>
            </Col>

            

           

            

            

            
          </div>
        </>
      </Container>
      <Container className="">
        <>
          <Col md={12} className=" my-3  ps-0  pe-0 pe-md-3">
            <Outlet />
          </Col>
        </>
      </Container>
    </>
  );
};

export default SandhaMainPage;
