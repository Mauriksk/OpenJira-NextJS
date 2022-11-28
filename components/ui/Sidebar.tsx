import { InboxOutlined, MailOutlineOutlined } from "@mui/icons-material";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { UIContext } from "../../context/ui/UIContext";

const menuItems: string[] = ["Inbox", "Starred", "Send Email", "Drafts"];

export const Sidebar = () => {
  const { closeSideMenu, sidemenuOpen } = useContext(UIContext);

  return (
    <Drawer anchor="left" open={sidemenuOpen} onClose={closeSideMenu}>
      <Box sx={{ padding: "5px 10px" }}>
        <Typography variant="h4">Menu</Typography>
      </Box>
      <Box sx={{ width: 250 }}>
        <List>
          {menuItems.map((text, i) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {i % 2 ? <InboxOutlined /> : <MailOutlineOutlined />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box sx={{ padding: "5px 10px" }}>
        <Typography variant="h4">Menu</Typography>
      </Box>
      <Box sx={{ width: 250 }}>
        <List>
          {menuItems.map((text, i) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {i % 2 ? <InboxOutlined /> : <MailOutlineOutlined />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
