import { Box, Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Components/Loader/Loader";

import { SnackBarContext } from "../../Context/SnackBarContext/SnackBarContext";
import { GetAllReviews, GetReviews } from "../../Redux/Slice/ReviewSlice";
import { DeleteVehicle } from "../../API/Review/DeleteReview";
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
function Reviews() {
  const { header } = useStyles();
  const [pagesize, setpagesize] = useState(10);
  const [allData, setallData] = useState(null);
  const { status, reviews } = useSelector(GetAllReviews);
  const [rows, setrows] = useState([]);
  const dispatch = useDispatch();
  const { setsnackBarData } = useContext(SnackBarContext);

  const handleDelete = async (obj) => {
    console.log(obj);
    obj = { id: obj?.ID };
    let res = await DeleteVehicle(obj);
    console.log(res);
    setsnackBarData(res?.snackbarData);
    dispatch(GetReviews());
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
      field: "email",
      headerName: "Email",
      width: 250,
      headerClassName: header,
    },

    {
      field: "phone",
      headerName: "Phone",
      width: 200,
      headerClassName: header,
    },
    {
      field: "isSatisfied",
      headerName: "Is_Satisfied",
      width: 250,
      headerClassName: header,
    },
    {
      field: "review",
      headerName: "Review",
      width: 300,
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
            <Box sx={{ display: "flex", gap: "10px" }}>
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
    dispatch(GetReviews());
  }, [dispatch]);
  useEffect(() => {
    if (reviews) {
      console.log(reviews);
      let temp = [];
      reviews?.map((data, i) => {
        temp.push({
          id: i + 1,
          name: data?.userid?.name,
          email: data?.userid?.email,

          phone: data?.userid?.phone,
          review: data?.review,
          isSatisfied: data?.isSatisfied,
          ID: data?._id,
        });
      });
      setrows(temp);
    }
  }, [reviews]);

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

export default Reviews;
