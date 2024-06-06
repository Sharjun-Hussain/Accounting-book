import {
  Col,
  Container,
  Row,
  Offcanvas,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import logoWhite from "../assets/Icons/logo-white.svg";
import SideBar from "./SideBar";
import { Outlet, NavLink } from "react-router-dom";
import { Suspense, useState } from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import SummarizeIcon from "@mui/icons-material/Summarize";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import PaidIcon from "@mui/icons-material/Paid";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import SettingsIcon from "@mui/icons-material/Settings";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/UserActions";
const Dashboard = (props) => {
  const date = new Date().toISOString().substring(0, 10);
  const [show, setshow] = useState(false); //offcanvas state
  const handleOffcanvasClose = () => setshow(false);
  const handleOffcanvasOpen = () => setshow(true);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authState.user);

  const HandleSignOut = async () => {
    dispatch(logout);
  };
  return (
    <>
      <Container fluid className="dashboard">
        <Row>
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
                  <NavLink
                    to="/"
                    className="d-flex ps-3 ps-3"
                    onClick={handleOffcanvasClose}
                  >
                    {({ isActive }) => (
                      <>
                        {isActive ? (
                          <SpaceDashboardIcon />
                        ) : (
                          <SpaceDashboardOutlinedIcon />
                        )}
                        <span>&nbsp;Dashboard</span>
                      </>
                    )}
                  </NavLink>

                  <NavLink
                    to="report"
                    className="d-flex ps-3"
                    onClick={handleOffcanvasClose}
                  >
                    {({ isActive }) => (
                      <>
                        {isActive ? (
                          <SummarizeIcon />
                        ) : (
                          <SummarizeOutlinedIcon />
                        )}
                        <span>&nbsp;Report</span>
                      </>
                    )}
                  </NavLink>
                  <NavLink
                    to="/Accounts"
                    className="d-flex ps-3"
                    onClick={handleOffcanvasClose}
                  >
                    {({ isActive }) => (
                      <>
                        {isActive ? (
                          <AccountBalanceWalletIcon />
                        ) : (
                          <AccountBalanceWalletOutlinedIcon />
                        )}
                        <span>&nbsp;Accounts</span>
                      </>
                    )}
                  </NavLink>
                  <NavLink
                    to="/Members"
                    className="d-flex ps-3"
                    onClick={handleOffcanvasClose}
                  >
                    {({ isActive }) => (
                      <>
                        {isActive ? <PeopleAltIcon /> : <PeopleOutlinedIcon />}
                        <span>&nbsp;Members</span>
                      </>
                    )}
                  </NavLink>
                  <NavLink
                    to="/Transaction"
                    className="d-flex ps-3"
                    onClick={handleOffcanvasClose}
                  >
                    {({ isActive }) => (
                      <>
                        {isActive ? (
                          <ReceiptLongIcon />
                        ) : (
                          <ReceiptLongOutlinedIcon />
                        )}
                        <span>&nbsp;Transaction</span>
                      </>
                    )}
                  </NavLink>
                  <NavLink
                    to="/Sandha"
                    className="d-flex ps-3"
                    onClick={handleOffcanvasClose}
                  >
                    {({ isActive }) => (
                      <>
                        {isActive ? <PaidIcon /> : <PaidOutlinedIcon />}
                        <span>&nbsp;Sandha</span>
                      </>
                    )}
                  </NavLink>
                  <NavLink
                    to="/Donations"
                    className="d-flex ps-3"
                    onClick={handleOffcanvasClose}
                  >
                    {({ isActive }) => (
                      <>
                        {isActive ? (
                          <VolunteerActivismIcon />
                        ) : (
                          <VolunteerActivismOutlinedIcon />
                        )}
                        <span>&nbsp;Donations</span>
                      </>
                    )}
                  </NavLink>
                  <NavLink
                    to="/Settings"
                    className="d-flex ps-3"
                    onClick={handleOffcanvasClose}
                  >
                    {({ isActive }) => (
                      <>
                        {isActive ? <SettingsIcon /> : <SettingsOutlinedIcon />}
                        <span>&nbsp;Settings</span>
                      </>
                    )}
                  </NavLink>
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
                <div className="my-auto ">Dashboard -{date} </div>
              </div>

              <div className="ms-auto me-3">
                <DropdownButton id="dropdown-basic-button" title="Admin">
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
            <Suspense fallback="Loading">
              <Outlet />
            </Suspense>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
