import React from "react";
import UserLogo from "../../Components/UserLogo/UserLogo";
import { connect } from "react-redux";
import { IUserData } from "../../../types/Store";

const Profile = ({ userData, isAuthenticated }: ProfileProps) => {
  return (
    <div>
      {isAuthenticated ? null : <div>You are not Authenticated</div>}
      <UserLogo name={userData.name} />
    </div>
  );
};

interface ProfileProps {
  userData: IUserData;
  isAuthenticated: boolean;
}

const mapStateToProps = (state: any) => {
  return {
    userData: state.user.data,
    isAuthenticated: state.user.authenticated
  };
};

export default connect(mapStateToProps)(Profile);
