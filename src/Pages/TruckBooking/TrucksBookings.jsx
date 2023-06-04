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
  GetTransporters,
  getAllTransporters,
} from "../../Redux/Slice/transporterslice";
import { DisableAPI } from "../../API/transporter/DisableApi";
import { ApproveFees } from "../../API/transporter/ApproveFee";
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
function Transporters() {
  const { header } = useStyles();
  const [pagesize, setpagesize] = useState(10);
  const [allData, setallData] = useState(null);
  const { status, transporters } = useSelector(getAllTransporters);
  const [rows, setrows] = useState([]);
  const dispatch = useDispatch();
  const { setsnackBarData } = useContext(SnackBarContext);

  const handleDisable = async (obj) => {
    console.log(obj);
    obj = { id: obj?.ID };
    let res = await DisableAPI(obj);
    console.log(res);
    setsnackBarData(res?.snackbarData);
    dispatch(GetTransporters());
  };
  const ApproveFee = async (obj) => {
    console.log(obj);
    obj = { id: obj?.userid };
    let res = await ApproveFees(obj);
    console.log(res);
    setsnackBarData(res?.snackbarData);
    dispatch(GetTransporters());
  };

  const columns = [
    { field: "id", headerName: "Sr #", width: 90, headerClassName: header },
    {
      field: "name",
      headerName: "Name",
      width: 200,
      headerClassName: header,
    },

    {
      field: "phone",
      headerName: "Phone",
      width: 200,
      headerClassName: header,
    },
    {
      field: "address",
      headerName: "Address",
      width: 200,
      headerClassName: header,
    },

    {
      field: "fee",
      headerName: "Fee Paid On",
      width: 200,
      headerClassName: header,
    },
    {
      field: "receipt",
      headerName: "Fee Receipt",
      width: 200,
      headerClassName: header,
      renderCell: (cellval) => {
        return (
          <img
            src={cellval?.row?.receipt}
            style={{ height: "200px", width: "150px" }}
          />
        );
      },
    },
    {
      field: "Action",
      headerName: "Action",
      width: 300,
      headerClassName: header,
      renderCell: (cellval) => {
        if (cellval?.row?.name !== "admin") {
          return (
            <Box sx={{ display: "flex", gap: "10px" }}>
              {cellval?.row?.isFeePaid ? (
                <Button
                  variant="contained"
                  color="warning"
                  onClick={() => handleDisable(cellval?.row)}
                >
                  Disable
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => ApproveFee(cellval?.row)}
                >
                  Approve Fee
                </Button>
              )}
            </Box>
          );
        }
      },
    },
  ];

  useEffect(() => {
    dispatch(GetTransporters());
  }, [dispatch]);
  useEffect(() => {
    if (transporters) {
      console.log(transporters);
      let temp = [];
      transporters?.map((data, i) => {
        temp.push({
          id: i + 1,
          name: data?.name,
          phone: data?.phoneNumber,
          address: data?.address,
          fee: data?.feetime,
          ID: data?._id,
          isFeePaid: data?.isFeePaid,
          receipt: data?.receipt,
          userid: data?.userid?._id,
        });
      });
      setrows(temp);
    }
  }, [transporters]);

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

export default Transporters;
