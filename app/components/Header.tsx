import React from "react";
import styles from '../../styles/Header.module.css'
import { adminNavigation } from "@/Utils/constData";
import Link from "next/link";
import { AppBar, Box, Button, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";

function Header() {
  return (
      <div className={styles.headerContainer}>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          
          {
      adminNavigation.map((link: any, index: any) => {
        return(
          
          <Link key={index} href={link.path}>{link.name}</Link>
       
        
        )
        })
    }
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>

    </div>
  );
}

export default Header;
