import React from "react";
import { Fab, Typography, Box } from "@mui/material";

const FacilityCard = (props) => {
  const { icon, text } = props;
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "fit-content",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Fab
        color="secondary"
        aria-label={icon}
        sx={{ backgroundColor: "#b3b3b3" }}
      >
        {icon}
      </Fab>
      <Typography variant="body1" my="15px" sx={{ color: "#007185" }}>
        {text}
      </Typography>
    </Box>
  );
};

export default FacilityCard;
