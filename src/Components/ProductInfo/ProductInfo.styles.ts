import { makeStyles } from "@material-ui/core";

const styles = makeStyles(() => ({
  root: {
    whiteSpace: "pre-line",
  },
  name: {
    fontSize: "2.5rem",
    fontWeight: "bold",
  },
  priceSign: { fontWeight: "bold" },
  price: { fontSize: "1.5rem", margin: "1rem 0" },
  category: {
    margin: "1rem 0",
  },
  description: {
    margin: "2rem 0",
  },
}));

export default styles;
