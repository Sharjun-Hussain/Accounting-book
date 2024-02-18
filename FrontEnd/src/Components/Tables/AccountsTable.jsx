import axios from "axios";
import { useState, useEffect } from "react";


//From MUI 
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid } from "@mui/x-data-grid";
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

const LoadingSkeleton = () => (
  <Box
    sx={{
      height: 'max-content',
    }}
  >
    {[...Array(10)].map((_, index) => (
      <Skeleton variant="rectangular" sx={{ my: 4, mx: 1 }} key={index} />
    ))}
  </Box>
);

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});


const handleEdit = (id) => {
  
  console.log("Editing member with ID:", id);
};

const handleDelete = (id) => {
  
  console.log("Deleting member with ID:", id);
};
const AccountsTable = () => {
  const [loading, setLoading] = useState(true);
  const [Accounts, setAccounts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/Accounts/All"
        );
        setAccounts(response.data.Accounts);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    console.log(Accounts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    { field: "Name", headerName: "Account Name", width: 230 },
    { field: "Description", headerName: "Description", width: 250 },

    {
      field: "Balance",
      headerName: "Balance",
      type: "number",
      description: "This column has a value getter and is not sortable.",
      sortable: true,
      width: 180,
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
      <div style={{  width: "100%" }}>
        <DataGrid
          getRowId={getRowId}
          rows={Accounts}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          disableRowSelectionOnClick
          components={{
            LoadingOverlay: LoadingSkeleton,
          }}
          loading={loading}
        />
      </div>
    </ThemeProvider>
  );
};

export default AccountsTable;
