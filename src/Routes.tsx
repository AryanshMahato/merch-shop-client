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
        <Route path={"/sign-up"} exact render={SignUp} />
        <Route path={"/sign-in"} exact render={SignIn} />
        <Route path={"/sign-out"} exact render={SignOut} />
        <Route path={"/profile"} exact render={Profile} />
        <Route path={"/order"} exact render={Order} />
        <Route path={"/cart"} exact render={Cart} />
        <Route path={"/product"} exact render={Product} />
        <Route path={"/"} exact={true} render={Products} />
        <Route component={pageNotFound} />
      </Switch>
    </>
  );
};

export default Routes;
