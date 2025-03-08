import React from "react";
import "./DashboardCard.css"; // External CSS
import { Gauge } from "@mui/x-charts/Gauge"; // MUI Gauge Component
import { useSettings } from "../../context/SettingsContext"; // Sidebar settings

export default function DashboardCard({ type, title, value, gaugeValue, gaugeMax, listData }) {
  const { settings } = useSettings(); // Retrieve settings from Sidebar

  return (
    <div
      className="dashboard-card"
      style={{
        padding: `${settings.paddingVertical * 16}px ${settings.paddingHorizontal * 16}px`,
        margin: `${settings.marginVertical * 8}px ${settings.marginHorizontal * 8}px`,
      }}
    >
      {/* Header (shrinks to fit content) */}
      <div className="card-header">
        <h3 style={{ fontSize: `${22 * settings.globalFontScale * settings.headerFontScale}px` }}>
          {title}
        </h3>
      </div>

      {/* Body (expands to take most of the space) */}
      <div className="card-body">
        {type === "basic" && (
          <p
            className="card-value"
            style={{ fontSize: `${48 * settings.globalFontScale * settings.bodyFontScale}px` }}
          >
            {value}
          </p>
        )}

        {type === "gauge" && (
          <div className="gauge-container">
            <p
              className="gauge-value"
              style={{ fontSize: `${36 * settings.globalFontScale * settings.bodyFontScale}px` }}
            >
              {value}
            </p>
            <Gauge
              value={gaugeValue}
              valueMax={gaugeMax}
              startAngle={-110}
              endAngle={110}
              sx={{ width: "100%", height: 150 }}
            />
          </div>
        )}

        {type === "list" && (
          <ul className="card-list">
            {listData.map((item, index) => (
              <li key={index} className="list-item">
                <span
                  className="list-key"
                  style={{ fontSize: `${16 * settings.globalFontScale * settings.bodyFontScale}px` }}
                >
                  {item.key}:
                </span>
                <span
                  className="list-value"
                  style={{ fontSize: `${16 * settings.globalFontScale * settings.bodyFontScale}px` }}
                >
                  {item.value}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
