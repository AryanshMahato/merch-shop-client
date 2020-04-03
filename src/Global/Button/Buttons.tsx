import React from "react";
import { Button } from "@material-ui/core";
import styles from "./Buttons.styles";

interface ButtonProps {
  onClick?: () => void;
}

const AddToCartButton = ({ onClick }: ButtonProps) => {
  const classes = styles();
  return (
    <>
      <Button
        className={classes.button}
        variant={"contained"}
        onClick={onClick}
      >
        Add To Cart
      </Button>
    </>
  );
};

const BuyNowButton = ({ onClick }: ButtonProps) => {
  const classes = styles();
  return (
    <>
      <Button
        className={classes.button}
        variant={"contained"}
        color={"secondary"}
        onClick={onClick}
      >
        Buy Now
      </Button>
    </>
  );
};

const CheckPinButton = ({ onClick }: ButtonProps) => {
  const classes = styles();
  return (
    <>
      <Button
        className={classes.button + " " + classes.checkButton}
        variant={"contained"}
        color={"secondary"}
        onClick={onClick}
      >
        Check
      </Button>
    </>
  );
};

const ProceedForPaymentButton = ({ onClick }: ButtonProps) => {
  const classes = styles();
  return (
    <>
      <Button
        className={classes.button}
        variant={"contained"}
        color={"secondary"}
        onClick={onClick}
      >
        Proceed for Payment
      </Button>
    </>
  );
};

const SaveButton = ({ onClick }: ButtonProps) => {
  const classes = styles();
  return (
    <>
      <Button
        className={classes.button}
        variant={"contained"}
        color={"primary"}
        onClick={onClick}
      >
        Save
      </Button>
    </>
  );
};

const LoginButton = ({ onClick }: ButtonProps) => {
  const classes = styles();
  return (
    <>
      <Button
        className={classes.button + " " + classes.authButton}
        variant={"contained"}
        color={"primary"}
        onClick={onClick}
        type={"submit"}
      >
        Log in
      </Button>
    </>
  );
};

const SignUpButton = ({ onClick }: ButtonProps) => {
  const classes = styles();
  return (
    <>
      <Button
        className={classes.button + " " + classes.authButton}
        variant={"contained"}
        color={"primary"}
        onClick={onClick}
      >
        Sign Up
      </Button>
    </>
  );
};

const BrowseMoreProductsButton = ({ onClick }: ButtonProps) => {
  const classes = styles();
  return (
    <>
      <Button
        className={classes.button + " " + classes.browseButton}
        variant={"contained"}
        onClick={onClick}
      >
        Browse more Product
      </Button>
    </>
  );
};

export {
  AddToCartButton,
  BuyNowButton,
  CheckPinButton,
  ProceedForPaymentButton,
  SaveButton,
  LoginButton,
  SignUpButton,
  BrowseMoreProductsButton
};
