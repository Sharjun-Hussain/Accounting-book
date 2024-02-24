import { Col, Container, Row } from "react-bootstrap";
import logoWhite from "../assets/Icons/logo-white.svg";
import SideBar from "./SideBar";
import { Link, Outlet } from "react-router-dom";
import user from '../assets/Icons/user.png'
import { useState } from "react";


const Dashboard = () => {
  // const [date, setDate] = useState(new Date().toISOString().substr(0, 10)); --> Date
  const [DropDown, setDropDown] = useState(false);

  const HandleDropDown =() =>{
    setDropDown(prev => !prev);
    
  }

  return (
    <>
      <Container fluid className="dashboard">
        <Row>
          <Col>
            <div className="pt-4 mb-4 text-white d-flex my-auto topBar ">
              <img src={logoWhite} width={30} className="ms-3 me-1" />
              <div className="my-auto">DASHBOARD</div>
              <img className={ `${DropDown && "animate"} ms-auto userIcon `} onClick={HandleDropDown} style={{marginInline:"12px"}} src={user} width={35} />
              <div className={`${DropDown ? "d-block  " : "d-none "} my-auto   `} >
                <Link className="profiledropdown " to="profile">Profile</Link>
                <Link className="profiledropdown " to="signout">SIgnout</Link>
              </div>
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
