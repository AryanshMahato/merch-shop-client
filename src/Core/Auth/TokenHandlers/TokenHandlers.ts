const saveToken = async (authToken: string) => {
  await localStorage.setItem("AUTH_TOKEN", authToken);
};

const deleteToken = async () => {
  await localStorage.removeItem("AUTH_TOKEN");
};

const getToken = async () => {
  return localStorage.getItem("AUTH_TOKEN");
};

export { saveToken, deleteToken, getToken };
