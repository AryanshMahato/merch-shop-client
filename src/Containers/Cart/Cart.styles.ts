import { makeStyles } from "@material-ui/core";

const styles = makeStyles(() => ({
  background: {
    flexFlow: "column",
    alignItems: "center",
    position: "relative"
  },
  annotation: {
    position: "absolute",
    fontSize: "2.5rem",
    color: "#2ECC72",
    top: 30,
    left: 60
  }
}));

export default styles;
