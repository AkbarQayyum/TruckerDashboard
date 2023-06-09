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
import { ApproveUser } from "../../API/users/ApproveUser";
import { DeleteUser } from "../../API/users/DeleteUser";
import { SnackBarContext } from "../../Context/SnackBarContext/SnackBarContext";
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
function AllUsers() {
  const { header } = useStyles();
  const [pagesize, setpagesize] = useState(10);
  const [allData, setallData] = useState(null);
  const { status, user } = useSelector(getRegisterUsers);
  const [rows, setrows] = useState([]);
  const dispatch = useDispatch();
  const { setsnackBarData } = useContext(SnackBarContext);

  const handleApproved = async (obj) => {
    console.log(obj);
    obj = { id: obj?.ID, userid: obj?.userid };
    let res = await ApproveUser(obj);
    console.log(res);
    setsnackBarData(res?.snackbarData);
    dispatch(allRegisterUsers());
  };

  const handleDelete = async (obj) => {
    console.log(obj);
    obj = { id: obj?.ID };
    let res = await DeleteUser(obj);
    console.log(res);
    setsnackBarData(res?.snackbarData);
    dispatch(allRegisterUsers());
  };

  const columns = [
    { field: "id", headerName: "Sr #", width: 90, headerClassName: header },
    {
      field: "name",
      headerName: "Name",
      width: 250,
      headerClassName: header,
    },
    {
      field: "email",
      headerName: "Email",
      width: 250,
      headerClassName: header,
    },
    {
      field: "password",
      headerName: "Password",
      width: 250,
      headerClassName: header,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 250,
      headerClassName: header,
    },
    {
      field: "isverified",
      headerName: "Verified",
      width: 110,
      headerClassName: header,
    },
    {
      field: "Action",
      headerName: "Action",
      width: 250,
      headerClassName: header,
      renderCell: (cellval) => {
        if (cellval?.row?.name !== "admin") {
          return (
            <Box sx={{display:'flex',gap:'10px'}}>
              {cellval?.row?.isverified === false ? (
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
        }
      },
    },
  ];

  useEffect(() => {
    dispatch(allRegisterUsers());
  }, [dispatch]);
  useEffect(() => {
    if (user) {
      console.log(user);
      let temp = [];
      user?.map((data, i) => {
        temp.push({
          id: i + 1,
          name: data?.name,
          email: data?.email,
          password: "******",
          phone: data?.phone,
          isverified: data?.isEmailVerified,
          ID: data?._id,
        });
      });
      setrows(temp);
    }
  }, [user]);

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

export default AllUsers;
