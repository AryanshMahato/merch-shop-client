import React from "react";
import { Switch, Route } from "react-router-dom";
import ProductsPage from "./Pages/productsPage";
import Product from "./Pages/productPage";
import CartPage from "./Pages/cartPage";
import OrderPage from "./Pages/orderPage";
import PageNotFound from "./Pages/pageNotFound";
import ProfilePage from "./Pages/profilePage";
import SignInPage from "./Pages/signInPage";
import SignUpPage from "./Pages/signUpPage";
import SignOut from "./Pages/signOutPage";
import AdminCategory from "./Pages/adminCategory";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path={"/sign-up"} exact>
          <SignUpPage />
        </Route>
        <Route path={"/signUp"} exact>
          <SignUpPage />
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
          <ProfilePage />
        </Route>
        <Route path={"/order"} exact>
          <OrderPage />
        </Route>
        <Route path={"/cart"} exact>
          <CartPage />
        </Route>
        <Route path={"/product/:id"} exact>
          <Product />
        </Route>
        <Route path={"/admin/category"} exact={true}>
          <AdminCategory />
        </Route>
        <Route path={"/admin/products"} exact={true}>
          <ProductsPage />
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
