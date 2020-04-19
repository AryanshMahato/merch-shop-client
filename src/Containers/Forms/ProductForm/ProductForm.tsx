import React, {
  useEffect,
  useState,
} from "react";
import {
  MenuItem,
  TextField,
} from "@material-ui/core";
import styles from "./ProductForm.styles";
import { connect } from "react-redux";
import { ICategory } from "../../../../types/Store";

const ProductForm = ({
  categories,
  defaults,
  sendDataToParent,
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

  useEffect(() => {
    sendDataToParent({
      name,
      price,
      description,
      category,
    });
  }, [name, price, description, category]);

  return (
    <div className={classes.root}>
      <TextField
        variant={"outlined"}
        label={"Name"}
        defaultValue={defaults?.name}
        onChange={(e) => setName(e.target.value)}
        className={classes.name}
      />

      <div className={classes.subClass}>
        <TextField
          select={true}
          label={"Select Category"}
          defaultValue={
            defaults?.category._id || category
          }
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
          defaultValue={defaults?.price}
          onChange={(e) =>
            setPrice(+e.target.value)
          }
          className={classes.price}
        />
      </div>
      <TextField
        variant={"outlined"}
        label={"Description"}
        type={"text"}
        defaultValue={defaults?.description}
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
  defaults?: {
    name: string;
    category: ICategory;
    price: number;
    description: string;
  };
  sendDataToParent: ({}: any) => void;
}

const mapStateToProps = (state: any) => {
  return {
    categories: state.category.categories,
  };
};

export default connect(mapStateToProps)(
  ProductForm
);
