import React, { useContext, useEffect, useState } from 'react';
import {
  Box,
  Button,
  CircularProgress,
  // CircularProgress,
  FormControl,
  MenuItem,
  Paper,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from 'formik';
import { makeStyles } from '@mui/styles';
import { useLocation, useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import theme from '../../theme/index';

// import { fetchProducts } from '../../../Redux/Slice/ProductSlice/ProductSlice';

// import Loader from '../../Loader/Loader';
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
function AddSeedsBooking() {
    const {
        container,
        subContainer,
        formContainer,
      } = useStyle();
      const { state } = useLocation();
      const [checkedVal,setcheckedVal]=useState(false)
      const [checkedExist,setcheckedExist]=useState(false)
      const [checkedGoing,setcheckedGoing]=useState(false)
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
            <Box sx={{display:"flex",gap:"20px",justifyContent:"center",alignItems:"center"}}>
              <Typography>Local Area Builty </Typography>
              <Switch value={checkedVal} onChange={(e)=>{
                setcheckedVal(e.target.checked)
               
              }} />
              <Typography>Long Root Builty </Typography>
            </Box>
            <FormControl fullWidth>
              <Typography>City</Typography>
              <TextField
                name="city"
                value={formik.values?.city}
                size={"small"}
                fullWidth
                onChange={formik.handleChange}
                error={Boolean(formik.errors.city) && Boolean(formik.touched.city)}
                helperText={Boolean(formik.errors.city) && formik.errors.city}
              />
            </FormControl>
            {
              checkedVal===true?
              <Box sx={{width:"100%",display:"flex",gap:"30px"}}>
                <Box sx={{width:"49%"}}>
              <Typography>From</Typography>

                  <TextField        name="labourcount"
                value={formik.values?.labourcount}
                size={"small"}
                fullWidth
                
                onChange={formik.handleChange}
                type="text"/>
                </Box>
                <Box sx={{width:"49%"}}>
              <Typography>To</Typography>

                <TextField        name="labourcount"
                value={formik.values?.labourcount}
                size={"small"}
                fullWidth
                
                onChange={formik.handleChange}
                type="text"/>
                </Box>
                </Box>
              :
           
            <FormControl fullWidth>
              <Typography>Local Area Range</Typography>
              <TextField
                name="labourcount"
                value={formik.values?.labourcount}
                size={"small"}
                fullWidth
                select
                onChange={formik.handleChange}
                type="number"
                error={Boolean(formik.errors.labourcount) && Boolean(formik.touched.labourcount)}
                helperText={Boolean(formik.errors.labourcount) && formik.errors.labourcount}
              >
                <MenuItem value="">select</MenuItem>
                <MenuItem value="1 to 10 km">1 to 10 km</MenuItem>
                <MenuItem value="10 to 20 km">10 to 20 km</MenuItem>
                <MenuItem value="20 to 30 km">20 to 30 km</MenuItem>
                <MenuItem value="30 to 40 km">30 to 40 km</MenuItem>
                <MenuItem value="40 to 50 km">40 to 50 km</MenuItem>
                <MenuItem value="Above 50 km">Above 50 km</MenuItem>

                </TextField>
            </FormControl>
             }
            <FormControl fullWidth>
              <Typography>Date</Typography>
              <TextField
                name="date"
                type='date'
                value={formik.values?.date}
                size={"small"}
                
                fullWidth
                onChange={formik.handleChange}
                error={Boolean(formik.errors.date) && Boolean(formik.touched.date)}
                helperText={Boolean(formik.errors.date) && formik.errors.date}
              />

            </FormControl>
            <Box sx={{display:"flex",justifyContent:"center",}}>
              <Typography sx={{fontWeight:"bold"}}>
                Details
              </Typography>
              </Box>
            <Box sx={{width:"100%",display:"flex",gap:"20px"}}>
              <Box sx={{width:"49%"}}>
            <FormControl fullWidth>
              <Typography>Count</Typography>
              <TextField
                name="count"
                type="number"
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
              <Typography>Cotton</Typography>
              <TextField
                name="cotton"
                value={formik.values?.cotton}
                size={"small"}
                fullWidth
                onChange={formik.handleChange}
                type="text"
                error={Boolean(formik.errors.cotton) && Boolean(formik.touched.cotton)}
                helperText={Boolean(formik.errors.cotton) && formik.errors.cotton}
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
                type="number"
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
              <Typography>Time Taking</Typography>
              <TextField
                name="timeTaking"
                type="number"
                value={formik.values?.timeTaking}
                size={"small"}
                fullWidth
                onChange={formik.handleChange}
                error={Boolean(formik.errors.timeTaking) && Boolean(formik.touched.timeTaking)}
                helperText={Boolean(formik.errors.timeTaking) && formik.errors.timeTaking}
              />
            </FormControl>
            </Box>
           <Box sx={{width:"49%"}}>

            <FormControl fullWidth>
              <Typography>Transport Type</Typography>
              <TextField
                name="transType"
                value={formik.values?.transType}
                size={"small"}
                fullWidth
                onChange={formik.handleChange}
                type="number"
                error={Boolean(formik.errors.transType) && Boolean(formik.touched.transType)}
                helperText={Boolean(formik.errors.transType) && formik.errors.transType}
              />
            </FormControl>
            </Box>

            </Box>
            <FormControl fullWidth>
              <Typography>Address of Receiver</Typography>
              <TextField
                name="transType"
                value={formik.values?.transType}
                size={"small"}
                fullWidth
                onChange={formik.handleChange}
                type="text"
                error={Boolean(formik.errors.transType) && Boolean(formik.touched.transType)}
                helperText={Boolean(formik.errors.transType) && formik.errors.transType}
              />
            </FormControl>
            <Box>
              <Typography sx={{fontWeight:"bold"}}>
                Do you our registered Members?
              </Typography>
              <Typography >
               * If <b>Yes</b> please enter registration number
              </Typography>
              <Typography >
               * If <b>No</b> please enter data below fields
              </Typography>
              </Box>
              <Box sx={{display:"flex",gap:"20px",justifyContent:"center",alignItems:"center"}}>
              <Typography>No </Typography>
              <Switch value={checkedExist} onChange={(e)=>{
                setcheckedExist(e.target.checked)
               
              }} />
              <Typography>Yes</Typography>
            </Box>
            {
              checkedExist===true?null:
            <>
            <Box sx={{width:"100%",display:"flex",gap:"30px"}}>
              <Box sx={{width:"49%"}}>
                <Typography>CNIC Front</Typography>
                <TextField name="transType"
                value={formik.values?.transType}
                size={"small"}
                fullWidth
                onChange={formik.handleChange}
                type="file"/>
              </Box>
              <Box sx={{width:"49%"}}>
              <Typography>CNIC Back</Typography>

                <TextField value={formik.values?.transType}
                size={"small"}
                fullWidth
                onChange={formik.handleChange}
                type="file"/>
              </Box>
            </Box>
           
            <FormControl fullWidth>
              <Typography>Phone</Typography>
              <TextField
                name="transType"
                value={formik.values?.transType}
                size={"small"}
                fullWidth
                onChange={formik.handleChange}
                type="text"
                error={Boolean(formik.errors.transType) && Boolean(formik.touched.transType)}
                helperText={Boolean(formik.errors.transType) && formik.errors.transType}
              />
            </FormControl>
            </>
             }
             
              <Typography sx={{fontWeight:"bold"}}>Are you going with transport?</Typography>
              <Box sx={{display:"flex",gap:"20px",justifyContent:"center",alignItems:"center"}}>
              <Typography>No </Typography>
              <Switch value={checkedGoing} onChange={(e)=>{
                setcheckedGoing(e.target.checked)
               
              }} />
              <Typography>Yes</Typography>
            </Box>
            {
              checkedGoing===true?null:
            <>
            <Box sx={{width:"100%",display:"flex",gap:"30px"}}>
              <Box sx={{width:"49%"}}>
                <Typography>Receiver CNIC Front</Typography>
                <TextField name="transType"
                value={formik.values?.transType}
                size={"small"}
                fullWidth
                onChange={formik.handleChange}
                type="file"/>
              </Box>
              <Box sx={{width:"49%"}}>
              <Typography>Receiver CNIC Back</Typography>

                <TextField value={formik.values?.transType}
                size={"small"}
                fullWidth
                onChange={formik.handleChange}
                type="file"/>
              </Box>
            </Box>
           
            <FormControl fullWidth>
              <Typography>Phone</Typography>
              <TextField
                name="transType"
                value={formik.values?.transType}
                size={"small"}
                fullWidth
                onChange={formik.handleChange}
                type="text"
                error={Boolean(formik.errors.transType) && Boolean(formik.touched.transType)}
                helperText={Boolean(formik.errors.transType) && formik.errors.transType}
              />
            </FormControl>

            </>
             }
                           <FormControl fullWidth>
              <Typography>Who pay Rent</Typography>
              <TextField
                name="transType"
                value={formik.values?.transType}
                size={"small"}
                fullWidth
                onChange={formik.handleChange}
                type="text"
                error={Boolean(formik.errors.transType) && Boolean(formik.touched.transType)}
                helperText={Boolean(formik.errors.transType) && formik.errors.transType}
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

export default AddSeedsBooking