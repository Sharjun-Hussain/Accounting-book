import axios from "axios";
import { removeCookie } from "react-use-cookie";
import {
  Logout,
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
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + "days");
    const userName = `Name=${response.data.user.Name };expires=${expirationDate.toUTCString()};path=/`;
    const userPhone = `Phone=${response.data.user.Phone };expires=${expirationDate.toUTCString()};path=/`;
    const userOrganizationName = `OrganizationName=${response.data.user.OrganizationName };expires=${expirationDate.toUTCString()};path=/`;
    const userEmail = `Email=${response.data.user.Email };expires=${expirationDate.toUTCString()};path=/`;
    document.cookie = userName;
    document.cookie = userPhone;
    document.cookie = userOrganizationName;
    document.cookie = userEmail
   
    Swal.fire({
      icon: "success",
      title: "Login Successful!",
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
    });
    
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
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + "days");
      const userName = `Name=${response.data.user.Name };expires=${expirationDate.toUTCString()};path=/`;
      const userPhone = `Phone=${response.data.user.Phone };expires=${expirationDate.toUTCString()};path=/`;
      const userOrganizationName = `OrganizationName=${response.data.user.OrganizationName };expires=${expirationDate.toUTCString()};path=/`;
      const userEmail = `Email=${response.data.user.Email };expires=${expirationDate.toUTCString()};path=/`;
      document.cookie = userName;
      document.cookie = userPhone;
      document.cookie = userOrganizationName;
      document.cookie = userEmail
      Swal.fire({
        icon: "success",
        title: "User Registration Successful!",
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
        title: `Registration Failed! <br/> `,
        text: `${err.response?.data?.message}`,
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
    }
  };

export const logout = async (dispatch) => {
  try {
    dispatch(Logout());
    removeCookie("token");
    Swal.fire({
      icon: "success",
      title: `Login Logout Succesfull! `,
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });
    setTimeout(() => {
      window.location.href = "/login";
    }, 2000);
  } catch (err) {
    Swal.fire({
      icon: "success",
      title: ` Logout Failed `,
      text: err.message,
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });
  }
};
