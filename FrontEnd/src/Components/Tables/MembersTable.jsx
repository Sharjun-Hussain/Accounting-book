/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import axios from "axios";
import { useState } from "react";

//From MUI
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid } from "@mui/x-data-grid";

import MemberUpdateModal from "../UpdateModals/MemberUpdate";

const MembersTable = ({ MembersData, Loading, SendToParent, 
  setSelectedRows  
}) => {
  const Members = MembersData;
  const loading = Loading;
  const [selectedRow, setselectedRow] = useState({});
  const [ModalShow, setModalShow] = useState(false);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const handleEdit = (id, Name, Address, Phone, Amount, Email) => {
    setModalShow(true);
    setselectedRow({ id, Name, Address, Phone, Amount, Email });
    console.log(selectedRow);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8000/Sandha-members/Delete/${id}`);
    SendToParent(Members.filter((member) => member._id !== id));
  };

  // eslint-disable-next-line no-unused-vars
  const handleSelectionChange = (ids) => {
    const selectedIDs = new Set(ids);
    
    const selectedRows = Members.filter((row) => selectedIDs.has(row._id));
    
    setSelectedRows(selectedRows);
    console.log(selectedRows);
  };

  const columns = [
    // { field: "_id", headerName: "_id", width: 50 },
    { field: "Name", headerName: "Name", width: 180 },
    { field: "Address", headerName: "Address", width: 170 },
    { field: "Email", headerName: "Email", width: 170 },
    {
      field: "Phone",
      headerName: "Phone",
      type: "number",
      sortable: true,
      width: 100,
    },
    {
      field: "Amount",
      headerName: "Amount",
      type: "number",
      description: "This column has a value getter and is not sortable.",
      sortable: true,
      width: 160,
    },
    {
      headerName: "Actions",
      type: "textfield",
      description: "This column has a value getter and is not sortable.",

      width: 120,
      renderCell: (params) => (
        <div>
          <IconButton
            color="primary"
            aria-label="edit"
            onClick={() =>
              handleEdit(
                params.row._id,
                params.row.Name,
                params.row.Address,
                params.row.Phone,
                params.row.Amount,
                params.row.Email
              )
            }
          >
            <EditIcon />
          </IconButton>
          <IconButton
            color="secondary"
            aria-label="delete"
            onClick={() => handleDelete(params.row._id)}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      ),
    },
  ];

  function getRowId(row) {
    return row._id;
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <div style={{ width: "100%" }}>
        <DataGrid
          autoHeight
          getRowId={getRowId}
          rows={Members}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          onRowSelectionModelChange={(ids) => handleSelectionChange(ids)}
          sx={{ "--DataGrid-overlayHeight": "100px" }}
          loading={loading}
        />
      </div>
      <MemberUpdateModal
        data={selectedRow}
        show={ModalShow}
        onHide={() => setModalShow(false)}
      />
    </ThemeProvider>
  );
};

export default MembersTable;
