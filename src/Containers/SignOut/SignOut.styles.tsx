import { makeStyles, Theme } from "@material-ui/core";

const styles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexFlow: "column",
    height: "500px",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  annotation: {
    color: "#fff",
    fontSize: "4rem",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "3rem"
    }
  }
}));

export default styles;
