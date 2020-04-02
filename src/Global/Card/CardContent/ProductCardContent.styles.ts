import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const styles = makeStyles((theme: Theme) => {
  return createStyles({
    cardContent: {
      root: {
        flexGrow: 1
      }
    },
    name: {
      fontWeight: "bold",
      fontSize: "1.3rem",
      [theme.breakpoints.down("xs")]: {
        fontSize: "0.8rem"
      }
    },
    price: {
      fontSize: "1.2rem",
      marginLeft: ".5rem",
      [theme.breakpoints.down("xs")]: {
        fontSize: "0.8rem"
      }
    },
    priceSign: {
      fontWeight: "bold",
      [theme.breakpoints.down("xs")]: {}
    },
    category: {
      fontSize: "0.8rem",
      color: "#343A40",
      [theme.breakpoints.down("xs")]: {
        width: 150,
        fontSize: "0.6rem"
      }
    }
  });
});

export default styles;
