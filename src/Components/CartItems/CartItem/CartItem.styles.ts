import { makeStyles, Theme } from "@material-ui/core";

const styles = makeStyles((theme: Theme) => ({
  root: {
    display: "grid",
    maxHeight: 200,
    gridTemplateColumns: "200px 200px 84px 20px 60px",
    gap: "2rem",
    margin: "2rem",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexFlow: "column",
      maxHeight: "unset"
    }
  },
  image: {
    maxWidth: 200
  },
  info: {
    display: "flex",
    flexFlow: "column",
    height: "100%",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      "&>*": {
        margin: "0.2rem"
      }
    }
  },
  name: {},
  category: {
    color: "#343A40"
  },
  removeButton: {
    alignSelf: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  priceSign: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    },
    fontWeight: "bold"
  },
  price: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    },
    fontSize: "1.5rem",
    gridColumnStart: "5"
  },
  mobileButtonAndPrice: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "space-between",
      "&>*": {
        display: "inline-block",
        "&>*": {
          display: "inline-block"
        }
      }
    }
  }
}));

export default styles;
