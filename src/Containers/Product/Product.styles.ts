import { makeStyles, Theme } from "@material-ui/core";

const styles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    padding: "2rem",
    marginTop: "5rem",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexFlow: "column",
      alignItems: "center"
    }
  },
  leftPart: {
    width: "90vw",
    maxWidth: 500
  },
  rightPart: { width: "90vw", maxWidth: 300 }
}));

export default styles;
