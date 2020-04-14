import mAxios from "../../Util/Axios";

const getOrdersFromAPI = (authToken: string) => {
  return mAxios.get("/order/", {
    headers: {
      Authorization: "Bearer " + authToken
    }
  });
};

export default getOrdersFromAPI;
