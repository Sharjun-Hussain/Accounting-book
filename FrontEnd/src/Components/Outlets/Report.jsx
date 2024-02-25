/* eslint-disable react/no-unescaped-entities */
import { Container, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReportTable from "../Tables/ReportTable";

const Report = () => {
  const today = new Date();
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const ThisMonth = months[today.getMonth()];

  return (
    <Container fluid>
      <>
        <Col md={12} xs={12} className="ps-0 pe-0">
          <div className="Front-cards-Background-card mt-3">
            <div className="d-flex justify-content-between ">
              <h3 className="text-center text-white my-3">
                {ThisMonth} Monthly Report
              </h3>
              <div className="py-3">
                <Link to={`/print/report/${ThisMonth}`}>
                  <Button>Print</Button>
                </Link>
              </div>
            </div>
            <ReportTable/>
          </div>
        </Col>
      </>
    </Container>
  );
};

export default Report;
