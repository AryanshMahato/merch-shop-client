import { makeStyles } from "@material-ui/core";

const styles = makeStyles(() => ({
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
  },
  name: {},
  category: {},
  price: {},
  description: {},
}));

export default styles;
