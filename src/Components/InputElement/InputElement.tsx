import { useField } from "formik";
import React from "react";
import { TextField } from "@material-ui/core";

const InputElement = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);

  const error = !!(meta.touched && meta.error);
  const helperText = error ? meta.error : null;

  return (
    <>
      <TextField
        variant={"outlined"}
        label={label}
        {...field}
        {...props}
        error={error}
        helperText={helperText}
      />
    </>
  );
};

export default InputElement;
