import { makeStyles } from "@material-ui/core";

const styles = makeStyles(() => ({
  root: {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    marginBottom: "2rem",
    padding: "1rem 0",
  },
  annotation: {
    width: "100%",
    margin: "2rem",
  },
}));

export default styles;
