import axios from "axios";
import {
  RegisterRequest,
  RegisterSuccess,
  Registerfailed,
  loginRequest,
  loginSuccess,
  loginfailed,
} from "../Slices/authSlice";
import Swal from "sweetalert2";

export const login = (Email, Password) => async (dispatch) => {
  try {
    dispatch(loginRequest());

    const response = await axios.post(
      "http://localhost:8000/api/user/login",
      { Email, Password },
      { withCredentials: true }
    );

    dispatch(loginSuccess(response.data.user));

    Swal.fire({
      icon: "success",
      title: "Login Successful!",
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
    });
    setTimeout(() => {
      window.location.href = "/";
    }, 1500);
  } catch (e) {
    dispatch(loginfailed(e.response?.data?.message));
    Swal.fire({
      icon: "error",
      title: `Login Failed! <br/> `,
      text: `${e.response?.data?.message}`,
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });
  }
};

export const register =
  (Email, Password, Phone, Name, OrganizationName) => async (dispatch) => {
    try {
      dispatch(RegisterRequest());
      const response = await axios.post(
        "http://localhost:8000/api/user/register",
        { Email, Password, OrganizationName, Phone, Name },
        { withCredentials: true }
      );
      Swal.fire({
        icon: "success",
        title: "Login Successful!",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      });
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    

      dispatch(RegisterSuccess(response.data.user));
    } catch (err) {
      dispatch(Registerfailed(err.response.data.message));
      Swal.fire({
        icon: "error",
        title: `Login Failed! <br/> `,
        text: `${err.response?.data?.message}`,
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
    }
  };
