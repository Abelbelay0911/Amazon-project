import axios from "axios";
// make only one of the api versions on and comment out the others

const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-7fd3d/us-central1/api",
 baseURL: "https://us-central1-clone-7fd3d.cloudfunctions.net/api",
});

export { axiosInstance };
