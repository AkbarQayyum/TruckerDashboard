import { Box, Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import {
  allRegisterUsers,
  getRegisterUsers,
} from "../../Redux/Slice/UserSlice";
import Loader from "../../Components/Loader/Loader";
import {
  AllVehicleForSelling,
  GetSellingVehicles,
} from "../../Redux/Slice/SellingVehicleSlice";
import { ApproveVehicle } from "../../API/Vehicles/ApproveAPI";
import { SnackBarContext } from "../../Context/SnackBarContext/SnackBarContext";
import { DeleteVehicle } from "../../API/Vehicles/DeleteApi";
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
function Vehicles() {
  const { header } = useStyles();
  const [pagesize, setpagesize] = useState(10);
  const [allvehicles, setallvehicles] = useState(null);
  const { setsnackBarData } = useContext(SnackBarContext);
  const { status, vehicles } = useSelector(GetSellingVehicles);
  const [rows, setrows] = useState([]);
  const dispatch = useDispatch();

  const handleApproved = async (obj) => {
    console.log(obj);
    obj = { id: obj?.ID, userid: obj?.userid };
    let res = await ApproveVehicle(obj);
    console.log(res);
    setsnackBarData(res?.snackbarData);
    dispatch(AllVehicleForSelling());
  };

  const handleDelete = async (obj) => {
    console.log(obj);
    obj = { id: obj?.ID };
    let res = await DeleteVehicle(obj);
    console.log(res);
    setsnackBarData(res?.snackbarData);
    dispatch(AllVehicleForSelling());
  };

  const columns = [
    { field: "id", headerName: "Sr #", width: 50, headerClassName: header },
    {
      field: "name",
      headerName: "Name",
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
      field: "phone",
      headerName: "Phone Number",
      width: 150,
      headerClassName: header,
    },
    {
      field: "price",
      headerName: "Price",
      width: 150,
      headerClassName: header,
    },
    {
      field: "vehicle",
      headerName: "Vehicle",
      width: 150,
      headerClassName: header,
    },
    {
      field: "desc",
      headerName: "Description",
      width: 150,
      headerClassName: header,
    },
    {
      field: "pics",
      headerName: "Pictures",
      width: 250,
      headerClassName: header,
      renderCell: (cellval) => {
        return (
          <Box sx={{ display: "flex", gap: "10px" }}>
            <img
              src={cellval?.row?.pic1}
              style={{ height: "100px", width: "100px" }}
            />
            <img
              src={cellval?.row?.pic2}
              style={{ height: "100px", width: "100px" }}
            />
          </Box>
        );
      },
    },
    {
      field: "status",
      headerName: "IsApproved",
      width: 150,
      headerClassName: header,
    },
    {
      field: "Action",
      headerName: "Action",
      width: 250,
      headerClassName: header,
      renderCell: (cellval) => {
        return (
          <Box sx={{ display: "flex", gap: "20px" }}>
            {cellval?.row?.status === false ? (
              <Button
                variant="contained"
                color="success"
                onClick={() => handleApproved(cellval?.row)}
              >
                Approve
              </Button>
            ) : null}
            <Button
              variant="contained"
              color="error"
              onClick={() => handleDelete(cellval?.row)}
            >
              Delete
            </Button>
          </Box>
        );
      },
    },
  ];

  useEffect(() => {
    dispatch(AllVehicleForSelling());
  }, [dispatch]);
  useEffect(() => {
    if (vehicles) {
      let temp = [];
      console.log(vehicles);
      vehicles?.map((data, i) => {
        temp.push({
          id: i + 1,
          name: data?.name,
          city: data?.city,
          phone: data?.phoneNumber,
          price: data?.price,
          vehicle: data?.vehicle,
          status: data?.isApproved,
          desc: data?.desc,
          pic1: data?.pic1,
          pic2: data?.pic2,
          userid: data?.userid,
          ID: data?._id,
        });
      });
      setrows(temp);
    }
  }, [vehicles]);

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

export default Vehicles;
