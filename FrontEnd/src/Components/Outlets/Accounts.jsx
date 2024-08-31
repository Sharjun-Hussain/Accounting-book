/* eslint-disable no-unused-vars */
import { Container, Col, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import AccountAddModal from "../AddModals/AccountAdd";
import AccountUpdate from "../UpdateModals/AccountUpdate";
import AccountsTable from "../Tables/AccountsTable";
import axios from "axios";
import Swal from "sweetalert2";

const Accounts = () => {
  const [ModalShow, setModalShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [Accounts, setAccounts] = useState([]);
  const [editModalShow, setEditModalShow] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/Accounts/All");
        const data = await response.json();
        setAccounts(data.Accounts);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    console.log(Accounts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddAccount = (account) => {
    setAccounts((prev) => [...prev, account]);
  };

  const handleDeleteAccount = async (id) => {
   await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
       axios.get(`http://localhost:8000/Accounts/Delete/${id}`);
       setAccounts(Accounts.filter((account) => account._id !== id));
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
    
    // console.log("Deleting member with ID:", id);
    
    // console.log(Accounts);
  };

  const handleEditAccount = (id, Name, Description, Balance) => {
    setModalShow(true);
    setSelectedAccount({ id, Name, Description, Balance });
    console.log(selectedAccount);
  };

  const handleUpdateAccount = (accountId, updatedAccount) =>{
    setAccounts((prev) =>{
      prev.map((account) =>{
        account._id === accountId ? {...account,updatedAccount} : account 
      })
    })
  }
  return (
    <Container fluid className="mt-3">
      <>
        {/* Members with Monthly Buttons */}
        <Col md={12} xs={12} className="ps-0 pe-0">
          <div className="Front-cards-Background-card">
            <div className="d-flex justify-content-between ">
              <h3 className="text-start text-white py-3">Accounts</h3>
              <div className="py-3">
                {" "}
                <Button onClick={() => setModalShow(true)}>Add Account</Button>
                <AccountAddModal
                  show={ModalShow}
                  onHide={() => setModalShow(false)}
                  onAddAccount={handleAddAccount}
                />
              </div>
            </div>
            <AccountsTable
              Accounts={Accounts}
              onDeleteAccount={handleDeleteAccount}
              onModifyAccount={handleEditAccount}
              loading={loading}
            />
            {/* <AccountUpdate
              data={selectedAccount}
              show={editModalShow}
              onHide={() => setEditModalShow(false)}
              onUpdateAccount={handleUpdateAccount}
            /> */}
          </div>
        </Col>
      </>
    </Container>
  );
};

export default Accounts;
