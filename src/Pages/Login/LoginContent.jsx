import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Box,
  Button,
  CircularProgress,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
// import logo from '../../Assets/logo.png';
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";
import Cookies from "universal-cookie";
// import { LoginApi } from '../../Api/LoginApi/LoginApi';
import { SnackBarContext } from "../../Context/SnackBarContext/SnackBarContext";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserLogin, getUserData } from "../../Redux/Slice/LoginSlice";

const useStyle = makeStyles((theme) => {
  return {
    Container: {
      display: "flex",
      width: "100%",
      height: "100vh",
      // backgroundColor:"red",
      justifyContent: "center",
      alignItems: "center",
    },
    loginBox: {
      width: "100%",
      maxWidth: "450px",
      display: "flex",
      flexDirection: "column",
      gap: "20px",

      // backgroundColor:"green",
    },
    imgBox: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      alignItems: "center",
      padding: "10px",
    },
    loginBut: {
      width: "100%",
      backgroundColor: theme.palette.primary.main,
      fontSize: "x-large !important",
      // color:theme.palette.primary.contrastText,
      textTransform: "capitalize !important",
      // '&:hover': {
      //     opacity: theme.palette.action.hoverOpacity,
      // },
    },
    paperBox: {
      width: "100%",
      padding: "20px",
      display: "flex",
      gap: "10px",
      flexDirection: "column",
    },
  };
});
function LoginContent() {
  const { Container, loginBox, imgBox, loginBut, paperBox } = useStyle();
  const cookies = new Cookies();
  const { user, message, status, isLogin } = useSelector(getUserData);
  console.log(user);
  const dispatch = useDispatch();
  const { setsnackBarData } = useContext(SnackBarContext);
  const navigate = useNavigate();
  const initialValues = {
    username: "",
    password: "",
  };

  const ValidationSchema = Yup.object().shape({
    username: Yup.string()
      .email("Please Enter Correct username")
      .required("Please Enter username"),
    password: Yup.string().required("Please Enter password"),
  });
  const handleSubmit = async (values, resetForm, setSubmitting) => {
    await dispatch(UserLogin(values));
    await console.log("sdds");
    setSubmitting(false);
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: ValidationSchema,
    onSubmit: (values, { resetForm, setSubmitting }) => {
      handleSubmit(values, resetForm, setSubmitting);
    },
  });

  useEffect(() => {
    if (isLogin) {
      setsnackBarData(message);
      navigate("/dashboard");
    }
  }, [isLogin]);
  return (
    <Box className={Container}>
      <form onSubmit={formik.handleSubmit}>
        <Box className={loginBox}>
          <Box className={imgBox}>
            <Typography
              variant="h3"
              sx={{ color: (theme) => theme.palette.primary.main }}
            >
              Welcome to Zam Zam Goods And Transport
            </Typography>
            {/* <img style={{ width: "200px" }} src={logo} alt="logo" /> */}
            <Typography
              sx={{ color: (theme) => theme.palette.grey[700] }}
              variant="body"
            >
              Let's Travel Together
            </Typography>
          </Box>
          <Paper elevation={3} sx={{ padding: "30px 20px" }}>
            <Box className={paperBox}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  color: (theme) => theme.palette.grey[800],
                }}
              >
                Welcome Back
              </Typography>
              <Box sx={{ textAlign: "left" }}>
                <Typography variant="label">Email</Typography>
                <TextField
                  type={"text"}
                  size="medium"
                  fullWidth
                  name="username"
                  onChange={formik.handleChange}
                  error={
                    Boolean(formik.errors.username) &&
                    Boolean(formik.touched.username)
                  }
                  helperText={
                    Boolean(formik.errors.username) && formik.errors.username
                  }
                />
              </Box>
              <Box sx={{ textAlign: "left" }}>
                <Typography variant="label">Password</Typography>
                <TextField
                  size="medium"
                  fullWidth
                  name="password"
                  onChange={formik.handleChange}
                  error={
                    Boolean(formik.errors.password) &&
                    Boolean(formik.touched.password)
                  }
                  helperText={
                    Boolean(formik.errors.password) && formik.errors.password
                  }
                />

                <Typography
                  variant="small"
                  onClick={() => navigate("/forgotpassword")}
                  sx={{
                    color: (theme) => theme.palette.blue.main,
                    cursor: "pointer",
                  }}
                >
                  Don't have account?
                </Typography>
              </Box>
              {formik.isSubmitting ? (
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <CircularProgress />
                </Box>
              ) : (
                <Button
                  type="submit"
                  sx={{ color: "white !important" }}
                  className={loginBut}
                >
                  Login
                </Button>
              )}
            </Box>
          </Paper>
        </Box>
      </form>
    </Box>
  );
}

export default LoginContent;
