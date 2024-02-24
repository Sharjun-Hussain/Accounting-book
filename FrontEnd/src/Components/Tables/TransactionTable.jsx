import axios from "axios";
import { useState, useEffect } from "react";

//From MUI
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid } from "@mui/x-data-grid";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

const LoadingSkeleton = () => (
  <Box
    sx={{
      height: "max-content",
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
const TransactionTable = () => {
  const [loading, setLoading] = useState(true);
  const [Transactions, setTransactions] = useState([]);
  // const [Error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/Transactions/All"
        );
        setTransactions(response.data.Transactions);
        setLoading(false);
      } catch (err) {
        console.log(err);
        // setError(err);
      }
    };
    fetchData();
    console.log(Transactions);
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const columns = [
    { field: "_id", headerName: "_id", width: 50 },
    { field: "Description", headerName: "Description", width: 230 },
    { field: "Date", headerName: "Date", width: 110 },
    { field: "Amount", headerName: "Amount", width: 110 },
    {
      field: "fromaccount",
      headerName: "FromAccount",
      width: 180,
      renderCell: (params) => {
        return <div className="rowitem" key={params.row.FromAccount._id}>{params.row.FromAccount[0].Name}</div>;
      },
      },

    {
      field: "ToAccount",
      headerName: "ToAccount",
      width: 180,
      renderCell: (params) => {
        return <div className="rowitem" key={params.row.ToAccount._id}>{params.row.ToAccount[0].Name}</div>;
      },
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
      <div style={{ width: "100%" }}>
        <DataGrid
          getRowId={getRowId}
          rows={Transactions}
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

export default TransactionTable;
