import React, { FunctionComponent, useEffect } from "react";
import styles from "./SignOut.styles";
import { BrowseMoreProductsButton } from "../../Global/Button/Buttons";
import { connect } from "react-redux";
import { signOutUser } from "../../Store/Action/User";
import { withRouter } from "react-router-dom";

const SignOut = ({ signOutUser, history }: SignOutProps) => {
  const classes = styles();

  useEffect(() => {
    signOutUser();
  }, []);

  const redirectToRoot = () => {
    history.replace("/");
  };

  return (
    <div className={classes.root}>
      <h1 className={classes.annotation}>Logged Out Successfully</h1>
      <BrowseMoreProductsButton onClick={redirectToRoot} />
    </div>
  );
};

interface SignOutProps {
  signOutUser: () => void;
  history: any;
}

const mapDispatchToProps = { signOutUser };

export default connect(
  null,
  mapDispatchToProps
)(withRouter(SignOut as FunctionComponent));
