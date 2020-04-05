import React from "react";
import styles from "./Navbar.styles";
import { AppBar, Toolbar } from "@material-ui/core";
import { Logo } from "../../Components/NavItems/NavItems";
import NavItem from "../../Components/NavItems/NavItem/NavItem";
import Cart from "../../Components/NavItems/Cart/Cart";
import { connect } from "react-redux";

// Main Function
const Navbar = ({ isAuthenticated, cart }: NavbarProps) => {
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
            {isAuthenticated ? (
              <>
                <NavItem
                  link={"profile"}
                  leftHoverItem={{ name: "Profile", link: "profile" }}
                  rightHoverItem={{ name: "Log Out", link: "log-out" }}
                >
                  Profile
                </NavItem>
                <Cart cartItems={cart.products.length} />
              </>
            ) : (
              <>
                <NavItem
                  link={"log-in"}
                  leftHoverItem={{ name: "Login", link: "log-in" }}
                  rightHoverItem={{ name: "Sign Up", link: "sign-up" }}
                >
                  Login
                </NavItem>
                <Cart cartItems={0} />
              </>
            )}
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

interface NavbarProps {
  isAuthenticated: boolean;
  cart: any;
}

const mapStateToProps = (state: any) => {
  return {
    isAuthenticated: state.user.authenticated,
    cart: state.user.data.cart
  };
};

export default connect(mapStateToProps)(Navbar);
