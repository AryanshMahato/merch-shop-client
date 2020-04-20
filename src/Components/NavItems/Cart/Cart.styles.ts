import {
  createStyles,
  makeStyles,
  withStyles,
  Badge,
  Theme,
} from "@material-ui/core";

const styles = makeStyles((theme: Theme) => ({
  link: {
    textDecoration: "none",
    color: "#fff",
  },
  cart: {
    width: 40,
    height: 40,
    cursor: "pointer",
    [theme.breakpoints.down("xs")]: {
      width: 28,
      height: 28,
    },
  },
}));

const StyledBadge = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      padding: "0 4px",
      backgroundColor: "#fff",
      color: "#000",
      width: "1.5rem",
      height: "1.5rem",
      border: "2px solid black",
      borderRadius: "50%",
      fontSize: "1rem",
      top: 8,
      left: 12,
      [theme.breakpoints.down("xs")]: {
        top: 4,
        left: 4,
        fontSize: ".8rem",

        width: "1.2rem",
        height: "1.2rem",
      },
    },
  })
)(Badge);

export default styles;

export { StyledBadge };
