import { makeStyles } from "@material-ui/core";

const styles = makeStyles(() => ({
  root: {
    height: 200,
    width: "95%",
    display: "flex",
    margin: "1rem",
    padding: "1rem",
    borderRadius: 10,
    background: "#EAF0F1",
    position: "relative",
  },
  image: {
    height: 150,
    width: 150,
    objectFit: "cover",
  },
  info: {
    display: "flex",
    flexFlow: "column",
    margin: "1rem 2rem",
  },
  name: {
    marginBottom: "1rem",
  },
  price: {
    marginTop: 8,
    "& span": {
      fontWeight: "bold",
    },
  },
  buttons: {
    position: "absolute",
    right: 20,
    display: "flex",
    flexFlow: "column",
    "&>*": {
      margin: ".5rem",
    },
  },
}));

export default styles;
