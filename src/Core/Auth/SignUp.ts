import mAxios from "../../Util/Axios";

const signUp = async (name: string, email: string, password: string) => {
  const response = await mAxios.post("/signup", {
    name,
    email,
    password
  });
  if (response.status >= 400) {
    throw new Error(response.data.message);
  }
  return response.data;
};

export default signUp;
