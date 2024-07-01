import axios from "axios";
import { useState, useEffect } from "react";

// React Bootstrap
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// From MUI
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const AllData = () => {
  const [loading, setLoading] = useState(true);
  const [allSandhaDetails, setAllSandhaDetails] = useState([]);
  const [allDonations, setAllDonations] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedType, setSelectedType] = useState("Sandha");
  const [filteredRows, setFilteredRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const sandhaResponse = await axios.get(`http://localhost:8000/Sandha/All`);
        const donationsResponse = await axios.get(`http://localhost:8000/Donations/All`);

        if (sandhaResponse.data) {
          setAllSandhaDetails(sandhaResponse.data.AllSandhaDetails);
        }
        if (donationsResponse.data) {
          setAllDonations(donationsResponse.data.Donations);
        }

        setFilteredRows(sandhaResponse.data.AllSandhaDetails); // Initially set to Sandha data
      } catch (err) {
        alert(err);
        setAllSandhaDetails([]);
        setAllDonations([]);
        setFilteredRows([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleMonthChange = (event) => {
    const month = event.target.value;
    setSelectedMonth(month);
    filterData(selectedType, month);
  };

  const handleTypeChange = (event) => {
    const type = event.target.value;
    setSelectedType(type);
    filterData(type, selectedMonth);
  };

  const filterData = (type, month) => {
    let dataToFilter = type === "Sandha" ? allSandhaDetails : allDonations;

    if (month) {
      if (type === "Sandha") {
        dataToFilter = dataToFilter.filter((row) => row.PaidMonths.includes(month));
      } else {
        dataToFilter = dataToFilter.filter((row) => {
          const rowMonth = new Date(row.createdAt).toLocaleString("default", {
            month: "long",
          });
          return rowMonth === month;
        });
      }
    }

    setFilteredRows(dataToFilter);
  };

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formatTime = (dateString) => {
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    return new Date(dateString).toLocaleTimeString(undefined, options);
  };

  const sandhaColumns = [
    {
      field: "Name",
      headerName: "Name",
      width: 230,
      valueGetter: (params) =>
        params.row.MemberID ? params.row.MemberID.Name : params.row.Name,
    },
    { field: "Description", headerName: "Description", width: 250 },
    {
      field: "PaidMonths",
      headerName: "Paid Months",
      width: 250,
      valueGetter: (params) =>
        params.row.PaidMonths ? params.row.PaidMonths.join(", ") : "-",
    },
    {
      field: "Status",
      headerName: "Status",
      width: 150,
      valueGetter: (params) => (params.row.Status ? params.row.Status : "-"),
    },
    {
      field: "Amount",
      headerName: "Amount",
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
  ];

  const donationColumns = [
    {
      field: "Name",
      headerName: "Name",
      width: 230,
    },
    { field: "Description", headerName: "Description", width: 250 },
    {
      field: "Amount",
      headerName: "Amount",
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
  ];

  const columns = selectedType === "Sandha" ? sandhaColumns : donationColumns;

  function getRowId(row) {
    return row._id;
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        <Row className="mb-3">
          <Col>
            <p className="mt-3">All Incomes Subscriptions & Donations</p>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col xs={12} sm={6}>
            <FormControl
              variant="outlined"
              style={{ marginBottom: "20px", width: "100%" }}
            >
              <InputLabel id="type-label">Type</InputLabel>
              <Select
                labelId="type-label"
                value={selectedType}
                onChange={handleTypeChange}
                label="Type"
              >
                <MenuItem value="Sandha">Sandha</MenuItem>
                <MenuItem value="Donation">Donation</MenuItem>
              </Select>
            </FormControl>
          </Col>
          <Col xs={12} sm={6}>
            <FormControl
              variant="outlined"
              style={{ marginBottom: "20px", width: "100%" }}
            >
              <InputLabel id="month-label">Month</InputLabel>
              <Select
                labelId="month-label"
                value={selectedMonth}
                onChange={handleMonthChange}
                label="Month"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="January">January</MenuItem>
                <MenuItem value="February">February</MenuItem>
                <MenuItem value="March">March</MenuItem>
                <MenuItem value="April">April</MenuItem>
                <MenuItem value="May">May</MenuItem>
                <MenuItem value="June">June</MenuItem>
                <MenuItem value="July">July</MenuItem>
                <MenuItem value="August">August</MenuItem>
                <MenuItem value="September">September</MenuItem>
                <MenuItem value="October">October</MenuItem>
                <MenuItem value="November">November</MenuItem>
                <MenuItem value="December">December</MenuItem>
              </Select>
            </FormControl>
          </Col>
        </Row>
        <Row>
          <Col>
            <DataGrid
              autoHeight
              getRowId={getRowId}
              rows={filteredRows}
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
          </Col>
        </Row>
      </Container>
    </ThemeProvider>
  );
};

export default AllData;
