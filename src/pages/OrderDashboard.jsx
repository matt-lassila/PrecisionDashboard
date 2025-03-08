import React from "react";
import BasicCard from "../components/cards/BasicCard";
import GaugeCard from "../components/cards/GaugeCard";
import RowContainer from "../components/cards/RowContainer";
import DashboardContainer from "../components/DashboardContainer";

export default function OrderDashboard() {
  return (
    <DashboardContainer>
      {/* First Row: 5 Basic Cards (20% height) */}
      <RowContainer height={20}>
        <BasicCard title="Orders" value="212" />
        <BasicCard title="Freight" value="1" />
        <BasicCard title="Not Picked" value="45" />
        <BasicCard title="Complete" value="80" />
        <BasicCard title="On Hold" value="2" />
      </RowContainer>

      {/* Second Row: 2 Gauge Cards (Fills remaining space) */}
      <RowContainer>
        <GaugeCard title="Builds" value="85" gaugeValue={85} gaugeMax={100} />
        <GaugeCard title="Loose Items" value="" gaugeValue={4} gaugeMax={100} />
      </RowContainer>
    </DashboardContainer>
  );
}
