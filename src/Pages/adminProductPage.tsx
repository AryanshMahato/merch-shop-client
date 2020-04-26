import React from "react";
import AdminProduct from "../Containers/AdminProduct/AdminProduct";
import { connect } from "react-redux";
import UnAuthorizedPrompt from "../Containers/UnAuthorizedPrompt/UnAuthorizedPrompt";
import { IUserData } from "../../types/Store";

const AdminProductPage = ({
  isAuthenticated,
  userData,
}: AdminProductPageProps) => {
  if (!isAuthenticated)
    return <UnAuthorizedPrompt />;
  return (
    <>
      {userData.role !== 1 ? (
        <UnAuthorizedPrompt showButton={false} />
      ) : (
        <AdminProduct />
      )}
    </>
  );
};

interface AdminProductPageProps {
  userData: IUserData;
  isAuthenticated: boolean;
}

const mapStateToProps = (state: any) => {
  return {
    userData: state.user.data,
    isAuthenticated: state.user.authenticated,
  };
};

export default connect(mapStateToProps)(
  AdminProductPage
);
