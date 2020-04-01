import { makeStyles } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";

const styles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    [theme.breakpoints.down("xs")]: {
      width: 250
    }
  }
}));

export default styles;
