import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

export const api = {
  get(url) {
    return axiosInstance.get(url);
  },
};

export function getcep(cep) {
  return axios.get(`https://viacep.com.br/ws/${cep}/json/`);
}
