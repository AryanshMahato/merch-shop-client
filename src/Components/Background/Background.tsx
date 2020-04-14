import React, { ReactNode } from "react";
import styles from "./Background.styles";

const Background = ({
  children,
  className,
  id,
  maxWidth
}: ProductBackgroundProps) => {
  const classes = styles();

  const setWidth = maxWidth ? maxWidth : "unset";

  return (
    <div className={classes.root} id={id}>
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
  id?: string;
}

export default Background;
