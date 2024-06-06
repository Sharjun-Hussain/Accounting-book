import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { getCookie } from 'react-use-cookie';
import { lazy } from "react";

import "./App.css";


const Dashboard = lazy(() => import('./Components/Dashboard'))
// import Dashboard from "./Components/Dashboard";
import Report from "./Components/Outlets/Report";
import Accounts from "./Components/Outlets/Accounts";
import Members from "./Components/Outlets/Members";
import Transaction from "./Components/Outlets/Transaction";
import { Settings } from "./Components/Outlets/Settings";
import Frontpage from "./Components/Outlets/Frontpage";
import SandhaMainPage from "./Components/Outlets/Sandha";
import ThisMonth from "./Components/Outlets/SandhaOutlets/THisMonth";
import LastMonth from "./Components/Outlets/SandhaOutlets/LastMonth";
// import MonthlyAccountDetail from "./Components/PrintLayout/MonthlyAccountDetail";
// import SandhaPrint from "./Components/PrintLayout/SandhaPrint";
import Donations from "./Components/Outlets/Donations";
import Login from "./Login";
import Register from "./Register";




// import { useState } from "react";

function App() {

  // const user = useSelector((state) => state.userState.user)
  // console.log(user);
  const token = getCookie('token');
  return (
    <>
      <BrowserRouter>
        <Routes>
         { !token && <Route path="/login" element={<Login />} />}
         { !token && <Route path="/register" element={<Register />} />}

          <Route path="/" element={token ? <Dashboard /> : <Navigate to="/login" />} > 
            <Route index element={<Frontpage />} />
            <Route path="report" element={<Report />} />
            <Route path="Accounts" element={<Accounts />} />
            <Route path="Members" element={<Members />} />
            <Route path="Transaction" element={<Transaction />} />
            <Route path="Donations" element={<Donations />} />
            <Route path="settings" element={<Settings />} />
            <Route path="Sandha" element={<SandhaMainPage />}>
              <Route index element={<ThisMonth />} />
              <Route path="this-Month" element={<ThisMonth />} />
              <Route path="last-Month" element={<LastMonth />} />
            </Route>
            {/* <Route
              path="print/report/:month"
              element={<MonthlyAccountDetail />}
            />
            <Route path="print/user/:id" element={<SandhaPrint />} /> */}
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
