import { makeStyles, Theme } from "@material-ui/core";

const styles = makeStyles((theme: Theme) => ({
  root: {
    background: "#EAF0F1",
    display: "flex",
    margin: "1rem 0",
    padding: "0.5rem",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    maxWidth: 1100,
    [theme.breakpoints.down("xs")]: {
      flexFlow: "column",
      padding: "1rem"
    }
  },
  category: {
    fontWeight: "normal",
    fontSize: "1.5rem",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1rem"
    }
  },
  buttons: {
    display: "flex",
    minWidth: "150px",
    justifyContent: "space-between"
  }
}));

export default styles;
