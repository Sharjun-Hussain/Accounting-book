import axios from "axios";
import { useState, useEffect } from "react";

//From MUI
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { DataGrid } from "@mui/x-data-grid";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const TransactionTable = () => {
  const [loading, setLoading] = useState(true);
  const [Transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/Transactions/All"
        );
        setTransactions(response.data.TransactionDetails);
        console.log(response.data.TransactionDetails);
        // setTransactions(response.data.TransactionDetails[0].AccountDetails[0].Name);
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
    {
      field: "Transactio",
      headerName: "Description",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="rowitem" key={params.row.Transaction[0].Description}>
            {params.row.Transaction[0].Description}
          </div>
        );
      },
    },

    { field: "Amount", headerName: "Amount", width: 200 },
    {
      field: "Transaction",
      headerName: "Date",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="rowitem" key={params.row.Transaction[0].Date}>
            {params.row.Transaction[0].Date}
          </div>
        );
      },
    },
    {
      field: "Account",
      headerName: "Account",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="rowitem" key={params.row.Account[0]._id}>
            {params.row.Account[0].Name}
          </div>
        );
      },
    },
    {
      field: "Type",
      headerName: "Type",
      width: 200,
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
          sx={{ "--DataGrid-overlayHeight": "100px" }}
          loading={loading}
        />
      </div>
    </ThemeProvider>
  );
};

export default TransactionTable;
