/* eslint-disable no-undef */
import axios from "axios";
import { useState, useEffect } from "react";


//From MUI 
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid } from "@mui/x-data-grid";

import MemberUpdateModal from "../UpdateModals/MemberUpdate";

const MembersTable = () => {
  const [loading, setLoading] = useState(true);
  const [Members, setMembers] = useState([]);
  const [ModalShow, setModalShow] = useState(false);
  const [selectedRow, setselectedRow] = useState({})
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

  
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  
  
  const handleEdit = (id,Name,Address,Phone,Amount,Email) => {
    setModalShow(true);
    setselectedRow({id,Name,Address,Phone,Amount,Email});

  };
  
  const handleDelete = async (id) => {
    await axios.delete( `http://localhost:8000/Sandha-members/Delete/${id}`)
    setMembers(Members.filter((member) =>  member._id !== id))
  };

  const columns = [
    { field: "_id", headerName: "_id", width: 50 },
    { field: "Name", headerName: "Name", width: 180 },
    { field: "Address", headerName: "Address", width: 170 },
    { field: "Email", headerName: "Email", width: 170 },
    {field: "Phone",
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
          onClick={() => handleEdit(params.row._id,params.row.Name,params.row.Address,params.row.Phone,params.row.Amount,params.row.Email)}
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

      <div style={{  width: "100%" }}>
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
          disableRowSelectionOnClick
          sx={{ "--DataGrid-overlayHeight": "100px" }}
            loading={loading}
        />
      </div>
      <MemberUpdateModal data= {selectedRow} show={ModalShow} onHide={() => setModalShow(false)} />
    </ThemeProvider>
  );
};



export default MembersTable;
