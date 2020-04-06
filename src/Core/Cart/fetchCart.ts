import mAxios from "../../Util/Axios";

const fetchCart = (authToken: string) => {
  return mAxios.get("/cart", {
    headers: {
      Authorization: "Bearer " + authToken
    }
  });
};

export default fetchCart;
