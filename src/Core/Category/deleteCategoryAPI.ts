import mAxios from "../../Util/Axios";

const deleteCategoryAPI = (authToken: string, id: string) => {
  return mAxios.delete("/category/" + id, {
    headers: {
      Authorization: "Bearer " + authToken
    }
  });
};

export default deleteCategoryAPI;
