import { makeStyles, Theme } from "@material-ui/core";

const styles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexFlow: "column",
    width: "90vw",
    maxWidth: "300px",
    background: "#fff",
    padding: "1.5rem",
    height: 300,
    justifyContent: "space-between",
    borderRadius: 20,
    [theme.breakpoints.down("md")]: {
      marginTop: "2rem"
    }
  },
  annotation: {
    marginBottom: "-1.5rem"
  },
  price: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "1.2rem"
  },
  priceAnnotation: {},
  priceValue: {},
  deliveryCharges: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "1.2rem"
  },
  deliveryChargesAnnotation: {},
  deliveryChargesValue: {}
}));

export default styles;
