import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Dashboard from "./Components/Dashboard";
import Report from "./Components/Outlets/Report";
import Accounts from "./Components/Outlets/Accounts";
import Members from "./Components/Outlets/Members";
import Transaction from "./Components/Outlets/Transaction";
import { Settings } from "./Components/Outlets/Settings";
import Frontpage from "./Components/Outlets/Frontpage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} >
          <Route index element={<Frontpage />} />
            <Route path="report" element={<Report />} /> 
            <Route path="Accounts" element={<Accounts />} /> 
            <Route path="Members" element={<Members />} /> 
            <Route path="Transaction" element={<Transaction />} /> 
            <Route path="settings" element={<Settings />} /> 
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
