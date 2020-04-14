import mAxios from "../../Util/Axios";

const buyNowAPI = (stripeToken: any, authToken: string, productId: string) => {
  return mAxios.post(
    "/order/buy-now",
    {
      token: stripeToken.id,
      product: productId
    },
    {
      headers: {
        Authorization: "Bearer " + authToken
      }
    }
  );
};

// const clearCart=(authToken:any)=>{
//   return mAxios.post()
// }

export { buyNowAPI };
