import mAxios from "../../Util/Axios";

const purchase = (stripeToken: any, authToken: string) => {
  return mAxios.post(
    "/order/create",
    {
      token: stripeToken.id
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

export { purchase };
