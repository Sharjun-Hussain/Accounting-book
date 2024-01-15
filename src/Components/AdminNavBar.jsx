import React, { useState } from 'react';
import { Navbar, Nav, Container, Row, Col,Dropdown  } from 'react-bootstrap';
import { HiUserCircle } from 'react-icons/hi'
import axios from 'axios';
import logo from '../Assets/logo1.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyNavbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);

   

    const HandleLogOut = async (e) => {
        
      e.preventDefault();

     await axios.get("/admin/logout", {
          headers: {
              'Content-Type': 'application/json'
          }
      }).then(response => {
          console.log(response.data);
          toast.success("Logout SuccesFull")
          localStorage.removeItem ("token");
          window.location.href = "/admin/login";
      })
          .catch(error => {
              console.log(error);
              toast.error(error.message )
          });
  }

    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
    };
    return (
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Navbar.Brand h className='d-flex'>
        <img src={logo} height="60" className="d-inline-block align-top ps-3" alt="Logo" />
        <div className='m-auto pt-2 '>Dashboard</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto pe-5">
            <Dropdown alignright show={showDropdown} onToggle={toggleDropdown}>
              <Dropdown.Toggle variant="dark" id="profile-dropdown">
             
            <HiUserCircle  size={30}/>
              </Dropdown.Toggle>
              <Dropdown.Menu alignright>
                <Dropdown.Item to="/admin/profile" >Profile</Dropdown.Item>
               
                <Dropdown.Divider />
                <Dropdown.Item onClick={HandleLogOut}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    );
};

export default MyNavbar;
