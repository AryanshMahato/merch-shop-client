import React, { useEffect } from "react";
import Category from "../../Components/AdminHeader/Category";
import Background from "../../Components/Background/Background";
import styles from "./AdminCategory.styles";
import { getCategories } from "../../Store/Action/Category";
import { connect } from "react-redux";
import CategoryList from "../CategoryList/CategoryList";

const AdminCategory = ({ getCategories }: AdminCategoryProps) => {
  const classes = styles();

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Background className={classes.root}>
      <div className={classes.category}>
        <Category />
      </div>
      <div>
        <CategoryList />
      </div>
    </Background>
  );
};

interface AdminCategoryProps {
  getCategories: () => void;
}

const mapDispatchToProps = { getCategories };

export default connect(null, mapDispatchToProps)(AdminCategory);
