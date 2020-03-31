import { createStyles, makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(() => {
  return createStyles({
    root: {
      width: 250,
      transition: ".2s !important",
      "&:hover": {
        transform: "translateY(0px) scale(1.02)"
      }
    },
    media: {
      height: 250,
      width: "100%"
    },
    image: {
      height: "100%",
      width: "100%",
      objectFit: "cover"
    }
  });
});

export default styles;
