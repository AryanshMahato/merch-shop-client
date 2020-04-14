import { makeStyles } from "@material-ui/core";

const styles = makeStyles(() => ({
  root: {
    background: "white",
    display: "flex",
    flexFlow: "column",
    width: 250,
    alignItems: "center",
    height: 100,
    justifyContent: "space-evenly",
    borderRadius: 10
  },
  divider: {
    width: "90%",
    height: "2px"
  },
  orders: {
    color: "black",
    textDecoration: "none",
    fontSize: "1.5rem"
  },
  logOut: {
    color: "#FF4848",
    textDecoration: "none",
    fontSize: "1.5rem"
  }
}));

export default styles;
