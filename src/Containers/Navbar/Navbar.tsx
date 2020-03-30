import React from "react";
import styles from "./Navbar.styles";
import { FaCartPlus } from "react-icons/fa";
import { AppBar, Toolbar } from "@material-ui/core";
import { Logo } from "../../Components/NavItems/NavItems";
import LoginNav from "../../Components/NavItems/Login/LoginNav";

// Main Function
const Navbar = () => {
  const classes = styles();

  // JSX Return
  return (
    <AppBar position="static" className={classes.root} elevation={2}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.navBar}>
          <div>
            <Logo />
          </div>
          <div className={classes.navItems}>
            <LoginNav />
            <FaCartPlus className={classes.cart} />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
