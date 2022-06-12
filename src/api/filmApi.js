// import baseApiRequest from "./baseApiRequest";
import axios from "axios";

const filmApi = {
  getAll() {
    const url = `http://localhost:3001/movie/`;
    return axios.get(url);
  },
  getDetail(id) {
    const url = `http://localhost:3001/movie/${id}`;
    return axios.get(url)
  }
};

export default filmApi;