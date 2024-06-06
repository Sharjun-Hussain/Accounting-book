/* eslint-disable no-undef */
import { NavLink } from "react-router-dom";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import SummarizeIcon from "@mui/icons-material/Summarize";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import PaidIcon from "@mui/icons-material/Paid";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import SettingsIcon from "@mui/icons-material/Settings";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const item = [
  {
    name: "Dashboard",
    icon: <SpaceDashboardOutlinedIcon />,
    activeIcon: <SpaceDashboardIcon />,
    path: "/",
  },
  {
    name: "Report",
    icon: <SummarizeOutlinedIcon />,
    activeIcon: <SummarizeIcon />,
    path: "/report",
  },
  {
    name: "Accounts",
    icon: <AccountBalanceWalletOutlinedIcon />,
    activeIcon: <AccountBalanceWalletIcon />,
    path: "/Accounts",
  },
  {
    name: "Members",
    icon: <PeopleOutlinedIcon />,
    activeIcon: <PeopleAltIcon />,
    path: "/Members",
  },
  {
    name: "Transaction",
    icon: <ReceiptLongOutlinedIcon />,
    activeIcon: <ReceiptLongIcon />,
    path: "/Transaction",
  },
  {
    name: "Sandha",
    icon: <PaidOutlinedIcon />,
    activeIcon: <PaidIcon />,
    path: "/Sandha",
  },
  {
    name: "Donations",
    icon: <VolunteerActivismOutlinedIcon />,
    activeIcon: <VolunteerActivismIcon />,
    path: "/Donations",
  },
  {
    name: "Settings",
    icon: <SettingsOutlinedIcon />,
    activeIcon: <SettingsIcon />,
    path: "/Settings",
  },
];
const SideBar = () => {
  return (
    <ul className="d-none d-md-block ">
      {item.map((navitem, key) => {
        return (
          <NavLink to={navitem.path} className="d-flex ps-3 ps-3" key={key}>
            {({ isActive }) => (
              <>
                {isActive ? navitem.activeIcon : navitem.icon}
                <span>&nbsp;{navitem.name}</span>
              </>
            )}
          </NavLink>
        );
      })}
    </ul>
  );
};

export default SideBar;
