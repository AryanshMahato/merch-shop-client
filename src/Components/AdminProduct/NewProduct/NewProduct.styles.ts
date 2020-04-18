import {
  makeStyles,
  Theme,
} from "@material-ui/core";

const styles = makeStyles((theme: Theme) => ({
  root: {},
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
  },
}));

export default styles;
