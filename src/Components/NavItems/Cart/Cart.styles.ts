import { createStyles, makeStyles, withStyles, Badge } from "@material-ui/core";

const styles = makeStyles(() => ({
  link: {
    textDecoration: "none",
    color: "#fff"
  },
  cart: {
    width: 40,
    height: 40,
    cursor: "pointer"
  }
}));

const StyledBadge = withStyles(() =>
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
      left: 12
    }
  })
)(Badge);

export default styles;

export { StyledBadge };
