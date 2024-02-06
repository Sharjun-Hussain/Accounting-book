import { Col, Container, Row } from "react-bootstrap";
import logoWhite from "../assets/Icons/logo-white.svg";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import user from '../assets/Icons/user.png'

const Dashboard = () => {
  // const [date, setDate] = useState(new Date().toISOString().substr(0, 10)); --> Date

  return (
    <>
      <Container fluid className="dashboard">
        <Row>
          <Col>
            <div className="pt-4 mb-4 text-white d-flex my-auto topBar ">
              <img src={logoWhite} width={30} className="ms-3 me-1" />
              <div className="my-auto">DASHBOARD</div>
              <img className="ms-auto userIcon " style={{marginInline:"12px"}} src={user} width={35} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={2} className="sidebar p-0">
            <SideBar />
          </Col>
          <Col md={10} className="dashboard-wrapper  ">
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
