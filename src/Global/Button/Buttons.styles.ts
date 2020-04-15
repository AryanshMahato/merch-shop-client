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
    },
    saveButton: {
      backgroundColor: "#2ECC72",
      color: "#fff",
      "&:hover": {
        backgroundColor: "#2dbe66"
      }
    },
    cancelButton: {
      backgroundColor: "#EA7773",
      color: "#fff",
      "&:hover": {
        backgroundColor: "#db706c"
      }
    },
    deleteButton: {
      height: "40px",
      backgroundColor: "#EA7773",
      color: "#fff",
      "&:hover": {
        backgroundColor: "#db706c"
      },
      "& svg": {
        height: "28px",
        width: "28px"
      }
    },
    editButton: {
      height: "40px",
      backgroundColor: "#fff",
      color: "#343A40",
      "&:hover": {
        backgroundColor: "#dfdfdf"
      },
      "& svg": {
        height: "28px",
        width: "28px"
      }
    },
    newButton: {
      fontSize: "1.2rem",
      backgroundColor: "#2ECC72",
      color: "#fff",
      "&:hover": {
        backgroundColor: "#2dbe66"
      }
    }
  })
);

export default StyledButton;
