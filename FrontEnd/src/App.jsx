import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Dashboard from "./Components/Dashboard";
import Report from "./Components/Outlets/Report";
import Accounts from "./Components/Outlets/Accounts";
import Members from "./Components/Outlets/Members";
import Transaction from "./Components/Outlets/Transaction";
import { Settings } from "./Components/Outlets/Settings";
import Frontpage from "./Components/Outlets/Frontpage";
import SandhaMainPage from "./Components/Outlets/Sandha";
import ThisMonth from "./Components/Outlets/SandhaOutlets/THisMonth";
import LastMonth from "./Components/Outlets/SandhaOutlets/LastMonth";
import MonthlyAccountDetail from "./Components/PrintLayout/MonthlyAccountDetail";
import SandhaPrint from "./Components/PrintLayout/SandhaPrint";
import Donations from "./Components/Outlets/Donations";
import Login from './Login'





function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/login" element={<Login/>} />
       
         
           <Route path="/" element={<Dashboard />}>
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
           <Route
              path="print/report/:month"
              element={<MonthlyAccountDetail />}
            />
            <Route path="print/user/:id" element={<SandhaPrint />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
