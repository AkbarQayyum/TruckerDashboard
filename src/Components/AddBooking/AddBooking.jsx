import React from 'react';
import {
  Box,
  Button,
  CircularProgress,
  // CircularProgress,
  FormControl,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from 'formik';
import { makeStyles } from '@mui/styles';
import {  useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import theme from '../../theme/index';
const useStyle = makeStyles(() => {
  return {
    container: {
      height: "100%",
      width: "100%",
      padding: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      [theme.breakpoints.down("md")]: {
        padding: "5px",
      },
    },
    subContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      padding: "20px",
      width: "100%",
      maxWidth: "1000px",
      height:"680px",
      [theme.breakpoints.down("md")]: {
        padding: "5px",
      },

    },
    formContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      textAlign:"left",

    },
    //   LoadingContainer: {
    //     height: "70vh",
    //     width: "100%",
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //   },
  };
});
function AddBooking() {
    const {
        container,
        subContainer,
        formContainer,
      } = useStyle();
      const initialValues = {
        name: "",
        date: "",
        city: "",
        time: "",
        address: "",
        price: "",
        labourtype: "",
        phone: "",
        labourcount: "",
    
      };
      const navigate = useNavigate();
      const handleSubmit = async (values, resetForm, setSubmitting) => {
    
      };
      const handleNavigate = () => {
        navigate(-1);
      };
      const ValidationSchema = Yup.object().shape({
        name: Yup.string().required("Please Enter Product Name"),
        date: Yup.string().required("Please Enter date"),
        city: Yup.string().required("Please Enter city"),
        address: Yup.string().required("Please Enter address"),
        price: Yup.string().required("Please Enter Price"),
        time: Yup.string().required("Please Enter Time"),
        labourtype: Yup.string().required("Please Enter Labour Type"),
        labourcount: Yup.string().required("Please Enter Labour Count"),
        phone: Yup.string().required("Please Enter Phone"),
      });
      const formik = useFormik({
        initialValues: initialValues,
        validationSchema: ValidationSchema,
        onSubmit: (values, { resetForm, setSubmitting }) => {
          handleSubmit(values, resetForm, setSubmitting);
        }
      });
  return (
    <Box className={container}>

    <Box className={subContainer}>
      {/* <Typography variant="h5" sx={{ textAlign: "left", fontWeight: 400 }}>

  Cotton Booking
       
      </Typography> */}
      <Paper elevation={3} sx={{ padding: "20px" ,overflowY:"scroll"}}>
        <form onSubmit={formik.handleSubmit}>
          <Box className={formContainer}>
          <Box sx={{width:"100%",display:"flex",gap:"20px"}}>
              <Box sx={{width:"49%"}}>
            <FormControl fullWidth>
              <Typography>Area Range</Typography>
              <TextField
                name="arearange"
                type="text"
                value={formik.values?.arearange}
                size={"small"}
                fullWidth
                select
                onChange={formik.handleChange}
                error={Boolean(formik.errors.arearange) && Boolean(formik.touched.arearange)}
                helperText={Boolean(formik.errors.arearange) && formik.errors.arearange}
              >
                <MenuItem value="1 to 10 Km">1 to 10 Km</MenuItem>
                <MenuItem value="10 to 20 Km">10 to 20 Km</MenuItem>
                <MenuItem value="20 to 30 Km">20 to 30 Km</MenuItem>
                <MenuItem value="30 to 40 Km">30 to 40 Km</MenuItem>
                <MenuItem value="above 50 Km">above 50 Km</MenuItem>
                </TextField>
            </FormControl>
            </Box>
           <Box sx={{width:"49%"}}>

            <FormControl fullWidth>
              <Typography>City</Typography>
              <TextField
                name="city"
                value={formik.values?.city}
                size={"small"}
                fullWidth
                onChange={formik.handleChange}
                type="text"
                error={Boolean(formik.errors.city) && Boolean(formik.touched.city)}
                helperText={Boolean(formik.errors.city) && formik.errors.city}
              />
            </FormControl>
            </Box>

            </Box>
            <FormControl fullWidth>
              <Typography>Date</Typography>
              <TextField
                name="date"
                value={formik.values?.date}
                size={"small"}
                fullWidth
                onChange={formik.handleChange}
                type="text"
                error={Boolean(formik.errors.date) && Boolean(formik.touched.date)}
                helperText={Boolean(formik.errors.date) && formik.errors.date}
              />
            </FormControl>
            <Box sx={{display:"flex",justifyContent:"center"}}>
<Typography>Booking Details</Typography>
            </Box>
            <Box sx={{width:"100%",display:"flex",gap:"20px"}}>
              <Box sx={{width:"49%"}}>
            <FormControl fullWidth>
              <Typography>Count</Typography>
              <TextField
                name="count"
                type="text"
                value={formik.values?.count}
                size={"small"}
                fullWidth
                onChange={formik.handleChange}
                error={Boolean(formik.errors.count) && Boolean(formik.touched.count)}
                helperText={Boolean(formik.errors.count) && formik.errors.count}
              />
            </FormControl>
            </Box>
           <Box sx={{width:"49%"}}>

            <FormControl fullWidth>
              <Typography>Order Name</Typography>
              <TextField
                name="orderName"
                value={formik.values?.orderName}
                size={"small"}
                fullWidth
                onChange={formik.handleChange}
                type="text"
                error={Boolean(formik.errors.orderName) && Boolean(formik.touched.orderName)}
                helperText={Boolean(formik.errors.orderName) && formik.errors.orderName}
              />
            </FormControl>
            </Box>
            </Box>
            <Box sx={{width:"100%",display:"flex",gap:"20px"}}>
              <Box sx={{width:"49%"}}>
            <FormControl fullWidth>
              <Typography>Budget</Typography>
              <TextField
                name="budget"
                type="text"
                value={formik.values?.budget}
                size={"small"}
                fullWidth
                onChange={formik.handleChange}
                error={Boolean(formik.errors.budget) && Boolean(formik.touched.budget)}
                helperText={Boolean(formik.errors.budget) && formik.errors.budget}
              />
            </FormControl>
            </Box>
           <Box sx={{width:"49%"}}>

            <FormControl fullWidth>
              <Typography>Weight</Typography>
              <TextField
                name="weight"
                value={formik.values?.weight}
                size={"small"}
                fullWidth
                onChange={formik.handleChange}
                type="number"
                error={Boolean(formik.errors.weight) && Boolean(formik.touched.weight)}
                helperText={Boolean(formik.errors.weight) && formik.errors.weight}
              />
            </FormControl>
            </Box>
            </Box>
            <Box sx={{width:"100%",display:"flex",gap:"20px"}}>
              <Box sx={{width:"49%"}}>
            <FormControl fullWidth>
              <Typography>Order Location</Typography>
              <TextField
                name="orderLocation"
                type="text"
                value={formik.values?.orderLocation}
                size={"small"}
                fullWidth
                onChange={formik.handleChange}
                error={Boolean(formik.errors.orderLocation) && Boolean(formik.touched.orderLocation)}
                helperText={Boolean(formik.errors.orderLocation) && formik.errors.orderLocation}
              />
            </FormControl>
            </Box>
           <Box sx={{width:"49%"}}>

            <FormControl fullWidth>
              <Typography>Order Getting Location </Typography>
              <TextField
                name="getLocation"
                value={formik.values?.getLocation}
                size={"small"}
                fullWidth
                onChange={formik.handleChange}
                type="number"
                error={Boolean(formik.errors.getLocation) && Boolean(formik.touched.getLocation)}
                helperText={Boolean(formik.errors.getLocation) && formik.errors.getLocation}
              />
            </FormControl>
            </Box>
            </Box>

            <FormControl fullWidth>
              <Typography>Receiver Address</Typography>
              <TextField
                name="receiverAdres"
                value={formik.values?.receiverAdres}
                size={"small"}
                fullWidth
                onChange={formik.handleChange}
                type="text"
                error={Boolean(formik.errors.receiverAdres) && Boolean(formik.touched.receiverAdres)}
                helperText={Boolean(formik.errors.receiverAdres) && formik.errors.receiverAdres}
              />
            </FormControl>
            <Box sx={{width:"100%",display:"flex",gap:"20px"}}>
              <Box sx={{width:"49%"}}>
            <FormControl fullWidth>
              <Typography>CNIC Image</Typography>
              <TextField
                name="cnicimage"
                type="file"
                value={formik.values?.cnicimage}
                size={"small"}
                fullWidth
                onChange={formik.handleChange}
              />
            </FormControl>
            </Box>
           <Box sx={{width:"49%"}}>

            <FormControl fullWidth>
              <Typography>Profile Image</Typography>
              <TextField
                name="profileImage"
                value={formik.values?.profileImage}
                size={"small"}
                fullWidth
                onChange={formik.handleChange}
                type="file"

              />
            </FormControl>
            </Box>

            </Box>
            <FormControl fullWidth>
              <Typography>Phone</Typography>
              <TextField
                name="phone"
                value={formik.values?.phone}
                size={"small"}
                fullWidth
                onChange={formik.handleChange}
                type="number"

              />
            </FormControl>

            <Box sx={{width:"100%",display:"flex",gap:"20px"}}>
              <Box sx={{width:"49%"}}>
            <FormControl fullWidth>
              <Typography>Receiver CNIC Front</Typography>
              <TextField
                name="cnicimageRec"
                type="file"
                value={formik.values?.cnicimageRec}
                size={"small"}
                fullWidth
                onChange={formik.handleChange}
              />
            </FormControl>
            </Box>
           <Box sx={{width:"49%"}}>

            <FormControl fullWidth>
              <Typography>Receiver CNIC Back</Typography>
              <TextField
                name="cnicBackimageRec"
                value={formik.values?.cnicBackimageRec}
                size={"small"}
                fullWidth
                onChange={formik.handleChange}
                type="file"

              />
            </FormControl>
            </Box>

            </Box>
            <FormControl fullWidth>
              <Typography>Receiver Phone</Typography>
              <TextField
                name="RecPhone"
                value={formik.values?.RecPhone}
                size={"small"}
                fullWidth
                onChange={formik.handleChange}
                type="number"

              />
            </FormControl>
            <FormControl fullWidth>
              <Typography>Who Pay Rent</Typography>
              <TextField
                name="rent"
                value={formik.values?.rent}
                size={"small"}
                fullWidth
                onChange={formik.handleChange}
                type="text"

              />
            </FormControl>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "end",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "20px",
                }}
              >
                <Box>
                  <Button onClick={handleNavigate}>
                    <Typography sx={{ fontWeight: "bold" }}>
                      Back
                    </Typography>
                  </Button>
                </Box>
                <Box>
                  {
                    formik.isSubmitting ? <Box>
                      {/* <Loader/> */}
                      <CircularProgress/>
                    </Box> : <Button variant="contained" type="submit">
                      <Typography sx={{ fontWeight: "bold" }}>
                       Save
                        
                        
                      </Typography>
                    </Button>
                  }

                </Box>
              </Box>
            </Box>
          </Box>
        </form>
      </Paper>
    </Box>

  </Box>
  )
}

export default AddBooking