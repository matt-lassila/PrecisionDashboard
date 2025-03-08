import React from "react";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import { useSettings } from "../../context/SettingsContext";
import "./DashboardCard.css"; // Shared CSS for styling

export default function GaugeCard({ title, value, gaugeValue, gaugeMax }) {
  const { settings } = useSettings();

  return (
    <div
      className="dashboard-card"
      style={{
        padding: `${settings.paddingVertical * 16}px ${settings.paddingHorizontal * 16}px`,
        margin: `${settings.marginVertical * 8}px ${settings.marginHorizontal * 8}px`,
      }}
    >
      {/* Header */}
      <div className="card-header">
        <span style={{ fontSize: `${22 * settings.globalFontScale * settings.headerFontScale}px` }}>
          {title}
        </span>
      </div>

      {/* Body */}
      <div className="card-body">
        <div className="gauge-container">
          <Gauge
            value={gaugeValue}
            valueMax={gaugeMax}
            startAngle={-110}
            endAngle={110}
            width={settings.gaugeScale * 300}
            height={settings.gaugeScale * 300}
            text={({ value }) => `${value}`}
            sx={{
              [`& .${gaugeClasses.valueText}`]: {
                fontSize: `${100 * settings.globalFontScale * settings.gaugeValueScale}px`,
                fill: "#c1d860",
              },
              [`& .${gaugeClasses.valueArc}`]: {
                fill: "#c1d860",
              },
              [`& .${gaugeClasses.referenceArc}`]: {
                fill: "#424242",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
