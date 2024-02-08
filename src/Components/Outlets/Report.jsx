/* eslint-disable react/no-unescaped-entities */
import { Container, Col, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

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
                {ThisMonth} Kanakkarikkai
              </h3>
              <div className="py-3">
                <Link to={`/print/report/${ThisMonth}`}>
                  <Button>Print</Button>
                </Link>
              </div>
            </div>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Description</th>
                  <th>Income</th>
                  <th>OutGoing</th>
                  <th>Balance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Larry the Bird</td>
                  <td>@twitter</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>
      </>
    </Container>
  );
};

export default Report;
