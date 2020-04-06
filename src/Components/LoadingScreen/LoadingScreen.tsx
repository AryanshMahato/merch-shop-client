import React from "react";
import { Backdrop, CircularProgress } from "@material-ui/core";
import { connect } from "react-redux";

const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
  return (
    <Backdrop
      open={isLoading}
      style={{
        width: "100%",
        height: "100vh",
        zIndex: 100,
        overflowY: "hidden",
        color: "white",
        position: "fixed"
      }}
    >
      <CircularProgress color={"inherit"} />
    </Backdrop>
  );
};

interface LoadingScreenProps {
  isLoading: boolean;
}

const mapStateToProps = (state: any) => {
  return {
    isLoading: state.core.isLoading
  };
};

export default connect(mapStateToProps)(LoadingScreen);
