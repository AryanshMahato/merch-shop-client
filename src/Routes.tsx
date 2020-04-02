import React from "react";
import { Switch, Route } from "react-router-dom";
import ProductsPage from "./Pages/productsPage";
import Product from "./Pages/productPage";
import Cart from "./Pages/cart";
import Order from "./Pages/order";
import PageNotFound from "./Pages/pageNotFound";
import Profile from "./Pages/profile";
import SignIn from "./Pages/signIn";
import SignUp from "./Pages/signUp";
import SignOut from "./Pages/signOut";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path={"/sign-up"} exact>
          <SignUp />
        </Route>
        <Route path={"/sign-in"} exact>
          <SignIn />
        </Route>
        <Route path={"/sign-out"} exact>
          <SignOut />
        </Route>
        <Route path={"/profile"} exact>
          <Profile />
        </Route>
        <Route path={"/order"} exact>
          <Order />
        </Route>
        <Route path={"/cart"} exact>
          <Cart />
        </Route>
        <Route path={"/product/:id"} exact>
          <Product />
        </Route>
        <Route path={"/"} exact={true}>
          <ProductsPage />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
