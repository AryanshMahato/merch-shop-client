import React from "react";
import { IProduct } from "../../../../types/Store";

const AdminProductItem = ({
  product,
}: AdminProductItemProps) => {
  return <div>{product.name}</div>;
};

interface AdminProductItemProps {
  product: IProduct;
}

export default AdminProductItem;
