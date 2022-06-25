import axios from "axios";

const instance = axios.create({
  baseURL: "/api",
});

// instance.interceptors.request({})
instance.interceptors.response.use((res) => {
  const { data } = res;
  return data.data;
});
export const get = (path, config) => {
  return instance.get(path, { ...config });
};
export const post = (path, data, config) => {
  return instance.post(path, data, config);
};
