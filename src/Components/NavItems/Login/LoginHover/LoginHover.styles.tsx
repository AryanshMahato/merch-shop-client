import { makeStyles } from "@material-ui/core";

const styles = makeStyles(() => ({
  loginHover: {
    position: "absolute",
    left: "50%",
    top: 30,
    transform: "translateX(-62%)",
    transition: "0.3s"
  },
  triangle: {
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderWidth: "0 15px 15px 15px",
    borderColor: "transparent transparent #fff transparent",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    top: "-10px"
  },
  outerBox: {
    width: "300px",
    height: "48px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: "0 1rem"
  },
  divider: {
    marginLeft: 22,
    height: "40px"
  },
  login: {
    color: "#01CBC6",
    fontSize: "1.5rem",
    textDecoration: "none"
  },
  signUp: {
    color: "#F3CC79",
    fontSize: "1.5rem",
    textDecoration: "none"
  },
  hide: {
    opacity: 0,
    pointerEvents: "none"
  }
}));

export default styles;
