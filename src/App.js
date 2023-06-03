import "./App.css";
import React, { useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import Cookies from "universal-cookie";
import { Route, Routes, useNavigate } from "react-router-dom";
import { AdminRoutes } from "./AllRoutes/AllRoutes";
import SnackBarContextProvider from "./Context/SnackBarContext/SnackBarContext";
import SnackBar from "./Components/SnackBar/SnackBar";
function App() {
  const navigate = useNavigate();
  const cookies = new Cookies();


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          fontFamily: "Poppins !important",
          backgroundColor: (theme) => theme.palette.background.main,
        }}
        className="App"
      >
        <SnackBarContextProvider>
          <Routes>
            {AdminRoutes?.map((route, idx) => {
              return (
                <Route
                  key={idx}
                  exact
                  path={route.path}
                  element={route.component}
                />
              );
            })}
          </Routes>
          <SnackBar />
        </SnackBarContextProvider>
      </Box>
    </ThemeProvider>
  );
}

export default App;
