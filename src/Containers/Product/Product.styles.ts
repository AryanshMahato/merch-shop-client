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
      alignItems: "center",
      marginTop: "2rem"
    }
  },
  leftPart: {
    width: "90vw",
    maxWidth: 500,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "3rem"
    }
  },
  rightPart: { width: "90vw", maxWidth: 300 }
}));

export default styles;
