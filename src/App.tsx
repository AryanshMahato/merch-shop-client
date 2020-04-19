import React, { useEffect } from "react";
import Routes from "./Routes";
import Navbar from "./Containers/Navbar/Navbar";
import { connect } from "react-redux";
import { getUserData } from "./Store/Action/User";
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen";
import { getCart } from "./Store/Action/Cart";
import { createBrowserHistory } from "history";
import { Redirect } from "react-router-dom";
import Footer from "./Containers/Footer/Footer";
import { getProducts } from "./Store/Action/Product";
import { getCategories } from "./Store/Action/Category";

const App = ({
  getUserData,
  getCart,
  isAuthenticated,
  jwtExpired,
  getProducts,
  getCategories,
}: AppProps) => {
  useEffect(() => {
    getUserData();
    getCart();
    getProducts();
    getCategories();
  }, [isAuthenticated]);

  const history = createBrowserHistory();

  const isAuthPage =
    history.location.pathname === "sign-in" ||
    history.location.pathname === "sign-up";

  return (
    <>
        {isAuthPage || jwtExpired ? (
        <Redirect to={"/sign-in"} />
      ) : null}
      <LoadingScreen />
      <Navbar />
      <div className={"routes"}>
        <Routes />
      </div>
      <Footer />
    </>
  );
};

interface AppProps {
  getUserData: () => void;
  getCart: () => void;
  getProducts: () => void;
  getCategories: () => void;
  isAuthenticated: boolean;
  jwtExpired: boolean;
}

const mapStateToProps = (state: any) => {
  return {
    isAuthenticated: state.user?.authenticated,
    jwtExpired: state.user?.jwtExpired,
  };
};

const mapDispatchToProps = {
  getUserData,
  getCart,
  getProducts,
  getCategories,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
