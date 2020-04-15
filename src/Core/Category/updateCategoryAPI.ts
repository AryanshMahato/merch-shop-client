import mAxios from "../../Util/Axios";

const updateCategoryAPI = (authToken: string, id: string, category: string) => {
  return mAxios.put(
    "/category/" + id,
    {
      name: category
    },
    {
      headers: {
        Authorization: "Bearer " + authToken
      }
    }
  );
};

export default updateCategoryAPI;
