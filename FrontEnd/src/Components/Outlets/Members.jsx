/* eslint-disable no-unused-vars */
import { Container, Col, Button } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import MemberAddModal from "../AddModals/MemberAdd";
import MembersTable from "../Tables/MembersTable";
import axios from "axios";
import ReactToPrint from "react-to-print";
import { SandhaPrintComponent } from "../PrintLayout/SandhaPrint";

const Members = () => {
  const [ModalShow, setModalShow] = useState(false);
  const [Members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRows, setSelectedRows] = useState([]);
  const componentRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/Sandha-members/All"
        );
        setMembers(response.data.Members);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    console.log(Members);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(selectedRows);

  const GetDatafromChild = (data) => {
    setMembers(data);
  };

  return (
    <Container fluid className="mt-3">
      <>
        {/* Members with Monthly Buttons */}
        <Col md={12} xs={12} className="ps-0 pe-0">
          <div className="Front-cards-Background-card">
            <div className="d-flex justify-content-between ">
              <h3 className="text-start text-white py-3">
                Masjidhul Haadhi Monthly Subscription Providers List
              </h3>
              <div className="py-3">
                {" "}
                <ReactToPrint
                  trigger={() => (
                    <Button className="me-3">Print Selected Receipts</Button>
                  )}
                  content={() => componentRef.current}
                />
                <Button onClick={() => setModalShow(true)}>Add Members</Button>
                <MemberAddModal
                  show={ModalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
            </div>
            <MembersTable
              MembersData={Members}
              Loading={loading}
              SendToParent={GetDatafromChild}
              setSelectedRows={setSelectedRows}
            />
          </div>
          <div style={{ display: "none" }}>
            <div ref={componentRef}>
              {selectedRows.map((row, index) => (
                <SandhaPrintComponent key={index} selectedRow={row} />
              ))}
            </div>
          </div>
        </Col>
      </>
    </Container>
  );
};

export default Members;
