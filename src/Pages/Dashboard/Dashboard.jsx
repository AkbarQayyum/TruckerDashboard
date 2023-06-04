import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Card from "../../Components/Dashboard/Card";

const useStyle = makeStyles((theme) => {
  return {
    container: {
      border: "1px solid red",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      gap: "20px",
    },
    topSectionContainer: {
      width: "100%",
      padding: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "start",
      gap: "20px",
      [theme.breakpoints.down("md")]: {
        flexWrap: "wrap",
      },
    },
    cardContainer: {
      width: "100%",
      display: "flex",
      gap: "20px",
      justifyContent: "space-evenly",
      flexWrap: "wrap",
      padding: "20px",
      borderRadius: " 24px",
      background: "#e0e0e0",
      boxShadow: "41px 41px 82px #a1a1a1, -41px -41px 82px #ffffff",
    },
    graphContainer: {
      width: "100%",
      padding: "20px",
      borderRadius: " 24px",
      background: "#e0e0e0",
      boxShadow: "41px 41px 82px #a1a1a1, -41px -41px 82px #ffffff",
    },
  };
});

function Dashboard() {
  const { container, topSectionContainer, cardContainer, graphContainer } =
    useStyle();
  return (
    <Box className={container}>
      <Box className={topSectionContainer}>
        <Box className={cardContainer}>
          <Card text={"Total Builty"} value={25} />
          <Card text={"Total Register Users"} value={25} />
          <Card text={"Total Good Transporters"} value={25} />
          <Card text={"Total Vehicles"} value={2500} />
        </Box>
        <Box className={graphContainer}></Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
