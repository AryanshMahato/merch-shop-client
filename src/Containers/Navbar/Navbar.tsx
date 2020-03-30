import React from "react";
import styles from "./Navbar.styles";
import { AppBar, Toolbar } from "@material-ui/core";

// Main Class
const Navbar = () => {
  const classes = styles();

  // JSX Return
  return (
    <AppBar position="fixed" className={classes.root} elevation={0.5}>
      <Toolbar className={classes.toolbar}></Toolbar>
    </AppBar>
  );
};

export default Navbar;
