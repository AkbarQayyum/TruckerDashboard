import { Box, Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Components/Loader/Loader";

import { SnackBarContext } from "../../Context/SnackBarContext/SnackBarContext";
import { GetAllReviews, GetReviews } from "../../Redux/Slice/ReviewSlice";
import { DeleteVehicle } from "../../API/Review/DeleteReview";
import {
  GetAllDriverAttendance,
  GetAttendance,
} from "../../Redux/Slice/DriverAttendaceSlice";
const useStyles = makeStyles((theme) => {
  return {
    header: {
      fontWeight: "bolder",
      fontSize: "1.2rem",
      flex: 1,
      color: theme.palette.primary.main,
    },
  };
});
function TruckDriverAttendance() {
  const { header } = useStyles();
  const [pagesize, setpagesize] = useState(10);
  const [allData, setallData] = useState(null);
  const { status, Drivers } = useSelector(GetAllDriverAttendance);
  const [rows, setrows] = useState([]);
  const dispatch = useDispatch();
  const { setsnackBarData } = useContext(SnackBarContext);

  const columns = [
    { field: "id", headerName: "Sr #", width: 90, headerClassName: header },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      headerClassName: header,
    },

    {
      field: "phone",
      headerName: "Phone",
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
      field: "rate",
      headerName: "Rate",
      width: 150,
      headerClassName: header,
    },
    {
      field: "from",
      headerName: "From",
      width: 200,
      headerClassName: header,
    },
    {
      field: "to",
      headerName: "To",
      width: 200,
      headerClassName: header,
    },
    {
      field: "vehicle",
      headerName: "Vehicle",
      width: 200,
      headerClassName: header,
    },
    {
      field: "isAvailable",
      headerName: "IsAvailable",
      width: 250,
      headerClassName: header,
    },

  
  ];

  useEffect(() => {
    dispatch(GetAttendance());
  }, [dispatch]);
  useEffect(() => {
    if (Drivers) {
      console.log(Drivers);
      let temp = [];
      Drivers?.map((data, i) => {
        temp.push({
          id: i + 1,
          name: data?.driverId?.name,

          phone: data?.driverId?.phone,
          city: data?.city,
          rate: data?.rate,
          from: data?.from,
          vehicle: data?.vehicle,
          to: data?.to,
          isAvailable: data?.isAvailable,
          ID: data?._id,
        });
      });
      setrows(temp);
    }
  }, [Drivers]);

  return (
    <Box
      sx={{
        height: "calc(100vh - 77px)",
        width: "100%",
        backgroundColor: (theme) => theme.palette.primary.contrastText,
      }}
    >
      <DataGrid
        slotProps={{ toolbar: { csvOptions: { fileName: "Register Users" } } }}
        pageSize={pagesize}
        onPageSizeChange={(newPage) => {
          setpagesize(newPage);
        }}
        rowsPerPageOptions={[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
        experimentalFeatures={{ newEditingApi: true }}
        slots={{ toolbar: GridToolbar }}
        rows={rows}
        columns={columns}
      />
      {status !== "success" ? <Loader /> : null}
    </Box>
  );
}

export default TruckDriverAttendance;
