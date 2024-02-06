import {  NavLink } from "react-router-dom";
import report from '../assets/Icons/report.svg'




const SideBar = () => {
  return (
    <>
      <ul>
        <NavLink to="/" className="d-flex ps-3 ps-3">
          {" "}
          <img src={report}  width={30}/> <li>Dashboard</li>
        </NavLink>
        <NavLink to="report" className="d-flex ps-3">
          {" "}
          <img src={report}  width={30}/><li>Report</li>
        </NavLink>
        <NavLink to="/Accounts" className="d-flex ps-3">
        <img src={report}  width={30}/> <li>Accounts</li>
        </NavLink>
        <NavLink to="/Members" className="d-flex ps-3">
          {" "}
          <img src={report}  width={30}/>  <li>Members</li>
        </NavLink>
        <NavLink to="/Transaction" className="d-flex ps-3">
          {" "}
          <img src={report}  width={30}/>  <li>Transaction</li>
        </NavLink>
        <NavLink to="/Sandha" className="d-flex ps-3">
          {" "}
          <img src={report}  width={30}/>  <li>Sandha</li>
        </NavLink>
        <NavLink to="/Settings" className="d-flex ps-3">
          {" "}
          <img src={report}  width={30}/>  <li>Settings</li>
        </NavLink>
      </ul>
    </>
  );
};

export default SideBar;
