import { Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import MemberAddModal from "../Modals/MemberAdd";
import MembersTable from "../Tables/MembersTable";

const Members = () => {
  const [ModalShow, setModalShow] = useState(false);
  

  return (
    <Container fluid className="mt-3">
      <Row>
        {/* Members with Monthly Buttons */}
        <Col md={12} xs={12} className="ps-0 pe-0">
          <div className="Front-cards-Background-card">
            <div className="d-flex justify-content-between ">
              <h3 className="text-start text-white py-3">
                Masjidhul Haadhi Sandha Providers List
              </h3>
              <div className="py-3">
                {" "}
                <Button onClick={() => setModalShow(true)}>Add Members</Button>
                <MemberAddModal
                  show={ModalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
            </div>
            <MembersTable/>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Members;
