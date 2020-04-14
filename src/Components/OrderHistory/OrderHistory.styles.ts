import { makeStyles, Theme } from "@material-ui/core";

const styles = makeStyles((theme: Theme) => ({
  root: {
    marginLeft: "250px",
    [theme.breakpoints.down("md")]: {
      marginLeft: 0
    }
  }
}));

export default styles;
