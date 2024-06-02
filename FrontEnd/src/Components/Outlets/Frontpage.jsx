/* eslint-disable react/no-unescaped-entities */
import { Card, Col, Container, Row, Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import SellIcon from '@mui/icons-material/Sell';
import PaidIcon from '@mui/icons-material/Paid';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import TollIcon from '@mui/icons-material/Toll';
import { useDispatch, useSelector } from "react-redux";
import { setLastMonthSandhaDetails, setThisMonthSandhaDetails } from "../../redux/Slices/SandhaSlice";


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
  const {ThisMonthSandhaDetails, LastMonthSandhaDetails}= useSelector(state => state.SandhaState)
  const dispatch = useDispatch();
  // const [ThisMonthSandhaSum, setThisMonthSandhaSum] = useState(); //fetchThisMonthSandhaSum
  // const [LastMonthSandhaSum, setLastMonthSandhaSum] = useState(); //fetchLastMonthSandhaSum
  const [cashAmount, setcashAmount] = useState(); //fetchCashTotalAmount
  const [TotalMembers, setTotalMembers] = useState(); //fetchTotalMembers
  const [bankAmount, setbankAmount] = useState(); //fetchBankTotalAmount
  useEffect(() => {
    const FetchCashAccountTotal = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/Accounts/cash/sum`);
        setcashAmount(response.data.FetchedAccount.Balance);
      } catch (err) {
        console.log(err);
      }
    };

    const FetchBankAccountTotal = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/Accounts/bank/sum`);
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
        dispatch(setThisMonthSandhaDetails(response.data))
        localStorage.setItem('sandhaDetails', JSON.stringify(response.data))
      } catch (err) {
        console.log(err);
      }
    };

    const fetchLastMonthSandhaDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/Sandha/Month/${lastMonth}`
        );
        dispatch(setLastMonthSandhaDetails(response.data))
      } catch (err) {
        console.log(err);
      }
    }
  


    const fetchTotalMembers = async () =>{
      try {
        const response = await axios.get(
          `http://localhost:8000/Sandha-members/all`
        );
        setTotalMembers(response.data.TotalMembers);
      } catch (err) {
        console.log(err);
      }
    }
    FetchCashAccountTotal();
    fetchTotalMembers();
    FetchBankAccountTotal();
    fetchThisMonthSandhaDetails();
    fetchLastMonthSandhaDetails();
  
  }, []);



  return (
    <>
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
                <SellIcon sx={{fontSize:"50px", justifyContent:"center"}}/>
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
                <PaidIcon sx={{fontSize:"50px", justifyContent:"center"}}/>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} xs={12} lg={4} xl={3} className="">
            <Card className="d-flex flex-column  me-md-1 mx-lg-1 my-2">
              <Card.Body className="d-flex flex-row justify-content-between  ">
                <div>
                  {" "}
                  <h2>{TotalMembers}</h2>
                  <Card.Title>Sandha Members </Card.Title>
                </div>
                <RequestQuoteIcon sx={{fontSize:"50px", justifyContent:"center"}}/>
              </Card.Body>
            </Card>
          </Col>

          {ThisMonthSandhaDetails && ThisMonthSandhaDetails.SandhaSum && ThisMonthSandhaDetails.SandhaSum.length > 0 ? (
            <Col md={6} xs={12} lg={4} xl={3} className="">
              <Card className="d-flex flex-column ms-md-1 ms-lg-0 me-lg-1 my-2  ">
                <Card.Body className="d-flex flex-row justify-content-between  ">
                  <div>
                    <h2>Rs . {ThisMonthSandhaDetails.SandhaSum[0].TotalAmount}</h2>
                    <Card.Title>{thismonth} - Sandha </Card.Title>
                  </div>
                  <CurrencyExchangeIcon sx={{ fontSize: "50px", justifyContent: "center" }} />
                </Card.Body>
              </Card>
            </Col>
          ) : <h1>Loading ...</h1>}

          {LastMonthSandhaDetails && LastMonthSandhaDetails.SandhaSum && LastMonthSandhaDetails.SandhaSum.length >0 &&(
            <Col md={6} xs={12} lg={4} xl={3} className="">
            <Card className="d-flex flex-column me-md-1 ms-lg-1 ms-xl-0 me-xl-1 my-2">
              <Card.Body className="d-flex flex-row justify-content-between  ">
                <div>
                  {" "}
                  <h2>Rs . {LastMonthSandhaDetails.SandhaSum[0].TotalAmount}</h2>
                  <Card.Title>{lastMonth} - Sandha </Card.Title>
                </div>
                <TollIcon sx={{fontSize:"50px", justifyContent:"center"}}/>
              </Card.Body>
            </Card>
          </Col>
          )}
         

          

          
        </div>
      </Container>
      <Container fluid className="">
        <Row>
          <Col md={8} className=" my-3   pe-md-3">
            <div className="Front-cards-Background-card ">
              {" "}
              <Sandha />
            </div>
          </Col>

          <Col md={4} className=" my-3">
            <div className="Front-cards-Background-card  ">
              {" "}
              <RecentPurchase />{" "}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};



// Sandha List

const Sandha = () => {
  return (
    <>
      <h5 className="text-start text-white mb-3">
        {thismonth} - Month Income
      </h5>
      <Table striped hover bordered variant="dark">
        <thead>
          <tr>
            <th>Memebers</th>
            <th>Month</th>
          </tr>
          <tr>
            <td>Sharjun</td>
            <td>Month</td>
          </tr>
          <tr>
            <td>Sharjun</td>
            <td>Month</td>
          </tr>
        </thead>
      </Table>
    </>
  );
};

// Recent Purchases

const RecentPurchase = () => {
  return (
    <>
      <h5 className="text-start text-white mb-3">{thismonth} - Outgoing </h5>
      <Table striped hover bordered variant="dark">
        <thead>
          <tr>
            <th>Item</th>
            <th>Amount</th>
          </tr>
          <tr>
            <td>Sharjun</td>
            <td>Month</td>
          </tr>
          <tr>
            <td>Sharjun</td>
            <td>Month</td>
          </tr>
        </thead>
      </Table>
    </>
  );
};

export default Frontpage;