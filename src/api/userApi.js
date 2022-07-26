// import baseApiRequest from "./baseApiRequest";
import axios from "axios";

const userApi = {
  addToFavorites(payload) {
    const url = `http://localhost:3001/user/add_to_favorites`;
    return axios.post(url, payload);
  },
  listFavorites(payload) {
    const url = `http://localhost:3001/movie/list_movies`;
    return axios.post(url, payload);
  }
};

export default userApi;