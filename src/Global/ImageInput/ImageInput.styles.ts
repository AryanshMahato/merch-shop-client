import { makeStyles } from "@material-ui/core";

const styles = makeStyles(() => ({
  root: {
    width: 250,
    height: 250,
    display: "flex",
    flexFlow: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    display: "none",
  },
  image: {
    width: 150,
    height: 150,
    objectFit: "cover",
  },
  button: {},
}));

export default styles;
