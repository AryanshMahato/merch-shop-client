import React, { useEffect } from "react";
import Routes from "./Routes";
import Navbar from "./Containers/Navbar/Navbar";
import { connect } from "react-redux";
import { getUserData } from "./Store/Action/User";
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen";
import { getCart } from "./Store/Action/Cart";

const App = ({ getUserData, getCart, isAuthenticated }: AppProps) => {
  useEffect(() => {
    getUserData();
    getCart();
  }, [isAuthenticated]);

  return (
    <>
      <LoadingScreen />
      <Navbar />
      <Routes />
    </>
  );
};

interface AppProps {
  getUserData: () => void;
  getCart: () => void;
  isAuthenticated: boolean;
}

const mapStateToProps = (state: any) => {
  return {
    isAuthenticated: state.user?.authenticated
  };
};

const mapDispatchToProps = { getUserData, getCart };

export default connect(mapStateToProps, mapDispatchToProps)(App);
