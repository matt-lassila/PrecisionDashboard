import React from "react";
import {Typography } from "@mui/material";
import DashboardContainer from "../components/DashboardContainer";

export default function CancelledOrders() {
  return (
    <DashboardContainer>
      <Typography variant="h4">Cancelled Orders</Typography>
    </DashboardContainer>
  );
}
