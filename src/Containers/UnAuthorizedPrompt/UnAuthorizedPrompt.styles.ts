import {
  makeStyles,
  Theme,
} from "@material-ui/core";

const styles = makeStyles((theme: Theme) => ({
  root: {
    flexFlow: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingBottom: "10rem",
    [theme.breakpoints.down("xs")]: {
      paddingBottom: "2rem",
    },
  },
  annotation: {
    textAlign: "center",
    fontSize: "2.5rem",
    fontWeight: "normal",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
    },
  },
  buttons: {
    width: "80%",
    display: "flex",
    justifyContent: "space-evenly",
    maxWidth: 800,
    [theme.breakpoints.down("xs")]: {
      flexFlow: "column",
      height: 200,
      alignItems: "center",
    },
  },
  signUp: {
    textDecoration: "none",
  },
  signIn: {
    textDecoration: "none",
  },
}));

export default styles;
