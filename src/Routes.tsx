import React from "react";
import { Switch, Route } from "react-router-dom";
import Products from "./Pages/products";
import Product from "./Pages/product";
import Cart from "./Pages/cart";
import Order from "./Pages/order";
import pageNotFound from "./Pages/pageNotFound";
import Profile from "./Pages/profile";
import SignIn from "./Pages/signIn";
import SignUp from "./Pages/signUp";
import SignOut from "./Pages/signOut";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path={"/sign-up"} exact componenet={SignUp} />
        <Route path={"/sign-in"} exact componenet={SignIn} />
        <Route path={"/sign-out"} exact componenet={SignOut} />
        <Route path={"/profile"} exact componenet={Profile} />
        <Route path={"/order"} exact componenet={Order} />
        <Route path={"/cart"} exact componenet={Cart} />
        <Route path={"/product"} exact componenet={Product} />
        <Route path={"/"} exact={true} componenet={Products} />
        <Route component={pageNotFound} />
      </Switch>
    </>
  );
};

export default Routes;
