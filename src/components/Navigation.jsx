import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { MenuOutlined, YouTube } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "../App.css";

const Navigation = () => {
  return (
    <AppBar position="sticky">
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuOutlined />
        </IconButton>
        <Link to="/" className="nav-logo">
          <YouTube />
          <Typography variant="h6" color="inherit" component="div">
            Gallery
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
