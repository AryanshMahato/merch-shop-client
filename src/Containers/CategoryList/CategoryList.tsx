import React from "react";
import { connect } from "react-redux";
import styles from "./CategoryList.styles";

const CategoryList = () => {
  const classes = styles();
  return <div></div>;
};

const mapStateToProps = (state: any) => ({
  category: state.category
});

export default connect(mapStateToProps)(CategoryList);
