import { makeStyles, Theme } from "@material-ui/core";

const styles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexFlow: "column",
    justifyContent: "flex-start",
    padding: "3rem 0"
  },
  category: {
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      height: 200
    }
  }
}));

export default styles;
