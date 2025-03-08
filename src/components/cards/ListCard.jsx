import React from "react";
import { useSettings } from "../../context/SettingsContext";
import "./DashboardCard.css"; // Shared CSS for styling

export default function ListCard({ title, listData }) {
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
      </div>
    </div>
  );
}
