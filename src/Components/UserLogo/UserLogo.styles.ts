import { makeStyles } from "@material-ui/core";

const styles = makeStyles(() => ({
  root: {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    color: "white",
    maxWidth: "250px"
  },
  image: {
    width: 200
  },
  name: {
    marginTop: "1rem",
    textAlign: "center"
  }
}));

export default styles;
