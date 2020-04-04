const saveToken = (authToken: string) => {
  localStorage.setItem("AUTH_TOKEN", authToken);
};

const deleteToken = () => {
  localStorage.removeItem("AUTH_TOKEN");
};

const getToken = () => {
  return localStorage.getItem("AUTH_TOKEN");
};

export { saveToken, deleteToken, getToken };
