import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <ul>
        <Link to="/">
          {" "}
          <li>Dashboard</li>
        </Link>
        <Link to="report">
          {" "}
          <li>Report</li>
        </Link>
        <Link to="/Accounts">
          <li>Accounts</li>
        </Link>
        <Link to="/Members">
          {" "}
          <li>Members</li>
        </Link>
        <Link to="/Transaction">
          {" "}
          <li>RepTransactionort</li>
        </Link>
        <Link to="/Settings">
          {" "}
          <li>Settings</li>
        </Link>
      </ul>
    </>
  );
};

export default SideBar;
