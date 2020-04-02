import mAxios from "../../Util/Axios";

const fetchProducts = async () => {
  const products = await mAxios.get("/products/0");
  return products.data.products;
};

export default fetchProducts;
