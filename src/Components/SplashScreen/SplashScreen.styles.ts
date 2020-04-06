import { makeStyles, Theme } from "@material-ui/core";

const styles = makeStyles((theme: Theme) => ({
  root: {
    background: "#343a40 !important",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  annotation: {
    color: "white",
    fontSize: "4rem",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "3rem"
    }
  }
}));

export default styles;
