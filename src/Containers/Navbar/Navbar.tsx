import React from "react";
import styles from "./Navbar.styles";
import { AppBar, Toolbar, Grid } from "@material-ui/core";
import { Logo } from "../../Components/NavItems/NavItems";

// Main Class
const Navbar = () => {
  const classes = styles();

  // JSX Return
  return (
    <AppBar position="fixed" className={classes.root} elevation={0.5}>
      <Toolbar className={classes.toolbar}>
        <Grid container alignItems={"center"} alignContent={"center"}>
          <Logo />
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
