import { makeStyles, Theme } from "@material-ui/core";

const styles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    padding: "2rem",
    [theme.breakpoints.down("md")]: {
      flexFlow: "column",
      justifyContent: "center"
    }
  },
  leftPane: {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "70vh",
    position: "fixed",
    [theme.breakpoints.down("md")]: {
      position: "static",
      height: "85vh"
    }
  }
}));

export default styles;
