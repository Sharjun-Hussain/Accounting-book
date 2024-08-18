/* eslint-disable react/no-unescaped-entities */
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import hadhiLogo from "./assets/images/hadhi-logo.png";
import { useState, useRef, useEffect } from "react";
import bg4 from "./assets/images/bg3.jpg";
import { Link, useNavigate } from "react-router-dom";
import { login } from "./redux/actions/UserActions";
import { useDispatch, useSelector } from "react-redux";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";

const Login = () => {
  const Navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const inputref = useRef(null);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.authState);

  useEffect(() => {
    inputref.current.focus();
  }, []);

  const HandleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(Email, Password));
    setTimeout(() => {
      Navigate("/");
    }, 2000);
  };

  return (
    <Container
      style={{ backgroundImage: `url(${bg4})` }}
      fluid
      className="login-Container"
    >
      <Row>
        <Col>
          <div className="login-card">
            <div className="d-flex justify-content-center flex-column ">
              <Image className="login-logo" src={hadhiLogo} />

              <h2 className="text-center">Majidhul Haadhi</h2>
              <h4
                style={{ marginTop: "-13px", color: "#00728B" }}
                className="text-center "
              >
                {" "}
                Accounting Book
              </h4>
            </div>
            <hr />
            <Form onSubmit={HandleSubmit}>
              <Form.Group>
                <Form.Label style={{ marginBottom: "-5px", color: "white" }}>
                  Email
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="form-control"
                  name="Email"
                  autoComplete="false"
                  aria-autocomplete="false"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  ref={inputref}
                />
              </Form.Group>
              <Form.Group className="mt-2">
                <Form.Label style={{ marginBottom: "-5px", color: "white" }}>
                  Password
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter The Password"
                  className="form-control"
                  name="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Group>
              <div className="d-flex justify-content-between">
                <Form.Check
                style={{fontSize:"13px"}}
                  className="text-white mt-1"
                  type="checkbox"
                  id="custom-switch"
                  label="Remember Me"
                />
                <Link to="/forgot-password" style={{fontSize:"13px"}}
                  className="text-white mt-1">
                  Forgot Password?
                </Link>
              </div>

              <Button type="submit" className="login-btn" disabled={loading}>
                {loading ? <div className="loader"></div> : "Login"}
              </Button>

              <Col className="d-flex justify-content-center mt-4">
                <div>
                  <div className="text-white">or continue with</div>
                  <div className="d-flex flex-xol justify-content-around my-2">
                    <div className="social-login">
                      <GoogleIcon className="text-white social-icon" />
                    </div>
                    <div className="social-login">
                      <FacebookRoundedIcon className="text-white social-icon" />
                    </div>
                    <div className="social-login">
                      <GoogleIcon className="text-white social-icon" />
                    </div>
                  </div>
                </div>
              </Col>

              <div className="text-center text-white mt-3">
                Don't have an account?&nbsp;{" "}
                <Link to="/register" className="login-signup-signin-btn">
                  Signup Here
                </Link>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
