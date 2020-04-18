import {
  makeStyles,
  Theme,
} from "@material-ui/core";

const styles = makeStyles((theme: Theme) => ({
  root: {
    [theme.breakpoints.down("xs")]: {
      overflow: "scroll",
    },
  },
  paper: {
    outline: "none",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    background: "#fff",
    boxShadow: theme.shadows[5],
    width: "90vw",
    maxWidth: 1100,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 10,
    [theme.breakpoints.down("sm")]: {
      flexFlow: "column",
      padding: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      top: 0,
      transform: "translate(-50%,0)",
    },
  },
  input: {
    width: "80%",
  },
  buttons: {
    display: "flex",
    flexFlow: "column",
    justifyContent: "space-evenly",
    height: 150,
    alignSelf: "flex-start",
    marginTop: "2rem",
    [theme.breakpoints.down("sm")]: {
      alignSelf: "center",
      marginTop: "0",
      flexFlow: "row",
      height: "unset",
      width: 200,
    },
  },
}));

export default styles;
