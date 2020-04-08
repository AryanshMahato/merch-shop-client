import { makeStyles, Theme } from "@material-ui/core";

const styles = makeStyles((theme: Theme) => ({
  background: {
    flexFlow: "column",
    alignItems: "center",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "5rem"
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
