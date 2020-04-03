import { makeStyles } from "@material-ui/core";

const styles = makeStyles(() => ({
  root: {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "80vw",
    maxWidth: 450,
    height: 300
  },
  field: {
    width: "75vw",
    maxWidth: 400
  },
  button: {
    maxWidth: 150
  }
}));

export default styles;
