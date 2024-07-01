/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState, useEffect } from "react";
// React Bootstrap
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid } from "@mui/x-data-grid";
import SandhaUpdateModal from "../../UpdateModals/SandhaUpdate";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const ThisMonth = () => {
  const currentDate = new Date();
  const MonthList = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const thismonth = MonthList[currentDate.getMonth()];
  
  const [loading, setLoading] = useState(false);
  const [ModalShow, setModalShow] = useState(false);
  const [selectedRow, setSelectedRow] = useState([]);
  const [ThisMonthSandhaDetails, setThisMonthSandhaDetails] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]); // For Print
  
  useEffect(() => {
    const fetchThisMonthSandhaDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:8000/Sandha/Month/${thismonth}`
        );

        setThisMonthSandhaDetails(response.data.AllSandhaDetails);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    fetchThisMonthSandhaDetails();
  }, [thismonth]);

  const handleEdit = (id, Name, PaidMonths, Status, Amount) => {
    setModalShow(true);
    setSelectedRow({ id, Name, PaidMonths, Status, Amount });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/Sandha/Delete/${id}`);
      setThisMonthSandhaDetails(
        ThisMonthSandhaDetails.filter((data) => data._id !== id)
      );
    } catch (err) {
      console.log(err);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formatTime = (dateString) => {
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    return new Date(dateString).toLocaleTimeString(undefined, options);
  };

  const columns = [
    {
      field: "Data",
      headerName: "Name",
      width: 230,
      renderCell: (params) => {
        return <div className="rowitem">{params.row.Data[0].Name}</div>;
      },
    },
    { field: "Description", headerName: "Description", width: 250 },
    { field: "PaidMonths", headerName: "Paid Months", width: 250 },
    {
      field: "Status",
      headerName: "Status",
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
      field: "Date",
      headerName: "Date",
      width: 130,
      valueGetter: (params) => formatDate(params.row.createdAt),
    },
    {
      field: "Time",
      headerName: "Time",
      width: 130,
      valueGetter: (params) => formatTime(params.row.createdAt),
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
                params.row.Data[0].Name,
                params.row.PaidMonths,
                params.row.Status,
                params.row.Amount
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
    <div>
      <ThemeProvider theme={darkTheme}>
        <div style={{ width: "100%" }}>
          <DataGrid
            autoHeight
            getRowId={getRowId}
            rows={ThisMonthSandhaDetails}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            disableRowSelectionOnClick
            onRowSelectionModelChange={(ids) => {
              const selectedIDs = new Set(ids);
              const selected = ThisMonthSandhaDetails.filter((row) =>
                selectedIDs.has(row._id)
              );
              setSelectedRows(selected);
            }}
            sx={{ "--DataGrid-overlayHeight": "100px" }}
            loading={loading}
          />
        </div>
      </ThemeProvider>
      <SandhaUpdateModal
        data={selectedRow}
        show={ModalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default ThisMonth;
