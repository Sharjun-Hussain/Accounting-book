import { Col, Container, Row } from "react-bootstrap";

import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <Container fluid>
        <div>Dashboard</div>
        <Row>
          <Col md={2} className="sidebar p-0">
            <SideBar />
          </Col>
          <Col md={10} className="dashboard-wrapper bg-dark">
        <Outlet/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
