import { Col, Container, Row } from "react-bootstrap";

import SideBar from "./SideBar";

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
            World
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
