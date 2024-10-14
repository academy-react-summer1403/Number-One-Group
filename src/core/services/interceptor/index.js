import axios from "axios";
import { getItem, removeItem } from "../../hooks/local-storage";

const baseURL = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
  baseURL: baseURL,
});

const onSuccess = (response) => {
  return response.data;
};

const onError = (error) => {
  if (error.response.status === 401) {
    removeItem("token");
  }
  if (error.response.status >= 404 && error.response.status < 500) {
    alert("Client Error:", error.response.status);
  }
  return Promise.reject(error);
};

instance.interceptors.response.use(onSuccess, onError);
instance.interceptors.request.use((opt) => {
  const token = getItem("token");
  if (token) opt.headers.Authorization = "Bearer " + token;
  return opt;
});

export default instance;
