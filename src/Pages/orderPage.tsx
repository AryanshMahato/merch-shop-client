import React from "react";
import Orders from "../Containers/Orders/Orders";
import { connect } from "react-redux";
import { IProduct } from "../../types/Store";

const testProduct = [
  {
    sold: 0,
    _id: "5e861d586cdb622c54560648",
    name: "Long T-shirt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda corporis earum eligendi ipsam nemo obcaecati vero! Aperiam, itaque, quaerat?",
    price: 25,
    category: {
      _id: "5e7f3bf8bab42f1b5c4228df",
      name: "Summer Collection"
    },
    imageName: "581ca520-7505-11ea-93bd-c75b556fafbf.jpeg"
  },
  {
    sold: 0,
    _id: "5e861d586cdb622d54560648",
    name: "Long T-shirt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda corporis earum eligendi ipsam nemo obcaecati vero! Aperiam, itaque, quaerat?",
    price: 25,
    category: {
      _id: "5e7f3bf8bab42f1b5c4228df",
      name: "Summer Collection"
    },
    imageName: "581ca520-7505-11ea-93bd-c75b556fafbf.jpeg"
  }
];

const OrderPage = ({ orderedProducts }: OrderPageProps) => {
  return <Orders success={true} products={testProduct} />;
};

interface OrderPageProps {
  orderedProducts: Array<IProduct>;
}

const mapStateToProps = (state: any) => {
  return {
    orderedProducts: state.product.products
  };
};

export default connect(mapStateToProps)(OrderPage);
