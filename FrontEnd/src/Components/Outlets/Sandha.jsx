/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import { Button, Card, Col, Container } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import SandhaAddModal from "../AddModals/SandhaAdd";
import { useState, useEffect, Fragment } from "react";
import axios from "axios";

const SandhaMainPage = () => {
  const currentDate = new Date();
  const MonthList = [
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
  const lastMonth = MonthList[currentDate.getMonth() - 1];
  const thismonth = MonthList[currentDate.getMonth()];

  const [loading, setLoading] = useState(true);

  const [ThisMonthSandhaDetails, setThisMonthSandhaDetails] = useState([]);
  const [ThisMonthSandhaSum, setThisMonthSandhaSum] = useState();
  const [LastMonthSandhaSum, setLastMonthSandhaSum] = useState(); //fetchThisMonthSandhaSum
  const [LastMonthSandhaDetails, setLastMonthSandhaDetails] = useState([]);
 //fetchLastMonthSandhaSum

  useEffect(() => {
    const fetchLastMonthSandhaDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:8000/Sandha/Month/${lastMonth}`
        );

        if (response.data) {
          // const allSandhaDetails = response.data.AllSandhaDetails || [];
          // const sandhaSum =
          //   response.data.SandhaSum && response.data.SandhaSum.length > 0
          //     ? response.data.SandhaSum[0].TotalAmount
          //     : 0;

          // setThisMonthSandhaDetails(allSandhaDetails);
          // setThisMonthSandhaSum(sandhaSum);
          setLastMonthSandhaDetails(response.data?.AllSandhaDetails );
          setLastMonthSandhaSum(response.data.SandhaSum[0]?.TotalAmount );
        }
      } catch (err) {
        alert(err);
      setThisMonthSandhaDetails([]);
      setThisMonthSandhaSum(0);
      } finally {
        setLoading(false);
      }
    };

    const fetchThisMonthSandhaDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/Sandha/Month/${thismonth}`
        );

        setThisMonthSandhaDetails(response.data.AllSandhaDetails);
        setThisMonthSandhaSum(response.data.SandhaSum[0]?.TotalAmount);
        setLoading(false);
      } catch (err) {
        console.log(err);
        alert(err);
      }
    };

    fetchThisMonthSandhaDetails();
    fetchLastMonthSandhaDetails();
  }, [ThisMonthSandhaSum,LastMonthSandhaSum]);

  console.log(ThisMonthSandhaSum);

  const [ModalShow, setModalShow] = useState(false);
  return (
    <Fragment>
      <Container fluid>
        {loading ? (
          <h1>Loading</h1>
        ) : (
          <div className="Front-cards-Background-card  mt-3 ">
            <Col className="d-flex">
              <h3 className="text-white">Sandha Details</h3>

              <div className="ms-auto">
                <Button className="me-2" onClick={() => setModalShow(true)}>
                  Print Sandha
                </Button>
                <Button onClick={() => setModalShow(true)}>Add Sandha</Button>
                <SandhaAddModal
                  show={ModalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
            </Col>
          </div>
        )}

        {loading ? (
          <h1>Loading</h1>
        ) : (
          <div className="d-flex flex-wrap  mt-3 Front-cards-Background-card   ">
            <Col md={6} xs={12} lg={4} xl={3} className="">
              <Link to="this-month">
                <Card className="d-flex flex-column me-md-1 my-2">
                  <Card.Body className="d-flex flex-row justify-content-between">
                    <div>
                      {" "}
                      <h2>Rs.{ThisMonthSandhaSum} </h2>
                      <Card.Title>{thismonth} - Income </Card.Title>
                    </div>
                    <span>Icon</span>
                  </Card.Body>
                </Card>{" "}
              </Link>
            </Col>

            <Col md={6} xs={12} lg={4} xl={3} className="">
              <Link to="last-month">
                <Card className="d-flex flex-column me-md-1 my-2">
                  <Card.Body className="d-flex flex-row justify-content-between">
                    <div>
                      {" "}
                      <h2>Rs. {LastMonthSandhaSum}</h2>
                      <Card.Title style={{ fontSize: "18px" }}>
                        {lastMonth} - Income
                      </Card.Title>
                    </div>
                    <span>Icon</span>
                  </Card.Body>
                </Card>{" "}
              </Link>
            </Col>

            <Col md={6} xs={12} lg={4} xl={3} className="">
              <Link to="#">
                <Card className="d-flex flex-column me-md-1 my-2">
                  <Card.Body className="d-flex flex-row justify-content-between">
                    <div>
                      {" "}
                      <h2>{ThisMonthSandhaDetails.length}</h2>
                      <Card.Title>{thismonth} - Paid Members </Card.Title>
                    </div>
                    <span>Icon</span>
                  </Card.Body>
                </Card>{" "}
              </Link>
            </Col>

            <Col md={6} xs={12} lg={4} xl={3} className="">
              <Link to="#">
                <Card className="d-flex flex-column me-md-1 my-2">
                  <Card.Body className="d-flex flex-row justify-content-between">
                    <div>
                      {" "}
                      <h2>{LastMonthSandhaDetails.length}</h2>
                      <Card.Title>{lastMonth}-Paid Members </Card.Title>
                    </div>
                    <span>Icon</span>
                  </Card.Body>
                </Card>{" "}
              </Link>
            </Col>
          </div>
        )}
      </Container>
      <Container className="">
        <Col md={12} className=" my-3  ps-0  pe-0 pe-md-3">
          <Outlet />
        </Col>
      </Container>
    </Fragment>
  );
};

export default SandhaMainPage;
