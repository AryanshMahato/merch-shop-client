import React, { useEffect, useState } from "react";
import Category from "../../Components/AdminHeader/Category";
import Background from "../../Components/Background/Background";
import styles from "./AdminCategory.styles";
import { createCategory, getCategories } from "../../Store/Action/Category";
import { connect } from "react-redux";
import CategoryList from "../CategoryList/CategoryList";
import NewCategory from "../../Components/NewCategory/NewCategory";

const AdminCategory = ({
  getCategories,
  createCategory
}: AdminCategoryProps) => {
  const classes = styles();

  useEffect(() => {
    getCategories();
  }, []);

  const [showModal, setShowModal] = useState(false);

  const saveClicked = (value: string) => {
    setShowModal(false);
    createCategory(value);
  };

  return (
    <Background className={classes.root}>
      <div className={classes.category}>
        <Category newButtonClicked={() => setShowModal(true)} />
      </div>
      <div>
        <CategoryList />
      </div>
      <NewCategory
        show={showModal}
        handleClose={() => setShowModal(false)}
        newCategorySaved={value => saveClicked(value)}
      />
    </Background>
  );
};

interface AdminCategoryProps {
  getCategories: () => void;
  createCategory: (category: string) => void;
}

const mapDispatchToProps = { getCategories, createCategory };

export default connect(null, mapDispatchToProps)(AdminCategory);
