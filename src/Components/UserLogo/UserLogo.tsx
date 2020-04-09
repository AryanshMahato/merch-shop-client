import React from "react";
import UserProfileImage from "../../Assets/User_Logo.png";
import styles from "./UserLogo.styles";

const UserLogo = ({ name, email }: UserLogoProps) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <img src={UserProfileImage} alt="User" className={classes.image} />
      <h1 className={classes.name}>{name}</h1>
      <h1 className={classes.email}>{email}</h1>
    </div>
  );
};

interface UserLogoProps {
  name: string;
  email: string;
}

export default UserLogo;
