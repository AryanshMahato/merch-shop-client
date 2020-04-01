import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const styles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      width: 250,
      transition: ".2s !important",
      [theme.breakpoints.down("xs")]: {
        width: 150
      },
      "&:hover": {
        transform: "translateY(0px) scale(1.02)"
      }
    },
    media: {
      height: 250,
      width: "100%",
      [theme.breakpoints.down("xs")]: {
        height: 150,
        width: 150
      }
    },
    image: {
      height: "100%",
      width: "100%",
      objectFit: "cover"
    }
  });
});

export default styles;
