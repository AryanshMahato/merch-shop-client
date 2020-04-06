import { makeStyles, Theme } from "@material-ui/core";

const styles = makeStyles((theme: Theme) => ({
  root: {
    flexFlow: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    justifySelf: "center",
    padding: "2rem 0",
    paddingBottom: "4rem"
  },
  annotation: {
    fontSize: "4rem",
    color: "#E74292",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "3rem"
    }
  },
  cartIcon: {
    width: "7rem",
    height: "7rem",
    color: "#3498DB"
  },
  comment: {
    fontSize: "1.5rem",
    color: "#535C68"
  }
}));

export default styles;
