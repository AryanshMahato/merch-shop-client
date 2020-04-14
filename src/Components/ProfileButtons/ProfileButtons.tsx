import React from "react";
import styles from "./ProfileButtons.styles";
import { Link } from "react-router-dom";
import { Divider } from "@material-ui/core";

const ProfileButtons = () => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <a href={"#orders"} className={classes.orders}>
        Orders
      </a>
      <Divider className={classes.divider} />
      <Link to={"/log-out"} className={classes.logOut}>
        Log Out
      </Link>
    </div>
  );
};

export default ProfileButtons;
