import { makeStyles, Theme } from "@material-ui/core";

const styles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexFlow: "row",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: "2rem 0",
    [theme.breakpoints.down("sm")]: {
      flexFlow: "column"
    }
  },
  info: {
    maxWidth: "450px",
    "&>*": {
      margin: ".5rem 0"
    }
  },
  statusRoot: {
    textAlign: "center",
    "&>*": {
      margin: "0.2rem 0"
    }
  },
  name: {},
  image: {
    width: 200,
    height: 200,
    objectFit: "cover"
  },
  category: {
    fontSize: "1rem",
    fontWeight: "normal"
  },
  description: {},
  statusAnnotation: {
    fontSize: "1.5rem",
    fontWeight: "normal"
  },
  status: {
    color: "#2ECC72"
  }
}));

export default styles;
