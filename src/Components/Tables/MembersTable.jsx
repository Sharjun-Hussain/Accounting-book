import axios from "axios";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});


const handleEdit = (id) => {
  // Implement edit functionality here
  console.log("Editing member with ID:", id);
};

const handleDelete = (id) => {
  // Implement delete functionality here
  console.log("Deleting member with ID:", id);
};
const MembersTable = () => {
  const [Members, setMembers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/Sandha-members/All"
        );
        setMembers(response.data.Members);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    console.log(Members);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const columns = [
    { field: "_id", headerName: "_id", width: 50 },
    { field: "Name", headerName: "Name", width: 230 },
    { field: "Address", headerName: "Address", width: 250 },
    {
      field: "Phone",
      headerName: "Phone",
      type: "number",
      sortable: true,
      width: 150,
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
          onClick={() => handleEdit(params.row._id)}
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
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          getRowId={getRowId}
          rows={Members}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </div>
    </ThemeProvider>
  );
};

export default MembersTable;
