import { makeStyles } from "@material-ui/core";

const styles = makeStyles(() => ({
  root: {
    display: "flex",
    flexFlow: "column",
    width: "90vw",
    maxWidth: "350px",
    background: "#fff",
    padding: "2rem",
    height: 300,
    justifyContent: "space-between",
    borderRadius: 20
  },
  annotation: {
    marginBottom: "-1.5rem"
  },
  price: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "1.5rem"
  },
  priceAnnotation: {},
  priceValue: {},
  deliveryCharges: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "1.5rem"
  },
  deliveryChargesAnnotation: {},
  deliveryChargesValue: {}
}));

export default styles;
