import mAxios from "../../Util/Axios";

const newCategoryAPI = (authToken: string, category: string) => {
  return mAxios.post(
    "/category/create",
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

export default newCategoryAPI;
