import React from "react";
import { Box } from "@mui/material";

export default function DashboardContainer({ children }) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "center",
        justifyContent: "space-evenly",
        textAlign: "center",
      }}
    >
      {children}
    </Box>
  );
}
