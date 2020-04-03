import React, { ReactNode } from "react";
import styles from "./Background.styles";

const Background = ({ children, className }: ProductBackgroundProps) => {
  const classes = styles();
  return (
    <div className={classes.root}>
      <div className={classes.background + " " + className}>{children}</div>
    </div>
  );
};

interface ProductBackgroundProps {
  children: ReactNode;
  className?: string;
}

export default Background;
