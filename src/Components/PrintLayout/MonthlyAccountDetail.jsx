import { Fragment } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MonthlyAccountDetail = () => {
    const today = new Date().toISOString().substr(0, 10);
  
  
  
    const {month} = useParams();
  let num = 1000;
  let fi = num.toFixed(2);
  return (
    <Fragment>
      <Container className="print-Container">
        <Row>
          <Col className="d-flex  flex-column justify-content-center  align-content-center text-center">
            <h2>Masjidhul Haadhi - Sainthamaruthu</h2>
            <h3> Monthly Report</h3>
            <h3>{month} - 2023</h3>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col>
            <Table bordered hover>
              <thead>
                <tr>
                  <th className="text-center">திகதி </th>
                  <th className="text-center">விபரம் </th>
                  <th className="text-center">வரவு </th>
                  <th className="text-center">செலவு </th>
                  <th className="text-center">மீதி </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{today}</td>
                  <td>Hello</td>
                  <td className="text-end">{fi}</td>
                  <td className="text-end"></td>
                  <td className="text-end">{fi}</td>
                </tr>
                <tr>
                  <td>2023-10-12</td>
                  <td>Hello</td>
                  <td className="text-end"></td>
                  <td className="text-end">{fi}</td>
                  <td className="text-end">{fi}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default MonthlyAccountDetail;
