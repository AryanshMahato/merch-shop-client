import {
  makeStyles,
  Theme,
} from "@material-ui/core";

const styles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    padding: 0,
    marginBottom: 32,
  },
  toolbar: {
    height: 80,
    backgroundColor: "#2C3335",
    alignItems: "flex-start",
  },
  navBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
    width: "100%",
  },
  navItems: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "11rem",
    margin: "0 2rem",
    height: "100%",
    [theme.breakpoints.down("xs")]: {
      margin: "0 1rem",
      width: "7rem",
    },
  },
  bottomMargin: {
    marginBottom: "100px",
  },
}));

export default styles;
