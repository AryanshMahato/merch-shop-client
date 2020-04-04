import React, { ReactNode } from "react";
import styles from "./Background.styles";

const Background = ({
  children,
  className,
  maxWidth
}: ProductBackgroundProps) => {
  const classes = styles();

  const setWidth = maxWidth ? maxWidth : "unset";

  return (
    <div className={classes.root}>
      <div
        className={classes.background + " " + className}
        style={{ maxWidth: setWidth }}
      >
        {children}
      </div>
    </div>
  );
};

interface ProductBackgroundProps {
  children: ReactNode;
  className?: string;
  maxWidth?: string;
}

export default Background;
