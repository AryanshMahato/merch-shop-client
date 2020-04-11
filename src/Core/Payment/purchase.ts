import mAxios from "../../Util/Axios";

const purchase = (stripeToken: any, authToken: string) => {
  return mAxios.post(
    "/order/create",
    {
      token: [stripeToken],
      transactionId: "ljkdflkasjlnflasjdf3029djf"
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
