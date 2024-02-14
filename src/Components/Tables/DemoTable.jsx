
import { DataGrid } from '@mui/x-data-grid';
import axios from "axios";
import { useState, useEffect } from "react";

const columns = [
  { field: '_id', headerName: '_id', width: 50 },
  { field: 'Name', headerName: 'Name', width: 230 },
  { field: 'Address', headerName: 'Address', width: 250 },
  {
    field: 'Phone',
    headerName: 'Phone',
    type: 'number',
    sortable: true,
    width: 150,
  },
  {
    field: 'Amount',
    headerName: 'Amount',
    type: 'number',
    description: 'This column has a value getter and is not sortable.',
    sortable: true,
    width: 160,
    
  },
  {
    
    headerName: 'Actions',
    type:'textfield',
    description: 'This column has a value getter and is not sortable.',
    
    width: 120,
    
  },
];

function getRowId(row) {
    return row._id;
  }

export default function DemoTable() {

    const [Members, setMembers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/Sandha-members/All");
        setMembers(response.data.Members);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    console.log(Members);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
      getRowId={getRowId}
        rows={Members}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}