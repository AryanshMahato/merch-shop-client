import mAxios from "../../Util/Axios";

const removeItemFromCart = async (authToken: string, productId: string) => {
  return mAxios.delete("/cart", {
    data: {
      product: productId
    },
    headers: {
      Authorization: "Bearer " + authToken
    }
  });
};

export default removeItemFromCart;
