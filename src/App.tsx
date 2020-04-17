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

const App = ({
  getUserData,
  getCart,
  isAuthenticated,
  jwtExpired
}: AppProps) => {
  useEffect(() => {
    getUserData();
    getCart();
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
  isAuthenticated: boolean;
  jwtExpired: boolean;
}

const mapStateToProps = (state: any) => {
  return {
    isAuthenticated: state.user?.authenticated,
    jwtExpired: state.user?.jwtExpired
  };
};

const mapDispatchToProps = { getUserData, getCart };

export default connect(mapStateToProps, mapDispatchToProps)(App);
