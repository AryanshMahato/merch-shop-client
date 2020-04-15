import React from "react";
import { ICategory } from "../../../types/Store";

const CategoryItems = ({ category }: CategoryItemsProps) => {
  console.log(category);
  return <div>Hi</div>;
};

interface CategoryItemsProps {
  category: ICategory;
}

export default CategoryItems;
