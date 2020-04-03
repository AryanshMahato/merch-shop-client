import mAxios from "../../Util/Axios";

const fetchProduct = async (id: string) => {
  const products = await mAxios.get(`/product/${id}`);
  return products.data.product;
};

export default fetchProduct;
