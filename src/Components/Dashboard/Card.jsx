import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
const useStyle = makeStyles((theme) => {
  return {
    container: {
      width: "100%",
      maxWidth: "300px",
      minHeight: "250px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
      gap: "20px",
      borderRadius: " 24px",
      background: "#e0e0e0",
      boxShadow: "41px 41px 82px #a1a1a1, -41px -41px 82px #ffffff",
    },
  };
});
const Card = ({ text, value }) => {
  const { container } = useStyle();
  return (
    <Box className={container}>
      <Typography variant="h6" xs={{ fontWeight: "bold" }} color={"primary"}>
        {text}
      </Typography>
      <Typography variant="h3" sx={{ fontWeight: "bold" }}>{value?.toLocaleString()}</Typography>
    </Box>
  );
};

export default Card;
