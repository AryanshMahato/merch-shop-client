import { makeStyles } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";

const styles = makeStyles((theme: Theme) => ({
  product: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gridGap: "2rem",
    padding: "1rem",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "160px 160px"
    }
  }
}));

export default styles;
