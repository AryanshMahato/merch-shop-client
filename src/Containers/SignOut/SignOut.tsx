import React, { useEffect } from "react";
import styles from "./SignOut.styles";
import { BrowseMoreProductsButton } from "../../Global/Button/Buttons";
import { connect } from "react-redux";
import { signOutUser } from "../../Store/Action/User";

const SignOut = ({ signOutUser }: SignOutProps) => {
  const classes = styles();

  useEffect(() => {
    signOutUser();
  }, []);

  return (
    <div className={classes.root}>
      <h1 className={classes.annotation}>Logged Out Successfully</h1>
      <BrowseMoreProductsButton />
    </div>
  );
};

interface SignOutProps {
  signOutUser: () => void;
}

const mapDispatchToProps = { signOutUser };

export default connect(null, mapDispatchToProps)(SignOut);
