import {
  makeStyles,
  Theme,
} from "@material-ui/core";

const styles = makeStyles((theme: Theme) => ({
  root: {
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  login: {
    fontSize: "1.8rem",
    cursor: "pointer",
    height: "100%",
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: "#fff",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2rem",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  loginHover: {
    position: "relative",
  },
  mobileNav: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  mobileAnnotation: {
    fontSize: "1.2rem",
    fontWeight: "normal",
    cursor: "pointer",
  },
  mobileLogin: {
    color: "#01CBC6",
    fontSize: "1.2rem",
    textDecoration: "none",
  },
  mobileSignUp: {
    color: "#F3CC79",
    fontSize: "1.2rem",
    textDecoration: "none",
  },
}));

export default styles;
