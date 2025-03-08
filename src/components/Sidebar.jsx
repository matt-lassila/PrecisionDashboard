import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Slider,
  Typography,
  Divider,
} from "@mui/material";
import { useSettings } from "../context/SettingsContext";
import { useTheme } from "@mui/material/styles";

export default function Sidebar({ open, onClose }) {
  const { settings, setSettings } = useSettings();
  const theme = useTheme();

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{
        width: 300,
        "& .MuiDrawer-paper": {
          backgroundColor: theme.palette.background.paper, // Match theme
          color: theme.palette.text.primary,
        },
      }}
    >
      <List sx={{ width: 250, padding: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Settings
        </Typography>

        {/* Font Scale Controls */}
        <ListItem>
          <ListItemText primary="Global Font Size" />
          <Slider
            value={settings.globalFontScale}
            min={0.5}
            max={2}
            step={0.1}
            onChange={(e, value) =>
              setSettings({ ...settings, globalFontScale: value })
            }
          />
        </ListItem>

        <ListItem>
          <ListItemText primary="Header Font Size" />
          <Slider
            value={settings.headerFontScale}
            min={0.5}
            max={2}
            step={0.1}
            onChange={(e, value) =>
              setSettings({ ...settings, headerFontScale: value })
            }
          />
        </ListItem>

        <ListItem>
          <ListItemText primary="Body Font Size" />
          <Slider
            value={settings.bodyFontScale}
            min={0.5}
            max={2}
            step={0.1}
            onChange={(e, value) =>
              setSettings({ ...settings, bodyFontScale: value })
            }
          />
        </ListItem>

        <ListItem>
          <ListItemText primary="Body Value Size" />
          <Slider
            value={settings.bodyValueScale}
            min={0.5}
            max={3}
            step={0.1}
            onChange={(e, value) =>
              setSettings({ ...settings, bodyValueScale: value })
            }
          />
        </ListItem>

        <ListItem>
          <ListItemText primary="Gauge Size" />
          <Slider
            value={settings.gaugeScale}
            min={0.5}
            max={5} // Increased max limit
            step={0.1}
            onChange={(e, value) =>
              setSettings({ ...settings, gaugeScale: value })
            }
          />
        </ListItem>

        <ListItem>
          <ListItemText primary="Gauge Value Size" />
          <Slider
            value={settings.gaugeValueScale}
            min={0.5}
            max={5} // Increased max limit
            step={0.1}
            onChange={(e, value) =>
              setSettings({ ...settings, gaugeValueScale: value })
            }
          />
        </ListItem>

        <Divider sx={{ my: 2 }} />

        {/* Padding & Margin Controls */}
        <ListItem>
          <ListItemText primary="Padding Horizontal" />
          <Slider
            value={settings.paddingHorizontal}
            min={0.5}
            max={2}
            step={0.1}
            onChange={(e, value) =>
              setSettings({ ...settings, paddingHorizontal: value })
            }
          />
        </ListItem>

        <ListItem>
          <ListItemText primary="Padding Vertical" />
          <Slider
            value={settings.paddingVertical}
            min={0.5}
            max={2}
            step={0.1}
            onChange={(e, value) =>
              setSettings({ ...settings, paddingVertical: value })
            }
          />
        </ListItem>

        <Divider sx={{ my: 2 }} />

        <ListItem>
          <ListItemText primary="Margin Horizontal" />
          <Slider
            value={settings.marginHorizontal}
            min={0.5}
            max={2}
            step={0.1}
            onChange={(e, value) =>
              setSettings({ ...settings, marginHorizontal: value })
            }
          />
        </ListItem>

        <ListItem>
          <ListItemText primary="Margin Vertical" />
          <Slider
            value={settings.marginVertical}
            min={0.5}
            max={2}
            step={0.1}
            onChange={(e, value) =>
              setSettings({ ...settings, marginVertical: value })
            }
          />
        </ListItem>
      </List>
    </Drawer>
  );
}
