import axios from "axios";

const backendURL = process.env.REACT_APP_API_LINK;

const mAxios = axios.create({
  baseURL: backendURL
});

export default mAxios;
