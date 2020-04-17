import React from "react";
import styles from "./Footer.styles";
import { Link } from "react-router-dom";

const Footer = () => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <h1 className={classes.annotation}>
        Made with Magic and Love <span className={classes.loveEmoji}>🧡</span>
      </h1>
      <div className={classes.links}>
        <Link to={"/admin/category"} className={classes.link}>
          Create Category
        </Link>
        <Link to={"/admin/product"} className={classes.link}>
          Create Product
        </Link>
      </div>
    </div>
  );
};

export default Footer;
