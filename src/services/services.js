import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

export const api = {
  get(url) {
    return axiosInstance.get(url);
  },
  post(endpoint, body) {
    return axiosInstance.post(endpoint, body);
  },
  delete(endpoint) {
    return axiosInstance.delete(endpoint);
  },
};

export function getcep(cep) {
  return axios.get(`https://viacep.com.br/ws/${cep}/json/`);
}
