/* eslint-disable no-undef */
import { NavLink } from "react-router-dom";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import SummarizeIcon from '@mui/icons-material/Summarize';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import PaidIcon from '@mui/icons-material/Paid';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import SettingsIcon from '@mui/icons-material/Settings';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';


const SideBar = () => {

  return (
    <>
    
    <>
   
      <ul className="d-none d-md-block ">
        <NavLink to="/" className="d-flex ps-3 ps-3">
          {({ isActive }) => (
            <>
              {isActive ? <SpaceDashboardIcon /> : <SpaceDashboardOutlinedIcon />}
              <span>&nbsp;Dashboard</span>
            </>
          )}
        </NavLink>

        <NavLink to="report" className="d-flex ps-3">
        {({ isActive }) => (
            <>
              {isActive ? <SummarizeIcon /> : <SummarizeOutlinedIcon />}
              <span>&nbsp;Report</span>
            </>
          )}
        </NavLink>
        <NavLink to="/Accounts" className="d-flex ps-3">
        {({ isActive }) => (
            <>
              {isActive ? <AccountBalanceWalletIcon /> : <AccountBalanceWalletOutlinedIcon />}
              <span>&nbsp;Accounts</span>
            </>
          )}
        </NavLink>
        <NavLink to="/Members" className="d-flex ps-3">
          {({ isActive }) => (
            <>
              {isActive ? <PeopleAltIcon /> : <PeopleOutlinedIcon />}
              <span>&nbsp;Members</span>
            </>
          )}
        </NavLink>
        <NavLink to="/Transaction" className="d-flex ps-3">
        {({ isActive }) => (
            <>
              {isActive ? <ReceiptLongIcon /> : <ReceiptLongOutlinedIcon />}
              <span>&nbsp;Transaction</span>
            </>
          )}
        </NavLink>
        <NavLink to="/Sandha" className="d-flex ps-3">
        {({ isActive }) => (
            <>
              {isActive ? <PaidIcon /> : <PaidOutlinedIcon />}
              <span>&nbsp;Sandha</span>
            </>
          )}
        </NavLink>
        <NavLink to="/Donations" className="d-flex ps-3">
        {({ isActive }) => (
            <>
              {isActive ? <VolunteerActivismIcon /> : <VolunteerActivismOutlinedIcon />}
              <span>&nbsp;Donations</span>
            </>
          )}
        </NavLink>
        <NavLink to="/Settings" className="d-flex ps-3">
        {({ isActive }) => (
            <>
              {isActive ? <SettingsIcon /> : <SettingsOutlinedIcon />}
              <span>&nbsp;Settings</span>
            </>
          )}
        </NavLink>
      </ul>
    </>
    </>
  );
};

export default SideBar;
