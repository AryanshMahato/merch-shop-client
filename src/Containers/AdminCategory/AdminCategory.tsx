import React, { useEffect, useState } from "react";
import Category from "../../Components/AdminHeader/Category";
import Background from "../../Components/Background/Background";
import styles from "./AdminCategory.styles";
import { getCategories } from "../../Store/Action/Category";
import { connect } from "react-redux";
import CategoryList from "../CategoryList/CategoryList";
import NewCategory from "../../Components/NewCategory/NewCategory";

const AdminCategory = ({ getCategories }: AdminCategoryProps) => {
  const classes = styles();

  useEffect(() => {
    getCategories();
  }, []);

  const [showModal, setShowModal] = useState(false);

  return (
    <Background className={classes.root}>
      <div className={classes.category}>
        <Category newButtonClicked={() => setShowModal(true)} />
      </div>
      <div>
        <CategoryList />
      </div>
      <NewCategory show={showModal} handleClose={() => setShowModal(false)} />
    </Background>
  );
};

interface AdminCategoryProps {
  getCategories: () => void;
}

const mapDispatchToProps = { getCategories };

export default connect(null, mapDispatchToProps)(AdminCategory);
