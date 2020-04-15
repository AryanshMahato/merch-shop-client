import React from "react";
import { connect } from "react-redux";
import { IUserData } from "../../types/Store";
import { CancelButton, SaveButton } from "../Global/Button/Buttons";

const AdminCategory = ({ userData }: AdminCategoryProps) => {
  return (
    <>
      {userData.role !== 1 ? (
        <h1>You are unauthorized</h1>
      ) : (
        <>
          <SaveButton />
          <CancelButton />
        </>
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
