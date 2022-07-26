// import baseApiRequest from "./baseApiRequest";
import { getRatingUtilityClass } from "@mui/material";
import axios from "axios";

const filmApi = {
  getAll(payload) {
    console.log(payload);
    let url = `http://localhost:3001/movie`;
    if(payload && payload.search){
      url = url + `?name=${payload.search}`;
    }
    return axios.get(url);
  },
  getDetail(id) {
    const url = `http://localhost:3001/movie/${id}`;
    const url2 = `http://localhost:3001/movie/update_count/${id}`;
    axios.get(url2);
    return axios.get(url)
  },
  addRating(payload) {
    const url = `http://localhost:3001/rating`;
    axios.post(url, {rating: payload})
  },

  getRating(payload) {
    const url = `http://localhost:3001/rating/get_rating`;
    return axios.post(url, payload);

  }
};

export default filmApi;