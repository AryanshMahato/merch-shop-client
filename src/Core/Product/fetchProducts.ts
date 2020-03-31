import mAxios from "../../Util/Axios";

const fetchProducts = async () => {
  return await mAxios.get("/products/0");
};

export default fetchProducts;
