import { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import SandhaUpdateModal from "../../UpdateModals/SandhaUpdate";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const LastMonth = () => {
  const currentDate = new Date();
  const MonthList = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const lastmonth = MonthList[currentDate.getMonth() - 1];
  
  const [loading, setLoading] = useState(false);
  const [ModalShow, setModalShow] = useState(false);
  const [selectedRow, setSelectedRow] = useState({});
  const [LastMonthSandhaDetails, setLastMonthSandhaDetails] = useState([]);

  useEffect(() => {
    const fetchLastMonthSandhaDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:8000/Sandha/Month/${lastmonth}`
        );

        setLastMonthSandhaDetails(response.data.AllSandhaDetails);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    fetchLastMonthSandhaDetails();
  }, [lastmonth]);

  const handleEdit = (id, Name, PaidMonths, Status, Amount) => {
    setModalShow(true);
    setSelectedRow({ id, Name, PaidMonths, Status, Amount });
  };
  
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/Sandha/Delete/${id}`);
      setLastMonthSandhaDetails(LastMonthSandhaDetails.filter((data) => data._id !== id));
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
      field: `Data`,
      headerName: "Name",
      width: 230,
      renderCell: (params) => {
        return <div className="rowitem">{params.row.Data[0].Name}</div>;
      },
    },
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
      field: "createdAt", 
      headerName: "Date", 
      width: 150,
      valueGetter: (params) => formatDate(params.row.createdAt),
    },
    { 
      field: "createdAt", 
      headerName: "Time", 
      width: 120,
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
            onClick={() => handleEdit(params.row._id, params.row.Data[0].Name, params.row.PaidMonths, params.row.Status, params.row.Amount)}
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
            rows={LastMonthSandhaDetails}
            columns={columns}
            pageSize={10}
            checkboxSelection
            disableRowSelectionOnClick
            loading={loading}
            sx={{ "--DataGrid-overlayHeight": "100px" }}
          />
        </div>
      </ThemeProvider>
      <SandhaUpdateModal data={selectedRow} show={ModalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default LastMonth;
