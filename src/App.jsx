import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

// Import dashboard pages
import OrderDashboard from "./pages/OrderDashboard";
import PickingBreakdown from "./pages/PickingBreakdown";
import PutawayBreakdown from "./pages/PutawayBreakdown";
import OrderBreakdown from "./pages/OrderBreakdown";
import DueTodayZeroPicked from "./pages/DueTodayZeroPicked";
import CancelledOrders from "./pages/CancelledOrders";
import FreightDashboard from "./pages/FreightDashboard";
import MonthlySales from "./pages/MonthlySales";
import PODashboard from "./pages/PODashboard";
import SalesDashboard from "./pages/SalesDashboard";
import COAImports from "./pages/COAImports";
import TomorrowOrderDashboard from "./pages/TomorrowOrderDashboard";

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Header onDrawerToggle={() => setDrawerOpen(!drawerOpen)} />
      <Sidebar open={drawerOpen} onClose={() => setDrawerOpen(false)} />

      {/* Main Content Box (Full viewport minus header height) */}
      <Box
        sx={{
          width: "100vw", // Full viewport width
          height: "100vh", // Full viewport height minus header
          overflow: "auto", // Prevents content overflow
          p: 3, // Padding for spacing
        }}
      >
        <Routes>
          <Route path="/" element={<OrderDashboard />} />
          <Route path="/picking-breakdown" element={<PickingBreakdown />} />
          <Route path="/putaway-breakdown" element={<PutawayBreakdown />} />
          <Route path="/order-breakdown" element={<OrderBreakdown />} />
          <Route path="/due-today-zero-picked" element={<DueTodayZeroPicked />} />
          <Route path="/cancelled-orders" element={<CancelledOrders />} />
          <Route path="/freight-dashboard" element={<FreightDashboard />} />
          <Route path="/monthly-sales" element={<MonthlySales />} />
          <Route path="/po-dashboard" element={<PODashboard />} />
          <Route path="/sales-dashboard" element={<SalesDashboard />} />
          <Route path="/coa-imports" element={<COAImports />} />
          <Route path="/tomorrow-order-dashboard" element={<TomorrowOrderDashboard />} />
        </Routes>
      </Box>
    </>
  );
}
