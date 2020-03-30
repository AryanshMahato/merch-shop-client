import { makeStyles } from "@material-ui/core";

const styles = makeStyles(() => ({
  root: {
    height: "100%",
    display: "flex",
    alignItems: "center"
  },
  login: {
    fontSize: "2rem",
    fontWeight: "bold",
    cursor: "pointer",
    height: "100%",
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: "#fff"
  },
  loginHover: {
    position: "relative"
  }
}));

export default styles;
