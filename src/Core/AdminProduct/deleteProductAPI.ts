import mAxios from "../../Util/Axios";

const deleteProductAPI = (
  authToken: string,
  id: string
) => {
  return mAxios.delete("/product/" + id, {
    headers: {
      Authorization: "Bearer " + authToken,
    },
  });
};

export default deleteProductAPI;
