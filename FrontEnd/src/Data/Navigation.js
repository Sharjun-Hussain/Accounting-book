import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
// import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
// import SummarizeIcon from "@mui/icons-material/Summarize";
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



export const item = [
    {
      id: "Dashboard",
      name: "Dashboard",
      icon: SpaceDashboardOutlinedIcon,
      activeIcon: SpaceDashboardIcon,
      path: "/",
    },
    // {
    //   id: "Report",
    //   name: "Report",
    //   icon: SummarizeOutlinedIcon,
    //   activeIcon: SummarizeIcon,
    //   path: "/report",
    // },
    {
      id: "Accounts",
      name: "Accounts",
      icon: AccountBalanceWalletOutlinedIcon,
      activeIcon: AccountBalanceWalletIcon,
      path: "/Accounts",
    },
    {
      id: "Members",
      name: "Members",
      icon: PeopleOutlinedIcon,
      activeIcon: PeopleAltIcon,
      path: "/Members",
    },
    {
      id: "Transaction",
      name: "Transaction",
      icon: ReceiptLongOutlinedIcon,
      activeIcon: ReceiptLongIcon,
      path: "/Transaction",
    },
    {
      id: "Sandha",
      name: "Subscription",
      icon: PaidOutlinedIcon,
      activeIcon: PaidIcon,
      path: "/Sandha",
    },
    {
      id: "Donations",
      name: "Donations",
      icon: VolunteerActivismOutlinedIcon,
      activeIcon: VolunteerActivismIcon,
      path: "/Donations",
    },
    {
      id: "Settings",
      name: "Settings",
      icon: SettingsOutlinedIcon,
      activeIcon: SettingsIcon,
      path: "/Settings",
    },
  ];