import React, { useState } from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import "./Header.css";

export default function Header({ onDrawerToggle }) {
  const [hover, setHover] = useState(false);
  const theme = useTheme(); // Use MUI theme colors

  return (
    <div
      className={`header ${hover ? "visible" : ""}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        backgroundColor: "#989898",
        height: "100px",
      }}
    >
      {/* Sidebar Toggle Button (Always visible & above the header) */}
      <IconButton className="toggle-button" onClick={onDrawerToggle}>
        <MenuIcon />
      </IconButton>

      {/* Full-width Header Content (Appears on hover) */}
      <div className="header-content">
        <span>Future Settings Area</span>
      </div>
    </div>
  );
}
