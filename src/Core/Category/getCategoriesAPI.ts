import mAxios from "../../Util/Axios";

const getCategoriesAPI = (authToken: string) => {
  return mAxios.get("/category", {
    headers: {
      Authorization: "Bearer " + authToken
    }
  });
};

export default getCategoriesAPI;
