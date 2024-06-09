import {
  Col,
  Container,
  Row,
  Offcanvas,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Logout from "@mui/icons-material/Logout";

import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import { item } from "../Data/Navigation";
import logoWhite from "../assets/Icons/logo-white.svg";
import SideBar from "./SideBar";
import { Outlet, NavLink } from "react-router-dom";
import { Suspense, useState } from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/UserActions";
const Dashboard = (props) => {
  const date = new Date().toISOString().substring(0, 10);
  const [show, setshow] = useState(false); //offcanvas state
  const handleOffcanvasClose = () => setshow(false);
  const handleOffcanvasOpen = () => setshow(true);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authState.user);

  const [anchorEl, setAnchorEl] = useState();
  const open = Boolean(anchorEl);
  const handleClick = () => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // const HandleSignOut = async () => {
  //   dispatch(logout);
  // };
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
                  {item.map((item, key) => {
                    return (
                      <NavLink
                        to={item.path}
                        className="d-flex ps-3 ps-3"
                        onClick={handleOffcanvasClose}
                        key={key}
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
                <div className="my-auto ">Dashboard -{date} </div>
              </div>

              <div className="ms-auto me-3">
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                  </IconButton>
                </Tooltip>

                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={      {
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&::before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem onClick={handleClose}>
                    <Avatar /> Profile
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Avatar /> My account
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
                <DropdownButton id="dropdown-basic-button" title="Admin">
                  <Dropdown.Item href="Settings">Settings</Dropdown.Item>
                  <Dropdown.Item onClick={handleClick}>SignOut</Dropdown.Item>
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
