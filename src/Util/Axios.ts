import axios from "axios";

// Will be changed in production
const backendURL = "http://localhost:8000/api";

const mAxios = axios.create({
  baseURL: backendURL
});

export default mAxios;
