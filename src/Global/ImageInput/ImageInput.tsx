import React, {
  createRef,
  RefObject,
  useState,
} from "react";
import styles from "./ImageInput.styles";
import PlaceHolderImage from "../../Assets/image-regular.svg";
import { Button } from "@material-ui/core";

const ImageInput = ({
  getImageToParent,
}: ImageInputProps) => {
  const classes = styles();

  const inputRef: RefObject<HTMLInputElement> = createRef();

  const [image, setImage] = useState(
    PlaceHolderImage
  );

  const uploadButtonClicked = () => {
    // @ts-ignore
    inputRef.current.click();
  };

  const fileUploadHandler = (
    fileList: FileList | null
  ) => {
    if (!fileList) {
      return;
    }
    const reader = new FileReader();
    const file = fileList[0];

    if (!file) {
      return;
    }

    reader.onloadend = () => {
      // @ts-ignore
      setImage(reader.result);
      getImageToParent(file);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className={classes.root}>
      <input
        type="file"
        className={classes.input}
        ref={inputRef}
        onChange={(e) =>
          fileUploadHandler(e.target.files)
        }
      />
      <img
        src={image}
        className={classes.image}
        alt={"Input Image"}
      />
      <Button
        className={classes.button}
        variant={"contained"}
        onClick={uploadButtonClicked}
      >
        Choose File to Upload
      </Button>
    </div>
  );
};

interface ImageInputProps {
  getImageToParent: (file: File) => void;
}

export default ImageInput;
