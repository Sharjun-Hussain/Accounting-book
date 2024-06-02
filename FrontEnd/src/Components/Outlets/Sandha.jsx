/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import { Button, Card, Col, Container } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import SandhaAddModal from "../AddModals/SandhaAdd";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setLastMonthSandhaDetails, setThisMonthSandhaDetails } from "../../redux/Slices/SandhaSlice";

const SandhaMainPage = () => {
  const {ThisMonthSandhaDetails, LastMonthSandhaDetails}= useSelector(state => state.SandhaState)
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
  const thismonth = MonthList[currentDate.getMonth()];
  const lastMonth = MonthList[currentDate.getMonth() - 1];
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [ThisMonthSandhaSum, setThisMonthSandhaSum] = useState(); //fetchThisMonthSandhaSum
  const [LastMonthSandhaSum, setLastMonthSandhaSum] = useState(); //fetchLastMonthSandhaSum

// const local = JSON.parse(localStorage.getItem(san))
//   console.log(local);

useEffect(() => {
  const fetchThisMonthSandhaDetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/Sandha/Month/${thismonth}`
      );
      dispatch(setThisMonthSandhaDetails(response.data))
      localStorage.setItem('sandhaDetails', JSON.stringify(response.data))
    } catch (err) {
      console.log(err);
    }
  };

  const fetchLastMonthSandhaDetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/Sandha/Month/${lastMonth}`
      );
      dispatch(setLastMonthSandhaDetails(response.data))
    } catch (err) {
      console.log(err);
    }
  }
  fetchThisMonthSandhaDetails()
  fetchLastMonthSandhaDetails()
}, [])


  const [ModalShow, setModalShow] = useState(false);
  return (
    <>
      <Container fluid>
        <>
          <div className="Front-cards-Background-card  mt-3 ">
            <Col className="d-flex">
              <h3 className="text-white">Sandha Details</h3>

              <div className="ms-auto">
              <Button className="me-2" onClick={() => setModalShow(true)}>Print Sandha</Button>
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
          
          {ThisMonthSandhaDetails && ThisMonthSandhaDetails.SandhaSum && ThisMonthSandhaDetails.SandhaSum.length > 0 && (
           
            <Col md={6} xs={12} lg={4} xl={3} className="">
              <Link to="this-month">
                <Card className="d-flex flex-column me-md-1 my-2">
                  <Card.Body className="d-flex flex-row justify-content-between">
                    <div>
                      {" "}
                      <h2>Rs.{ThisMonthSandhaDetails.SandhaSum[0].TotalAmount} </h2>
                      <Card.Title>{thismonth} -  Income </Card.Title>
                    </div>
                    <span>Icon</span>
                  </Card.Body>
                </Card>{" "}
              </Link>
            </Col>
          )}

            {LastMonthSandhaDetails && LastMonthSandhaDetails.SandhaSum && LastMonthSandhaDetails.SandhaSum.length > 0 && (
              <Col md={6} xs={12} lg={4} xl={3} className="">
              <Link to="last-month">
                <Card className="d-flex flex-column me-md-1 my-2">
                  <Card.Body className="d-flex flex-row justify-content-between">
                    <div>
                      {" "}
                      <h2>Rs. {LastMonthSandhaDetails.SandhaSum[0].TotalAmount}</h2>
                      <Card.Title style={{ fontSize: "18px" }}>
                        {lastMonth} - Income
                      </Card.Title>
                    </div>
                    <span>Icon</span>
                  </Card.Body>
                </Card>{" "}
              </Link>
            </Col>
            )}

{ThisMonthSandhaDetails && ThisMonthSandhaDetails.SandhaSum && ThisMonthSandhaDetails.SandhaSum.length > 0 && (
            <Col md={6} xs={12} lg={4} xl={3} className="">
              <Link to="#">
                <Card className="d-flex flex-column me-md-1 my-2">
                  <Card.Body className="d-flex flex-row justify-content-between">
                    <div>
                      {" "}
                      <h2>{ThisMonthSandhaDetails.AllSandhaDetails.length}</h2>
                      <Card.Title>{thismonth} - Paid Members </Card.Title>
                    </div>
                    <span>Icon</span>
                  </Card.Body>
                </Card>{" "}
              </Link>
            </Col>
            )}

            {LastMonthSandhaDetails && LastMonthSandhaDetails.SandhaSum && LastMonthSandhaDetails.SandhaSum.length > 0 && (
            <Col md={6} xs={12} lg={4} xl={3} className="">
              <Link to="#">
                <Card className="d-flex flex-column me-md-1 my-2">
                  <Card.Body className="d-flex flex-row justify-content-between">
                    <div>
                      {" "}
                      <h2>{LastMonthSandhaDetails.AllSandhaDetails.length}</h2>
                      <Card.Title>{lastMonth}-Paid Members </Card.Title>
                    </div>
                    <span>Icon</span>
                  </Card.Body>
                </Card>{" "}
              </Link>
            </Col>
            )}
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
