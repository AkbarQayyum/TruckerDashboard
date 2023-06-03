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
function AddDriverReg() {
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
            <FormControl fullWidth>
              <Typography>Name</Typography>
              <TextField
                name="name"
                value={formik.values?.name}
                size={"small"}
                fullWidth
                onChange={formik.handleChange}
                error={Boolean(formik.errors.name) && Boolean(formik.touched.name)}
                helperText={Boolean(formik.errors.name) && formik.errors.name}
              />
            </FormControl>

            <FormControl fullWidth>
              <Typography>Province</Typography>
              <TextField
                name="province"
                value={formik.values?.province}
                size={"small"}
                fullWidth
                select
                onChange={formik.handleChange}
                type="number"
                error={Boolean(formik.errors.province) && Boolean(formik.touched.province)}
                helperText={Boolean(formik.errors.province) && formik.errors.province}
              >
                <MenuItem value="">select</MenuItem>
                <MenuItem value="Punjab">Punjab</MenuItem>
                <MenuItem value="Balochistan">Balochistan</MenuItem>
                <MenuItem value="Sindh">Sindh</MenuItem>
                <MenuItem value="KPK">KPK</MenuItem>
                </TextField>
            </FormControl>
            <Box sx={{width:"100%",display:"flex",gap:"20px"}}>
              <Box sx={{width:"49%"}}>
            <FormControl fullWidth>
              <Typography>Address</Typography>
              <TextField
                name="address"
                type="text"
                value={formik.values?.address}
                size={"small"}
                fullWidth
                onChange={formik.handleChange}
                error={Boolean(formik.errors.address) && Boolean(formik.touched.address)}
                helperText={Boolean(formik.errors.address) && formik.errors.address}
              />
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
            <Box sx={{width:"100%",display:"flex",gap:"20px"}}>
              <Box sx={{width:"49%"}}>
            <FormControl fullWidth>
              <Typography>License Number</Typography>
              <TextField
                name="licenseNo"
                type="text"
                value={formik.values?.licenseNo}
                size={"small"}
                fullWidth
                onChange={formik.handleChange}
                error={Boolean(formik.errors.licenseNo) && Boolean(formik.touched.licenseNo)}
                helperText={Boolean(formik.errors.licenseNo) && formik.errors.licenseNo}
              />
            </FormControl>
            </Box>
           <Box sx={{width:"49%"}}>

            <FormControl fullWidth>
              <Typography>License Type</Typography>
              <TextField
                name="licenseType"
                value={formik.values?.licenseType}
                size={"small"}
                fullWidth
                onChange={formik.handleChange}
                type="text"
                select
                error={Boolean(formik.errors.licenseType) && Boolean(formik.touched.licenseType)}
                helperText={Boolean(formik.errors.licenseType) && formik.errors.licenseType}
              >
                <MenuItem value="Motorcycle/Jeep">Motorcycle/Jeep</MenuItem>
                <MenuItem value="LTV">LTV</MenuItem>
                <MenuItem value="MTV">MTV</MenuItem>
                <MenuItem value="MCR">NCR</MenuItem>
                <MenuItem value="PSV">PSV</MenuItem>
                </TextField>
            </FormControl>
            </Box>
            </Box>

            <FormControl fullWidth>
              <Typography>Experience</Typography>
              <TextField
                name="experience"
                value={formik.values?.experience}
                size={"small"}
                fullWidth
                onChange={formik.handleChange}
                type="text"
                error={Boolean(formik.errors.experience) && Boolean(formik.touched.experience)}
                helperText={Boolean(formik.errors.experience) && formik.errors.experience}
              />
            </FormControl>
            <FormControl fullWidth>
              <Typography>Phone</Typography>
              <TextField
                name="phone"
                value={formik.values?.phone}
                size={"small"}
                fullWidth
                onChange={formik.handleChange}
                type="text"
                error={Boolean(formik.errors.phone) && Boolean(formik.touched.phone)}
                helperText={Boolean(formik.errors.phone) && formik.errors.phone}
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
            <Box sx={{display:"flex",justifyContent:"center"}}>
                <Typography sx={{fontWeight:"bold"}}>Bussiness Images</Typography>
            </Box>
            <Box sx={{width:"100%",display:"flex",gap:"20px"}}>
              <Box sx={{width:"49%"}}>
            <FormControl fullWidth>
              {/* <Typography>CNIC Image</Typography> */}
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
              {/* <Typography>Profile Image</Typography> */}
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

export default AddDriverReg