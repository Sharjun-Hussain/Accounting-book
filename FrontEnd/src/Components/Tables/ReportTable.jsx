/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import { useState, useEffect } from "react";


//From MUI 
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { DataGrid } from "@mui/x-data-grid";
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';


const ReportTable = () => {
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
  
  const today = new Date();
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const ThisMonth = months[today.getMonth()];


  const [loading, setLoading] = useState(true);
  const [SandhaIncome, setSandhaIncome] = useState();
  const [Transactions, setTransactions] = useState([]);
  useEffect(() => {
    const fetchSandhaIncome = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/Sandha/${ThisMonth}/Sum`
        );
        setSandhaIncome(response.data.AllSandhaDetails[0].TotalAmount);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchTransactions = async () => {
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

    fetchTransactions();
    fetchSandhaIncome();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const columns = [
    
    { field: "Description", headerName: "Description", width: 230 },
    { field: "Income", headerName: "Income", width: 250 },
    {field: "Expenses",
      headerName: "Expenses",
      type: "number",
      sortable: true,
      width: 250,
    },
    {
      field: "Balance",
      headerName: "Balance",
      type: "number",
      description: "This column has a value getter and is not sortable.",
      sortable: true,
      width: 160,
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
        rows={SandhaIncome}
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

export default ReportTable;
