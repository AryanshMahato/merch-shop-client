import { makeStyles } from "@material-ui/core";

const styles = makeStyles(() => ({
  root: {
    display: "flex",
    background: "#000",
    height: "5rem",
    color: "white",
    padding: ".5rem",
    textDecoration: "none",
    justifyContent: "space-around",
    alignItems: "center",
    flexFlow: "column"
  },
  annotation: {
    fontSize: "1.5rem"
  },
  links: {
    marginRight: 32
  },
  link: {
    color: "white",
    textDecoration: "none",
    margin: "0 1rem",
    "&:hover": {
      color: "#dbd8d8"
    }
  },
  loveEmoji: {}
}));

export default styles;
