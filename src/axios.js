import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-c3a76.cloudfunctions.net/api", //"http://localhost:5001/clone-c3a76/us-central1/api",
});

export default instance;
