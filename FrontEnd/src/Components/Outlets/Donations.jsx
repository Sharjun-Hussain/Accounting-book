import { Container, Col, Button } from "react-bootstrap";
import { useState } from "react";
import DonationAddModal from "../AddModals/DonationAdd";
import DonationTable from "../Tables/DonationTable";

const Donations = () => {
  const [ModalShow, setModalShow] = useState(false);

  return (
    <Container fluid className="mt-3">
      <>
        {/* Members with Monthly Buttons */}
        <Col md={12} xs={12} className="ps-0 pe-0">
          <div className="Front-cards-Background-card">
            <div className="d-flex justify-content-between ">
              <h3 className="text-start text-white py-3">Donations</h3>
              <div className="py-3">
                {" "}
                <Button onClick={() => setModalShow(true)}>Add Donation</Button>
                <DonationAddModal
                  show={ModalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
            </div>
            <DonationTable />
          </div>
        </Col>
      </>
    </Container>
  );
};

export default Donations;
