import React, { ReactNode, useState } from "react";
import styles from "./NavItem.styles";
import NavItemHover from "./NavitemHover/NavItemHover";
import { Link } from "react-router-dom";

interface LoginNavProps {
  children: ReactNode;
  leftHoverItem: {
    name: string;
    link: string;
  };
  rightHoverItem: {
    name: string;
    link: string;
  };
}

//? Main Function
const NavItem = ({
  children,
  leftHoverItem,
  rightHoverItem
}: LoginNavProps) => {
  const classes = styles();

  const [hideHover, setHideHover] = useState(true);

  const mouseEnter = () => {
    setHideHover(false);
  };

  const mouseLeave = () => {
    setHideHover(true);
  };

  //? JSX Return
  return (
    <div className={classes.root}>
      <Link
        to={"/log-in"}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        className={classes.login}
      >
        {children}
      </Link>
      <div className={classes.loginHover}>
        <NavItemHover
          Hide={hideHover}
          leftHoverItem={leftHoverItem}
          rightHoverItem={rightHoverItem}
        />
      </div>
    </div>
  );
};

export default NavItem;
