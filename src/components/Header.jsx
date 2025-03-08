import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { styled, useTheme } from "@mui/material/styles";

const HEADER_HEIGHT = 100;

// Styled AppBar (Fully transparent when not hovered)
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  height: HEADER_HEIGHT,
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  transition: "background-color 0.3s ease-in-out",
  backgroundColor: "transparent", // Default fully transparent
}));

// Sidebar Toggle Button with Transparency
const TransparentIconButton = styled(IconButton)({
  transition: "opacity 0.3s ease-in-out",
  opacity: 0.2, // Mostly transparent by default
  "&:hover": {
    opacity: 1, // Fully visible on hover
  },
});

export default function Header({ onDrawerToggle }) {
  const theme = useTheme();
  const [hover, setHover] = useState(false);

  return (
    <StyledAppBar
      sx={{
        backgroundColor: hover ? theme.palette.background.paper : "transparent",
        boxShadow: "none",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Toolbar>
        {/* Sidebar Toggle Button */}
        <TransparentIconButton edge="start" color="inherit" onClick={onDrawerToggle}>
          <AppRegistrationIcon sx={{ fontSize: 25 }} />
        </TransparentIconButton>

        {/* Header Title */}
        <Box sx={{ flexGrow: 1, textAlign: "center" }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", fontSize: theme.typography.h4.fontSize }}>
            Dashboard
          </Typography>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
}
