import React from "react";
import { Switch, Route } from "react-router-dom";
import ProductsPage from "./Pages/productsPage";
import Product from "./Pages/productPage";
import Cart from "./Pages/cart";
import Order from "./Pages/order";
import PageNotFound from "./Pages/pageNotFound";
import Profile from "./Pages/profile";
import SignInPage from "./Pages/signInPage";
import SignUp from "./Pages/signUp";
import SignOut from "./Pages/signOutPage";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path={"/sign-up"} exact>
          <SignUp />
        </Route>
        <Route path={"/signUp"} exact>
          <SignUp />
        </Route>
        <Route path={"/sign-in"} exact>
          <SignInPage />
        </Route>
        <Route path={"/signIn"} exact>
          <SignInPage />
        </Route>
        <Route path={"/log-in"} exact>
          <SignInPage />
        </Route>
        <Route path={"/logIn"} exact>
          <SignInPage />
        </Route>
        <Route path={"/sign-out"} exact>
          <SignOut />
        </Route>
        <Route path={"/signOut"} exact>
          <SignOut />
        </Route>
        <Route path={"/logOut"} exact>
          <SignOut />
        </Route>
        <Route path={"/log-out"} exact>
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
