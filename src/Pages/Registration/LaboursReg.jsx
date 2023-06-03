import { Box } from '@mui/material';
import React, { useState } from 'react'
import {
  DataGrid
} from '@mui/x-data-grid';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => {
  return {
    header: {
      fontWeight: "bolder",
      fontSize: "1.1rem",
      color:theme.palette.primary.main
    },
  };
});
function LaboursReg() {
  const { header } = useStyles();

  const [pagesize, setpagesize] = useState(10);

  const columns = [
    { field: "id", headerName: "Sr #", width: 90, headerClassName: header },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      headerClassName: header,
    },
    {
      field: "provine",
      headerName: "Province",
      width: 150,
      headerClassName: header,
    },
    {
      field: "city",
      headerName: "City",
      width: 150,
      headerClassName: header,
    },
    {
      field: "address",
      headerName: "Address",
      width: 110,
      headerClassName: header,
    },
    {
      field: "phone",
      headerName: "Phone",
      headerClassName: header,
      width: 160,
    },
    {
      field: "experience",
      headerName: "Experience",
      headerClassName: header,
      width: 160,
    },

  ];
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
  return (
    <Box sx={{
      height: "calc(100vh - 77px)", width: '100%',
      backgroundColor: (theme) => theme.palette.primary.contrastText
    }}>   
         <DataGrid
    pageSize={pagesize}
    onPageSizeChange={(newPage) => {
      setpagesize(newPage);
    }}
    rowsPerPageOptions={[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
    experimentalFeatures={{ newEditingApi: true }}
    // components={{
    //   Toolbar: CustomToolbar,
    // }}
    rows={rows}
    columns={columns}
  />
  </Box>
  )
}

export default LaboursReg