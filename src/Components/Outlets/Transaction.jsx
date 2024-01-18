import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { useState } from "react";
import TransactionAddModal from "../Modals/TransactionAdd";

const Transactions = () => {
  const [ModalShow, setModalShow] = useState(false);
  

  return (
    <Container fluid className="mt-3">
      <Row>
        {/* Members with Monthly Buttons */}
        <Col md={12} xs={12} className="ps-0 pe-0">
          <div className="Front-cards-Background-card">
            <div className="d-flex justify-content-between ">
              <h3 className="text-start text-white py-3">
                Recent Transactions
              </h3>
              <div className="py-3">
                {" "}
                <Button className="me-3" onClick={() => window.print()}>Print Transaction</Button>
                
                <Button onClick={() => setModalShow(true)}>Add Transaction</Button>
                <TransactionAddModal
                  show={ModalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
            </div>
            <Table hover striped variant="dark" bordered>
              <thead>
                <tr>
                  <th>#</th>
                  <th className="text-center">Memebers</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Memebrts</td>
                  <td>Month</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Transactions;
