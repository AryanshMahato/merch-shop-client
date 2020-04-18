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

const App = ({
  getUserData,
  getCart,
  isAuthenticated,
  jwtExpired,
  getProducts
}: AppProps) => {
  useEffect(() => {
    getUserData();
    getCart();
    getProducts();
  }, [isAuthenticated]);

  const history = createBrowserHistory();

  const isAuthPage =
    history.location.pathname === "sign-in" ||
    history.location.pathname === "sign-up";

  return (
    <>
      {isAuthPage || jwtExpired ? <Redirect to={"/sign-in"} /> : null}
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
  isAuthenticated: boolean;
  jwtExpired: boolean;
}

const mapStateToProps = (state: any) => {
  return {
    isAuthenticated: state.user?.authenticated,
    jwtExpired: state.user?.jwtExpired
  };
};

const mapDispatchToProps = { getUserData, getCart, getProducts };

export default connect(mapStateToProps, mapDispatchToProps)(App);
