import mAxios from "../../Util/Axios";

const updateCategory = (authToken: string, id: string, category: string) => {
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

export default updateCategory;
