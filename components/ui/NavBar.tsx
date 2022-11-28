import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React, { useContext } from "react";
import { MenuOutlined } from "@mui/icons-material";
import { UIContext } from "../../context/ui/UIContext";

export const NavBar = () => {
  const {openSideMenu} = useContext(UIContext);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton onClick={openSideMenu} size="large" edge="start">
          <MenuOutlined />
        </IconButton>

        <Typography variant="h6">OpenJira</Typography>
      </Toolbar>
    </AppBar>
  );
};
