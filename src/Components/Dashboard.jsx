import { Col, Container, Row, Form } from "react-bootstrap";
import logoWhite from "../assets/Icons/logo-white.svg";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const Dashboard = () => {
  const [date, setDate] = useState(new Date().toISOString().substr(0, 10));
 
  return (
    <>
      <Container fluid>
        <div className="pt-4 mb-4 text-white">
          <img src={logoWhite} width={30} className="ms-3 me-1" />
          DASHBOARD
        </div>
        <Row>
          <Col md={2} className="sidebar p-0">
            <SideBar />
          </Col>
          <Col md={10} className="dashboard-wrapper ">
            <div className="d-flex justify-content-between ">
              <h5 className="text-white  ">DASHBOARD</h5>
              <Form.Control
                className="w-25"
                type="date"
                name="datepic"
                defaultValue={date}
                
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
