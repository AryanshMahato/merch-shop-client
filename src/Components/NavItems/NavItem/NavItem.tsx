import React, {
  ReactNode,
  useState,
} from "react";
import styles from "./NavItem.styles";
import NavItemHover from "./NavitemHover/NavItemHover";
import { Link } from "react-router-dom";
import {
  Menu,
  MenuItem,
} from "@material-ui/core";

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
  link,
}: LoginNavProps) => {
  const classes = styles();

  const [hideHover, setHideHover] = useState(
    true
  );

  const [
    anchorEl,
    setAnchorEl,
  ] = React.useState<null | HTMLElement>(null);

  const handleClick = (
    event: React.MouseEvent<HTMLHeadingElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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

      <div className={classes.mobileNav}>
        <h1
          className={classes.mobileAnnotation}
          onClick={handleClick}
        >
          {children}
        </h1>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <Link
              to={leftHoverItem.link}
              className={classes.mobileLogin}
            >
              {leftHoverItem.name}
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link
              to={rightHoverItem.link}
              className={classes.mobileSignUp}
            >
              {rightHoverItem.name}
            </Link>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default NavItem;
