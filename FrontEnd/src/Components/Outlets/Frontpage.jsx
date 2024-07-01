/* eslint-disable react/no-unescaped-entities */
import { Card, Col, Container, Row } from "react-bootstrap";
import { useState, useEffect, Fragment } from "react";
import axios from "axios";
import SellIcon from "@mui/icons-material/Sell";
import PaidIcon from "@mui/icons-material/Paid";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import TollIcon from "@mui/icons-material/Toll";
import AllSandha from "./FrontPageComponents/AllSandha";

const currentDate = new Date();
const MonthList = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const thismonth = MonthList[currentDate.getMonth()];
const lastMonth = MonthList[currentDate.getMonth() - 1];

const Frontpage = () => {
  const [loading, setLoading] = useState(true);


  const [ThisMonthSandhaSum, setThisMonthSandhaSum] = useState();
  const [AllSandhaDetails, setAllSandhaDetails] = useState([]);
  const [LastMonthSandhaSum, setLastMonthSandhaSum] = useState();
  const [cashAmount, setcashAmount] = useState(); //fetchCashTotalAmount
  const [TotalMembers, setTotalMembers] = useState(); //fetchTotalMembers
  const [bankAmount, setbankAmount] = useState(); //fetchBankTotalAmount

  useEffect(() => {
    setLoading(true);
    try {
      const FetchCashAccountTotal = async () => {
        try {
          const response = await axios.get(
            `http://localhost:8000/Accounts/cash/sum`
          );
          setcashAmount(response.data.FetchedAccount.Balance);
        } catch (err) {
          console.log(err);
        }
      };

      const FetchBankAccountTotal = async () => {
        try {
          const response = await axios.get(
            `http://localhost:8000/Accounts/bank/sum`
          );
          setbankAmount(response.data.FetchedAccount.Balance);
        } catch (err) {
          console.log(err);
        }
      };

      const fetchThisMonthSandhaDetails = async () => {
        try {
          const response = await axios.get(
            `http://localhost:8000/Sandha/Month/${thismonth}`
          );

          setThisMonthSandhaSum(response.data.SandhaSum[0]?.TotalAmount);
        } catch (err) {
          console.log(err);
        }
      };
      const fetchLastMonthSandhaDetails = async () => {
        try {
          const response = await axios.get(
            `http://localhost:8000/Sandha/Month/${lastMonth}`
          );

          setLastMonthSandhaSum(response.data.SandhaSum[0]?.TotalAmount );
        } catch (err) {
          console.log(err);
          setLoading(false);
        }
      };

      const fetchTotalMembers = async () => {
        try {
          const response = await axios.get(
            `http://localhost:8000/Sandha-members/all`
          );
          setTotalMembers(response.data.TotalMembers);
        } catch (err) {
          console.log(err);
        }
      };

      const fetchAllSandhaDetails = async () => {
        setLoading(true);
        try {
          const response = await axios.get(
            `http://localhost:8000/Sandha/All`
          );
  
          if (response.data) {
            
            setAllSandhaDetails(response.data?.AllSandhaDetails);
            
          }
        } catch (err) {
          alert(err);
          setAllSandhaDetails([]);
          
        } finally {
          setLoading(false);
        }
      };
  
      fetchAllSandhaDetails()
      FetchCashAccountTotal();
      fetchTotalMembers();
      FetchBankAccountTotal();
      fetchThisMonthSandhaDetails();
      fetchLastMonthSandhaDetails();
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <Fragment>
      {loading ? (
        <h1>loading</h1>
      ) : (
        <Fragment>
          <Container fluid>
            <div className="d-flex flex-wrap  ">
              <Col md={6} xs={12} lg={4} xl={3} className="">
                <Card className="d-flex flex-column me-md-1 my-2">
                  <Card.Body className="d-flex flex-row justify-content-between">
                    <div>
                      {" "}
                      <h2>Rs . {cashAmount}</h2>
                      <Card.Title>Hand Assets </Card.Title>
                    </div>
                    <SellIcon
                      sx={{ fontSize: "50px", justifyContent: "center" }}
                    />
                  </Card.Body>
                </Card>
              </Col>

              <Col md={6} xs={12} lg={4} xl={3} className="">
                <Card className="d-flex flex-column ms-md-1 mx-lg-1 my-2">
                  <Card.Body className="d-flex flex-row justify-content-between  ">
                    <div>
                      {" "}
                      <h2>Rs . {bankAmount}</h2>
                      <Card.Title className="align-content-end">
                        {" "}
                        Bank Assets{" "}
                      </Card.Title>
                    </div>
                    <PaidIcon
                      sx={{ fontSize: "50px", justifyContent: "center" }}
                    />
                  </Card.Body>
                </Card>
              </Col>

              <Col md={6} xs={12} lg={4} xl={3} className="">
                <Card className="d-flex flex-column  me-md-1 mx-lg-1 my-2">
                  <Card.Body className="d-flex flex-row justify-content-between  ">
                    <div>
                      {" "}
                      <h2>{TotalMembers}</h2>
                      <Card.Title className="my-0">Subscription Members </Card.Title>
                    </div>
                    <RequestQuoteIcon
                      sx={{ fontSize: "50px", justifyContent: "center" }}
                    />
                  </Card.Body>
                </Card>
              </Col>

              <Col md={6} xs={12} lg={4} xl={3} className="">
                <Card className="d-flex flex-column ms-md-1 ms-lg-0 me-lg-1 my-2  ">
                  <Card.Body className="d-flex flex-row justify-content-between  ">
                    <div>
                      <h2>
                        Rs . {ThisMonthSandhaSum}
                      </h2>
                      <Card.Title>{thismonth} - Subscription </Card.Title>
                    </div>
                    <CurrencyExchangeIcon
                      sx={{ fontSize: "50px", justifyContent: "center" }}
                    />
                  </Card.Body>
                </Card>
              </Col>

              <Col md={6} xs={12} lg={4} xl={3} className="">
                <Card className="d-flex flex-column me-md-1 ms-lg-1 ms-xl-0 me-xl-1 my-2">
                  <Card.Body className="d-flex flex-row justify-content-between  ">
                    <div>
                      {" "}
                      <h2>
                        Rs . {LastMonthSandhaSum}
                      </h2>
                      <Card.Title>{lastMonth} - Subscription </Card.Title>
                    </div>
                    <TollIcon
                      sx={{ fontSize: "50px", justifyContent: "center" }}
                    />
                  </Card.Body>
                </Card>
              </Col>
            </div>
          </Container>
          <Container fluid className="">
            <Row>
              <Col md={12} className=" my-3   pe-md-3">
                <div className="Front-cards-Background-card ">
                  {" "}
                  <AllSandha />
                </div>
              </Col>

              {/* <Col md={4} className=" my-3">
                <div className="Front-cards-Background-card  ">
                  {" "}
                  <RecentPurchase />{" "}
                </div>
              </Col> */}
            </Row>
          </Container>
        </Fragment>
      )}
    </Fragment>
  );
};

// Sandha List

// const Sandha = () => {
//   return (
//     <>
//       <h5 className="text-start text-white mb-3">{thismonth} - Month Income</h5>
//       <Table striped hover bordered variant="dark">
//         <thead>
//           <tr>
//             <th>Memebers</th>
//             <th>Month</th>
//           </tr>
//           <tr>
//             <td>Sharjun</td>
//             <td>Month</td>
//           </tr>
//           <tr>
//             <td>Sharjun</td>
//             <td>Month</td>
//           </tr>
//         </thead>
//       </Table>
//     </>
//   );
// };

// Recent Purchases

// const RecentPurchase = () => {
//   return (
//     <>
//       <h5 className="text-start text-white mb-3">{thismonth} - Outgoing </h5>
//       <Table striped hover bordered variant="dark">
//         <thead>
//           <tr>
//             <th>Item</th>
//             <th>Amount</th>
//           </tr>
//           <tr>
//             <td>Sharjun</td>
//             <td>Month</td>
//           </tr>
//           <tr>
//             <td>Sharjun</td>
//             <td>Month</td>
//           </tr>
//         </thead>
//       </Table>
//     </>
//   );
// };

export default Frontpage;
