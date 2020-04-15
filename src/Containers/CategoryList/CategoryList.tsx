import React from "react";
import { connect } from "react-redux";
import styles from "./CategoryList.styles";
import { ICategory } from "../../../types/Store";
import CategoryItems from "../../Components/CategoryItems/CategoryItems";

const CategoryList = ({ categories }: CategoryListProps) => {
  const classes = styles();
  return (
    <div className={classes.root}>
      {categories.map(category => (
        <CategoryItems category={category} key={category._id} />
      ))}
    </div>
  );
};

interface CategoryListProps {
  categories: Array<ICategory>;
}

const mapStateToProps = (state: any) => ({
  categories: state.category.categories
});

export default connect(mapStateToProps)(CategoryList);
