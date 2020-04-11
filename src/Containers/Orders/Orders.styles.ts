import { makeStyles } from "@material-ui/core";

const styles = makeStyles(() => ({
  root: {
    display: "flex",
    flexFlow: "column",
    justifyContent: "start",
    alignItems: "center",
    padding: "1rem"
  },
  annotation: {
    fontSize: "3rem",
    fontWeight: "normal"
  },
  success: {
    color: "#2ECC72"
  },
  failed: {
    color: "#E74292"
  }
}));

export default styles;
