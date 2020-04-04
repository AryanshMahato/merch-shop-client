import mAxios from "../../Util/Axios";

const getUser = (authToken: string) => {
  return mAxios.get("/user", {
    headers: { Authorization: "Bearer " + authToken }
  });
};
export default getUser;
