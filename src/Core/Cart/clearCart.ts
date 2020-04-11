import mAxios from "../../Util/Axios";

const clearCart = (authToken: string) => {
  return mAxios.delete("/cart/clear", {
    headers: {
      Authorization: "Bearer " + authToken
    }
  });
};

export default clearCart;
