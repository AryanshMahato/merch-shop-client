import { makeStyles, Theme } from "@material-ui/core";

const styles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      flexFlow: "column"
    }
  },
  annotation: {
    fontWeight: "normal",
    fontSize: "3rem"
  }
}));

export default styles;
