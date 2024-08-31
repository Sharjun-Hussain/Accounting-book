/* eslint-disable react/prop-types */


//From MUI
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid } from "@mui/x-data-grid";

const AccountsTable = ({Accounts , onDeleteAccount , onModifyAccount, loading }) => {

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const columns = [
    // { field: "_id", headerName: "ID", width: 200 },
    { field: "Name", headerName: "Account Name", width: 300 },
    { field: "Description", headerName: "Description", width: 250 },

    {
      field: "Balance",
      headerName: "Balance",
      
      description: "This column has a value getter and is not sortable.",
      sortable: true,
      width: 250,
    },
    {
      headerName: "Actions",
      type: "textfield",
      description: "This column has a value getter and is not sortable.",

      width: 200,
      renderCell: (params) => (
        <div>
          <IconButton
            color="primary"
            aria-label="edit"
            onClick={() => onModifyAccount(params.row._id, params.row.Name,params.row.Description)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            color="secondary"
            aria-label="delete"
            onClick={() => onDeleteAccount(params.row._id)}
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
          sx={{ "--DataGrid-overlayHeight": "100px" }}
          loading={loading}
        />
      </div>

     
    </ThemeProvider>
  );
};

export default AccountsTable;
