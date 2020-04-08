import { makeStyles, Theme } from "@material-ui/core";

const styles = makeStyles((theme: Theme) => ({
  background: {
    alignItems: "center",
    position: "relative",
    justifyContent: "space-between",
    padding: "2rem",
    paddingTop: "5rem",
    [theme.breakpoints.down("md")]: {
      flexFlow: "column"
    }
  },
  annotation: {
    position: "absolute",
    fontSize: "2.5rem",
    color: "#2ECC72",
    top: 30,
    left: 60,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      left: "0",
      textAlign: "center"
    }
  }
}));

export default styles;
