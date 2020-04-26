import React from "react";
import { connect } from "react-redux";
import { IUserData } from "../../types/Store";
import AdminCategory from "../Containers/AdminCategory/AdminCategory";
import UnAuthorizedPrompt from "../Containers/UnAuthorizedPrompt/UnAuthorizedPrompt";

const AdminCategoryPage = ({
  userData,
  isAuthenticated,
}: AdminCategoryProps) => {
  if (!isAuthenticated)
    return <UnAuthorizedPrompt />;

  return (
    <>
      {userData.role !== 1 ? (
        <UnAuthorizedPrompt showButton={false} />
      ) : (
        <AdminCategory />
      )}
    </>
  );
};

interface AdminCategoryProps {
  userData: IUserData;
  isAuthenticated: boolean;
}

const mapStateToProps = (state: any) => ({
  userData: state.user.data,
  isAuthenticated: state.user.authenticated,
});

export default connect(mapStateToProps)(
  AdminCategoryPage
);
