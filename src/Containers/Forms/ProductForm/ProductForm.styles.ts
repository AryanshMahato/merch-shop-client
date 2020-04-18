import {
  makeStyles,
  Theme,
} from "@material-ui/core";

const styles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexFlow: "column",
    height: 400,
    justifyContent: "space-around",
    maxWidth: 400,
    width: "90%",
  },
  subClass: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      flexFlow: "column",
      "&>*": {
        margin: ".5rem 0",
      },
    },
  },
  name: {},
  category: {},
  price: {},
  description: {},
}));

export default styles;
