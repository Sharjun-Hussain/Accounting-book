import { useState,useEffect } from "react";
//From MUI 
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid } from "@mui/x-data-grid";
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import axios from "axios";

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


const ThisMonth = () => {

  const currentDate = new Date()
  const MonthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const thismonth = MonthList[currentDate.getMonth()]
 
  const [loading, setLoading] = useState(true);

  const [AllSandhaDetails, setAllSandhaDetails] = useState([]);  //fetchThisMonthSandha
  

  useEffect(() => {
    const fetchThisMonthSandha = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/Sandha/Month/${thismonth}`
        );
        setAllSandhaDetails(response.data.AllSandhaDetails);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

   
    fetchThisMonthSandha();
    
    console.log(AllSandhaDetails);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const columns = [
    { field: "_id", headerName: "_id", width: 50 },
    { field: `Data`, headerName: "Name", width: 230,renderCell: (params) => {
      return <div className="rowitem">{params.row.Data[0].Name}</div>;
    }, },
    { field: "PaidMonths", headerName: "Paid Months", width: 250 },
    {field: "Status",
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
    <div>
       <ThemeProvider theme={darkTheme}>
     
      <div  style={{  width: "100%"}}>
        <DataGrid 
          getRowId={getRowId}
          rows={AllSandhaDetails}
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
    </div>
  );
};

export default ThisMonth;
