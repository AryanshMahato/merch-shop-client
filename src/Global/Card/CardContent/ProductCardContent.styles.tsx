import { createStyles, makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(() => {
  return createStyles({
    cardContent: {
      root: {
        flexGrow: 1
      }
    },
    name: {
      fontWeight: "bold",
      fontSize: "1.3rem"
    },
    price: {
      fontSize: "1.2rem",
      marginLeft: ".5rem"
    },
    priceSign: {
      fontWeight: "bold"
    },
    category: {
      fontSize: "0.8rem",
      color: "#343A40"
    }
  });
});

export default styles;
