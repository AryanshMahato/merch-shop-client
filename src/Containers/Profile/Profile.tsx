import React, { FunctionComponent, useEffect } from "react";
import UserLogo from "../../Components/UserLogo/UserLogo";
import { connect } from "react-redux";
import { IUserData } from "../../../types/Store";
import ProfileButtons from "../../Components/ProfileButtons/ProfileButtons";
import OrderHistory from "../../Components/OrderHistory/OrderHistory";
import { getOrders } from "../../Store/Action/Order";
import styles from "./Profile.styles";

const Profile = ({ userData, isAuthenticated, getOrders }: ProfileProps) => {
  const classes = styles();

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className={classes.root}>
      {isAuthenticated ? null : <div>You are not Authenticated</div>}
      <div className={classes.leftPane}>
        <UserLogo name={userData.name} email={userData.email} />
        <ProfileButtons />
      </div>
      <OrderHistory />
    </div>
  );
};

interface ProfileProps {
  userData: IUserData;
  isAuthenticated: boolean;
  getOrders: () => void;
}

const mapStateToProps = (state: any) => {
  return {
    userData: state.user.data,
    isAuthenticated: state.user.authenticated
  };
};

const mapDispatchToProps = { getOrders };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile as FunctionComponent);
