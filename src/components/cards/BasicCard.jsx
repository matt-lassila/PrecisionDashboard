import React from "react";
import { useSettings } from "../../context/SettingsContext";
import "./DashboardCard.css"; // Shared CSS for styling

export default function BasicCard({ title, value }) {
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
        <div className="card-value-container">
          <p
            className="card-value"
            style={{
            color: "#c1d860",
              fontSize: `${48 * settings.globalFontScale * settings.bodyFontScale * settings.bodyValueScale}px`,
            }}
          >
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}
