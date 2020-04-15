import React from "react";
import { connect } from "react-redux";
import { IUserData } from "../../types/Store";
import AdminCategory from "../Containers/AdminCategory/AdminCategory";

const AdminCategoryPage = ({ userData }: AdminCategoryProps) => {
  return (
    <>
      {userData.role !== 1 ? <h1>You are unauthorized</h1> : <AdminCategory />}
    </>
  );
};

interface AdminCategoryProps {
  userData: IUserData;
}

const mapStateToProps = (state: any) => ({
  userData: state.user.data
});

export default connect(mapStateToProps)(AdminCategoryPage);
