import { Box } from '@mui/material';
import { makeStyles } from "@mui/styles";
import React from 'react';

import { MutatingDots } from 'react-loader-spinner';
const useStyle = makeStyles(() => {
  return {
    childDiv: {
      display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%"
    },
    parent: {
      position: "fixed",
      top: "0",
      bottom: "0",
      left: "0",
      right: "0",
      width: "100vw",
      height: "100vh",
      background: "rgba(0, 0, 0, 0.26)",
      transition: "opacity 500ms",
      padding: " 60px",
      zIndex: 9999,
    },
    // formContainer: {
    //   display: "flex",
    //   flexDirection: "column",
    //   gap: "10px",
    // },
    // accordBox: {
    //   display: "flex",
    //   flexDirection: "column"
    // }
  };
});
function Loader() {
  const {
    parent,
    childDiv
  } = useStyle();
  return (
    <Box className={parent}>
      <Box className={childDiv} >
        <MutatingDots
          sx={{ color: (theme) => theme.palette.primary.main }}
          height="100"
          width="100"
          color="#2b6777"
          secondaryColor='#2b6777'
          radius='10.5'
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />



      </Box>
    </Box>


  );
}

export default Loader;