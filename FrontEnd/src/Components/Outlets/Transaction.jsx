import { Container, Col, Button } from "react-bootstrap";
import { useState } from "react";
import TransactionAddModal from "../AddModals/TransactionAdd"
// import { useReactToPrint } from "react-to-print";
import TransactionTable from "../Tables/TransactionTable";

const Transactions = () => {
  const [ModalShow, setModalShow] = useState(false); //Modal Popup

  return (
    <Container fluid className="mt-3">
      <>
        <Col md={12} xs={12} className="ps-0 pe-0">
          <div className="Front-cards-Background-card">
            <div className="d-flex justify-content-between ">
              <h3 className="text-start text-white py-3">
                Recent Transactions
              </h3>
              <div className="py-3">
                {" "}
                <Button className="me-3">
                  Print Transaction
                </Button>
                <Button onClick={() => setModalShow(true)}>
                  Add Transaction
                </Button>
                <TransactionAddModal
                  show={ModalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
            </div>
            <TransactionTable />
          </div>
        </Col>
      </>
    </Container>
  );
};

export default Transactions;


