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
  },
  loginHover: {
    position: "relative",
  },
}));

export default styles;
