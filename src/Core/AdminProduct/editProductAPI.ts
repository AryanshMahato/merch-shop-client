import mAxios from "../../Util/Axios";

const editProductAPI = (
  authToken: string,
  id: string,
  product: any
) => {
  // Removes product properties with no change
  for (const productKey in product) {
    if (!product[productKey]) {
      product[productKey] = undefined;
    }
  }

  return mAxios.put("/product/" + id, product, {
    headers: {
      Authorization: "Bearer " + authToken,
    },
  });
};

export default editProductAPI;
