import React from 'react'
import { Card, Col, Container, Row, Button, Navbar, Nav } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes, Outlet, } from "react-router-dom";
import MyNavbar from './AdminNavBar'
import { NavLink, useLocation } from 'react-router-dom'
import { FiLogOut } from 'react-icons/fi'
import { HiUserCircle } from 'react-icons/hi'
import ReactSearchBox from "react-search-box";
import logo2 from '../Assets/card2.png'
import { MdDashboard } from 'react-icons/md';
import { TbArrowAutofitUp } from 'react-icons/tb';
import { BsReverseLayoutSidebarReverse } from "react-icons/bs";
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';





function Dashboard() {
    const date = new Date();
    const currentDate = date.toDateString();
    const currentTime = date.toLocaleTimeString();

    const [HallAvailablity, setHallAvailablity] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responce = await axios.get(`/admin/api/halls`)
                await setHallAvailablity(...HallAvailablity, responce.data.Halls);
                console.log(HallAvailablity)
            } catch (err) {
                console.log(err);
            }

        }
        fetchData();
    }, [])

    return (
        <div>
            <MyNavbar />

            <Container fluid>
                <Row>

                    <Col sm={3} md={2} className=" AdminDashboardSideBar ">
                        <NavLink   to={"/admin/dashboard"} className='AdminDashboardSideBarItemText '>
                            <div className='AdminDashboardSideBarItem'>
                                <MdDashboard size={18} className='mx-3' />    Dashboard

                            </div></NavLink>
                        <NavLink   to={"/admin/dashboard/PendingBookings"} className='AdminDashboardSideBarItemText'>
                            <div className='AdminDashboardSideBarItem'>
                                <TbArrowAutofitUp size={18} className='mx-3' />  Pending Bookings
                            </div></NavLink>
                        <NavLink   to={"/admin/dashboard/AcceptedBookings"} className='AdminDashboardSideBarItemText'>
                            <div className='AdminDashboardSideBarItem'>
                                <TbArrowAutofitUp size={18} className='mx-3' />  Accepted Bookings
                            </div></NavLink>
                        <NavLink   to={"/admin/dashboard/ClosedBookings"} className='AdminDashboardSideBarItemText'>
                            <div className='AdminDashboardSideBarItem'>
                                <TbArrowAutofitUp size={18} className='mx-3' />  Closed Bookings
                            </div></NavLink>
                        <NavLink   to={"/admin/dashboard/Halls"} className='AdminDashboardSideBarItemText'>
                            <div className='AdminDashboardSideBarItem'>
                                <BsReverseLayoutSidebarReverse size={18} className='mx-3' />   Hall Details
                            </div></NavLink>
                        <NavLink   to={"/admin/dashboard/addhall"} className='AdminDashboardSideBarItemText'>
                            <div className='AdminDashboardSideBarItem'>
                                <BsReverseLayoutSidebarReverse size={18} className='mx-3' />   Add Hall
                            </div></NavLink>

                    </Col>


                    {/* Content Area */}
                    <Col sm={9} md={10} className="content bg-white">
                        {location.pathname === "/admin/dashboard" ? <div className='d-flex flex-column justify-content-center align-items-center h-100'>
                            {/* <table>
                                <tr>
                                    <th style={{ width: "250px" }}>Hall_ID</th>
                                    <th style={{ width: "250px" }}>CUSTOMER NAME</th>
                                    <th style={{ width: "250px" }}>DATE</th>
                                    <th style={{ width: "250px" }}>STATUS</th>


                                </tr>

                               

                            </table> */}

                            {/* <h3>Today Date Is {currentDate}</h3> */}
                            <div className='d-flex flex-column'>

                                {Object.values(HallAvailablity).map((datass, indexx) => (
                                    <Card key={indexx} style={{ width: "350px" }}>
                                        <Card.Body>
                                            <h4>{datass.HallName}</h4>
                                            <h6 className={datass.Status === `Available` ? `text-success` : `text-danger`}>{datass.Status}</h6>
                                        </Card.Body>
                                    </Card>


                                ))}
                            </div>


                        </div> : <Outlet />}
                    </Col>
                </Row>
            </Container>


        </div>




    );
}

export default Dashboard

