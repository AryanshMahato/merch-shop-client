import React from "react";
import UserProfileImage from "../../Assets/User_Logo.png";
import styles from "./UserLogo.styles";

const UserLogo = ({ name }: UserLogoProps) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <img src={UserProfileImage} alt="User" className={classes.image} />
      <h1 className={classes.name}>{name}</h1>
    </div>
  );
};

interface UserLogoProps {
  name: string;
}

export default UserLogo;
