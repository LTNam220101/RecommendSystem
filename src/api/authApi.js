// import baseApiRequest from "./baseApiRequest";
import axios from "axios";

const authApi = {
  login(payload) {
    const url = `http://localhost:3001/login/`;
    return axios.post(url, { ...payload, TYPE: 'LO' });
  },
  register(payload) {
    const url = `http://localhost:3001/login/`;
    return axios.post(url, { ...payload, TYPE: 'RE' });
  }
};

export default authApi;