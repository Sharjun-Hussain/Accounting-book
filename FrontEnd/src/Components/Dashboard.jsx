import {
  Col,
  Container,
  Row,
  Offcanvas,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

import { item } from "../Data/Navigation";
import logoWhite from "../assets/Icons/logo-white.svg";
import SideBar from "./SideBar";
import { Outlet, NavLink } from "react-router-dom";
import { useState } from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/UserActions";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
const Dashboard = (props) => {
  const date = new Date().toISOString().substring(0, 10);
  const [show, setshow] = useState(false); //offcanvas state
  const handleOffcanvasClose = () => setshow(false);
  const handleOffcanvasOpen = () => setshow(true);
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.authState.user);

  const HandleSignOut = async () => {
    dispatch(logout);
  };
  return (
    <>
      <Container fluid className="dashboard">
        <Row className="Header-design">
          <Col>
            <Offcanvas
              className="bg-dark text-white"
              show={show}
              onHide={handleOffcanvasClose}
              {...props}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Dashboard</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <ul>
                  {item.map((item) => {
                    return (
                      <NavLink
                        to={item.path}
                        className="d-flex ps-3 ps-3"
                        onClick={handleOffcanvasClose}
                        key={item.id}
                      >
                        {({ isActive }) => (
                          <>
                            {isActive ? <item.activeIcon /> : <item.icon />}
                            <span>&nbsp;{item.name}</span>
                          </>
                        )}
                      </NavLink>
                    );
                  })}
                </ul>
              </Offcanvas.Body>
            </Offcanvas>
            <div className="pt-4 mb-4 text-white d-flex my-auto topBar ">
              <GridViewIcon
                onClick={handleOffcanvasOpen}
                className="d-block d-md-none my-auto ms-2"
              />
              <div className="d-flex mx-auto mx-md-0">
                <img src={logoWhite} width={30} className="ms-3 me-1" />
                <div className="my-auto ">Dashboard </div>
              </div>
              <div className="my-auto me-auto  ms-2 d-none d-md-flex">
                {" "}
                - Majidhul Haadhi{" "}
              </div>

              <div className="ms-auto me-3">
                <DropdownButton
                  id="dropdown-basic-button"
                  className="custom-dropdown-button"
                  title={<AccountCircleTwoToneIcon sx={{ fontSize: "35px" }} />}
                >
                  <Dropdown.Item href="Settings">Settings</Dropdown.Item>
                  <Dropdown.Item onClick={HandleSignOut}>SignOut</Dropdown.Item>
                </DropdownButton>
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
