import { Col, Container, Row } from "react-bootstrap";
import logoWhite from '../assets/Icons/logo-white.svg'
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <Container fluid>
        <div className="pt-4 mb-4 text-white"><img src={logoWhite} width={30} className="ms-3 me-1"  />DASHBOARD</div>
        <Row>
          <Col md={2} className="sidebar p-0">
            <SideBar />
          </Col>
          <Col md={10} className="dashboard-wrapper ">
        <Outlet/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
