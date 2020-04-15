import React from "react";
import Category from "../../Components/AdminHeader/Category";
import Background from "../../Components/Background/Background";
import styles from "./AdminCategory.styles";

const AdminCategory = () => {
  const classes = styles();
  return (
    <Background className={classes.root}>
      <div className={classes.category}>
        <Category />
      </div>
    </Background>
  );
};

export default AdminCategory;
