import {
  makeStyles,
  Theme,
} from "@material-ui/core";

const styles = makeStyles((theme: Theme) => ({
  root: {
    marginLeft: "250px",
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
    },
  },
  noProductFound: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    "&>*": {
      margin: "2rem 0",
      textDecoration: "none",
    },
  },
}));

export default styles;
