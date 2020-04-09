import { makeStyles } from "@material-ui/core";

const styles = makeStyles(() => ({
  root: {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    color: "white",
    maxWidth: "300px"
  },
  image: {
    width: 200
  },
  name: {
    marginTop: "1rem",
    textAlign: "center"
  },
  email: {
    fontSize: "1.2rem",
    color: "#EAF0F1",
    fontWeight: "normal"
  }
}));

export default styles;
