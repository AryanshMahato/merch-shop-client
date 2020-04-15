import React from "react";
import { connect } from "react-redux";
import { IUserData } from "../../types/Store";
import Category from "../Components/AdminHeader/Category";
import Background from "../Components/Background/Background";

const AdminCategory = ({ userData }: AdminCategoryProps) => {
  return (
    <>
      {userData.role !== 1 ? (
        <h1>You are unauthorized</h1>
      ) : (
        <Background>
          <Category />
        </Background>
      )}
    </>
  );
};

interface AdminCategoryProps {
  userData: IUserData;
}

const mapStateToProps = (state: any) => ({
  userData: state.user.data
});

export default connect(mapStateToProps)(AdminCategory);
