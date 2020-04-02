import React from "react";
import styles from "./Navbar.styles";
import { AppBar, Toolbar } from "@material-ui/core";
import { Logo } from "../../Components/NavItems/NavItems";
import NavItem from "../../Components/NavItems/NavItem/NavItem";
import Cart from "../../Components/NavItems/Cart/Cart";

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
            <NavItem
              link={"log-in"}
              leftHoverItem={{ name: "Login", link: "log-in" }}
              rightHoverItem={{ name: "Sign Up", link: "sign-up" }}
            >
              Login
            </NavItem>
            <Cart cartItems={1} />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
