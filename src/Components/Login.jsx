import React, { useState, useEffect } from 'react'
import logo from '../Assets/logo1.png';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import adminLogin from '../Assets/Admin/adminLogin2.png'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {redirect,useNavigate} from 'react-router-dom'


const Login = () => {
    
   
    document.title = "Admin Login"
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [ResponseData, setResponseData] = useState('');


    const HandleSubmit = async (e) => {
        
        e.preventDefault();

       const response = await axios.post("/admin/login", JSON.stringify({ Email, Password }), {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            console.log(response.data);
            toast.success("Login SuccesFull")
            setResponseData(response.data.token);
            localStorage.setItem("token", response.data.token)
            // redirect("/admin/dashboard")
            window.location.href = "/admin/dashboard";
            // const as = async() => {
            //     await axios.get("/admin/dashboard").then (response => {
            //         
            //     })
            // }
            // as();
            
            
            
        })
        
            .catch(error => {
                console.log(error);
                toast.error(error.message )
            });
    }



    return (
        <>
            <Container fluid >
                <ToastContainer />
                <Row className='bg-white py-2'>

                    <Col md={1} >
                        <div className='justify-content-center '>
                            <img src={logo} alt="Logo" width={80} height={60} />
                        </div>
                    </Col>
                    <Col md={11}>

                        <div>
                            <h2 className='text-center text-dark pt-2'>EventSpot</h2>
                        </div>
                    </Col>
                </Row>

                <Row className='adminLoginContainer' >

                    <Col md={12} sm={12} className='text-white d-flex justify-content-center align-items-center'>
                        <div style={{ height: "450px", width: "80vw" }}>

                            <div className='adminLoginDiv d-flex flex-row '>
                                <Col md={6} className='d-flex justify-content-start align-items-center' >
                                    <div >
                                        <img src={adminLogin} alt="dfs" width={500} height={350} />
                                    </div>
                                </Col>
                                <Col md={6} className='AdminLoginSpan'>
                                    <div>
                                        <div>
                                            <h1 className='text-center text-white '>Login Here</h1>
                                        </div>

                                        <div >
                                            <Form onSubmit={HandleSubmit} >


                                                <div className=' d-flex flex-column pt-2 pb-1'>
                                                    <label  htmlFor="email">Email:</label>
                                                    <input type="email" id="email" name="Email" placeholder='Enter Email' value={Email} onChange={(e) => setEmail(e.target.value)} required></input>
                                                </div>

                                                <div className='pt-2 pb-1 d-flex flex-column'>
                                                    <label  htmlFor="password">Password:</label>
                                                    <input type="password" id="password" name="Password" placeholder='Enter Password' value={Password} onChange={(e) => setPassword(e.target.value)} required></input>
                                                </div>
                                                <div className='py-1'>
                                                    <label className='pe-3'  htmlFor="remember">RememberMe:</label>
                                                    <input type="checkbox" id="remember" name="remember" />

                                                </div>
                                                <div className="text-center pt-3 " >
                                                    <Button type="submit" className="adminLoginBtn">Login</Button>
                                                </div>
                                            </Form>
                                        </div>
                                    </div>
                                </Col>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Login




{/* <Container fluid>
<Row>
    <Col className='bg-primary  py-3' >
        <div >
            <div >
                <img src={logo} width='80' height='60' />
            </div>

            <div >
                <h1 className="text-white adminheading "  >EventSpot</h1>
            </div>

        </div>
    
</Col>
</Row>
<Row>
<Col>
<Container>
    <Row>
        <Col>
        <div  className='bg-warning d-flex justify-content-between'>
           <div>
           hello
           </div>
           <div>
            hello   
           </div>
        </div>
        </Col>
    </Row>
</Container>
</Col>
</Row>
</Container> */}