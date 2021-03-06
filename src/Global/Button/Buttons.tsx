import React from "react";
import { Button } from "@material-ui/core";
import styles from "./Buttons.styles";
import { IoIosTrash } from "react-icons/io";
import { GoPencil } from "react-icons/go";

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

const AddToCartButton = ({
  onClick,
}: ButtonProps) => {
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

const BuyNowButton = ({
  onClick,
}: ButtonProps) => {
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

const CheckPinButton = ({
  onClick,
}: ButtonProps) => {
  const classes = styles();
  return (
    <>
      <Button
        className={
          classes.button +
          " " +
          classes.checkButton
        }
        variant={"contained"}
        color={"secondary"}
        onClick={onClick}
      >
        Check
      </Button>
    </>
  );
};

const ProceedForPaymentButton = ({
  onClick,
}: ButtonProps) => {
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
        className={
          classes.button +
          " " +
          classes.saveButton
        }
        variant={"contained"}
        color={"primary"}
        onClick={onClick}
      >
        Save
      </Button>
    </>
  );
};

const NewButton = ({
  onClick,
  children,
}: ButtonProps) => {
  const classes = styles();
  return (
    <>
      <Button
        className={
          classes.button + " " + classes.newButton
        }
        variant={"contained"}
        color={"primary"}
        onClick={onClick}
      >
        {children}
      </Button>
    </>
  );
};

const CancelButton = ({
  onClick,
}: ButtonProps) => {
  const classes = styles();
  return (
    <>
      <Button
        className={
          classes.button +
          " " +
          classes.cancelButton
        }
        variant={"contained"}
        color={"primary"}
        onClick={onClick}
      >
        Cancel
      </Button>
    </>
  );
};

const DeleteButton = ({
  onClick,
}: ButtonProps) => {
  const classes = styles();
  return (
    <>
      <Button
        className={classes.deleteButton}
        variant={"contained"}
        color={"primary"}
        onClick={onClick}
      >
        <IoIosTrash />
      </Button>
    </>
  );
};

const EditButton = ({ onClick }: ButtonProps) => {
  const classes = styles();
  return (
    <>
      <Button
        className={classes.editButton}
        variant={"contained"}
        color={"primary"}
        onClick={onClick}
      >
        <GoPencil />
      </Button>
    </>
  );
};

const LoginButton = ({
  onClick,
  className,
}: ButtonProps) => {
  const classes = styles();
  return (
    <>
      <Button
        className={
          classes.button +
          " " +
          classes.authButton +
          " " +
          className
        }
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

const SignUpButton = ({
  onClick,
}: ButtonProps) => {
  const classes = styles();
  return (
    <>
      <Button
        className={
          classes.button +
          " " +
          classes.authButton
        }
        variant={"contained"}
        color={"primary"}
        onClick={onClick}
        type={"submit"}
      >
        Sign Up
      </Button>
    </>
  );
};

const BrowseMoreProductsButton = ({
  onClick,
}: ButtonProps) => {
  const classes = styles();
  return (
    <>
      <Button
        className={
          classes.button +
          " " +
          classes.browseButton
        }
        variant={"contained"}
        onClick={onClick}
      >
        Browse more Product
      </Button>
    </>
  );
};

const NavButton = ({
  onClick,
  children,
}: ButtonProps) => {
  const classes = styles();
  return (
    <>
      <Button
        className={
          classes.button + " " + classes.navButton
        }
        variant={"contained"}
        onClick={onClick}
      >
        {children}
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
  BrowseMoreProductsButton,
  CancelButton,
  DeleteButton,
  EditButton,
  NewButton,
  NavButton,
};
