import React, { ReactNode, useState } from "react";
import styles from "./NavItem.styles";
import NavItemHover from "./NavitemHover/NavItemHover";
import { Link } from "react-router-dom";

interface LoginNavProps {
  children: ReactNode;
  link: string;
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
  rightHoverItem,
  link
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
        to={link}
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
