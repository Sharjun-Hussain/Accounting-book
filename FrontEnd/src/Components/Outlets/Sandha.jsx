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

  useEffect(() => {

    const fetchLastMonthSandhaDetails = () =>{
      try {
        setLoading(true);
        axios
          .get(`http://localhost:8000/Sandha/Month/${lastMonth}`)
          .then((data) => dispatch(setLastMonthSandhaDetails(data.data.AllSandhaDetails)));
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }

    const fetchThisMonthSandhaDetails = () =>{
      setLoading(true);
      try {
        axios
          .get(`http://localhost:8000/Sandha/Month/${thismonth}`)
          .then((data) =>
            dispatch(setThisMonthSandhaDetails(data.data.AllSandhaDetails))
          );
  
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    const fetchThisMonthSandhaSum = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/Sandha/Month/${thismonth}/Sum`
        );
        setThisMonthSandhaSum(response.data.AllSandhaDetails[0]?.TotalAmount);
        localStorage.setItem('thismonthsandhasum', ThisMonthSandhaSum)
      } catch (err) {
        console.log(err);
      }
    };

    const fetchLastMonthSandhaSum = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/Sandha/Month/${lastMonth}/Sum`
        );
        setLastMonthSandhaSum(response.data.AllSandhaDetails[0]?.TotalAmount);
        localStorage.setItem('LastMonthSandhaSum', LastMonthSandhaSum)
        console.log(ThisMonthSandhaSum);
      } catch (err) {
        console.log(err);
      }
    };
    fetchThisMonthSandhaDetails();
    fetchLastMonthSandhaDetails();
    fetchThisMonthSandhaSum();
    fetchLastMonthSandhaSum();
  }, [ThisMonthSandhaSum,LastMonthSandhaSum]);

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
            <Col md={6} xs={12} lg={4} xl={3} className="">
              <Link to="this-month">
                <Card className="d-flex flex-column me-md-1 my-2">
                  <Card.Body className="d-flex flex-row justify-content-between">
                    <div>
                      {" "}
                      <h2>Rs.{ThisMonthSandhaSum} </h2>
                      <Card.Title>{thismonth} -  Income </Card.Title>
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
