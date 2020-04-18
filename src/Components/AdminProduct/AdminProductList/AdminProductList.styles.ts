import {
  makeStyles,
  Theme,
} from "@material-ui/core";

const styles = makeStyles((theme: Theme) => ({
  root: {
    background: "white",
    width: "90%",
    maxWidth: 1300,
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    padding: "2rem",
    borderRadius: 10,
    [theme.breakpoints.down("xs")]: {
      padding: "1rem",
    },
  },
}));

export default styles;
