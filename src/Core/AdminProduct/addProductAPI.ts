import mAxios from "../../Util/Axios";

const addProductAPI = (
  authToken: string,
  product: any
) => {
  console.log(product);

  const encodedProduct = new FormData();
  encodedProduct.set("name", product.name);
  encodedProduct.set(
    "description",
    product.description
  );
  encodedProduct.append("image", product.image);
  encodedProduct.set(
    "category",
    product.category
  );
  encodedProduct.set("price", product.price);

  console.log(encodedProduct.getAll("image"));

  return mAxios.post(
    "/product/",
    encodedProduct,
    {
      headers: {
        Authorization: "Bearer " + authToken,
        "Content-Type": "multipart/form-data",
      },
    }
  );
};

export default addProductAPI;
