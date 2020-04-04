import mAxios from "../../Util/Axios";

const signIn = async (email: string, password: string) => {
  const response = await mAxios.post("/signin", {
    email,
    password
  });
  if (response.status >= 400) {
    throw new Error(response.data.message);
  }
  return response.data;
};

export default signIn;
