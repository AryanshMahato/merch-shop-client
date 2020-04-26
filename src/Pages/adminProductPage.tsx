import React from "react";
import AdminProduct from "../Containers/AdminProduct/AdminProduct";
import { connect } from "react-redux";
import UnAuthorizedPrompt from "../Containers/UnAuthorizedPrompt/UnAuthorizedPrompt";

const AdminProductPage = ({
  isAuthenticated,
}: AdminProductPageProps) => {
  if (!isAuthenticated)
    return <UnAuthorizedPrompt />;
  return (
    <>
      <AdminProduct />
    </>
  );
};

interface AdminProductPageProps {
  isAuthenticated: boolean;
}

const mapStateToProps = (state: any) => {
  return {
    isAuthenticated: state.user.authenticated,
  };
};

export default connect(mapStateToProps)(
  AdminProductPage
);
