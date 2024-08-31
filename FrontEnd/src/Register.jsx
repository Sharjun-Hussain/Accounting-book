import { useState, useRef, useEffect } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import {
  Stepper,
  Step,
  StepLabel,
  Box,
  TextField,
  Typography,
} from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import axios from "axios";
import hadhiLogo from "./assets/images/hadhi-logo.png";
import bg4 from "./assets/images/bg3.jpg";
import { Link } from "react-router-dom";

// Define the steps
const steps = ["Username & Email", "Name & Phone Number", "Password & Submit"];

// Define validation schemas for each step
const validationSchemas = [
  Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  }),
  Yup.object({
    name: Yup.string().required("Name is required"),
    phone: Yup.number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(10)
      .required("A phone number is required"),
  }),
  Yup.object({
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  }),
];

const Register = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleNext = async (values, { setSubmitting }) => {
    if (activeStep === steps.length - 1) {
      setLoading(true);
      try {
        await axios.post("http://localhost:8000/api/user/register", values, {
          withCredentials: true,
        });
        Swal.fire({
          icon: "info",
          title: "Verification Mail Sent",
          text: "A verification link has been sent to your registered email. Please check your inbox.",
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        });
        setActiveStep(0); // Reset to the first step after successful submission
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: "There was an issue with registration. Please try again.",
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        });
      } finally {
        setLoading(false);
      }
    } else {
      setActiveStep((prevStep) => prevStep + 1);
    }
    setSubmitting(false);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Container
      // style={{ backgroundImage: `url(${bg4})` }}
      fluid
      className="login-Container bg-white"
    >
      <Row>
        <Col md={12}>
          <div className="login-card">
            <div className="d-flex justify-content-center flex-column box-two">
              <img className="login-logo" src={hadhiLogo} alt="Hadhi Logo" />
              <h2 className="text-center">Masjidhul Haadhi</h2>
              <h4
                style={{ marginTop: "-13px", color: "#00728B" }}
                className="text-center"
              >
                Accounting Book
              </h4>
            </div>
            <h5 className="text-center">Register Here</h5>
            <hr />
            <Box sx={{ width: "100%" }}>
              <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => (
                  <Step key={index}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <Box sx={{ p: 3 }}>
                {activeStep === steps.length ? (
                  <div>
                    <Typography variant="h6">All steps completed</Typography>
                    <Button onClick={handleReset}>Reset</Button>
                  </div>
                ) : (
                  <Formik
                    initialValues={{
                      username: "",
                      email: "",
                      name: "",
                      phone: "",
                      password: "",
                      confirmPassword: "",
                    }}
                    validationSchema={validationSchemas[activeStep]}
                    onSubmit={handleNext}
                  >
                    {({ isSubmitting }) => (
                      <Form>
                        {activeStep === 0 && (
                          <>
                            <Box sx={{ mb: 2 }}>
                              <Field
                                as={TextField}
                                name="username"
                                label="Username"
                                variant="outlined"
                                fullWidth
                                helperText={<ErrorMessage name="username" />}
                                error={Boolean(
                                  <ErrorMessage name="username" />
                                )}
                                inputRef={inputRef}
                              />
                            </Box>
                            <Box sx={{ mb: 2 }}>
                              <Field
                                as={TextField}
                                name="email"
                                label="Email"
                                type="email"
                                variant="outlined"
                                fullWidth
                                helperText={<ErrorMessage name="email" />}
                                error={Boolean(<ErrorMessage name="email" />)}
                              />
                            </Box>
                          </>
                        )}
                        {activeStep === 1 && (
                          <>
                            <Box sx={{ mb: 2 }}>
                              <Field
                                as={TextField}
                                name="name"
                                label="Name"
                                variant="outlined"
                                fullWidth
                                helperText={<ErrorMessage name="name" />}
                                error={Boolean(<ErrorMessage name="name" />)}
                              />
                            </Box>
                            <Box sx={{ mb: 2 }}>
                              <Field
                                as={TextField}
                                name="phone"
                                label="Phone Number"
                                variant="outlined"
                                fullWidth
                                helperText={<ErrorMessage name="phone" />}
                                error={Boolean(<ErrorMessage name="phone" />)}
                              />
                            </Box>
                          </>
                        )}
                        {activeStep === 2 && (
                          <>
                            <Box sx={{ mb: 2 }}>
                              <Field
                                as={TextField}
                                name="password"
                                label="Password"
                                type="password"
                                variant="outlined"
                                fullWidth
                                helperText={<ErrorMessage name="password" />}
                                error={Boolean(
                                  <ErrorMessage name="password" />
                                )}
                              />
                            </Box>
                            <Box sx={{ mb: 2 }}>
                              <Field
                                as={TextField}
                                name="confirmPassword"
                                label="Confirm Password"
                                type="password"
                                variant="outlined"
                                fullWidth
                                helperText={
                                  <ErrorMessage name="confirmPassword" />
                                }
                                error={Boolean(
                                  <ErrorMessage name="confirmPassword" />
                                )}
                              />
                            </Box>
                          </>
                        )}
                        <Box
                          sx={{
                            mt: 2,
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          {activeStep > 0 && (
                            <Button
                              className="submit-btn"
                              onClick={handleBack}
                              disabled={isSubmitting}
                            >
                              Back
                            </Button>
                          )}
                          <Button
                            className="submit-btn"
                            type="submit"
                            variant="contained"
                            color="primary"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <div className="loader"></div>
                            ) : activeStep === steps.length - 1 ? (
                              "Submit"
                            ) : (
                              "Next"
                            )}
                          </Button>
                        </Box>
                      </Form>
                    )}
                  </Formik>
                )}
              </Box>
            </Box>
            <h6 className="text-white text-center mt-3">
              Already have an account?{" "}
              <Link
                className="login-signup-signin-btn"
                to="/login"
                style={{ color: "red" }}
              >
                Sign In
              </Link>
            </h6>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
