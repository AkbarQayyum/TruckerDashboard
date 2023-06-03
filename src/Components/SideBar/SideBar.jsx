import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import LogoutIcon from "@mui/icons-material/Logout";
// import logo_round from "../../Assets/logo_round.png";
import { AdminSideBarData } from "../../Resources/SideBarData";
import SideBarMenu from "./SubSideBar";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import theme from "../../theme";
import Cookies from "universal-cookie";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/Slice/LoginSlice";
// import { Typography } from "@mui/material";

const useStyles = makeStyles(() => {
  return {
    sidebar_logo: {
      marginX: "10% !important",
      height: "32px",
    },
    sideBar: {
      // maxHeight:"fit-content !important",
      // minHeight:"100vh",
      height: " calc(100vh - 64px)! important",
      overflowY: "auto",
      overflowX: "hidden",
      scrollbarWidth: "none",
      "&::-webkitScrollbar": {
        display: "none",
      },
      textAlign: "start",
      padding: "10px !important",
      display: "flex",
      flexDirection: "column",
      paddingRight: "0px !important",
      gap: "15px",
    },
    SideBar_Selected: {
      backgroundColor: theme.palette.background.main,
      color: `${theme.palette.secondary.main}`,
      borderEndStartRadius: "10px",
      borderStartStartRadius: "10px",
    },
  };
});
const drawerWidth = 210;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme, open) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(6)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(6)} + 1px)`,
  },
  [theme.breakpoints.down("sm")]: {
    position: "absolute",
    visibility: open ? "visible" : "hidden",
  },
});
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  padding: "10px !important",
  backgroundColor: theme.palette.background.main,
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  [theme.breakpoints.down("sm")]: {
    position: "absolute",
  },
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme, open),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  padding: "15px !important",
  backgroundColor: theme.palette.white.main,

  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const SideBar = ({
  open,
  setOpen,
  setOnHover,
  selectedSecondTab,
  setselectedSecondTab,
  selectedTab,
  setselectedTab,
  OnHover,
}) => {
  const { sideBar, SideBar_Selected } = useStyles({ open });
  const [logOut, setlogOut] = useState(false);
  const navigate = useNavigate();
  const history = useLocation();
  const dispatch = useDispatch();
  // const location = useLocation();
  // const [user, setuser] = useState("");
  const cookies = new Cookies();
  const LogOut = async () => {
    await cookies.remove("access_token");
    await cookies.remove("user");
    dispatch(logout());
    navigate("/");
  };
  return (
    <>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader
          sx={{
            background: (theme) => theme.palette.primary.main,

            // backgroundImage: "linearGradient(180deg, #FFFFFF, RGBA(233,241,255,1))",
          }}
        >
          {/* <img src={logo_round} className={sidebar_logo} /> */}
        </DrawerHeader>
        <List
          className={sideBar}
          sx={{
            background: (theme) => theme.palette.primary.main,

            // backgroundImage: "linearGradient(180deg, #FFFFFF, RGBA(233,241,255,1))",
          }}
          onMouseOver={() => {
            if (open === false) {
              setOpen(true);
              setOnHover(true);
            }
          }}
        >
          {AdminSideBarData.map((item, index) => {
            return (
              <SideBarMenu
                open={open}
                item={item}
                key={index}
                setselectedTab={setselectedTab}
                selectedTab={selectedTab}
                selectedSecondTab={selectedSecondTab}
                setselectedSecondTab={setselectedSecondTab}
              />
            );
          })}
          <Box
            className={logOut ? SideBar_Selected : null}
            sx={{
              display: "flex",
              gap: "10px",
              paddingLeft: "5px",
              cursor: "pointer",
            }}
            onClick={() => {
              setlogOut(true);
            }}
          >
            <LogoutIcon
              sx={{
                color: logOut
                  ? "black"
                  : (theme) => theme.palette.background.main,
                opacity: logOut ? "100%" : "80%",
              }}
            />
            {OnHover ? (
              <Typography
                sx={{
                  color: logOut ? "black" : "#fff ",
                  opacity: logOut ? "100%" : "80%",
                }}
              >
                Logout
              </Typography>
            ) : null}
          </Box>
        </List>
      </Drawer>
      <Dialog
        open={logOut}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title"></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to Log Out
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Button
              sx={{
                background: "#cc6666",
                color: "white !important",
                fontSize: "13px",
                textTransform: "none",
              }}
              onClick={() => {
                setlogOut();
              }}
            >
              No
            </Button>

            <Button
              sx={{
                backgroundColor: (theme) => theme.palette.primary.main,
                color: "white !important",
                fontSize: "13px",
                textTransform: "none",
              }}
              onClick={() => {
                LogOut();
              }}
              autoFocus
            >
              Yes
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SideBar;

SideBar.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  setOnHover: PropTypes.func,
  selectedSecondTab: PropTypes.any,
  setselectedSecondTab: PropTypes.func.isRequired,
  selectedTab: PropTypes.any,
  setselectedTab: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  OnHover: PropTypes.any,
};
