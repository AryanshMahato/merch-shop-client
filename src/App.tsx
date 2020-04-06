import React, { useEffect } from "react";
import Routes from "./Routes";
import Navbar from "./Containers/Navbar/Navbar";
import { connect } from "react-redux";
import { getUserData } from "./Store/Action/User";
import SplashScreen from "./Components/SplashScreen/SplashScreen";
import { setSplashScreen } from "./Store/Action/Core";

const App = ({
  getUserData,
  setSplashScreen,
  splashScreen,
  isLoading
}: AppProps) => {
  useEffect(() => {
    getUserData();
  });

  useEffect(() => {
    if (!isLoading && splashScreen) setSplashScreen(false);
  });

  return (
    <div>
      {splashScreen ? <SplashScreen /> : null}
      <>
        <Navbar />
        <Routes />
      </>
    </div>
  );
};

interface AppProps {
  getUserData: () => void;
  setSplashScreen: (status: boolean) => void;
  splashScreen: boolean;
  isLoading: boolean;
}

const mapStateToProps = (state: any) => {
  return {
    splashScreen: state.core.splashScreen,
    isLoading: state.core.isLoading
  };
};

const mapDispatchToProps = { getUserData, setSplashScreen };

export default connect(mapStateToProps, mapDispatchToProps)(App);
