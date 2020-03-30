import { createStyles } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const StyledButton = makeStyles(() =>
  createStyles({
    button: {
      fontSize: "1rem"
    },
    checkButton: {
      backgroundColor: "#01CBC6",
      "&:hover": {
        backgroundColor: "#01b9b4"
      }
    },
    authButton: {
      backgroundColor: "#3498DB",
      "&:hover": {
        backgroundColor: "#328ecc"
      }
    },
    browseButton: {
      backgroundColor: "#2ECC72",
      color: "#fff",
      "&:hover": {
        backgroundColor: "#2dbe66"
      }
    }
  })
);

export default StyledButton;
