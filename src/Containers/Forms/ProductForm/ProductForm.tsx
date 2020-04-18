import React, { useState } from "react";
import {
  MenuItem,
  TextField,
} from "@material-ui/core";
import styles from "./ProductForm.styles";
import { connect } from "react-redux";
import { ICategory } from "../../../../types/Store";

const ProductForm = ({
  categories,
}: ProductFormProps) => {
  const classes = styles();

  const [category, setCategory] = useState(
    categories[0]._id
  );

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState(
    ""
  );

  return (
    <div>
      <TextField
        variant={"outlined"}
        label={"Name"}
        onChange={(e) => setName(e.target.value)}
        className={classes.name}
      />
      <TextField
        select={true}
        label={"Select Category"}
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
        }
      >
        {categories.map((category) => (
          <MenuItem
            value={category._id}
            key={category._id}
          >
            {category.name}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        variant={"outlined"}
        label={"Price"}
        type={"number"}
        onChange={(e) =>
          setPrice(+e.target.value)
        }
        className={classes.price}
      />
      <TextField
        variant={"outlined"}
        label={"Description"}
        type={"text"}
        rows={5}
        multiline={true}
        onChange={(e) =>
          setDescription(e.target.value)
        }
        className={classes.price}
      />
    </div>
  );
};

interface ProductFormProps {
  categories: Array<ICategory>;
}

const mapStateToProps = (state: any) => {
  return {
    categories: state.category.categories,
  };
};

export default connect(mapStateToProps)(
  ProductForm
);
