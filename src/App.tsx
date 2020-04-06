import React, { useEffect } from "react";
import Routes from "./Routes";
import Navbar from "./Containers/Navbar/Navbar";
import { connect } from "react-redux";
import { getUserData } from "./Store/Action/User";
import SplashScreen from "./Components/SplashScreen/SplashScreen";

const App = ({ getUserData, splashScreen }: AppProps) => {
  useEffect(() => {
    getUserData();
  });

  return (
    <div>
      {splashScreen ? (
        <SplashScreen />
      ) : (
        <>
          <Navbar />
          <Routes />
        </>
      )}
    </div>
  );
};

interface AppProps {
  getUserData: () => void;
  splashScreen: boolean;
}

const mapStateToProps = (state: any) => {
  return {
    splashScreen: state.core.splashScreen
  };
};

const mapDispatchToProps = { getUserData };

export default connect(mapStateToProps, mapDispatchToProps)(App);
