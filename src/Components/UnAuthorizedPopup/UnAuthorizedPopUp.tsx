import React from "react";
import { Modal } from "@material-ui/core";
import UnAuthorizedPrompt from "../../Containers/UnAuthorizedPrompt/UnAuthorizedPrompt";
import styles from "./UnAuthorizedPopUp.styles";

const UnAuthorizedPopUp = ({
  show,
  handleClose,
}: UnAuthorizedPopUpProps) => {
  const classes = styles();

  return (
    <Modal
      open={show}
      onClose={handleClose}
      className={classes.root}
    >
      <UnAuthorizedPrompt
        className={classes.popup}
      />
    </Modal>
  );
};

interface UnAuthorizedPopUpProps {
  show: boolean;
  handleClose: () => void;
}

export default UnAuthorizedPopUp;
