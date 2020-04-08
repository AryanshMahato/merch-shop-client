import mAxios from "../../Util/Axios";

const addItemToCart = async (authToken: string, productId: string) => {
  return mAxios.put(
    "/cart",
    {
      product: productId
    },
    {
      headers: {
        Authorization: "Bearer " + authToken
      }
    }
  );
};

export default addItemToCart;
