import {
  makeStyles,
  Theme,
} from "@material-ui/core";

const styles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    padding: "0 !important",
    marginBottom: 32,
    [theme.breakpoints.down("xs")]: {
        marginBottom: "16px",
    }

  },
  toolbar: {
    height: 80,
    backgroundColor: "#2C3335",
    alignItems: "flex-start",
    [theme.breakpoints.down("xs")]: {
      padding: 8,
      height: 48,
    },
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
      width: "6rem",
    },
  },
  bottomMargin: {
    marginBottom: "100px",
    [theme.breakpoints.down("xs")]: {
	marginBottom: "64px",
    }
  },
}));

export default styles;
