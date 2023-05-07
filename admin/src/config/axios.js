import axios from "axios"

export default function configureAxios(store) {
  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
}
