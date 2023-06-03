import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SideBar from "../../Components/SideBar/SideBar";
import TopBar from "../../Components/TopBar/UserDashBoard/TopBar";
import TitleBar from "../../Components/TopBar/UserDashBoard/TitleBar";
// import { useEffect } from "react";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { Divider } from "@mui/material";
// import TopBar from "../../Components/TopBar/UserDashBoard/TopBar";
// import { Divider } from "@mui/material";
// import TitleBar from "../../Components/TopBar/UserDashBoard/TitleBar";


const UseContainer = ({ activePage, headerTitle, buttons, disableTitleBar, transparentBackground }) => {
    const cookies = new Cookies();
    const [open, setOpen] = useState(false);
    const [OnHover, setOnHover] = useState(false);
    const [selectedTab, setselectedTab] = useState("");
    const [selectedSecondTab, setselectedSecondTab] = useState("");
    const [openDialog, setopenDialog] = useState(false);
    const navigate=useNavigate();
    useEffect(() => {
        let access_token = cookies.get("access_token");
        let user = cookies.get("user");
        if (!access_token || !user) {
          navigate("/");
        }
      }, [navigate]);

    return (
        <Box
            sx={{
                display: "flex",
                backgroundColor: (theme) => theme.palette.background.main,
            }}
        >
            <CssBaseline />
            {/* Side Bar Component  */}
            <SideBar
                open={open}
                setOpen={setOpen}
                setOnHover={setOnHover}
                OnHover={OnHover}
                selectedTab={selectedTab}
                setselectedTab={setselectedTab}
                selectedSecondTab={selectedSecondTab}
                setselectedSecondTab={setselectedSecondTab}
                isAdmin={false}
            />
            {/* Top Bar Component  */}

            <Box sx={{
                flex: 1,
                minWidth: "calc(100% - 390px)",
                width:"100%",
                // paddingTop:"10px"
            }}>
                <TopBar
                    open={open}
                    setOpen={setOpen}
                    setOnHover={setOnHover}
                    openDialog={openDialog}
                    setopenDialog={setopenDialog}
                    isSettings={false}
                    headerTitle={headerTitle}
                />
                <Divider />
                {
                    !disableTitleBar ? <Box
                        position="sticky"
                        sx={{
                            backgroundColor: (theme) => theme.palette.background.main,
                            // padding: "10px",

                        }}
                    >
                        <TitleBar headerTitle={headerTitle} buttons={buttons} />
                    </Box> : null
                }


                <Box
                    sx={{
                        backgroundColor: (theme) => theme.palette.background.main,
                        height: disableTitleBar ? "calc(100vh - 20px)" : "calc(100vh - 70px)",
                      

                    }}
                >
                    <Box
                        component="main"
                        sx={{
                            flexGrow: 1,
                            height: "100%",
                            backgroundColor: (theme) => transparentBackground ? theme.palette.background.main : theme.palette.background.main,
                            borderRadius: "5px",
                            padding: '0px 10px 0px 10px', 
                        }}
                        onMouseOver={() => {
                            if (OnHover === true) {
                                setOpen(false);
                                setOnHover(false);
                            }
                        }}
                    >
                        <Box sx={{}}>{activePage}</Box>
                    </Box>
                </Box>
            </Box>
        </Box >
    );
};
export default UseContainer;

UseContainer.propTypes = {
    activePage: PropTypes.any.isRequired,
    headerTitle: PropTypes.any,
    buttons: PropTypes.any,
    disableTitleBar: PropTypes.any,
    transparentBackground: PropTypes.bool,

};
