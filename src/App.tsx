import React, { useEffect } from "react";
import Routes from "./Routes";
import Navbar from "./Containers/Navbar/Navbar";
import { connect } from "react-redux";
import { getUserData } from "./Store/Action/User";
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen";

const App = ({ getUserData }: AppProps) => {
  useEffect(() => {
    getUserData();
  });

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
}

const mapDispatchToProps = { getUserData };

export default connect(null, mapDispatchToProps)(App);
