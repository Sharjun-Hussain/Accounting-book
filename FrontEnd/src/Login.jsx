import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import hadhiLogo from "./assets/images/hadhi-logo.png";
const Login = () => {
  return (
    <Container fluid className="login-Container">
      <Row>
        <Col>
          <div className="login-card">
            <div className="d-flex justify-content-center flex-column ">
              <Image className="login-logo" src={hadhiLogo} />
              <h2 className="text-center">Masjidhul Haadhi</h2>
              <h4 style={{marginTop:"-13px", color:"#00728B"}} className="text-center "> Accounting Book</h4>
            </div>
            <hr  />
            <Form.Group>
              <Form.Label style={{marginBottom:"-5px" , color:"white"}}>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Your Email Address"
                className="form-control"
              />
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label style={{marginBottom:"-5px" , color:"white"}}>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter The Password"
                className="form-control"
              />
            </Form.Group>

            <Button className="login-btn">Login</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
