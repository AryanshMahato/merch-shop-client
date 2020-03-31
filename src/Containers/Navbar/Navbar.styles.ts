import { makeStyles, Theme } from "@material-ui/core";

const styles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    padding: 0
  },
  toolbar: {
    height: 80,
    backgroundColor: "#2C3335",
    alignItems: "flex-start"
  },
  navBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
    width: "100%"
  },
  navItems: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "11rem",
    margin: "0 2rem",
    height: "100%",
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  }
}));

export default styles;
