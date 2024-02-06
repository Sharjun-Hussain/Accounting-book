/* eslint-disable react/no-unescaped-entities */
import { Container, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const Report = () => {
  return (
    <Container>
      <>
        <Col md={12} xs={12} className="ps-0 pe-0">
          <div className="Front-cards-Background-card mt-3">
            <h3 className="text-center text-white my-3">This Month's Kanakkarikkai</h3>
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
                  <td >Larry the Bird</td>
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
