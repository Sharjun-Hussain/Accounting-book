/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
//From MUI
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid } from "@mui/x-data-grid";

import axios from "axios";
import SandhaUpdateModal from "../../UpdateModals/SandhaUpdate";
import { useDispatch, useSelector } from "react-redux";
import { setThisMonthSandhaDetails } from "../../../redux/Slices/SandhaSlice";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const ThisMonth = () => {
  const currentDate = new Date();
  const MonthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const thismonth = MonthList[currentDate.getMonth()];
  const [loading, setLoading] = useState(false);
  const [ModalShow, setModalShow] = useState(false);
  const [selectedRow, setselectedRow] = useState([]);
  const ThisMonthSandhaDetails = useSelector(state => state.SandhaState.ThisMonthSandhaDetails)




  const handleEdit = (id, Name, PaidMonths, Status, Amount) => {
    setModalShow(true);
    setselectedRow({ id, Name, PaidMonths, Status, Amount });
  };

 

  const handleDelete = async(id) => {
    await axios.delete(`http://localhost:8000/Sandha/Delete/${id}`)
    
  };

  const columns = [
    { field: "_id", headerName: "_id", width: 50 },
    {
      field: `Data`,
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
    { field: "createdAt", headerName: "Date", width: 250 },
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
        {ThisMonthSandhaDetails && ThisMonthSandhaDetails.AllSandhaDetails  && (
          <DataGrid
            autoHeight
            getRowId={getRowId}
            rows={ThisMonthSandhaDetails.AllSandhaDetails}
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
        )}
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
