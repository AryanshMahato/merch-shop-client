import { makeStyles } from "@material-ui/core";

const styles = makeStyles(() => ({
  product: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill,minmax(250px, 1fr))",
    gridGap: "2rem",
    padding: "1rem"
  }
}));

export default styles;
