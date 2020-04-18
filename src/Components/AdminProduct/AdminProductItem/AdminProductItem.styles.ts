import {
  makeStyles,
  Theme,
} from "@material-ui/core";

const styles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: 200,
    width: "100%",
    display: "flex",
    margin: "1rem",
    padding: "1rem",
    borderRadius: 10,
    background: "#EAF0F1",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      flexFlow: "column",
    },
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
    [theme.breakpoints.down("xs")]: {
      margin: "1rem 0 ",
    },
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
    [theme.breakpoints.down("sm")]: {
      right: 0,
    },
  },
}));

export default styles;
