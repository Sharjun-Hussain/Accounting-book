import axios from "axios";
import { useState, useEffect } from "react";


//From MUI 
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid } from "@mui/x-data-grid";
import DonationUpdateModal from "../UpdateModals/DonationUpdate";





const DonationTable = () => {
  const [loading, setLoading] = useState(true);
  const [Donations, setDonations] = useState([]);
  const [ModalShow, setModalShow] = useState(false);
  const [selectedRow, setselectedRow] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "http://localhost:8000/Donations/All"
        );
        setDonations(response.data.Donations);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    };
    fetchData();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);




  
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  
  
  const handleEdit = (id,Name,Amount,Description) => {
    
    setModalShow(true);
    console.log(id);
    setselectedRow({id,Name,Description,Amount});
  };

  const handleDelete = async (id) => {
    
    await axios.delete( `http://localhost:8000/Donations/Delete/${id}`)
    setDonations(Donations.filter((donation) =>  donation._id !== id))

  };
  const columns = [
    { field: "_id", headerName: "ID", width: 150 },
    { field: "Name", headerName: " Name", width: 230 },
    { field: "Description", headerName: "Description", width: 200 },

    {
      field: "Amount",
      headerName: "Amount",
      type: "number",
      description: "This column has a value getter and is not sortable.",
      sortable: true,
      width: 250,
    },
    {
      headerName: "Actions",
      type: "textfield",
      description: "This column has a value getter and is not sortable.",

      width: 150,
      renderCell: (params) => (
        <div>
          <IconButton
          color="primary"
          aria-label="edit"
          onClick={() => handleEdit(params.row._id,params.row.Name,params.row.Amount,params.row.Description)}
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
          rows={Donations}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          disableRowSelectionOnClick
          loading={loading}
        />
      </div>
      <DonationUpdateModal data= {selectedRow} show={ModalShow} onHide={() => setModalShow(false)} />
    </ThemeProvider>
  );
};

export default DonationTable;
